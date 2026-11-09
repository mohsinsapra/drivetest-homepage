import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { guide } from "@/content/guide";
import { getLanding } from "@/content/landing";
import { getArticle } from "@/content/articles";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Prose from "@/components/ui/Prose";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import RelatedLinks from "@/components/article/RelatedLinks";
import { estimateReadingMinutes } from "@/components/article/readingTime";
import { AppCta } from "@/components/landing/Blocks";
import { landingImage } from "@/components/landing/heroImages";
import { L } from "@/components/landing/labels";
import { tocFromHtml } from "@/components/landing/toc";
import Faq from "@/components/article/Faq";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seoJsonLd";
import styles from "./Article.module.css";

export default function GuideScreen({ lang }: { lang: Lang }) {
  const g = guide[lang];
  const t = L[lang];
  const readingMinutes = estimateReadingMinutes([g.contentHtml]);
  const { html, items } = tocFromHtml(g.contentHtml);
  const toc = [...items, { id: "faq", label: t.faq }];
  const ctaTitle = lang === "en" ? "Prepare with Drive Test" : "Förbered dig med Drive Test";
  const ctaBody =
    lang === "en"
      ? "Here you practise for every exam in this guide, with explanations and progress tracking."
      : "Här övar du inför varje prov i den här guiden, med förklaringar och framstegsspårning.";

  return (
    <>
      <SiteHeader lang={lang} currentPath="/taxi-licence-guide/" />
      <JsonLd data={faqJsonLd(lang, g.faq)} />
      <main id="main">
        <ArticleHero
          lang={lang}
          crumbs={[{ label: t.home, href: localePath(lang, "/") }, { label: g.headerTitle }]}
          title={g.headerTitle}
          lead={g.headerSubtitle}
          meta={
            <span>
              {g.updatedLabel} · {readingMinutes} {t.minRead}
            </span>
          }
          image={landingImage("exams/taxi-licence", lang)}
          toc={toc}
          tocTitle={t.onThisPage}
        />
        <ArticleLayout>
          <div className={styles.main}>
            <Prose html={html} />
            <section id="faq">
              <h2>{t.faq}</h2>
              <Faq items={g.faq} />
            </section>
            <AppCta lang={lang} title={ctaTitle} body={ctaBody} />
            <RelatedLinks
              title={t.related}
              items={[
                { href: localePath(lang, "/exams/taxi-licence/"), label: getLanding("exams/taxi-licence")![lang].title },
                ...["taxi-licence-cost-sweden", "taxi-licence-exam-questions", "how-to-pass-taxi-licence-test", "taxi-licence-medical-requirements"].map((slug) => ({
                  href: localePath(lang, `/blog/${slug}/`),
                  label: getArticle(slug)![lang].title,
                })),
              ]}
            />
          </div>
        </ArticleLayout>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
