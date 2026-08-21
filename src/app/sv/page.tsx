import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HomeScreen from "@/screens/HomeScreen";
import JsonLd from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/homeJsonLd";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/",
  title: "Drive Test - Drive Test Hem",
  description:
    "Drive Test hjälper dig klara Taxi-, Företags- & Transportprov i Sverige. Öva kunskapsprov, läs licensguiden och bli provredo.",
});

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("sv")} />
      <HomeScreen lang="sv" />
    </>
  );
}
