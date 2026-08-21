import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { support } from "@/content/support";
import { urls } from "@/content/site";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import { Section, SectionHead } from "@/components/ui/Section";
import ArticleHero, { Badge } from "@/components/article/ArticleHero";
import Faq from "@/components/article/Faq";
import CtaCard, { CtaButton } from "@/components/article/CtaCard";
import Reveal from "@/components/article/Reveal";
import styles from "./Support.module.css";

const topicIcons = [
  <svg key="account" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
  </svg>,
  <svg key="billing" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M3 10h18M7 15h4" />
  </svg>,
  <svg key="content" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <path d="M9 12h6M9 16h6" />
  </svg>,
  <svg key="tech" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="4" y="4" width="16" height="12" rx="2" />
    <path d="M9 21h6M12 16v5" />
  </svg>,
];

export default function SupportScreen({ lang }: { lang: Lang }) {
  const s = support[lang];
  const topics = [
    { title: s.support_topic_account_title, desc: s.support_topic_account_desc },
    { title: s.support_topic_billing_title, desc: s.support_topic_billing_desc },
    { title: s.support_topic_content_title, desc: s.support_topic_content_desc },
    { title: s.support_topic_technical_title, desc: s.support_topic_technical_desc },
  ];
  const faqs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
    const q = s[`support_q${i}` as keyof typeof s] as string;
    const a = (s[`support_a${i}` as keyof typeof s] ?? s[`support_q${i}_a` as keyof typeof s]) as string;
    return { q, aHtml: a };
  });

  return (
    <>
      <SiteHeader lang={lang} currentPath="/support/" />
      <main>
        <ArticleHero
          kicker={s.support_badge}
          title={s.support_hero_title}
          lead={s.support_hero_subtitle}
          badges={
            <>
              <Badge>{s.support_badge_reply}</Badge>
              <Badge>{s.support_badge_lang}</Badge>
            </>
          }
        />

        <Section>
          <div className={styles.topicsGrid}>
            {topics.map((t, i) => (
              <Reveal as="div" key={t.title} delay={i * 60} className={styles.topicCard}>
                <span className={styles.topicIcon} aria-hidden="true">
                  {topicIcons[i]}
                </span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="faq">
          <SectionHead title={s.support_faq_title} />
          <Faq items={faqs} />
        </Section>

        <Section>
          <SectionHead title={s.support_contact_title} />
          <div className={styles.stepsRow}>
            <div className={styles.stepCard}>
              <span className={styles.stepNum}>1</span>
              <h3>{s.support_step1_title}</h3>
              <p>{s.support_step1_desc}</p>
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepNum}>2</span>
              <h3>{s.support_step2_title}</h3>
              <p dangerouslySetInnerHTML={{ __html: s.support_step2_desc }} />
            </div>
            <div className={styles.stepCard}>
              <span className={styles.stepNum}>3</span>
              <h3>{s.support_step3_title}</h3>
              <p>{s.support_step3_desc}</p>
            </div>
          </div>
        </Section>

        <Section>
          <CtaCard title={s.support_cta_title} body={s.support_cta_desc}>
            <CtaButton href={`mailto:${urls.supportEmail}`}>{s.support_cta_email_btn}</CtaButton>
            <CtaButton href={localePath(lang, "/delete-account/")}>{s.support_cta_delete_btn}</CtaButton>
          </CtaCard>
        </Section>
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock />
    </>
  );
}
