import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import styles from "./ArticleLayout.module.css";

/**
 * Main column that sits under the hero. With `aside` (default) it stays left of the
 * photo / "On this page" column; with `aside={false}` it spans the full width.
 */
export default function ArticleLayout({ children, aside = true }: { children: ReactNode; aside?: boolean }) {
  return (
    <Container>
      <div className={`${styles.body} ${aside ? styles.narrow : ""}`}>{children}</div>
    </Container>
  );
}
