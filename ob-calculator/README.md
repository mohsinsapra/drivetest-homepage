# Taxi OB Calculator — web app (Groq, bring-your-own-key)

Upload a Vilotidsrapport photo → **Groq vision** reads the dates/rest times → you
**verify & fix** the parsed JSON → the **OB1/OB2 calculation runs locally** in your
browser (`calc.js`, a tested port of the Python calculator). No server stores anything.

## Files
- `index.html` — the whole app (UI + Groq client + glue).
- `calc.js` — deterministic OB calculator (work = gaps, OB1/OB2 rules). Verified identical to `calc.py`.
- `worker.js` — optional Cloudflare Worker that proxies Groq for CORS (passes the user's key through, stores nothing).

## Run it
Serve the folder over http (browsers block some features on `file://`):
```bash
cd webapp
python3 -m http.server 8000
# open http://localhost:8000
```
Or deploy the folder to any static host (GitHub Pages, Netlify, Cloudflare Pages).

## Use it
1. Paste your **Groq API key** (from console.groq.com). It's stored only in your browser's localStorage; the model dropdown auto-loads your available models.
2. Drop a slip photo → **Read photo** — OR click **✎ Enter JSON manually** to skip the photo and type/paste a config directly.
3. **Check the parsed JSON** — fix any misread digit, remove rows, adjust `window_start`/`window_end`, edit `holidays`.
4. **Calculate** → OB1 table, OB2 table, summary, total pay, and an **editable Work Timeline**.

### Editable Work Timeline
- One row per work period, sorted, with mixed-band breakdown badges.
- Edit **From/To** (datetime) → hours, bands, and all totals recompute instantly.
- **＋ Add period** / **✕** remove; **⤓ CSV** exports the timeline.
- Edits **write back into the JSON box** as a `work` config, so re-**Calculate** stays in sync.

## Config formats (JSON box)
Two interchangeable shapes — both accept `holidays` + `rates`:
- **Rest-based** (from photos): `{ "entries":[{"date","rests":[["HH:MM","HH:MM"]]}], "window_start","window_end" }` — work = gaps between rests.
- **Work-based** (timeline write-back): `{ "work":[["YYYY-MM-DD HH:MM","YYYY-MM-DD HH:MM"], ...] }` — intervals are the work directly.

## CORS / the Worker
Groq usually rejects direct browser calls (CORS). If "Read photo" fails with a CORS/network error:
1. Create a free Worker at workers.cloudflare.com, paste `worker.js`, deploy.
2. Put the Worker URL in the app's **API endpoint** field.
The Worker only forwards your request + key to Groq and adds CORS headers — it keeps nothing.

## Notes
- Open vision models misread handwriting more than premium models — the verify step matters. The math is always exact.
- Holidays are a built-in Swedish list (2026) in `index.html`; extend `HOLIDAYS` for other years.
- Default rates: OB1 31.58, OB2 52.79 SEK/h (editable in the JSON box).
- "Calculate only for May": delete non-May rows and set `window_start` to `2026-05-01 00:00`.
