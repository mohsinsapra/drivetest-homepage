"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Toc, { type TocItem } from "./Toc";
import styles from "./ArticleLayout.module.css";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\såäö-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

/**
 * Two-column article layout where the TOC is derived client-side from the
 * rendered h2/h3 headings inside `children` (used for the guide page, whose
 * content is raw HTML without ids).
 */
export default function AutoToc({ children, title }: { children: ReactNode; title?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const headings = Array.from(container.querySelectorAll("h2, h3")) as HTMLElement[];
    const used = new Set<string>();
    const built: TocItem[] = [];
    headings.forEach((h) => {
      const text = h.textContent?.trim() ?? "";
      if (!text) return;
      if (!h.id) {
        const base = slugify(text) || "section";
        let id = base;
        let n = 2;
        while (used.has(id) || document.getElementById(id)) {
          id = `${base}-${n++}`;
        }
        h.id = id;
      }
      used.add(h.id);
      if (h.tagName === "H2") {
        built.push({ id: h.id, label: text });
      }
    });
    setItems(built);
  }, []);

  return (
    <div className={styles.grid}>
      {items.length > 0 ? <Toc items={items} title={title} /> : <div />}
      <div className={styles.body} ref={containerRef}>
        {children}
      </div>
    </div>
  );
}
