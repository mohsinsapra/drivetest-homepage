// AUTO-PORTED from legacy medborgarskapsprov/index.html + medborgarskapsprov/sv/index.html
import type { ArticleFaqItem, ArticleTable } from "./obTaxiSweden";

export interface MSection {
  heading?: string;
  html?: string;
  table?: ArticleTable;
  orderedList?: string[];
  ctaBlock?: { title: string; html: string; storeLabels: [string, string] };
  sourcesList?: { label: string; href: string }[];
}

export const medborgarskapsprov = {
  en: {
    metaTitle: "Swedish Citizenship Test 2026 – Medborgarskapsprovet Guide | Drive Test",
    metaDescription:
      "Sweden's new citizenship rules from June 2026 explained: requirements, residence years, the medborgarskapsprov, fees, processing time and how to prepare.",
    eyebrow: "Sweden · Citizenship",
    lastUpdated: "2026-07-22",
    lastUpdatedLabel: "Updated 22 July 2026",
    title: "Swedish Citizenship & the New Medborgarskapsprov",
    lede:
      "New Swedish citizenship rules came into force on <strong>6 June 2026</strong>, and a brand-new <strong>citizenship test on Swedish society</strong> opens in <strong>August 2026</strong>. Here's exactly what's required to become a Swedish citizen, who has to sit the test, and how to prepare for it.",
    intro:
      "Becoming a Swedish citizen now means meeting six clear requirements — legal status, identity, years of residence, knowledge of Swedish and Swedish society, self-support, and an orderly life — and, for many applicants, passing a new knowledge test. This guide walks through each requirement in plain language, based on Migrationsverket's own published rules, and explains exactly what the new citizenship test covers and how to get ready for it.",
    sections: [
      {
        heading: "What changed on 6 June 2026",
        html:
          "<p>Sweden's reformed Citizenship Act took effect on <strong>6 June 2026</strong>, tightening several requirements — most notably a new formal knowledge requirement and a longer main residence period. A further update from <strong>12 July 2026</strong> added exemptions to the legal-status requirement for people holding certain temporary permits: long-term resident status, refugee or subsidiary protection status, permits granted for exceptionally distressing circumstances, permits granted because of impediments to enforcing a decision, and their family members.</p>",
      },
      {
        heading: "The six requirements for adult applicants",
        html: "<p>To become a Swedish citizen at 18 or older, you generally need to meet all six of these:</p>",
        table: {
          headers: ["Requirement", "What it means"],
          rows: [
            { cells: ["1. Legal status", "A permanent residence permit, residence status, right of residence or residence card, or Nordic citizenship — or, from 12 July 2026, one of the exempted temporary permits above."] },
            { cells: ["2. Identity", "Prove who you are, normally with an original passport or ID document plus an in-person identity check at a Migrationsverket office."] },
            { cells: ["3. Residence period", "A minimum number of years of habitual residence in Sweden — see the table below."] },
            { cells: ["4. Knowledge", "Swedish language and knowledge of Swedish society, for applicants aged 16–66."] },
            { cells: ["5. Self-support", "Support yourself financially and have no long-term dependence on social assistance."] },
            { cells: ["6. Orderly & honourable life", "No serious debts at Kronofogden and no unexpired waiting period after a criminal conviction."] },
          ],
        },
      },
      {
        heading: "How many years you need to have lived in Sweden",
        html:
          "<p>The main rule is <strong>8 years</strong> of continuous, habitual residence — up from the shorter periods that applied before June 2026. Some groups have shorter requirements:</p>",
        table: {
          headers: ["Applicant group", "Years required"],
          rows: [
            { cells: ["Main rule — most adult applicants", "8 years"] },
            { cells: ["Nordic citizens (Denmark, Finland, Iceland, Norway)", "2 years"] },
            { cells: ["Previously a Swedish citizen", "2 years"] },
            { cells: ["Stateless persons", "5 years"] },
            { cells: ["Refugees (with a status declaration)", "7 years"] },
            { cells: ["Spouse/partner of a Swedish citizen (living together the last 5)", "7 years"] },
            { cells: ["Applicants under 21", "7 years"] },
          ],
        },
      },
      {
        html: "<p class=\"muted\">Trips abroad add up: time spent outside Sweden totalling more than 6 weeks in a year is deducted from that year's residence.</p>",
      },
      {
        heading: "Proving your identity in person",
        html:
          "<p>Alongside a valid original passport or ID document, most applicants must attend an <strong>in-person identity check</strong> at one of Migrationsverket's designated offices — currently Malmö, Gothenburg, Norrköping, Sundbyberg, Sundsvall and Boden. You don't book this yourself: Migrationsverket sends an invitation letter once your case reaches that stage, and you wait for it before travelling to an office.</p>",
      },
      {
        heading: "The knowledge requirement: Swedish and Swedish society",
        html:
          "<p>Applicants aged <strong>16–66</strong> must show knowledge of the Swedish language and of Swedish society. For language, the bar is <strong>B1</strong> (reading and listening comprehension) and <strong>A2</strong> (speaking and writing) on the CEFR scale.</p><p>You can meet the requirement in several ways without sitting a test — for example with approved grades from Swedish year 9 or upper-secondary school, the highest level of SFI (Swedish for Immigrants), a Tisus pass, or a pass in a social studies course. If none of those apply to you, Migrationsverket invites you to take the relevant test instead.</p>",
      },
      {
        heading: "The citizenship test — available from August 2026",
        html:
          "<p>The <strong>medborgarskapsprov i samhällskunskap</strong> — the citizenship test on Swedish society — becomes available in <strong>August 2026</strong>. It's aimed at applicants who can't otherwise prove they meet the society-knowledge requirement, and Migrationsverket sends an invitation to sit it once your application needs it.</p><p>The separate <strong>Swedish-language test</strong> is expected no earlier than <strong>autumn 2027</strong>. Until it launches, established language tests such as <strong>Tisus</strong> or <strong>Swedex</strong> can still be used to prove your language knowledge.</p>",
      },
      {
        ctaBlock: {
          title: "Practise for the medborgarskapsprov in the Drive Test app",
          html:
            "The Drive Test app now has a complete <strong>Medborgarskapsprov</strong> preparation module built entirely from UHR's official study book, <em>Sverige i fokus</em>: <strong>136 practice questions</strong> across all 13 chapters, <strong>chapter-by-chapter tests</strong>, full <strong>70-question mock exams</strong>, and the entire study book readable inside the app.",
          storeLabels: ["🍎 Download on the App Store", "▶️ Get it on Google Play"],
        },
      },
      {
        heading: "What to study: \"Sverige i fokus\"",
        html: "<p>The official study material for the society test is UHR's book <strong>Sverige i fokus</strong>, published across 13 chapters:</p>",
        orderedList: [
          "Landet Sverige (The country of Sweden)",
          "Sveriges demokratiska system",
          "Så här styrs Sverige",
          "Politiska val och partier",
          "Lag och rätt",
          "Mediernas roll",
          "Mänskliga rättigheter",
          "Arbetsmarknad och privatekonomi",
          "Välfärdssamhället",
          "Sveriges moderna historia",
          "Sverige och omvärlden",
          "En sekulär stat och ett mångreligiöst land",
          "Traditioner och högtider",
        ],
      },
      {
        heading: "Self-support and an orderly, honourable life",
        html:
          "<p>You also need to show you can <strong>support yourself</strong>: income from work or self-employment of at least <strong>3 income base amounts a year</strong> before tax — <strong>SEK 250,200 for 2026</strong>, roughly <strong>SEK 20,850 a month</strong>. Pensioners and full-time students are exempt from this income test. You also can't have relied on social assistance for more than 6 months in the 3 years before the decision.</p><p>Finally, you need to have lived an <strong>orderly and honourable life</strong>: no serious unpaid debts registered at Kronofogden (the Swedish Enforcement Authority), and no unexpired waiting period following a criminal offence.</p>",
      },
      {
        heading: "Cost and processing time",
        html:
          "<p>The application fee is <strong>SEK 2,900</strong>. Stateless refugees applying with a travel document or a status declaration pay nothing. Processing takes time — Migrationsverket reports that around <strong>75% of recent cases are decided within 55 months</strong>, so it pays to apply as early as you're eligible and make sure your application is complete.</p>",
      },
    ] as MSection[],
    faq: [
      { q: "Who has to take the citizenship test?", aHtml: "Applicants aged 16–66 must meet a knowledge requirement in Swedish and Swedish society. If you can't prove this with approved grades, SFI, Tisus or another accepted route, Migrationsverket invites you to sit the test instead." },
      { q: "When does the citizenship test start?", aHtml: "The society knowledge test becomes available in August 2026. The Swedish-language test is expected no earlier than autumn 2027 — until then, Tisus or Swedex can prove language knowledge." },
      { q: "What does the test cover?", aHtml: "It's based on UHR's official book Sverige i fokus, covering 13 chapters on Sweden's democracy, government, law, media, human rights, the labour market and economy, welfare, history, and traditions." },
      { q: "How much does applying cost?", aHtml: "SEK 2,900 for adults. Stateless refugees applying with a travel document or status declaration don't pay a fee." },
      { q: "How long does processing take?", aHtml: "About 75% of recent citizenship cases are decided within 55 months, per Migrationsverket's statistics — though this varies case by case." },
      { q: "How can I prepare for the medborgarskapsprov?", aHtml: "Study Sverige i fokus chapter by chapter and practise with sample questions and mock exams — the Drive Test app has a full preparation module built from the book." },
    ] as ArticleFaqItem[],
    disclaimer:
      "This page summarises Migrationsverket's published rules as of 22 July 2026 for general information — it is not legal advice, and requirements can change. Migrationsverket is the only authoritative source for your own application; always check the current rules and your individual case with them.",
    sources: [
      { label: "Migrationsverket — Citizenship for adults", href: "https://www.migrationsverket.se/en/you-want-to-apply/swedish-citizenship/citizenship-for-adults/citizenship-for-adults.html" },
      { label: "Migrationsverket — Swedish citizenship", href: "https://www.migrationsverket.se/en/you-want-to-apply/swedish-citizenship.html" },
      { label: "UHR — Sverige i fokus study material", href: "https://www.uhr.se" },
    ],
    finalCta: {
      title: "Start preparing for the medborgarskapsprov",
      body: "136 practice questions, chapter tests, full mock exams and the complete Sverige i fokus book — all in one app.",
      storeLabels: ["🍎 Download on the App Store", "▶️ Get it on Google Play"] as [string, string],
    },
  },
  sv: {
    metaTitle: "Medborgarskapsprovet 2026 – Krav & hur du förbereder dig | Drive Test",
    metaDescription:
      "Nya reglerna för svenskt medborgarskap från juni 2026: krav, bosättningsår, medborgarskapsprovet, avgifter, handläggningstid och hur du förbereder dig.",
    eyebrow: "Sverige · Medborgarskap",
    lastUpdated: "2026-07-22",
    lastUpdatedLabel: "Uppdaterad 22 juli 2026",
    title: "Svenskt medborgarskap & det nya medborgarskapsprovet",
    lede:
      "Nya regler för svenskt medborgarskap började gälla <strong>6 juni 2026</strong>, och ett helt nytt <strong>medborgarskapsprov i samhällskunskap</strong> öppnar i <strong>augusti 2026</strong>. Här går vi igenom exakt vad som krävs för att bli svensk medborgare, vem som måste göra provet, och hur du förbereder dig.",
    intro:
      "Att bli svensk medborgare innebär numera sex tydliga krav — rätt uppehållsstatus, styrkt identitet, ett visst antal års bosättning, kunskaper i svenska och om det svenska samhället, egen försörjning och ett skötsamt liv — och för många sökande dessutom ett godkänt kunskapsprov. Den här guiden går igenom varje krav på ett enkelt sätt, baserat på Migrationsverkets egna regler, och förklarar exakt vad det nya medborgarskapsprovet innehåller och hur du bäst förbereder dig.",
    sections: [
      {
        heading: "Vad ändrades den 6 juni 2026",
        html:
          "<p>Den reformerade medborgarskapslagen började gälla <strong>6 juni 2026</strong> och skärpte flera krav — framför allt ett nytt formellt kunskapskrav och en längre huvudregel för bosättningstid. En kompletterande ändring från <strong>12 juli 2026</strong> gav undantag från kravet på uppehållsstatus för vissa som har tidsbegränsade tillstånd: status som varaktigt bosatt, flykting- eller alternativ skyddsstatus, tillstånd på grund av synnerligen ömmande omständigheter, tillstånd på grund av verkställighetshinder, samt deras familjemedlemmar.</p>",
      },
      {
        heading: "De sex kraven för vuxna sökande",
        html: "<p>För att bli svensk medborgare från 18 år behöver du i regel uppfylla alla sex:</p>",
        table: {
          headers: ["Krav", "Vad det innebär"],
          rows: [
            { cells: ["1. Uppehållsstatus", "Permanent uppehållstillstånd, uppehållsstatus, uppehållsrätt eller uppehållskort, eller nordiskt medborgarskap — eller, från 12 juli 2026, ett av undantagen ovan."] },
            { cells: ["2. Identitet", "Styrk vem du är, normalt med ett giltigt originalpass eller id-handling samt en identitetskontroll på plats hos Migrationsverket."] },
            { cells: ["3. Bosättningstid", "Ett visst antal års sammanhängande hemvist i Sverige — se tabellen nedan."] },
            { cells: ["4. Kunskaper", "Svenska språket och kunskaper om det svenska samhället, för sökande 16–66 år."] },
            { cells: ["5. Egen försörjning", "Klara din egen försörjning och inte vara långvarigt beroende av försörjningsstöd."] },
            { cells: ["6. Skötsamt liv", "Inga allvarliga skulder hos Kronofogden och ingen pågående karenstid efter en brottmålsdom."] },
          ],
        },
      },
      {
        heading: "Hur många år du behöver ha bott i Sverige",
        html:
          "<p>Huvudregeln är <strong>8 år</strong> av sammanhängande hemvist — längre än den period som gällde före juni 2026. Vissa grupper har kortare krav:</p>",
        table: {
          headers: ["Sökandegrupp", "Antal år"],
          rows: [
            { cells: ["Huvudregeln — de flesta vuxna sökande", "8 år"] },
            { cells: ["Nordiska medborgare (Danmark, Finland, Island, Norge)", "2 år"] },
            { cells: ["Tidigare svensk medborgare", "2 år"] },
            { cells: ["Statslösa", "5 år"] },
            { cells: ["Flyktingar (med statusförklaring)", "7 år"] },
            { cells: ["Gift/sambo med svensk medborgare (sammanboende senaste 5)", "7 år"] },
            { cells: ["Sökande under 21 år", "7 år"] },
          ],
        },
      },
      {
        html: "<p class=\"muted\">Utlandsresor räknas: tid utomlands som sammanlagt överstiger 6 veckor under ett år dras av från det årets bosättningstid.</p>",
      },
      {
        heading: "Att styrka din identitet på plats",
        html:
          "<p>Utöver ett giltigt originalpass eller id-handling måste de flesta sökande genomgå en <strong>identitetskontroll på plats</strong> hos något av Migrationsverkets utvalda kontor — för närvarande Malmö, Göteborg, Norrköping, Sundbyberg, Sundsvall och Boden. Du bokar inte själv: Migrationsverket skickar en kallelse när ditt ärende når den punkten, och du väntar in den innan du reser till kontoret.</p>",
      },
      {
        heading: "Kunskapskravet: svenska och samhällskunskap",
        html:
          "<p>Sökande i åldern <strong>16–66 år</strong> ska visa kunskaper i svenska språket och om det svenska samhället. För språket gäller nivå <strong>B1</strong> (läs- och hörförståelse) och <strong>A2</strong> (tal och skrift) enligt den europeiska skalan CEFR.</p><p>Du kan uppfylla kravet på flera sätt utan att göra ett prov — till exempel med godkända betyg från grundskolans årskurs 9 eller gymnasiet, högsta nivån inom SFI, godkänt Tisus-prov eller godkänd samhällskunskap. Uppfyller inget av detta din situation kallar Migrationsverket dig i stället till respektive prov.</p>",
      },
      {
        heading: "Medborgarskapsprovet — tillgängligt från augusti 2026",
        html:
          "<p><strong>Medborgarskapsprovet i samhällskunskap</strong> blir tillgängligt i <strong>augusti 2026</strong>. Det riktar sig till sökande som inte kan styrka samhällskunskapen på annat sätt, och Migrationsverket skickar en kallelse när din ansökan kräver det.</p><p>Det separata <strong>provet i svenska språket</strong> väntas tidigast <strong>hösten 2027</strong>. Fram till dess kan etablerade språktest som <strong>Tisus</strong> eller <strong>Swedex</strong> fortfarande användas för att styrka dina språkkunskaper.</p>",
      },
      {
        ctaBlock: {
          title: "Öva inför medborgarskapsprovet i Drive Test-appen",
          html:
            "Drive Test-appen har nu en komplett förberedelsemodul för <strong>medborgarskapsprovet</strong>, byggd helt utifrån UHR:s officiella studiebok <em>Sverige i fokus</em>: <strong>136 övningsfrågor</strong> fördelade på alla 13 kapitel, <strong>kapitelvisa test</strong>, hela <strong>70-frågors provtentor</strong>, och hela studieboken läsbar direkt i appen.",
          storeLabels: ["🍎 Ladda ner i App Store", "▶️ Hämta på Google Play"],
        },
      },
      {
        heading: "Vad du ska plugga: \"Sverige i fokus\"",
        html: "<p>Det officiella studiematerialet för samhällskunskapsprovet är UHR:s bok <strong>Sverige i fokus</strong>, uppdelad i 13 kapitel:</p>",
        orderedList: [
          "Landet Sverige",
          "Sveriges demokratiska system",
          "Så här styrs Sverige",
          "Politiska val och partier",
          "Lag och rätt",
          "Mediernas roll",
          "Mänskliga rättigheter",
          "Arbetsmarknad och privatekonomi",
          "Välfärdssamhället",
          "Sveriges moderna historia",
          "Sverige och omvärlden",
          "En sekulär stat och ett mångreligiöst land",
          "Traditioner och högtider",
        ],
      },
      {
        heading: "Egen försörjning och ett skötsamt liv",
        html:
          "<p>Du behöver också visa att du klarar din <strong>egen försörjning</strong>: inkomst från arbete eller egen näringsverksamhet på minst <strong>3 inkomstbasbelopp per år</strong> före skatt — <strong>250 200 kronor för 2026</strong>, ungefär <strong>20 850 kronor i månaden</strong>. Pensionärer och heltidsstuderande är undantagna från inkomstkravet. Du får inte heller ha haft försörjningsstöd i mer än 6 månader under de senaste 3 åren före beslutet.</p><p>Slutligen ska du ha levt ett <strong>skötsamt och hederligt liv</strong>: inga allvarliga obetalda skulder registrerade hos Kronofogden, och ingen pågående karenstid efter en brottmålsdom.</p>",
      },
      {
        heading: "Avgift och handläggningstid",
        html:
          "<p>Ansökningsavgiften är <strong>2 900 kronor</strong>. Statslösa flyktingar som ansöker med resedokument eller statusförklaring betalar ingen avgift. Handläggningen tar tid — Migrationsverket uppger att ungefär <strong>75 procent av de senaste ärendena avgörs inom 55 månader</strong>, så det lönar sig att ansöka så snart du uppfyller kraven och se till att ansökan är komplett.</p>",
      },
    ] as MSection[],
    faq: [
      { q: "Vem måste göra medborgarskapsprovet?", aHtml: "Sökande i åldern 16–66 år ska visa kunskaper i svenska och om det svenska samhället. Går det inte att styrka med godkända betyg, SFI, Tisus eller annat godkänt sätt kallar Migrationsverket dig till provet." },
      { q: "När börjar provet gälla?", aHtml: "Samhällskunskapsprovet blir tillgängligt i augusti 2026. Provet i svenska väntas tidigast hösten 2027 — fram tills dess kan Tisus eller Swedex styrka språkkunskaper." },
      { q: "Vad innehåller provet?", aHtml: "Det bygger på UHR:s officiella bok Sverige i fokus, med 13 kapitel om Sveriges demokrati, styrelseskick, lag och rätt, medier, mänskliga rättigheter, arbetsmarknad och ekonomi, välfärd, historia och traditioner." },
      { q: "Vad kostar en ansökan?", aHtml: "2 900 kronor för vuxna. Statslösa flyktingar som ansöker med resedokument eller statusförklaring betalar ingen avgift." },
      { q: "Hur lång är handläggningstiden?", aHtml: "Cirka 75 procent av de senaste ärendena avgörs inom 55 månader enligt Migrationsverkets statistik — men det varierar från fall till fall." },
      { q: "Hur förbereder jag mig för medborgarskapsprovet?", aHtml: "Plugga Sverige i fokus kapitel för kapitel och öva med exempelfrågor och provtentor — Drive Test-appen har en komplett förberedelsemodul byggd på boken." },
    ] as ArticleFaqItem[],
    disclaimer:
      "Den här sidan sammanfattar Migrationsverkets publicerade regler per den 22 juli 2026 i informationssyfte — det är inte juridisk rådgivning, och kraven kan ändras. Migrationsverket är den enda auktoritativa källan för din egen ansökan; kontrollera alltid gällande regler och ditt eget ärende med dem.",
    sources: [
      { label: "Migrationsverket — Citizenship for adults", href: "https://www.migrationsverket.se/en/you-want-to-apply/swedish-citizenship/citizenship-for-adults/citizenship-for-adults.html" },
      { label: "Migrationsverket — Swedish citizenship", href: "https://www.migrationsverket.se/en/you-want-to-apply/swedish-citizenship.html" },
      { label: "UHR — studiematerialet Sverige i fokus", href: "https://www.uhr.se" },
    ],
    finalCta: {
      title: "Börja plugga inför medborgarskapsprovet",
      body: "136 övningsfrågor, kapitelvisa test, fullständiga provtentor och hela boken Sverige i fokus — allt i en app.",
      storeLabels: ["🍎 Ladda ner i App Store", "▶️ Hämta på Google Play"] as [string, string],
    },
  },
};

