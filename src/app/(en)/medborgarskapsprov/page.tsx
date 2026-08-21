import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { medborgarskapsprov } from "@/content/medborgarskapsprov";
import MedborgarskapsprovScreen from "@/screens/MedborgarskapsprovScreen";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/medborgarskapsprov/",
  title: medborgarskapsprov.en.metaTitle,
  description: medborgarskapsprov.en.metaDescription,
});

export default function Page() {
  return <MedborgarskapsprovScreen lang="en" />;
}
