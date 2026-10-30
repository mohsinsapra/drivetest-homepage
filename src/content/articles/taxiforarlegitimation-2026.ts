import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent, ArticleSource } from "./types";

const sources: ArticleSource[] = [
  { label: "Trafikverket – Priser för prov (uppdaterad 7 januari 2026)", url: "https://www.trafikverket.se/korkort/priser/" },
  { label: "Trafikverket – Taxiförarlegitimation", url: "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/" },
  { label: "Transportstyrelsen – Avgifter för yrkestrafik (taxi)", url: "https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/" },
  { label: "Transportstyrelsen – Ansökan om taxiförarlegitimation", url: "https://www.transportstyrelsen.se/ansokan-om-taxiforarlegitimation" },
];

const sv: ArticleContent = {
  metaTitle: "Taxiförarlegitimation 2026: kostnad, prov, steg | Drive Test",
  metaDescription:
    "Taxiförarlegitimation 2026: vad den kostar, krav, läkarintyg, kunskapsprov och körprov steg för steg, plus hur du övar online och blir taxiförare i Stockholm.",
  eyebrow: "Sverige · Guide",
  tag: "Guide",
  lastUpdated: "2026-10-30",
  lastUpdatedLabel: "Uppdaterad 30 oktober 2026",
  title: "Taxiförarlegitimation 2026: kostnad, prov och steg för steg",
  lede: "En <strong>taxiförarlegitimation</strong> är beviset på att du får köra taxi i Sverige. Här får du hela vägen på ett ställe: krav, steg, vad det kostar 2026, hur kunskapsprovet ser ut och hur du övar online.",
  intro:
    "Vill du bli taxiförare börjar det med en taxiförarlegitimation. Det är inget svårt system, men det är flera steg hos två olika myndigheter, och det är lätt att tappa bort sig. Den här guiden är skriven med enkla ord och bygger på uppgifter från <strong>Transportstyrelsen</strong> och <strong>Trafikverket</strong>. Regler och avgifter kan ändras, så kontrollera alltid aktuella avgifter hos Transportstyrelsen och Trafikverket innan du betalar.",
  excerpt:
    "Allt om taxiförarlegitimation 2026: krav, steg för steg, kostnad, kunskapsprovet, taxitrafiktillstånd och hur du blir taxiförare.",
  cover: "/assets/blog/ob-taxi-driving.jpg",
  sections: [
    {
      heading: "Vad är en taxiförarlegitimation?",
      html: `<p>Taxiförarlegitimationen är ett personligt kort som visar att du har rätt att arbeta som taxiförare. Den utfärdas av <strong>Transportstyrelsen</strong> (källa: <a href="https://www.transportstyrelsen.se/ansokan-om-taxiforarlegitimation" target="_blank" rel="noopener noreferrer">Transportstyrelsen</a>). Du får inte köra taxi förrän du har fått kortet. Det gäller även om du redan har ett vanligt körkort.</p><p>Legitimationen är inte samma sak som ett taxitrafiktillstånd. Legitimationen är din som förare. Tillståndet är till för ett <em>företag</em> som driver taxiverksamhet, och det kommer vi till längre ner.</p>`,
    },
    {
      heading: "Krav för att få taxiförarlegitimation",
      html: `<p>Enligt Transportstyrelsen ska du vid ansökan uppfylla följande:</p>`,
      list: {
        ordered: false,
        items: [
          "Du är minst <strong>20 år</strong>.",
          "Du har haft <strong>körkort för behörighet B i minst två år</strong>, eller har körkort för behörighet D.",
          "Du uppfyller de <strong>medicinska kraven</strong> som behövs för passagerarnas och andra trafikanters säkerhet.",
          "Du bedöms vara <strong>lämplig</strong> som taxiförare, bland annat när det gäller yrkeskompetens och att du följer lagar och regler.",
          "Du har klarat <strong>teoriprovet</strong> (två delprov) och <strong>körprovet</strong> för taxiförarlegitimation.",
        ],
      },
    },
    {
      html: `<p>Har du bott utomlands eller har ett utländskt körkort kan Transportstyrelsen be om extra handlingar, till exempel utdrag ur polisregister eller intyg om att körkortet är giltigt. Läs mer i vår artikel om <a href="/sv/blog/taxi-licence-medical-requirements/">läkarintyg och lämplighet</a>.</p>`,
    },
    {
      heading: "Taxiförarlegitimation steg för steg",
      html: `<p>Det vanliga är att hela processen tar ungefär <strong>två månader</strong>, men väntetiden för körprov varierar och är ofta det som drar ut på tiden. Så här går det till:</p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Kolla att du uppfyller kraven.</strong> Ålder, körkort och att du kan styrka din identitet. Har du BankID blir ansökan enklare.",
          "<strong>Öva inför kunskapsprovet.</strong> Det är på svenska, så ge dig tid att lära dig både reglerna och orden.",
          "<strong>Boka och klara teoriproven hos Trafikverket.</strong> Två delprov, i valfri ordning.",
          "<strong>Boka och klara körprovet hos Trafikverket.</strong> Boka tidigt, eftersom antalet tider är begränsat.",
          "<strong>Skaffa läkarintyg.</strong> Det ska vara utfärdat inom två månader före ansökan, så vänta med det till lagom tid.",
          "<strong>Ansök hos Transportstyrelsen</strong> och betala avgifterna. Kortet tillverkas efter beslutet.",
        ],
      },
    },
    {
      card: {
        title: "Tänk på tiderna",
        html: `<p>Teoriproven får inte vara äldre än <strong>tre år</strong> och körprovet inte äldre än <strong>ett år</strong> när du ansöker. Båda teoridelproven ska vara godkända inom <strong>sex månader</strong> från det första du klarar. Läkarintyget får vara högst <strong>två månader</strong> gammalt. Planera ordningen så att inget hinner gå ut.</p>`,
      },
    },
    {
      heading: "Läkarintyg och hälsokrav",
      html: `<p>Du skickar in ett läkarintyg tillsammans med ansökan. Synen ingår, och en optiker får intyga synen om läkaren har angett det på blanketten. Du måste legitimera dig vid besöket. Priset sätter vårdgivaren själv, så fråga innan du bokar. Är du osäker på om en sjukdom hindrar dig kan du ansöka om ett förhandsbesked hos Transportstyrelsen innan du betalar för proven. Detaljerna står i <a href="/sv/blog/taxi-licence-medical-requirements/">läkarintyg för taxi</a>. Vi ger inga medicinska råd, prata med din läkare om du har en hälsofråga.</p>`,
    },
    {
      heading: "Taxiförarlegitimation kostnad 2026",
      html: `<p>Två myndigheter tar betalt: Trafikverket för proven och Transportstyrelsen för ansökan och kortet. Beloppen nedan gäller 2026 och är hämtade från myndigheternas egna sidor (källa: <a href="https://www.trafikverket.se/korkort/priser/" target="_blank" rel="noopener noreferrer">Trafikverket</a> och <a href="https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/" target="_blank" rel="noopener noreferrer">Transportstyrelsen</a>).</p>`,
      table: {
        headers: ["Post", "Vem", "Avgift 2026"],
        rows: [
          { cells: ["Teoriprov, per delprov (2 st), dagtid", "Trafikverket", "420 kr"] },
          { cells: ["Teoriprov, per delprov, efter kl. 18 och helg", "Trafikverket", "520 kr"] },
          { cells: ["Körprov, dagtid", "Trafikverket", "1 000 kr"] },
          { cells: ["Körprov, efter kl. 18 och helg", "Trafikverket", "1 400 kr"] },
          { cells: ["Ansökan om taxiförarlegitimation", "Transportstyrelsen", "2 700 kr"] },
          { cells: ["Utfärdande av legitimationen", "Transportstyrelsen", "430 kr"] },
          { cells: ["Läkarintyg", "Läkare / vårdgivare", "Ingen fast avgift, varierar"] },
        ],
      },
    },
    {
      html: `<p>Räknar du ihop två teoridelprov och körprov på dagtid, plus ansökan och utfärdande, blir det <strong>4 970 kr</strong>, utan läkarintyg. Med prov efter kl. 18 eller på helger blir det 5 570 kr. Ett omprov betalas separat. <strong>Kontrollera aktuella avgifter hos Transportstyrelsen och Trafikverket</strong> innan du betalar, eftersom de kan ändras. Mer om kostnaderna finns i <a href="/sv/blog/taxi-licence-cost-sweden/">vad kostar taxilegitimation</a>.</p>`,
    },
    {
      heading: "Kunskapsprovet för taxi: upplägg och ämnen",
      html: `<p>Kunskapsprovet hålls av Trafikverket och består av två delprov. Du väljer själv ordning (källa: <a href="https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/" target="_blank" rel="noopener noreferrer">Trafikverket</a>).</p>`,
      table: {
        headers: ["Delprov", "Frågor", "Godkänt", "Tid"],
        rows: [
          { cells: ["1. Säkerhet och beteende", "70 (5 är testfrågor)", "Minst 48 rätt", "50 minuter"] },
          { cells: ["2. Lagstiftning", "50 (4 är testfrågor)", "Minst 34 rätt", "50 minuter"] },
        ],
      },
    },
    {
      html: `<p>Delprov 1 handlar om vardagen som förare: ruttplanering med karta och GPS, bränslesnål körning, kundservice, passagerares olika behov, sjukdomar och funktionsnedsättningar, yrkesrisker och fordonskunskap. Delprov 2 handlar om reglerna för taxitrafik, vad som händer om man bryter mot dem samt trafikregler och vägmärken. Proven är på svenska. Efter det kommer körprovet, där du kör minst 35 minuter.</p>`,
    },
    {
      heading: "Så övar du online inför kunskapsprovet",
      html: `<p>Att läsa regler räcker sällan. Du behöver träna på själva frågorna och förstå varför ett svar är rätt. Det gör du bäst genom att öva lite varje dag, i stället för allt på en gång.</p><ul><li>Gör <strong>övningsprov i provets format</strong>, med tidsgräns, så att du vänjer dig vid tempot.</li><li>Läs <strong>förklaringen</strong> till varje svar, även när du svarat rätt.</li><li>Markera frågor du missar och gå tillbaka till dem några dagar senare.</li><li>Följ dina resultat per område, så ser du vad du ska lägga tid på.</li></ul><p><strong>Drive Test</strong> har övningsprov för taxiförarlegitimationen med förklaringar, AI-handledare, text-till-tal på flera språk och uppföljning av dina framsteg. Se <a href="/sv/exams/taxi-licence/">övningsprov för taxiförarlegitimation</a>, eller läs <a href="/sv/blog/how-to-pass-taxi-licence-test/">så klarar du taxiprovet</a> för en studieplan. Är svenska inte ditt första språk finns tips i <a href="/sv/blog/taxi-exam-for-non-native-speakers/">taxiprovet för dig som inte har svenska som modersmål</a>.</p><p><strong><a href="/sv/exams/taxi-licence/">Börja öva på taxiprovet &rsaquo;</a></strong></p>`,
    },
    {
      heading: "Taxitrafiktillstånd prov: yrkeskunnande för företag",
      html: `<p>Vill du driva eget taxiföretag räcker inte en förarlegitimation. Företaget behöver ett <strong>taxitrafiktillstånd</strong> från Transportstyrelsen (12 500 kr enligt deras avgiftssida 2026), och den trafikansvariga personen ska visa <strong>yrkeskunnande</strong> genom ett skriftligt prov hos Trafikverket. Det kostar 420 kr dagtid och 520 kr efter kl. 18 och på helger. Provet har fyra delprov om rättsregler, företagsledning, tekniska normer och fallstudier. Kontrollera aktuella avgifter hos Transportstyrelsen och Trafikverket.</p><p>Öva på <a href="/sv/exams/taxi-company/">taxitrafiktillstånd prov och yrkeskunnande taxi</a>, eller läs <a href="/sv/blog/yrkeskunnande-taxi-exam/">yrkeskunnande taxi förklarat</a>.</p>`,
    },
    {
      heading: "Bli taxiförare: så kommer du igång i Stockholm och andra städer",
      html: `<p>Taxiförarlegitimationen gäller i hela Sverige. Det betyder att du tar samma prov och samma legitimation oavsett om du ska köra i Stockholm, Göteborg, Malmö eller en mindre stad. Du bokar proven hos Trafikverket, och körprovet görs på ett förarprovskontor. Är du i Stockholm kan det vara många som vill ha tid, så boka körprovet tidigt.</p><p>Så här kommer du igång:</p><ul><li>Ta legitimationen enligt stegen ovan.</li><li>Sök jobb hos ett taxibolag eller en åkare i din stad. Många anställer förare som har legitimation.</li><li>Fråga om anställningsvillkor och kollektivavtal, och räkna på din lön med vår <a href="/sv/ob-taxi-sweden/">OB-kalkylator</a>.</li><li>Fråga arbetsgivaren om den betalar legitimationen eller delar av kostnaden.</li></ul><p>Hela processen finns också samlad i vår <a href="/sv/taxi-licence-guide/">guide till taxiförarlegitimation</a>. I Stockholm kan du boka läkarintyg via Medicinska Intyg, som vi samarbetar med.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Vad är en taxiförarlegitimation?", aHtml: "Ett personligt kort från Transportstyrelsen som visar att du får arbeta som taxiförare. Du får inte köra taxi förrän du har fått det." },
    { q: "Vad kostar taxiförarlegitimation 2026?", aHtml: "Med två teoriprov och körprov på dagtid, ansökan och utfärdande blir det 4 970 kr, utan läkarintyg. Kontrollera aktuella avgifter hos Transportstyrelsen och Trafikverket." },
    { q: "Hur lång tid tar det att få taxiförarlegitimation?", aHtml: "Vanligtvis ungefär två månader, men väntetiden för körprov varierar. Boka körprovet tidigt." },
    { q: "Vilka krav finns?", aHtml: "Minst 20 år, körkort B i minst två år (eller D), medicinsk lämplighet, godkända teoriprov och körprov samt att du bedöms lämplig som taxiförare." },
    { q: "Hur många frågor är kunskapsprovet för taxi?", aHtml: "Delprov 1 har 70 frågor (minst 48 rätt) och delprov 2 har 50 frågor (minst 34 rätt). Varje delprov är 50 minuter. Antalen kan ändras, se Trafikverket." },
    { q: "Kan jag göra provet på ett annat språk än svenska?", aHtml: "Proven hålls på svenska. Du kan däremot öva och förstå begreppen på flera språk i förväg, se <a href=\"/sv/blog/taxi-exam-for-non-native-speakers/\">taxiprovet för dig som inte har svenska som modersmål</a>." },
    { q: "Vad är skillnaden mellan taxiförarlegitimation och taxitrafiktillstånd?", aHtml: "Legitimationen är förarens. Taxitrafiktillståndet är företagets och kräver en trafikansvarig som klarat provet i yrkeskunnande. Se <a href=\"/sv/exams/taxi-company/\">övning för taxitrafiktillstånd</a>." },
    { q: "Hur övar jag online inför kunskapsprovet?", aHtml: "Gör övningsprov i provets format, läs förklaringarna och följ dina resultat per område. Du kan börja på <a href=\"/sv/exams/taxi-licence/\">Drive Tests övningsprov för taxi</a>." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/taxi-licence-guide/", "/sv/exams/taxi-licence/", "/sv/exams/taxi-company/", "/sv/blog/taxi-licence-cost-sweden/", "/sv/blog/how-to-pass-taxi-licence-test/"],
};

const en: ArticleContent = {
  metaTitle: "Taxi Driver Licence Sweden 2026: Cost, Tests, Steps | Drive Test",
  metaDescription:
    "Taxiförarlegitimation 2026 in English: requirements, steps, the theory and driving tests, verified fees and how to practise online for the taxi exam.",
  eyebrow: "Sweden · Guide",
  tag: "Guide",
  lastUpdated: "2026-10-30",
  lastUpdatedLabel: "Updated 30 October 2026",
  title: "Taxiförarlegitimation 2026: cost, tests and steps",
  lede: "A <strong>taxiförarlegitimation</strong> is the taxi driver licence you need to drive a taxi in Sweden. This guide covers requirements, steps, the 2026 cost and the tests.",
  intro:
    "The process involves two authorities, Transportstyrelsen and Trafikverket. Fees and rules change, so check current fees with Transportstyrelsen and Trafikverket before you pay.",
  excerpt: "Requirements, steps, 2026 cost and tests for the Swedish taxi driver licence.",
  cover: "/assets/blog/ob-taxi-driving.jpg",
  sections: [
    {
      heading: "Requirements and steps",
      html: `<p>You must be at least 20, have held a category B licence for two years (or hold D), meet the medical requirements, be suitable as a taxi driver, and pass two theory tests and a driving test. Typical total time is about two months. Full details are in our <a href="/taxi-licence-guide/">taxi licence guide</a>.</p>`,
    },
    {
      heading: "Cost in 2026",
      html: `<p>Trafikverket: theory 420 kr per part (2 parts) and driving test 1 000 kr in daytime. Transportstyrelsen: application 2 700 kr and issuing 430 kr. Total 4 970 kr excluding the medical certificate. Check current fees with the authorities. See <a href="/blog/taxi-licence-cost-sweden/">taxi licence cost</a>.</p>`,
    },
    {
      heading: "The theory test and how to practise",
      html: `<p>Part 1, safety and behaviour: 70 questions, 48 correct needed, 50 minutes. Part 2, legislation: 50 questions, 34 correct needed, 50 minutes. Practise in exam format with <a href="/exams/taxi-licence/">Drive Test</a>. For the company exam, see <a href="/exams/taxi-company/">taxi company exam practice</a>.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "How much does a taxi licence cost in Sweden?", aHtml: "4 970 kr in 2026 for the daytime route, excluding the medical certificate. Check current fees with the authorities." },
    { q: "How long does it take?", aHtml: "Usually about two months." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/taxi-licence-guide/", "/exams/taxi-licence/", "/exams/taxi-company/", "/blog/taxi-licence-cost-sweden/"],
};

export const taxiforarlegitimation2026 = { slug: "taxiforarlegitimation-2026", en, sv };
