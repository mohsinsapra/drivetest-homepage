import styles from "./TitleHighlight.module.css";

/** Wraps one word with an animated accent-tinted sweep bar behind it (wordbyword-style). */
export default function TitleHighlight({ word }: { word: string }) {
  return (
    <span className={styles.wrap}>
      <span className={styles.sweep} aria-hidden="true" />
      <span className={styles.word}>{word}</span>
    </span>
  );
}
