import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "compare",
  kind: "compare",
  metaTitle: "Best Way to Study for the Taxi Exam | Drive Test",
  metaDescription:
    "Compare ways to study for the Swedish taxi and driving exams: books, free online tests, taxi schools and an app. A fair look at what each option does well.",
  eyebrow: "Compare",
  title: "How to study for the taxi exam",
  titleAccent: "Compare the options",
  lede:
    "There is no single right way to prepare for the taxiförarlegitimation or yrkeskunnande exams. Books, free online tests, classroom courses and apps each have strengths. On this page you can see how Drive Test compares, so you can choose what suits you.",
  problems: [
    { icon: "alert", title: "Too many options", text: "Books, courses, websites and apps all promise to get you through, and it is hard to tell what you actually need." },
    { icon: "money", title: "Cost and time", text: "Courses cost money and set dates, while free material can vary in quality and age." },
    { icon: "language", title: "Language barriers", text: "If Swedish is a second language, study methods that only offer plain Swedish text slow you down." },
  ],
  solutions: [
    { icon: "check", title: "Use the right tool for the job", text: "Many people combine methods, such as a course for structure and an app for daily practice." },
    { icon: "target", title: "Practice with feedback", text: "Whatever you choose, make sure you test yourself and learn from mistakes." },
    { icon: "phone", title: "Fit it into your day", text: "The best method is the one you will actually use every day." },
  ],
  sections: [
    {
      heading: "What to consider when you prepare",
      html:
        "<p>Whichever route you take, good preparation for the Swedish taxi and transport exams has four things in common. First, it matches what the exam asks: <strong>the questions test understanding</strong> of rules and situations, not just recall. Second, it gives <strong>feedback</strong> after each answer so you learn from mistakes. Third, it shows <strong>progress</strong> so you know when you are ready. Fourth, it fits your <strong>language and schedule</strong>.</p><p>According to Trafikverket, the taxi licence theory test has two parts, Säkerhet och beteende and Lagstiftning, to be passed within six months of the first. The exams are in Swedish, and confirming current rules at Trafikverket and Transportstyrelsen is always wise. Our <a href=\"/taxi-licence-guide/\">taxi licence guide</a> gives an overview of the whole process.</p><p>Use the three comparisons below to see how Drive Test stacks up against common alternatives. We have tried to be fair: each has real strengths, and we say where Drive Test is not the best fit.</p>",
    },
    {
      heading: "Four ways to study at a glance",
      html:
        "<p>The table summarises how the main methods differ in general terms. Individual books, courses and websites vary, so treat this as a guide rather than a rule.</p><ul><li><strong>Books and PDFs</strong> give depth and a reference to return to, but no automatic feedback. See <a href=\"/compare/drive-test-vs-books/\">Drive Test vs books</a>.</li><li><strong>Free online tests</strong> cost nothing and are good for a quick check, but quality, explanations and tracking vary. See <a href=\"/compare/drive-test-vs-free-online-tests/\">Drive Test vs free online tests</a>.</li><li><strong>Taxi schools and classroom courses</strong> offer a teacher and a fixed schedule, but cost more and need set times. See <a href=\"/compare/drive-test-vs-taxi-schools/\">Drive Test vs taxi schools</a>.</li><li><strong>An app like Drive Test</strong> offers exam-style practice, explanations, an AI tutor, text-to-speech and progress tracking on your phone, but it is a study aid, not a teacher.</li></ul><p>Many successful candidates mix methods. If you want a starting point, try the free categories in Drive Test and see how it feels.</p>",
    },
  ],
  comparison: {
    headers: ["", "Books / PDFs", "Free online tests", "Taxi schools", "Drive Test"],
    rows: [
      ["Instant feedback on answers", "No", "Varies", "Teacher feedback in class", "Yes, with explanations"],
      ["Progress tracking", "Self-managed", "Often limited", "Depends on the school", "Charts and history"],
      ["Study anywhere", "Yes", "Yes, with internet", "At set times and places", "iOS and Android"],
      ["Text-to-speech / multi-language", "No", "Varies", "Depends on the school", "Yes"],
      ["Personal teacher", "No", "No", "Yes", "AI tutor only"],
      ["Cost", "Book price", "Free", "Course fee", "Free categories, paid plans in app"],
    ],
  },
  faq: [
    { q: "What is the best way to study for the Swedish taxi exam?", aHtml: "A mix works well for many people: structure from a book or course, plus daily practice with exam-style questions and feedback. Choose what fits your language, budget and schedule." },
    { q: "Do I need a taxi school to pass?", aHtml: "Not necessarily. Many candidates self-study. A course can help if you want a teacher and structure. See <a href=\"/compare/drive-test-vs-taxi-schools/\">Drive Test vs taxi schools</a>." },
    { q: "Are free online tests enough?", aHtml: "They can be a useful start. Check how current they are and whether they explain answers. See <a href=\"/compare/drive-test-vs-free-online-tests/\">our comparison</a>." },
    { q: "Can I use Drive Test together with a book?", aHtml: "Yes. A book is a good reference and Drive Test gives you practice and feedback. See <a href=\"/compare/drive-test-vs-books/\">Drive Test vs books</a>." },
    { q: "Does Drive Test guarantee I will pass?", aHtml: "No. It is a study aid. Regular practice and understanding your mistakes give you the best chance, but we cannot guarantee results." },
  ],
  related: ["compare/drive-test-vs-books", "compare/drive-test-vs-free-online-tests", "compare/drive-test-vs-taxi-schools", "exams/taxi-licence"],
  ctaTitle: "Try the free categories",
  ctaText: "Download Drive Test and try the free categories to see if the app suits how you study.",
};

