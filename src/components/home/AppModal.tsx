"use client";

import { useEffect } from "react";
import { urls } from "@/content/site";
import styles from "./AppModal.module.css";

export default function AppModal({
  open,
  onClose,
  closeLabel,
}: {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
}) {
  useEffect(() => {
    if (!open) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Drive Test live app"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button type="button" className={styles.close} onClick={onClose}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
        {closeLabel}
      </button>
      <div className={styles.phone}>
        <span className={styles.notch} aria-hidden="true" />
        <div className={styles.screen}>
          <iframe src={urls.livePwaIframe} title="Drive Test app" allow="autoplay; fullscreen" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
