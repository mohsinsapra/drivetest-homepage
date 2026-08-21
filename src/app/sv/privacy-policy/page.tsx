import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageTitles } from "@/content/site";
import PrivacyScreen from "@/screens/PrivacyScreen";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/privacy-policy/",
  title: pageTitles.sv.privacy,
  description: "Hur Drive Test samlar in, använder, lagrar och skyddar din personliga information.",
});

export default function Page() {
  return <PrivacyScreen lang="sv" />;
}
