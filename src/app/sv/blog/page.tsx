import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { blog } from "@/content/blog";
import BlogScreen from "@/screens/BlogScreen";

export const metadata: Metadata = buildMetadata({
  lang: "sv",
  path: "/blog/",
  title: blog.sv.metaTitle,
  description: blog.sv.metaDescription,
});

export default function Page() {
  return <BlogScreen lang="sv" />;
}
