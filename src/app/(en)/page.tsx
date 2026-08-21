import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HomeScreen from "@/screens/HomeScreen";
import JsonLd from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/homeJsonLd";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/",
  title: "Drive Test - Drive Test Home",
  description:
    "Drive Test helps you pass Taxi, Company & Transport exams in Sweden. Practice knowledge tests, study the taxi licence guide, and get exam-ready.",
});

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("en")} />
      <HomeScreen lang="en" />
    </>
  );
}
