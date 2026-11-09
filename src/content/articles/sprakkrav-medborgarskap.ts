import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent, ArticleSource } from "./types";

// Facts checked against Migrationsverket (medborgarskap för vuxna, sv + en) and its news item of 30 September 2026
// on 9 November 2026. We only state what Migrationsverket publishes; no dates for the future language test are given.

const svSources: ArticleSource[] = [
  { label: "Migrationsverket – Medborgarskap för vuxna (kunskaper i svenska och om samhället)", url: "https://www.migrationsverket.se/du-vill-ansoka/svenskt-medborgarskap/medborgarskap-for-vuxna/medborgarskap-for-vuxna.html" },
  { label: "Migrationsverket – The Swedish language test for citizenship may be postponed (30 september 2026)", url: "https://www.migrationsverket.se/en/newsarchive/theswedishlanguagetestforcitizenshipmaybepostponed.5.15b2309e1a04e5ed2071cd7.html" },
  { label: "UHR – Slutredovisning om införandet av medborgarskapsprov", url: "https://www.uhr.se/publikationer/publikationsbutiken/slutredovisning-om-inforandet-av-medborgarskapsprov/" },
];

const enSources: ArticleSource[] = [
  { label: "Swedish Migration Agency – Citizenship for adults (knowledge of Swedish and Swedish society)", url: "https://www.migrationsverket.se/en/you-want-to-apply/swedish-citizenship/citizenship-for-adults/citizenship-for-adults.html" },
  { label: "Swedish Migration Agency – The Swedish language test for citizenship may be postponed (30 September 2026)", url: "https://www.migrationsverket.se/en/newsarchive/theswedishlanguagetestforcitizenshipmaybepostponed.5.15b2309e1a04e5ed2071cd7.html" },
  { label: "UHR – Final report on introducing the citizenship tests (Swedish)", url: "https://www.uhr.se/publikationer/publikationsbutiken/slutredovisning-om-inforandet-av-medborgarskapsprov/" },
];

