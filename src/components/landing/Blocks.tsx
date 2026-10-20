import Link from "next/link";
import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { iosAvailable, urls } from "@/content/site";
import CtaCard, { CtaButton } from "@/components/article/CtaCard";
import Chevron from "./Chevron";
import { L, formatDate } from "./labels";
import styles from "./Blocks.module.css";

/** "Last updated 13 October 2026" line. Renders nothing without a date. */
export function LastUpdated({ lang, iso }: { lang: Lang; iso?: string }) {
  if (!iso) return null;
  return (
    <p className={styles.updated}>
      <strong>{L[lang].lastUpdated}</strong> <time dateTime={iso}>{formatDate(lang, iso)}</time>
    </p>
  );
}

/** Full-width white link rows with a brand border and a right-aligned chevron. */
export function LinkRows({ items }: { items: { href: string; label: string; text?: string }[] }) {
  return (
    <ul className={styles.rows}>
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href} className={styles.row}>
            <span>
              <span className={styles.rowLabel}>{it.label}</span>
              {it.text && <span className={styles.rowText}>{it.text}</span>}
            </span>
            <Chevron />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Small white fact boxes (stats). */
export function FactBoxes({ items }: { items: { value: string; label: string }[] }) {
  return (
    <ul className={styles.facts}>
      {items.map((s) => (
        <li key={s.label} className={styles.fact}>
          <span className={styles.factValue}>{s.value}</span>
          <span className={styles.factLabel}>{s.label}</span>
        </li>
      ))}
    </ul>
  );
}

/** Two left-border info boxes with lists. */
export function InfoBoxes({
  boxes,
}: {
  boxes: { title: string; items: { title: string; text: string }[] }[];
}) {
  return (
    <div className={styles.infoGrid}>
      {boxes.map((b) => (
        <section key={b.title} className={styles.info}>
          <h3 className={styles.infoTitle}>{b.title}</h3>
          <ul className={styles.infoList}>
            {b.items.map((it) => (
              <li key={it.title}>
                <strong>{it.title}.</strong> {it.text}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

/** Brand CTA box with the store links. */
export function AppCta({ lang, title, body, extra, id = "download" }: { lang: Lang; title: string; body?: string; extra?: ReactNode; id?: string }) {
  const t = L[lang].ctaButtons;
  return (
    <CtaCard id={id} title={title} body={body}>
      <CtaButton href={urls.playStore}>{t.play}</CtaButton>
      {iosAvailable ? <CtaButton href={urls.appStore}>{t.ios}</CtaButton> : <CtaButton href={urls.webApp}>{t.web}</CtaButton>}
      {extra}
    </CtaCard>
  );
}
