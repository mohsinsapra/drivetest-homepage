import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getLanding } from "@/content/landing";
import LandingScreen from "@/screens/LandingScreen";

const page = getLanding("compare")!.sv;

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/compare/",
  title: page.metaTitle,
  description: page.metaDescription,
});

export default function Page() {
  return <LandingScreen lang="sv" slug="compare" />;
}
