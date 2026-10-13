import type { Lang } from "@/lib/i18n";
import Link from "next/link";
import { localePath } from "@/lib/i18n";
import { homeExtra } from "@/content/home";
import { examLinks } from "@/content/site";
import { Section } from "@/components/ui/Section";
import Reveal from "./Reveal";
import shared from "./shared.module.css";
import styles from "./WhySection.module.css";

const ICONS: Record<string, React.ReactNode> = {
  book: <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5zM4 19a2 2 0 012-2h13" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
    </>
  ),
  alert: <path d="M12 3l10 18H2L12 3zM12 10v5M12 18v.01" />,
  check: <path d="M20 6L9 17l-5-5" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M21 20H3" />,
  brain: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  money: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6.5 9.5v.01M17.5 14.5v.01" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
};

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name] ?? ICONS.check}
    </svg>
  );
}

type WhyItem = { icon: string; title: string; text: string };

/**
 * Problem / solution cards. Defaults to the home-page copy; landing pages pass
 * their own `problems` / `solutions` (and optionally hide the section head).
 */
export default function WhySection({
  lang,
  problems,
  solutions,
  head = true,
  id = "why",
}: {
  lang: Lang;
  problems?: WhyItem[];
  solutions?: WhyItem[];
  head?: boolean;
  id?: string;
}) {
  const x = homeExtra[lang];
  const problemItems = problems ?? x.problems;
  const solutionItems = solutions ?? x.solutions;

  return (
    <Section id={id}>
      {head && (
        <Reveal className={shared.sectionHead}>
          <span className={shared.kicker}>{x.whyKicker}</span>
          <h2 className={shared.sectionTitle}>{x.whyTitle}</h2>
          <p className={shared.sectionSub}>{x.whySub}</p>
        </Reveal>
      )}

      <div className={styles.grid}>
        <Reveal className={styles.card}>
          <span className={`${styles.label} ${styles.labelBad}`}>{x.problemLabel}</span>
          <ul className={styles.list}>
            {problemItems.map((p) => (
              <li key={p.title} className={styles.row}>
                <span className={`${styles.bubble} ${styles.bad}`}>
                  <Icon name={p.icon} />
                </span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className={styles.card}>
          <span className={`${styles.label} ${styles.labelGood}`}>{x.solutionLabel}</span>
          <ul className={styles.list}>
            {solutionItems.map((p) => (
              <li key={p.title} className={styles.row}>
                <span className={`${styles.bubble} ${styles.good}`}>
                  <Icon name={p.icon} />
                </span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {!problems && (
        <Reveal className={styles.examRow}>
          <span className={styles.examLabel}>{lang === "en" ? "Pick your exam" : "Välj ditt prov"}</span>
          {examLinks[lang].map((e) => (
            <Link key={e.path} href={localePath(lang, e.path)} className={styles.examChip}>
              {e.label} →
            </Link>
          ))}
        </Reveal>
      )}
    </Section>
  );
}
