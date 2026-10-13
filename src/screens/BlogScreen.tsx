import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { blog } from "@/content/blog";
import { guide } from "@/content/guide";
import { articles } from "@/content/articles";
import { obTaxiSweden } from "@/content/obTaxiSweden";
import { medborgarskapsprov } from "@/content/medborgarskapsprov";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Container from "@/components/ui/Container";
import LinkCard, { cardGrid } from "@/components/ui/LinkCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { LinkRows } from "@/components/landing/Blocks";
import { L, formatDate } from "@/components/landing/labels";
import styles from "./Blog.module.css";

export default function BlogScreen({ lang }: { lang: Lang }) {
  const b = blog[lang];
  const g = guide[lang];
  const t = L[lang];
  const intro = lang === "en" ? "Here you find guides and articles for taxi drivers in Sweden: the taxi licence, the exams, OB pay and the Vilotidsrapport." : "Här hittar du guider och artiklar för taxiförare i Sverige: taxiförarlegitimation, proven, OB-ersättning och vilotidsrapporten.";
  const toolsLabel = lang === "en" ? "Taxi OB Calculator" : "Taxi OB-kalkylator";

  const dates: Record<string, string> = {};
  for (const a of articles) dates[localePath(lang, `/blog/${a.slug}/`)] = a[lang].lastUpdated;
  dates[localePath(lang, "/ob-taxi-sweden/")] = obTaxiSweden[lang].lastUpdated;
  dates[localePath(lang, "/medborgarskapsprov/")] = medborgarskapsprov[lang].lastUpdated;

  return (
    <>
      <SiteHeader lang={lang} currentPath="/blog/" />
      <main id="main">
        <Container>
          <div className={styles.head}>
            <Breadcrumbs lang={lang} items={[{ label: t.home, href: localePath(lang, "/") }, { label: t.blog }]} />
            <h1 className={styles.title}>{t.blog}</h1>
            <p className={styles.lead}>{intro}</p>
          </div>

          <div className={cardGrid}>
            {b.posts.map((post) => (
              <LinkCard
                key={post.href}
                href={post.href}
                image={post.cover}
                category={post.tag}
                title={post.title}
                text={post.excerpt}
                date={dates[post.href] ? formatDate(lang, dates[post.href]) : undefined}
              />
            ))}
          </div>

          <section className={styles.tools}>
            <h2 className={styles.h2}>{t.tools}</h2>
            <LinkRows
              items={[
                { href: "/ob-calculator/", label: toolsLabel },
                { href: localePath(lang, "/taxi-licence-guide/"), label: g.headerTitle },
              ]}
            />
          </section>
        </Container>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
