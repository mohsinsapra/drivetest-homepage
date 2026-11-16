import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HomeScreen from "@/screens/HomeScreen";
import JsonLd from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/homeJsonLd";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/",
  title: "Taxi teori, körkortsteori & teoriprov övning | Drive Test",
  description:
    "Öva taxi teori, körkortsteori och teoriprov online. Practise taxi licence, B licence and citizenship test questions with an AI tutor. Free to start.",
});

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("en")} />
      <HomeScreen lang="en" />
    </>
  );
}
