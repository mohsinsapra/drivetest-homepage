import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent } from "./types";

const sourcesEn = [
  { label: "Trafikverket – Taxiförarlegitimation (tests, topics, pass marks)", url: "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/" },
  { label: "Trafikverket – Prices for tests (updated 7 January 2026)", url: "https://www.trafikverket.se/korkort/priser/" },
  { label: "Transportstyrelsen – Application for taxi driver licence", url: "https://www.transportstyrelsen.se/ansokan-om-taxiforarlegitimation" },
  { label: "Transportstyrelsen – TSFS 2021:119 (consolidated regulation)", url: "https://www.transportstyrelsen.se/TSFS/TSFS%202021_119k.pdf" },
];

const en: ArticleContent = {
  metaTitle: "Taxi Licence Exam Questions Sweden Explained | Drive Test",
  metaDescription:
    "What the taxi licence exam questions in Sweden cover: the two theory parts, topics, pass marks and original example questions to practise with before the test.",
  eyebrow: "Sweden · Taxi exam",
  tag: "Taxi exam",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Updated 13 October 2026",
  title: "Taxi Licence Exam Questions in Sweden: What to Expect",
  lede: "The <strong>taxi licence exam questions</strong> in Sweden are split across two theory tests, safety and behaviour, and legislation, plus a practical driving test. Below you can read what each part covers, how it is scored, and a set of original example questions that show the question style.",
  intro:
    "If you are planning to get your <strong>taxiförarlegitimation</strong>, the first thing you probably want to know is what the exam actually asks. Trafikverket publishes the structure, the topics and the pass marks, but not the questions themselves. This guide walks through what is public, explains how to think about each topic area, and gives you clearly labelled <em>example-style</em> questions that we wrote ourselves. They are not real exam questions, they are practice material.",
  excerpt:
    "The structure, topics and pass marks of the Swedish taxi licence theory tests, with original example questions to practise.",
  cover: "/assets/blog/ob-taxi-driving.jpg",
  sections: [
    {
      heading: "How the taxi licence exam questions are organised",
      html: `<p>The taxi licence exam consists of <strong>two theory tests (delprov) and one driving test (körprov)</strong>, all taken at Trafikverket. You can take the two theory tests in any order, but you must pass both within <strong>six months</strong> of passing the first one.</p><p>All taxi licence exam questions are multiple choice and are taken on a computer. The structure below comes from Trafikverket's page for the taxi driver licence.</p>`,
      table: {
        headers: ["Part", "Questions", "Pass mark", "Time"],
        rows: [
          { cells: ["Delprov 1: Säkerhet och beteende (safety and behaviour)", "70 (5 are unscored test questions, max 65 points)", "48 correct answers", "50 minutes"] },
          { cells: ["Delprov 2: Lagstiftning (legislation)", "50 (4 are unscored test questions, max 46 points)", "34 correct answers", "50 minutes"] },
          { cells: ["Körprov (driving test)", "Practical test, at least 35 minutes on the road", "Pass / fail by the examiner", "See Trafikverket"] },
        ],
      },
    },
    {
      html: `<p class="muted">The unscored questions are used by Trafikverket to test new questions. You will not know which ones they are, so treat every question as if it counts.</p>`,
    },
    {
      heading: "Delprov 1: safety and behaviour questions",
      html: `<p>The first theory test is the broader one. According to Trafikverket it covers the following areas, and questions are written around everyday situations a taxi driver meets, not around memorising numbers.</p>`,
      list: {
        ordered: false,
        items: [
          "<strong>Route planning</strong> with maps and GPS.",
          "<strong>Fuel-efficient driving</strong>, driving style and preventive maintenance.",
          "<strong>Environmental impact</strong> of different vehicles.",
          "<strong>Safety and responsibility</strong> for a safe and comfortable trip.",
          "<strong>Customer service</strong> and respect for different passenger needs.",
          "<strong>Illnesses and disabilities</strong>, and how they affect passengers and drivers.",
          "<strong>Occupational risks</strong> for taxi drivers.",
          "<strong>Vehicle knowledge</strong>, including maintenance, fault-finding and lighting requirements.",
        ],
      },
    },
    {
      heading: "Delprov 2: legislation questions",
      html: `<p>The second theory test is about rules. Trafikverket describes it as covering <strong>the rules for taxi traffic and the consequences of breaking them</strong>, together with very good knowledge of <strong>traffic rules and road signs</strong>. Expect questions that describe a situation and ask which rule applies, or what the consequence would be for you as the driver.</p><p>This is the part where wording matters most. A single word such as <em>must</em> versus <em>may</em> can change the correct answer, so read each option fully before choosing.</p>`,
    },
    {
      heading: "Example-style taxi licence exam questions",
      html: `<p>The questions below are <strong>original examples written for practice</strong>. They imitate the style of the topic areas but are not real exam questions, and the answers are general guidance, so always check the current rules at Trafikverket and Transportstyrelsen.</p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Customer service.</strong> A passenger who uses a wheelchair asks you to drive them. What is the most important thing to do first? <em>Answer: confirm that you can transport them safely, and secure the wheelchair and passenger properly before you drive.</em>",
          "<strong>Safety.</strong> A child is travelling in the back seat. Who is responsible for making sure the child is correctly restrained? <em>Answer: as the driver you carry responsibility for the safety of the trip, so you check that the right child restraint or seat belt is used.</em>",
          "<strong>Route planning.</strong> Your GPS suggests a route through a road with a closure ahead. What do you do? <em>Answer: choose a safe alternative route using signs and your own judgement, and inform the passenger if it affects time or cost.</em>",
          "<strong>Occupational risk.</strong> You have been driving for hours and feel very tired. What is the right decision? <em>Answer: stop and rest. Driving while tired is a safety risk to you, your passengers and others.</em>",
          "<strong>Legislation.</strong> Which document must you be able to show that proves you are allowed to work as a taxi driver? <em>Answer: your taxiförarlegitimation.</em>",
        ],
      },
    },
    {
      card: {
        title: "How to read a question",
        html: `<p>Read the whole question, then every option, before choosing. Look for words such as <em>always</em>, <em>never</em>, <em>first</em> and <em>most important</em>. If two options both look right, ask which one protects the passenger and follows the rule most directly.</p>`,
      },
    },
    {
      heading: "How to practise the questions effectively",
      html: `<p>Reading a compendium once is rarely enough, because the exam tests whether you can <em>apply</em> a rule under time pressure. A better routine is to answer practice questions in short sessions, read the explanation for every miss, and come back to the weak topics a few days later.</p><p>The <strong>Drive Test app</strong> is built around exactly that loop: official-style questions with explanations, Practice, Custom and Review modes, bookmarks for tricky questions and progress analytics by category. You can try the exam-specific question sets on our <a href="/exams/taxi-licence/">taxi licence exam page</a>.</p><p>Once you can pass delprov 1 and 2 reliably, move on to the practical side, which we cover in <a href="/blog/how-to-pass-taxi-licence-test/">how to pass the taxi licence test</a>.</p>`,
    },
    {
      heading: "What happens after the exam questions",
      html: `<p>Passing the theory tests and the driving test is only part of the process. You then need a medical certificate and you apply to Transportstyrelsen, which also checks that you are suitable to work as a taxi driver. The full path is in our <a href="/taxi-licence-guide/">taxi licence guide</a>, the medical side is explained in <a href="/blog/taxi-licence-medical-requirements/">taxi licence medical requirements</a>, and the money side in <a href="/blog/taxi-licence-cost-sweden/">taxi licence cost in Sweden</a>.</p><p>Planning to run a company rather than drive? That is a different exam, see <a href="/blog/yrkeskunnande-taxi-exam/">the yrkeskunnande taxi exam</a>. And if you drive a taxi on a work permit, our <a href="/ob-taxi-sweden/">taxi OB calculator</a> helps you check your pay.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "How many questions are on the taxi licence theory test?", aHtml: "There are two theory tests. Delprov 1 has 70 questions (5 of them unscored, max 65 points) and delprov 2 has 50 questions (4 unscored, max 46 points)." },
    { q: "How many correct answers do I need to pass?", aHtml: "You need at least 48 correct answers in delprov 1 and at least 34 correct answers in delprov 2, according to Trafikverket." },
    { q: "Can I see the real exam questions beforehand?", aHtml: "No. Trafikverket publishes the structure and topics but not the question bank. Practice with official-style questions, like those in the Drive Test app, and read the explanations." },
    { q: "Do I have to pass both theory tests on the same day?", aHtml: "No. You can take them in any order and on different days, but both must be passed within six months of the first one you passed." },
    { q: "Are the example questions in this article real?", aHtml: "No. They are original examples written for practice and are clearly not taken from the real exam." },
  ] as ArticleFaqItem[],
  sources: sourcesEn,
  related: ["/blog/how-to-pass-taxi-licence-test/", "/blog/taxi-licence-cost-sweden/", "/taxi-licence-guide/", "/exams/taxi-licence/"],
};

