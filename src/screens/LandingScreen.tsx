import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getLanding, landingPages } from "@/content/landing";
import { homeExtra } from "@/content/home";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seoJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import StoreButtons from "@/components/layout/StoreButtons";
import Container from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Prose from "@/components/ui/Prose";
import WhySection from "@/components/home/WhySection";
import Reveal from "@/components/home/Reveal";
import shared from "@/components/home/shared.module.css";
import download from "@/components/home/Download.module.css";
import Faq from "@/components/article/Faq";
import DataTable from "@/components/article/DataTable";
import styles from "./Landing.module.css";

const T = {
  en: {
    getApp: "Get the app",
    secondary: "See how it works",
    note: "Free to start · iOS, Android & Web",
    faq: "Frequently asked questions",
    faqKicker: "FAQ",
    glance: "At a glance",
    related: "Keep exploring",
    compareAll: "Compare the options",
    readComparison: "Read the comparison",
    home: "Home",
    compare: "Compare",
    kinds: { exam: "Exam", audience: "For", compare: "Compare" },
  },
  sv: {
    getApp: "Skaffa appen",
    secondary: "Så fungerar det",
    note: "Gratis att börja · iOS, Android & webb",
    faq: "Vanliga frågor",
    faqKicker: "FAQ",
    glance: "I korthet",
    related: "Utforska mer",
    compareAll: "Jämför alternativen",
    readComparison: "Läs jämförelsen",
    home: "Hem",
    compare: "Jämför",
    kinds: { exam: "Prov", audience: "För", compare: "Jämför" },
  },
} as const;

export function landingBreadcrumbs(lang: Lang, slug: string, title: string) {
  const t = T[lang];
  const crumbs: { name: string; path: string }[] = [{ name: t.home, path: "/" }];
  if (slug.startsWith("compare/")) crumbs.push({ name: t.compare, path: "/compare/" });
  crumbs.push({ name: title, path: `/${slug}/` });
  return crumbs;
}

export default function LandingScreen({ lang, slug }: { lang: Lang; slug: string }) {
  const entry = getLanding(slug);
  if (!entry) throw new Error(`Unknown landing page: ${slug}`);
  const p = entry[lang];
  const t = T[lang];
  const x = homeExtra[lang];
  const home = localePath(lang, "/");
  const isHub = slug === "compare";

  const compareCards = isHub ? landingPages.filter((l) => l.kind === "compare" && l.slug !== "compare") : [];
  const relatedCards = p.related
    .filter((r) => !(isHub && r.startsWith("compare/")))
    .map((r) => getLanding(r))
    .filter((r): r is NonNullable<typeof r> => !!r);

  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(lang, p.faq),
          breadcrumbJsonLd(lang, landingBreadcrumbs(lang, slug, p.title)),
        ]}
      />
      <SiteHeader lang={lang} currentPath={`/${slug}/`} />
      <main>
        <header className={styles.hero}>
          <Container>
            <div className={styles.top}>
              <div>
                <span className={styles.eyebrow}>{p.eyebrow}</span>
                <h1 className={styles.title}>
                  {p.title}
                  {p.titleAccent && (
                    <>
                      {" "}
                      <span className={styles.accent}>{p.titleAccent}</span>
                    </>
                  )}
                </h1>
              </div>
              <div className={styles.side}>
                <p className={styles.lede}>{p.lede}</p>
                <div className={styles.btns}>
                  <a href="#download" className={shared.btnPrimary}>
                    {t.getApp}
                  </a>
                  <a href={`${home}#how-it-works`} className={shared.btnGhost}>
                    {t.secondary}
                  </a>
                </div>
                <p className={styles.note}>{t.note}</p>
              </div>
            </div>

            {p.stats && p.stats.length > 0 && (
              <div className={styles.stats}>
                {p.stats.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </header>

        {compareCards.length > 0 && (
          <Section>
            <div className={styles.cards}>
              {compareCards.map((c) => (
                <Link key={c.slug} href={localePath(lang, `/${c.slug}/`)} className={styles.linkCard}>
                  <span className={styles.cardTag}>{c[lang].eyebrow}</span>
                  <h3 className={styles.cardTitle}>{c[lang].title}</h3>
                  <p className={styles.cardText}>{c[lang].lede}</p>
                  <span className={styles.cardMore}>{t.readComparison} →</span>
                </Link>
              ))}
            </div>
          </Section>
        )}

        <WhySection lang={lang} problems={p.problems} solutions={p.solutions} head={false} id="why" />

        {p.comparison && (
          <Section>
            <Reveal className={shared.sectionHead}>
              <span className={shared.kicker}>{t.glance}</span>
            </Reveal>
            <DataTable headers={p.comparison.headers} rows={p.comparison.rows.map((cells) => ({ cells }))} />
          </Section>
        )}

        {p.sections.map((s, i) => (
          <Section key={i}>
            <Reveal className={styles.body}>
              <h2 className={styles.h2}>{s.heading}</h2>
              <div className={styles.prose}>
                <Prose html={s.html} />
              </div>
            </Reveal>
          </Section>
        ))}

        <Section>
          <Reveal className={shared.sectionHead}>
            <span className={shared.kicker}>{t.faqKicker}</span>
            <h2 className={shared.sectionTitle}>{t.faq}</h2>
          </Reveal>
          <div className={styles.faqWrap}>
            <Faq items={p.faq} />
          </div>
        </Section>

        {relatedCards.length > 0 && (
          <Section>
            <Reveal className={shared.sectionHead}>
              <span className={shared.kicker}>{t.related}</span>
            </Reveal>
            <div className={styles.cards}>
              {relatedCards.map((r) => (
                <Link key={r.slug} href={localePath(lang, `/${r.slug}/`)} className={styles.linkCard}>
                  <span className={styles.cardTag}>{t.kinds[r.kind]}</span>
                  <h3 className={styles.cardTitle}>{r[lang].title}</h3>
                  <span className={styles.cardMore}>→</span>
                </Link>
              ))}
            </div>
          </Section>
        )}

        <div className={download.wrap} id="download">
          <Container>
            <Reveal className={download.band}>
              <span className={download.glow} aria-hidden="true" />
              <h2 className={download.title}>{p.ctaTitle}</h2>
              <p className={download.sub}>{p.ctaText}</p>
              <ul className={download.bullets}>
                {x.ctaBullets.map((b) => (
                  <li key={b}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <div className={download.storeRow}>
                <StoreButtons
                  playLabelTop={lang === "en" ? "Get it on" : "Hämta på"}
                  iosLabelTop={lang === "en" ? "Download on the" : "Ladda ner på"}
                  webLabelTop={lang === "en" ? "Launch as" : "Starta som"}
                  webLabelName={lang === "en" ? "Web App" : "Webbapp"}
                />
              </div>
            </Reveal>
          </Container>
        </div>
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock />
    </>
  );
}
