import { jsonLd } from "@/content/site";
import { faq } from "@/content/home";
import { absoluteUrl, localePath, type Lang } from "@/lib/i18n";

const stripTags = (s: string) => s.replace(/<[^>]+>/g, "").trim();

export function homeJsonLd(lang: Lang) {
  return [
    jsonLd.website,
    jsonLd.organization,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      url: absoluteUrl(localePath(lang, "/")),
      mainEntity: faq[lang].map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: stripTags(item.a) },
      })),
    },
  ];
}
