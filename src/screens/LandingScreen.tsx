import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getLanding, landingPages } from "@/content/landing";
import { homeExtra } from "@/content/home";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seoJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Prose from "@/components/ui/Prose";
import LinkButton from "@/components/ui/LinkButton";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import type { TocItem } from "@/components/article/Toc";
import Faq from "@/components/article/Faq";
import DataTable from "@/components/article/DataTable";
import RelatedLinks from "@/components/article/RelatedLinks";
import { AppCta, FactBoxes, InfoBoxes, LinkRows } from "@/components/landing/Blocks";
import { landingImage } from "@/components/landing/heroImages";
import { L, slugify } from "@/components/landing/labels";
import styles from "./Article.module.css";

const GROUP = {
  en: { exam: "Exams", audience: "For drivers and companies" },
  sv: { exam: "Prov", audience: "För förare och företag" },
} as const;

export function landingBreadcrumbs(lang: Lang, slug: string, title: string) {
  const t = L[lang];
  const crumbs: { name: string; path: string }[] = [{ name: t.home, path: "/" }];
  if (slug.startsWith("compare/")) crumbs.push({ name: t.compare, path: "/compare/" });
  crumbs.push({ name: title, path: `/${slug}/` });
  return crumbs;
}

export default function LandingScreen({ lang, slug }: { lang: Lang; slug: string }) {
  const entry = getLanding(slug);
  if (!entry) throw new Error(`Unknown landing page: ${slug}`);
  const p = entry[lang];
  const t = L[lang];
  const x = homeExtra[lang];
  const isHub = slug === "compare";

  const compareCards = isHub ? landingPages.filter((l) => l.kind === "compare" && l.slug !== "compare") : [];
  const relatedCards = p.related
    .filter((r) => !(isHub && r.startsWith("compare/")))
    .map((r) => getLanding(r))
    .filter((r): r is NonNullable<typeof r> => !!r);

  const subtitle = p.titleAccent ? p.titleAccent.charAt(0).toUpperCase() + p.titleAccent.slice(1) : undefined;

  const crumbs: Crumb[] = [{ label: t.home, href: localePath(lang, "/") }];
  if (entry.kind === "compare" && !isHub) crumbs.push({ label: t.compare, href: localePath(lang, "/compare/") });
  else if (entry.kind !== "compare") crumbs.push({ label: GROUP[lang][entry.kind] });
  crumbs.push({ label: p.title });

  const toc: TocItem[] = [];
  if (isHub) toc.push({ id: "compare-all", label: t.compareAll });
  if (p.comparison) toc.push({ id: "glance", label: t.glance });
  p.sections.forEach((s, i) => toc.push({ id: `s-${slugify(s.heading) || i}`, label: s.heading }));
  toc.push({ id: "faq", label: t.faq });

  return (
    <>
      <JsonLd data={[faqJsonLd(lang, p.faq), breadcrumbJsonLd(lang, landingBreadcrumbs(lang, slug, p.title))]} />
      <SiteHeader lang={lang} currentPath={`/${slug}/`} />
      <main id="main">
        <ArticleHero
          lang={lang}
          crumbs={crumbs}
          title={p.title}
          subtitle={subtitle}
          lead={<p>{p.lede}</p>}
          actions={
            <LinkButton href="#download" variant="solid">
              {t.practise}
            </LinkButton>
          }
          image={landingImage(slug, lang)}
          toc={toc}
          tocTitle={t.onThisPage}
        />

        <ArticleLayout>
          <div className={styles.main}>
            {p.stats && p.stats.length > 0 && <FactBoxes items={p.stats} />}

            {isHub && (
              <section id="compare-all">
                <h2>{t.compareAll}</h2>
                <LinkRows items={compareCards.map((c) => ({ href: localePath(lang, `/${c.slug}/`), label: c[lang].title, text: c[lang].lede }))} />
              </section>
            )}

            {(p.problems.length > 0 || p.solutions.length > 0) && (
              <InfoBoxes
                boxes={[
                  { title: x.problemLabel, items: p.problems },
                  { title: x.solutionLabel, items: p.solutions },
                ]}
              />
            )}

            {p.comparison && (
              <section id="glance">
                <h2>{t.glance}</h2>
                <DataTable headers={p.comparison.headers} rows={p.comparison.rows.map((cells) => ({ cells }))} />
              </section>
            )}

            {p.sections.map((s, i) => (
              <section key={i} id={`s-${slugify(s.heading) || i}`}>
                <h2>{s.heading}</h2>
                <Prose html={s.html} />
              </section>
            ))}

            <section id="faq">
              <h2>{t.faq}</h2>
              <Faq items={p.faq} />
            </section>

            <RelatedLinks
              title={t.related}
              items={relatedCards.map((r) => ({ href: localePath(lang, `/${r.slug}/`), label: r[lang].title }))}
            />

            <AppCta lang={lang} title={p.ctaTitle} body={p.ctaText} />
          </div>
        </ArticleLayout>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