const sv: ArticleContent = {
  metaTitle: "Taxiförarlegitimation frågor: så är provet | Drive Test",
  metaDescription:
    "Taxiförarlegitimation frågor: vad kunskapsprovet innehåller, delprov 1 och 2, godkändgränser och egna övningsfrågor så att du vet vad du kan förvänta dig.",
  eyebrow: "Sverige · Taxiprovet",
  tag: "Taxiprovet",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Uppdaterad 13 oktober 2026",
  title: "Taxiförarlegitimation frågor: så ser provet ut",
  lede: "Frågorna till <strong>taxiförarlegitimation</strong> delas upp i två teoriprov, säkerhet och beteende samt lagstiftning, plus ett körprov. Här går vi igenom vad varje del innehåller och hur den poängsätts. Du får också egna övningsfrågor som visar frågestilen.",
  intro:
    "Ska du ta <strong>taxiförarlegitimation</strong> vill du säkert veta vad provet faktiskt frågar om. Trafikverket publicerar upplägg, områden och godkändgränser, men inte själva frågorna. Den här guiden går igenom det som är offentligt, förklarar hur du ska tänka kring varje område och ger dig tydligt märkta <em>exempelfrågor</em> som vi har skrivit själva. De är alltså inte riktiga provfrågor, utan övningsmaterial.",
  excerpt:
    "Upplägg, områden och godkändgränser för taxiförarlegitimationens teoriprov, med egna exempelfrågor att öva på.",
  cover: "/assets/blog/ob-taxi-driving.jpg",
  sections: [
    {
      heading: "Taxiförarlegitimation frågor: så är provet uppbyggt",
      html: `<p>Provet för taxiförarlegitimation består av <strong>två teoriprov (delprov) och ett körprov</strong>, och allt görs hos Trafikverket. Du väljer själv i vilken ordning du tar teoriproven, men båda måste vara godkända inom <strong>sex månader</strong> från det första godkända delprovet.</p><p>Tabellen nedan bygger på Trafikverkets sida om taxiförarlegitimation.</p>`,
      table: {
        headers: ["Del", "Frågor", "Godkänt", "Tid"],
        rows: [
          { cells: ["Delprov 1: Säkerhet och beteende", "70 (5 är oprövade provfrågor, max 65 poäng)", "Minst 48 rätt", "50 minuter"] },
          { cells: ["Delprov 2: Lagstiftning", "50 (4 är oprövade provfrågor, max 46 poäng)", "Minst 34 rätt", "50 minuter"] },
          { cells: ["Körprov", "Praktiskt prov, minst 35 minuters körning", "Bedöms av förarprövaren", "Se Trafikverket"] },
        ],
      },
    },
    {
      html: `<p class="muted">De oprövade frågorna används för att testa nya frågor. Du vet inte vilka de är, så behandla varje fråga som om den räknas.</p>`,
    },
    {
      heading: "Delprov 1: frågor om säkerhet och beteende",
      html: `<p>Det första teoriprovet är det bredare. Enligt Trafikverket täcker det följande områden, och frågorna utgår från vardagssituationer som en taxiförare möter snarare än från siffror som ska pluggas in.</p>`,
      list: {
        ordered: false,
        items: [
          "<strong>Ruttplanering</strong> med karta och GPS.",
          "<strong>Bränslesnål körning</strong>, körstil och förebyggande underhåll.",
          "<strong>Miljöpåverkan</strong> från olika fordon.",
          "<strong>Säkerhet och ansvar</strong> för en trygg och bekväm resa.",
          "<strong>Kundservice</strong> och respekt för passagerares olika behov.",
          "<strong>Sjukdomar och funktionsnedsättningar</strong>.",
          "<strong>Yrkesrisker</strong> för taxiförare.",
          "<strong>Fordonskunskap</strong>, till exempel underhåll, felsökning och krav på belysning.",
        ],
      },
    },
    {
      heading: "Delprov 2: frågor om lagstiftning",
      html: `<p>Det andra teoriprovet handlar om regler. Trafikverket beskriver det som <strong>reglerna för taxitrafik och vad som händer om man bryter mot dem</strong>, tillsammans med mycket goda kunskaper om <strong>trafikregler och vägmärken</strong>. Räkna med frågor som beskriver en situation och frågar vilken regel som gäller eller vad konsekvensen blir för dig som förare.</p><p>Här spelar formuleringen störst roll. Skillnaden mellan <em>ska</em> och <em>får</em> kan avgöra vilket svar som är rätt, så läs alla alternativ ordentligt innan du väljer.</p>`,
    },
    {
      heading: "Exempelfrågor till taxiprovet",
      html: `<p>Frågorna nedan är <strong>egna exempel för övning</strong>. De efterliknar stilen i områdena men är inte riktiga provfrågor, och svaren är allmänna riktlinjer. Kontrollera alltid gällande regler hos Trafikverket och Transportstyrelsen.</p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Kundservice.</strong> En passagerare som använder rullstol vill åka med dig. Vad gör du först? <em>Svar: du försäkrar dig om att du kan transportera personen säkert och att rullstolen och passageraren sitter fast på rätt sätt innan du kör.</em>",
          "<strong>Säkerhet.</strong> Ett barn sitter i baksätet. Vem ansvarar för att barnet sitter säkert? <em>Svar: som förare ansvarar du för att resan är säker, så du kontrollerar att rätt barnstol eller bälte används.</em>",
          "<strong>Ruttplanering.</strong> Din GPS leder dig mot en väg som är avstängd längre fram. Vad gör du? <em>Svar: du väljer en säker omväg utifrån skyltar och eget omdöme, och informerar passageraren om det påverkar tid eller pris.</em>",
          "<strong>Yrkesrisk.</strong> Du har kört i många timmar och är mycket trött. Vad är rätt beslut? <em>Svar: stanna och vila. Trötthet är en säkerhetsrisk för dig, dina passagerare och andra.</em>",
          "<strong>Lagstiftning.</strong> Vilken handling ska du kunna visa som bevis på att du får arbeta som taxiförare? <em>Svar: din taxiförarlegitimation.</em>",
        ],
      },
    },
    {
      card: {
        title: "Så läser du en fråga",
        html: `<p>Läs hela frågan och sedan alla alternativ innan du väljer. Håll utkik efter ord som <em>alltid</em>, <em>aldrig</em>, <em>först</em> och <em>viktigast</em>. Om två alternativ verkar rätta: vilket skyddar passageraren och följer regeln mest direkt?</p>`,
      },
    },
    {
      heading: "Så övar du på frågorna på bästa sätt",
      html: `<p>Att läsa ett kompendium en gång räcker sällan, eftersom provet testar om du kan <em>tillämpa</em> en regel under tidspress. Ett bättre upplägg är att svara på övningsfrågor i korta pass, läsa förklaringen till varje fel och återvända till de svaga områdena efter några dagar.</p><p>Appen <strong>Drive Test</strong> bygger på just det: frågor i officiell stil med förklaringar, lägena Övning, Anpassat och Granska, bokmärken för klurigare frågor och framstegsanalys per kategori. Du hittar frågepaketet på vår sida för <a href="/sv/exams/taxi-licence/">taxiförarlegitimation</a>.</p><p>När du klarar delprov 1 och 2 stabilt är det dags för den praktiska delen, som vi går igenom i <a href="/sv/blog/how-to-pass-taxi-licence-test/">så klarar du taxiprovet</a>.</p>`,
    },
    {
      heading: "Vad händer efter proven?",
      html: `<p>Godkända teoriprov och körprov är bara en del av vägen. Därefter behöver du ett läkarintyg och ska ansöka hos Transportstyrelsen, som också prövar om du är lämplig som taxiförare. Hela processen finns i vår <a href="/sv/taxi-licence-guide/">guide till taxiförarlegitimation</a>, den medicinska delen förklaras i <a href="/sv/blog/taxi-licence-medical-requirements/">läkarintyg för taxi</a> och kostnaderna i <a href="/sv/blog/taxi-licence-cost-sweden/">vad kostar taxilegitimation</a>.</p><p>Vill du driva taxiföretag i stället för att köra är det ett annat prov, se <a href="/sv/blog/yrkeskunnande-taxi-exam/">yrkeskunnande taxi</a>. Och kör du taxi med arbetstillstånd hjälper vår <a href="/sv/ob-taxi-sweden/">OB-kalkylator</a> dig att kontrollera lönen.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Hur många frågor är det på teoriprovet för taxi?", aHtml: "Det finns två teoriprov. Delprov 1 har 70 frågor (5 oprövade, max 65 poäng) och delprov 2 har 50 frågor (4 oprövade, max 46 poäng)." },
    { q: "Hur många rätt krävs för godkänt?", aHtml: "Du behöver minst 48 rätt på delprov 1 och minst 34 rätt på delprov 2, enligt Trafikverket." },
    { q: "Kan jag se de riktiga provfrågorna i förväg?", aHtml: "Nej. Trafikverket publicerar upplägg och områden men inte frågebanken. Öva med frågor i officiell stil, som i Drive Test-appen, och läs förklaringarna." },
    { q: "Måste jag klara båda teoriproven samma dag?", aHtml: "Nej. Du kan ta dem i valfri ordning och på olika dagar, men båda måste vara godkända inom sex månader från det första godkända delprovet." },
    { q: "Är exempelfrågorna i artikeln riktiga provfrågor?", aHtml: "Nej. De är egna exempel för övning och är inte hämtade från det riktiga provet." },
  ] as ArticleFaqItem[],
  sources: sourcesEn,
  related: ["/sv/blog/how-to-pass-taxi-licence-test/", "/sv/blog/taxi-licence-cost-sweden/", "/sv/taxi-licence-guide/", "/sv/exams/taxi-licence/"],
};


const extraEn: ArticleSection[] = [
  {
    heading: "Tips for each topic area",
    html: `<p>A few ways to think about the topics, based on the areas Trafikverket lists. They are study ideas, not a promise about specific questions.</p><p><strong>Route planning and GPS.</strong> Expect to reason about choosing a sensible route, not about memorising maps. Think about what a GPS cannot know: a closure, an event, a narrow street, a better drop-off point for the passenger.</p><p><strong>Driving style and the environment.</strong> Smooth acceleration, anticipation and correct tyre pressure all reduce fuel use. Learn the general reasons, so you can answer a question phrased in a new way.</p><p><strong>Passenger needs and illness.</strong> Questions in this area are about respect, safety and common sense. Learn how to help passengers who have reduced mobility, vision or hearing, and what to do if a passenger becomes unwell during a trip.</p><p><strong>Vehicle knowledge.</strong> Know the basic checks you can do yourself, how to recognise a fault, and which lights and equipment must work.</p>`,
  },
  {
    heading: "Typical question formats",
    html: `<p>Most questions describe a short situation and give several alternatives. Some include a picture, for example a road sign or a traffic situation. The wrong alternatives are usually plausible, so you need to know why the right one is right. That is why explanations matter more than the score alone: when you miss a question, read why, and try to explain the rule in your own words.</p>`,
  },
];
const extraSv: ArticleSection[] = [
  {
    heading: "Tips för varje område",
    html: `<p>Några sätt att tänka kring områdena, utifrån det Trafikverket listar. Det är studietips, inte ett löfte om vilka frågor som kommer.</p><p><strong>Ruttplanering och GPS.</strong> Räkna med att resonera kring att välja en vettig väg, inte att lära dig kartor utantill. Tänk på vad en GPS inte kan veta: en avstängning, ett evenemang, en smal gata eller en bättre plats att släppa av passageraren.</p><p><strong>Körstil och miljö.</strong> Mjuk acceleration, framförhållning och rätt lufttryck minskar bränsleförbrukningen. Lär dig de allmänna skälen så att du kan svara även när frågan är formulerad på ett nytt sätt.</p><p><strong>Passagerares behov och sjukdom.</strong> Frågorna i det här området handlar om respekt, säkerhet och sunt förnuft. Lär dig hur du hjälper passagerare med nedsatt rörlighet, syn eller hörsel, och vad du gör om en passagerare blir sjuk under resan.</p><p><strong>Fordonskunskap.</strong> Kunna de grundläggande kontroller du själv kan göra, hur du känner igen ett fel och vilka lyktor och vilken utrustning som måste fungera.</p>`,
  },
  {
    heading: "Så är frågorna formulerade",
    html: `<p>De flesta frågor beskriver en kort situation och ger flera alternativ. Vissa har en bild, till exempel ett vägmärke eller en trafiksituation. De felaktiga alternativen är oftast rimliga, så du behöver veta varför det rätta är rätt. Därför är förklaringar viktigare än poängen i sig: när du missar en fråga, läs varför och försök förklara regeln med egna ord.</p>`,
  },
];
en.sections.splice(en.sections.length - 1, 0, ...extraEn);
sv.sections.splice(sv.sections.length - 1, 0, ...extraSv);


const more1: ArticleSection[] = [];
const more2: ArticleSection[] = [
  {
    html: `<p><strong>Ett tips till.</strong> Gör ett eget fusklappsark per område med de tre viktigaste reglerna och två exempel. Att skriva sammanfattningen själv fungerar bättre än att läsa någon annans, eftersom du tvingas formulera regeln med egna ord. Gå sedan tillbaka till övningsfrågorna och se om du kan svara utan arket.</p><p>Lägg också märke till vilka frågor du svarar rätt på av ren tur. Om du gissade rätt, räkna det som fel och läs förklaringen ändå. På provet finns ingen poäng för nästan rätt.</p>`,
  },
];
en.sections.splice(en.sections.length - 1, 0, ...more1);
sv.sections.splice(sv.sections.length - 1, 0, ...more2);

export const taxiLicenceExamQuestions = { slug: "taxi-licence-exam-questions", en, sv };
