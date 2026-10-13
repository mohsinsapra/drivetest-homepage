import { createElement, type ReactNode } from "react";

/** Kept for compatibility: no scroll animation any more, renders a plain element. */
export default function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
}) {
  return createElement(as, { className }, children);
}
