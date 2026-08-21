"use client";

import { useRef, useState } from "react";
import styles from "./Faq.module.css";

export interface FaqEntry {
  q: string;
  aHtml: string;
}

export default function Faq({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={styles.item} key={item.q}>
            <button
              type="button"
              className={styles.question}
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.q}</span>
              <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={styles.panel}
              style={{ maxHeight: open ? `${panelRefs.current[i]?.scrollHeight ?? 400}px` : "0px" }}
            >
              <div
                className={styles.panelInner}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                dangerouslySetInnerHTML={{ __html: item.aHtml }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
