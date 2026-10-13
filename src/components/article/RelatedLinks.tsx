import Link from "next/link";
import Chevron from "@/components/landing/Chevron";
import styles from "./RelatedLinks.module.css";

export interface RelatedLink {
  href: string;
  tag?: string;
  label: string;
}

/** "More pages in this topic" box: 3px brand top border, hairline-separated rows. */
export default function RelatedLinks({ title, items }: { title: string; items: RelatedLink[] }) {
  if (!items.length) return null;
  return (
    <nav className={styles.wrap} aria-label={title}>
      <h2 className={styles.label}>{title}</h2>
      <ul className={styles.list}>
        {items.map((it) => (
          <li key={it.href} className={styles.row}>
            <Link href={it.href} className={styles.link}>
              <span>{it.label}</span>
              <Chevron />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
