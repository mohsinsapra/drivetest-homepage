// AUTO-PORTED from legacy blog/index.html + blog/sv/index.html

import { articles } from "./articles";

export interface BlogPost {
  title: string;
  tag: string;
  excerpt: string;
  href: string;
  cover: string;
}

/** Posts derived from the article modules (newest first), so copy lives in one place. */
const articlePosts = (lang: "en" | "sv"): BlogPost[] =>
  [...articles]
    .sort((a, b) => b[lang].lastUpdated.localeCompare(a[lang].lastUpdated))
    .map((a) => ({
      title: a[lang].title,
      tag: a[lang].tag,
      excerpt: a[lang].excerpt,
      href: lang === "en" ? `/blog/${a.slug}/` : `/sv/blog/${a.slug}/`,
      cover: a[lang].cover,
    }));

export const blog = {
  en: {
    eyebrow: "Drive Test · Blog",
    title: "Articles for taxi drivers in Sweden",
    lede: "Articles about taxi pay, the Vilotidsrapport, OB supplements and how to get your taxi licence.",
    metaTitle: "Blog – Taxi licence, exams & pay in Sweden | Drive Test",
    metaDescription:
      "Guides and articles for taxi drivers in Sweden: OB pay, the Vilotidsrapport, the taxi licence exam and more.",
    posts: [
      ...articlePosts("en"),
      {
        title: "Swedish Citizenship Test 2026 — requirements & the medborgarskapsprov",
        tag: "Citizenship",
        excerpt:
          "The new citizenship rules from June 2026, the six requirements to become a Swedish citizen, and how to prepare for the medborgarskapsprov starting August 2026.",
        href: "/medborgarskapsprov/",
        cover: "/assets/blog/ob-permit-paperwork.jpg",
      },
      {
        title: "Taxi OB Calculator Sweden — what OB is & how to calculate it",
        tag: "Taxi pay",
        excerpt:
          "What OB (obekväm arbetstid) means, how OB1 and OB2 are worked out from your Vilotidsrapport, why it matters for your work permit, and a free calculator to price it.",
        href: "/ob-taxi-sweden/",
        cover: "/assets/blog/ob-taxi-driving.jpg",
      },
    ] as BlogPost[],
  },
  sv: {
    eyebrow: "Drive Test · Blogg",
    title: "Artiklar för taxiförare i Sverige",
    lede: "Artiklar om taxilön, vilotidsrapporten, OB-tillägg och hur du får taxiförarlegitimation.",
    metaTitle: "Blogg – Taxilegitimation, prov & lön i Sverige | Drive Test",
    metaDescription:
      "Guider och artiklar för taxiförare i Sverige: OB-ersättning, vilotidsrapporten, taxiförarlegitimation med mera.",
    posts: [
      ...articlePosts("sv"),
      {
        title: "Medborgarskapsprovet 2026 — krav & hur du förbereder dig",
        tag: "Medborgarskap",
        excerpt:
          "De nya reglerna för svenskt medborgarskap från juni 2026, de sex kraven för att bli svensk medborgare, och hur du förbereder dig inför medborgarskapsprovet från augusti 2026.",
        href: "/sv/medborgarskapsprov/",
        cover: "/assets/blog/ob-permit-paperwork.jpg",
      },
      {
        title: "Taxi OB-kalkylator Sverige — vad OB är & hur du räknar ut det",
        tag: "Taxilön",
        excerpt:
          "Vad OB (obekväm arbetstid) betyder, hur OB1 och OB2 räknas ut från din vilotidsrapport, varför det spelar roll för ditt arbetstillstånd, och en gratis kalkylator.",
        href: "/sv/ob-taxi-sweden/",
        cover: "/assets/blog/ob-taxi-driving.jpg",
      },
    ] as BlogPost[],
  },
};
