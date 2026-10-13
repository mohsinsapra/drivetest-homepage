import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { articles, getArticle } from "@/content/articles";
import ArticleScreen from "@/screens/ArticleScreen";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug)!.sv;
  const meta = buildMetadata({
    lang: "sv",
    path: `/blog/${slug}/`,
    title: a.metaTitle,
    description: a.metaDescription,
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", images: [a.cover] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticleScreen lang="sv" slug={slug} />;
}
