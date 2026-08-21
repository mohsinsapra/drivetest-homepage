"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { BrowserFrame, Skel } from "./MockupFrame";
import styles from "./ContentCollage.module.css";

/** Rotating card stack — three mockups of the exam tracks you can choose from (wordbyword-style demo). */
export default function ContentCollage({
  label1,
  pills1,
  label2,
  sub2,
  label3,
  sub3,
}: {
  label1: string;
  pills1: string[];
  label2: string;
  sub2: string;
  label3: string;
  sub3: string;
}) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), 3000);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div>
      <div className={styles.stack}>
        <div className={`${styles.card} ${active === 0 ? styles.active : ""}`}>
          <BrowserFrame url="app.drivetest.se">
            <div className={styles.label}>{label1}</div>
            <div className={styles.sub}>3 knowledge exams</div>
            <div className={styles.pillRow}>
              {pills1.map((p) => (
                <span className={styles.pill} key={p}>
                  <span className={styles.pillDot} />
                  {p}
                </span>
              ))}
            </div>
          </BrowserFrame>
        </div>

        <div className={`${styles.card} ${active === 1 ? styles.active : ""}`}>
          <BrowserFrame url="drivetest.se/yrkeskunnande">
            <div className={styles.big}>{label2}</div>
            <div style={{ textAlign: "center", marginBottom: 14 }}>
              <span className={styles.pill}>{sub2}</span>
            </div>
            <Skel w="100%" style={{ marginBottom: 8 }} />
            <Skel w="80%" style={{ marginBottom: 8 }} />
            <Skel w="60%" />
          </BrowserFrame>
        </div>

        <div className={`${styles.card} ${active === 2 ? styles.active : ""}`}>
          <BrowserFrame url="app.drivetest.se">
            <div className={styles.label}>{label3}</div>
            <div className={styles.sub}>{sub3}</div>
            <Skel w="100%" style={{ marginBottom: 8 }} />
            <Skel w="90%" style={{ marginBottom: 8 }} />
            <Skel w="70%" style={{ marginBottom: 8 }} />
            <Skel w="85%" />
          </BrowserFrame>
        </div>
      </div>

      <div className={styles.dots}>
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${active === i ? styles.dotActive : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Show card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
