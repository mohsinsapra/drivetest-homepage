import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "for/taxi-companies",
  kind: "audience",
  metaTitle: "Train Taxi Drivers & Yrkeskunnande Prep | Drive Test",
  metaDescription:
    "Help new drivers pass the taxiförarlegitimation exams and prepare owners for yrkeskunnande. Drive Test is an exam-prep app for taxi companies in Sweden.",
  eyebrow: "For taxi companies",
  title: "Exam preparation for taxi companies",
  titleAccent: "and the drivers you hire",
  lede:
    "Every new driver needs a taxiförarlegitimation, and every taxi company needs someone with yrkeskunnande. Drive Test gives your drivers and owners an exam-prep app they can use on their own phones, in their own time.",
  stats: [
    { value: "2", label: "Paths covered: driver licence and yrkeskunnande" },
    { value: "3", label: "Platforms: iOS, Android and web" },
    { value: "3", label: "Study modes for different routines" },
  ],
  problems: [
    { icon: "clock", title: "Drivers waiting to start", text: "A recruit who has not passed the exams cannot take shifts, so every week of slow preparation costs you." },
    { icon: "language", title: "Diverse driver teams", text: "Many drivers study the exam in a second language, which makes ordinary study material slow going." },
    { icon: "book", title: "Owners need business knowledge", text: "Legislation, finance and management are required for the traffic permit but unrelated to daily driving." },
  ],
  solutions: [
    { icon: "phone", title: "Self-paced on any phone", text: "Drivers practise between shifts on iOS, Android or the web, without classroom scheduling." },
    { icon: "language", title: "Multi-language and speech", text: "Text-to-speech and multi-language support help recruits who are not yet fluent in Swedish." },
    { icon: "chart", title: "Visible readiness", text: "Each learner sees their own category results and knows when to book." },
  ],
  sections: [
    {
      heading: "Helping new drivers get licensed",
      html:
        "<p>A <strong>taxiförarlegitimation</strong> is a personal licence issued by Transportstyrelsen, and the exams are held at Trafikverket in Swedish. According to Trafikverket, the theory test has two parts, Säkerhet och beteende and Lagstiftning, to be passed within six months of the first passed part. A recruit who prepares well saves repeat fees and gets on the road sooner.</p><p>Point your new drivers to Drive Test as a practical, low-friction way to study. They get exam-style questions, explanations and an <strong>AI tutor</strong>, and can <strong>bookmark</strong> what they find tricky. The <a href=\"/exams/taxi-licence/\">taxi licence test page</a> explains the exam, and the <a href=\"/taxi-licence-guide/\">licence guide</a> covers the full application route including costs.</p><p>Drive Test is an individual study app, so each driver has their own account and plan. We do not offer company dashboards or group management, and each driver confirms the available categories and prices in the app.</p>",
    },
    {
      heading: "Yrkeskunnande for owners and traffic managers",
      html:
        "<p>A company holding a taxi traffic permit must name a <strong>trafikansvarig</strong>, who must show professional competence. According to Transportstyrelsen, this is shown by passing the exam in yrkeskunnande, which has four sub-tests: legal rules, company and financial management, technical standards and road safety, and an in-depth knowledge test. All must be passed within six months of the first.</p><p>Owners who are used to running operations, not sitting exams, benefit from structured practice. Drive Test lists Yrkeskunnande among its category areas, with explanations that help make the complex theory behind the taxi company licence clearer. Read more on our <a href=\"/exams/taxi-company/\">yrkeskunnande taxi</a> page, and check the app for the current categories included.</p><p>Companies hiring across borders should also note that exemptions and recognition of foreign qualifications are decided by Transportstyrelsen, so check there for your case.</p>",
    },
    {
      heading: "A useful tool for your drivers' daily life",
      html:
        "<p>Beyond exams, Drive Test offers a free <a href=\"/ob-taxi-sweden/\">OB calculator</a> where drivers can photograph their Vilotidsrapport and see their OB1 and OB2 hours. AI reads the handwriting, the driver verifies the numbers, and the maths is exact. It runs in the browser, with no install and no sign-up.</p><p>This helps drivers check their pay and helps your company reduce misunderstandings around OB supplements. It is a tool for the driver's own use and does not replace the payroll rules in your collective agreement.</p><p>If you want to talk about how Drive Test can fit your onboarding of new drivers, you can reach us through the <a href=\"/blog/\">blog</a> and support pages. For the comparison with classroom courses, read <a href=\"/compare/drive-test-vs-taxi-schools/\">Drive Test vs taxi schools</a>.</p>",
    },
  ],
  faq: [
    { q: "Can a taxi company buy Drive Test for all its drivers?", aHtml: "Drive Test is an individual study app with category-based plans. There is no company dashboard. Contact us through the support page if you want to discuss your needs." },
    { q: "What do new taxi drivers need before they can start?", aHtml: "A taxiförarlegitimation from Transportstyrelsen, which requires passing the exams at Trafikverket, among other conditions. See the <a href=\"/taxi-licence-guide/\">licence guide</a>." },
    { q: "Who needs yrkeskunnande in a taxi company?", aHtml: "The person named as trafikansvarig must show professional competence by passing the yrkeskunnande exam. See <a href=\"/exams/taxi-company/\">yrkeskunnande taxi</a>." },
    { q: "Does the app help drivers who do not speak fluent Swedish?", aHtml: "Yes, it has multi-language support and full text-to-speech, although the exam is in Swedish." },
    { q: "Is there a tool for checking OB pay?", aHtml: "Yes, the free <a href=\"/ob-taxi-sweden/\">OB calculator</a> reads a Vilotidsrapport photo and calculates OB1 and OB2 hours." },
  ],
  related: ["exams/taxi-company", "exams/taxi-licence", "for/new-taxi-drivers", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Get your drivers exam-ready",
  ctaText: "Share Drive Test with new recruits and start with the free categories.",
};

