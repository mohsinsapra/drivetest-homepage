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
import RelatedLinks, { type RelatedLink } from "@/components/article/RelatedLinks";
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

const T = {
  en: {
    faq: "Frequently asked questions",
    related: "Related",
    sources: "Sources",
    sourcesNote: "Figures and rules were checked against these official pages. Always confirm current details with the authority.",
    min: "min read",
    home: "Home",
    blog: "Blog",
    ctaTitle: "Practise for the exam with Drive Test",
    ctaBody:
      "Exam-style questions with explanations, an AI tutor, text-to-speech in several languages and progress tracking. Free to start on iOS, Android and web.",
    ctaBtn: "Get the app",
    exam: "Exam",
    audience: "For",
    guide: "Guide",
    article: "Article",
  },
  sv: {
    faq: "Vanliga frågor",
    related: "Relaterat",
    sources: "Källor",
    sourcesNote: "Siffror och regler är kontrollerade mot dessa officiella sidor. Bekräfta alltid aktuella uppgifter hos myndigheten.",
    min: "min läsning",
    home: "Hem",
    blog: "Blogg",
    ctaTitle: "Plugga inför provet med Drive Test",
    ctaBody:
      "Provliknande frågor med förklaringar, en AI-handledare, text-till-tal på flera språk och framstegsspårning. Gratis att börja på iOS, Android och webb.",
    ctaBtn: "Skaffa appen",
    exam: "Prov",
    audience: "För",
    guide: "Guide",
    article: "Artikel",
  },
} as const;

/** Resolve a related path (already locale-prefixed in content) to a card. */
function resolveRelated(lang: Lang, href: string): RelatedLink | null {
  const neutral = href.replace(/^\/sv\//, "/");
  const t = T[lang];
  const m = neutral.match(/^\/blog\/([^/]+)\/$/);
  if (m) {
    const a = getArticle(m[1]);
    return a ? { href, tag: a[lang].tag, label: a[lang].title } : null;
  }
  if (neutral === "/taxi-licence-guide/") return { href, tag: t.guide, label: guide[lang].headerTitle };
  const l = getLanding(neutral.replace(/^\/|\/$/g, ""));
  if (l) return { href, tag: l.kind === "exam" ? t.exam : l.kind === "audience" ? t.audience : t.guide, label: l[lang].title };
  return null;
}

export default function ArticleScreen({ lang, slug }: { lang: Lang; slug: string }) {
  const mod = getArticle(slug);
  if (!mod) throw new Error(`Unknown article: ${slug}`);
  const a = mod[lang];
  const t = T[lang];
  const b = blog[lang];
  const path = `/blog/${slug}/`;

  const toc: TocItem[] = a.sections
    .filter((s) => s.heading)
    .map((s) => ({ id: slugify(s.heading as string), label: s.heading as string }));

  const readingMinutes = estimateReadingMinutes([
    a.intro,
    a.lede,
    ...a.sections.map((s) => s.html ?? ""),
    ...a.faq.map((f) => f.aHtml),
  ]);

  const related = a.related.map((h) => resolveRelated(lang, h)).filter((r): r is RelatedLink => !!r);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd(lang, {
            path,
            headline: a.title,
            description: a.metaDescription,
            dateModified: a.lastUpdated,
            image: a.cover,
          }),
          faqJsonLd(lang, a.faq),
          breadcrumbJsonLd(lang, [
            { name: t.home, path: "/" },
            { name: t.blog, path: "/blog/" },
            { name: a.title, path },
          ]),
        ]}
      />
      <SiteHeader lang={lang} currentPath={path} />
      <main>
        <ArticleHero
          kicker={a.eyebrow}
          title={a.title}
          lead={<span dangerouslySetInnerHTML={{ __html: a.lede }} />}
          meta={
            <>
              <MetaPill>
                {readingMinutes} {t.min}
              </MetaPill>
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

              <h2>{t.faq}</h2>
              <Faq items={a.faq} />

              {a.sources.length > 0 && (
                <>
                  <h2 id="sources">{t.sources}</h2>
                  <p className={styles.sourcesNote}>{t.sourcesNote}</p>
                  <ul className={styles.sources}>
                    {a.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <CtaCard title={t.ctaTitle} body={t.ctaBody}>
              <CtaButton href={`${localePath(lang, "/")}#download`}>{t.ctaBtn}</CtaButton>
            </CtaCard>

            <RelatedLinks
              title={t.related}
              items={[{ href: localePath(lang, "/blog/"), tag: t.blog, label: b.title }, ...related]}
            />
          </ArticleLayout>
        </Section>
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock />
    </>
  );
}
