import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { homeTv } from "@/content/home";
import { sitePhotos } from "@/lib/sitePhotos";
import Container from "@/components/ui/Container";
import LinkButton from "@/components/ui/LinkButton";
import { WidgetIcon } from "./Icons";
import styles from "./Home.module.css";

const Chevron = () => (
  <span aria-hidden="true" className={styles.chev}>
    ›
  </span>
);

export default function HomeHero({ lang }: { lang: Lang }) {
  const t = homeTv[lang];
  return (
    <>
      <section className={styles.hero} aria-labelledby="home-h1">
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 id="home-h1">{t.h1}</h1>
            <p>{t.heroText}</p>
            <LinkButton href={`${localePath(lang, "/")}#download`}>{t.heroBtn}</LinkButton>
          </div>
          <div className={styles.heroPhoto}>
            <img src={sitePhotos.taxiRoof.src} alt={t.heroAlt} />
          </div>
        </div>
      </section>

      <Container>
        <div className={styles.widgets}>
          {t.widgets.map((w) => (
            <section key={w.title} className={styles.widget}>
              <div className={styles.widgetIcon}>
                <WidgetIcon name={w.icon} />
              </div>
              <h2>
                <Link href={localePath(lang, w.href)}>
                  {w.title}
                  <Chevron />
                </Link>
              </h2>
              <p>{w.text}</p>
              <div className={styles.widgetLinks}>
                {w.links.map((l) => (
                  <LinkButton key={l.href} href={localePath(lang, l.href)} block>
                    {l.label}
                  </LinkButton>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
