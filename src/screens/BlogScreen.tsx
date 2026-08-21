import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { blog } from "@/content/blog";
import { guide } from "@/content/guide";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import { Section } from "@/components/ui/Section";
import ArticleHero from "@/components/article/ArticleHero";
import Reveal from "@/components/article/Reveal";
import styles from "./Blog.module.css";

export default function BlogScreen({ lang }: { lang: Lang }) {
  const b = blog[lang];
  const g = guide[lang];
  const toolsLabel = lang === "en" ? "Tools" : "Verktyg";
  const obLabel = lang === "en" ? "Taxi OB Calculator" : "Taxi OB-kalkylator";
  const readMore = lang === "en" ? "Read" : "Läs mer";

  return (
    <>
      <SiteHeader lang={lang} currentPath="/blog/" />
      <main>
        <ArticleHero kicker={b.eyebrow} title={b.title} lead={b.lede} />
        <Section>
          <div className={styles.grid}>
            {b.posts.map((post, i) => (
              <Reveal as="div" key={post.href} delay={i * 60}>
                <Link href={post.href} className={styles.card}>
                  <div className={styles.coverWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.cover} alt="" className={styles.cover} loading="lazy" />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.tag}>{post.tag}</span>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>{readMore} →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className={styles.toolsStrip}>
            <span className={styles.toolsLabel}>{toolsLabel}</span>
            <div className={styles.toolsGrid}>
              <a href="/ob-calculator/" className={styles.toolCard}>
                <span className={styles.toolIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h4" />
                  </svg>
                </span>
                {obLabel}
              </a>
              <Link href={localePath(lang, "/taxi-licence-guide/")} className={styles.toolCard}>
                <span className={styles.toolIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                </span>
                {g.headerTitle}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock />
    </>
  );
}
