import type { Lang } from "@/lib/i18n";
import { home, homeExtra, demo } from "@/content/home";
import { Section } from "@/components/ui/Section";
import Reveal from "./Reveal";
import shared from "./shared.module.css";
import styles from "./Features.module.css";

function Mock({ k, lang }: { k: string; lang: Lang }) {
  const x = homeExtra[lang];
  const d = demo[lang];
  switch (k) {
    case "ai":
      return (
        <div className={styles.mock}>
          <div className={`${styles.bubble} ${styles.bubbleMe}`}>{x.chatQ}</div>
          <div className={styles.bubble}>{x.chatA}</div>
        </div>
      );
    case "modes":
      return (
        <div className={styles.mockRow}>
          {x.featureTags.modes.map((m, i) => (
            <span key={m} className={`${styles.chip} ${i === 0 ? styles.chipOn : ""}`}>
              {m}
            </span>
          ))}
        </div>
      );
    case "lang":
      return (
        <div className={styles.mockRow}>
          {x.langs.map((m, i) => (
            <span key={m} className={`${styles.chip} ${i === 0 ? styles.chipOn : ""}`}>
              {m}
            </span>
          ))}
        </div>
      );
    case "explain":
      return (
        <div className={styles.mock}>
          <div className={styles.okRow}>✓ {d.correctLabel}</div>
          <div className={styles.line} style={{ width: "92%" }} />
          <div className={styles.line} style={{ width: "70%" }} />
        </div>
      );
    case "bookmark":
      return (
        <div className={styles.mock}>
          {[88, 64, 76].map((w) => (
            <div key={w} className={styles.bmRow}>
              <span className={styles.bmIco} aria-hidden="true" />
              <div className={styles.line} style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      );
    case "analytics":
      return (
        <div className={styles.bars} aria-hidden="true">
          {[40, 62, 48, 78, 66, 90].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      );
    default:
      return (
        <div className={styles.mockRow}>
          {d.collagePills1.map((m, i) => (
            <span key={m} className={`${styles.chip} ${i === 0 ? styles.chipOn : ""}`}>
              {m}
            </span>
          ))}
        </div>
      );
  }
}

export default function Features({ lang }: { lang: Lang }) {
  const h = home[lang];
  const x = homeExtra[lang];

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
        <span className={shared.kicker}>{h.home_features_kicker}</span>
        <h2 className={shared.sectionTitle}>{h.home_features_title}</h2>
        <p className={shared.sectionSub}>{h.home_features_sub}</p>
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={`${styles.card} ${styles.cardWide}`}>
          <div className={styles.top}>
            <Mock k="ai" lang={lang} />
          </div>
          <div className={styles.body}>
            <h3 className={styles.cardTitle}>
              {h.home_feature_ai_title} <span className={styles.aiChip}>AI</span>
            </h3>
            <p className={styles.cardDesc}>{h.home_feature_ai_desc}</p>
          </div>
        </Reveal>

        {features.map((f) => (
          <Reveal className={styles.card} key={f.title}>
            <div className={styles.top}>
              <Mock k={f.key} lang={lang} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
