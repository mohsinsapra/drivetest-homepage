import type { Lang } from "@/lib/i18n";
import { home } from "@/content/home";
import Container from "@/components/ui/Container";
import StoreButtons from "@/components/layout/StoreButtons";
import Reveal from "./Reveal";
import styles from "./Download.module.css";

export default function Download({ lang }: { lang: Lang }) {
  const h = home[lang];

  return (
    <div className={styles.wrap} id="download">
      <Container>
        <Reveal>
          <div className={styles.iconWrap}>
            <img src="/assets/icon.png" alt="Drive Test app icon" />
          </div>
          <h2 className={styles.title}>{h.home_download_title}</h2>
          <p className={styles.sub}>{h.home_download_sub}</p>
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
