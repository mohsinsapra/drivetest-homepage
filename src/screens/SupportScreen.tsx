import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { support } from "@/content/support";
import { urls } from "@/content/site";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleLayout from "@/components/article/ArticleLayout";
import Faq from "@/components/article/Faq";
import CtaCard, { CtaButton } from "@/components/article/CtaCard";
import { L } from "@/components/landing/labels";
import artStyles from "./Article.module.css";
import styles from "./Support.module.css";

/** Drop leading emoji / symbols from content strings. */
const plain = (s: string) => s.replace(/^[^\p{L}\p{N}]+/u, "");

export default function SupportScreen({ lang }: { lang: Lang }) {
  const s = support[lang];
  const t = L[lang];
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
  const toc = [
    { id: "topics", label: lang === "en" ? "What we can help with" : "Vad vi kan hjälpa till med" },
    { id: "faq", label: s.support_faq_title },
    { id: "contact", label: s.support_contact_title },
  ];

  return (
    <>
      <SiteHeader lang={lang} currentPath="/support/" />
      <main id="main">
        <ArticleHero
          lang={lang}
          crumbs={[{ label: t.home, href: localePath(lang, "/") }, { label: s.support_hero_title }]}
          title={s.support_hero_title}
          lead={s.support_hero_subtitle}
          meta={
            <>
              <span>{plain(s.support_badge_reply)}</span>
              <span>{plain(s.support_badge_lang)}</span>
            </>
          }
          toc={toc}
          tocTitle={t.onThisPage}
        />

        <ArticleLayout>
          <div className={artStyles.main}>
            <section id="topics">
              <h2>{toc[0].label}</h2>
              <div className={styles.topics}>
                {topics.map((tp) => (
                  <div key={tp.title} className={styles.topic}>
                    <h3>{tp.title}</h3>
                    <p>{tp.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faq">
              <h2>{s.support_faq_title}</h2>
              <Faq items={faqs} />
            </section>

            <section id="contact">
              <h2>{s.support_contact_title}</h2>
              <ol className={styles.steps}>
                <li>
                  <h3>{s.support_step1_title}</h3>
                  <p>{s.support_step1_desc}</p>
                </li>
                <li>
                  <h3>{s.support_step2_title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: s.support_step2_desc }} />
                </li>
                <li>
                  <h3>{s.support_step3_title}</h3>
                  <p>{s.support_step3_desc}</p>
                </li>
              </ol>
            </section>

            <CtaCard title={s.support_cta_title} body={s.support_cta_desc}>
              <CtaButton href={`mailto:${urls.supportEmail}`}>{plain(s.support_cta_email_btn)}</CtaButton>
              <CtaButton href={localePath(lang, "/delete-account/")}>{plain(s.support_cta_delete_btn)}</CtaButton>
            </CtaCard>
          </div>
        </ArticleLayout>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
