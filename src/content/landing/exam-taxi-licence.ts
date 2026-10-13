import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "exams/taxi-licence",
  kind: "exam",
  metaTitle: "Taxi Licence Test Practice Sweden | Drive Test",
  metaDescription:
    "Practise for the Swedish taxi licence test (taxiförarlegitimation) with exam-style questions, explanations, an AI tutor and text-to-speech in Drive Test.",
  eyebrow: "Exam · Taxiförarlegitimation",
  title: "Prepare for the taxi licence test in Sweden",
  titleAccent: "step by step",
  lede:
    "Here you practise for the taxi licence test in Sweden. You get exam-style questions for the taxiförarlegitimation kunskapsprov, an explanation for every answer and an overview of your results before you book the exam at Trafikverket.",
  stats: [
    { value: "3", label: "Study modes: Practice, Custom and Review" },
    { value: "3", label: "Platforms: iOS, Android and web" },
    { value: "Free", label: "Free categories to try before you subscribe" },
  ],
  problems: [
    { icon: "book", title: "Outdated material", text: "Printed books and PDF compendia tell you the rules but never test whether you can apply them under time pressure." },
    { icon: "language", title: "The exam is in Swedish", text: "If Swedish is not your first language, complex legal wording can cost you points you actually know the answers to." },
    { icon: "alert", title: "You do not know where you stand", text: "Without feedback you cannot tell which topics are weak, so you end up re-reading what you already know." },
  ],
  solutions: [
    { icon: "target", title: "Exam-style practice", text: "Thousands of official-style questions across the taxi categories, in Practice, Custom and Review modes." },
    { icon: "brain", title: "Explanations and an AI tutor", text: "Every answer is explained, and you can ask the built-in AI tutor when a question is unclear." },
    { icon: "chart", title: "Follow your progress", text: "Category breakdowns and performance charts show exactly what to study next." },
  ],
  sections: [
    {
      heading: "How the taxi licence test works in Sweden",
      html:
        "<p>To get a <strong>taxiförarlegitimation</strong> you apply to Transportstyrelsen, but the exams are taken at Trafikverket. According to Trafikverket, the theory test (<em>teoriprov</em>) for the taxi licence consists of two parts, <strong>Säkerhet och beteende</strong> (safety and behaviour) and <strong>Lagstiftning</strong> (legislation), which together measure your knowledge in ten areas.</p><ul><li>Part 1, Säkerhet och beteende: 70 questions, of which 5 are trial questions that do not count. You need at least 48 correct answers within 50 minutes.</li><li>Part 2, Lagstiftning: 50 questions, of which 4 are trial questions. You need at least 34 correct answers within 50 minutes.</li><li>You choose which part to take first, and both must be passed within six months of your first passed part.</li></ul><p>Besides the theory test there is a practical driving test, and the exams are held in Swedish. Rules, fees and requirements can change, so always confirm them with Trafikverket and Transportstyrelsen. Our <a href=\"/taxi-licence-guide/\">taxi licence guide</a> walks you through the whole application process step by step.</p>",
    },
    {
      heading: "Prepare for the kunskapsprov",
      html:
        "<p>Drive Test replaces passive reading with active practice. Choose <strong>Practice</strong> mode to learn at your own pace, <strong>Custom</strong> mode to set the test length, timer and marking to match your goal, and <strong>Review</strong> mode to revisit the questions you got wrong. Questions you find tricky can be bookmarked and revisited later.</p><p>Each question comes with a <strong>deep-dive explanation</strong>, so you learn why an answer is correct rather than memorising it. If an explanation is still unclear, ask the <strong>AI tutor</strong>. Because understanding the reasoning is what carries over to new questions in the real exam, this is where most of your study time pays off.</p><p>The analytics dashboard shows your results per category and your activity over time. When the weak areas turn into strong ones, that is your signal that you are ready to book. New to the process? Read the <a href=\"/blog/\">blog</a> for tips and walk-throughs.</p>",
    },
    {
      heading: "Study in your own language",
      html:
        "<p>A large share of Sweden's taxi drivers have another mother tongue than Swedish. Drive Test has <strong>multi-language support and full text-to-speech</strong>, so you can listen to questions and answers while you read. That helps you understand what a question is really asking, which matters when the wording is legal or technical.</p><p>Practise on your phone on the bus, between shifts or at home. The app is available on iOS, Android and as a web app, and your progress follows your account. Offline access to your test history is included, so a weak connection does not have to stop you from reviewing.</p><p>Once your theory is solid, the next steps are the medical certificate, the driving test and the application to Transportstyrelsen. If you also plan to run a taxi company, see our page on the <a href=\"/exams/taxi-company/\">yrkeskunnande taxi exam</a>.</p>",
    },
  ],
  faq: [
    { q: "How many questions are on the taxi licence theory test?", aHtml: "According to Trafikverket, the theory test has two parts: Säkerhet och beteende with 70 questions (5 are trial questions, 48 correct needed, 50 minutes) and Lagstiftning with 50 questions (4 trial questions, 34 correct needed, 50 minutes). Check Trafikverket for the latest figures." },
    { q: "Is the taxi licence test in English?", aHtml: "No. The exams are held in Swedish. Drive Test offers multi-language support and text-to-speech to help you understand the material while you prepare." },
    { q: "How long do I have to pass both theory parts?", aHtml: "Both parts must be passed within six months of your first passed part, and you can choose which one to take first." },
    { q: "What is the difference between taxiförarlegitimation and yrkeskunnande?", aHtml: "The taxiförarlegitimation is the personal licence a driver needs, issued by Transportstyrelsen. Yrkeskunnande is the professional competence needed for a taxi company's traffic permit. See <a href=\"/exams/taxi-company/\">yrkeskunnande taxi</a>." },
    { q: "Is there a free way to try Drive Test?", aHtml: "Yes. The app has free categories you can explore before subscribing. Confirm current prices and included categories in the app before purchase." },
  ],
  related: ["exams/taxi-company", "for/new-taxi-drivers", "for/international-drivers", "compare/drive-test-vs-books"],
  ctaTitle: "Practise for the taxi licence test",
  ctaText: "Download Drive Test on iOS or Android, or use it in your browser. You can try the free categories first.",
};

