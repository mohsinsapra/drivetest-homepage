import { taxiLicenceExamQuestions } from "./taxi-licence-exam-questions";
import { howToPassTaxiLicenceTest } from "./how-to-pass-taxi-licence-test";
import { yrkeskunnandeTaxiExam } from "./yrkeskunnande-taxi-exam";
import { taxiLicenceCostSweden } from "./taxi-licence-cost-sweden";
import { taxiLicenceMedicalRequirements } from "./taxi-licence-medical-requirements";
import { taxiExamForNonNativeSpeakers } from "./taxi-exam-for-non-native-speakers";
import { taxiforarlegitimation2026 } from "./taxiforarlegitimation-2026";
import type { ArticleModule } from "./types";

export type { ArticleContent, ArticleModule, ArticleSource } from "./types";

export const articles: ArticleModule[] = [
  taxiforarlegitimation2026,
  taxiLicenceExamQuestions,
  howToPassTaxiLicenceTest,
  yrkeskunnandeTaxiExam,
  taxiLicenceCostSweden,
  taxiLicenceMedicalRequirements,
  taxiExamForNonNativeSpeakers,
];

export function getArticle(slug: string): ArticleModule | undefined {
  return articles.find((a) => a.slug === slug);
}
