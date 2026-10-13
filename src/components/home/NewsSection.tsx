import type { Lang } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { articles } from "@/content/articles";
import { medborgarskapsprov } from "@/content/medborgarskapsprov";
import { obTaxiSweden } from "@/content/obTaxiSweden";
import { homeTv } from "@/content/home";
import { photoBySlug, sitePhotos } from "@/lib/sitePhotos";
import Container from "@/components/ui/Container";
import LinkCard, { cardGrid } from "@/components/ui/LinkCard";
import LinkButton from "@/components/ui/LinkButton";
import styles from "./Home.module.css";

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  sv: ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."],
};

function formatDate(iso: string, lang: Lang) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[lang][m - 1]} ${y}`;
}

interface Item {
  title: string;
  text: string;
  tag: string;
  href: string;
  image: string;
  alt: string;
  date: string;
}

function items(lang: Lang): Item[] {
  const list: Item[] = articles.map((a) => {
    const c = a[lang];
    const photo = photoBySlug[a.slug];
    return {
      title: c.title,
      text: c.excerpt,
      tag: c.tag,
      href: localePath(lang, `/blog/${a.slug}/`),
      image: photo ? photo.src : c.cover,
      alt: photo ? photo.alt[lang] : "",
      date: c.lastUpdated,
    };
  });
  const m = medborgarskapsprov[lang];
  list.push({
    title: m.title,
    text: m.intro.replace(/<[^>]+>/g, "").slice(0, 170).trimEnd() + "…",
    tag: lang === "sv" ? "Medborgarskap" : "Citizenship",
    href: localePath(lang, "/medborgarskapsprov/"),
    image: sitePhotos.flagBoat.src,
    alt: sitePhotos.flagBoat.alt[lang],
    date: m.lastUpdated,
  });
  const ob = obTaxiSweden[lang];
  list.push({
    title: ob.title,
    text: ob.intro.replace(/<[^>]+>/g, "").slice(0, 170).trimEnd() + "…",
    tag: lang === "sv" ? "Taxilön" : "Taxi pay",
    href: localePath(lang, "/ob-taxi-sweden/"),
    image: "/assets/blog/ob-taxi-driving.jpg",
    alt: "",
    date: ob.lastUpdated,
  });
  return list.sort((a, b) => b.date.localeCompare(a.date));
}

export default function NewsSection({ lang }: { lang: Lang }) {
  const t = homeTv[lang];
  const all = items(lang);
  const popular = all.slice(0, 3);
  const guides = all.slice(3, 6);
  const card = (i: Item) => (
    <LinkCard key={i.href} href={i.href} title={i.title} text={i.text} image={i.image} imageAlt={i.alt} category={i.tag} date={formatDate(i.date, lang)} />
  );
  return (
    <>
      <section className={styles.block} id="popular">
        <Container>
          <h2 className={styles.blockTitle}>{t.popularTitle}</h2>
          <div className={cardGrid}>{popular.map(card)}</div>
        </Container>
      </section>
      <section className={styles.block} id="guides">
        <Container>
          <h2 className={styles.blockTitle}>{t.guidesTitle}</h2>
          <div className={cardGrid}>{guides.map(card)}</div>
          <div className={styles.moreRow}>
            <LinkButton href={localePath(lang, "/blog/")} variant="solid">
              {t.allArticles}
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