const sv: LandingPage = {
  slug: "for/taxi-companies",
  kind: "audience",
  metaTitle: "Utbilda taxiförare och yrkeskunnande | Drive Test",
  metaDescription:
    "Hjälp nya förare klara proven för taxiförarlegitimation och förbered ägare för yrkeskunnande. Drive Test är en provapp för taxiföretag i Sverige.",
  eyebrow: "För taxiföretag",
  title: "Provförberedelse för taxiföretag",
  titleAccent: "och förarna du anställer",
  lede:
    "Varje ny förare behöver en taxiförarlegitimation, och varje taxiföretag behöver någon med yrkeskunnande. Drive Test ger dina förare och ägare en provapp de kan använda i sin egen mobil, i sin egen takt.",
  stats: [
    { value: "2", label: "Vägar som täcks: förarlegitimation och yrkeskunnande" },
    { value: "3", label: "Plattformar: iOS, Android och webben" },
    { value: "3", label: "Studielägen för olika rutiner" },
  ],
  problems: [
    { icon: "clock", title: "Förare som väntar på att börja", text: "En rekryt som inte klarat proven kan inte ta pass, så varje vecka med långsam förberedelse kostar dig." },
    { icon: "language", title: "Mångkulturella förargrupper", text: "Många förare pluggar provet på ett andraspråk, vilket gör vanligt studiematerial svårtuggat." },
    { icon: "book", title: "Ägare behöver affärskunskap", text: "Lagstiftning, ekonomi och ledning krävs för trafiktillståndet men har inget med daglig körning att göra." },
  ],
  solutions: [
    { icon: "phone", title: "I egen takt i valfri mobil", text: "Förare övar mellan passen på iOS, Android eller webben, utan schemalagda lektioner." },
    { icon: "language", title: "Flerspråkigt och uppläst", text: "Text-till-tal och flerspråkigt stöd hjälper rekryter som ännu inte är flytande i svenska." },
    { icon: "chart", title: "Synlig beredskap", text: "Varje elev ser sina egna resultat per kategori och vet när det är dags att boka." },
  ],
  sections: [
    {
      heading: "Hjälp nya förare att få sin legitimation",
      html:
        "<p>En <strong>taxiförarlegitimation</strong> är en personlig legitimation som utfärdas av Transportstyrelsen, och proven hålls hos Trafikverket på svenska. Enligt Trafikverket har teoriprovet två delprov, Säkerhet och beteende samt Lagstiftning, som ska vara godkända inom sex månader från det första godkända delprovet. En rekryt som förbereder sig väl sparar omprovsavgifter och kommer snabbare ut på vägarna.</p><p>Hänvisa nya förare till Drive Test som ett praktiskt sätt att studera utan krångel. De får provliknande frågor, förklaringar och en <strong>AI-tutor</strong>, och kan <strong>bokmärka</strong> det de tycker är svårt. Sidan om <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a> förklarar provet, och <a href=\"/sv/taxi-licence-guide/\">legitimationsguiden</a> går igenom hela ansökningsvägen inklusive kostnader.</p><p>Drive Test är en individuell studieapp, så varje förare har eget konto och egen plan. Vi erbjuder inga företagsvyer eller grupphantering, och varje förare bekräftar tillgängliga kategorier och priser i appen.</p>",
    },
    {
      heading: "Yrkeskunnande för ägare och trafikansvariga",
      html:
        "<p>Ett företag med trafiktillstånd för taxi måste utse en <strong>trafikansvarig</strong> som ska visa yrkeskunnande. Enligt Transportstyrelsen visas det genom att klara provet i yrkeskunnande, som har fyra delprov: rättsregler, företagsledning och ekonomi, tekniska normer och trafiksäkerhet samt ett fördjupande kunskapsprov. Alla ska vara godkända inom sex månader från det första.</p><p>Ägare som är vana vid att driva verksamhet, inte sitta prov, har nytta av strukturerad övning. Drive Test listar Yrkeskunnande bland sina kategoriområden, med förklaringar som gör den komplexa teorin bakom taxiföretagslegitimationen tydligare. Läs mer på vår sida om <a href=\"/sv/exams/taxi-company/\">yrkeskunnande taxi</a> och se i appen vilka kategorier som ingår just nu.</p><p>Företag som rekryterar över gränserna bör också veta att undantag och erkännande av utländska kvalifikationer beslutas av Transportstyrelsen, så kontrollera där för ditt fall.</p>",
    },
    {
      heading: "Ett användbart verktyg i förarens vardag",
      html:
        "<p>Utöver proven erbjuder Drive Test en gratis <a href=\"/sv/ob-taxi-sweden/\">OB-kalkylator</a> där förare kan fotografera sin vilotidsrapport och se sina OB1- och OB2-timmar. AI läser handstilen, föraren kontrollerar siffrorna och räkningen blir exakt. Den fungerar i webbläsaren, utan installation och utan registrering.</p><p>Det hjälper förare att kontrollera sin lön och hjälper ditt företag att minska missförstånd kring OB-tillägg. Det är ett verktyg för förarens eget bruk och ersätter inte lönereglerna i ert kollektivavtal.</p><p>Vill du prata om hur Drive Test kan passa i introduktionen av nya förare når du oss via <a href=\"/sv/blog/\">bloggen</a> och supportsidorna. Jämförelsen med klassrumskurser hittar du i <a href=\"/sv/compare/drive-test-vs-taxi-schools/\">Drive Test eller taxiskola</a>.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Kan ett taxiföretag köpa Drive Test till alla sina förare?", aHtml: "Drive Test är en individuell studieapp med kategoribaserade planer. Det finns ingen företagsvy. Kontakta oss via supportsidan om du vill diskutera era behov." },
    { q: "Vad behöver nya taxiförare innan de kan börja?", aHtml: "En taxiförarlegitimation från Transportstyrelsen, vilket bland annat kräver godkända prov hos Trafikverket. Se <a href=\"/sv/taxi-licence-guide/\">legitimationsguiden</a>." },
    { q: "Vem behöver yrkeskunnande i ett taxiföretag?", aHtml: "Den som utsetts till trafikansvarig ska visa yrkeskunnande genom att klara provet i yrkeskunnande. Se <a href=\"/sv/exams/taxi-company/\">yrkeskunnande taxi</a>." },
    { q: "Hjälper appen förare som inte talar flytande svenska?", aHtml: "Ja, den har flerspråkigt stöd och fullt text-till-tal, även om provet är på svenska." },
    { q: "Finns det ett verktyg för att kontrollera OB-lön?", aHtml: "Ja, den gratis <a href=\"/sv/ob-taxi-sweden/\">OB-kalkylatorn</a> läser ett foto av en vilotidsrapport och räknar ut OB1- och OB2-timmar." },
  ],
  related: ["exams/taxi-company", "exams/taxi-licence", "for/new-taxi-drivers", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Gör dina förare provklara",
  ctaText: "Dela Drive Test med nya rekryter och börja med de gratis kategorierna.",
};

export const audienceTaxiCompanies = { en, sv };
