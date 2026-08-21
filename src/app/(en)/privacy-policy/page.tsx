import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageTitles } from "@/content/site";
import PrivacyScreen from "@/screens/PrivacyScreen";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/privacy-policy/",
  title: pageTitles.en.privacy,
  description: "How Drive Test collects, uses, stores, and protects your personal information.",
});

export default function Page() {
  return <PrivacyScreen lang="en" />;
}
