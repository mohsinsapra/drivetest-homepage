import type { Lang } from "@/lib/i18n";
import { homeTv } from "@/content/home";
import Container from "@/components/ui/Container";
import LinkButton from "@/components/ui/LinkButton";
import styles from "./Home.module.css";

export default function ToolCard({ lang }: { lang: Lang }) {
  const t = homeTv[lang];
  return (
    <section className={styles.block} id="tools">
      <Container>
        <h2 className={styles.blockTitle}>{t.toolsTitle}</h2>
        <div className={styles.toolBox}>
          <div className={styles.toolText}>
            <div className={styles.toolBadge}>{t.toolBadge}</div>
            <h3>
              <a href="/ob-calculator/">
                {t.toolTitle}
                <span aria-hidden="true" className={styles.chev}>
                  ›
                </span>
              </a>
            </h3>
            <p>{t.toolText}</p>
            <LinkButton href="/ob-calculator/" variant="solid">
              {t.toolBtn}
            </LinkButton>
          </div>
          <img className={styles.toolImg} src="/ob-calculator/sample-vilotidsrapport-v2.jpg" alt={t.toolImgAlt} width={210} height={280} loading="lazy" />
        </div>
      </Container>
    </section>
  );
}
