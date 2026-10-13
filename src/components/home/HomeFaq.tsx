import type { Lang } from "@/lib/i18n";
import { faq } from "@/content/home";
import { homeTv } from "@/content/home";
import Container from "@/components/ui/Container";
import styles from "./Home.module.css";

export default function HomeFaq({ lang }: { lang: Lang }) {
  const t = homeTv[lang];
  return (
    <section className={styles.block} id="faq">
      <Container>
        <h2 className={styles.blockTitle}>{t.faqTitle}</h2>
        <div className={styles.faq}>
          {faq[lang].map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary>
                <span>{item.q}</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className={styles.faqAnswer} dangerouslySetInnerHTML={{ __html: item.a }} />
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
