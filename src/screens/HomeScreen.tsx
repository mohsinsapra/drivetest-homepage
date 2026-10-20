import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { homeSimple } from "@/content/homeSimple";
import { home } from "@/content/home";
import { iosAvailable, urls } from "@/content/site";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import StoreButtons from "@/components/layout/StoreButtons";
import styles from "@/components/home/Home.module.css";

/** A still picture of a question in the app: the answer, the explanation and the tutor. */
function QuestionPreview({ lang }: { lang: Lang }) {
  const t = homeSimple[lang].preview;
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.windowBar}>
        <span />
        <span />
        <span />
        <em>{t.progress}</em>
      </div>
      <div className={styles.windowBody}>
        <div className={styles.progress}>
          <span style={{ width: "17%" }} />
        </div>
        <p className={styles.category}>{t.category}</p>
        <p className={styles.question}>{t.question}</p>
        <ul className={styles.options}>
          {t.options.map((o, i) => (
            <li key={o} className={i === 0 ? styles.optionRight : undefined}>
              <span className={styles.optionMark}>{i === 0 ? "✓" : String.fromCharCode(65 + i)}</span>
              {o}
            </li>
          ))}
        </ul>
        <div className={styles.explain}>
          <strong>{t.correct}</strong> {t.explanation}
          <span className={styles.tutor}>✦ {t.tutor}</span>
        </div>
      </div>
    </div>
  );
}

export default function HomeScreen({ lang }: { lang: Lang }) {
  const t = homeSimple[lang];
  const h = home[lang];
  return (
    <>
      <SiteHeader lang={lang} currentPath="/" />
      <main id="main" className={styles.home}>
        <section className={styles.hero} aria-labelledby="home-h1">
          <p className={styles.pill}>{t.eyebrow}</p>
          <h1 id="home-h1">
            {t.title[0]} <span className={styles.accent}>{t.title[1]}</span>
          </h1>
          <p className={styles.lead}>{t.lead}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#download">
              {t.primary}
            </a>
            <a className={styles.secondary} href={urls.webApp} target="_blank" rel="noopener noreferrer">
              {t.secondary}
            </a>
          </div>
          <ul className={styles.facts}>
            {t.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <QuestionPreview lang={lang} />
        </section>

        <section className={styles.section}>
          <p className={styles.pill}>{t.whyEyebrow}</p>
          <h2 className={styles.title}>{t.whyTitle}</h2>
          <div className={styles.stats}>
            {t.why.map((s) => (
              <div key={s.big}>
                <strong>{s.big}</strong>
                <span>{s.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.dark}>
          <div className={styles.darkInner}>
            <div>
              <p className={styles.pill}>{t.whatEyebrow}</p>
              <h2 className={styles.title}>{t.whatTitle}</h2>
              <p className={styles.darkLead}>{t.what}</p>
            </div>
            <ul className={styles.checks}>
              {t.whatList.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.pill}>{t.howEyebrow}</p>
          <h2 className={styles.title}>{t.howTitle}</h2>
          <ol className={styles.steps}>
            {t.how.map((step, i) => (
              <li key={step.title}>
                <span className={styles.stepNo}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <a className={styles.more} href={localePath(lang, "/exams/taxi-licence/")}>
            {t.howMore}
          </a>
        </section>

        <section className={styles.cta} id="download">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <div className={styles.stores}>
            <StoreButtons
              playLabelTop={h.home_store_play_top}
              iosLabelTop={h.home_store_ios_top}
              webLabelTop={lang === "sv" ? "Eller öva i" : "Or practise in your"}
              webLabel={lang === "sv" ? "webbläsaren" : "Web browser"}
            />
          </div>
          {!iosAvailable && <p className={styles.iosNote}>{t.iosNote}</p>}
        </section>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
