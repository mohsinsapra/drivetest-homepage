import type { ReactNode } from "react";
import styles from "./ArticleHero.module.css";

export default function ArticleHero({
  kicker,
  title,
  lead,
  meta,
  badges,
  backHref,
  backLabel,
}: {
  kicker?: string;
  title: string;
  lead?: ReactNode;
  meta?: ReactNode;
  badges?: ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className={styles.hero}>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      <h1 className={styles.title}>{title}</h1>
      {lead && <div className={styles.lead}>{lead}</div>}
      {meta && <div className={styles.meta}>{meta}</div>}
      {badges && <div className={styles.badges}>{badges}</div>}
      {backHref && (
        <a href={backHref} className={styles.back}>
          ← {backLabel}
        </a>
      )}
    </header>
  );
}

export function MetaPill({ children }: { children: ReactNode }) {
  return <span className={styles.metaPill}>{children}</span>;
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className={styles.badge}>{children}</span>;
}
