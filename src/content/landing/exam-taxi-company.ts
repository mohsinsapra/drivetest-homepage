import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "exams/taxi-company",
  kind: "exam",
  metaTitle: "Yrkeskunnande Taxi Exam Prep Sweden | Drive Test",
  metaDescription:
    "Prepare for the yrkeskunnande taxi exam needed for a taxi traffic permit in Sweden. Practise with exam-style questions and an AI tutor in Drive Test.",
  eyebrow: "Exam · Yrkeskunnande taxi",
  title: "Yrkeskunnande taxi exam preparation",
  titleAccent: "for your traffic permit",
  lede:
    "Do you want to start or run a taxi company in Sweden? The yrkeskunnande taxi exam shows your professional competence for a taxi traffic permit (trafiktillstånd). In Drive Test you prepare with exam-style questions, explanations and progress tracking.",
  stats: [
    { value: "4", label: "Sub-tests in the official yrkeskunnande exam" },
    { value: "3", label: "Study modes to match how you learn" },
    { value: "2", label: "Platforms: iOS and Android" },
  ],
  problems: [
    { icon: "book", title: "Heavy theory", text: "Legislation, company management and finance are far from the driver's seat, and hard to learn from raw text." },
    { icon: "clock", title: "A tight window", text: "All sub-tests must be passed within six months of the first one, so unfocused studying is expensive." },
    { icon: "money", title: "Retakes cost money", text: "Every failed attempt means another fee and more waiting, on top of a business that cannot start until you pass." },
  ],
  solutions: [
    { icon: "target", title: "Focused practice", text: "Study material for the taxi company licence in Sweden (yrkeskunnande), practised the way the exam asks it." },
    { icon: "brain", title: "Why, not just what", text: "Deep-dive explanations make the complex theory behind the taxi company licence easier to understand." },
    { icon: "chart", title: "Know when you are ready", text: "Category breakdowns show which sub-test areas still need work before you book." },
  ],
  sections: [
    {
      heading: "What is the yrkeskunnande taxi exam?",
      html:
        "<p>A company that holds a taxi traffic permit must have a <strong>trafikansvarig</strong> (responsible traffic manager) who can show professional competence, <strong>yrkeskunnande</strong>. According to Transportstyrelsen, that is shown by passing the <em>prov i yrkeskunnande för taxitrafiktillstånd</em>, which is taken at one of Trafikverket's driving test offices.</p><p>The exam has four sub-tests:</p><ul><li>Legal rules (rättsregler)</li><li>Company management and financial management</li><li>Technical standards, operating conditions and road safety</li><li>An in-depth knowledge test covering the first three</li></ul><p>The sub-tests can be taken in any order, and all must be passed within <strong>six months</strong> of the first passed sub-test. Transportstyrelsen can grant exemptions, for example for people with documented relevant education or at least five years of experience as a traffic manager or in company management, though a control test is still required. Rules change, so verify the details on <strong>transportstyrelsen.se</strong> and <strong>trafikverket.se</strong> before you book.</p>",
    },
    {
      heading: "Different from the driver's taxiförarlegitimation",
      html:
        "<p>People often mix up the two. The <strong>taxiförarlegitimation</strong> is the personal licence a driver needs to drive a taxi, while <strong>yrkeskunnande</strong> is about running the business behind the cars. Many people who start as drivers later want their own company, which is why the two paths often follow each other.</p><p>If you are still on the driver side, start with our <a href=\"/exams/taxi-licence/\">taxi licence test page</a> or the full <a href=\"/taxi-licence-guide/\">taxi licence guide</a>. If you already drive and work with OB pay, our free <a href=\"/ob-taxi-sweden/\">OB calculator</a> may also save you time.</p><p>Drive Test covers both: Taxiförarlegitimation and Yrkeskunnande are listed as category areas in the app, so you can continue in the same place when your goals change. Confirm which categories are included in your plan in the app before purchase.</p>",
    },
    {
      heading: "Study for yrkeskunnande in Drive Test",
      html:
        "<p>Start with <strong>Practice</strong> mode to build understanding, then use <strong>Custom</strong> mode to simulate longer sessions with a timer. <strong>Review</strong> mode brings back the questions you missed, and <strong>bookmarks</strong> keep the tricky ones close.</p><p>Management and finance questions are easier to remember when you understand the logic behind them, so every question has an explanation, and the <strong>AI tutor</strong> can reword it until it makes sense. Text-to-speech and multi-language support help if Swedish is not your first language, although the exam itself is in Swedish.</p><p>Use the analytics to plan your six-month window. If one area stays weak, spend your next sessions there rather than repeating what you already know. For background reading and practical tips, browse the <a href=\"/blog/\">Drive Test blog</a>.</p>",
    },
  ],
  faq: [
    { q: "What is yrkeskunnande for taxi?", aHtml: "Yrkeskunnande is the professional competence required for a taxi traffic permit. It is shown by passing the yrkeskunnande exam at Trafikverket, which tests the person named as trafikansvarig." },
    { q: "How many parts does the yrkeskunnande taxi exam have?", aHtml: "Transportstyrelsen describes four sub-tests: legal rules, company and financial management, technical standards and road safety, and an in-depth knowledge test. All must be passed within six months of the first." },
    { q: "Can I be exempted from the yrkeskunnande exam?", aHtml: "In some cases. Transportstyrelsen can exempt you from specific subjects if you have relevant education, or from the whole exam with at least five years of experience as a traffic manager or in company management, but a control test is still required." },
    { q: "Do I need yrkeskunnande to drive a taxi as an employee?", aHtml: "No. As a driver you need a taxiförarlegitimation. Yrkeskunnande is required for the person responsible for a company's taxi traffic permit. See <a href=\"/exams/taxi-licence/\">the taxi licence test page</a>." },
    { q: "Is the exam in English?", aHtml: "No, the exams are held in Swedish. Drive Test offers multi-language support and text-to-speech to help you prepare." },
  ],
  related: ["exams/taxi-licence", "for/taxi-companies", "exams/goods-and-bus", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Prepare for yrkeskunnande",
  ctaText: "Try the free categories on iOS or Android and build a study plan around the six-month window.",
};

