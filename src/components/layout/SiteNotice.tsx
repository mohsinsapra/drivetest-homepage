import type { Lang } from "@/lib/i18n";
import { notice } from "@/content/site";
import styles from "./SiteNotice.module.css";

/** Temporary announcement strip above the header (content lives in content/site.ts). */
export default function SiteNotice({ lang }: { lang: Lang }) {
  const n = notice[lang];
  if (!n) return null;
  return (
    <div className={styles.notice} role="status">
      <div className="container">
        <p className={styles.text}>
          {n.before}
          <a href={n.href} className={styles.link}>
            {n.linkText}
          </a>
          {n.after}
        </p>
      </div>
    </div>
  );
}
