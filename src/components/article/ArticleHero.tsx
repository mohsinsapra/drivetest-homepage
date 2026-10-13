import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Breadcrumbs, { type Crumb } from "@/components/ui/Breadcrumbs";
import type { Lang } from "@/lib/i18n";
import Toc, { type TocItem } from "./Toc";
import styles from "./ArticleHero.module.css";

/**
 * Subpage header in the public-service pattern: breadcrumb, H1, bold intro on the
 * left; photo with an overlapping "On this page" box on the right.
 */
export default function ArticleHero({
  lang = "en",
  crumbs,
  title,
  subtitle,
  lead,
  meta,
  actions,
  image,
  toc,
  tocTitle,
}: {
  lang?: Lang;
  crumbs?: Crumb[];
  title: string;
  subtitle?: string;
  lead?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  image?: { src: string; alt: string };
  toc?: TocItem[];
  tocTitle?: string;
}) {
  const hasToc = !!toc && toc.length > 1;
  const hasMedia = !!image || hasToc;
  return (
    <header className={styles.hero}>
      <Container>
        <div className={`${styles.grid} ${hasMedia ? styles.withMedia : ""}`}>
          <div className={styles.text}>
            {crumbs && <Breadcrumbs lang={lang} items={crumbs} />}
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {lead && <div className={styles.lead}>{lead}</div>}
            {meta && <div className={styles.meta}>{meta}</div>}
            {actions && <div className={styles.actions}>{actions}</div>}
          </div>
          {hasMedia && (
            <div className={`${styles.media} ${image ? "" : styles.noPhoto}`}>
              {image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className={styles.photo} src={image.src} alt={image.alt} width={1200} height={800} />
              )}
              {hasToc && <Toc items={toc!} title={tocTitle} />}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}

export function MetaPill({ children }: { children: ReactNode }) {
  return <span className={styles.metaItem}>{children}</span>;
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className={styles.metaItem}>{children}</span>;
}