const sv: LandingPage = {
  slug: "exams/taxi-company",
  kind: "exam",
  metaTitle: "Taxitrafiktillstånd prov 2026: öva yrkeskunnande taxi | Drive Test",
  metaDescription:
    "Provet för taxitrafiktillstånd: fyra delprov i yrkeskunnande taxi hos Trafikverket, frågor, godkändgräns, provtid och avgift. Öva med förklaringar i Drive Test.",
  eyebrow: "Prov · Taxitrafiktillstånd",
  title: "Taxitrafiktillstånd prov: plugga yrkeskunnande taxi",
  titleAccent: "inför alla fyra delproven",
  lede:
    "Ska du starta eller driva taxiföretag? Då behöver företaget ett taxitrafiktillstånd, och den trafikansvariga ska klara provet i yrkeskunnande hos Trafikverket. I Drive Test förbereder du dig med provliknande frågor, förklaringar och uppföljning av framsteg.",
  stats: [
    { value: "4", label: "Delprov i provet för taxitrafiktillstånd" },
    { value: "6 mån", label: "På dig att klara alla delprov från det första godkända" },
    { value: "420 kr", label: "Provavgift dagtid hos Trafikverket (2026)" },
  ],
  problems: [
    { icon: "book", title: "Tung teori", text: "Lagstiftning, företagsledning och ekonomi ligger långt från förarsätet och är svåra att lära sig av ren text." },
    { icon: "clock", title: "Snävt tidsfönster", text: "Alla delprov ska vara godkända inom sex månader från det första, så ofokuserad plugg blir dyr." },
    { icon: "money", title: "Omprov kostar", text: "Varje underkänt försök innebär ny avgift och mer väntan, medan verksamheten inte kan starta förrän du klarat det." },
  ],
  solutions: [
    { icon: "target", title: "Fokuserad övning", text: "Studiematerial för yrkeskunnande taxi, övat på det sätt provet ställer frågorna." },
    { icon: "brain", title: "Varför, inte bara vad", text: "Djupgående förklaringar gör den komplexa teorin bakom taxiföretagslegitimationen lättare att förstå." },
    { icon: "chart", title: "Vet när du är redo", text: "Uppdelning per kategori visar vilka områden som behöver mer arbete innan du bokar." },
  ],
  sections: [
    {
      heading: "Taxitrafiktillstånd prov: så ser provet ut",
      html:
        "<p>Taxitrafik får bara drivas av den som har <strong>taxitrafiktillstånd</strong> från Transportstyrelsen. Företaget ska ha en <strong>trafikansvarig</strong> som visar <strong>yrkeskunnande</strong> genom att klara provet hos Trafikverket. Enligt <a href=\"https://www.trafikverket.se/korkort/yrkesprov/yrkestrafiktillstand/\" target=\"_blank\" rel=\"noopener noreferrer\">Trafikverket</a> ser provet ut så här:</p><ul><li><strong>Delprov 1: Rättsregler.</strong> 23 frågor, varav 3 testfrågor. Minst 12 rätt av 20, 45 minuter.</li><li><strong>Delprov 2: Ekonomisk ledning av ett företag.</strong> 23 frågor, minst 12 rätt av 20, 45 minuter.</li><li><strong>Delprov 3: Tekniska normer, driftsförhållanden och trafiksäkerhet.</strong> 23 frågor, minst 12 rätt av 20, 45 minuter.</li><li><strong>Delprov 4: Fördjupade kunskaper</strong> om de tre första. 20 frågor, varav 5 testfrågor. Minst 9 rätt av 15, 120 minuter.</li></ul><p>Delprov 1–3 gör du i valfri ordning. Alla fyra ska vara godkända inom <strong>sex månader</strong> från det första godkända delprovet. Du ser resultatet direkt på skärmen. Provet kostar 420 kr dagtid och 520 kr efter kl. 18 och på helger enligt Trafikverkets prislista 2026. När du är godkänd ansöker du om tillståndet hos Transportstyrelsen, där prövningen av tillstånd till taxitrafik kostar <strong>12 500 kr</strong> (2026).</p><p>Transportstyrelsen kan ge undantag, till exempel för den som har relevant utbildning eller minst fem års erfarenhet som trafikledare eller i företagsledning, men då krävs ändå ett kontrollprov. Kontrollera aktuella regler på <strong>transportstyrelsen.se</strong> och <strong>trafikverket.se</strong> innan du bokar.</p>",
    },
    {
      heading: "Något annat än förarens taxiförarlegitimation",
      html:
        "<p>De två förväxlas ofta. <strong>Taxiförarlegitimationen</strong> är den personliga legitimation en förare behöver för att köra taxi, medan <strong>yrkeskunnande</strong> handlar om att driva verksamheten bakom bilarna. Många som börjar som förare vill senare ha ett eget företag, och därför följer vägarna ofta på varandra.</p><p>Är du fortfarande på förarsidan, börja med vår sida om <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a> eller hela <a href=\"/sv/taxi-licence-guide/\">guiden till taxiförarlegitimation</a>. Kör du redan och jobbar med OB-tillägg kan vår kostnadsfria <a href=\"/sv/ob-taxi-sweden/\">OB-kalkylator</a> spara tid.</p><p>Drive Test täcker båda: Taxiförarlegitimation och Yrkeskunnande finns som kategoriområden i appen, så du kan fortsätta på samma ställe när dina mål ändras. Bekräfta vilka kategorier som ingår i din plan i appen före köp.</p>",
    },
    {
      heading: "Öva inför taxitrafiktillstånd prov i Drive Test",
      html:
        "<p>Börja med <strong>Övning</strong> för att bygga förståelse och använd sedan <strong>Anpassat</strong> för att simulera längre pass med timer. <strong>Granska</strong> tar tillbaka de frågor du missade, och <strong>bokmärken</strong> håller de svåra nära till hands.</p><p>Frågor om ledning och ekonomi är lättare att minnas när du förstår logiken bakom dem, därför har varje fråga en förklaring och <strong>AI-tutorn</strong> kan formulera om den tills den blir begriplig. Text-till-tal och flerspråkigt stöd hjälper dig om svenska inte är ditt förstaspråk, även om själva provet är på svenska.</p><p>Använd statistiken för att planera dina sex månader. Om ett område fortsätter vara svagt, lägg nästa pass där i stället för att repetera sådant du redan kan. För bakgrund och praktiska tips, läs <a href=\"/sv/blog/\">Drive Test-bloggen</a>.</p>",
    },
  ],
  faq: [
    { q: "Hur går provet för taxitrafiktillstånd till?", aHtml: "Det är fyra delprov hos Trafikverket. Delprov 1–3 har 23 frågor var (minst 12 rätt av 20, 45 minuter). Delprov 4 har 20 frågor (minst 9 rätt av 15, 120 minuter). Alla ska vara godkända inom sex månader från det första godkända delprovet." },
    { q: "Vad kostar taxitrafiktillstånd?", aHtml: "Provet hos Trafikverket kostar 420 kr dagtid och 520 kr kvällar och helger. Transportstyrelsens prövning av tillstånd till taxitrafik kostar 12 500 kr (2026). Kontrollera aktuella avgifter hos myndigheterna." },
    { q: "Vad är yrkeskunnande för taxi?", aHtml: "Yrkeskunnande är den yrkesmässiga kompetens som krävs för trafiktillstånd för taxi. Den visas genom att klara provet i yrkeskunnande hos Trafikverket, som avläggs av den som utsetts till trafikansvarig." },
    { q: "Kan jag få undantag från provet i yrkeskunnande?", aHtml: "I vissa fall. Transportstyrelsen kan undanta dig från enskilda ämnen om du har relevant utbildning, eller från hela provet med minst fem års erfarenhet som trafikledare eller i företagsledning, men ett kontrollprov krävs ändå." },
    { q: "Behöver jag yrkeskunnande för att köra taxi som anställd?", aHtml: "Nej. Som förare behöver du taxiförarlegitimation. Yrkeskunnande krävs för den som ansvarar för företagets trafiktillstånd för taxi. Se <a href=\"/sv/exams/taxi-licence/\">sidan om taxiförarlegitimation prov</a>." },
    { q: "Går provet att göra på engelska?", aHtml: "Nej, proven hålls på svenska. Drive Test har flerspråkigt stöd och text-till-tal som hjälper dig att förbereda dig." },
  ],
  related: ["exams/taxi-licence", "for/taxi-companies", "exams/goods-and-bus", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Förbered dig inför provet för taxitrafiktillstånd",
  ctaText: "Prova de gratis kategorierna och bygg en studieplan runt de sex månaderna.",
};

export const examTaxiCompany = { en, sv };
