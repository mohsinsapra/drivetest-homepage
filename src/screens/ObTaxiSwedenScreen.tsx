import JsonLd from "@/components/seo/JsonLd";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { obTaxiSweden, obTaxiSwedenJsonLd } from "@/content/obTaxiSweden";
import { blog } from "@/content/blog";
import { guide } from "@/content/guide";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import { Section } from "@/components/ui/Section";
import Prose from "@/components/ui/Prose";
import ArticleHero, { MetaPill } from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import Toc, { type TocItem } from "@/components/article/Toc";
import Faq from "@/components/article/Faq";
import Callout from "@/components/article/Callout";
import DataTable from "@/components/article/DataTable";
import Steps from "@/components/article/Steps";
import CtaCard, { CtaButton } from "@/components/article/CtaCard";
import RelatedLinks from "@/components/article/RelatedLinks";
import Reveal from "@/components/article/Reveal";
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

export default function ObTaxiSwedenScreen({ lang }: { lang: Lang }) {
  const a = obTaxiSweden[lang];
  const b = blog[lang];
  const g = guide[lang];

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
  const readLabel = lang === "en" ? `${readingMinutes} min read` : `${readingMinutes} min läsning`;
  const relatedTitle = lang === "en" ? "Related" : "Relaterat";

  return (
    <>
      <JsonLd data={obTaxiSwedenJsonLd} />
      <SiteHeader lang={lang} currentPath="/ob-taxi-sweden/" />
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
                  {s.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className={styles.image} src={s.image.src} alt={s.image.alt} loading="lazy" width={600} height={400} />
                  )}
                  {s.html && <Prose html={s.html} />}
                  {s.table && <DataTable headers={s.table.headers} rows={s.table.rows} />}
                  {s.list &&
                    (s.list.ordered ? (
                      <Steps items={s.list.items} />
                    ) : (
                      <Prose html={`<ul>${s.list.items.map((it) => `<li>${it}</li>`).join("")}</ul>`} />
                    ))}
                  {s.card && (
                    <div className={styles.exampleCard}>
                      <h3>{s.card.title}</h3>
                      <Prose html={s.card.html} />
                    </div>
                  )}
                  {s.alert && (
                    <Callout
                      tone="warn"
                      title={s.alert.title}
                      html={s.alert.html}
                      listHtml={s.alert.list ? `<ul>${s.alert.list.map((it) => `<li>${it}</li>`).join("")}</ul>` : undefined}
                    />
                  )}
                </Reveal>
              ))}

              <h2>{faqHeading}</h2>
              <Faq items={a.faq} />

              <p className={styles.disclaimer}>{a.disclaimer}</p>
            </div>

            <CtaCard title={a.ctaTitle} body={a.ctaBody}>
              <CtaButton href="/ob-calculator/">{a.ctaBtn}</CtaButton>
            </CtaCard>

            <RelatedLinks
              title={relatedTitle}
              items={[
                { href: localePath(lang, "/blog/"), tag: b.eyebrow, label: b.title },
                { href: localePath(lang, "/taxi-licence-guide/"), tag: a.eyebrow, label: g.headerTitle },
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
