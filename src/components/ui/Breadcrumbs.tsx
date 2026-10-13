import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

/**
 * Trafikverket-style breadcrumb trail.
 * Props:
 *  - items: { label: string; href?: string }[]  — the LAST item is the current page (no href needed).
 *  - lang: "en" | "sv" — only used for the aria-label ("Breadcrumb" / "Brödsmulor").
 * Render inside <Container>. Example: <Breadcrumbs lang={lang} items={[{label:"Home",href:"/"},{label:"Exams",href:"/exams/"},{label:"Taxi licence"}]} />
 */
export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items, lang = "en" }: { items: Crumb[]; lang?: "en" | "sv" }) {
  return (
    <nav className={styles.nav} aria-label={lang === "sv" ? "Brödsmulor" : "Breadcrumb"}>
      <ol className={styles.list}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className={styles.item}>
              {c.href && !last ? (
                <Link href={c.href} className={styles.link}>
                  {c.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current={last ? "page" : undefined}>
                  {c.label}
                </span>
              )}
              {!last && (
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
