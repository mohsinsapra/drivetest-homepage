import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "for/new-taxi-drivers",
  kind: "audience",
  metaTitle: "Become a Taxi Driver in Sweden: Exam Prep | Drive Test",
  metaDescription:
    "Want to become a taxi driver in Sweden? See the steps to a taxiförarlegitimation and prepare for the theory exams with practice questions in Drive Test.",
  eyebrow: "For new taxi drivers",
  title: "Become a taxi driver in Sweden",
  titleAccent: "step by step",
  lede:
    "Do you want to work as a taxi driver in Sweden? You need a taxiförarlegitimation, and getting one takes several steps. Drive Test helps with the step you control yourself: preparing for the theory exams.",
  stats: [
    { value: "3", label: "Study modes to fit your day" },
    { value: "2", label: "Platforms: iOS and Android" },
    { value: "Free", label: "Free categories to start with" },
  ],
  problems: [
    { icon: "alert", title: "A process with many steps", text: "Medical certificate, exams, driving test and application all have their own rules and timing." },
    { icon: "book", title: "Where to start studying?", text: "New drivers often do not know what the exams cover or how to turn the material into a study routine." },
    { icon: "money", title: "Fees add up", text: "Each exam and the application carry a fee, so you want to be prepared before you book." },
  ],
  solutions: [
    { icon: "check", title: "A clear route", text: "Our taxi licence guide lays out the requirements and steps in order." },
    { icon: "target", title: "Practice that fits the exams", text: "Exam-style questions for the taxiförarlegitimation kunskapsprov, with explanations." },
    { icon: "chart", title: "Know when to book", text: "Analytics show your readiness per category so you book when you are prepared." },
  ],
  sections: [
    {
      heading: "How to get a taxiförarlegitimation",
      html:
        "<p>To work as a taxi driver in Sweden you need a <strong>taxiförarlegitimation</strong> from Transportstyrelsen. Typical requirements include a minimum age, a B licence held for a number of years (or a D licence), medical fitness, suitability for the profession and passing the exams. The exact conditions and fees change over time, so confirm them with Transportstyrelsen and Trafikverket.</p><p>In practice the steps are: gather your documents, pass the theory exams and the driving test at Trafikverket, get a medical certificate (<em>läkarintyg</em>) and apply to Transportstyrelsen. Our <a href=\"/taxi-licence-guide/\">complete taxi licence guide</a> explains each step, including costs and tips on scheduling.</p><p>According to Trafikverket, the theory test has two parts, Säkerhet och beteende and Lagstiftning, and both must be passed within six months of your first passed part. The exams are in Swedish. Book the driving test early, since the number of time slots is limited and waiting times can be long.</p>",
    },
    {
      heading: "Plan your studies",
      html:
        "<p>Most new drivers study alongside a job or family. Short daily sessions beat occasional marathons. Open Drive Test in <strong>Practice</strong> mode for twenty minutes on the bus, review your wrong answers in <strong>Review</strong> mode, and use <strong>Custom</strong> mode with a timer as the exam approaches.</p><p>Each question has an explanation, so you understand why an answer is right. When it still does not click, ask the <strong>AI tutor</strong>. <strong>Bookmark</strong> the questions you find hard and revisit them until they feel easy.</p><p>The dashboard tracks activity, category results and your full test history. That makes it easy to see when you are consistently doing well in every area. Then you can book the exams with confidence rather than hope.</p><p>Whatever route you choose, check current rules and fees with Trafikverket and Transportstyrelsen, keep your study sessions short and regular, and review your mistakes the same day while they are fresh.</p>",
    },
    {
      heading: "After the licence",
      html:
        "<p>Once you have your legitimation, you can start working for a taxi company. Understanding how pay works is part of the job. Many drivers receive an OB supplement for evenings, nights and weekends, and our free <a href=\"/ob-taxi-sweden/\">OB calculator</a> reads your rest-time report so you can check your hours and pay.</p><p>Some drivers later want to run their own business. That requires a different qualification, <strong>yrkeskunnande</strong>, for the taxi company's traffic permit; see the <a href=\"/exams/taxi-company/\">yrkeskunnande taxi</a> page.</p><p>If Swedish is not your first language, read the page for <a href=\"/for/international-drivers/\">international drivers</a> to see how multi-language support and text-to-speech can help you. For further reading, the <a href=\"/blog/\">blog</a> has guides on exams and licences.</p><p>Whatever route you choose, check current rules and fees with Trafikverket and Transportstyrelsen, keep your study sessions short and regular, and review your mistakes the same day while they are fresh.</p>",
    },
  ],
  faq: [
    { q: "How do I become a taxi driver in Sweden?", aHtml: "You apply for a taxiförarlegitimation from Transportstyrelsen after meeting the requirements, which include passing the exams at Trafikverket and having a medical certificate. See our <a href=\"/taxi-licence-guide/\">step-by-step guide</a>." },
    { q: "How long does it take to get a taxi licence in Sweden?", aHtml: "Our guide says the process usually takes around two months, but that depends on exam availability, your preparation and processing times." },
    { q: "Do I need a Swedish driving licence?", aHtml: "You need a B licence held for the required period or a D licence. If your licence is not Swedish, you may have to include a certificate from the issuing country. Check Transportstyrelsen for the current rules." },
    { q: "Can I practise for free?", aHtml: "Yes, Drive Test has free categories you can explore before subscribing. Check the app for current plan details." },
    { q: "Are the taxi exams in English?", aHtml: "No, they are in Swedish. Use multi-language support and text-to-speech in the app to prepare." },
  ],
  related: ["exams/taxi-licence", "for/international-drivers", "exams/taxi-company", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Start preparing for the taxi licence",
  ctaText: "Download Drive Test and start with the free categories.",
};

