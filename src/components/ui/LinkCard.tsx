import Link from "next/link";
import styles from "./LinkCard.module.css";

/**
 * Trafikverket news-style photo card: photo (no radius), optional uppercase category,
 * H3 link with chevron, paragraph, optional date line.
 * Props:
 *  - href: string
 *  - title: string
 *  - text?: string
 *  - image?: string   (public path, e.g. "/images/site/taxi.jpg"); omitted => no photo
 *  - imageAlt?: string (default "" = decorative)
 *  - category?: string
 *  - date?: string    (already formatted, e.g. "7 okt. 2026")
 *  - headingLevel?: 2 | 3 (default 3)
 * Put cards in a <div className={styles.grid}> of your own, or use the exported .cardGrid utility
 * class from LinkCard.module.css via `import { cardGrid } from "@/components/ui/LinkCard"` (className string).
 */
export const cardGrid = styles.grid;

export default function LinkCard({
  href,
  title,
  text,
  image,
  imageAlt = "",
  category,
  date,
  headingLevel = 3,
}: {
  href: string;
  title: string;
  text?: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  date?: string;
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className={styles.card}>
      {image ? (
        <Link href={href} className={styles.imgLink} tabIndex={-1} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className={styles.img} loading="lazy" />
        </Link>
      ) : null}
      <div className={styles.body}>
        {category ? <div className={styles.cat}>{category}</div> : null}
        <H className={styles.title}>
          <Link href={href} className={styles.link}>
            {title}
            <svg className={styles.chev} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </H>
        {text ? <p className={styles.text}>{text}</p> : null}
        {date ? <p className={styles.date}>{date}</p> : null}
      </div>
    </article>
  );
}
