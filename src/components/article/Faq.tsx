"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

export interface FaqEntry {
  q: string;
  aHtml: string;
}

export default function Faq({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={`${styles.item} ${open ? styles.itemOpen : ""}`} key={item.q}>
            <h3 className={styles.heading}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span>{item.q}</span>
                <svg className={`${styles.icon} ${open ? styles.iconOpen : ""}`} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div id={`faq-panel-${i}`} role="region" className={styles.panel} hidden={!open}>
              <div className={styles.panelInner} dangerouslySetInnerHTML={{ __html: item.aHtml }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
