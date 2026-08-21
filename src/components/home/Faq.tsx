"use client";

import { useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { faq } from "@/content/home";
import { Section } from "@/components/ui/Section";
import Reveal from "./Reveal";
import shared from "./shared.module.css";
import styles from "./Faq.module.css";

export default function Faq({ lang }: { lang: Lang }) {
  const items = faq[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  const title = lang === "sv" ? "Vanliga frågor" : "Frequently asked questions";

  return (
    <Section id="faq">
      <Reveal className={shared.sectionHead}>
        <span className={shared.kicker}>✦ FAQ</span>
        <h2 className={shared.sectionTitle}>{title}</h2>
      </Reveal>

      <Reveal className={styles.list}>
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div className={styles.item} key={item.q}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={open}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                {item.q}
                <svg
                  className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={styles.answerWrap}
                style={{ maxHeight: open ? `${refs.current[i]?.scrollHeight ?? 400}px` : "0px" }}
              >
                <div
                  className={styles.answer}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </div>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}
