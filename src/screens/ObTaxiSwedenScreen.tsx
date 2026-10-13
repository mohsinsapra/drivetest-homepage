import JsonLd from "@/components/seo/JsonLd";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { obTaxiSweden, obTaxiSwedenJsonLd } from "@/content/obTaxiSweden";
import { blog } from "@/content/blog";
import { guide } from "@/content/guide";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Prose from "@/components/ui/Prose";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import type { TocItem } from "@/components/article/Toc";
import Faq from "@/components/article/Faq";
import Callout from "@/components/article/Callout";
import DataTable from "@/components/article/DataTable";
import Steps from "@/components/article/Steps";
import CtaCard, { CtaButton } from "@/components/article/CtaCard";
import RelatedLinks from "@/components/article/RelatedLinks";
import { estimateReadingMinutes } from "@/components/article/readingTime";
import { LastUpdated } from "@/components/landing/Blocks";
import { L, slugify } from "@/components/landing/labels";
import styles from "./Article.module.css";

export default function ObTaxiSwedenScreen({ lang }: { lang: Lang }) {
  const a = obTaxiSweden[lang];
  const b = blog[lang];
  const g = guide[lang];
  const t = L[lang];

  const toc: TocItem[] = a.sections
    .filter((s) => s.heading)
    .map((s) => ({ id: slugify(s.heading as string), label: s.heading as string }));
  toc.push({ id: "faq", label: t.faq });

  const readingMinutes = estimateReadingMinutes([a.intro, a.lede, ...a.sections.map((s) => s.html ?? ""), ...a.faq.map((f) => f.aHtml)]);

  return (
    <>
      <JsonLd data={obTaxiSwedenJsonLd} />
      <SiteHeader lang={lang} currentPath="/ob-taxi-sweden/" />
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
          image={{ src: "/assets/blog/ob-taxi-driving.jpg", alt: a.title }}
          toc={toc}
          tocTitle={t.onThisPage}
        />

        <ArticleLayout>
          <div className={styles.main}>
            <p className={styles.intro} dangerouslySetInnerHTML={{ __html: a.intro }} />

            {a.sections.map((s, i) => (
              <div key={i}>
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
              </div>
            ))}

            <h2 id="faq">{t.faq}</h2>
            <Faq items={a.faq} />

            <p className={styles.disclaimer}>{a.disclaimer}</p>

            <CtaCard title={a.ctaTitle} body={a.ctaBody}>
              <CtaButton href="/ob-calculator/">{a.ctaBtn.replace(/\s*[›»]\s*$/, "")}</CtaButton>
            </CtaCard>

            <RelatedLinks
              title={t.related}
              items={[
                { href: localePath(lang, "/blog/"), label: b.title },
                { href: localePath(lang, "/taxi-licence-guide/"), label: g.headerTitle },
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
