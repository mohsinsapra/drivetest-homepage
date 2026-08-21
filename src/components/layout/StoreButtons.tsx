import styles from "./StoreButtons.module.css";
import { urls } from "@/content/site";

export default function StoreButtons({
  mini = false,
  playLabelTop = "Get it on",
  iosLabelTop = "Download on the",
  webLabelTop = "Launch as",
  webLabelName = "Web App",
}: {
  mini?: boolean;
  playLabelTop?: string;
  iosLabelTop?: string;
  webLabelTop?: string;
  webLabelName?: string;
}) {
  const btnClass = `${styles.btn} ${mini ? styles.mini : ""}`;
  return (
    <div className={styles.row}>
      <a
        href={urls.playStore}
        className={btnClass}
        target="_blank"
        rel="noopener noreferrer"
        title="Get on Google Play"
      >
        <span className={styles.icon}>
          <svg viewBox="0 0 512 512" aria-hidden="true">
            <path fill="#00c3ff" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
            <path fill="#00e96e" d="M104.6 13l220.7 221.3 60.1-60.1L104.6 13z" />
            <path fill="#ffd60a" d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
            <path fill="#ff3a44" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
          </svg>
        </span>
        {!mini && (
          <span className={styles.text}>
            <small>{playLabelTop}</small>
            <strong>Google Play</strong>
          </span>
        )}
        {mini && (
          <span className={styles.text}>
            <strong>Google Play</strong>
          </span>
        )}
      </a>
      <a
        href={urls.appStore}
        className={btnClass}
        target="_blank"
        rel="noopener noreferrer"
        title="Download on the App Store"
      >
        <span className={styles.icon}>
          <svg viewBox="0 0 384 512" aria-hidden="true">
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            />
          </svg>
        </span>
        {!mini && (
          <span className={styles.text}>
            <small>{iosLabelTop}</small>
            <strong>App Store</strong>
          </span>
        )}
        {mini && (
          <span className={styles.text}>
            <strong>App Store</strong>
          </span>
        )}
      </a>
      {!mini && (
        <a
          href={urls.webApp}
          className={btnClass}
          target="_blank"
          rel="noopener noreferrer"
          title="Go to website"
        >
          <span className={styles.icon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9s-1.4 6.4-3.9 9c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
            </svg>
          </span>
          <span className={styles.text}>
            <small>{webLabelTop}</small>
            <strong>{webLabelName}</strong>
          </span>
        </a>
      )}
    </div>
  );
}
