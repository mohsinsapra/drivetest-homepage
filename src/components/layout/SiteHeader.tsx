import type { Lang } from "@/lib/i18n";
import { buildSearchIndex } from "@/lib/searchIndex";
import HeaderClient from "./HeaderClient";
import SiteNotice from "./SiteNotice";

/**
 * Server wrapper: the temporary site-wide banner, then the client header with
 * the (small) static search index for this language.
 */
export default function SiteHeader({ lang, currentPath = "/" }: { lang: Lang; currentPath?: string }) {
  return (
    <>
      <SiteNotice lang={lang} />
      <HeaderClient lang={lang} currentPath={currentPath} index={buildSearchIndex(lang)} />
    </>
  );
}
