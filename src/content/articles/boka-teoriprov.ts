import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent, ArticleSource } from "./types";

// Facts checked against Trafikverket (boka, betala och avboka prov; personbil; före provet; priser)
// and Transportstyrelsen (ta körkort) on 9 November 2026.

const sources: ArticleSource[] = [
  { label: "Trafikverket – Boka, betala och avboka prov", url: "https://www.trafikverket.se/korkort/boka-betala-och-avboka-prov/" },
  { label: "Trafikverket – Personbil och lätt lastbil (teoriprovet)", url: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/" },
  { label: "Trafikverket – Före provet (foto och id-handlingar)", url: "https://www.trafikverket.se/korkort/ta-korkort/fore-provet/" },
  { label: "Trafikverket – Priser för prov och fotografering", url: "https://www.trafikverket.se/korkort/boka-betala-och-avboka-prov/priser/" },
  { label: "Transportstyrelsen – Ta körkort (körkortstillstånd och riskutbildning)", url: "https://www.transportstyrelsen.se/sv/vagtrafik/korkort/ta-korkort/" },
];

const sv: ArticleContent = {
  metaTitle: "Boka teoriprov hos Trafikverket: steg för steg 2026 | Drive Test",
  metaDescription:
    "Så bokar du teoriprov för körkort hos Trafikverket: körkortstillstånd, riskutbildning, bokning, betalning, avbokning inom 24 timmar och vad du tar med på provdagen.",
  eyebrow: "B-körkort · Guide",
  tag: "Körkort",
  lastUpdated: "2026-11-09",
  lastUpdatedLabel: "Uppdaterad 9 november 2026",
  title: "Boka teoriprov hos Trafikverket: steg för steg",
  lede: "Du <strong>bokar teoriprovet</strong> i Trafikverkets bokningstjänst. Men innan det går behöver du ett körkortstillstånd, och innan provdagen ska riskutbildningen vara klar. Här är hela ordningen, vad det kostar och vad som gäller om du behöver avboka.",
  intro:
    "Guiden gäller teoriprovet för B-körkort (personbil). Uppgifterna kommer från Trafikverket och Transportstyrelsen och är kontrollerade i november 2026. Drive Test är inte kopplat till Trafikverket, och vi bokar inga prov åt dig. Kontrollera alltid aktuella regler och avgifter hos myndigheterna innan du bokar.",
  excerpt:
    "Boka teoriprov för körkort steg för steg: körkortstillstånd, riskutbildning, bokning och betalning, avbokning och provdagen.",
  cover: "/assets/blog/boka-teoriprov-forest-road.webp",
  coverAlt: "Kurvig landsväg genom granskog sedd genom vindrutan en mulen dag, med en röd bil långt fram",
  sections: [
    {
      heading: "Det här behöver du innan du kan boka teoriprov",
      html: `<p>Två saker måste vara på plats:</p>`,
      list: {
        ordered: false,
        items: [
          "<strong>Körkortstillstånd.</strong> Trafikverket skriver att det inte går att boka prov utan ett körkortstillstånd. Du ansöker om det hos <a href=\"https://www.transportstyrelsen.se/sv/vagtrafik/korkort/ta-korkort/\" target=\"_blank\" rel=\"noopener noreferrer\">Transportstyrelsen</a>.",
          "<strong>Riskutbildningens båda delar.</strong> Du måste ha gjort risk 1 och risk 2 innan teoriprovet, och utbildningen ska vara giltig när du kommer till provet. Har du inte gjort dem när du bokar, se till att de är klara före provdagen.",
        ],
      },
    },
    {
      heading: "Boka teoriprov steg för steg",
      html: `<p>Så här går bokningen till hos Trafikverket:</p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Logga in i Trafikverkets bokningstjänst</strong> på trafikverket.se under Boka, betala och avboka prov. Är du under 18 kan en vårdnadshavare logga in och boka åt dig.",
          "<strong>Välj behörighet B</strong> och att du vill boka teoriprov.",
          "<strong>Välj språk.</strong> Teoriprovet för B finns på svenska och på 15 översatta språk, till exempel engelska, arabiska och persiska. Du väljer språket när du bokar.",
          "<strong>Välj provort och tid.</strong> Boka i god tid, då har du större chans att få en tid som passar.",
          "<strong>Boka gärna körprovet samtidigt</strong>, men med några veckors mellanrum. Det är Trafikverkets eget råd: då hinner du göra om teoriprovet före körprovet om det behövs.",
          "<strong>Betala.</strong> Du betalar med Swish eller betalkort (Visa, Mastercard). Är du över 18 kan du också välja faktura efter provet. Avgiften för fotot betalar du samtidigt.",
        ],
      },
    },
    {
      alert: {
        title: "Är du under 18?",
        html: "<p>Då måste provet vara betalt senast <strong>25 timmar före provstart</strong>. Annars avbokas det automatiskt.</p>",
      },
    },
    {
      heading: "Vad kostar teoriprovet?",
      html: `<p>Enligt Trafikverkets prislista (uppdaterad 7 januari 2026):</p>`,
      table: {
        headers: ["Avgift", "Dagtid", "Efter kl. 18 och helg"],
        rows: [
          { cells: ["Teoriprov B", "420 kr", "520 kr"] },
          { cells: ["Foto i samband med prov", "120 kr", "120 kr"] },
          { cells: ["Körprov B (om du bokar det samtidigt)", "1 000 kr", "1 400 kr"] },
        ],
      },
    },
    {
      heading: "Avboka eller omboka teoriprovet",
      html: `<ul><li><strong>Senast 24 timmar före provet</strong> kan du avboka och få tillbaka avgiften automatiskt.</li><li><strong>Ombokar</strong> du ett betalt prov följer betalningen med till den nya tiden.</li><li>Avbokar eller ombokar du <strong>senare än 24 timmar</strong> före provet, eller inte kommer alls, betalar du ändå. Det gäller även om du blir sen på grund av kollektivtrafiken eller bilkö.</li><li>Blir du <strong>sjuk</strong> kan du ansöka om att få pengarna tillbaka med ett intyg från vården.</li><li>Du kan avboka dygnet runt i bokningstjänsten eller på telefon <strong>0771-17 18 19</strong>.</li></ul><p>Trafikverket tillåter inte automatiska bokningstjänster (botar) i sitt bokningssystem. Boka själv i bokningstjänsten.</p>`,
    },
    {
      heading: "På provdagen",
      html: `<ul><li><strong>Kom minst 30 minuter innan.</strong> Du fotograferas före ditt första teoriprov, och fotot hamnar på ditt körkort.</li><li><strong>Ta med en giltig id-handling</strong>, till exempel svenskt körkort, svenskt nationellt id-kort, id-kort från Skatteverket eller svenskt pass. Freja eID och digitalt BankID-kort godtas inte. Saknar du id kan du ansöka om att någon intygar din identitet, minst två veckor före provet.</li><li><strong>Stäng av mobilen helt.</strong> Hörlurar och miniräknare finns på plats.</li><li>Provet har <strong>70 frågor</strong> (5 räknas inte), du behöver <strong>52 av 65 poäng</strong> och har <strong>50 minuter</strong>. Resultatet ser du direkt.</li><li>Du kan bara göra ett prov per dag för samma behörighet.</li></ul>`,
    },
    {
      heading: "Öva först, boka sedan",
      html: `<p>Varje nytt försök kostar en ny avgift och en ny väntan. Det lönar sig därför att vara säker på teorin innan provdagen. Ett bra tecken är att du klarar övningsprov i provets format med marginal, flera gånger i rad, och att du förstår varför du svarar fel när du gör det.</p><p>I <strong>Drive Test</strong> övar du körkortsteori för B med provliknande frågor, förklaringar, AI-handledare och text-till-tal, och du ser dina resultat per område. Det finns gratis kategorier att börja med. Se i appen vad som ingår gratis och vad som ingår i betalplanen.</p><p><strong><a href="/sv/exams/driving-licence/">Öva inför teoriprovet i Drive Test &rsaquo;</a></strong></p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Hur bokar man teoriprov för körkort?", aHtml: "Du loggar in i Trafikverkets bokningstjänst, väljer behörighet B, språk, provort och tid och betalar med Swish, kort eller faktura (faktura om du är över 18)." },
    { q: "När kan man boka teoriprov?", aHtml: "När du har ett giltigt körkortstillstånd. Det går inte att boka prov utan det. Riskutbildningens båda delar ska vara gjorda och giltiga när du gör provet." },
    { q: "Vad kostar teoriprovet?", aHtml: "420 kr dagtid och 520 kr efter kl. 18 och på helger (2026). Foto inför första provet kostar 120 kr." },
    { q: "Kan jag avboka teoriprovet och få pengarna tillbaka?", aHtml: "Ja, om du avbokar senast 24 timmar före provet. Senare än så betalar du ändå, utom om du blir sjuk och kan visa intyg från vården." },
    { q: "Ska jag boka teoriprov och körprov samtidigt?", aHtml: "Trafikverket rekommenderar det, men med några veckors mellanrum så att du hinner göra om teoriprovet före körprovet om det behövs." },
    { q: "Bokar Drive Test prov åt mig?", aHtml: "Nej. Drive Test är en övningsapp och är inte kopplad till Trafikverket. Du bokar själv i Trafikverkets bokningstjänst." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/exams/driving-licence/", "/sv/exams/taxi-licence/"],
};

const en: ArticleContent = {
  metaTitle: "How to Book the Swedish Theory Test (Teoriprov) | Drive Test",
  metaDescription:
    "Book the Swedish B-licence theory test with Trafikverket: learner permit, risk training, booking, payment, the 24-hour cancellation rule and what to bring.",
  eyebrow: "B licence · Guide",
  tag: "Driving licence",
  lastUpdated: "2026-11-09",
  lastUpdatedLabel: "Updated 9 November 2026",
  title: "How to book the Swedish theory test with Trafikverket",
  lede: "You book the <strong>teoriprov</strong> in Trafikverket's booking service. First you need a learner permit (körkortstillstånd), and both parts of the risk training must be done before the test.",
  intro:
    "This guide covers the B-licence (car) theory test and was checked against Trafikverket and Transportstyrelsen in November 2026. Drive Test is not connected to Trafikverket and does not book tests for you.",
  excerpt: "Book the Swedish theory test step by step: permit, risk training, booking, payment, cancelling and test day.",
  cover: "/assets/blog/boka-teoriprov-forest-road.webp",
  coverAlt: "A winding country road through spruce forest seen through the windscreen on an overcast day, with a red car far ahead",
  sections: [
    {
      heading: "Steps",
      list: {
        ordered: true,
        items: [
          "Get a <strong>körkortstillstånd</strong> from Transportstyrelsen. You cannot book a test without one.",
          "Complete <strong>both parts of the risk training</strong> before the test date.",
          "Log in to Trafikverket's booking service, choose category B, the <strong>language</strong> (Swedish or one of 15 translated languages, including English), the test centre and time.",
          "Pay by Swish or card, or by invoice after the test if you are over 18. Under 18: pay at least 25 hours before the test.",
        ],
      },
    },
    {
      heading: "Cost, cancelling and test day",
      html: `<p>The theory test costs 420 kr in daytime and 520 kr after 18:00 and at weekends; the photo is 120 kr (2026). Cancel at least 24 hours before to get the fee back. Arrive 30 minutes early with valid physical ID. The test has 70 questions (5 unscored), you need 52 of 65 points and you have 50 minutes.</p><p>Practise first: <a href="/exams/driving-licence/">driving licence theory test practice</a> in Drive Test.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Can I book the theory test without a learner permit?", aHtml: "No. Trafikverket says you cannot book a test without a körkortstillstånd." },
    { q: "Can I cancel and get my money back?", aHtml: "Yes, if you cancel at least 24 hours before the test." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/exams/driving-licence/"],
};

export const bokaTeoriprov = { slug: "boka-teoriprov", en, sv };
