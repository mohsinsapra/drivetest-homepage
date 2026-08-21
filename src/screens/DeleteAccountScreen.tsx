import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { deleteAccount } from "@/content/deleteAccount";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import { Section } from "@/components/ui/Section";
import Prose from "@/components/ui/Prose";
import ArticleHero from "@/components/article/ArticleHero";
import docStyles from "./Doc.module.css";

export default function DeleteAccountScreen({ lang }: { lang: Lang }) {
  const d = deleteAccount[lang];
  return (
    <>
      <SiteHeader lang={lang} currentPath="/delete-account/" />
      <main>
        <ArticleHero title={d.title} backHref={localePath(lang, "/")} backLabel={d.back} />
        <Section>
          <div className={docStyles.wrap}>
            <Prose html={d.contentHtml} />
          </div>
        </Section>
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock />
    </>
  );
}
