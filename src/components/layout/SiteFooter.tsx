import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { footer, urls } from "@/content/site";
import Container from "../ui/Container";
import styles from "./SiteFooter.module.css";

export default function SiteFooter({ lang }: { lang: Lang }) {
  const f = footer[lang];
  const year = new Date().getFullYear();

  const product = [
    { href: localePath(lang, "/"), label: f.home },
    { href: "/ob-calculator/", label: f.ob },
    { href: localePath(lang, "/taxi-licence-guide/"), label: f.guide },
  ];
  const resources = [
    { href: localePath(lang, "/blog/"), label: f.blog },
    { href: localePath(lang, "/support/"), label: f.support },
    { href: urls.github, label: f.github, external: true },
  ];
  const legal = [
    { href: localePath(lang, "/privacy-policy/"), label: f.privacy },
    { href: localePath(lang, "/delete-account/"), label: f.delete },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.colTitle}>Product</div>
            <ul className={styles.colLinks}>
              {product.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Resources</div>
            <ul className={styles.colLinks}>
              {resources.map((l) =>
                l.external ? (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Legal</div>
            <ul className={styles.colLinks}>
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>
            {year} · {f.rights}
          </span>
        </div>
      </Container>
    </footer>
  );
}
