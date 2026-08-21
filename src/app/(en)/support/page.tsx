import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SupportScreen from "@/screens/SupportScreen";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/support/",
  title: "Support - Drive Test",
  description: "Get help with Drive Test — your Swedish taxi and driving exam preparation app.",
});

export default function Page() {
  return <SupportScreen lang="en" />;
}
