import type { Lang } from "./i18n";

/** Photos in public/images/site/ (all CC0, see public/images/CREDITS.md). Alt texts EN + SV. */
export const sitePhotos = {
  taxiRoof: {
    src: "/images/site/taxi-roof-sign.jpg",
    alt: { en: "A taxi roof sign on a tree-lined city street", sv: "En taxiskylt på taket av en taxi på en trädkantad gata" },
  },
  taxiCity: {
    src: "/images/site/taxi-city.jpg",
    alt: { en: "A yellow taxi on a city street at night", sv: "En gul taxi på en gata i staden på natten" },
  },
  taxiNight: {
    src: "/images/site/taxi-street-night.jpg",
    alt: { en: "A taxi driving through the city at night", sv: "En taxi som kör genom staden på natten" },
  },
  stockholmStreet: {
    src: "/images/site/stockholm-street.jpg",
    alt: { en: "A snowy street with old buildings in Stockholm", sv: "En snöig gata med äldre hus i Stockholm" },
  },
  studyLaptop: {
    src: "/images/site/study-laptop.jpg",
    alt: { en: "Hands on a laptop keyboard next to a phone", sv: "Händer på ett laptoptangentbord bredvid en mobil" },
  },
  flagBoat: {
    src: "/images/site/flag-boat.jpg",
    alt: { en: "A Swedish flag on a boat in a harbour", sv: "En svensk flagga på en båt i en hamn" },
  },
  truck: {
    src: "/images/site/truck-training.jpg",
    alt: { en: "A lorry cab seen from the front", sv: "En lastbilshytt sedd framifrån" },
  },
} as const;

export type SitePhoto = (typeof sitePhotos)[keyof typeof sitePhotos];

export const photoAlt = (p: SitePhoto, lang: Lang) => p.alt[lang];

/** Photo per landing/article slug, for cards and subpage hero images. */
export const photoBySlug: Record<string, SitePhoto> = {
  "taxi-licence": sitePhotos.taxiRoof,
  "taxi-company": sitePhotos.taxiCity,
  "goods-and-bus": sitePhotos.truck,
  "driving-licence": sitePhotos.stockholmStreet,
  "citizenship-test": sitePhotos.flagBoat,
  "new-taxi-drivers": sitePhotos.taxiNight,
  "international-drivers": sitePhotos.studyLaptop,
  "taxi-companies": sitePhotos.taxiCity,
  "driving-schools": sitePhotos.stockholmStreet,
  "how-to-pass-taxi-licence-test": sitePhotos.taxiNight,
  "taxi-licence-cost-sweden": sitePhotos.stockholmStreet,
  "taxi-licence-medical-requirements": sitePhotos.stockholmStreet,
  "taxi-licence-exam-questions": sitePhotos.studyLaptop,
  "yrkeskunnande-taxi-exam": sitePhotos.taxiCity,
  "taxi-exam-for-non-native-speakers": sitePhotos.studyLaptop,
};
