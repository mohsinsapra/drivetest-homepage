import type { MetadataRoute } from "next";
import { absoluteUrl, localePath } from "@/lib/i18n";
import { landingPages } from "@/content/landing";
import { articles } from "@/content/articles";

export const dynamic = "force-static";

const PATHS = [
  "/",
  "/blog/",
  "/ob-taxi-sweden/",
  "/medborgarskapsprov/",
  "/taxi-licence-guide/",
  "/support/",
  "/privacy-policy/",
  "/delete-account/",
  ...landingPages.map((p) => `/${p.slug}/`),
  ...articles.map((a) => `/blog/${a.slug}/`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const path of PATHS) {
    for (const lang of ["en", "sv"] as const) {
      entries.push({
        url: absoluteUrl(localePath(lang, path)),
        alternates: {
          languages: {
            en: absoluteUrl(localePath("en", path)),
            sv: absoluteUrl(localePath("sv", path)),
          },
        },
      });
    }
  }
  return entries;
}
