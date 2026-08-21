import type { ReactNode } from "react";
import styles from "./CtaCard.module.css";

export default function CtaCard({
  title,
  body,
  children,
}: {
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {body && <p className={styles.body}>{body}</p>}
      {children && <div className={styles.actions}>{children}</div>}
    </div>
  );
}

export function CtaButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className={styles.btn} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  );
}
