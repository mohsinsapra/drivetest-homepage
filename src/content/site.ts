// AUTO-PORTED from legacy locales/translations.json + index.html
export type Lang = "en" | "sv";

export const siteName = "Drive Test";

/** False while the iOS app is off the App Store: store buttons show the web app instead. */
export const iosAvailable = false;

export const urls = {
  playStore: "https://play.google.com/store/apps/details?id=com.mohsinsapra.drivetest",
  appStore: "https://apps.apple.com/app/drive-test-pro/id6765940954",
  webApp: "https://app.drivetest.se",
  github: "https://mohsinsapra.github.io/",
  supportEmail: "support@drivetest.se",
  trustpilot: "https://www.trustpilot.com/review/drivetest.se",
  trustpilotReview: "https://www.trustpilot.com/evaluate/drivetest.se",
};

/**
 * Temporary site-wide banner above the header on every page (the iOS app is
 * unavailable on the App Store). Set a language to null to hide it.
 */
export const notice: Record<
  Lang,
  { label: string; text: string; links: { label: string; href: string }[] } | null
> = {
  en: {
    label: "iOS app unavailable",
    text: "Drive Test is not available on the App Store right now. You can keep practising on Android or in your browser:",
    links: [
      { label: "Get it on Google Play", href: urls.playStore },
      { label: "Open app.drivetest.se", href: "https://app.drivetest.se" },
    ],
  },
  sv: {
    label: "iOS-appen är inte tillgänglig",
    text: "Drive Test finns inte i App Store just nu. Du kan fortsätta öva på Android eller i webbläsaren:",
    links: [
      { label: "Hämta på Google Play", href: urls.playStore },
      { label: "Öppna app.drivetest.se", href: "https://app.drivetest.se" },
    ],
  },
};

export const footer = {
  en: {
    rights: "All rights reserved",
    home: "Home",
    blog: "Blog",
    ob: "OB Calculator",
    guide: "Taxi licence guide",
    privacy: "Privacy policy",
    delete: "Delete account",
    github: "GitHub",
    support: "Support",
    disclaimer:
      "Drive Test is an independent study app and is not affiliated with Trafikverket or Transportstyrelsen.",
  },
  sv: {
    rights: "Alla rättigheter förbehållna",
    home: "Startsida",
    blog: "Blogg",
    ob: "OB-kalkylator",
    guide: "Guide till taxiförarlegitimation",
    privacy: "Integritetspolicy",
    delete: "Radera konto",
    github: "GitHub",
    support: "Support",
    disclaimer:
      "Drive Test är en fristående övningsapp och har ingen koppling till Trafikverket eller Transportstyrelsen.",
  },
};

export const nav = {
  en: {
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "Frequently asked questions",
    blog: "Blog",
    obCalculator: "OB Calculator",
    guide: "Taxi licence guide",
    getTheApp: "Get the app",
    exams: "Exams",
    taxiLicence: "Taxi licence",
    compare: "Compare",
    support: "Support",
    menu: "Menu",
    close: "Close",
    search: "Search",
    searchPlaceholder: "Search the site",
    searchLabel: "Search the site",
    noResults: "No pages matched your search.",
    resultsFor: "Search results",
    skip: "Skip to content",
    mainNav: "Main navigation",
    home: "Home",
    allPages: "All pages",
    language: "Svenska",
    languageCode: "SV",
    storeTitle: "Get the app",
    menuExams: "Exams",
    menuFor: "For drivers and companies",
    menuCompare: "Compare",
    menuMore: "More",
  },
  sv: {
    howItWorks: "Så fungerar det",
    pricing: "Priser",
    faq: "Vanliga frågor",
    blog: "Blogg",
    obCalculator: "OB-kalkylator",
    guide: "Guide till taxiförarlegitimation",
    getTheApp: "Skaffa appen",
    exams: "Prov",
    taxiLicence: "Taxiförarlegitimation",
    compare: "Jämför",
    support: "Support",
    menu: "Meny",
    close: "Stäng",
    search: "Sök",
    searchPlaceholder: "Sök på webbplatsen",
    searchLabel: "Sök på webbplatsen",
    noResults: "Inga sidor matchade din sökning.",
    resultsFor: "Sökresultat",
    skip: "Till innehållet",
    mainNav: "Huvudmeny",
    home: "Startsida",
    allPages: "Alla sidor",
    language: "English",
    languageCode: "EN",
    storeTitle: "Skaffa appen",
    menuExams: "Prov",
    menuFor: "För förare och företag",
    menuCompare: "Jämför",
    menuMore: "Mer",
  },
};

