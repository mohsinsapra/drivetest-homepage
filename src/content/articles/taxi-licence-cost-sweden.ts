import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent } from "./types";

const sources = [
  { label: "Trafikverket – Prices for tests and photo (updated 7 January 2026)", url: "https://www.trafikverket.se/korkort/priser/" },
  { label: "Transportstyrelsen – Fees for yrkestrafik (taxi)", url: "https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/" },
  { label: "Transportstyrelsen – Application for taxi driver licence", url: "https://www.transportstyrelsen.se/ansokan-om-taxiforarlegitimation" },
  { label: "Trafikverket – Taxiförarlegitimation", url: "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/" },
];

const en: ArticleContent = {
  metaTitle: "Taxi Licence Cost in Sweden (2026) | Drive Test",
  metaDescription:
    "Taxi licence cost in Sweden as of 2026: Trafikverket exam fees, Transportstyrelsen application and card fees, the medical certificate and courses.",
  eyebrow: "Sweden · Costs",
  tag: "Costs",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Updated 13 October 2026",
  title: "Taxi Licence Cost in Sweden: Every Fee (2026)",
  lede: "The <strong>taxi licence cost in Sweden</strong> is made up of exam fees paid to Trafikverket, an application fee and a card fee paid to Transportstyrelsen, and a medical certificate. Below is every fee we could verify as of 2026, with links to the official pages.",
  intro:
    "Before you start, you need to know what getting a <strong>taxiförarlegitimation</strong> will cost in total. Fees are set by authorities and change from time to time, so treat the numbers below as a snapshot <strong>as of 2026</strong> and always confirm on the official pages: Trafikverket's <a href=\"https://www.trafikverket.se/korkort/priser/\">price page</a> (last updated 7 January 2026 when we checked) and Transportstyrelsen's <a href=\"https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/\">fee page</a>.",
  excerpt:
    "A verified, itemised breakdown of what it costs to get a taxi driver licence in Sweden as of 2026.",
  cover: "/assets/blog/ob-permit-paperwork.jpg",
  sections: [
    {
      heading: "Taxi licence cost in Sweden at a glance",
      html: `<p>The process has two paying authorities. <strong>Trafikverket</strong> charges for the tests. <strong>Transportstyrelsen</strong> charges for handling your application and issuing the licence. On top of that you pay for a doctor's medical certificate, which is set by the clinic.</p>`,
      table: {
        headers: ["Item", "Who", "Fee as of 2026"],
        rows: [
          { cells: ["Theory test, per part (2 parts), daytime", "Trafikverket", "420 kr"] },
          { cells: ["Theory test, per part, evenings and weekends", "Trafikverket", "520 kr"] },
          { cells: ["Driving test (körprov), daytime", "Trafikverket", "1 000 kr"] },
          { cells: ["Driving test, evenings and weekends", "Trafikverket", "1 400 kr"] },
          { cells: ["Application for taxi driver licence", "Transportstyrelsen", "2 700 kr"] },
          { cells: ["Issuing the licence", "Transportstyrelsen", "430 kr"] },
          { cells: ["Medical certificate (läkarintyg)", "Doctor / clinic", "No official fee, varies by provider"] },
        ],
      },
    },
    {
      heading: "A worked total",
      html: `<p>If you take both theory tests and the driving test in the daytime and pass each at the first attempt, the verified fees add up like this: 2 × 420 kr for theory, 1 000 kr for the driving test, 2 700 kr for the application and 430 kr for issuing the licence, which is <strong>4 970 kr</strong>. With evening or weekend slots the exam part rises, giving <strong>5 570 kr</strong> for the same route.</p><p>This sum does <strong>not</strong> include the doctor's fee, travel, or any course. You may see older totals in guides and videos, including lower ones. Fees change, so use the official pages rather than an old figure.</p>`,
    },
    {
      card: {
        title: "Retakes cost extra",
        html: `<p>Each test you book is paid for separately. If you fail a part or need to rebook, you pay again. That is one reason to prepare properly before you book. See <a href="/blog/how-to-pass-taxi-licence-test/">how to pass the taxi licence test</a>.</p>`,
      },
    },
    {
      heading: "What the Transportstyrelsen fees cover",
      html: `<p>Transportstyrelsen lists the application for a taxi driver licence at 2 700 kr, and issuing or renewing the licence at 430 kr. It also lists an advance ruling (förhandsbesked), useful if you are unsure whether a medical or other issue stops you from getting a licence, at 1 500 kr. Exemptions have their own fees, for example 3 000 kr for an exemption from the medical requirements and 2 000 kr for an exemption from the taxi driver licence rules.</p><p>Transportstyrelsen's application page says the licence is produced after the decision once the basic document is received and the fee is paid, and that you may not drive a taxi until the licence is delivered. Annual supervision fees (tillsynsavgift) may also apply to licence holders. We could not verify the current amount, so check the official fee page.</p>`,
    },
    {
      heading: "The medical certificate",
      html: `<p>You need a medical certificate issued within two months before you apply. There is no national fee: the cost depends on the clinic or doctor you use, and an optician may charge separately if they certify the vision part. We therefore give no number here. Ask the provider before you book. More detail is in <a href="/blog/taxi-licence-medical-requirements/">taxi licence medical requirements</a>.</p>`,
    },
    {
      heading: "Optional costs: courses and study material",
      html: `<p>A classroom course or a taxi school is not required by Transportstyrelsen or Trafikverket, and prices vary widely, so we do not quote any. Self-study with an app is the cheaper route for many people. <strong>Drive Test</strong> is free to start, with category-based premium access. Check the current prices in the app or on our <a href="/exams/taxi-licence/">taxi licence exam page</a> rather than relying on a number in an article.</p>`,
    },
    {
      heading: "Running a company costs more",
      html: `<p>If you want to run a taxi business rather than drive, there are further fees. As of 2026, Transportstyrelsen lists a taxi traffic permit at 12 500 kr, and Trafikverket lists the taxi yrkeskunnande test at 420 kr daytime or 520 kr evenings and weekends. Read more in <a href="/blog/yrkeskunnande-taxi-exam/">the yrkeskunnande taxi exam explained</a>.</p><p>For the full process behind the fees, start with our <a href="/taxi-licence-guide/">taxi licence guide</a>. If you already drive, our <a href="/ob-taxi-sweden/">OB calculator</a> helps you check your pay.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "How much does a taxi licence cost in Sweden?", aHtml: "As of 2026, the verified fees (two theory tests, driving test, application and card, daytime slots) add up to 4 970 kr, plus a doctor's certificate. Always confirm on the official Trafikverket and Transportstyrelsen pages." },
    { q: "Who do I pay the fees to?", aHtml: "Trafikverket for the theory and driving tests, and Transportstyrelsen for the application and the issuing of the licence." },
    { q: "How much is the medical certificate?", aHtml: "There is no official fee. It depends on the clinic or doctor, so ask them before you book." },
    { q: "Are evening and weekend tests more expensive?", aHtml: "Yes. Trafikverket's list shows higher prices for evenings and weekends, for example 520 kr instead of 420 kr per theory part." },
    { q: "Do I have to pay again if I fail?", aHtml: "Yes, a retake means booking and paying for that test again." },
    { q: "Is a course required?", aHtml: "No. Neither authority requires a course. It is optional, and prices vary by provider." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/blog/how-to-pass-taxi-licence-test/", "/blog/taxi-licence-medical-requirements/", "/taxi-licence-guide/", "/exams/taxi-licence/"],
};

const sv: ArticleContent = {
  metaTitle: "Vad kostar taxilegitimation? Avgifter 2026 | Drive Test",
  metaDescription:
    "Vad kostar taxilegitimation 2026? Trafikverkets provavgifter, Transportstyrelsens ansöknings- och kortavgift, läkarintyg och kurser. Kontrollerade belopp.",
  eyebrow: "Sverige · Kostnader",
  tag: "Kostnader",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Uppdaterad 13 oktober 2026",
  title: "Vad kostar taxilegitimation? Alla avgifter 2026",
  lede: "Frågan <strong>vad kostar taxilegitimation</strong> har ett tydligt svar i delar: provavgifter till Trafikverket, ansökningsavgift och kortavgift till Transportstyrelsen samt ett läkarintyg. Nedan finns varje avgift vi kunnat kontrollera 2026, med länkar till de officiella sidorna.",
  intro:
    "Innan du börjar behöver du veta vad en <strong>taxiförarlegitimation</strong> kostar totalt. Avgifterna bestäms av myndigheterna och ändras då och då, så se beloppen nedan som en ögonblicksbild <strong>för 2026</strong> och bekräfta alltid på de officiella sidorna: Trafikverkets <a href=\"https://www.trafikverket.se/korkort/priser/\">prissida</a> (senast uppdaterad 7 januari 2026 när vi kontrollerade) och Transportstyrelsens <a href=\"https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/\">avgiftssida</a>.",
  excerpt:
    "En kontrollerad och specificerad genomgång av vad det kostar att få taxiförarlegitimation i Sverige 2026.",
  cover: "/assets/blog/ob-permit-paperwork.jpg",
  sections: [
    {
      heading: "Vad kostar taxilegitimation? Översikt",
      html: `<p>Det är två myndigheter som tar betalt. <strong>Trafikverket</strong> tar betalt för proven. <strong>Transportstyrelsen</strong> tar betalt för att handlägga din ansökan och utfärda legitimationen. Utöver det betalar du för ett läkarintyg, vars pris sätts av vårdgivaren.</p>`,
      table: {
        headers: ["Post", "Vem", "Avgift 2026"],
        rows: [
          { cells: ["Teoriprov per del (2 delar), dagtid", "Trafikverket", "420 kr"] },
          { cells: ["Teoriprov per del, kvällar och helger", "Trafikverket", "520 kr"] },
          { cells: ["Körprov, dagtid", "Trafikverket", "1 000 kr"] },
          { cells: ["Körprov, kvällar och helger", "Trafikverket", "1 400 kr"] },
          { cells: ["Ansökan om taxiförarlegitimation", "Transportstyrelsen", "2 700 kr"] },
          { cells: ["Utfärdande av legitimationen", "Transportstyrelsen", "430 kr"] },
          { cells: ["Läkarintyg", "Läkare / vårdgivare", "Ingen officiell avgift, varierar"] },
        ],
      },
    },
    {
      heading: "Ett räkneexempel",
      html: `<p>Tar du båda teoriproven och körprovet på dagtid och klarar allt på första försöket blir de kontrollerade avgifterna: 2 × 420 kr för teori, 1 000 kr för körprovet, 2 700 kr för ansökan och 430 kr för utfärdandet, alltså <strong>4 970 kr</strong>. Med kvälls- eller helgtider blir det <strong>5 570 kr</strong> för samma väg.</p><p>Summan inkluderar <strong>inte</strong> läkarens avgift, resor eller eventuell kurs. Du kan stöta på äldre totalbelopp i guider och filmer, också lägre sådana. Avgifter ändras, så använd de officiella sidorna i stället för en gammal siffra.</p>`,
    },
    {
      card: {
        title: "Omprov kostar extra",
        html: `<p>Varje prov du bokar betalas separat. Blir du underkänd eller behöver boka om betalar du igen. Det är ett skäl att förbereda sig ordentligt först, se <a href="/sv/blog/how-to-pass-taxi-licence-test/">så klarar du taxiprovet</a>.</p>`,
      },
    },
    {
      heading: "Vad Transportstyrelsens avgifter gäller",
      html: `<p>Transportstyrelsen anger ansökan om taxiförarlegitimation till 2 700 kr och utfärdande eller förnyelse av legitimationen till 430 kr. Där finns också förhandsbesked, användbart om du är osäker på om ett medicinskt eller annat hinder stoppar dig, för 1 500 kr. Undantag har egna avgifter, till exempel 3 000 kr för undantag från medicinska krav och 2 000 kr för undantag från föreskrifterna om taxiförarlegitimation.</p><p>Enligt Transportstyrelsens ansökningssida tillverkas legitimationen efter beslutet när grundhandlingen kommit in och avgiften är betald, och du får inte köra taxi förrän legitimationen levererats. En årlig tillsynsavgift kan också gälla för innehavare. Aktuellt belopp har vi inte kunnat verifiera, så kontrollera avgiftssidan.</p>`,
    },
    {
      heading: "Läkarintyget",
      html: `<p>Du behöver ett läkarintyg som utfärdats högst två månader före ansökan. Det finns ingen nationell avgift: kostnaden beror på vilken vårdgivare du går till, och en optiker kan ta betalt separat om de intygar synen. Vi anger därför inget belopp. Fråga vårdgivaren innan du bokar. Mer finns i <a href="/sv/blog/taxi-licence-medical-requirements/">läkarintyg för taxi</a>.</p>`,
    },
    {
      heading: "Valfria kostnader: kurser och studiematerial",
      html: `<p>Varken Transportstyrelsen eller Trafikverket kräver en kurs eller taxiskola, och priserna varierar mycket, så vi redovisar inga. Självstudier med en app är den billigare vägen för många. <strong>Drive Test</strong> är gratis att börja med, med kategoribaserad premiumåtkomst. Se aktuella priser i appen eller på sidan för <a href="/sv/exams/taxi-licence/">taxiförarlegitimation</a> i stället för att lita på en siffra i en artikel.</p>`,
    },
    {
      heading: "Att driva taxiföretag kostar mer",
      html: `<p>Vill du driva taxiverksamhet i stället för att köra tillkommer fler avgifter. Enligt Transportstyrelsen kostar ett taxitrafiktillstånd 12 500 kr 2026, och Trafikverket anger yrkeskunnandeprovet för taxi till 420 kr dagtid eller 520 kr kvällar och helger. Läs mer i <a href="/sv/blog/yrkeskunnande-taxi-exam/">yrkeskunnande taxi</a>.</p><p>För hela processen bakom avgifterna, börja i vår <a href="/sv/taxi-licence-guide/">guide till taxiförarlegitimation</a>. Kör du redan hjälper vår <a href="/sv/ob-taxi-sweden/">OB-kalkylator</a> dig att kontrollera lönen.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Vad kostar taxilegitimation i Sverige?", aHtml: "De kontrollerade avgifterna 2026 (två teoriprov, körprov, ansökan och utfärdande, dagtid) blir 4 970 kr, plus läkarintyg. Bekräfta alltid på Trafikverkets och Transportstyrelsens officiella sidor." },
    { q: "Vem betalar jag avgifterna till?", aHtml: "Trafikverket för teoriprov och körprov, och Transportstyrelsen för ansökan och utfärdandet av legitimationen." },
    { q: "Vad kostar läkarintyget?", aHtml: "Det finns ingen officiell avgift. Det beror på vårdgivaren, så fråga innan du bokar." },
    { q: "Är kvälls- och helgprov dyrare?", aHtml: "Ja. Trafikverkets prislista visar högre priser kvällar och helger, till exempel 520 kr i stället för 420 kr per teoriprov." },
    { q: "Måste jag betala igen om jag blir underkänd?", aHtml: "Ja, ett omprov innebär att du bokar och betalar för det provet igen." },
    { q: "Krävs det en kurs?", aHtml: "Nej. Ingen av myndigheterna kräver kurs. Den är valfri och priserna varierar mellan utbildare." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/blog/how-to-pass-taxi-licence-test/", "/sv/blog/taxi-licence-medical-requirements/", "/sv/taxi-licence-guide/", "/sv/exams/taxi-licence/"],
};


const extraEn: ArticleSection[] = [
  {
    heading: "Ways to keep the cost down",
    html: `<p>Because each test is paid separately, the cheapest route is to pass first time. A few practical points: prepare properly before you book, since a retake means paying again; compare daytime and evening slots, as the daytime fee is lower in Trafikverket's list; and plan the order so that nothing expires. Theory tests may not be older than three years when you apply, the driving test not older than one year, and the medical certificate not older than two months, so rushing one step and waiting on another can mean paying twice.</p><p>If you are unsure about a medical issue, an advance ruling (förhandsbesked) at 1 500 kr can be cheaper than paying for all the tests and then discovering a problem.</p>`,
  },
  {
    html: `<p><strong>Fees change: how to check</strong></p><p>Both authorities update their price lists. When we checked, Trafikverket's price page showed an update date of 7 January 2026, while Transportstyrelsen's fee page showed no date. Before you pay anything, open both pages and compare them with the table above. If a number differs, trust the official page. We update this article when we notice changes, but the authority page is always the final word.</p>`,
  },
];
const extraSv: ArticleSection[] = [
  {
    heading: "Så håller du kostnaden nere",
    html: `<p>Eftersom varje prov betalas för sig är det billigaste att klara det på första försöket. Några praktiska punkter: förbered dig ordentligt innan du bokar, eftersom ett omprov betalas på nytt; jämför dagtid och kvällstid, eftersom dagtidsavgiften är lägre i Trafikverkets lista; och planera ordningen så att inget går ut. Teoriprov får inte vara äldre än tre år när du ansöker, körprovet inte äldre än ett år och läkarintyget inte äldre än två månader, så att stressa ett steg och vänta på ett annat kan innebära att du betalar två gånger.</p><p>Är du osäker på ett medicinskt hinder kan ett förhandsbesked för 1 500 kr bli billigare än att betala för alla prov och sedan upptäcka ett problem.</p>`,
  },
  {
    html: `<p><strong>Avgifterna ändras: så kontrollerar du</strong></p><p>Båda myndigheterna uppdaterar sina prislistor. När vi kontrollerade visade Trafikverkets prissida uppdateringsdatum 7 januari 2026, medan Transportstyrelsens avgiftssida inte visade något datum. Innan du betalar något: öppna båda sidorna och jämför med tabellen ovan. Skiljer sig ett belopp, lita på den officiella sidan. Vi uppdaterar artikeln när vi ser ändringar, men myndighetens sida har alltid sista ordet.</p>`,
  },
];
en.sections.splice(en.sections.length - 1, 0, ...extraEn);
sv.sections.splice(sv.sections.length - 1, 0, ...extraSv);


const more1: ArticleSection[] = [
  {
    html: `<p><strong>Do not forget the indirect costs.</strong> Besides the fees, think about travel to the förarprovskontor, time off work for the tests and the doctor's visit, and the weeks between applying and receiving the licence, during which you may not drive a taxi. If you are planning your finances, include a buffer for one retake, and remember that a licence holder may also have to pay annual supervision fees. None of these are in the table above because they vary from person to person.</p><p>It is also worth noting that the fees above are for the driver licence only. A company that employs drivers has its own costs, such as the traffic permit, and each driver still pays for their own licence unless the employer agrees to cover it. Ask your employer before you pay out of pocket.</p>`,
  },];
const more2: ArticleSection[] = [
  {
    html: `<p><strong>Glöm inte de indirekta kostnaderna.</strong> Utöver avgifterna bör du tänka på resor till förarprovskontoret, ledighet från jobbet för proven och läkarbesöket, samt veckorna mellan ansökan och leverans av legitimationen, då du inte får köra taxi. Planerar du din ekonomi, ta med en buffert för ett omprov och kom ihåg att en innehavare också kan behöva betala en årlig tillsynsavgift. Inget av detta finns i tabellen ovan eftersom det varierar från person till person.</p><p>Avgifterna ovan gäller dessutom bara förarlegitimationen. Ett företag som anställer förare har egna kostnader, till exempel trafiktillståndet, och varje förare betalar sin egen legitimation om inte arbetsgivaren går med på att stå för den. Fråga din arbetsgivare innan du betalar ur egen ficka.</p><p>Slutligen: spara kvitton och bekräftelser på alla betalningar. Om något går fel, till exempel att ett prov ställs in eller att en betalning dubbleras, är det enklast att kunna visa vad du betalat och när. Det gäller både avgifter till Trafikverket och till Transportstyrelsen.</p>`,
  },];
en.sections.splice(en.sections.length - 1, 0, ...more1);
sv.sections.splice(sv.sections.length - 1, 0, ...more2);


const more3: ArticleSection[] = [
  {
    html: `<p><strong>Quick budget checklist.</strong> Add up your exam fees (use the daytime rate if you can), add the application and issuing fees, ask your clinic for the certificate price, and add a buffer for one retake. That gives you a realistic number to plan around, and every part of it can be checked against an official page.</p>`,
  },];
const more4: ArticleSection[] = [
  {
    html: `<p><strong>Snabb budgetlista.</strong> Räkna ihop provavgifterna (använd dagtidspriset om du kan), lägg till ansöknings- och utfärdandeavgiften, fråga din klinik om intygets pris och lägg på en buffert för ett omprov. Då får du ett realistiskt belopp att planera efter, och varje del går att kontrollera mot en officiell sida.</p><p>Kom ihåg att totalen i den här artikeln är en summa av de belopp vi kunnat verifiera, inte ett officiellt pris för "hela taxilegitimationen". Någon sådan totalsumma anger varken Trafikverket eller Transportstyrelsen, så belopp du hittar på andra webbplatser kan bygga på äldre prislistor.</p>`,
  },];
en.sections.splice(en.sections.length - 1, 0, ...more3);
sv.sections.splice(sv.sections.length - 1, 0, ...more4);

export const taxiLicenceCostSweden = { slug: "taxi-licence-cost-sweden", en, sv };
