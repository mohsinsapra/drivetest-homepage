import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageTitles } from "@/content/site";
import DeleteAccountScreen from "@/screens/DeleteAccountScreen";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/delete-account/",
  title: pageTitles.en.delete,
  description: "How to request deletion of your Drive Test account and data.",
});

export default function Page() {
  return <DeleteAccountScreen lang="en" />;
}
