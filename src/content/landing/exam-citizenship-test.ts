import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "exams/citizenship-test",
  kind: "exam",
  metaTitle: "Swedish Citizenship Test Practice | Drive Test",
  metaDescription:
    "Practise for Sweden's medborgarskapsprov with 136 questions from the official study book Sverige i fokus, chapter tests and mock exams in the Drive Test app.",
  eyebrow: "Exam · Medborgarskapsprov",
  title: "Swedish citizenship test practice",
  titleAccent: "based on Sverige i fokus",
  lede:
    "Are you applying for Swedish citizenship? The medborgarskapsprov tests your knowledge of Swedish society. Drive Test's preparation module is built from UHR's official study book Sverige i fokus, with 136 practice questions across all 13 chapters.",
  stats: [
    { value: "136", label: "Practice questions" },
    { value: "13", label: "Chapters of Sverige i fokus covered" },
    { value: "2", label: "Platforms: iOS and Android" },
  ],
  problems: [
    { icon: "book", title: "A new test, little to compare with", text: "The society test is new, so there are few previous exams or reliable practice resources to study from." },
    { icon: "language", title: "Studying in a second language", text: "The study book and test are in Swedish, and dense text about institutions and history is slow to read." },
    { icon: "clock", title: "A lot is riding on it", text: "Citizenship is a long process, and the knowledge requirement is one step you do not want to repeat." },
  ],
  solutions: [
    { icon: "book", title: "Based on the official book", text: "Questions are built entirely from UHR's Sverige i fokus, the book the test is based on." },
    { icon: "check", title: "Chapter tests and mock exams", text: "Study chapter by chapter, then try full mock exams to check how you do across the whole book." },
    { icon: "phone", title: "Study anywhere", text: "Practise on your phone on the commute, with progress tracking per chapter." },
  ],
  sections: [
    {
      heading: "What is the medborgarskapsprov?",
      html:
        "<p>New Swedish citizenship rules came into force on <strong>6 June 2026</strong>, and they include a formal knowledge requirement. Applicants aged 16 to 66 generally have to show knowledge of the Swedish language and of Swedish society. The <strong>medborgarskapsprov</strong> in samhällskunskap (society knowledge) is run by the Swedish Council for Higher Education (UHR) and became available in August 2026, while the Swedish-language test is being introduced in stages.</p><p>The society test is based on UHR's study book <em>Sverige i fokus</em>, which covers 13 chapters including Sweden's democratic system. Exemptions exist, for example for people who meet the language requirement in other ways, so check Migrationsverket and UHR for your own situation. The details of question numbers, time limit and pass mark should be confirmed with UHR; we do not state figures that we could not verify.</p><p>Our full guide to the rules, years of residence and fees is on the <a href=\"/medborgarskapsprov/\">Swedish citizenship test article</a>.</p>",
    },
    {
      heading: "Practise in Drive Test",
      html:
        "<p>The Drive Test citizenship module has <strong>136 practice questions</strong> spread over all 13 chapters, chapter tests, full mock exams and the complete <em>Sverige i fokus</em> book in one app. That lets you read a chapter and test yourself on it straight away, which is a far more effective loop than reading the whole book first and testing later.</p><p>As in the rest of the app, you get explanations for the answers, bookmarks for tricky questions and analytics that show which chapters are strong and which need another pass. <strong>Text-to-speech and multi-language support</strong> can help you work through dense text about society, history and institutions.</p><p>Check the app for the exact way the citizenship module is offered and what is included in the free and paid plans before you subscribe. Drive Test is a study aid and does not replace official information from Migrationsverket and UHR.</p>",
    },
    {
      heading: "Plan your studies",
      html:
        "<ul><li><strong>Week by week.</strong> Take one or two chapters per week, reading first and practising right after.</li><li><strong>Repeat the misses.</strong> Use Review mode on the questions you got wrong until they stop appearing.</li><li><strong>Finish with mock exams.</strong> Sit a full mock a few days before the real test to get a feel for the pace.</li><li><strong>Keep it daily.</strong> Twenty focused minutes beat one long weekend session.</li></ul><p>If you are also working in Sweden, or considering a career such as taxi driving, read about <a href=\"/exams/taxi-licence/\">the taxi licence test</a> or browse the <a href=\"/blog/\">blog</a>.</p><p>Rules for citizenship, fees and processing times change, so always rely on Migrationsverket for the latest requirements. Our <a href=\"/medborgarskapsprov/\">citizenship guide</a> summarises what we know and when it was last updated.</p>",
    },
  ],
  faq: [
    { q: "Who has to take the Swedish citizenship test?", aHtml: "Applicants aged 16 to 66 generally have to show knowledge of Swedish and of Swedish society, with some exemptions. Check <a href=\"/medborgarskapsprov/\">our guide</a> and Migrationsverket for your case." },
    { q: "What is the citizenship test based on?", aHtml: "The society test is based on UHR's study book Sverige i fokus, which covers 13 chapters." },
    { q: "How many questions does Drive Test have for the citizenship test?", aHtml: "The preparation module has 136 practice questions across the 13 chapters, plus chapter tests and mock exams." },
    { q: "When did the citizenship test start?", aHtml: "The society knowledge test became available in August 2026. The Swedish-language test is being introduced in stages." },
    { q: "Is the test in Swedish?", aHtml: "The test and study book are in Swedish. Drive Test offers multi-language support and text-to-speech to help you study." },
  ],
  related: ["for/international-drivers", "exams/taxi-licence", "exams/driving-licence", "compare/drive-test-vs-books"],
  ctaTitle: "Prepare for the medborgarskapsprov",
  ctaText: "Download Drive Test and work through Sverige i fokus chapter by chapter with practice questions.",
};

