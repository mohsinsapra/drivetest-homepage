import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "exams/goods-and-bus",
  kind: "exam",
  metaTitle: "Yrkeskunnande Goods & Bus Exam Prep | Drive Test",
  metaDescription:
    "Prepare for the yrkeskunnande exam for goods transport (godstrafik) and bus or passenger transport (persontrafik) in Sweden with Drive Test practice.",
  eyebrow: "Exam · Yrkeskunnande gods & buss",
  title: "Yrkeskunnande exam for goods and bus transport",
  titleAccent: "in Sweden",
  lede:
    "Running a haulage or bus company in Sweden requires a traffic manager with proven professional competence. Drive Test supports your yrkeskunnande exam preparation for goods transport (godstrafik) and passenger transport (persontrafik) with exam-style practice and clear explanations.",
  stats: [
    { value: "3", label: "Study modes: Practice, Custom and Review" },
    { value: "3", label: "Platforms: iOS, Android and web" },
    { value: "Free", label: "Free categories to try before you subscribe" },
  ],
  problems: [
    { icon: "book", title: "Broad subject areas", text: "Rules, company economics, technical standards and road safety all have to be learned together." },
    { icon: "clock", title: "Studying next to a full-time job", text: "Fleet owners and managers rarely have long blocks of study time, so short focused sessions matter." },
    { icon: "alert", title: "Unclear readiness", text: "Reading alone gives no signal of whether you would actually pass the written test." },
  ],
  solutions: [
    { icon: "phone", title: "Short sessions anywhere", text: "Practise on your phone between jobs. Custom mode lets you set test length and timer." },
    { icon: "brain", title: "Explanations that teach", text: "Understand the reasoning behind every answer, with an AI tutor when you need another angle." },
    { icon: "chart", title: "Measured progress", text: "Performance charts and category breakdowns show where to focus." },
  ],
  sections: [
    {
      heading: "Yrkeskunnande for goods and passenger transport",
      html:
        "<p>Under EU rules, a company that holds a transport permit for commercial goods or passenger transport must name a <strong>trafikansvarig</strong> who actually and continuously manages the transport operations. According to Transportstyrelsen, the person must show professional competence, <strong>yrkeskunnande</strong>, by passing a written exam arranged by Trafikverket. Competence gained in another EU member state can also be accepted when a certificate is sent to Transportstyrelsen.</p><p>The structure, number of questions and time limits of the exam can be changed by the authorities, so we do not list figures here that you should confirm yourself. Check the current exam description at <strong>trafikverket.se</strong> and the requirements for the traffic manager at <strong>transportstyrelsen.se</strong> before booking.</p><p>The same competence idea applies to taxi companies, where the exam has four sub-tests. If that is your route, see our <a href=\"/exams/taxi-company/\">yrkeskunnande taxi</a> page.</p>",
    },
    {
      heading: "Practise exam-style questions",
      html:
        "<p>Drive Test is built around exam-style questions with explanations. In <strong>Practice</strong> mode you learn topic by topic, in <strong>Custom</strong> mode you control test length, timer and marking, and in <strong>Review</strong> mode you return to what you missed. <strong>Bookmarks</strong> keep difficult questions close.</p><p>Professional-competence material is dense, so understanding beats memorising. Each answer is explained, and the built-in <strong>AI tutor</strong> can explain it again in different words. Text-to-speech and multi-language support are there if Swedish legal vocabulary slows you down, although the exam itself is in Swedish.</p><p>Which categories are available changes over time. The app lists Taxiförarlegitimation, Yrkeskunnande and B-körkort among its category areas; please check the app for the current goods and bus content and plan details before you subscribe.</p>",
    },
    {
      heading: "Plan your studies",
      html:
        "<p>A simple plan works best: take a first practice session to see your baseline, spend a few weeks on your weakest categories, and then run longer timed sessions as the exam gets closer. The analytics dashboard keeps a complete history with detailed reviews, so you can see whether you are improving or just repeating the same mistakes.</p><p>If you manage drivers as well as vehicles, you may also want to read our page for <a href=\"/for/taxi-companies/\">taxi companies and fleet owners</a>, and the <a href=\"/blog/\">blog</a> for guides on the licence process in Sweden.</p><p>When you feel prepared, book your exam through Trafikverket. Keep in mind that the app is a study aid: it does not replace the official regulations, and you should always confirm the requirements with Transportstyrelsen.</p>",
    },
  ],
  faq: [
    { q: "Who needs yrkeskunnande for goods or bus transport?", aHtml: "A company with a permit for commercial goods or passenger transport must name a trafikansvarig, and that person must show professional competence by passing a written exam arranged by Trafikverket." },
    { q: "Can competence from another EU country be used?", aHtml: "According to Transportstyrelsen, competence obtained in another EU member state can be accepted when a certificate is sent to Transportstyrelsen. Check their site for the current procedure." },
    { q: "How many questions are on the exam?", aHtml: "We do not state a number here because the structure can change. Check the current exam description at Trafikverket." },
    { q: "Does Drive Test cover goods and bus exams?", aHtml: "Drive Test lists Yrkeskunnande among its category areas. Check the app for the exact goods and bus content included before you subscribe." },
    { q: "Is the exam taken in Swedish?", aHtml: "Yes, Swedish exams are in Swedish. Drive Test has multi-language support and text-to-speech to help your preparation." },
  ],
  related: ["exams/taxi-company", "for/taxi-companies", "exams/driving-licence", "compare/drive-test-vs-books"],
  ctaTitle: "Plan your yrkeskunnande studies",
  ctaText: "Download Drive Test and try the free categories to see how the practice and explanations work.",
};

