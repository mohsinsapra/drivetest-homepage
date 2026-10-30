// llms.txt (https://llmstxt.org) and llms-full.txt, generated at build time from the site's own
// content modules (articles, landing pages, guides), so every new article appears automatically.

import { articles } from "@/content/articles";
import type { ArticleSection } from "@/content/obTaxiSweden";
import { obTaxiSweden } from "@/content/obTaxiSweden";
import { medborgarskapsprov } from "@/content/medborgarskapsprov";
import { guide } from "@/content/guide";
import { faq as homeFaq, pricing } from "@/content/home";
import { landingPages } from "@/content/landing";
import { absoluteUrl, localePath, type Lang } from "@/lib/i18n";
import { urls } from "@/content/site";

const url = (lang: Lang, path: string) => absoluteUrl(localePath(lang, path));

export const TEXT_HEADERS = { "Content-Type": "text/plain; charset=utf-8" };

/** HTML snippet to readable plain text. */
export function htmlToText(html: string): string {
  return html
    .replace(/<\s*br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h[1-6]|ul|ol|table|blockquote)>/gi, "\n\n")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<\/(td|th)>/gi, " | ")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_m, href: string, text: string) =>
      href.startsWith("/") ? `${text} (${absoluteUrl(href)})` : href.startsWith("http") ? `${text} (${href})` : text,
    )
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&rsaquo;/g, "›")
    .replace(/&lsaquo;/g, "‹")
    .replace(/&raquo;/g, "»")
    .replace(/&laquo;/g, "«")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&hellip;/g, "…")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/ \| \n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

interface Doc {
  title: string;
  url: string;
  description: string;
  /** Full plain-text body (llms-full.txt). */
  body: () => string;
}

function sectionsText(sections: ArticleSection[]): string {
  return sections
    .map((s) => {
      const parts: string[] = [];
      if (s.heading) parts.push(`## ${s.heading}`);
      if (s.html) parts.push(htmlToText(s.html));
      if (s.table) {
        parts.push(s.table.headers.join(" | "));
        for (const r of s.table.rows) parts.push(r.cells.map(htmlToText).join(" | "));
      }
      if (s.list) parts.push(s.list.items.map((it, i) => `${s.list?.ordered ? `${i + 1}.` : "-"} ${htmlToText(it)}`).join("\n"));
      if (s.card) parts.push(`${s.card.title}\n${htmlToText(s.card.html)}`);
      if (s.alert) parts.push(`${s.alert.title}\n${htmlToText(s.alert.html)}${s.alert.list ? `\n${s.alert.list.map((l) => `- ${htmlToText(l)}`).join("\n")}` : ""}`);
      return parts.join("\n\n");
    })
    .filter(Boolean)
    .join("\n\n");
}

const faqText = (items: { q: string; aHtml: string }[]) =>
  items.length ? `## FAQ\n\n${items.map((f) => `Q: ${f.q}\nA: ${htmlToText(f.aHtml)}`).join("\n\n")}` : "";

const clean = (title: string) => title.replace(/\s*\|\s*Drive Test$/, "");

function articleDocs(lang: Lang): Doc[] {
  return [...articles]
    .sort((a, b) => b[lang].lastUpdated.localeCompare(a[lang].lastUpdated))
    .map((a) => {
      const c = a[lang];
      return {
        title: c.title,
        url: url(lang, `/blog/${a.slug}/`),
        description: c.metaDescription,
        body: () =>
          [`Updated: ${c.lastUpdated}`, htmlToText(c.lede), htmlToText(c.intro), sectionsText(c.sections), faqText(c.faq)]
            .filter(Boolean)
            .join("\n\n"),
      };
    });
}

function landingDocs(lang: Lang, kind: "exam" | "audience" | "compare"): Doc[] {
  return landingPages
    .filter((p) => p.kind === kind)
    .map((p) => {
      const c = p[lang];
      return {
        title: clean(c.metaTitle),
        url: url(lang, `/${p.slug}/`),
        description: c.metaDescription,
        body: () =>
          [
            c.title,
            htmlToText(c.lede),
            c.solutions.map((s) => `- ${s.title}: ${s.text}`).join("\n"),
            sectionsText(c.sections.map((s) => ({ heading: s.heading, html: s.html }))),
            c.comparison ? [c.comparison.headers.join(" | "), ...c.comparison.rows.map((r) => r.join(" | "))].join("\n") : "",
            faqText(c.faq),
          ]
            .filter(Boolean)
            .join("\n\n"),
      };
    });
}

function toolDocs(lang: Lang): Doc[] {
  const ob = obTaxiSweden[lang];
  const cz = medborgarskapsprov[lang];
  return [
    {
      title: clean(ob.metaTitle),
      url: url(lang, "/ob-taxi-sweden/"),
      description: ob.metaDescription,
      body: () => [htmlToText(ob.lede), sectionsText(ob.sections), faqText(ob.faq)].filter(Boolean).join("\n\n"),
    },
    {
      title: clean(cz.metaTitle),
      url: url(lang, "/medborgarskapsprov/"),
      description: cz.metaDescription,
      body: () =>
        [
          htmlToText(cz.lede),
          htmlToText(cz.intro),
          cz.sections
            .map((s) =>
              [
                s.heading ? `## ${s.heading}` : "",
                s.html ? htmlToText(s.html) : "",
                s.table ? [s.table.headers.join(" | "), ...s.table.rows.map((r) => r.cells.map(htmlToText).join(" | "))].join("\n") : "",
                s.orderedList ? s.orderedList.map((it, i) => `${i + 1}. ${htmlToText(it)}`).join("\n") : "",
              ]
                .filter(Boolean)
                .join("\n\n"),
            )
            .filter(Boolean)
            .join("\n\n"),
          faqText(cz.faq),
        ]
          .filter(Boolean)
          .join("\n\n"),
    },
    {
      title: guide[lang].headerTitle,
      url: url(lang, "/taxi-licence-guide/"),
      description: guide[lang].headerSubtitle,
      body: () => htmlToText(guide[lang].contentHtml),
    },
  ];
}

