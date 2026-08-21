import styles from "./Callout.module.css";

export default function Callout({
  title,
  html,
  listHtml,
  tone = "default",
}: {
  title?: string;
  html?: string;
  listHtml?: string;
  tone?: "default" | "warn";
}) {
  return (
    <div className={`${styles.callout} ${tone === "warn" ? styles.warn : ""}`}>
      {title && <div className={styles.title}>{title}</div>}
      {html && <div className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />}
      {listHtml && <div className={styles.body} dangerouslySetInnerHTML={{ __html: listHtml }} />}
    </div>
  );
}
