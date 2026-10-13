import type { Lang } from "./i18n";
import { localePath } from "./i18n";
import { landingPages } from "@/content/landing";
import { articles } from "@/content/articles";
import { medborgarskapsprov } from "@/content/medborgarskapsprov";
import { obTaxiSweden } from "@/content/obTaxiSweden";
import { guide } from "@/content/guide";
import { support } from "@/content/support";

export interface SearchEntry {
  title: string;
  text: string;
  href: string;
  kind: string;
}

const strip = (s: string) => s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const clip = (s: string, n = 220) => (s.length > n ? `${s.slice(0, n).trimEnd()}…` : s);

const kinds = {
  en: { exam: "Exam", audience: "For you", compare: "Compare", article: "Article", guide: "Guide", tool: "Tool", page: "Page" },
  sv: { exam: "Prov", audience: "För dig", compare: "Jämför", article: "Artikel", guide: "Guide", tool: "Verktyg", page: "Sida" },
};

/** Lean, serialisable search index (titles + short summaries only) for one language. Build on the server. */
export function buildSearchIndex(lang: Lang): SearchEntry[] {
  const k = kinds[lang];
  const out: SearchEntry[] = [];

  for (const p of landingPages) {
    const c = p[lang];
    out.push({
      title: [c.title, c.titleAccent].filter(Boolean).join(" "),
      text: clip(strip(c.lede)),
      href: localePath(lang, `/${p.slug}/`),
      kind: k[p.kind],
    });
  }
  for (const a of articles) {
    const c = a[lang];
    out.push({
      title: c.title,
      text: clip(`${c.tag}. ${strip(c.excerpt)}`),
      href: localePath(lang, `/blog/${a.slug}/`),
      kind: k.article,
    });
  }
  const m = medborgarskapsprov[lang];
  out.push({ title: m.title, text: clip(strip(m.lede)), href: localePath(lang, "/medborgarskapsprov/"), kind: k.article });
  const ob = obTaxiSweden[lang];
  out.push({ title: ob.title, text: clip(strip(ob.lede)), href: localePath(lang, "/ob-taxi-sweden/"), kind: k.article });
  out.push({
    title: guide[lang].headerTitle,
    text: clip(strip(guide[lang].headerSubtitle)),
    href: localePath(lang, "/taxi-licence-guide/"),
    kind: k.guide,
  });
  out.push({
    title: lang === "sv" ? "OB-kalkylator" : "OB Calculator",
    text: lang === "sv" ? "Räkna ut OB1 och OB2 från din vilotidsrapport." : "Work out OB1 and OB2 pay from your Vilotidsrapport.",
    href: "/ob-calculator/",
    kind: k.tool,
  });
  const s = support[lang] as Record<string, string>;
  out.push({
    title: lang === "sv" ? "Support" : "Support",
    text: clip(strip(s.support_hero_subtitle ?? "")),
    href: localePath(lang, "/support/"),
    kind: k.page,
  });
  out.push({
    title: lang === "sv" ? "Integritetspolicy" : "Privacy policy",
    text: lang === "sv" ? "Hur Drive Test hanterar dina personuppgifter." : "How Drive Test handles your personal data.",
    href: localePath(lang, "/privacy-policy/"),
    kind: k.page,
  });
  return out;
}

export function searchEntries(index: SearchEntry[], query: string, limit = 8): SearchEntry[] {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  const scored: { e: SearchEntry; score: number }[] = [];
  for (const e of index) {
    const t = e.title.toLowerCase();
    const x = `${e.text} ${e.kind}`.toLowerCase();
    let score = 0;
    let ok = true;
    for (const tok of tokens) {
      const inT = t.includes(tok);
      const inX = x.includes(tok);
      if (!inT && !inX) {
        ok = false;
        break;
      }
      score += (inT ? 3 : 0) + (inX ? 1 : 0) + (t.startsWith(tok) ? 1 : 0);
    }
    if (ok) scored.push({ e, score });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.e);
}
