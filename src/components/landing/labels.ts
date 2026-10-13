import type { Lang } from "@/lib/i18n";

/** Shared UI labels for subpages (Trafikverket-style wording). */
export const L = {
  en: {
    home: "Home",
    onThisPage: "On this page",
    related: "More pages in this topic",
    lastUpdated: "Last updated",
    faq: "Common questions",
    sources: "Sources",
    sourcesNote: "Figures and rules were checked against these official pages. Always confirm current details with the authority.",
    minRead: "min read",
    blog: "Blog",
    exams: "Exams",
    compare: "Compare",
    guide: "Guide",
    article: "Article",
    exam: "Exam",
    audience: "For",
    glance: "In brief",
    compareAll: "Compare the options",
    readComparison: "Read the comparison",
    practise: "Practise in the app",
    ctaButtons: { play: "Google Play", ios: "App Store" },
    allArticles: "All articles",
    tools: "Tools",
    contactUs: "Contact us",
    allContact: "All contact details",
    skip: "Skip to content",
  },
  sv: {
    home: "Startsida",
    onThisPage: "På denna sida",
    related: "Fler sidor inom ämnet",
    lastUpdated: "Senast uppdaterad",
    faq: "Vanliga frågor",
    sources: "Källor",
    sourcesNote: "Uppgifter och regler är kontrollerade mot dessa officiella sidor. Kontrollera alltid aktuella uppgifter hos myndigheten.",
    minRead: "min läsning",
    blog: "Blogg",
    exams: "Prov",
    compare: "Jämför",
    guide: "Guide",
    article: "Artikel",
    exam: "Prov",
    audience: "För",
    glance: "I korthet",
    compareAll: "Jämför alternativen",
    readComparison: "Läs jämförelsen",
    practise: "Öva i appen",
    ctaButtons: { play: "Google Play", ios: "App Store" },
    allArticles: "Alla artiklar",
    tools: "Verktyg",
    contactUs: "Kontakta oss",
    allContact: "Till alla kontaktuppgifter",
    skip: "Till innehållet",
  },
} as const;

const MONTHS = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  sv: ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."],
} as const;

/** "2026-10-13" -> "13 October 2026" / "13 okt. 2026" */
export function formatDate(lang: Lang, iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return iso;
  return `${Number(m[3])} ${MONTHS[lang][Number(m[2]) - 1]} ${m[1]}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\såäö-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);
}
