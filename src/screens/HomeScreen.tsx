import type { Lang } from "@/lib/i18n";
import { home } from "@/content/home";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import DownloadDock from "@/components/layout/DownloadDock";
import { Section } from "@/components/ui/Section";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Reveal from "@/components/home/Reveal";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Screenshots from "@/components/home/Screenshots";
import FreeTools from "@/components/home/FreeTools";
import Pricing from "@/components/home/Pricing";
import Description from "@/components/home/Description";
import LicenceCta from "@/components/home/LicenceCta";
import Faq from "@/components/home/Faq";
import Download from "@/components/home/Download";
import shared from "@/components/home/shared.module.css";

export default function HomeScreen({ lang }: { lang: Lang }) {
  const h = home[lang];

  return (
    <>
      <SiteHeader lang={lang} currentPath="/" />
      <main>
        <Hero lang={lang} />

        <Marquee words={h.marquee} />

        <HowItWorks lang={lang} />

        <Features lang={lang} />

        <Section id="screenshots">
          <Reveal className={shared.sectionHead}>
            <span className={shared.kicker}>✦ {h.home_screenshots_title}</span>
            <h2 className={shared.sectionTitle}>{h.home_screens_sub}</h2>
          </Reveal>
          <Screenshots />
        </Section>

        <FreeTools lang={lang} />

        <Pricing lang={lang} />

        <Section id="description">
          <Reveal className={shared.sectionHead}>
            <span className={shared.kicker}>✦ {h.home_description_title}</span>
            <h2 className={shared.sectionTitle}>{h.home_desc_heading}</h2>
          </Reveal>
          <Description html={h.descriptionHtml} moreLabel={h.home_desc_more} lessLabel={h.home_desc_less} />
        </Section>

        <LicenceCta lang={lang} />

        <Faq lang={lang} />

        <Download lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      <DownloadDock label={h.home_dock_label} />
    </>
  );
}