const sv: LandingPage = {
  slug: "compare",
  kind: "compare",
  metaTitle: "Bästa sättet att plugga taxiprovet | Drive Test",
  metaDescription:
    "Jämför sätt att plugga inför taxi- och körkortsproven i Sverige: böcker, gratis provsajter, taxiskolor och en app. En rättvis titt på alla alternativ.",
  eyebrow: "Jämför",
  title: "Så pluggar du inför taxiprovet",
  titleAccent: "Jämför alternativen",
  lede:
    "Det finns inget enda rätt sätt att förbereda sig för proven till taxiförarlegitimation eller yrkeskunnande. Böcker, gratis provsajter, klassrumskurser och appar har alla styrkor. Här kan du se hur Drive Test står sig, så att du kan välja det som passar dig.",
  problems: [
    { icon: "alert", title: "För många alternativ", text: "Böcker, kurser, sajter och appar lovar att få dig igenom, och det är svårt att veta vad du faktiskt behöver." },
    { icon: "money", title: "Kostnad och tid", text: "Kurser kostar pengar och har fasta datum, medan gratismaterial kan variera i kvalitet och ålder." },
    { icon: "language", title: "Språkbarriärer", text: "Om svenska är ett andraspråk bromsar studiemetoder som bara erbjuder vanlig svensk text." },
  ],
  solutions: [
    { icon: "check", title: "Rätt verktyg för rätt uppgift", text: "Många kombinerar metoder, till exempel en kurs för struktur och en app för daglig övning." },
    { icon: "target", title: "Övning med återkoppling", text: "Oavsett val: se till att du testar dig själv och lär dig av misstagen." },
    { icon: "phone", title: "Få in det i vardagen", text: "Den bästa metoden är den du faktiskt använder varje dag." },
  ],
  sections: [
    {
      heading: "Att tänka på när du förbereder dig",
      html:
        "<p>Vilken väg du än väljer har bra förberedelse för de svenska taxi- och transportproven fyra saker gemensamt. För det första matchar den vad provet frågar efter: <strong>frågorna testar förståelse</strong> av regler och situationer, inte bara minne. För det andra ger den <strong>återkoppling</strong> efter varje svar så att du lär dig av misstag. För det tredje visar den <strong>framsteg</strong> så att du vet när du är redo. För det fjärde passar den ditt <strong>språk och schema</strong>.</p><p>Enligt Trafikverket har teoriprovet för taxiförarlegitimation två delprov, Säkerhet och beteende samt Lagstiftning, som ska vara godkända inom sex månader från det första. Proven är på svenska, och det är alltid klokt att bekräfta gällande regler hos Trafikverket och Transportstyrelsen. Vår <a href=\"/sv/taxi-licence-guide/\">guide till taxiförarlegitimation</a> ger en överblick över hela processen.</p><p>Använd de tre jämförelserna nedan för att se hur Drive Test står sig mot vanliga alternativ. Vi har försökt vara rättvisa: alla har verkliga styrkor, och vi säger var Drive Test inte är bäst.</p>",
    },
    {
      heading: "Fyra sätt att plugga i korthet",
      html:
        "<p>Tabellen sammanfattar hur de huvudsakliga metoderna skiljer sig åt i stora drag. Enskilda böcker, kurser och sajter varierar, så se det som en vägledning snarare än en regel.</p><ul><li><strong>Böcker och pdf:er</strong> ger djup och ett uppslagsverk att återvända till, men ingen automatisk återkoppling. Se <a href=\"/sv/compare/drive-test-vs-books/\">Drive Test eller böcker</a>.</li><li><strong>Gratis provsajter</strong> kostar inget och är bra för en snabb koll, men kvalitet, förklaringar och uppföljning varierar. Se <a href=\"/sv/compare/drive-test-vs-free-online-tests/\">Drive Test eller gratis provsajter</a>.</li><li><strong>Taxiskolor och klassrumskurser</strong> ger en lärare och ett fast schema, men kostar mer och kräver bestämda tider. Se <a href=\"/sv/compare/drive-test-vs-taxi-schools/\">Drive Test eller taxiskola</a>.</li><li><strong>En app som Drive Test</strong> ger provliknande övning, förklaringar, AI-tutor, text-till-tal och framstegsuppföljning i mobilen, men är ett studiestöd, inte en lärare.</li></ul><p>Många som lyckas blandar metoder. Vill du ha en startpunkt, prova de gratis kategorierna i Drive Test och känn efter.</p>",
    },
  ],
  comparison: {
    headers: ["", "Böcker / pdf", "Gratis provsajter", "Taxiskolor", "Drive Test"],
    rows: [
      ["Direkt återkoppling på svar", "Nej", "Varierar", "Lärarens återkoppling i klassen", "Ja, med förklaringar"],
      ["Framstegsuppföljning", "Eget ansvar", "Ofta begränsad", "Beror på skolan", "Diagram och historik"],
      ["Plugga var som helst", "Ja", "Ja, med internet", "På bestämda tider och platser", "iOS och Android"],
      ["Text-till-tal / flerspråkigt", "Nej", "Varierar", "Beror på skolan", "Ja"],
      ["Personlig lärare", "Nej", "Nej", "Ja", "Endast AI-tutor"],
      ["Kostnad", "Bokpris", "Gratis", "Kursavgift", "Gratis kategorier, betalplaner i appen"],
    ],
  },
  faq: [
    { q: "Vad är det bästa sättet att plugga svenska taxiprovet?", aHtml: "En kombination fungerar bra för många: struktur från en bok eller kurs, plus daglig övning med provliknande frågor och återkoppling. Välj det som passar ditt språk, din budget och ditt schema." },
    { q: "Måste jag gå på taxiskola för att klara provet?", aHtml: "Inte nödvändigtvis. Många pluggar på egen hand. En kurs kan hjälpa om du vill ha lärare och struktur. Se <a href=\"/sv/compare/drive-test-vs-taxi-schools/\">Drive Test eller taxiskola</a>." },
    { q: "Räcker gratis provsajter?", aHtml: "De kan vara en bra start. Kontrollera hur aktuella de är och om de förklarar svaren. Se <a href=\"/sv/compare/drive-test-vs-free-online-tests/\">vår jämförelse</a>." },
    { q: "Kan jag använda Drive Test tillsammans med en bok?", aHtml: "Ja. En bok är ett bra uppslagsverk och Drive Test ger övning och återkoppling. Se <a href=\"/sv/compare/drive-test-vs-books/\">Drive Test eller böcker</a>." },
    { q: "Garanterar Drive Test att jag klarar provet?", aHtml: "Nej. Det är ett studiestöd. Regelbunden övning och förståelse för dina misstag ger bäst chans, men vi kan inte garantera resultat." },
  ],
  related: ["compare/drive-test-vs-books", "compare/drive-test-vs-free-online-tests", "compare/drive-test-vs-taxi-schools", "exams/taxi-licence"],
  ctaTitle: "Prova de gratis kategorierna",
  ctaText: "Ladda ned Drive Test och prova de gratis kategorierna för att se om appen passar hur du pluggar.",
};

export const compareHub = { en, sv };
