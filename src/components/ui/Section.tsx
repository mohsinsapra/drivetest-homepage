import type { ReactNode } from "react";
import styles from "./Section.module.css";
import Container from "./Container";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${styles.section} ${className ?? ""}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className={styles.head}>
      {kicker ? <span className={styles.kicker}>{kicker}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {sub ? <p className={styles.sub}>{sub}</p> : null}
    </div>
  );
}
