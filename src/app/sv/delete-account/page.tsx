import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageTitles } from "@/content/site";
import DeleteAccountScreen from "@/screens/DeleteAccountScreen";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/delete-account/",
  title: pageTitles.sv.delete,
  description: "Så här begär du radering av ditt Drive Test-konto och dina uppgifter.",
});

export default function Page() {
  return <DeleteAccountScreen lang="sv" />;
}
