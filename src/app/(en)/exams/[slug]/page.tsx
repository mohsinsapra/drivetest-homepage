import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { landingPages, getLanding } from "@/content/landing";
import LandingScreen from "@/screens/LandingScreen";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages
    .filter((p) => p.slug.startsWith("exams/"))
    .map((p) => ({ slug: p.slug.split("/")[1] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLanding(`exams/${slug}`)!;
  return buildMetadata({
    lang: "en",
    path: `/exams/${slug}/`,
    title: page.en.metaTitle,
    description: page.en.metaDescription,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LandingScreen lang="en" slug={`exams/${slug}`} />;
}
