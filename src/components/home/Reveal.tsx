"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import styles from "./shared.module.css";

export default function Reveal({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  return (
    <div ref={ref} className={`${styles.reveal} ${inView ? styles.in : ""} ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}
