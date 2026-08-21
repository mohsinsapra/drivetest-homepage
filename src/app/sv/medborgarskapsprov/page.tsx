import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { medborgarskapsprov } from "@/content/medborgarskapsprov";
import MedborgarskapsprovScreen from "@/screens/MedborgarskapsprovScreen";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/medborgarskapsprov/",
  title: medborgarskapsprov.sv.metaTitle,
  description: medborgarskapsprov.sv.metaDescription,
});

export default function Page() {
  return <MedborgarskapsprovScreen lang="sv" />;
}
