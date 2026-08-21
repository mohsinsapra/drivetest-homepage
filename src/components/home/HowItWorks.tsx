import type { Lang } from "@/lib/i18n";
import { howItWorks, demo } from "@/content/home";
import { Section } from "@/components/ui/Section";
import Reveal from "./Reveal";
import ContentCollage from "./ContentCollage";
import QuizDemo from "./QuizDemo";
import AnalyticsMock from "./AnalyticsMock";
import shared from "./shared.module.css";
import styles from "./HowItWorks.module.css";

export default function HowItWorks({ lang }: { lang: Lang }) {
  const t = howItWorks[lang];
  const d = demo[lang];

  return (
    <Section id="how-it-works">
      <Reveal className={shared.sectionHead}>
        <span className={shared.kicker}>✦ {lang === "en" ? "Step by step" : "Steg för steg"}</span>
        <h2 className={shared.sectionTitle}>{t.title}</h2>
        <p className={shared.sectionSub}>{t.subtitle}</p>
      </Reveal>

      <div className={styles.row}>
        <Reveal className={styles.text}>
          <span className={styles.tag}>✦ {t.steps[0].tag}</span>
          <h3 className={styles.stepTitle}>{t.steps[0].title}</h3>
          <p className={styles.stepDesc}>{t.steps[0].desc}</p>
        </Reveal>
        <Reveal className={styles.mockup}>
          <ContentCollage
            label1={d.collageLabel1}
            pills1={d.collagePills1}
            label2={d.collageLabel2}
            sub2={d.collageSub2}
            label3={d.collageLabel3}
            sub3={d.collageSub3}
          />
        </Reveal>
      </div>

      <div className={`${styles.row} ${styles.rowReverse}`}>
        <Reveal className={styles.text}>
          <span className={styles.tag}>✦ {t.steps[1].tag}</span>
          <h3 className={styles.stepTitle}>{t.steps[1].title}</h3>
          <p className={styles.stepDesc}>{t.steps[1].desc}</p>
        </Reveal>
        <Reveal className={styles.mockup}>
          <QuizDemo d={d} />
        </Reveal>
      </div>

      <div className={styles.row}>
        <Reveal className={styles.text}>
          <span className={styles.tag}>✦ {t.steps[2].tag}</span>
          <h3 className={styles.stepTitle}>{t.steps[2].title}</h3>
          <p className={styles.stepDesc}>{t.steps[2].desc}</p>
        </Reveal>
        <Reveal className={styles.mockup}>
          <AnalyticsMock
            readinessLabel={d.readinessLabel}
            bookmarksLabel={d.bookmarksLabel}
            streakLabel={d.streakLabel}
            categoryLabels={d.categoryLabels}
          />
        </Reveal>
      </div>
    </Section>
  );
}
