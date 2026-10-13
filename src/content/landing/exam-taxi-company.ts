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
  metaTitle: "Yrkeskunnande taxi prov: öva i appen | Drive Test",
  metaDescription:
    "Förbered dig för provet i yrkeskunnande taxi som krävs för trafiktillstånd för taxi. Öva med provliknande frågor, förklaringar och AI-tutor i Drive Test.",
  eyebrow: "Prov · Yrkeskunnande taxi",
  title: "Yrkeskunnande taxi: plugga inför provet",
  titleAccent: "för ditt trafiktillstånd",
  lede:
    "Ska du starta eller driva taxiföretag? Provet i yrkeskunnande taxi visar din yrkesmässiga kompetens för ett trafiktillstånd för taxi. I Drive Test förbereder du dig med provliknande frågor, förklaringar och uppföljning av framsteg.",
  stats: [
    { value: "4", label: "Delprov i det officiella provet i yrkeskunnande" },
    { value: "3", label: "Studielägen som passar hur du lär dig" },
    { value: "2", label: "Plattformar: iOS och Android" },
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
      heading: "Vad är provet i yrkeskunnande för taxi?",
      html:
        "<p>Ett företag med trafiktillstånd för taxi måste ha en <strong>trafikansvarig</strong> som kan visa <strong>yrkeskunnande</strong>. Enligt Transportstyrelsen visas det genom att klara <em>prov i yrkeskunnande för taxitrafiktillstånd</em>, som genomförs hos Trafikverkets prov- och körkortskontor.</p><p>Provet har fyra delprov:</p><ul><li>Rättsregler</li><li>Företagsledning och ekonomisk styrning av företag</li><li>Tekniska normer, driftsförhållanden och trafiksäkerhet</li><li>Fördjupande kunskapsprov som omfattar de tre första</li></ul><p>Delproven kan tas i valfri ordning, och alla måste vara godkända inom <strong>sex månader</strong> från det första godkända delprovet. Transportstyrelsen kan ge undantag, till exempel för den som har relevant utbildning eller minst fem års erfarenhet som trafikledare eller i företagsledning, men då krävs ändå ett kontrollprov. Regler ändras, så kontrollera uppgifterna på <strong>transportstyrelsen.se</strong> och <strong>trafikverket.se</strong> innan du bokar.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
    {
      heading: "Något annat än förarens taxiförarlegitimation",
      html:
        "<p>De två förväxlas ofta. <strong>Taxiförarlegitimationen</strong> är den personliga legitimation en förare behöver för att köra taxi, medan <strong>yrkeskunnande</strong> handlar om att driva verksamheten bakom bilarna. Många som börjar som förare vill senare ha ett eget företag, och därför följer vägarna ofta på varandra.</p><p>Är du fortfarande på förarsidan, börja med vår sida om <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a> eller hela <a href=\"/sv/taxi-licence-guide/\">guiden till taxiförarlegitimation</a>. Kör du redan och jobbar med OB-tillägg kan vår kostnadsfria <a href=\"/sv/ob-taxi-sweden/\">OB-kalkylator</a> spara tid.</p><p>Drive Test täcker båda: Taxiförarlegitimation och Yrkeskunnande finns som kategoriområden i appen, så du kan fortsätta på samma ställe när dina mål ändras. Bekräfta vilka kategorier som ingår i din plan i appen före köp.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
    {
      heading: "Studera inför yrkeskunnande i Drive Test",
      html:
        "<p>Börja med <strong>Övning</strong> för att bygga förståelse och använd sedan <strong>Anpassat</strong> för att simulera längre pass med timer. <strong>Granska</strong> tar tillbaka de frågor du missade, och <strong>bokmärken</strong> håller de svåra nära till hands.</p><p>Frågor om ledning och ekonomi är lättare att minnas när du förstår logiken bakom dem, därför har varje fråga en förklaring och <strong>AI-tutorn</strong> kan formulera om den tills den blir begriplig. Text-till-tal och flerspråkigt stöd hjälper dig om svenska inte är ditt förstaspråk, även om själva provet är på svenska.</p><p>Använd statistiken för att planera dina sex månader. Om ett område fortsätter vara svagt, lägg nästa pass där i stället för att repetera sådant du redan kan. För bakgrund och praktiska tips, läs <a href=\"/sv/blog/\">Drive Test-bloggen</a>.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Vad är yrkeskunnande för taxi?", aHtml: "Yrkeskunnande är den yrkesmässiga kompetens som krävs för trafiktillstånd för taxi. Den visas genom att klara provet i yrkeskunnande hos Trafikverket, som avläggs av den som utsetts till trafikansvarig." },
    { q: "Hur många delar har provet i yrkeskunnande för taxi?", aHtml: "Transportstyrelsen beskriver fyra delprov: rättsregler, företagsledning och ekonomi, tekniska normer och trafiksäkerhet samt ett fördjupande kunskapsprov. Alla ska vara godkända inom sex månader från det första." },
    { q: "Kan jag få undantag från provet i yrkeskunnande?", aHtml: "I vissa fall. Transportstyrelsen kan undanta dig från enskilda ämnen om du har relevant utbildning, eller från hela provet med minst fem års erfarenhet som trafikledare eller i företagsledning, men ett kontrollprov krävs ändå." },
    { q: "Behöver jag yrkeskunnande för att köra taxi som anställd?", aHtml: "Nej. Som förare behöver du taxiförarlegitimation. Yrkeskunnande krävs för den som ansvarar för företagets trafiktillstånd för taxi. Se <a href=\"/sv/exams/taxi-licence/\">sidan om taxiförarlegitimation prov</a>." },
    { q: "Går provet att göra på engelska?", aHtml: "Nej, proven hålls på svenska. Drive Test har flerspråkigt stöd och text-till-tal som hjälper dig att förbereda dig." },
  ],
  related: ["exams/taxi-licence", "for/taxi-companies", "exams/goods-and-bus", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Förbered dig inför yrkeskunnande",
  ctaText: "Prova de gratis kategorierna på iOS eller Android och bygg en studieplan runt de sex månaderna.",
};

export const examTaxiCompany = { en, sv };
