export interface LandingPage {
  slug: string; // e.g. "exams/taxi-licence"
  kind: "exam" | "audience" | "compare";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lede: string;
  stats?: { value: string; label: string }[];
  problems: { icon: string; title: string; text: string }[];
  solutions: { icon: string; title: string; text: string }[];
  sections: { heading: string; html: string }[];
  comparison?: { headers: string[]; rows: string[][] };
  faq: { q: string; aHtml: string }[];
  related: string[];
  ctaTitle: string;
  ctaText: string;
}
