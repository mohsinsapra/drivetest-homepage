import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getLanding } from "@/content/landing";
import LandingScreen from "@/screens/LandingScreen";

const page = getLanding("compare")!.en;

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/compare/",
  title: page.metaTitle,
  description: page.metaDescription,
});

export default function Page() {
  return <LandingScreen lang="en" slug="compare" />;
}
