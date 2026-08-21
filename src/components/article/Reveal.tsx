"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";
import styles from "./Reveal.module.css";

export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add(styles.in);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.in);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0, rootMargin: "80px 0px -10px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = delay ? ({ transitionDelay: `${delay}ms` } as React.CSSProperties) : undefined;

  return createElement(
    as,
    { ref, className: `${styles.reveal} ${className ?? ""}`, style },
    children
  );
}
