import type { Lang } from "@/lib/i18n";
import { home, homeExtra } from "@/content/home";
import Container from "@/components/ui/Container";
import StoreButtons from "@/components/layout/StoreButtons";
import Reveal from "./Reveal";
import styles from "./Download.module.css";

export default function Download({ lang }: { lang: Lang }) {
  const h = home[lang];
  const x = homeExtra[lang];

  return (
    <div className={styles.wrap} id="download">
      <Container>
        <Reveal className={styles.band}>
          <span className={styles.glow} aria-hidden="true" />
          <div className={styles.iconWrap}>
            <img src="/assets/icon.png" alt="Drive Test app icon" />
          </div>
          <h2 className={styles.title}>{h.home_download_title}</h2>
          <p className={styles.lead}>{x.ctaTitle}</p>
          <p className={styles.sub}>{h.home_download_sub}</p>
          <ul className={styles.bullets}>
            {x.ctaBullets.map((b) => (
              <li key={b}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <div className={styles.storeRow}>
            <StoreButtons
              playLabelTop={h.home_store_play_top}
              iosLabelTop={h.home_store_ios_top}
              webLabelTop={h.home_store_web_top}
              webLabelName={h.home_store_web_name}
            />
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
