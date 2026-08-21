import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageTitles } from "@/content/site";
import GuideScreen from "@/screens/GuideScreen";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/taxi-licence-guide/",
  title: pageTitles.sv.guide,
  description: "Komplett guide för att ansöka om din taxiförarlegitimation.",
});

export default function Page() {
  return <GuideScreen lang="sv" />;
}
