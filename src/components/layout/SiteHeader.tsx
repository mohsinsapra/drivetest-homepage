"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath, alternatePath } from "@/lib/i18n";
import { nav, examLinks } from "@/content/site";
import ThemeToggle from "./ThemeToggle";
import styles from "./SiteHeader.module.css";

const MOBILE_NAV_ID = "mobile-nav-panel";

export default function SiteHeader({ lang, currentPath = "/" }: { lang: Lang; currentPath?: string }) {
  const [open, setOpen] = useState(false);
  const t = nav[lang];
  const home = localePath(lang, "/");
  const anchor = (hash: string) => `${home}${hash}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const exams = examLinks[lang].map((e) => ({ href: localePath(lang, e.path), label: e.label }));
  const links = [
    { href: anchor("#how-it-works"), label: t.howItWorks },
    { href: anchor("#pricing"), label: t.pricing },
    { href: localePath(lang, "/blog/"), label: t.blog },
    { href: "/ob-calculator/", label: t.obCalculator },
  ];

  const altHref = alternatePath(lang, currentPath);

  return (
    <>
      <header className={styles.wrap}>
        <div className={styles.pill}>
          <Link href={home} className={styles.brand}>
            <img src="/assets/icon.png" alt="" />
            <span>Drive Test</span>
          </Link>

          <nav className={styles.links}>
            <div className={styles.dropWrap}>
              <Link href={localePath(lang, "/exams/taxi-licence/")} className={styles.link}>
                {t.exams}
                <svg className={styles.caret} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>
              <div className={styles.menu}>
                {exams.map((e) => (
                  <Link key={e.href} href={e.href} className={styles.menuLink}>
                    {e.label}
                  </Link>
                ))}
              </div>
            </div>
            {links.map((l) => (
              <a key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href={altHref} className={styles.langBtn}>
              {lang === "en" ? "SV" : "EN"}
            </Link>
            <ThemeToggle />
            <a href={anchor("#download")} className={styles.cta}>
              {t.getTheApp}
            </a>
            <button
              type="button"
              className={styles.burger}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls={MOBILE_NAV_ID}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className={styles.mobilePanel}
          id={MOBILE_NAV_ID}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className={styles.mobileTop}>
            <Link href={home} className={styles.brand}>
              <img src="/assets/icon.png" alt="" />
              <span>Drive Test</span>
            </Link>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>
          <Link href={localePath(lang, "/exams/taxi-licence/")} className={styles.mobileLink} onClick={() => setOpen(false)}>
            {t.exams}
          </Link>
          {exams.map((e) => (
            <Link key={e.href} href={e.href} className={`${styles.mobileLink} ${styles.mobileSub}`} onClick={() => setOpen(false)}>
              {e.label}
            </Link>
          ))}
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Link href={altHref} className={styles.mobileLink} onClick={() => setOpen(false)}>
            {lang === "en" ? "Svenska" : "English"}
          </Link>

          <div className={styles.mobileFooter}>
            <ThemeToggle />
            <a href={anchor("#download")} className={styles.mobileCta} onClick={() => setOpen(false)}>
              {t.getTheApp}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
