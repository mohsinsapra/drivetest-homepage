import type { Lang } from "@/lib/i18n";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HomeHero from "@/components/home/HomeHero";
import NewsSection from "@/components/home/NewsSection";
import AppBand from "@/components/home/AppBand";
import ToolCard from "@/components/home/ToolCard";
import HomeFaq from "@/components/home/HomeFaq";

export default function HomeScreen({ lang }: { lang: Lang }) {
  return (
    <>
      <SiteHeader lang={lang} currentPath="/" />
      <main id="main">
        <HomeHero lang={lang} />
        <NewsSection lang={lang} />
        <AppBand lang={lang} />
        <ToolCard lang={lang} />
        <HomeFaq lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
