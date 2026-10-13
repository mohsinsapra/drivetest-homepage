import type { LandingPage } from "./types";
import { examTaxiLicence } from "./exam-taxi-licence";
import { examTaxiCompany } from "./exam-taxi-company";
import { examGoodsAndBus } from "./exam-goods-and-bus";
import { examDrivingLicence } from "./exam-driving-licence";
import { examCitizenshipTest } from "./exam-citizenship-test";
import { audienceNewTaxiDrivers } from "./audience-new-taxi-drivers";
import { audienceInternationalDrivers } from "./audience-international-drivers";
import { audienceTaxiCompanies } from "./audience-taxi-companies";
import { audienceDrivingSchools } from "./audience-driving-schools";
import { compareHub } from "./compare-hub";
import { compareVsBooks } from "./compare-vs-books";
import { compareVsFreeOnlineTests } from "./compare-vs-free-online-tests";
import { compareVsTaxiSchools } from "./compare-vs-taxi-schools";

export type { LandingPage } from "./types";

export interface LandingEntry {
  slug: string;
  kind: LandingPage["kind"];
  en: LandingPage;
  sv: LandingPage;
}

const modules: { en: LandingPage; sv: LandingPage }[] = [
  examTaxiLicence,
  examTaxiCompany,
  examGoodsAndBus,
  examDrivingLicence,
  examCitizenshipTest,
  audienceNewTaxiDrivers,
  audienceInternationalDrivers,
  audienceTaxiCompanies,
  audienceDrivingSchools,
  compareHub,
  compareVsBooks,
  compareVsFreeOnlineTests,
  compareVsTaxiSchools,
];

export const landingPages: LandingEntry[] = modules.map((m) => ({
  slug: m.en.slug,
  kind: m.en.kind,
  en: m.en,
  sv: m.sv,
}));

export function getLanding(slug: string): LandingEntry | undefined {
  const s = slug.replace(/^\/+|\/+$/g, "");
  return landingPages.find((p) => p.slug === s);
}
