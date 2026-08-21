"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import StoreButtons from "./StoreButtons";
import styles from "./DownloadDock.module.css";

const HOME_PATHS = new Set(["/", "/sv", "/sv/"]);

export default function DownloadDock({ label = "Get the app" }: { label?: string }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isHome = !!pathname && HOME_PATHS.has(pathname);

  useEffect(() => {
    if (!isHome) return;
    const hero = document.querySelector("header.hero, #hero, [data-hero]");
    if (!hero) {
      // Fallback: show after scrolling 500px.
      const onScroll = () => setVisible(window.scrollY > 500);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  return (
    <div className={`${styles.dock} ${visible ? styles.visible : ""}`} id="download-dock">
      <span className={styles.label}>{label}</span>
      <StoreButtons mini />
    </div>
  );
}
