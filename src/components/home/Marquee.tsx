import styles from "./Marquee.module.css";

export default function Marquee({ words }: { words: string[] }) {
  const group = (key: string) => (
    <div className={styles.group} key={key} aria-hidden={key === "b" ? true : undefined}>
      {words.map((w, i) => (
        <span key={`${key}-${i}`} className={styles.item}>
          {w}
          <span className={styles.star}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
