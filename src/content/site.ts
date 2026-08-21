// AUTO-PORTED from legacy locales/translations.json + index.html
export type Lang = "en" | "sv";

export const siteName = "Drive Test";

export const urls = {
  playStore: "https://play.google.com/store/apps/details?id=com.mohsinsapra.drivetest",
  appStore: "https://apps.apple.com/app/drive-test-pro/id6765940954",
  webApp: "https://mohsin.se/drivetest/",
  livePwaIframe: "https://app.drivetest.se/",
  github: "https://mohsinsapra.github.io/",
  supportEmail: "support@drivetest.se",
};

export const footer = {
  en: {
    rights: "All rights reserved",
    home: "Home",
    blog: "Blog",
    ob: "OB Calculator",
    guide: "License Guide",
    privacy: "Privacy",
    delete: "Delete Account",
    github: "GitHub",
    support: "Support",
  },
  sv: {
    rights: "Alla rättigheter förbehållna",
    home: "Hem",
    blog: "Blogg",
    ob: "OB-kalkylator",
    guide: "Licensguide",
    privacy: "Integritet",
    delete: "Radera konto",
    github: "GitHub",
    support: "Support",
  },
};

export const nav = {
  en: {
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    blog: "Blog",
    obCalculator: "OB Calculator",
    guide: "License Guide",
    getTheApp: "Get the app",
  },
  sv: {
    howItWorks: "Så fungerar det",
    pricing: "Priser",
    faq: "Vanliga frågor",
    blog: "Blogg",
    obCalculator: "OB-kalkylator",
    guide: "Licensguide",
    getTheApp: "Skaffa appen",
  },
};

export const pageTitles = {
  en: {
    home: "Drive Test",
    privacy: "Privacy Policy - Drive Test",
    delete: "Delete Account - Drive Test",
    guide: "How to Get a Taxi License in Sweden - Drive Test",
    support: "Support - Drive Test",
  },
  sv: {
    home: "Drive Test",
    privacy: "Integritetspolicy - Drive Test",
    delete: "Radera konto - Drive Test",
    guide: "Hur du skaffar taxiförarlegitimation i Sverige - Drive Test",
    support: "Support - Drive Test",
  },
};

export const jsonLd = {
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Drive Test",
    url: "https://drivetest.se/",
    description: "Drive Test helps you pass Taxi, Company & Transport exams in Sweden.",
    inLanguage: ["en", "sv"],
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Drive Test",
    url: "https://drivetest.se/",
    logo: "https://drivetest.se/assets/favicon.png",
    sameAs: [urls.playStore, urls.webApp],
  },
};
