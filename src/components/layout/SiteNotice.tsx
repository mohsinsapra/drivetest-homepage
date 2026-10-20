import type { Lang } from "@/lib/i18n";
import { notice } from "@/content/site";
import styles from "./SiteNotice.module.css";

/** Temporary banner above the header on every page (content lives in content/site.ts). */
export default function SiteNotice({ lang }: { lang: Lang }) {
  const n = notice[lang];
  if (!n) return null;
  return (
    <div className={styles.notice} role="status">
      <p className={styles.text}>
        <span className={styles.label}>{n.label}</span>
        <span>{n.text}</span>
        <span className={styles.links}>
          {n.links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label} →
            </a>
          ))}
        </span>
      </p>
    </div>
  );
}