const sv: LandingPage = {
  slug: "exams/taxi-licence",
  kind: "exam",
  metaTitle: "Taxiförarlegitimation prov: öva i appen | Drive Test",
  metaDescription:
    "Öva inför kunskapsprovet för taxiförarlegitimation med provliknande frågor, förklaringar, AI-tutor och text-till-tal i Drive Test-appen. Prova gratis.",
  eyebrow: "Prov · Taxiförarlegitimation",
  title: "Förbered dig inför provet för taxiförarlegitimation",
  titleAccent: "steg för steg",
  lede:
    "Hos oss övar du inför taxiförarlegitimation prov. Du får provliknande frågor inför kunskapsprovet, en förklaring till varje svar och en översikt över dina resultat innan du bokar provet hos Trafikverket.",
  stats: [
    { value: "3", label: "Studielägen: Övning, Anpassat och Granska" },
    { value: "3", label: "Plattformar: iOS, Android och webben" },
    { value: "Gratis", label: "Gratis kategorier att prova innan du prenumererar" },
  ],
  problems: [
    { icon: "book", title: "Föråldrat material", text: "Böcker och pdf-kompendier berättar reglerna men testar aldrig om du kan använda dem under tidspress." },
    { icon: "language", title: "Provet är på svenska", text: "Om svenska inte är ditt förstaspråk kan juridiska formuleringar kosta poäng på frågor du egentligen kan." },
    { icon: "alert", title: "Du vet inte var du står", text: "Utan återkoppling vet du inte vilka områden som är svaga och läser om sådant du redan kan." },
  ],
  solutions: [
    { icon: "target", title: "Provliknande övning", text: "Tusentals frågor i officiell stil inom taxikategorierna, i lägena Övning, Anpassat och Granska." },
    { icon: "brain", title: "Förklaringar och AI-tutor", text: "Varje svar förklaras, och du kan fråga den inbyggda AI-tutorn när en fråga är oklar." },
    { icon: "chart", title: "Följ dina framsteg", text: "Uppdelning per kategori och diagram visar exakt vad du ska plugga härnäst." },
  ],
  sections: [
    {
      heading: "Så fungerar kunskapsprovet för taxiförarlegitimation",
      html:
        "<p>Du ansöker om <strong>taxiförarlegitimation</strong> hos Transportstyrelsen, men proven görs hos Trafikverket. Enligt Trafikverket består teoriprovet för taxiförarlegitimation av två delprov, <strong>Säkerhet och beteende</strong> och <strong>Lagstiftning</strong>, som tillsammans mäter dina kunskaper inom tio områden.</p><ul><li>Delprov 1, Säkerhet och beteende: 70 frågor, varav 5 är testfrågor som inte räknas. Du behöver minst 48 rätt på 50 minuter.</li><li>Delprov 2, Lagstiftning: 50 frågor, varav 4 är testfrågor. Du behöver minst 34 rätt på 50 minuter.</li><li>Du väljer själv vilket delprov du tar först, och båda ska vara godkända inom sex månader från ditt första godkända delprov.</li></ul><p>Utöver teoriprovet finns ett praktiskt körprov, och proven hålls på svenska. Regler, avgifter och krav kan ändras, så kontrollera alltid hos Trafikverket och Transportstyrelsen. Vår <a href=\"/sv/taxi-licence-guide/\">guide till taxiförarlegitimation</a> går igenom hela ansökningsprocessen steg för steg.</p>",
    },
    {
      heading: "Förbered dig inför kunskapsprovet",
      html:
        "<p>Drive Test ersätter passiv läsning med aktiv övning. Välj <strong>Övning</strong> för att lära dig i din egen takt, <strong>Anpassat</strong> för att ställa in antal frågor, timer och rättning efter ditt mål, och <strong>Granska</strong> för att gå igenom de frågor du svarade fel på. Svåra frågor kan du bokmärka och återvända till.</p><p>Varje fråga har en <strong>djupgående förklaring</strong>, så att du förstår varför ett svar är rätt i stället för att lära dig det utantill. Är en förklaring fortfarande oklar kan du fråga <strong>AI-tutorn</strong>. Det är förståelsen som hjälper dig på nya frågor i det riktiga provet, och det är där studietiden lönar sig mest.</p><p>Statistikvyn visar dina resultat per kategori och din aktivitet över tid. När de svaga områdena blivit starka är det ett tecken på att du kan boka provet. Ny i processen? Läs <a href=\"/sv/blog/\">bloggen</a> för tips och genomgångar.</p>",
    },
    {
      heading: "Studera på ditt eget språk",
      html:
        "<p>Många taxiförare i Sverige har ett annat modersmål än svenska. Drive Test har <strong>flerspråkigt stöd och fullt text-till-tal</strong>, så att du kan lyssna på frågor och svar medan du läser. Det gör det lättare att förstå vad en fråga egentligen handlar om, särskilt när formuleringarna är juridiska eller tekniska.</p><p>Öva i mobilen på bussen, mellan passen eller hemma. Appen finns för iOS och Android och som webbapp, och dina framsteg följer ditt konto. Du har även offlineåtkomst till din provhistorik, så en svag uppkoppling behöver inte stoppa dig från att repetera.</p><p>När teorin sitter är nästa steg läkarintyg, körprov och ansökan till Transportstyrelsen. Planerar du också att driva taxiföretag, läs om <a href=\"/sv/exams/taxi-company/\">yrkeskunnande taxi</a>.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Hur många frågor är det på kunskapsprovet för taxiförarlegitimation?", aHtml: "Enligt Trafikverket har teoriprovet två delprov: Säkerhet och beteende med 70 frågor (5 testfrågor, 48 rätt krävs, 50 minuter) och Lagstiftning med 50 frågor (4 testfrågor, 34 rätt krävs, 50 minuter). Kontrollera Trafikverket för aktuella uppgifter." },
    { q: "Går taxiprovet att göra på engelska?", aHtml: "Nej. Proven hålls på svenska. Drive Test har flerspråkigt stöd och text-till-tal som hjälper dig att förstå materialet när du förbereder dig." },
    { q: "Hur lång tid har jag på mig att klara båda delproven?", aHtml: "Båda delproven måste vara godkända inom sex månader från ditt första godkända delprov, och du väljer själv vilket du tar först." },
    { q: "Vad är skillnaden mellan taxiförarlegitimation och yrkeskunnande?", aHtml: "Taxiförarlegitimationen är den personliga legitimation som en förare behöver och som utfärdas av Transportstyrelsen. Yrkeskunnande är den yrkesmässiga kompetens som krävs för ett taxiföretags trafiktillstånd. Läs mer om <a href=\"/sv/exams/taxi-company/\">yrkeskunnande taxi</a>." },
    { q: "Kan jag prova Drive Test gratis?", aHtml: "Ja. Appen har gratis kategorier som du kan utforska innan du prenumererar. Bekräfta aktuella priser och vilka kategorier som ingår i appen före köp." },
  ],
  related: ["exams/taxi-company", "for/new-taxi-drivers", "for/international-drivers", "compare/drive-test-vs-books"],
  ctaTitle: "Öva inför taxiprovet",
  ctaText: "Ladda ned Drive Test till iOS eller Android, eller använd webbappen. Du kan prova de gratis kategorierna först.",
};

export const examTaxiLicence = { en, sv };
