import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath, alternatePath } from "@/lib/i18n";
import { privacy } from "@/content/privacy";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import { Section } from "@/components/ui/Section";
import Prose from "@/components/ui/Prose";
import ArticleHero from "@/components/article/ArticleHero";
import docStyles from "./Doc.module.css";

export default function PrivacyScreen({ lang }: { lang: Lang }) {
  const p = privacy[lang];
  return (
    <>
      <SiteHeader lang={lang} currentPath="/privacy-policy/" />
      <main>
        <ArticleHero
          title={p.title}
          lead={p.subtitle}
          meta={
            <div className={docStyles.metaRow}>
              <Link href={localePath(lang, "/")}>{p.back}</Link>
              <span className={docStyles.sep}>·</span>
              <Link href={alternatePath(lang, "/privacy-policy/")}>{p.langLink}</Link>
            </div>
          }
        />
        <Section>
          <div className={docStyles.wrap}>
            <Prose html={p.contentHtml} />
          </div>
        </Section>
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock />
    </>
  );
}