const sv: LandingPage = {
  slug: "for/new-taxi-drivers",
  kind: "audience",
  metaTitle: "Bli taxiförare i Sverige: plugga provet | Drive Test",
  metaDescription:
    "Vill du bli taxiförare i Sverige? Se stegen till taxiförarlegitimation och förbered dig för teoriproven med övningsfrågor i Drive Test-appen.",
  eyebrow: "För nya taxiförare",
  title: "Bli taxiförare i Sverige",
  titleAccent: "steg för steg",
  lede:
    "Vill du arbeta som taxiförare i Sverige? Du behöver en taxiförarlegitimation, och vägen dit har flera steg. Drive Test hjälper dig med det steg du styr själv: att förbereda dig inför teoriproven.",
  stats: [
    { value: "3", label: "Studielägen som passar din vardag" },
    { value: "2", label: "Plattformar: iOS och Android" },
    { value: "Gratis", label: "Gratis kategorier att börja med" },
  ],
  problems: [
    { icon: "alert", title: "En process med många steg", text: "Läkarintyg, prov, körprov och ansökan har alla sina egna regler och tider." },
    { icon: "book", title: "Var ska man börja plugga?", text: "Nya förare vet ofta inte vad proven omfattar eller hur de gör materialet till en studierutin." },
    { icon: "money", title: "Avgifterna växer", text: "Varje prov och ansökan har en avgift, så du vill vara förberedd innan du bokar." },
  ],
  solutions: [
    { icon: "check", title: "En tydlig väg", text: "Vår guide till taxiförarlegitimation går igenom krav och steg i ordning." },
    { icon: "target", title: "Övning som passar proven", text: "Provliknande frågor för kunskapsprovet för taxiförarlegitimation, med förklaringar." },
    { icon: "chart", title: "Vet när du ska boka", text: "Statistiken visar din beredskap per kategori så att du bokar när du är redo." },
  ],
  sections: [
    {
      heading: "Så får du taxiförarlegitimation",
      html:
        "<p>För att jobba som taxiförare i Sverige behöver du en <strong>taxiförarlegitimation</strong> från Transportstyrelsen. Vanliga krav är en lägsta ålder, B-körkort under ett antal år (eller D-körkort), medicinsk lämplighet, lämplighet för yrket och godkända prov. De exakta villkoren och avgifterna ändras över tid, så bekräfta dem hos Transportstyrelsen och Trafikverket.</p><p>I praktiken är stegen: samla dina dokument, klara teoriproven och körprovet hos Trafikverket, skaffa ett läkarintyg och ansök hos Transportstyrelsen. Vår <a href=\"/sv/taxi-licence-guide/\">kompletta guide till taxiförarlegitimation</a> förklarar varje steg, inklusive kostnader och schemaläggningstips.</p><p>Enligt Trafikverket har teoriprovet två delprov, Säkerhet och beteende samt Lagstiftning, och båda ska vara godkända inom sex månader från ditt första godkända delprov. Proven är på svenska. Boka körprovet i god tid, eftersom antalet tider är begränsat och väntetiderna kan vara långa.</p>",
    },
    {
      heading: "Planera dina studier",
      html:
        "<p>De flesta nya förare pluggar vid sidan av jobb eller familj. Korta dagliga pass slår enstaka maratonpass. Öppna Drive Test i läget <strong>Övning</strong> i tjugo minuter på bussen, gå igenom felsvaren i <strong>Granska</strong> och använd <strong>Anpassat</strong> med timer när provet närmar sig.</p><p>Varje fråga har en förklaring, så du förstår varför ett svar är rätt. När det ändå inte klickar kan du fråga <strong>AI-tutorn</strong>. <strong>Bokmärk</strong> frågor du tycker är svåra och återvänd tills de känns enkla.</p><p>Översikten följer din aktivitet, dina resultat per kategori och hela din provhistorik. Då är det lätt att se när du konsekvent klarar dig bra inom alla områden. Då kan du boka proven med självförtroende i stället för hopp.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
    {
      heading: "Efter legitimationen",
      html:
        "<p>När du har din legitimation kan du börja jobba hos ett taxibolag. Att förstå hur lönen fungerar är en del av jobbet. Många förare får OB-tillägg för kvällar, nätter och helger, och vår kostnadsfria <a href=\"/sv/ob-taxi-sweden/\">OB-kalkylator</a> läser din vilotidsrapport så att du kan kontrollera tid och lön.</p><p>Vissa förare vill senare driva eget. Då krävs en annan kompetens, <strong>yrkeskunnande</strong>, för taxiföretagets trafiktillstånd; läs sidan om <a href=\"/sv/exams/taxi-company/\">yrkeskunnande taxi</a>.</p><p>Om svenska inte är ditt förstaspråk, läs sidan för <a href=\"/sv/for/international-drivers/\">förare med annat modersmål</a> och se hur flerspråkigt stöd och text-till-tal kan hjälpa dig. Mer läsning hittar du i <a href=\"/sv/blog/\">bloggen</a> med guider om prov och legitimationer.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Hur blir jag taxiförare i Sverige?", aHtml: "Du ansöker om taxiförarlegitimation hos Transportstyrelsen när du uppfyller kraven, bland annat godkända prov hos Trafikverket och ett läkarintyg. Se vår <a href=\"/sv/taxi-licence-guide/\">steg-för-steg-guide</a>." },
    { q: "Hur lång tid tar det att få taxiförarlegitimation?", aHtml: "Enligt vår guide tar processen vanligtvis cirka två månader, men det beror på tillgången till provtider, din förberedelse och handläggningstider." },
    { q: "Måste jag ha svenskt körkort?", aHtml: "Du behöver B-körkort under den tid som krävs eller D-körkort. Är körkortet inte svenskt kan du behöva bifoga ett intyg från utfärdarlandet. Kontrollera gällande regler hos Transportstyrelsen." },
    { q: "Kan jag öva gratis?", aHtml: "Ja, Drive Test har gratis kategorier som du kan utforska innan du prenumererar. Se aktuella plandetaljer i appen." },
    { q: "Är taxiproven på engelska?", aHtml: "Nej, de är på svenska. Använd flerspråkigt stöd och text-till-tal i appen för att förbereda dig." },
  ],
  related: ["exams/taxi-licence", "for/international-drivers", "exams/taxi-company", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Börja förbereda dig för taxiförarlegitimation",
  ctaText: "Ladda ned Drive Test och börja med de gratis kategorierna.",
};

export const audienceNewTaxiDrivers = { en, sv };
