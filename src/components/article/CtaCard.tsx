import type { ReactNode } from "react";
import styles from "./CtaCard.module.css";

/** Brand-colour call-to-action box: white text, white buttons. */
export default function CtaCard({
  title,
  body,
  html,
  children,
  id,
}: {
  title: string;
  body?: string;
  html?: string;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <section className={styles.card} id={id}>
      <h2 className={styles.title}>{title}</h2>
      {body && <p className={styles.body}>{body}</p>}
      {html && <div className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />}
      {children && <div className={styles.actions}>{children}</div>}
    </section>
  );
}

export function CtaButton({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a href={href} className={styles.btn} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      <span>{children}</span>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
