import type { Metadata } from "next";
import { localePath, absoluteUrl, type Lang } from "./i18n";

/**
 * Build canonical + hreflang + OG metadata for a language-neutral path
 * (e.g. "/blog/", "/" — no /sv/ prefix).
 */
export function buildMetadata({
  lang,
  path,
  title,
  description,
}: {
  lang: Lang;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = absoluteUrl(localePath(lang, path));
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(localePath("en", path)),
        sv: absoluteUrl(localePath("sv", path)),
        "x-default": absoluteUrl(localePath("en", path)),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: ["/assets/og-image.png"],
      type: "website",
    },
  };
}
