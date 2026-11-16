import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent, ArticleSource } from "./types";

// Facts checked against Trafikverket (Taxiförarlegitimation, last updated 8 June 2026; priser; boka, betala och avboka prov)
// on 16 November 2026.

const sources: ArticleSource[] = [
  { label: "Trafikverket – Taxiförarlegitimation (teoriprov och körprov)", url: "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/" },
  { label: "Trafikverket – Priser för prov och fotografering", url: "https://www.trafikverket.se/korkort/boka-betala-och-avboka-prov/priser/" },
  { label: "Trafikverket – Boka, betala och avboka prov", url: "https://www.trafikverket.se/korkort/boka-betala-och-avboka-prov/" },
  { label: "Trafikverket – Före provet (id-handlingar)", url: "https://www.trafikverket.se/korkort/ta-korkort/fore-provet/" },
  { label: "Transportstyrelsen – Ansökan om taxiförarlegitimation", url: "https://www.transportstyrelsen.se/ansokan-om-taxiforarlegitimation" },
];

const sv: ArticleContent = {
  metaTitle: "Taxi kunskapsprov 2026: delprov, poäng och hur du bokar | Drive Test",
  metaDescription:
    "Taxi kunskapsprov för taxiförarlegitimation: två delprov (48 av 65 och 34 av 46 poäng), 50 minuter vardera, pris, bokning och hur du övar. Källa: Trafikverket.",
  eyebrow: "Taxiförarlegitimation · Guide",
  tag: "Taxi",
  lastUpdated: "2026-11-16",
  lastUpdatedLabel: "Uppdaterad 16 november 2026",
  title: "Taxi kunskapsprov: så fungerar provet för taxiförarlegitimation",
  lede: "Taxi kunskapsprovet är <strong>två teoriprov</strong>: delprov 1 om säkerhet och beteende och delprov 2 om lagstiftning. Du behöver <strong>minst 48 rätt på delprov 1</strong> och <strong>minst 34 rätt på delprov 2</strong>, och har 50 minuter på varje. Därefter kommer ett körprov.",
  intro:
    "Uppgifterna kommer från Trafikverket och är kontrollerade i november 2026. Drive Test är inte kopplat till Trafikverket. Du bokar proven själv hos Trafikverket och ansöker om legitimationen hos Transportstyrelsen. Kontrollera alltid aktuella regler och avgifter hos myndigheterna.",
  excerpt:
    "Taxi kunskapsprov: de två delproven, poängkrav, tid, vad som testas, pris, bokning och körprovet för taxiförarlegitimation.",
  cover: "/assets/blog/taxi-road-to-stockholm.webp",
  coverAlt: "En snöröjd väg genom tallskog en vinterdag, med en bil framför i dagsljus",
  sections: [
    {
      heading: "Taxi kunskapsprov i korthet",
      html: `<p>Provet för taxiförarlegitimation består enligt Trafikverket av <strong>två teoriprov och ett körprov</strong>. De två teoriproven är det som ofta kallas taxi kunskapsprov.</p>`,
      table: {
        headers: ["", "Delprov 1: Säkerhet och beteende", "Delprov 2: Lagstiftning"],
        rows: [
          { cells: ["Antal frågor", "70", "50"] },
          { cells: ["Högsta poäng", "65 (5 testfrågor räknas inte)", "46 (4 testfrågor räknas inte)"] },
          { cells: ["Godkänt", "minst 48 rätt", "minst 34 rätt"] },
          { cells: ["Provtid", "50 minuter", "50 minuter"] },
        ],
      },
    },
    {
      heading: "Vad testas på kunskapsprovet?",
      html: `<p>Delproven mäter dina kunskaper inom <strong>tio olika områden</strong>. Du ska visa att du har de kunskaper som krävs för att vara en trafiksäker och miljömedveten yrkesförare.</p><p><strong>Delprov 1, säkerhet och beteende</strong>, tar bland annat upp:</p><ul><li>att planera färden med karta och GPS så att resan blir effektiv</li><li>körekonomi, körsätt och förebyggande underhåll</li><li>hur olika fordon påverkar miljön</li><li>ditt ansvar för att resan blir trygg, säker och bekväm</li><li>bemötande: att vara serviceinriktad och respektera olika människors förutsättningar och behov</li><li>sjukdomar och funktionsnedsättningar, så att alla kan uppleva resan som trygg</li><li>riskerna i arbetet som taxiförare</li><li>fordonskännedom, till exempel fordonsunderhåll och felsökning, och belysningskrav</li></ul><p><strong>Delprov 2, lagstiftning</strong>, handlar om reglerna för taxitrafik och vad som kan hända vid brott mot dem. Du ska också ha <strong>mycket goda kunskaper om trafikregler och vägmärken</strong>.</p>`,
    },
    {
      heading: "Regler för delprov och omprov",
      html: `<ul><li>Du väljer själv i vilken ordning du gör de två delproven.</li><li>Delproven måste vara godkända <strong>inom 6 månader</strong> från ditt första godkända delprov.</li><li>De hjälpmedel du behöver finns på plats i teorisalen. Mobilen ska vara helt avstängd.</li><li>Har du dyslexi, ADHD, autism eller något annat som gör att du behöver stöd när du läser kan du ansöka om <strong>teoriprov med stöd</strong>. Teoriprovet för taxiförarlegitimation kan göras med förlängd provtid.</li><li>Kommer du inte upp i godkänt resultat på ett delprov behöver du boka om det delprovet. Det kostar en ny avgift.</li></ul>`,
    },
    {
      heading: "Så bokar du taxi kunskapsprovet",
      html: `<p>Du bokar i Trafikverkets bokningstjänst, samma tjänst som för körkortsproven.</p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Logga in</strong> i Trafikverkets bokningstjänst på trafikverket.se under Boka, betala och avboka prov.",
          "<strong>Välj taxiförarlegitimation</strong> och boka delprov 1 och delprov 2. Du väljer själv ordning och dag.",
          "<strong>Betala</strong> med Swish eller betalkort. Är du över 18 kan du välja faktura efter provet.",
          "<strong>Avboka eller omboka senast 24 timmar före provet</strong> om det behövs. Då följer pengarna med eller betalas tillbaka. Avbokar du senare betalar du ändå.",
        ],
      },
    },
    {
      heading: "Vad kostar taxi kunskapsprovet?",
      html: `<p>Enligt Trafikverkets prislista kostar varje teoriprov för taxiförarlegitimation <strong>420 kr dagtid</strong> och <strong>520 kr efter kl. 18 och på helger</strong>. De två delproven blir alltså 840 kr på dagtid. Fotot som tas inför provet kostar 120 kr. Körprovet kostar 1 000 kr dagtid (1 400 kr efter kl. 18 och helg) och Trafikverkets bil kostar 800 kr om du vill låna den. Alla avgifter för hela vägen finns i <a href="/sv/blog/taxiforarlegitimation-2026/">Vad kostar taxiförarlegitimation 2026?</a></p>`,
    },
    {
      heading: "På provdagen",
      html: `<ul><li><strong>Kom minst 30 minuter innan.</strong> Du fotograferas på förarprovskontoret, och fotot hamnar på din taxiförarlegitimation.</li><li><strong>Ta med en fysisk, giltig id-handling.</strong> Freja eID och digitalt BankID-kort godtas inte.</li><li>Hur bokning, id-handlingar och avbokning fungerar hos Trafikverket i allmänhet beskriver vi i <a href="/sv/blog/boka-teoriprov/">Boka prov hos Trafikverket</a>.</li></ul>`,
    },
    {
      heading: "Körprovet efter kunskapsprovet",
      html: `<p>Efter de två teoriproven gör du ett körprov. Du ska ha ett giltigt körkort med behörighet B, utfärdat i Sverige eller i något annat land inom EES. Körprovet består av tre delar:</p><ul><li><strong>Fordonskontroll.</strong> Du kontrollerar bilen, upptäcker brister och föreslår åtgärder.</li><li><strong>Passagerares säkerhet.</strong> Du visar vad du gör för att passagerarna ska färdas säkert, till exempel hur du använder skyddsutrustning för barn i bil.</li><li><strong>Körning i landsvägs- och gatutrafik.</strong> Körningen pågår minst 35 minuter mot ett angivet mål. GPS används, och du ska också kunna hitta till ett resmål utan GPS.</li></ul><p>Du kan boka Trafikverkets bil samtidigt som du bokar körprovet och välja manuell eller automatväxlad bil.</p>`,
    },
    {
      heading: "Öva inför taxi kunskapsprovet",
      html: `<p>Ett bra upplägg är att öva delprov 1 och delprov 2 var för sig, eftersom de testar olika saker: delprov 1 är resonemang om säkerhet, bemötande och körsätt, delprov 2 är regler, trafikregler och vägmärken som du behöver kunna utantill. Gå igenom varje fel och förstå varför svaret är rätt. Frågorna du övar på är inte provets egna frågor, så målet är att lära sig reglerna och resonemanget.</p><p>I <strong>Drive Test</strong> övar du taxiprovet med frågor i provformat för båda delproven, med förklaringar, AI-handledare och text-till-tal, och du ser dina resultat per område. Det finns gratis kategorier att börja med. Se i appen vad som ingår gratis och vad som ingår i betalplanen.</p><p><strong><a href="/sv/exams/taxi-licence/">Öva taxiprov i Drive Test &rsaquo;</a></strong></p>`,
    },
    {
      heading: "Kunskapsprov för trafiktillstånd taxi är något annat",
      html: `<p>Söker du i stället tillstånd för att driva taxiföretag (trafiktillstånd) gäller ett annat prov, yrkeskunnande, för den som ska vara trafikansvarig. Det beskriver vi i <a href="/sv/blog/yrkeskunnande-taxi-exam/">yrkeskunnande för taxi</a>.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Vad är taxi kunskapsprovet?", aHtml: "Det är de två teoriproven för taxiförarlegitimation: delprov 1 om säkerhet och beteende och delprov 2 om lagstiftning. Efter dem gör du ett körprov." },
    { q: "Hur många poäng krävs på taxi kunskapsprovet?", aHtml: "På delprov 1 krävs minst 48 rätt av 65 möjliga poäng, och på delprov 2 minst 34 rätt av 46 möjliga poäng." },
    { q: "Hur lång tid har man på taxiprovet?", aHtml: "50 minuter på varje delprov. Du kan ansöka om förlängd provtid om du behöver stöd när du läser." },
    { q: "Hur många frågor är det på taxiprovet?", aHtml: "Delprov 1 har 70 frågor och delprov 2 har 50 frågor. Fem respektive fyra av frågorna är testfrågor som inte räknas." },
    { q: "Hur bokar man taxi kunskapsprov?", aHtml: "Du loggar in i Trafikverkets bokningstjänst, väljer taxiförarlegitimation och bokar delprov 1 och delprov 2. Du betalar med Swish, kort eller faktura (över 18)." },
    { q: "Vad kostar taxi kunskapsprovet?", aHtml: "420 kr per delprov dagtid och 520 kr efter kl. 18 och på helger, enligt Trafikverkets prislista. Foto inför provet kostar 120 kr." },
    { q: "Hur länge gäller ett godkänt delprov?", aHtml: "Båda delproven måste vara godkända inom 6 månader från ditt första godkända delprov." },
    { q: "Kan jag öva taxi kunskapsprovet online?", aHtml: "Ja. I Drive Test-appen finns övningsfrågor i provformat för båda delproven, med förklaringar och uppföljning av dina resultat." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/taxi-licence-guide/", "/sv/exams/taxi-licence/", "/sv/blog/boka-teoriprov/"],
};

const en: ArticleContent = {
  metaTitle: "Taxi Kunskapsprov: The Two Theory Tests for a Taxi Licence | Drive Test",
  metaDescription:
    "The taxi kunskapsprov explained: two theory tests (48 of 65 and 34 of 46 points), 50 minutes each, what they cover, price and booking. Source: Trafikverket.",
  eyebrow: "Taxi licence · Guide",
  tag: "Taxi",
  lastUpdated: "2026-11-16",
  lastUpdatedLabel: "Updated 16 November 2026",
  title: "Taxi kunskapsprov: how the taxi licence theory test works",
  lede: "The taxi <strong>kunskapsprov</strong> is two theory tests: part 1 on safety and behaviour and part 2 on legislation. You need <strong>48 correct on part 1</strong> and <strong>34 correct on part 2</strong>, with 50 minutes for each. A driving test follows.",
  intro:
    "Facts are from Trafikverket and were checked in November 2026. Drive Test is not connected to Trafikverket. You book the tests with Trafikverket and apply for the licence with Transportstyrelsen.",
  excerpt: "The taxi kunskapsprov: the two parts, pass marks, time, topics, price, booking and the driving test.",
  cover: "/assets/blog/taxi-road-to-stockholm.webp",
  coverAlt: "A ploughed road through pine forest on a winter day, with a car ahead in daylight",
  sections: [
    {
      heading: "The two parts",
      table: {
        headers: ["", "Part 1: Safety and behaviour", "Part 2: Legislation"],
        rows: [
          { cells: ["Questions", "70", "50"] },
          { cells: ["Maximum points", "65 (5 test questions do not count)", "46 (4 test questions do not count)"] },
          { cells: ["Pass", "at least 48 correct", "at least 34 correct"] },
          { cells: ["Time", "50 minutes", "50 minutes"] },
        ],
      },
    },
    {
      heading: "Rules, cost and booking",
      html: `<p>You choose the order of the two parts, and both must be passed within <strong>6 months</strong> of the first one you pass. Each part costs 420 kr in daytime and 520 kr after 18:00 and at weekends; the photo is 120 kr (2026). You book in Trafikverket's booking service, and cancel at least 24 hours before to get the fee back. You need valid physical ID, and you should arrive 30 minutes early. After the theory tests there is a driving test (at least 35 minutes, with GPS).</p><p>The tests are held in Swedish. See <a href="/blog/taxi-exam-for-non-native-speakers/">the taxi exam for non-native speakers</a> and the <a href="/taxi-licence-guide/">taxi licence guide</a>. Practise: <a href="/exams/taxi-licence/">taxi licence test practice</a> in Drive Test.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "What is the taxi kunskapsprov?", aHtml: "The two theory tests for the taxi driver's licence: part 1 (safety and behaviour) and part 2 (legislation)." },
    { q: "How many points do I need?", aHtml: "At least 48 correct on part 1 (maximum 65 points) and at least 34 correct on part 2 (maximum 46 points)." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/taxi-licence-guide/", "/exams/taxi-licence/"],
};

export const taxiKunskapsprov = { slug: "taxi-kunskapsprov", en, sv };
