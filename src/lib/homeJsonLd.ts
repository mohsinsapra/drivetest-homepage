import { jsonLd } from "@/content/site";
import type { Lang } from "@/lib/i18n";

/** Structured data for the home page (the FAQ lives on the support page, not here). */
export function homeJsonLd(_lang: Lang) {
  return [jsonLd.website, jsonLd.organization];
}
