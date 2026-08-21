import styles from "./Prose.module.css";

export default function Prose({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={`${styles.prose} ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
