import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { footer, footerColumns, examLinks, urls } from "@/content/site";
import Container from "../ui/Container";
import LinkButton from "../ui/LinkButton";
import TrustpilotStar from "./TrustpilotStar";
import styles from "./SiteFooter.module.css";

type FooterLink = { href: string; label: string; external?: boolean };

const contact = {
  en: {
    title: "Contact us",
    all: "All contact details",
    cols: [
      {
        h: "The app",
        p: "Do you have a question about your account, your subscription or the app?",
        l: "Write to us about the app",
        href: `mailto:${urls.supportEmail}?subject=Drive%20Test%20app`,
      },
      {
        h: "Exam content",
        p: "Have you found a question or answer that looks wrong?",
        l: "Report a question or answer",
        href: `mailto:${urls.supportEmail}?subject=Question%20or%20answer`,
      },
      {
        h: "The website",
        p: "Do you have a question or a suggestion about this website?",
        l: "Give feedback on the website",
        href: `mailto:${urls.supportEmail}?subject=Website`,
      },
    ],
  },
  sv: {
    title: "Kontakta oss",
    all: "Till alla kontaktuppgifter",
    cols: [
      {
        h: "Appen",
        p: "Har du en fråga om ditt konto, din prenumeration eller appen?",
        l: "Skriv till oss om appen",
        href: `mailto:${urls.supportEmail}?subject=Drive%20Test%20appen`,
      },
      {
        h: "Provinnehåll",
        p: "Har du hittat en fråga eller ett svar som verkar vara fel?",
        l: "Rapportera en fråga eller ett svar",
        href: `mailto:${urls.supportEmail}?subject=Fr%C3%A5ga%20eller%20svar`,
      },
      {
        h: "Webbplatsen",
        p: "Har du en fråga eller ett förslag om den här webbplatsen?",
        l: "Tyck till om webbplatsen",
        href: `mailto:${urls.supportEmail}?subject=Webbplatsen`,
      },
    ],
  },
};

export default function SiteFooter({ lang }: { lang: Lang }) {
  const f = footer[lang];
  const c = footerColumns[lang];
  const k = contact[lang];
  const year = new Date().getFullYear();

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: c.exams,
      links: examLinks[lang].map((e) => ({ href: localePath(lang, e.path), label: e.label })),
    },
    {
      title: c.forTitle,
      links: c.forLinks.map((e) => ({ href: localePath(lang, e.path), label: e.label })),
    },
    {
      title: c.compareTitle,
      links: c.compareLinks.map((e) => ({ href: localePath(lang, e.path), label: e.label })),
    },
    {
      title: c.resourcesTitle,
      links: [
        { href: localePath(lang, "/taxi-licence-guide/"), label: f.guide },
        { href: localePath(lang, "/blog/"), label: f.blog },
        { href: "/ob-calculator/", label: f.ob },
        { href: localePath(lang, "/support/"), label: f.support },
      ],
    },
  ];

  return (
    <>
      <section className={styles.contact} aria-labelledby="contact-title">
        <Container>
          <div className={styles.contactHead}>
            <h2 id="contact-title">{k.title}</h2>
            <Link href={localePath(lang, "/support/")} className={styles.allLink}>
              {k.all} <span aria-hidden="true">›</span>
            </Link>
          </div>
          <div className={styles.contactGrid}>
            {k.cols.map((col) => (
              <div key={col.h}>
                <h3>{col.h}</h3>
                <p>{col.p}</p>
                <a href={col.href}>
                  {col.l} <span aria-hidden="true">›</span>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.brandCol}>
              <Link href={localePath(lang, "/")} className={styles.brand}>
                <img src="/assets/icon.png" alt="" width={36} height={36} />
                <span>Drive Test</span>
              </Link>
              <p className={styles.tagline}>{c.tagline}</p>
              <p className={styles.note}>{c.note}</p>
              <LinkButton href={urls.trustpilotReview} external className={styles.review}>
                <TrustpilotStar className={styles.star} />
                {c.review}
              </LinkButton>
            </div>
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className={styles.colTitle}>{col.title}</h3>
                <ul className={styles.colLinks}>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      {l.external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label} <span aria-hidden="true">›</span>
                        </a>
                      ) : (
                        <Link href={l.href}>
                          {l.label} <span aria-hidden="true">›</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={styles.disclaimer}>{f.disclaimer}</p>
          <div className={styles.bottom}>
            <span>
              © {year} Drive Test · {f.rights}
            </span>
            <span className={styles.legal}>
              <Link href={localePath(lang, "/privacy-policy/")}>{f.privacy}</Link>
              <Link href={localePath(lang, "/delete-account/")}>{f.delete}</Link>
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
}