const SUMMARY =
  "Drive Test is a practice-exam app for the Swedish taxi driver licence (taxiförarlegitimation) and taxi company licence (yrkeskunnande) exams, " +
  "plus goods and bus (yrkeskunnande) exams, the B-licence theory test and the Swedish citizenship test (medborgarskapsprov). " +
  "It has thousands of exam-style questions with explanations, an AI tutor, text-to-speech in several languages and progress analytics, " +
  "for people preparing for Trafikverket transport exams in Sweden. Some categories are free to try; Premium is 100 SEK per month per category " +
  "(prices may vary, confirm in the app). Available on Android (Google Play) and in the browser at app.drivetest.se; the iOS app is temporarily unavailable on the App Store.";

const FACTS = [
  "Exam-style practice for: taxi driver licence (taxiförarlegitimation), taxi company licence (yrkeskunnande), goods and bus yrkeskunnande, B-licence theory test, Swedish citizenship test.",
  "Study modes: Practice, Custom and Review; explanations for every answer; AI tutor; bookmarks; performance analytics.",
  "Multi-language support with text-to-speech, useful if Swedish is not your first language.",
  `Pricing: ${pricing.en.plans.map((p) => `${p.name} ${p.price}${p.period ? ` ${p.period}` : ""}`).join("; ")}. ${pricing.en.note}`,
  `Platforms: Android (${urls.playStore}) and web app (${urls.webApp}). iOS app is currently unavailable on the App Store.`,
  "Available in English and Swedish (Swedish pages under /sv/).",
  "Free browser tools: a taxi OB calculator (OB1/OB2 pay from a Vilotidsrapport photo) and citizenship test information.",
  "Drive Test is a practice and study aid, not the official exam. The official exams are run by Trafikverket; the taxi licence is issued by Transportstyrelsen.",
  `Support: ${urls.supportEmail}`,
];

function header(): string[] {
  return ["# Drive Test", "", `> ${SUMMARY}`, "", "Key facts:", ...FACTS.map((f) => `- ${f}`), ""];
}

const line = (d: Doc) => `- [${d.title}](${d.url}): ${d.description}`;

const mainPages = (lang: Lang): Doc[] => [
  { title: lang === "en" ? "Home" : "Startsida", url: url(lang, "/"), description: lang === "en" ? "Drive Test: pass taxi, company and transport exams in Sweden." : "Drive Test: klara taxi-, företags- och transportprov i Sverige.", body: () => "" },
  { title: lang === "en" ? "Blog" : "Blogg", url: url(lang, "/blog/"), description: lang === "en" ? "Articles for taxi drivers in Sweden." : "Artiklar för taxiförare i Sverige.", body: () => "" },
  ...toolDocs(lang),
];

export function buildLlmsTxt(): string {
  const out = [...header()];
  const section = (title: string, docs: Doc[]) => out.push(`## ${title}`, "", ...docs.map(line), "");
  section("Pages", mainPages("en"));
  section("Exam practice", landingDocs("en", "exam"));
  section("Who it is for", landingDocs("en", "audience"));
  section("Compare", landingDocs("en", "compare"));
  section("Blog", articleDocs("en"));
  section("Sidor (Svenska)", mainPages("sv"));
  section("Provträning (Svenska)", landingDocs("sv", "exam"));
  section("För vem (Svenska)", landingDocs("sv", "audience"));
  section("Jämför (Svenska)", landingDocs("sv", "compare"));
  section("Blogg (Svenska)", articleDocs("sv"));
  out.push(
    "## Optional",
    "",
    `- [Support](${url("en", "/support/")}): Help and contact.`,
    `- [Privacy policy](${url("en", "/privacy-policy/")}): How personal data is handled.`,
    `- [Delete account](${url("en", "/delete-account/")}): How to delete your account.`,
    `- [Full text of this site](${absoluteUrl("/llms-full.txt")}): every page and article above in one plain-text file.`,
    "",
  );
  return out.join("\n");
}

export function buildLlmsFullTxt(): string {
  const out = [...header()];
  out.push("## Frequently asked questions", "", `Page: ${url("en", "/")}`, "");
  for (const f of homeFaq.en) out.push(`Q: ${f.q}`, `A: ${htmlToText(f.a)}`, "");
  const full = (title: string, docs: Doc[]) => {
    out.push(`## ${title}`, "");
    for (const d of docs) out.push(`### ${d.title}`, "", `URL: ${d.url}`, "", d.body(), "");
  };
  full("Pages", toolDocs("en"));
  full("Exam practice", landingDocs("en", "exam"));
  full("Who it is for", landingDocs("en", "audience"));
  full("Compare", landingDocs("en", "compare"));
  full("Blog", articleDocs("en"));
  full("Sidor (Svenska)", toolDocs("sv"));
  full("Provträning (Svenska)", landingDocs("sv", "exam"));
  full("För vem (Svenska)", landingDocs("sv", "audience"));
  full("Jämför (Svenska)", landingDocs("sv", "compare"));
  full("Blogg (Svenska)", articleDocs("sv"));
  return `${out.join("\n").replace(/\n{3,}/g, "\n\n")}\n`;
}
