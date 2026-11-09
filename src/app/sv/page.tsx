import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HomeScreen from "@/screens/HomeScreen";
import JsonLd from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/homeJsonLd";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/",
  title: "Taxi teori & taxiprov övning online | Drive Test",
  description:
    "Taxiprov övning online: öva taxi teori inför båda delproven för taxiförarlegitimation med frågor i provformat och AI-tutor. Gratis att börja, Android och webb.",
});

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("sv")} />
      <HomeScreen lang="sv" />
    </>
  );
}
