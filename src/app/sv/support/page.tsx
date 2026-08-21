import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SupportScreen from "@/screens/SupportScreen";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/support/",
  title: "Support - Drive Test",
  description: "Få hjälp med Drive Test — din app för att förbereda dig för taxi- och körkortsprov.",
});

export default function Page() {
  return <SupportScreen lang="sv" />;
}
