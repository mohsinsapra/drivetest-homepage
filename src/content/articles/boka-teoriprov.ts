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
  metaTitle: "Boka prov hos Trafikverket: teoriprov och körprov 2026 | Drive Test",
  metaDescription:
    "Så bokar du prov hos Trafikverket: logga in, välj teoriprov eller körprov, betala, avboka senast 24 timmar innan. Pris, id-handling och körkortstillstånd steg för steg.",
  eyebrow: "B-körkort · Guide",
  tag: "Körkort",
  lastUpdated: "2026-11-16",
  lastUpdatedLabel: "Uppdaterad 16 november 2026",
  title: "Boka prov hos Trafikverket: teoriprov och körprov",
  lede: "Du bokar prov hos Trafikverket genom att <strong>logga in i bokningstjänsten</strong>, välja teoriprov eller körprov, tid och plats och betala. Du behöver ett körkortstillstånd först. Avboka senast 24 timmar före provet för att få pengarna tillbaka.",
  intro:
    "Guiden gäller prov för B-körkort (personbil). Uppgifterna kommer från Trafikverket och Transportstyrelsen och är kontrollerade i november 2026. Drive Test är inte kopplat till Trafikverket, och vi bokar inga prov åt dig. Kontrollera alltid aktuella regler och avgifter hos myndigheterna innan du bokar.",
  excerpt:
    "Boka prov hos Trafikverket steg för steg: teoriprov och körprov, körkortstillstånd, pris, id-handling, avbokning och omboka.",
  cover: "/assets/blog/boka-teoriprov-forest-road.webp",
  coverAlt: "Kurvig landsväg genom granskog sedd genom vindrutan en mulen dag, med en röd bil långt fram",
  sections: [
    {
      heading: "Kort svar: så bokar du prov hos Trafikverket",
      html: `<p>Samma bokningstjänst används för både teoriprov och körprov. <a href="https://www.trafikverket.se/korkort/boka-betala-och-avboka-prov/" target="_blank" rel="noopener noreferrer"><strong>Boka, betala och avboka prov hos Trafikverket &rsaquo;</strong></a></p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Ha ett körkortstillstånd.</strong> Utan det går det inte att boka prov. Du ansöker hos Transportstyrelsen.",
          "<strong>Logga in i Trafikverkets bokningstjänst</strong> och välj <strong>teoriprov</strong> eller <strong>körprov</strong> för behörighet B.",
          "<strong>Välj provort, dag och tid</strong>, och språk om det är teoriprov.",
          "<strong>Betala</strong> med Swish eller kort. Är du över 18 kan du välja faktura efter provet.",
          "<strong>Avboka eller omboka senast 24 timmar före</strong> provet om det behövs. Då följer pengarna med eller betalas tillbaka.",
        ],
      },
    },
    {
      heading: "Det här behöver du innan du kan boka",
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
      html: `<p>Så här går bokningen av teoriprovet till:</p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Logga in i Trafikverkets bokningstjänst</strong> på trafikverket.se under Boka, betala och avboka prov. Är du under 18 kan en vårdnadshavare logga in och boka åt dig.",
          "<strong>Välj behörighet B</strong> och att du vill boka teoriprov.",
          "<strong>Välj språk.</strong> Teoriprovet för B finns på svenska och på 15 översatta språk, till exempel engelska, arabiska och persiska. Du väljer språket när du bokar.",
          "<strong>Välj provort och tid.</strong> Boka i god tid, då har du större chans att få en tid som passar.",
          "<strong>Betala.</strong> Du betalar med Swish eller betalkort (Visa, Mastercard). Är du över 18 kan du också välja faktura efter provet. Avgiften för fotot betalar du samtidigt.",
        ],
      },
    },
    {
      heading: "Boka körprov hos Trafikverket",
      html: `<p>Körprovet bokar du i samma bokningstjänst som teoriprovet, men väljer <strong>körprov</strong> för behörighet B. Trafikverkets eget råd är att boka körprovet <strong>samtidigt som teoriprovet, men med några veckors mellanrum</strong>. Då hinner du göra om teoriprovet före körprovet om det behövs.</p><ul><li>Körprovet kostar <strong>1 000 kr dagtid</strong> och <strong>1 400 kr efter kl. 18 och på helger</strong> (2026).</li><li>Vill du hyra bil av Trafikverket till körprovet för B kostar det <strong>800 kr</strong> extra. Det framgår av Trafikverkets prislista.</li><li>Samma regler för betalning, avbokning och id-handling gäller som för teoriprovet.</li><li>Gör du körprovet med automatväxlad bil får du villkor 78 på körkortet, och då får du bara köra automatväxlade bilar. Vill du köra manuell bil behöver du göra ett nytt körprov.</li></ul>`,
    },
    {
      alert: {
        title: "Är du under 18?",
        html: "<p>Då måste provet vara betalt senast <strong>25 timmar före provstart</strong>. Annars avbokas det automatiskt.</p>",
      },
    },
    {
      heading: "Vad kostar det att boka prov?",
      html: `<p>Enligt Trafikverkets prislista (uppdaterad 7 januari 2026):</p>`,
      table: {
        headers: ["Avgift", "Dagtid", "Efter kl. 18 och helg"],
        rows: [
          { cells: ["Teoriprov B", "420 kr", "520 kr"] },
          { cells: ["Körprov B", "1 000 kr", "1 400 kr"] },
          { cells: ["Hyra bil till körprov (B)", "800 kr", "800 kr"] },
          { cells: ["Foto i samband med prov", "120 kr", "120 kr"] },
        ],
      },
    },
    {
      heading: "Avboka eller omboka prov",
      html: `<ul><li><strong>Senast 24 timmar före provet</strong> kan du avboka och få tillbaka avgiften automatiskt.</li><li><strong>Ombokar</strong> du ett betalt prov följer betalningen med till den nya tiden. Du betalar inte igen.</li><li>Avbokar eller ombokar du <strong>senare än 24 timmar</strong> före provet, eller inte kommer alls, betalar du ändå. Det gäller även om du blir sen på grund av kollektivtrafiken eller bilkö.</li><li>Blir du <strong>sjuk</strong> kan du ansöka om att få pengarna tillbaka med ett intyg från vården.</li><li>Du kan avboka dygnet runt i bokningstjänsten eller på telefon <strong>0771-17 18 19</strong>.</li><li>Ombokar Trafikverket ditt prov, till exempel vid sjukdom, bokas du om till första lediga tid på samma plats och får en bekräftelse via sms eller mejl. Passar den nya tiden inte kan du boka en ny tid i bokningstjänsten.</li></ul><p>Trafikverket tillåter inte automatiska bokningstjänster (botar) i sitt bokningssystem. Boka själv i bokningstjänsten.</p>`,
    },
    {
      heading: "Vilken id-handling behöver jag?",
      html: `<p>Du måste visa en <strong>fysisk, giltig id-handling</strong> som är hel. Trafikverket godtar bland annat:</p><ul><li>svenskt nationellt id-kort och id-kort från Skatteverket</li><li>svenskt körkort</li><li>svenskt EU-pass och övriga EU-pass</li><li>nationellt id-kort utfärdat av annat EU-land den 2 augusti 2021 eller senare</li><li>SIS-märkt företagskort, tjänstekort eller id-kort</li></ul><p><strong>Freja eID och digitalt BankID-kort godtas inte.</strong> Saknar du godtagbart id kan du ansöka om att någon annan intygar din identitet. Ansökan ska ha kommit in till Trafikverket minst två veckor före provet. Kan du inte visa id på provdagen betalar du ändå provavgiften.</p>`,
    },
    {
      heading: "På provdagen",
      html: `<ul><li><strong>Kom minst 30 minuter innan.</strong> Du fotograferas före ditt första teoriprov, och fotot hamnar på ditt körkort.</li><li><strong>Ta med giltig id-handling.</strong></li><li><strong>Stäng av mobilen helt.</strong> Hörlurar och miniräknare finns på plats.</li><li>Teoriprovet har <strong>70 frågor</strong> (5 räknas inte), du behöver <strong>52 av 65 poäng</strong> och har <strong>50 minuter</strong>. Resultatet ser du direkt.</li><li>Du kan bara göra ett prov per dag för samma behörighet.</li></ul>`,
    },
    {
      heading: "Öva först, boka sedan",
      html: `<p>Varje nytt försök kostar en ny avgift och en ny väntan. Det lönar sig därför att vara säker på teorin innan provdagen. Ett bra tecken är att du klarar övningsprov i provets format med marginal, flera gånger i rad, och att du förstår varför du svarar fel när du gör det.</p><p>I <strong>Drive Test</strong> övar du körkortsteori för B med provliknande frågor, förklaringar, AI-handledare och text-till-tal, och du ser dina resultat per område. Det finns gratis kategorier att börja med. Se i appen vad som ingår gratis och vad som ingår i betalplanen.</p><p><strong><a href="/sv/exams/driving-licence/">Öva inför teoriprovet i Drive Test &rsaquo;</a></strong></p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Hur bokar man prov hos Trafikverket?", aHtml: "Du loggar in i Trafikverkets bokningstjänst, väljer teoriprov eller körprov för behörighet B, provort och tid och betalar med Swish, kort eller faktura (faktura om du är över 18). Du måste ha ett körkortstillstånd." },
    { q: "Hur bokar man teoriprov för körkort?", aHtml: "Samma sätt: logga in i bokningstjänsten, välj teoriprov och språk, provort och tid och betala. Riskutbildningens båda delar ska vara gjorda och giltiga när du gör provet." },
    { q: "Hur bokar man körprov?", aHtml: "I samma bokningstjänst väljer du körprov för behörighet B. Trafikverket rekommenderar att du bokar körprovet samtidigt som teoriprovet, med några veckors mellanrum." },
    { q: "När kan man boka prov?", aHtml: "När du har ett giltigt körkortstillstånd. Det går inte att boka prov utan det." },
    { q: "Vad kostar teoriprov och körprov?", aHtml: "Teoriprov B kostar 420 kr dagtid och 520 kr efter kl. 18 och på helger. Körprov B kostar 1 000 kr dagtid och 1 400 kr efter kl. 18 och på helger (2026). Foto inför första provet kostar 120 kr." },
    { q: "Kan jag avboka provet och få pengarna tillbaka?", aHtml: "Ja, om du avbokar senast 24 timmar före provet. Senare än så betalar du ändå, utom om du blir sjuk och kan visa intyg från vården." },
    { q: "Hur ombokar jag ett prov?", aHtml: "Du ombokar i bokningstjänsten. Har du redan betalat följer betalningen med till den nya tiden. Ombokar du med mindre än 24 timmar kvar betalar du provavgiften ändå." },
    { q: "Vilken id-handling behövs på provet?", aHtml: "En fysisk, giltig id-handling, till exempel svenskt id-kort, körkort eller pass. Freja eID och digitalt BankID-kort godtas inte." },
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
