"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import type { Lang } from "@/lib/i18n";
import { trustpilot, urls } from "@/content/site";
import styles from "./SiteFooter.module.css";

type TrustpilotGlobal = { loadFromElement: (el: HTMLElement, force?: boolean) => void };

/** Trustpilot "Review Collector" TrustBox. The inner link is the fallback if the script is blocked. */
export default function TrustpilotWidget({ lang, label }: { lang: Lang; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const load = () => {
    const tp = (window as Window & { Trustpilot?: TrustpilotGlobal }).Trustpilot;
    if (tp && ref.current) tp.loadFromElement(ref.current, true);
  };

  // After client-side navigation the bootstrap script is already loaded and won't rescan the page.
  useEffect(load, []);

  return (
    <>
      <div
        ref={ref}
        className={`trustpilot-widget ${styles.trustpilot}`}
        data-locale={lang === "sv" ? "sv-SE" : "en-US"}
        data-template-id={trustpilot.templateId}
        data-businessunit-id={trustpilot.businessUnitId}
        data-style-height="52px"
        data-style-width="100%"
      >
        <a href={urls.trustpilot} target="_blank" rel="noopener noreferrer" className={styles.review}>
          <span className={styles.stars} aria-hidden="true">
            ★★★★★
          </span>
          {label} <span aria-hidden="true">›</span>
        </a>
      </div>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
        onLoad={load}
      />
    </>
  );
}
