"use client";

import { useEffect, useState } from "react";
import styles from "./Toc.module.css";

export interface TocItem {
  id: string;
  label: string;
}

export default function Toc({ items, title = "On this page" }: { items: TocItem[]; title?: string }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
          setActive(topMost.target.id);
        }
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: [0, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  const List = (
    <ul className={styles.list}>
      {items.map((it) => (
        <li className={styles.item} key={it.id}>
          <a
            href={`#${it.id}`}
            className={`${styles.link} ${active === it.id ? styles.linkActive : ""}`}
          >
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className={styles.wrap} aria-label={title}>
        <span className={styles.label}>{title}</span>
        {List}
      </nav>
      <details className={styles.mobile}>
        <summary className={styles.mobileSummary}>{title}</summary>
        {List}
      </details>
    </>
  );
}
