import type { Lang } from "@/lib/i18n";
import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import Reveal from "./Reveal";
import shared from "./shared.module.css";
import styles from "./FreeTools.module.css";

export default function FreeTools({ lang }: { lang: Lang }) {
  const h = home[lang];
  const isSv = lang === "sv";

  return (
    <Section id="tools">
      <Reveal className={shared.sectionHead}>
        <span className={shared.kicker}>✦ {h.home_tools_kicker}</span>
        <h2 className={shared.sectionTitle}>{h.home_tools_title}</h2>
        <p className={shared.sectionSub}>{h.home_tools_sub}</p>
      </Reveal>

      <Reveal className={styles.card}>
        <div>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{h.home_tool_ob_title}</h3>
            <span className={styles.newChip}>NEW</span>
          </div>
          <p className={styles.desc}>{h.home_tool_ob_desc}</p>
          <a href="/ob-calculator/" className={shared.btnPrimary}>
            {h.home_tool_ob_btn}
          </a>
        </div>

        <div className={styles.receipt}>
          <div className={styles.receiptHead}>
            <span className={styles.receiptTitle}>{isSv ? "Vilotidsrapport" : "Rest-time slip"}</span>
            <span className={styles.receiptDate}>2026-08-14</span>
          </div>
          <div className={styles.receiptRow}>
            <span>{isSv ? "Arbetad tid" : "Time worked"}</span>
            <span>07:40</span>
          </div>
          <div className={styles.receiptRow}>
            <span>{isSv ? "Rast" : "Break"}</span>
            <span>00:30</span>
          </div>
          <div className={styles.receiptRow}>
            <span>{isSv ? "Total lön" : "Total pay"}</span>
            <span>1 284 kr</span>
          </div>
          <div className={styles.receiptChips}>
            <span className={`${styles.obChip} ${styles.ob1}`}>OB1 · 3h 10m</span>
            <span className={`${styles.obChip} ${styles.ob2}`}>OB2 · 1h 45m</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
