import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { guide } from "@/content/guide";
import { getLanding } from "@/content/landing";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import { Section } from "@/components/ui/Section";
import Prose from "@/components/ui/Prose";
import ArticleHero from "@/components/article/ArticleHero";
import AutoToc from "@/components/article/AutoToc";
import RelatedLinks from "@/components/article/RelatedLinks";
import { getArticle } from "@/content/articles";
import CtaCard from "@/components/article/CtaCard";
import StoreButtons from "@/components/layout/StoreButtons";
import { estimateReadingMinutes } from "@/components/article/readingTime";
import styles from "./Article.module.css";

export default function GuideScreen({ lang }: { lang: Lang }) {
  const g = guide[lang];
  const readingMinutes = estimateReadingMinutes([g.contentHtml]);
  const readLabel = lang === "en" ? `${readingMinutes} min read` : `${readingMinutes} min läsning`;
  const ctaTitle = lang === "en" ? "Prepare with Drive Test" : "Förbered dig med Drive Test";
  const ctaBody =
    lang === "en"
      ? "Practice tests for every exam in this guide, with detailed explanations and progress tracking."
      : "Övningsprov för varje prov i den här guiden, med detaljerade förklaringar och framstegsspårning.";

  return (
    <>
      <SiteHeader lang={lang} currentPath="/taxi-licence-guide/" />
      <main>
        <ArticleHero
          title={g.headerTitle}
          lead={g.headerSubtitle}
          meta={<span>{readLabel}</span>}
          backHref={localePath(lang, "/")}
          backLabel={g.back.replace(/^←\s*/, "")}
        />
        <Section>
          <AutoToc title={lang === "en" ? "On this page" : "På den här sidan"}>
            <div className={styles.section}>
              <Prose html={g.contentHtml} />
            </div>
          </AutoToc>

          <CtaCard title={ctaTitle} body={ctaBody}>
            <StoreButtons mini />
          </CtaCard>

          <RelatedLinks
            title={lang === "en" ? "Related" : "Relaterat"}
            items={[
              {
                href: localePath(lang, "/exams/taxi-licence/"),
                tag: lang === "en" ? "Exam" : "Prov",
                label: getLanding("exams/taxi-licence")![lang].title,
              },
              ...["taxi-licence-cost-sweden", "taxi-licence-exam-questions", "how-to-pass-taxi-licence-test", "taxi-licence-medical-requirements"].map((slug) => {
                const a = getArticle(slug)![lang];
                return { href: localePath(lang, `/blog/${slug}/`), tag: a.tag, label: a.title };
              }),
            ]}
          />
        </Section>
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock />
    </>
  );
}
