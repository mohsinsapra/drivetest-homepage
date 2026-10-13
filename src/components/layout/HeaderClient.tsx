"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath, alternatePath } from "@/lib/i18n";
import { nav, examLinks, footerColumns, footer, urls } from "@/content/site";
import { searchEntries, type SearchEntry } from "@/lib/searchIndex";
import styles from "./SiteHeader.module.css";

const MENU_ID = "site-menu-panel";

function Icon({ name }: { name: "web" | "phone" | "menu" | "close" | "search" }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, width: 28, height: 28 };
  switch (name) {
    case "web":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <rect x="7" y="2.5" width="10" height="19" rx="1.5" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l4.5 4.5" />
        </svg>
      );
  }
}

export default function HeaderClient({ lang, currentPath, index }: { lang: Lang; currentPath: string; index: SearchEntry[] }) {
  const t = nav[lang];
  const f = footer[lang];
  const c = footerColumns[lang];
  const home = localePath(lang, "/");
  const altHref = alternatePath(lang, currentPath);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // mobile search row
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const searchRef = useRef<HTMLFormElement>(null);

  const results = useMemo(() => searchEntries(index, q), [index, q]);
  const showResults = focused && q.trim().length > 0;

  useEffect(() => {
    const main = document.querySelector("main");
    if (main && !main.id) main.id = "main";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setFocused(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setFocused(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const isActive = (prefix: string) => currentPath.startsWith(prefix);
  const mainLinks = [
    { href: localePath(lang, "/exams/taxi-licence/"), label: t.exams, active: isActive("/exams/") },
    { href: localePath(lang, "/taxi-licence-guide/"), label: t.taxiLicence, active: isActive("/taxi-licence-guide") },
    { href: localePath(lang, "/blog/"), label: t.blog, active: isActive("/blog/") },
    { href: "/ob-calculator/", label: t.obCalculator, active: isActive("/ob-taxi-sweden") || isActive("/ob-calculator") },
    { href: localePath(lang, "/compare/"), label: t.compare, active: isActive("/compare/") },
  ];

  const downloadHref = `${home}#download`;
  const close = () => setMenuOpen(false);

  const menuGroups: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
    { title: c.exams, links: examLinks[lang].map((e) => ({ href: localePath(lang, e.path), label: e.label })) },
    { title: c.forTitle, links: c.forLinks.map((e) => ({ href: localePath(lang, e.path), label: e.label })) },
    { title: c.compareTitle, links: c.compareLinks.map((e) => ({ href: localePath(lang, e.path), label: e.label })) },
    {
      title: t.menuMore,
      links: [
        { href: localePath(lang, "/taxi-licence-guide/"), label: f.guide },
        { href: localePath(lang, "/blog/"), label: f.blog },
        { href: "/ob-calculator/", label: f.ob },
        { href: localePath(lang, "/support/"), label: f.support },
        { href: localePath(lang, "/privacy-policy/"), label: f.privacy },
      ],
    },
  ];

  const searchForm = (
    <form
      className={styles.search}
      role="search"
      ref={searchRef}
      onSubmit={(e) => {
        e.preventDefault();
        if (results[0]) window.location.href = results[0].href;
      }}
    >
      <label htmlFor="site-search" className="sr-only">
        {t.searchLabel}
      </label>
      <input
        id="site-search"
        type="search"
        className={styles.searchInput}
        placeholder={t.searchPlaceholder}
        value={q}
        autoComplete="off"
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => setFocused(true)}
      />
      <button type="submit" className={styles.searchBtn}>
        {t.search}
      </button>
      {showResults && (
        <div className={styles.results} role="region" aria-label={t.resultsFor}>
          {results.length ? (
            <ul>
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className={styles.result} onClick={() => setFocused(false)}>
                    <span className={styles.resultKind}>{r.kind}</span>
                    <span className={styles.resultTitle}>{r.title}</span>
                    <span className={styles.resultText}>{r.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noResults}>{t.noResults}</p>
          )}
        </div>
      )}
    </form>
  );

  return (
    <header className={styles.header}>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <span className={styles.disclaimer}>{f.disclaimer}</span>
          <Link href={altHref} className={styles.lang} hrefLang={lang === "en" ? "sv" : "en"} lang={lang === "en" ? "sv" : "en"}>
            {t.language}
          </Link>
        </div>
      </div>

      <div className={styles.mainRow}>
        <div className={styles.mainInner}>
          <Link href={home} className={styles.logo} aria-label={`Drive Test – ${t.home}`}>
            <img src="/assets/icon.png" alt="" width={34} height={34} />
            <span>DRIVE TEST</span>
          </Link>

          <div className={styles.searchWrap} data-open={searchOpen}>
            {searchForm}
          </div>

          <div className={styles.tools}>
            <button
              type="button"
              className={`${styles.tool} ${styles.searchToggle}`}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Icon name="search" />
              <span>{t.search}</span>
            </button>
            <a href={urls.livePwaIframe} className={styles.tool} target="_blank" rel="noopener noreferrer">
              <Icon name="web" />
              <span>{t.webApp}</span>
            </a>
            <a href={downloadHref} className={`${styles.tool} ${styles.hideSm}`}>
              <Icon name="phone" />
              <span>{t.getTheApp}</span>
            </a>
            <button
              type="button"
              className={styles.tool}
              aria-expanded={menuOpen}
              aria-controls={MENU_ID}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
              <span>{menuOpen ? t.close : t.menu}</span>
            </button>
          </div>
        </div>
      </div>

      <nav className={styles.navRow} aria-label={t.mainNav}>
        <ul className={`container ${styles.navList}`}>
          {mainLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`${styles.navLink} ${l.active ? styles.navActive : ""}`} aria-current={l.active ? "page" : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <div className={styles.menuPanel} id={MENU_ID}>
          <div className={`container ${styles.menuGrid}`}>
            {menuGroups.map((g) => (
              <div key={g.title}>
                <h2 className={styles.menuTitle}>{g.title}</h2>
                <ul className={styles.menuList}>
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={close}>
                        {l.label}
                        <span aria-hidden="true"> ›</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={styles.menuMobileOnly}>
              <h2 className={styles.menuTitle}>{t.storeTitle}</h2>
              <ul className={styles.menuList}>
                <li>
                  <Link href={altHref} hrefLang={lang === "en" ? "sv" : "en"} lang={lang === "en" ? "sv" : "en"} onClick={close}>
                    {t.language}
                    <span aria-hidden="true"> ›</span>
                  </Link>
                </li>
                <li>
                  <a href={urls.livePwaIframe} target="_blank" rel="noopener noreferrer">
                    {t.webApp}
                    <span aria-hidden="true"> ›</span>
                  </a>
                </li>
                <li>
                  <a href={downloadHref} onClick={close}>
                    {t.getTheApp}
                    <span aria-hidden="true"> ›</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
