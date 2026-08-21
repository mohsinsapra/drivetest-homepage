import type { CSSProperties, ReactNode } from "react";
import styles from "./MockupFrame.module.css";

/** Hand-built phone "device" frame — no images/video, just DOM + CSS. */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${styles.phone} ${className ?? ""}`}>
      <span className={styles.phoneNotch} aria-hidden="true" />
      <div className={styles.phoneScreen}>{children}</div>
    </div>
  );
}

/** Hand-built browser window frame with traffic-light dots + URL pill. */
export function BrowserFrame({
  url = "app.drivetest.se",
  children,
  className,
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.browser} ${className ?? ""}`}>
      <div className={styles.browserBar}>
        <span className={styles.dots}>
          <span />
          <span />
          <span />
        </span>
        <span className={styles.urlPill}>{url}</span>
      </div>
      <div className={styles.browserBody}>{children}</div>
    </div>
  );
}

/** A grey rounded skeleton line of variable width — stand-in for loading/placeholder text. */
export function Skel({ w = "100%", style }: { w?: string; style?: CSSProperties }) {
  return <div className={styles.skel} style={{ width: w, ...style }} />;
}
