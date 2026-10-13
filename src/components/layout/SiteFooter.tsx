import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { footer, footerColumns, examLinks, urls } from "@/content/site";
import Container from "../ui/Container";
import styles from "./SiteFooter.module.css";

type FooterLink = { href: string; label: string; external?: boolean };

export default function SiteFooter({ lang }: { lang: Lang }) {
  const f = footer[lang];
  const c = footerColumns[lang];
  const year = new Date().getFullYear();

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: c.exams,
      links: examLinks[lang].map((e) => ({ href: localePath(lang, e.path), label: e.label })),
    },
    {
      title: c.forTitle,
      links: c.forLinks.map((e) => ({ href: localePath(lang, e.path), label: e.label })),
    },
    {
      title: c.compareTitle,
      links: c.compareLinks.map((e) => ({ href: localePath(lang, e.path), label: e.label })),
    },
    {
      title: c.resourcesTitle,
      links: [
        { href: localePath(lang, "/blog/"), label: f.blog },
        { href: localePath(lang, "/taxi-licence-guide/"), label: f.guide },
        { href: "/ob-calculator/", label: f.ob },
        { href: localePath(lang, "/support/"), label: f.support },
        { href: urls.github, label: f.github, external: true },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href={localePath(lang, "/")} className={styles.brand}>
              <img src="/assets/icon.png" alt="" />
              <span>Drive Test</span>
            </Link>
            <p className={styles.tagline}>{c.tagline}</p>
            <a href={`${localePath(lang, "/")}#download`} className={styles.cta}>
              {c.cta}
            </a>
            <p className={styles.note}>{c.note}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className={styles.colTitle}>{col.title}</div>
              <ul className={styles.colLinks}>
                {col.links.map((l) => (
                  <li key={l.href}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <span>
            © {year} Drive Test · {f.rights}
          </span>
          <span className={styles.legal}>
            <Link href={localePath(lang, "/privacy-policy/")}>{f.privacy}</Link>
            <Link href={localePath(lang, "/delete-account/")}>{f.delete}</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
