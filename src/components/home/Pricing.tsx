import type { Lang } from "@/lib/i18n";
import { pricing } from "@/content/home";
import { urls } from "@/content/site";
import { Section } from "@/components/ui/Section";
import Reveal from "./Reveal";
import shared from "./shared.module.css";
import styles from "./Pricing.module.css";

export default function Pricing({ lang }: { lang: Lang }) {
  const p = pricing[lang];
  const isSv = lang === "sv";

  return (
    <Section id="pricing">
      <Reveal className={shared.sectionHead}>
        <span className={shared.kicker}>✦ {p.kicker}</span>
        <h2 className={shared.sectionTitle}>{p.title}</h2>
        <p className={shared.sectionSub}>{p.sub}</p>
      </Reveal>

      <div className={styles.grid}>
        {p.plans.map((plan, i) => {
          const premium = i === 1;
          return (
            <Reveal key={plan.name} className={`${styles.plan} ${premium ? styles.highlight : ""}`}>
              {premium && <span className={styles.chip}>{isSv ? "Populärast" : "Most popular"}</span>}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <svg className={styles.check} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={premium ? urls.appStore : urls.webApp}
                target="_blank"
                rel="noopener noreferrer"
                className={`${premium ? shared.btnPrimary : shared.btnGhost} ${styles.cta}`}
              >
                {premium ? (isSv ? "Uppgradera i appen" : "Upgrade in the app") : (isSv ? "Kom igång gratis" : "Get started free")}
              </a>
            </Reveal>
          );
        })}
      </div>
      <p className={styles.note}>{p.note}</p>
    </Section>
  );
}
