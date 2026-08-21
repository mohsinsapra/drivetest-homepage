import type { Lang } from "@/lib/i18n";
import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import Reveal from "./Reveal";
import shared from "./shared.module.css";
import styles from "./Features.module.css";

const ICONS: Record<string, React.ReactNode> = {
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </svg>
  ),
  modes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  ),
  lang: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
      <path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
    </svg>
  ),
  explain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5A6 6 0 0012 3z" />
    </svg>
  ),
  bookmark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12a1 1 0 011 1v17l-7-4-7 4V4a1 1 0 011-1z" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M10 20V4M16 20v-7M21 20H3" />
    </svg>
  ),
  ready: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

export default function Features({ lang }: { lang: Lang }) {
  const h = home[lang];

  const features = [
    { key: "modes", title: h.home_feature1_title, desc: h.home_feature1_desc },
    { key: "lang", title: h.home_feature2_title, desc: h.home_feature2_desc },
    { key: "explain", title: h.home_feature3_title, desc: h.home_feature3_desc },
    { key: "bookmark", title: h.home_feature4_title, desc: h.home_feature4_desc },
    { key: "analytics", title: h.home_feature5_title, desc: h.home_feature5_desc },
    { key: "ready", title: h.home_feature6_title, desc: h.home_feature6_desc },
  ];

  return (
    <Section id="features">
      <Reveal className={shared.sectionHead}>
        <span className={shared.kicker}>✦ {h.home_features_kicker}</span>
        <h2 className={shared.sectionTitle}>{h.home_features_title}</h2>
        <p className={shared.sectionSub}>{h.home_features_sub}</p>
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={`${styles.card} ${styles.cardWide}`}>
          <span className={styles.iconBox}>{ICONS.ai}</span>
          <div>
            <h3 className={styles.cardTitle}>
              {h.home_feature_ai_title} <span className={styles.aiChip}>AI</span>
            </h3>
            <p className={styles.cardDesc}>{h.home_feature_ai_desc}</p>
          </div>
        </Reveal>

        {features.map((f) => (
          <Reveal className={styles.card} key={f.title}>
            <span className={styles.iconBox}>{ICONS[f.key]}</span>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
