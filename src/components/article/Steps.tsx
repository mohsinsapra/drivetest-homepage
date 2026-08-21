import styles from "./Steps.module.css";

export default function Steps({ items }: { items: string[] }) {
  return (
    <ol className={styles.list}>
      {items.map((html, i) => (
        <li className={styles.item} key={i}>
          <span className={styles.num} aria-hidden="true" />
          {/* eslint-disable-next-line react/no-danger */}
          <div className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />
        </li>
      ))}
    </ol>
  );
}