const sv: LandingPage = {
  slug: "exams/goods-and-bus",
  kind: "exam",
  metaTitle: "Yrkeskunnande gods och buss: öva i appen | Drive Test",
  metaDescription:
    "Förbered dig för provet i yrkeskunnande för godstrafik och persontrafik (buss) i Sverige med övningsfrågor och förklaringar i Drive Test-appen.",
  eyebrow: "Prov · Yrkeskunnande gods & buss",
  title: "Yrkeskunnande gods och buss",
  titleAccent: "förbered dig inför provet",
  lede:
    "Ett åkeri eller bussföretag i Sverige måste ha en trafikansvarig med styrkt yrkeskunnande. Drive Test stödjer din förberedelse inför yrkeskunnande-provet för godstrafik och persontrafik med provliknande övning och tydliga förklaringar.",
  stats: [
    { value: "3", label: "Studielägen: Övning, Anpassat och Granska" },
    { value: "3", label: "Plattformar: iOS, Android och webben" },
    { value: "Gratis", label: "Gratis kategorier att prova innan du prenumererar" },
  ],
  problems: [
    { icon: "book", title: "Breda ämnesområden", text: "Regler, företagsekonomi, tekniska normer och trafiksäkerhet ska läras in tillsammans." },
    { icon: "clock", title: "Plugg vid sidan av heltidsjobbet", text: "Åkare och chefer har sällan långa studiepass, så korta fokuserade pass är viktiga." },
    { icon: "alert", title: "Oklart om du är redo", text: "Bara läsning ger ingen signal om du faktiskt skulle klara det skriftliga provet." },
  ],
  solutions: [
    { icon: "phone", title: "Korta pass var som helst", text: "Öva i mobilen mellan uppdragen. I Anpassat läge ställer du in provets längd och timer." },
    { icon: "brain", title: "Förklaringar som lär ut", text: "Förstå resonemanget bakom varje svar, med AI-tutor när du behöver en annan vinkel." },
    { icon: "chart", title: "Mätbara framsteg", text: "Diagram och kategoriuppdelning visar var du ska lägga fokus." },
  ],
  sections: [
    {
      heading: "Yrkeskunnande för godstrafik och persontrafik",
      html:
        "<p>Enligt EU-reglerna måste ett företag med tillstånd för yrkesmässig gods- eller persontrafik utse en <strong>trafikansvarig</strong> som faktiskt och fortlöpande leder transportverksamheten. Enligt Transportstyrelsen ska personen visa <strong>yrkeskunnande</strong> genom ett godkänt skriftligt prov som Trafikverket anordnar. Kompetens från ett annat EU-land kan också godtas när ett intyg skickas till Transportstyrelsen.</p><p>Provets uppbyggnad, antal frågor och provtid kan ändras av myndigheterna, så vi anger inga siffror här som du bör kontrollera själv. Läs den aktuella provbeskrivningen på <strong>trafikverket.se</strong> och kraven för trafikansvarig på <strong>transportstyrelsen.se</strong> innan du bokar.</p><p>Samma kompetensidé gäller taxiföretag, där provet har fyra delprov. Är det din väg, läs om <a href=\"/sv/exams/taxi-company/\">yrkeskunnande taxi</a>.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
    {
      heading: "Öva på provliknande frågor",
      html:
        "<p>Drive Test bygger på provliknande frågor med förklaringar. I <strong>Övning</strong> lär du dig område för område, i <strong>Anpassat</strong> styr du provets längd, timer och rättning, och i <strong>Granska</strong> går du tillbaka till det du missade. <strong>Bokmärken</strong> håller svåra frågor nära.</p><p>Material om yrkeskunnande är tätt, så förståelse slår utantillinlärning. Varje svar förklaras, och den inbyggda <strong>AI-tutorn</strong> kan förklara det igen med andra ord. Text-till-tal och flerspråkigt stöd finns om den svenska juridiska vokabulären bromsar dig, även om själva provet är på svenska.</p><p>Vilka kategorier som finns kan förändras över tid. Appen listar Taxiförarlegitimation, Yrkeskunnande och B-körkort bland sina kategoriområden. Kontrollera i appen vilket innehåll för gods och buss som finns och vad planen omfattar innan du prenumererar.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
    {
      heading: "Planera dina studier",
      html:
        "<p>En enkel plan fungerar bäst: gör ett första övningspass för att se var du står, lägg några veckor på dina svagaste kategorier och kör sedan längre tidsatta pass när provet närmar sig. Statistikvyn sparar hela historiken med detaljerade genomgångar, så du ser om du blir bättre eller bara upprepar samma misstag.</p><p>Ansvarar du för både förare och fordon kan du också läsa vår sida för <a href=\"/sv/for/taxi-companies/\">taxiföretag och åkare</a>, och <a href=\"/sv/blog/\">bloggen</a> för guider om legitimationsprocessen i Sverige.</p><p>När du känner dig förberedd bokar du provet via Trafikverket. Tänk på att appen är ett studiestöd: den ersätter inte de officiella reglerna, och du bör alltid bekräfta kraven med Transportstyrelsen.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Vem behöver yrkeskunnande för gods- eller busstrafik?", aHtml: "Ett företag med tillstånd för yrkesmässig gods- eller persontrafik måste utse en trafikansvarig, och den personen ska visa yrkeskunnande genom ett godkänt skriftligt prov som Trafikverket anordnar." },
    { q: "Kan kompetens från ett annat EU-land användas?", aHtml: "Enligt Transportstyrelsen kan kompetens från ett annat EU-land godtas när ett intyg skickas till Transportstyrelsen. Kontrollera deras webbplats för aktuellt förfarande." },
    { q: "Hur många frågor är det på provet?", aHtml: "Vi anger inget antal här eftersom uppbyggnaden kan ändras. Kontrollera den aktuella provbeskrivningen hos Trafikverket." },
    { q: "Täcker Drive Test prov för gods och buss?", aHtml: "Drive Test listar Yrkeskunnande bland sina kategoriområden. Kontrollera i appen exakt vilket innehåll för gods och buss som ingår innan du prenumererar." },
    { q: "Är provet på svenska?", aHtml: "Ja, proven hålls på svenska. Drive Test har flerspråkigt stöd och text-till-tal som hjälper din förberedelse." },
  ],
  related: ["exams/taxi-company", "for/taxi-companies", "exams/driving-licence", "compare/drive-test-vs-books"],
  ctaTitle: "Planera dina studier för yrkeskunnande",
  ctaText: "Ladda ned Drive Test och prova de gratis kategorierna för att se hur övningen och förklaringarna fungerar.",
};

export const examGoodsAndBus = { en, sv };
