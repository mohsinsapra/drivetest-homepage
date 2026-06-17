// Taxi OB calculator — deterministic. Direct port of calc.py (already tested).
// Work = gaps between rest periods; slices split at 06:00/19:00/midnight; OB1/OB2/normal.
const OB_RATES = { ob1: 31.58, ob2: 52.79 };

function parseDate(s) { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }

function parseDT(dateStr, hhmm) {
  const base = parseDate(dateStr);
  if (String(hhmm).trim() === '24:00') { const d = new Date(base); d.setDate(d.getDate() + 1); return d; }
  const [h, mi] = String(hhmm).trim().split(':').map(Number);
  const d = new Date(base); d.setHours(h, mi, 0, 0); return d;
}

function loadRests(entries) {
  const rests = [];
  for (const e of entries) for (const [a, b] of (e.rests || [])) {
    let start = parseDT(e.date, a), end = parseDT(e.date, b);
    if (end <= start) end = new Date(end.getTime() + 86400000);
    rests.push([start, end]);
  }
  rests.sort((x, y) => x[0] - y[0]);
  return rests;
}

function subtract(ws, we, rests) {
  const work = []; let cur = new Date(ws);
  for (const [rs, re] of rests) {
    if (re <= cur || rs >= we) continue;
    if (rs > cur) work.push([new Date(cur), new Date(Math.min(rs, we))]);
    if (re > cur) cur = new Date(Math.max(cur, re));
    if (cur >= we) break;
  }
  if (cur < we) work.push([new Date(cur), new Date(we)]);
  return work.filter(([a, b]) => b > a);
}

function nextBoundary(dt) {
  const cands = [];
  for (const days of [0, 1]) for (const hh of [0, 6, 19]) {
    const b = new Date(dt); b.setHours(0, 0, 0, 0); b.setDate(b.getDate() + days); b.setHours(hh);
    if (b > dt) cands.push(b.getTime());
  }
  return new Date(Math.min(...cands));
}

function dstr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Classify a slice that does not cross 06:00/19:00/midnight. JS getDay(): Sun=0..Sat=6
function classify(start, holidays) {
  const dow = start.getDay();
  const mins = start.getHours() * 60 + start.getMinutes();
  const isHol = d => holidays.has(dstr(d));
  if (mins >= 360 && mins < 1140) {            // 06:00-19:00 daytime
    if (isHol(start) || dow === 6 || dow === 0) return 'OB1'; // Sat/Sun/holiday day
    return 'NORMAL';
  }
  let E = new Date(start); E.setHours(0, 0, 0, 0);
  if (mins < 1140) E.setDate(E.getDate() - 1);  // 00:00-06:00 belongs to previous evening
  const Edow = E.getDay();
  const Enext = new Date(E); Enext.setDate(Enext.getDate() + 1);
  const ob2 = Edow === 5 || Edow === 6 || Edow === 0 || isHol(E) || isHol(Enext); // Fri/Sat/Sun/holiday/holiday-eve
  return ob2 ? 'OB2' : 'OB1';
}

// Split ONE work interval into per-band minutes (no row output).
// override (optional 'OB1'|'OB2'|'NORMAL') forces the whole interval into one band.
function splitInterval(a, b, holidays, override) {
  const t = { OB1: 0, OB2: 0, NORMAL: 0 };
  if (!(b > a)) return t;
  if (override) { t[override] = Math.round((b - a) / 60000); return t; }
  let cur = new Date(a);
  while (cur < b) {
    let nb = nextBoundary(cur); if (nb > b) nb = new Date(b);
    t[classify(cur, holidays)] += Math.round((nb - cur) / 60000); cur = nb;
  }
  return t;
}

// Classify a set of raw work intervals -> band-split rows + totals.
// An interval may carry an optional 3rd element = manual band override.
function classifyIntervals(intervals, holidays) {
  const totals = { OB1: 0, OB2: 0, NORMAL: 0 }, rows = [];
  const sorted = [...intervals].sort((x, y) => x[0] - y[0]);
  for (const iv of sorted) {
    const a = iv[0], b = iv[1], override = iv[2];
    if (!(b > a)) continue;
    if (override) {                                  // manual override -> single segment
      const mins = Math.round((b - a) / 60000);
      totals[override] += mins; rows.push([new Date(a), new Date(b), override, mins]);
      continue;
    }
    let cur = new Date(a);
    while (cur < b) {
      let nb = nextBoundary(cur); if (nb > b) nb = new Date(b);
      const band = classify(cur, holidays);
      const mins = Math.round((nb - cur) / 60000);
      totals[band] += mins; rows.push([new Date(cur), new Date(nb), band, mins]); cur = nb;
    }
  }
  return { rows, totals };
}

function compute(cfg) {
  const holidays = new Set(cfg.holidays || []);
  const rates = Object.assign({}, OB_RATES, cfg.rates || {});
  let intervals;
  if (cfg.work && cfg.work.length) {
    // direct work-interval mode (used by the editable timeline write-back)
    intervals = cfg.work.map(w => {
      const a = Array.isArray(w) ? w[0] : w.from, b = Array.isArray(w) ? w[1] : w.to;
      const ov = Array.isArray(w) ? w[2] : w.band;
      const iv = [new Date(String(a).replace(' ', 'T')), new Date(String(b).replace(' ', 'T'))];
      if (ov) iv.push(ov);
      return iv;
    });
  } else {
    const rests = loadRests(cfg.entries);
    const ws = cfg.window_start ? new Date(cfg.window_start.replace(' ', 'T')) : rests[0][1];
    const we = cfg.window_end ? new Date(cfg.window_end.replace(' ', 'T')) : rests[rests.length - 1][0];
    intervals = subtract(ws, we, rests);
  }
  const { rows, totals } = classifyIntervals(intervals, holidays);
  return { rows, totals, rates, intervals, holidays };
}

// Merge consecutive rows of the same band (rests between are excluded from time).
function mergeSameBand(rows) {
  const m = [];
  for (const r of rows) {
    const last = m[m.length - 1];
    if (last && last[2] === r[2]) { last[1] = r[1]; last[3] += r[3]; }
    else m.push([...r]);
  }
  return m;
}

const fmt = mins => `${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, '0')}`;

if (typeof module !== 'undefined')
  module.exports = { compute, classifyIntervals, splitInterval, mergeSameBand, fmt, OB_RATES };
