"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { home } from "@/content/home";
import StoreButtons from "@/components/layout/StoreButtons";
import Container from "@/components/ui/Container";
import TitleHighlight from "./TitleHighlight";
import AppModal from "./AppModal";
import CountUp from "./CountUp";
import styles from "./Hero.module.css";

export default function Hero({ lang }: { lang: Lang }) {
  const h = home[lang];
  const [modalOpen, setModalOpen] = useState(false);

  const taglineWords = h.home_description.split(" ");
  const [firstWord, ...restWords] = taglineWords;

  return (
    <header className={styles.hero} id="hero" data-hero>
      <Container>
        <div className={styles.inner}>
          <div>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowIcon}>
                <img src="/assets/icon.png" alt="" />
              </span>
              <span className={styles.dot} aria-hidden="true" />
              {h.home_hero_eyebrow}
            </span>

            <h1 className={styles.title} aria-label="Drive Test">
              <span className={styles.titleLine} aria-hidden="true">
                {"Drive".split("").map((c, i) => (
                  <span key={i} style={{ animationDelay: `${0.12 + i * 0.035}s` }}>
                    {c}
                  </span>
                ))}
              </span>
              <span className={`${styles.titleLine} ${styles.accent}`} aria-hidden="true">
                {"Test".split("").map((c, i) => (
                  <span key={i} style={{ animationDelay: `${0.32 + i * 0.035}s` }}>
                    {c}
                  </span>
                ))}
              </span>
            </h1>

            <p className={styles.tagline}>
              <TitleHighlight word={firstWord} /> {restWords.join(" ")}
            </p>

            <div className={styles.storeRow}>
              <StoreButtons
                playLabelTop={h.home_store_play_top}
                iosLabelTop={h.home_store_ios_top}
                webLabelTop={h.home_store_web_top}
                webLabelName={h.home_store_web_name}
              />
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>
                  <CountUp to={1000} suffix="+" />
                </span>
                <span className={styles.statLabel}>{h.home_stat_questions_label}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>
                  <CountUp to={3} />
                </span>
                <span className={styles.statLabel}>{h.home_stat_modes_label}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>
                  <CountUp to={3} />
                </span>
                <span className={styles.statLabel}>{h.home_stat_platforms_label}</span>
              </div>
            </div>

            <span className={styles.scrollHint}>
              {h.home_hero_hint}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>

          <div className={styles.visual}>
            <div className={styles.phone}>
              <span className={styles.phoneGlow} aria-hidden="true" />
              <span className={styles.phoneNotch} aria-hidden="true" />
              <div className={styles.phoneScreen}>
                <img src="/images/screenshot_1.png" alt="Drive Test app — practice test screen" />
              </div>
              <button
                type="button"
                className={styles.tryBtn}
                onClick={() => setModalOpen(true)}
                aria-haspopup="dialog"
              >
                <svg className={styles.playIco} viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                  <path d="M1 0l8 5-8 5z" />
                </svg>
                {h.home_phone_try}
              </button>
            </div>
          </div>
        </div>
      </Container>

      <AppModal open={modalOpen} onClose={() => setModalOpen(false)} closeLabel={h.home_modal_close} />
    </header>
  );
}
