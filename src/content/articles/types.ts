import type { ArticleFaqItem, ArticleSection } from "../obTaxiSweden";

export interface ArticleSource {
  label: string;
  url: string;
}

export interface ArticleContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  tag: string;
  lastUpdated: string;
  lastUpdatedLabel: string;
  title: string;
  lede: string;
  intro: string;
  excerpt: string;
  cover: string;
  sections: ArticleSection[];
  faq: ArticleFaqItem[];
  sources: ArticleSource[];
  related: string[];
}

export interface ArticleModule {
  slug: string;
  en: ArticleContent;
  sv: ArticleContent;
}
