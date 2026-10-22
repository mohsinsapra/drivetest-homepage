import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./LinkButton.module.css";

/**
 * Trafikverket-style link button with a right-aligned chevron.
 * Props:
 *  - href: string
 *  - children: label
 *  - variant: "outline" (default: lavender surface-container-highest bg, brand text) | "solid" (brand bg, white text)
 *  - external?: boolean — opens in a new tab with rel=noopener (plain <a>)
 *  - block?: boolean — full width, label left / chevron right (for 2x2 widget grids and link rows)
 *  - className?: string
 */
export default function LinkButton({
  href,
  children,
  variant = "outline",
  external = false,
  block = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
  external?: boolean;
  block?: boolean;
  className?: string;
}) {
  const cls = `${styles.btn} ${variant === "solid" ? styles.solid : styles.outline} ${block ? styles.block : ""} ${className}`;
  const chevron = (
    <svg className={styles.chev} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        {chevron}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <span>{children}</span>
      {chevron}
    </Link>
  );
}
