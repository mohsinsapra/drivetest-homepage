import JsonLd from "@/components/seo/JsonLd";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { medborgarskapsprov, medborgarskapsprovJsonLd } from "@/content/medborgarskapsprov";
import { blog } from "@/content/blog";
import { urls } from "@/content/site";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Prose from "@/components/ui/Prose";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import type { TocItem } from "@/components/article/Toc";
import Faq from "@/components/article/Faq";
import DataTable from "@/components/article/DataTable";
import Steps from "@/components/article/Steps";
import CtaCard, { CtaButton } from "@/components/article/CtaCard";
import RelatedLinks from "@/components/article/RelatedLinks";
import { estimateReadingMinutes } from "@/components/article/readingTime";
import { AppCta, LastUpdated } from "@/components/landing/Blocks";
import Chevron from "@/components/landing/Chevron";
import { L, slugify } from "@/components/landing/labels";
import styles from "./Article.module.css";

export default function MedborgarskapsprovScreen({ lang }: { lang: Lang }) {
  const a = medborgarskapsprov[lang];
  const b = blog[lang];
  const t = L[lang];

  const toc: TocItem[] = a.sections
    .filter((s) => s.heading)
    .map((s) => ({ id: slugify(s.heading as string), label: s.heading as string }));
  toc.push({ id: "faq", label: t.faq });
  toc.push({ id: "sources", label: t.sources });

  const readingMinutes = estimateReadingMinutes([a.intro, a.lede, ...a.sections.map((s) => s.html ?? ""), ...a.faq.map((f) => f.aHtml)]);

  return (
    <>
      <JsonLd data={medborgarskapsprovJsonLd} />
      <SiteHeader lang={lang} currentPath="/medborgarskapsprov/" />
      <main id="main">
        <ArticleHero
          lang={lang}
          crumbs={[{ label: t.home, href: localePath(lang, "/") }, { label: t.blog, href: localePath(lang, "/blog/") }, { label: a.title }]}
          title={a.title}
          lead={<span dangerouslySetInnerHTML={{ __html: a.lede }} />}
          meta={
            <span>
              {readingMinutes} {t.minRead}
            </span>
          }
          image={{ src: "/images/landing/exam-citizenship-test.jpg", alt: lang === "sv" ? "Riksdagshuset i Stockholm med svensk flagga" : "The Riksdag building in Stockholm with a Swedish flag" }}
          toc={toc}
          tocTitle={t.onThisPage}
        />

        <ArticleLayout>
          <div className={styles.main}>
            <p className={styles.intro} dangerouslySetInnerHTML={{ __html: a.intro }} />

            {a.sections.map((s, i) => (
              <div key={i}>
                {s.heading && <h2 id={slugify(s.heading)}>{s.heading}</h2>}
                {s.html && <Prose html={s.html} />}
                {s.table && <DataTable headers={s.table.headers} rows={s.table.rows} />}
                {s.orderedList && <Steps items={s.orderedList} />}
                {s.ctaBlock && (
                  <CtaCard title={s.ctaBlock.title} html={s.ctaBlock.html}>
                    {s.ctaBlock.storeLabels.map((label, li) => (
                      <CtaButton key={label} href={li === 0 ? urls.appStore : urls.playStore}>
                        {label}
                      </CtaButton>
                    ))}
                  </CtaCard>
                )}
              </div>
            ))}

            <h2 id="faq">{t.faq}</h2>
            <Faq items={a.faq} />

            <p className={styles.disclaimer}>{a.disclaimer}</p>

            <h2 id="sources">{t.sources}</h2>
            <ul className={styles.sources}>
              {a.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    <span>{s.label}</span>
                    <Chevron />
                  </a>
                </li>
              ))}
            </ul>

            <AppCta lang={lang} title={a.finalCta.title} body={a.finalCta.body} />

            <RelatedLinks
              title={t.related}
              items={[
                { href: localePath(lang, "/blog/"), label: b.title },
                { href: localePath(lang, "/ob-taxi-sweden/"), label: b.posts.find((p) => p.href.includes("ob-taxi-sweden"))?.title ?? b.title },
              ]}
            />
            <LastUpdated lang={lang} iso={a.lastUpdated} />
          </div>
        </ArticleLayout>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
