import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { blog } from "@/content/blog";
import BlogScreen from "@/screens/BlogScreen";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  path: "/blog/",
  title: blog.en.metaTitle,
  description: blog.en.metaDescription,
});

export default function Page() {
  return <BlogScreen lang="en" />;
}