const sv: LandingPage = {
  slug: "exams/citizenship-test",
  kind: "exam",
  metaTitle: "Medborgarskapsprov övningsprov i appen | Drive Test",
  metaDescription:
    "Öva inför medborgarskapsprovet med 136 övningsfrågor från studieboken Sverige i fokus, kapiteltest och provtentor. Medborgarskapsprov övningsprov i appen.",
  eyebrow: "Prov · Medborgarskapsprov",
  title: "Medborgarskapsprov: övningsprov",
  titleAccent: "baserat på Sverige i fokus",
  lede:
    "Ansöker du om svenskt medborgarskap? Medborgarskapsprovet testar dina kunskaper om det svenska samhället. Drive Tests förberedelsemodul är byggd på UHR:s officiella studiebok Sverige i fokus, med 136 övningsfrågor fördelade på alla 13 kapitel.",
  stats: [
    { value: "136", label: "Övningsfrågor" },
    { value: "13", label: "Kapitel i Sverige i fokus täcks" },
    { value: "2", label: "Plattformar: iOS och Android" },
  ],
  problems: [
    { icon: "book", title: "Nytt prov, lite att jämföra med", text: "Samhällsprovet är nytt, så det finns få tidigare prov och pålitliga övningsresurser att plugga på." },
    { icon: "language", title: "Plugga på ett andraspråk", text: "Studieboken och provet är på svenska, och tät text om institutioner och historia är långsam att läsa." },
    { icon: "clock", title: "Mycket står på spel", text: "Medborgarskap är en lång process, och kunskapskravet är ett steg du inte vill behöva göra om." },
  ],
  solutions: [
    { icon: "book", title: "Byggt på den officiella boken", text: "Frågorna är byggda helt utifrån UHR:s Sverige i fokus, boken som provet utgår från." },
    { icon: "check", title: "Kapiteltest och provtentor", text: "Plugga kapitel för kapitel och testa sedan hela provtentor för att se hur du klarar boken som helhet." },
    { icon: "phone", title: "Plugga var som helst", text: "Öva i mobilen på pendlingen, med framstegsuppföljning per kapitel." },
  ],
  sections: [
    {
      heading: "Vad är medborgarskapsprovet?",
      html:
        "<p>Nya regler för svenskt medborgarskap började gälla den <strong>6 juni 2026</strong>, och de innehåller ett formellt kunskapskrav. Sökande mellan 16 och 66 år ska i regel visa kunskaper i svenska språket och om det svenska samhället. <strong>Medborgarskapsprovet</strong> i samhällskunskap genomförs av Universitets- och högskolerådet (UHR) och blev tillgängligt i augusti 2026, medan provet i svenska införs stegvis.</p><p>Samhällsprovet utgår från UHR:s studiebok <em>Sverige i fokus</em>, som har 13 kapitel och bland annat tar upp Sveriges demokratiska system. Det finns undantag, till exempel för den som uppfyller språkkravet på andra sätt, så kontrollera Migrationsverket och UHR för din egen situation. Antal frågor, provtid och godkändgräns bör du bekräfta hos UHR; vi anger inga siffror vi inte kunnat verifiera.</p><p>Vår fullständiga genomgång av reglerna, bosättningstid och avgifter finns i artikeln om <a href=\"/sv/medborgarskapsprov/\">medborgarskapsprovet</a>.</p>",
    },
    {
      heading: "Öva medborgarskapsprov med Drive Test",
      html:
        "<p>Drive Tests medborgarskapsmodul har <strong>136 övningsfrågor</strong> fördelade på alla 13 kapitel, kapiteltest, fullständiga provtentor och hela boken <em>Sverige i fokus</em> i en och samma app. Då kan du läsa ett kapitel och testa dig direkt, vilket är ett mycket effektivare upplägg än att läsa hela boken först och testa sig sist.</p><p>Precis som i resten av appen får du förklaringar till svaren, bokmärken för knepiga frågor och statistik som visar vilka kapitel som sitter och vilka som behöver ett varv till. <strong>Text-till-tal och flerspråkigt stöd</strong> kan hjälpa dig genom tät text om samhälle, historia och institutioner.</p><p>Se i appen hur medborgarskapsmodulen erbjuds och vad som ingår i gratis- och betalplanerna innan du prenumererar. Drive Test är ett studiestöd och ersätter inte officiell information från Migrationsverket och UHR.</p>",
    },
    {
      heading: "Planera dina studier",
      html:
        "<ul><li><strong>Vecka för vecka.</strong> Ta ett eller två kapitel i veckan: läs först och öva direkt efteråt.</li><li><strong>Upprepa felen.</strong> Använd Granska på de frågor du svarat fel på tills de slutar dyka upp.</li><li><strong>Avsluta med provtentor.</strong> Gör en hel provtenta några dagar före det riktiga provet för att få känsla för tempot.</li><li><strong>Gör det dagligen.</strong> Tjugo fokuserade minuter slår ett långt helgpass.</li></ul><p>Jobbar du också i Sverige, eller funderar på ett yrke som taxiförare, läs om <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a> eller bläddra i <a href=\"/sv/blog/\">bloggen</a>.</p><p>Regler om medborgarskap, avgifter och handläggningstider ändras, så lita alltid på Migrationsverket för de senaste kraven. Vår <a href=\"/sv/medborgarskapsprov/\">guide om medborgarskapsprovet</a> sammanfattar vad vi vet och när den senast uppdaterades.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Vem måste göra medborgarskapsprovet?", aHtml: "Sökande mellan 16 och 66 år ska i regel visa kunskaper i svenska och om det svenska samhället, med vissa undantag. Se <a href=\"/sv/medborgarskapsprov/\">vår guide</a> och Migrationsverket för ditt fall." },
    { q: "Vad bygger medborgarskapsprovet på?", aHtml: "Samhällsprovet bygger på UHR:s studiebok Sverige i fokus, som har 13 kapitel." },
    { q: "Hur många frågor har Drive Test för medborgarskapsprovet?", aHtml: "Förberedelsemodulen har 136 övningsfrågor fördelade på de 13 kapitlen, samt kapiteltest och provtentor." },
    { q: "När startade medborgarskapsprovet?", aHtml: "Provet i samhällskunskap blev tillgängligt i augusti 2026. Provet i svenska införs stegvis." },
    { q: "Är provet på svenska?", aHtml: "Provet och studieboken är på svenska. Drive Test har flerspråkigt stöd och text-till-tal som hjälper dig att studera." },
  ],
  related: ["for/international-drivers", "exams/taxi-licence", "exams/driving-licence", "compare/drive-test-vs-books"],
  ctaTitle: "Förbered dig inför medborgarskapsprovet",
  ctaText: "Ladda ned Drive Test och arbeta dig igenom Sverige i fokus kapitel för kapitel med övningsfrågor.",
};

export const examCitizenshipTest = { en, sv };
