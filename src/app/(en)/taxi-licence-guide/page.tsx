import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageTitles } from "@/content/site";
import GuideScreen from "@/screens/GuideScreen";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/taxi-licence-guide/",
  title: pageTitles.en.guide,
  description: "Step-by-step 2026 guide to the Swedish taxi licence: requirements, both theory tests and pass marks, official fees of 4,970 kr, and how to practise taxi theory online.",
});

export default function Page() {
  return <GuideScreen lang="en" />;
}
