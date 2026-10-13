import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getArticle } from "@/content/articles";
import { getLanding } from "@/content/landing";
import { blog } from "@/content/blog";
import { guide } from "@/content/guide";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seoJsonLd";
import JsonLd from "@/components/seo/JsonLd";
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
import RelatedLinks, { type RelatedLink } from "@/components/article/RelatedLinks";
import { estimateReadingMinutes } from "@/components/article/readingTime";
import { AppCta, LastUpdated } from "@/components/landing/Blocks";
import Chevron from "@/components/landing/Chevron";
import { L, slugify } from "@/components/landing/labels";
import styles from "./Article.module.css";

const CTA = {
  en: {
    title: "Practise for the exam in Drive Test",
    body: "Here you practise with exam-style questions and explanations, with an AI tutor, text-to-speech in several languages and progress tracking. The app is available for iOS and Android.",
  },
  sv: {
    title: "Öva inför provet i Drive Test",
    body: "Här övar du med provliknande frågor och förklaringar, med AI-handledare, text-till-tal på flera språk och framstegsspårning. Appen finns för iOS och Android.",
  },
} as const;

/** Resolve a related path (already locale-prefixed in content) to a link row. */
function resolveRelated(lang: Lang, href: string): RelatedLink | null {
  const neutral = href.replace(/^\/sv\//, "/");
  const m = neutral.match(/^\/blog\/([^/]+)\/$/);
  if (m) {
    const a = getArticle(m[1]);
    return a ? { href, label: a[lang].title } : null;
  }
  if (neutral === "/taxi-licence-guide/") return { href, label: guide[lang].headerTitle };
  const l = getLanding(neutral.replace(/^\/|\/$/g, ""));
  if (l) return { href, label: l[lang].title };
  return null;
}

export default function ArticleScreen({ lang, slug }: { lang: Lang; slug: string }) {
  const mod = getArticle(slug);
  if (!mod) throw new Error(`Unknown article: ${slug}`);
  const a = mod[lang];
  const t = L[lang];
  const b = blog[lang];
  const c = CTA[lang];
  const path = `/blog/${slug}/`;

  const toc: TocItem[] = a.sections
    .filter((s) => s.heading)
    .map((s) => ({ id: slugify(s.heading as string), label: s.heading as string }));
  toc.push({ id: "faq", label: t.faq });
  if (a.sources.length > 0) toc.push({ id: "sources", label: t.sources });

  const readingMinutes = estimateReadingMinutes([a.intro, a.lede, ...a.sections.map((s) => s.html ?? ""), ...a.faq.map((f) => f.aHtml)]);
  const related = a.related.map((h) => resolveRelated(lang, h)).filter((r): r is RelatedLink => !!r);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd(lang, { path, headline: a.title, description: a.metaDescription, dateModified: a.lastUpdated, image: a.cover }),
          faqJsonLd(lang, a.faq),
          breadcrumbJsonLd(lang, [
            { name: lang === "sv" ? "Hem" : "Home", path: "/" },
            { name: t.blog, path: "/blog/" },
            { name: a.title, path },
          ]),
        ]}
      />
      <SiteHeader lang={lang} currentPath={path} />
      <main id="main">
        <ArticleHero
          lang={lang}
          crumbs={[
            { label: t.home, href: localePath(lang, "/") },
            { label: t.blog, href: localePath(lang, "/blog/") },
            { label: a.title },
          ]}
          title={a.title}
          lead={<span dangerouslySetInnerHTML={{ __html: a.lede }} />}
          meta={
            <span>
              {readingMinutes} {t.minRead}
            </span>
          }
          image={{ src: a.cover, alt: a.title }}
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

            {a.sources.length > 0 && (
              <>
                <h2 id="sources">{t.sources}</h2>
                <p className={styles.sourcesNote}>{t.sourcesNote}</p>
                <ul className={styles.sources}>
                  {a.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        <span>{s.label}</span>
                        <Chevron />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <AppCta lang={lang} title={c.title} body={c.body} />
            <RelatedLinks title={t.related} items={[{ href: localePath(lang, "/blog/"), label: b.title }, ...related]} />
            <LastUpdated lang={lang} iso={a.lastUpdated} />
          </div>
        </ArticleLayout>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
