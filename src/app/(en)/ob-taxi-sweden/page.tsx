import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { obTaxiSweden } from "@/content/obTaxiSweden";
import ObTaxiSwedenScreen from "@/screens/ObTaxiSwedenScreen";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/ob-taxi-sweden/",
  title: obTaxiSweden.en.metaTitle,
  description: obTaxiSweden.en.metaDescription,
});

export default function Page() {
  return <ObTaxiSwedenScreen lang="en" />;
}
