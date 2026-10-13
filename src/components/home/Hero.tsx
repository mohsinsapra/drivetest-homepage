"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { home, homeExtra, demo } from "@/content/home";
import { urls } from "@/content/site";
import Container from "@/components/ui/Container";
import AppModal from "./AppModal";
import CountUp from "./CountUp";
import shared from "./shared.module.css";
import styles from "./Hero.module.css";

export default function Hero({ lang }: { lang: Lang }) {
  const h = home[lang];
  const x = homeExtra[lang];
  const d = demo[lang];
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className={styles.hero} id="hero" data-hero>
      <Container>
        <div className={styles.top}>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>Drive Test</h1>
            <p className={styles.titleSub}>{h.home_description}</p>
          </div>
          <div className={styles.side}>
            <p className={styles.eyebrow}>{h.home_hero_eyebrow}</p>
            <p className={styles.lede}>{x.heroLede}</p>
            <div className={styles.btns}>
              <a href="#download" className={shared.btnPrimary}>
                {x.heroPrimary}
              </a>
              <button type="button" className={shared.btnGhost} onClick={() => setModalOpen(true)} aria-haspopup="dialog">
                {h.home_phone_try}
              </button>
            </div>
            <p className={styles.note}>{x.heroNote}</p>
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.blobA} aria-hidden="true" />
          <span className={styles.blobB} aria-hidden="true" />
          <div className={styles.question}>
            <span className={styles.qLabel}>{x.heroCardLabel}</span>
            <p className={styles.qText}>{d.question}</p>
            <div className={`${styles.opt} ${styles.optOk}`}>
              <span className={styles.optDot} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              {d.options[0]}
            </div>
            <div className={styles.opt}>
              <span className={styles.optDot} aria-hidden="true" />
              {d.options[1]}
            </div>
          </div>
          <img className={`${styles.shot} ${styles.shotA}`} src="/images/screenshot_4.png" alt="Drive Test app: practice real exam questions" />
          <img className={`${styles.shot} ${styles.shotB}`} src="/images/screenshot_5.png" alt="Drive Test app: see your score instantly" />
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>
              <CountUp to={1000} suffix="+" />
            </span>
            <span className={styles.statLabel}>{h.home_stat_questions_label}</span>
            <span className={styles.statNote}>{x.statQuestionsNote}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>
              <CountUp to={3} />
            </span>
            <span className={styles.statLabel}>{h.home_stat_modes_label}</span>
            <span className={styles.statNote}>{x.statModesNote}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>
              <CountUp to={3} />
            </span>
            <span className={styles.statLabel}>{h.home_stat_platforms_label}</span>
            <span className={styles.statNote}>{x.statPlatformsNote}</span>
          </div>
        </div>
      </Container>

      <AppModal open={modalOpen} onClose={() => setModalOpen(false)} closeLabel={h.home_modal_close} />
    </header>
  );
}