export const medborgarskapsprovJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Swedish Citizenship Test 2026 – Medborgarskapsprovet Guide",
      inLanguage: "en",
      about: "Swedish citizenship requirements and the medborgarskapsprov citizenship test",
      author: { "@type": "Organization", name: "Drive Test" },
      publisher: {
        "@type": "Organization",
        name: "Drive Test",
        logo: { "@type": "ImageObject", url: "https://drivetest.se/assets/icon.png" },
      },
      mainEntityOfPage: "https://drivetest.se/medborgarskapsprov/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Who has to take the Swedish citizenship test?", acceptedAnswer: { "@type": "Answer", text: "Anyone aged 16–66 applying for Swedish citizenship must meet a knowledge requirement in Swedish and Swedish society. If you can't prove this another way — for example with approved school grades, SFI, Tisus or a pass in social studies — Migrationsverket invites you to sit the test." } },
        { "@type": "Question", name: "When does the citizenship test start?", acceptedAnswer: { "@type": "Answer", text: "The society knowledge test (medborgarskapsprov i samhällskunskap) becomes available in August 2026. A separate Swedish-language test is expected autumn 2027 at the earliest; until then, tests such as Tisus or Swedex can be used to prove language knowledge." } },
        { "@type": "Question", name: "What does the citizenship test cover?", acceptedAnswer: { "@type": "Answer", text: "The society test is based on UHR's official study book Sverige i fokus, which covers 13 chapters including Sweden's democratic system, government, elections and parties, law and rights, the labour market and personal finance, the welfare state, modern history, and traditions and holidays." } },
        { "@type": "Question", name: "How much does it cost to apply for Swedish citizenship?", acceptedAnswer: { "@type": "Answer", text: "The application fee is SEK 2,900 for adults. Stateless refugees who apply with a travel document or status declaration do not pay a fee." } },
        { "@type": "Question", name: "How long does Migrationsverket take to process a citizenship application?", acceptedAnswer: { "@type": "Answer", text: "Around 75% of recent citizenship cases are decided within 55 months, according to Migrationsverket's own statistics, though individual cases vary." } },
        { "@type": "Question", name: "How can I prepare for the medborgarskapsprov?", acceptedAnswer: { "@type": "Answer", text: "Study UHR's official book Sverige i fokus chapter by chapter and practise with sample questions. The Drive Test app includes a full preparation module built from the book, with 136 practice questions, chapter tests and full mock exams." } },
      ],
    },
  ],
};
