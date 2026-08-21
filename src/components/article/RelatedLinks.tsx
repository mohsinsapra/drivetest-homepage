import styles from "./RelatedLinks.module.css";

export interface RelatedLink {
  href: string;
  tag: string;
  label: string;
}

export default function RelatedLinks({ title, items }: { title: string; items: RelatedLink[] }) {
  if (!items.length) return null;
  return (
    <div className={styles.wrap}>
      <span className={styles.label}>{title}</span>
      <div className={styles.grid}>
        {items.map((it) => (
          <a href={it.href} className={styles.card} key={it.href}>
            <span className={styles.tag}>{it.tag}</span>
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}
