import type { Lang } from "@/lib/i18n";

/** Hero photo per landing page (slug), with EN/SV alt text. Files live in public/images/landing/. */
const IMAGES: Record<string, { src: string; alt: Record<Lang, string> }> = {
  "exams/taxi-licence": { src: "/images/landing/exam-taxi-licence.jpg", alt: { en: "A historic building on a square in Stockholm's old town", sv: "En historisk byggnad vid ett torg i Gamla stan i Stockholm" } },
  "exams/taxi-company": { src: "/images/landing/exam-taxi-company.jpg", alt: { en: "A line of taxis on a busy city street", sv: "En rad taxibilar på en trafikerad gata" } },
  "exams/goods-and-bus": { src: "/images/landing/exam-goods-and-bus.jpg", alt: { en: "Passenger coach at a city kerb", sv: "Buss vid en trottoarkant i staden" } },
  "exams/driving-licence": { src: "/images/landing/exam-driving-licence.jpg", alt: { en: "Small learner car with an L plate parked in a park", sv: "Liten övningskörningsbil med L-skylt parkerad i en park" } },
  "exams/citizenship-test": { src: "/images/landing/exam-citizenship-test.jpg", alt: { en: "The Riksdag building in Stockholm with a Swedish flag", sv: "Riksdagshuset i Stockholm med svensk flagga" } },
  "for/new-taxi-drivers": { src: "/images/landing/audience-new-taxi-drivers.jpg", alt: { en: "Taxi driver at the wheel on a city road", sv: "Taxichaufför bakom ratten på en stadsgata" } },
  "for/international-drivers": { src: "/images/landing/audience-international-drivers.jpg", alt: { en: "A cobbled street in Stockholm's old town at night", sv: "En kullerstensgata i Gamla stan i Stockholm på natten" } },
  "for/taxi-companies": { src: "/images/landing/audience-taxi-companies.jpg", alt: { en: "Taxi waiting at a city taxi rank", sv: "Taxi som väntar vid en taxihållplats i staden" } },
  "for/driving-schools": { src: "/images/landing/audience-driving-schools.jpg", alt: { en: "Driver's view from inside a car looking at the road", sv: "Förarens vy inifrån en bil mot vägen" } },
  compare: { src: "/images/landing/compare.jpg", alt: { en: "A laptop, notebook and ruler on a white desk", sv: "En bärbar dator, anteckningsbok och linjal på ett vitt skrivbord" } },
};

export function landingImage(slug: string, lang: Lang): { src: string; alt: string } | undefined {
  const key = slug.startsWith("compare") ? "compare" : slug;
  const hit = IMAGES[key];
  return hit ? { src: hit.src, alt: hit.alt[lang] } : undefined;
}
