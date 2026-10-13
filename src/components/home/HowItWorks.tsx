"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { howItWorks, demo, homeExtra } from "@/content/home";
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
  const x = homeExtra[lang];
  const [active, setActive] = useState(0);

  const steps = [
    ...t.steps,
    { tag: x.step4Tag, title: x.step4Title, desc: x.step4Desc },
  ];

  const visuals = [
    <ContentCollage
      key="v1"
      label1={d.collageLabel1}
      pills1={d.collagePills1}
      label2={d.collageLabel2}
      sub2={d.collageSub2}
      label3={d.collageLabel3}
      sub3={d.collageSub3}
    />,
    <QuizDemo key="v2" d={d} />,
    <AnalyticsMock
      key="v3"
      readinessLabel={d.readinessLabel}
      bookmarksLabel={d.bookmarksLabel}
      streakLabel={d.streakLabel}
      categoryLabels={d.categoryLabels}
    />,
    <img key="v4" className={styles.shot} src="/images/screenshot_4.png" alt={x.step4Title} />,
  ];

  return (
    <Section id="how-it-works">
      <Reveal className={shared.sectionHead}>
        <span className={shared.kicker}>{x.howKicker}</span>
        <h2 className={shared.sectionTitle}>{t.title}</h2>
        <p className={shared.sectionSub}>{x.howSub}</p>
      </Reveal>

      <div className={styles.tabs} role="tablist">
        {steps.map((s, i) => (
          <button
            key={s.tag}
            type="button"
            role="tab"
            id={`hiw-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`hiw-panel-${i}`}
            className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
          >
            <span className={styles.tabNum}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.tabTitle}>{s.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.panelWrap}>
        {steps.map((s, i) => (
          <div
            key={s.tag}
            id={`hiw-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`hiw-tab-${i}`}
            hidden={active !== i}
            className={styles.panel}
          >
            <div className={styles.text}>
              <span className={styles.tag}>{s.tag}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
            <div className={styles.visual}>{visuals[i]}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
