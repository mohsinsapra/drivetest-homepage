import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import Reveal from "./Reveal";
import shared from "./shared.module.css";
import styles from "./LicenceCta.module.css";

export default function LicenceCta({ lang }: { lang: Lang }) {
  const h = home[lang];

  return (
    <Section>
      <Reveal className={styles.banner}>
        <span className={styles.glow} aria-hidden="true" />
        <span className={styles.kicker}>{h.home_cta_kicker}</span>
        <h2 className={styles.title}>{h.home_cta_title}</h2>
        <p className={styles.body}>{h.home_cta_body}</p>
        <div className={styles.chips}>
          <span className={styles.chip}>{h.home_cta_chip1}</span>
          <span className={styles.chip}>{h.home_cta_chip2}</span>
          <span className={styles.chip}>{h.home_cta_chip3}</span>
        </div>
        <Link href={localePath(lang, "/taxi-licence-guide/")} className={shared.btnPrimary}>
          {h.home_cta_btn}
        </Link>
      </Reveal>
    </Section>
  );
}
