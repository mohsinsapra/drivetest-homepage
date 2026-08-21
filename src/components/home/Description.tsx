"use client";

import { useState } from "react";
import Prose from "@/components/ui/Prose";
import styles from "./Description.module.css";

export default function Description({
  html,
  moreLabel,
  lessLabel,
}: {
  html: string;
  moreLabel: string;
  lessLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.card}>
      <div className={`${styles.body} ${open ? styles.bodyOpen : ""}`}>
        <Prose html={html} />
        <span className={`${styles.fade} ${open ? styles.fadeHidden : ""}`} aria-hidden="true" />
      </div>
      <button
        type="button"
        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? lessLabel : moreLabel}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
