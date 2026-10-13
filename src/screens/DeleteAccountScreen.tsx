import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { deleteAccount } from "@/content/deleteAccount";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Prose from "@/components/ui/Prose";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import { L } from "@/components/landing/labels";
import { tocFromHtml } from "@/components/landing/toc";
import styles from "./Article.module.css";

export default function DeleteAccountScreen({ lang }: { lang: Lang }) {
  const d = deleteAccount[lang];
  const t = L[lang];
  const { html, items } = tocFromHtml(d.contentHtml);
  return (
    <>
      <SiteHeader lang={lang} currentPath="/delete-account/" />
      <main id="main">
        <ArticleHero
          lang={lang}
          crumbs={[{ label: t.home, href: localePath(lang, "/") }, { label: d.title }]}
          title={d.title}
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
