import { absoluteUrl, localePath, type Lang } from "./i18n";

const stripTags = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

export function faqJsonLd(lang: Lang, items: { q: string; aHtml: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: stripTags(item.aHtml) },
    })),
  };
}

/** crumbs: language-neutral paths ("/", "/compare/") with display names. */
export function breadcrumbJsonLd(lang: Lang, crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(localePath(lang, c.path)),
    })),
  };
}

export function articleJsonLd(
  lang: Lang,
  a: { path: string; headline: string; description: string; dateModified: string; image: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    inLanguage: lang,
    dateModified: a.dateModified,
    datePublished: a.dateModified,
    image: absoluteUrl(a.image),
    author: { "@type": "Organization", name: "Drive Test" },
    publisher: {
      "@type": "Organization",
      name: "Drive Test",
      logo: { "@type": "ImageObject", url: absoluteUrl("/assets/icon.png") },
    },
    mainEntityOfPage: absoluteUrl(localePath(lang, a.path)),
  };
}