const sv: ArticleContent = {
  metaTitle: "Språkkrav för svenskt medborgarskap 2026: språktest och betyg | Drive Test",
  metaDescription:
    "Språkkravet för medborgarskap: nivå B1 i läs- och hörförståelse, A2 i tal och skrift. Inget språktest finns ännu, så här visar du dina kunskaper i svenska i dag.",
  eyebrow: "Medborgarskap · Guide",
  tag: "Medborgarskap",
  lastUpdated: "2026-11-09",
  lastUpdatedLabel: "Uppdaterad 9 november 2026",
  title: "Språkkrav för svenskt medborgarskap: finns det ett språktest?",
  lede: "För att bli svensk medborgare ska du i regel kunna <strong>svenska</strong> och ha kunskaper om det svenska samhället. Men det finns <strong>inget medborgarskapsprov i svenska</strong> ännu. Här är vilken nivå som krävs och hur du visar dina språkkunskaper i dag, enligt Migrationsverket.",
  intro:
    "Allt i artikeln kommer från Migrationsverkets egna sidor och är kontrollerat i november 2026. Reglerna är nya och kan ändras, särskilt när det gäller språkprovet. Kontrollera alltid Migrationsverket för ditt eget fall innan du ansöker. Drive Test är en övningsapp och är inte kopplad till Migrationsverket eller UHR.",
  excerpt:
    "Språkkravet för svenskt medborgarskap: vilka nivåer som krävs, vilka betyg och test som godtas och varför det inte finns något språktest ännu.",
  cover: "/assets/blog/medborgarskap-stockholm-snow.webp",
  coverAlt: "Snöfall i skymningen på ett torg i Stockholm, med en upplyst gammal byggnad med tornspiror, trafikljus och människor på avstånd",
  sections: [
    {
      heading: "Vem omfattas av språkkravet?",
      html: `<p>Kravet på kunskaper i svenska och om det svenska samhället gäller dig som är <strong>mellan 16 och 66 år</strong> när du ansöker om medborgarskap. Enligt Migrationsverket är två grupper undantagna:</p><ul><li>statslösa personer som är födda i Sverige och är under 21 år</li><li>nordiska medborgare som ansöker om svenskt medborgarskap</li></ul><p>Har du en funktionsnedsättning eller andra skäl som gör att du inte kan uppfylla kraven kan du få undantag. Det bedöms i ditt ärende.</p>`,
    },
    {
      heading: "Vilken nivå i svenska krävs?",
      html: `<p>Språkkunskaperna bedöms enligt den gemensamma europeiska referensramen för språk (GERS):</p>`,
      table: {
        headers: ["Färdighet", "Nivå som krävs"],
        rows: [
          { cells: ["Läsförståelse och hörförståelse", "B1"] },
          { cells: ["Muntlig och skriftlig färdighet", "A2"] },
        ],
      },
    },
    {
      heading: "Finns det ett språktest för medborgarskap?",
      html: `<p><strong>Nej, inte i dag.</strong> Migrationsverket skriver att det för tillfället inte finns något medborgarskapsprov i svenska och att det kommer att dröja några år innan ett sådant finns.</p><p>Den 30 september 2026 meddelade Migrationsverket att språkprovet kan bli försenat. UHR har rekommenderat att införandet skjuts upp, och regeringen ska besluta när provet kan införas. <strong>Kravet på kunskaper i svenska finns ändå kvar.</strong> Du visar dem på andra sätt, se nästa avsnitt.</p><p>Provet om det <strong>svenska samhället</strong> påverkas inte. Det första hölls i augusti 2026 och fler provtillfällen planeras.</p>`,
    },
    {
      heading: "Så visar du dina kunskaper i svenska i dag",
      html: `<p>Migrationsverket godtar bland annat:</p>`,
      list: {
        ordered: false,
        items: [
          "Godkänt betyg i svenska eller svenska som andraspråk från <strong>årskurs 9</strong> i grundskolan eller anpassade grundskolan, eller från specialskolans årskurs 9–10.",
          "Godkänt betyg i svenska eller svenska som andraspråk från <strong>gymnasieskolan</strong>, anpassade gymnasieskolan eller folkhögskola.",
          "Godkänt betyg i svenska eller svenska som andraspråk från <strong>kommunal vuxenutbildning (Komvux)</strong>.",
          "Godkänt betyg i den <strong>högsta kursen i sfi</strong> (svenska för invandrare).",
          "Godkänt betyg i svenska från grundskolan eller gymnasieskolan i <strong>ett annat nordiskt land</strong>.",
          "Godkänt resultat på <strong>Tisus</strong>, testet som prövar den svenska som krävs för högskolestudier.",
          "Resultat från ett annat kunskapsprov i svenska som med hög grad av säkerhet visar funktionell nivå.",
        ],
      },
    },
    {
      alert: {
        title: "Swedex upphör",
        html: "<p>Under en övergångsperiod kan resultat från till exempel <strong>Swedex</strong> godtas. Enligt Migrationsverket går det inte längre att göra ett Swedex-test från och med <strong>31 december 2026</strong>.</p>",
      },
    },
    {
      heading: "Kunskaper om samhället: betyg eller medborgarskapsprov",
      html: `<p>Samhällsdelen visar du med godkänt betyg i samhällskunskap eller grundläggande samhällsorienterande ämnen från årskurs 9, gymnasiet eller Komvux. Har du inte det kan du behöva göra <strong>medborgarskapsprovet om det svenska samhället</strong>. Läs mer i vår guide till <a href="/sv/medborgarskapsprov/">medborgarskapsprovet</a>.</p><p>Det är här Drive Test kan hjälpa till. Appens medborgarskapsmodul har <strong>136 övningsfrågor</strong> över alla 13 kapitel i studieboken <em>Sverige i fokus</em>, med förklaringar och text-till-tal. Appen övar <strong>inte</strong> svenska språket, så för språkkravet behöver du till exempel sfi, Komvux eller Tisus. Se i appen vad som ingår gratis och i betalplanen.</p><p><strong><a href="/sv/exams/citizenship-test/">Öva inför medborgarskapsprovet i samhällskunskap &rsaquo;</a></strong></p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Finns det ett språktest för svenskt medborgarskap?", aHtml: "Inte i dag. Migrationsverket skriver att det kommer att dröja några år innan ett medborgarskapsprov i svenska finns. Kravet på kunskaper i svenska gäller ändå, och du visar dem med betyg eller ett godkänt språktest som Tisus." },
    { q: "Vilken nivå i svenska krävs för medborgarskap?", aHtml: "B1 i läs- och hörförståelse och A2 i muntlig och skriftlig färdighet, enligt den europeiska referensramen GERS." },
    { q: "Räcker sfi för medborgarskap?", aHtml: "Ett godkänt betyg i den högsta kursen i sfi är ett av sätten att visa kunskaper i svenska enligt Migrationsverket." },
    { q: "Vem behöver inte uppfylla språkkravet?", aHtml: "Kravet gäller dig som är 16–66 år. Statslösa födda i Sverige under 21 år och nordiska medborgare är undantagna, och undantag kan ges vid funktionsnedsättning eller andra skäl." },
    { q: "Kan jag använda Swedex?", aHtml: "Under en övergångsperiod kan ett annat språktest som Swedex godtas. Från och med 31 december 2026 går det inte längre att göra Swedex-testet." },
    { q: "Hjälper Drive Test mig med språkkravet?", aHtml: "Nej. Drive Test övar samhällsdelen (medborgarskapsprovet om det svenska samhället), inte svenska språket." },
  ] as ArticleFaqItem[],
  sources: svSources,
  related: ["/sv/medborgarskapsprov/", "/sv/exams/citizenship-test/"],
};

const en: ArticleContent = {
  metaTitle: "Swedish Citizenship Language Test 2026: Requirement and Levels | Drive Test",
  metaDescription:
    "The Swedish citizenship language requirement: B1 reading and listening, A2 speaking and writing. There is no language test yet; here is how to show your Swedish today.",
  eyebrow: "Citizenship · Guide",
  tag: "Citizenship",
  lastUpdated: "2026-11-09",
  lastUpdatedLabel: "Updated 9 November 2026",
  title: "Swedish citizenship language test: is there one, and what is required?",
  lede: "To become a Swedish citizen you must usually know <strong>Swedish</strong> and have knowledge of Swedish society. But there is <strong>no Swedish language citizenship test yet</strong>. Here is the level you need and how you can show your Swedish today, according to the Swedish Migration Agency (Migrationsverket).",
  intro:
    "Everything here comes from Migrationsverket's own pages and was checked in November 2026. The rules are new and may change, especially for the language test. Always check Migrationsverket for your own case. Drive Test is a study app and is not connected to Migrationsverket or UHR.",
  excerpt:
    "The Swedish citizenship language requirement: the levels, which grades and tests are accepted, and why there is no language test yet.",
  cover: "/assets/blog/medborgarskap-stockholm-snow.webp",
  coverAlt: "Snow falling at dusk on a Stockholm square, with a lit old building with spires, traffic lights and people in the distance",
  sections: [
    {
      heading: "Who has to meet the language requirement?",
      html: `<p>The requirement for knowledge of Swedish and Swedish society applies to applicants aged <strong>16 to 66</strong>. Stateless people born in Sweden who are under 21, and Nordic citizens, are exempt. You may also be exempted because of a disability or other reasons.</p>`,
    },
    {
      heading: "What level of Swedish is required?",
      table: {
        headers: ["Skill", "Required level (CEFR)"],
        rows: [
          { cells: ["Reading and listening comprehension", "B1"] },
          { cells: ["Speaking and writing", "A2"] },
        ],
      },
    },
    {
      heading: "Is there a Swedish citizenship language test?",
      html: `<p><strong>Not yet.</strong> Migrationsverket says there is currently no Swedish language citizenship test and that it will take a few years before one is available. On 30 September 2026 it said the test may be postponed: UHR has recommended a delay and the Government will decide when the test can start. <strong>The requirement to know Swedish still applies.</strong> The citizenship test on Swedish society is not affected; the first one was held in August 2026.</p>`,
    },
    {
      heading: "How to show your Swedish today",
      list: {
        ordered: false,
        items: [
          "A pass grade in Swedish or Swedish as a second language from Year 9, upper secondary school or folk high school",
          "A pass grade in Swedish or Swedish as a second language from municipal adult education (Komvux)",
          "A pass grade in the highest SFI course (Swedish for Immigrants)",
          "A pass grade in Swedish from school in another Nordic country",
          "A pass in <strong>Tisus</strong>, the Swedish test for higher education",
          "Another Swedish test that shows functional proficiency with high certainty, such as Swedex during a transitional period. Swedex cannot be taken from 31 December 2026.",
        ],
      },
    },
    {
      heading: "The society part: grades or the citizenship test",
      html: `<p>You show knowledge of Swedish society with a pass grade in social studies, or by taking the citizenship test on Swedish society. The Drive Test citizenship module has <strong>136 practice questions</strong> across all 13 chapters of <em>Sverige i fokus</em>. It does not teach the Swedish language. See <a href="/exams/citizenship-test/">Swedish citizenship test practice</a> and our <a href="/medborgarskapsprov/">citizenship test guide</a>.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Is there a language test for Swedish citizenship?", aHtml: "Not yet. Migrationsverket says it will take a few years. The requirement still applies, and you show your Swedish with grades or an accepted test such as Tisus." },
    { q: "What level of Swedish do I need for citizenship?", aHtml: "B1 in reading and listening, and A2 in speaking and writing (CEFR)." },
    { q: "Is SFI enough for Swedish citizenship?", aHtml: "A pass grade in the highest SFI course is one of the accepted ways to show knowledge of Swedish." },
    { q: "Can I take the citizenship tests in English?", aHtml: "No. The society test is only in Swedish, and the language requirement is about Swedish." },
  ] as ArticleFaqItem[],
  sources: enSources,
  related: ["/medborgarskapsprov/", "/exams/citizenship-test/"],
};

export const sprakkravMedborgarskap = { slug: "sprakkrav-medborgarskap", en, sv };
