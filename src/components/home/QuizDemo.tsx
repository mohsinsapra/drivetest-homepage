"use client";

import { useState } from "react";
import styles from "./QuizDemo.module.css";

type DemoStrings = {
  question: string;
  options: string[];
  correctIndex: number;
  explanationTitle: string;
  explanation: string;
  askAiBtn: string;
  aiBubbleText: string;
  ttsLabel: string;
  tryAgainLabel: string;
  progressLabel: string;
  correctLabel: string;
  wrongLabel: string;
};

const RING_R = 15;
const RING_C = 2 * Math.PI * RING_R;

/**
 * Interactive multiple-choice demo (wordbyword-spotlight style).
 * The question below is an illustrative example only, not official exam content.
 */
export default function QuizDemo({ d }: { d: DemoStrings }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [askedAi, setAskedAi] = useState(false);
  const [tts, setTts] = useState(false);

  const answered = selected !== null;
  const isCorrect = selected === d.correctIndex;
  const score = answered ? (isCorrect ? 100 : 0) : 0;
  const ringOffset = RING_C - (score / 100) * RING_C;

  const reset = () => {
    setSelected(null);
    setAskedAi(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.topRow}>
          <span className={styles.progressLabel}>{d.progressLabel}</span>
          <span className={styles.ring}>
            <svg viewBox="0 0 36 36" width="36" height="36">
              <circle className={styles.ringTrack} cx="18" cy="18" r={RING_R} />
              <circle
                className={styles.ringVal}
                cx="18"
                cy="18"
                r={RING_R}
                strokeDasharray={RING_C}
                strokeDashoffset={ringOffset}
              />
            </svg>
          </span>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: answered ? "100%" : "0%" }} />
        </div>

        <div className={styles.question}>{d.question}</div>

        <div className={styles.options}>
          {d.options.map((opt, i) => {
            let cls = styles.option;
            if (answered && i === d.correctIndex) cls += ` ${styles.optionCorrect}`;
            else if (answered && i === selected) cls += ` ${styles.optionWrong}`;
            return (
              <button
                key={opt}
                type="button"
                className={cls}
                disabled={answered}
                onClick={() => setSelected(i)}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className={styles.toggleRow}>
          <span className={styles.toggleLabel}>{d.ttsLabel}</span>
          <button
            type="button"
            className={`${styles.switch} ${tts ? styles.switchOn : ""}`}
            aria-pressed={tts}
            aria-label={d.ttsLabel}
            onClick={() => setTts((v) => !v)}
          />
        </div>

        {answered && (
          <div className={`${styles.result} ${isCorrect ? styles.resultCorrect : styles.resultWrong}`}>
            <div className={styles.resultTitle}>{isCorrect ? d.correctLabel : d.wrongLabel} — {d.explanationTitle}</div>
            <div className={styles.resultBody}>{d.explanation}</div>

            {!askedAi ? (
              <button type="button" className={styles.askBtn} onClick={() => setAskedAi(true)}>
                {d.askAiBtn}
              </button>
            ) : (
              <div className={styles.bubble}>{d.aiBubbleText}</div>
            )}

            <button type="button" className={styles.retryBtn} onClick={reset}>
              {d.tryAgainLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
