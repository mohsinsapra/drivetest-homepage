import type { Lang } from "@/lib/i18n";
import { homeTv, home } from "@/content/home";
import Container from "@/components/ui/Container";
import StoreButtons from "@/components/layout/StoreButtons";
import styles from "./Home.module.css";

export default function AppBand({ lang }: { lang: Lang }) {
  const t = homeTv[lang];
  const h = home[lang];
  return (
    <section className={styles.block} id="download">
      <Container>
        <div className={styles.appBox}>
          <div className={styles.appText}>
            <h2>{t.appTitle}</h2>
            <p>{t.appText}</p>
            <ul className={styles.appList}>
              {t.appBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <StoreButtons
              playLabelTop={h.home_store_play_top}
              iosLabelTop={h.home_store_ios_top}
              webLabelTop={h.home_store_web_top}
              webLabelName={h.home_store_web_name}
            />
          </div>
          <div className={styles.appShot}>
            <img src="/images/screenshot_4.png" alt={t.appShotAlt} width={420} height={910} loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  );
}
