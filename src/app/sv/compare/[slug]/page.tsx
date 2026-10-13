import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { landingPages, getLanding } from "@/content/landing";
import LandingScreen from "@/screens/LandingScreen";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages
    .filter((p) => p.slug.startsWith("compare/"))
    .map((p) => ({ slug: p.slug.split("/")[1] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLanding(`compare/${slug}`)!;
  return buildMetadata({
    lang: "sv",
    path: `/compare/${slug}/`,
    title: page.sv.metaTitle,
    description: page.sv.metaDescription,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LandingScreen lang="sv" slug={`compare/${slug}`} />;
}
