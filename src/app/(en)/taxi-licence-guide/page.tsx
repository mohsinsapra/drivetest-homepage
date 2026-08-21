import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageTitles } from "@/content/site";
import GuideScreen from "@/screens/GuideScreen";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/taxi-licence-guide/",
  title: pageTitles.en.guide,
  description: "Complete guide to obtaining your taxiförarlegitimation in Sweden.",
});

export default function Page() {
  return <GuideScreen lang="en" />;
}