/** Shared link groups used by the header dropdown and footer columns. Paths are language-neutral. */
export const examLinks = {
  en: [
    { path: "/exams/taxi-licence/", label: "Taxi licence exam" },
    { path: "/exams/taxi-company/", label: "Taxi company (Yrkeskunnande)" },
    { path: "/exams/goods-and-bus/", label: "Goods & bus transport" },
    { path: "/exams/driving-licence/", label: "Driving licence theory" },
    { path: "/exams/citizenship-test/", label: "Citizenship test" },
  ],
  sv: [
    { path: "/exams/taxi-licence/", label: "Taxiförarlegitimation" },
    { path: "/exams/taxi-company/", label: "Taxiföretag (Yrkeskunnande)" },
    { path: "/exams/goods-and-bus/", label: "Gods & buss" },
    { path: "/exams/driving-licence/", label: "B-körkort teori" },
    { path: "/exams/citizenship-test/", label: "Medborgarskapsprov" },
  ],
};

export const footerColumns = {
  en: {
    exams: "Exams",
    forTitle: "For drivers and companies",
    forLinks: [
      { path: "/for/new-taxi-drivers/", label: "New taxi drivers" },
      { path: "/for/international-drivers/", label: "International drivers" },
      { path: "/for/taxi-companies/", label: "Taxi companies" },
      { path: "/for/driving-schools/", label: "Driving schools" },
    ],
    compareTitle: "Compare",
    compareLinks: [
      { path: "/compare/", label: "All comparisons" },
      { path: "/compare/drive-test-vs-books/", label: "Drive Test vs books" },
      { path: "/compare/drive-test-vs-free-online-tests/", label: "vs free online tests" },
      { path: "/compare/drive-test-vs-taxi-schools/", label: "vs taxi schools" },
    ],
    resourcesTitle: "About Drive Test",
    tagline: "Practise for taxi, transport and driving licence tests in Sweden.",
    cta: "Get the app",
    note: "Free to start · Android & web",
    review: "Review us on Trustpilot",
  },
  sv: {
    exams: "Prov",
    forTitle: "För förare och företag",
    forLinks: [
      { path: "/for/new-taxi-drivers/", label: "Nya taxiförare" },
      { path: "/for/international-drivers/", label: "Förare med annat modersmål" },
      { path: "/for/taxi-companies/", label: "Taxiföretag" },
      { path: "/for/driving-schools/", label: "Trafikskolor" },
    ],
    compareTitle: "Jämför",
    compareLinks: [
      { path: "/compare/", label: "Alla jämförelser" },
      { path: "/compare/drive-test-vs-books/", label: "Drive Test vs böcker" },
      { path: "/compare/drive-test-vs-free-online-tests/", label: "vs gratis onlinetester" },
      { path: "/compare/drive-test-vs-taxi-schools/", label: "vs taxiskolor" },
    ],
    resourcesTitle: "Om Drive Test",
    tagline: "Öva inför taxi-, transport- och körkortsprov i Sverige.",
    cta: "Skaffa appen",
    note: "Gratis att börja · Android & webb",
    review: "Betygsätt oss på Trustpilot",
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
    sameAs: [urls.playStore, urls.appStore],
  },
};
