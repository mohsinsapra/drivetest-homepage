import type { Lang } from "@/lib/i18n";
import { buildSearchIndex } from "@/lib/searchIndex";
import HeaderClient from "./HeaderClient";

/** Server wrapper: builds the (small) static search index for this language and hands it to the client header. */
export default function SiteHeader({ lang, currentPath = "/" }: { lang: Lang; currentPath?: string }) {
  return <HeaderClient lang={lang} currentPath={currentPath} index={buildSearchIndex(lang)} />;
}
