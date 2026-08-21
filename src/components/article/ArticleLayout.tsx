import type { ReactNode } from "react";
import styles from "./ArticleLayout.module.css";

export default function ArticleLayout({ sidebar, children }: { sidebar: ReactNode; children: ReactNode }) {
  return (
    <div className={styles.grid}>
      {sidebar}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
