"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Screenshots.module.css";

const COUNT = 9;
const shots = Array.from({ length: COUNT }, (_, i) => i + 1);

export default function Screenshots() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const dragState = useRef({ dragging: false, startX: 0, startScroll: 0, moved: false });

  const scrollByAmount = (dir: 1 | -1) => {
    stripRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = stripRef.current;
    if (!el) return;
    dragState.current = { dragging: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = stripRef.current;
    const s = dragState.current;
    if (!el || !s.dragging) return;
    const dx = e.clientX - s.startX;
    if (Math.abs(dx) > 4) s.moved = true;
    el.scrollLeft = s.startScroll - dx;
  };

  const onPointerUp = () => {
    dragState.current.dragging = false;
  };

  const openLightbox = (i: number) => {
    if (dragState.current.moved) return; // was a drag, not a click
    setLightboxIndex(i);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % COUNT));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + COUNT) % COUNT));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex]);

  return (
    <div className={styles.wrap}>
      <div
        className={styles.strip}
        ref={stripRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {shots.map((n, i) => (
          <button
            type="button"
            className={styles.slide}
            key={n}
            onClick={() => openLightbox(i)}
            aria-label={`Open screenshot ${n} full screen`}
          >
            <img src={`/images/screenshot_${n}.png`} alt={`Drive Test app screenshot ${n}`} loading="lazy" draggable={false} />
          </button>
        ))}
      </div>

      <div className={styles.arrows}>
        <button type="button" className={styles.arrow} onClick={() => scrollByAmount(-1)} aria-label="Scroll left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button type="button" className={styles.arrow} onClick={() => scrollByAmount(1)} aria-label="Scroll right">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
        >
          <button type="button" className={styles.lbClose} onClick={() => setLightboxIndex(null)} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.lbPrev}
            onClick={() => setLightboxIndex((i) => (i === null ? i : (i - 1 + COUNT) % COUNT))}
            aria-label="Previous screenshot"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img src={`/images/screenshot_${lightboxIndex + 1}.png`} alt={`Drive Test app screenshot ${lightboxIndex + 1}`} />
          <button
            type="button"
            className={styles.lbNext}
            onClick={() => setLightboxIndex((i) => (i === null ? i : (i + 1) % COUNT))}
            aria-label="Next screenshot"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
