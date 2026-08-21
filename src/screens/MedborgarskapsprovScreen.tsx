import JsonLd from "@/components/seo/JsonLd";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { medborgarskapsprov, medborgarskapsprovJsonLd } from "@/content/medborgarskapsprov";
import { blog } from "@/content/blog";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import { Section } from "@/components/ui/Section";
import Prose from "@/components/ui/Prose";
import ArticleHero, { MetaPill } from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import Toc, { type TocItem } from "@/components/article/Toc";
import Faq from "@/components/article/Faq";
import DataTable from "@/components/article/DataTable";
import Steps from "@/components/article/Steps";
import CtaCard, { CtaButton } from "@/components/article/CtaCard";
import RelatedLinks from "@/components/article/RelatedLinks";
import Reveal from "@/components/article/Reveal";
import StoreButtons from "@/components/layout/StoreButtons";
import { estimateReadingMinutes } from "@/components/article/readingTime";
import styles from "./Article.module.css";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\såäö-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

export default function MedborgarskapsprovScreen({ lang }: { lang: Lang }) {
  const a = medborgarskapsprov[lang];
  const b = blog[lang];

  const toc: TocItem[] = a.sections
    .filter((s) => s.heading)
    .map((s) => ({ id: slugify(s.heading as string), label: s.heading as string }));

  const readingMinutes = estimateReadingMinutes([
    a.intro,
    a.lede,
    ...a.sections.map((s) => s.html ?? ""),
    ...a.faq.map((f) => f.aHtml),
  ]);

  const faqHeading = lang === "en" ? "Frequently asked questions" : "Vanliga frågor";
  const sourcesHeading = lang === "en" ? "Sources" : "Källor";
  const readLabel = lang === "en" ? `${readingMinutes} min read` : `${readingMinutes} min läsning`;
  const relatedTitle = lang === "en" ? "Related" : "Relaterat";

  return (
    <>
      <JsonLd data={medborgarskapsprovJsonLd} />
      <SiteHeader lang={lang} currentPath="/medborgarskapsprov/" />
      <main>
        <ArticleHero
          kicker={a.eyebrow}
          title={a.title}
          lead={<span dangerouslySetInnerHTML={{ __html: a.lede }} />}
          meta={
            <>
              <MetaPill>{readLabel}</MetaPill>
              <MetaPill>{a.lastUpdatedLabel}</MetaPill>
            </>
          }
        />

        <Section>
          <ArticleLayout sidebar={<Toc items={toc} />}>
            <div className={styles.section}>
              <p className={styles.introLead} dangerouslySetInnerHTML={{ __html: a.intro }} />

              {a.sections.map((s, i) => (
                <Reveal key={i} as="div">
                  {s.heading && <h2 id={slugify(s.heading)}>{s.heading}</h2>}
                  {s.html && <Prose html={s.html} />}
                  {s.table && <DataTable headers={s.table.headers} rows={s.table.rows} />}
                  {s.orderedList && <Steps items={s.orderedList} />}
                  {s.ctaBlock && (
                    <CtaCard title={s.ctaBlock.title}>
                      <p className={styles.introLead} style={{ color: "#fff", opacity: 0.92, gridColumn: "1 / -1", flexBasis: "100%" }} dangerouslySetInnerHTML={{ __html: s.ctaBlock.html }} />
                      {s.ctaBlock.storeLabels.map((label, li) => (
                        <CtaButton key={label} href={li === 0 ? "https://apps.apple.com/app/drive-test-pro/id6765940954" : "https://play.google.com/store/apps/details?id=com.mohsinsapra.drivetest"}>
                          {label}
                        </CtaButton>
                      ))}
                    </CtaCard>
                  )}
                </Reveal>
              ))}

              <h2>{faqHeading}</h2>
              <Faq items={a.faq} />

              <p className={styles.disclaimer}>{a.disclaimer}</p>

              <h2>{sourcesHeading}</h2>
              <ul className={styles.sourcesList}>
                {a.sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <CtaCard title={a.finalCta.title} body={a.finalCta.body}>
              <div className={styles.storeCtaRow}>
                <StoreButtons />
              </div>
            </CtaCard>

            <RelatedLinks
              title={relatedTitle}
              items={[
                { href: localePath(lang, "/blog/"), tag: b.eyebrow, label: b.title },
                { href: localePath(lang, "/ob-taxi-sweden/"), tag: a.eyebrow, label: b.posts.find((p) => p.href.includes("ob-taxi-sweden"))?.title ?? b.title },
              ]}
            />
          </ArticleLayout>
        </Section>
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock />
    </>
  );
}
