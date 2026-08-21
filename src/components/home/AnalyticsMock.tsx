"use client";

import { useInView } from "@/lib/useInView";
import { PhoneFrame } from "./MockupFrame";
import styles from "./AnalyticsMock.module.css";

const RING_R = 40;
const RING_C = 2 * Math.PI * RING_R;
const READINESS = 86;

const BAR_HEIGHTS = [40, 65, 50, 80, 60, 92, 70];
const CATEGORIES: Array<{ pct: number }> = [
  { pct: 88 },
  { pct: 64 },
  { pct: 92 },
  { pct: 45 },
];

export default function AnalyticsMock({
  readinessLabel,
  bookmarksLabel,
  streakLabel,
  categoryLabels,
}: {
  readinessLabel: string;
  bookmarksLabel: string;
  streakLabel: string;
  categoryLabels: string[];
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const ringOffset = RING_C - (inView ? READINESS / 100 : 0) * RING_C;

  return (
    <div ref={ref} className={styles.wrap}>
      <PhoneFrame>
        <div className={styles.top}>
          <div className={styles.ringWrap}>
            <svg viewBox="0 0 96 96" width="84" height="84">
              <circle className={styles.ringTrack} cx="48" cy="48" r={RING_R} />
              <circle
                className={styles.ringVal}
                cx="48"
                cy="48"
                r={RING_R}
                strokeDasharray={RING_C}
                strokeDashoffset={ringOffset}
              />
            </svg>
            <span className={styles.ringLabel}>{inView ? READINESS : 0}%</span>
          </div>
          <div className={styles.chips}>
            <span className={styles.chip}>🔖 12 {bookmarksLabel}</span>
            <span className={styles.chip}>🔥 9 {streakLabel}</span>
          </div>
        </div>

        <div className={styles.bars}>
          {BAR_HEIGHTS.map((h, i) => (
            <div className={styles.barCol} key={i}>
              <div className={styles.bar} style={{ height: inView ? `${h}%` : "0%" }} />
            </div>
          ))}
        </div>

        <div className={styles.categories}>
          {CATEGORIES.map((c, i) => (
            <div className={styles.catRow} key={categoryLabels[i]}>
              <div className={styles.catTop}>
                <span>{categoryLabels[i]}</span>
                <span>{inView ? c.pct : 0}%</span>
              </div>
              <div className={styles.catBar}>
                <div className={styles.catFill} style={{ width: inView ? `${c.pct}%` : "0%" }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "auto", paddingTop: 14, textAlign: "center", fontSize: 11, color: "var(--muted)", fontWeight: 600 }}>
          {readinessLabel}
        </div>
      </PhoneFrame>
    </div>
  );
}
