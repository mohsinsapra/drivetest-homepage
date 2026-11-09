import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageTitles } from "@/content/site";
import GuideScreen from "@/screens/GuideScreen";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/taxi-licence-guide/",
  title: pageTitles.sv.guide,
  description: "Så får du taxiförarlegitimation 2026: krav, båda delproven och godkändgränser, avgifter på 4 970 kr och hur du övar taxi teori online med provfrågor i appen.",
});

export default function Page() {
  return <GuideScreen lang="sv" />;
}
