import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath, alternatePath } from "@/lib/i18n";
import { privacy } from "@/content/privacy";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Prose from "@/components/ui/Prose";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import { L } from "@/components/landing/labels";
import { tocFromHtml } from "@/components/landing/toc";
import styles from "./Article.module.css";
import docStyles from "./Doc.module.css";

export default function PrivacyScreen({ lang }: { lang: Lang }) {
  const p = privacy[lang];
  const t = L[lang];
  const { html, items } = tocFromHtml(p.contentHtml);
  return (
    <>
      <SiteHeader lang={lang} currentPath="/privacy-policy/" />
      <main id="main">
        <ArticleHero
          lang={lang}
          crumbs={[{ label: t.home, href: localePath(lang, "/") }, { label: p.title }]}
          title={p.title}
          lead={p.subtitle}
          meta={
            <div className={docStyles.meta}>
              <Link href={localePath(lang, "/")}>{p.back}</Link>
              <Link href={alternatePath(lang, "/privacy-policy/")}>{p.langLink}</Link>
            </div>
          }
          toc={items}
          tocTitle={t.onThisPage}
        />
        <ArticleLayout>
          <div className={styles.main}>
            <Prose html={html} />
          </div>
        </ArticleLayout>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
