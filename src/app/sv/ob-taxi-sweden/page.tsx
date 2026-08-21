import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { obTaxiSweden } from "@/content/obTaxiSweden";
import ObTaxiSwedenScreen from "@/screens/ObTaxiSwedenScreen";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/ob-taxi-sweden/",
  title: obTaxiSweden.sv.metaTitle,
  description: obTaxiSweden.sv.metaDescription,
});

export default function Page() {
  return <ObTaxiSwedenScreen lang="sv" />;
}
