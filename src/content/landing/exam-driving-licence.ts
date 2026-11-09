import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "exams/driving-licence",
  kind: "exam",
  metaTitle: "Swedish Driving Licence Theory Test App | Drive Test",
  metaDescription:
    "Practise for the Swedish B-licence theory test (teoriprov) with exam-style questions, explanations, text-to-speech and progress tracking in the Drive Test app.",
  eyebrow: "Exam · B-körkort teoriprov",
  title: "Swedish driving licence theory test practice",
  titleAccent: "on your phone",
  lede:
    "Preparing for the B-körkort teoriprov? In Drive Test you practise driving licence theory with exam-style questions, explanations and progress tracking, so you know where you stand before the theory test in Sweden.",
  stats: [
    { value: "3", label: "Study modes: Practice, Custom and Review" },
    { value: "2", label: "Platforms: iOS and Android" },
    { value: "Free", label: "Free categories to try first" },
  ],
  problems: [
    { icon: "alert", title: "Failing on small details", text: "Right-of-way, signs and exceptions are easy to confuse when you only read the rules once." },
    { icon: "language", title: "Swedish wording", text: "Long questions with several conditions are harder if Swedish is a second language." },
    { icon: "money", title: "Retakes add up", text: "Every theory retake costs a fee and delays your driving lessons and licence." },
  ],
  solutions: [
    { icon: "target", title: "Practice that mirrors the test", text: "Answer exam-style questions and see the right answer with an explanation straight away." },
    { icon: "language", title: "Multi-language and speech", text: "Text-to-speech and multi-language support help you understand what each question asks." },
    { icon: "chart", title: "See weak spots", text: "Category breakdowns tell you which topics to repeat before booking the test." },
  ],
  sections: [
    {
      heading: "The B-licence theory test (teoriprov) in Sweden",
      html:
        "<p>To get a Swedish car licence you pass a <strong>teoriprov</strong> (theory test) and a practical driving test (<em>körprov</em>), both administered by Trafikverket. According to Trafikverket's information, the B theory test has 65 scored questions plus a few trial questions that do not count, you need 52 correct answers to pass, and you get 50 minutes. Because the details can change, verify the current figures, languages and aids at <strong>trafikverket.se</strong> before you book.</p><p>The test checks more than the road signs. It covers traffic rules, risk and behaviour, vehicles, the environment and your own role as a driver. Many people who fail do so on questions where two answers look almost right, so the habit of reading carefully and understanding the reason matters as much as knowing the rule.</p><p>This page is about the standard car licence (B). If you are heading towards a professional career as a driver, you may also be interested in the <a href=\"/exams/taxi-licence/\">taxi licence test</a>, which requires a B licence as a starting point.</p>",
    },
    {
      heading: "Study driving licence theory with Drive Test",
      html:
        "<p>Drive Test includes B-körkort among its category areas. Use <strong>Practice</strong> mode to learn a topic, <strong>Custom</strong> mode to build a test with your own length and timer, and <strong>Review</strong> mode to go back through what you missed. Bookmark the questions that keep tripping you up.</p><p>Every question has a <strong>deep-dive explanation</strong> that tells you why the right answer is right, and your <strong>AI tutor</strong> can explain it again if the rule still feels abstract. Results are shown in charts, so you can see your readiness grow session by session.</p><p>Drive Test works on iOS and Android. Confirm which categories are free and which are included in the paid plan inside the app before you subscribe. Premium access is category-based and managed through the App Store, Google Play or Stripe.</p>",
    },
    {
      heading: "On the day of the test",
      html:
        "<ul><li><strong>Read every question twice.</strong> Look for words like always, never and only.</li><li><strong>Practise under time.</strong> Use Custom mode with a timer so the test pace feels familiar.</li><li><strong>Review mistakes the same day.</strong> A mistake you understand is rarely repeated.</li><li><strong>Use audio.</strong> If you read slowly in Swedish, listening while reading can help.</li></ul><p>Anyone who needs extra support, for example because of dyslexia, can apply to Trafikverket for adapted conditions; check their site for how it works. When your practice results are steady and you understand your mistakes, you are ready to book.</p><p>Looking for more Sweden-specific guides? Browse the <a href=\"/blog/\">Drive Test blog</a>, or read about the <a href=\"/medborgarskapsprov/\">Swedish citizenship test</a> if you are building your life in Sweden.</p><p>Whatever route you choose, check current rules and fees with Trafikverket and Transportstyrelsen, keep your study sessions short and regular, and review your mistakes the same day while they are fresh.</p>",
    },
  ],
  faq: [
    { q: "How many questions are on the Swedish B-licence theory test?", aHtml: "According to Trafikverket's information, 65 questions count towards the result (plus some trial questions), 52 correct answers are needed and the time is 50 minutes. Always check Trafikverket for the current rules." },
    { q: "Can I take the Swedish theory test in English?", aHtml: "Trafikverket offers the theory test in several languages. Check trafikverket.se for the current list and for rules on interpreters and aids." },
    { q: "Is Drive Test enough to pass the theory test?", aHtml: "Drive Test is a study aid with exam-style practice, explanations and analytics. We cannot promise results, but regular practice and reviewing your mistakes is the most reliable way to prepare." },
    { q: "Does Drive Test include B-körkort?", aHtml: "Yes, B-körkort is one of the category areas in the app. Check inside the app which categories are free and which are part of the paid plan." },
    { q: "Can I practise offline?", aHtml: "The app gives offline access to your test history. Check the app for what is available without a connection." },
  ],
  related: ["exams/taxi-licence", "for/driving-schools", "for/international-drivers", "compare/drive-test-vs-free-online-tests"],
  ctaTitle: "Practise driving licence theory",
  ctaText: "Download Drive Test free, try the free categories and see how your results develop.",
};

// SV facts checked against Trafikverket (personbil, priser, teoriprovet på annat språk) on 9 November 2026.
const sv: LandingPage = {
  slug: "exams/driving-licence",
  kind: "exam",
  metaTitle: "Teoriprov körkort 2026: öva körkortsteori inför B | Drive Test",
  metaDescription:
    "Teoriprov för körkort B: 70 frågor, 52 poäng för godkänt, 50 minuter. Så går teoriprovet till, vad det kostar och hur du övar körkortsteori i mobilen.",
  eyebrow: "Prov · B-körkort teoriprov",
  title: "Teoriprov körkort: öva körkortsteori inför teoriprovet",
  titleAccent: "i mobilen, när det passar dig",
  lede:
    "Ska du göra teoriprovet för B-körkort? Här ser du hur teoriprovet går till, vad det kostar och vad det testar. I Drive Test övar du körkortsteori med provliknande frågor, förklaringar och uppföljning, så att du vet var du står innan du bokar.",
  stats: [
    { value: "70", label: "Frågor på teoriprovet, varav 65 räknas" },
    { value: "52", label: "Poäng krävs för godkänt" },
    { value: "50 min", label: "Provtid enligt Trafikverket" },
  ],
  problems: [
    { icon: "alert", title: "Fel på små detaljer", text: "Väjningsregler, vägmärken och undantag blandas lätt ihop när du bara läst reglerna en gång." },
    { icon: "language", title: "Svensk ordalydelse", text: "Långa frågor med flera villkor är svårare om svenska är ditt andraspråk." },
    { icon: "money", title: "Omprov kostar", text: "Varje nytt teoriprov kostar 420 kr dagtid (2026) och försenar både körprov och körkort." },
  ],
  solutions: [
    { icon: "target", title: "Övning som speglar provet", text: "Svara på provliknande frågor och se rätt svar med förklaring direkt." },
    { icon: "language", title: "Flerspråkigt och uppläst", text: "Text-till-tal och flerspråkigt stöd hjälper dig förstå vad varje fråga egentligen frågar efter." },
    { icon: "chart", title: "Se dina svaga punkter", text: "Uppdelning per kategori visar vilka områden du ska repetera innan du bokar provet." },
  ],
  sections: [
    {
      heading: "Teoriprov för körkort B: så går det till",
      html:
        "<p>För att få körkort för personbil klarar du ett <strong>teoriprov</strong> och ett <em>körprov</em>, båda hos Trafikverket. Så här beskriver Trafikverket teoriprovet för B:</p><ul><li><strong>70 flervalsfrågor</strong> med ett rätt svar per fråga. 5 av dem är testfrågor som inte räknas, så du kan få högst <strong>65 poäng</strong>.</li><li>Du behöver <strong>52 poäng</strong> för godkänt.</li><li>Provtiden är <strong>50 minuter</strong>. Den börjar när du själv startar provet efter introduktionen.</li><li>Du ser resultatet direkt på skärmen. Du får veta inom vilka områden du svarat fel, men inte vilka frågor.</li><li>Du kan bara göra ett prov per dag för samma behörighet.</li></ul><p>Innan du får göra provet ska du ha ett <strong>körkortstillstånd</strong> och ha gjort <strong>riskutbildningens båda delar</strong>. Du fotograferas på plats inför ditt första teoriprov, så kom minst 30 minuter innan och ta med en giltig id-handling. Kontrollera alltid aktuella regler på <a href=\"https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/\" target=\"_blank\" rel=\"noopener noreferrer\">trafikverket.se</a>.</p>",
    },
    {
      heading: "Vad körkortsteorin på provet handlar om",
      html:
        "<p>Teoriprovet mäter dina kunskaper inom fem områden:</p><ul><li><strong>Fordonskännedom och manövrering:</strong> hur bilen fungerar och hur väglaget påverkar den.</li><li><strong>Miljö:</strong> hur du kör säkert och miljömedvetet.</li><li><strong>Trafiksäkerhet:</strong> samspel med andra, hastighet och placering i olika miljöer.</li><li><strong>Trafikregler:</strong> vägmärken, vägmarkeringar, hastighet, möte och omkörning, last och passagerare.</li><li><strong>Personliga förutsättningar:</strong> grupptryck, impulsiva handlingar och viljan att följa regler.</li></ul><p>Trafikverket betonar att du behöver bred kunskap i hela ämnet, inte svaren på enskilda frågor. Många som blir underkända gör det på frågor där två svar ser nästan rätt ut, så vanan att läsa noga och förstå orsaken är lika viktig som att kunna regeln.</p>",
    },
    {
      heading: "Vad kostar teoriprovet för körkort?",
      html:
        "<p>Enligt Trafikverkets prislista 2026 kostar teoriprovet för B <strong>420 kr dagtid</strong> och <strong>520 kr efter kl. 18 och på helger</strong>. Fotot som tas inför ditt första prov kostar <strong>120 kr</strong>. Avbokar du senare än 24 timmar före provet får du betala ändå, så boka en tid du säkert kan komma på.</p><p>Teoriprovet för B finns på svenska och på <strong>15 översatta språk</strong>, bland annat engelska, arabiska, persiska, somaliska och tigrinja. Du väljer språk när du bokar och kan också ansöka om prov med tolk. Den här sidan handlar om vanligt personbilskörkort (B). Siktar du på ett yrke som förare kan du läsa om <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a>, där B-körkort är en förutsättning.</p>",
    },
    {
      heading: "Plugga körkortsteori med Drive Test",
      html:
        "<p>Drive Test har B-körkort bland sina kategoriområden. Använd <strong>Övning</strong> för att lära dig ett område, <strong>Anpassat</strong> för att bygga ett prov med egen längd och timer och <strong>Granska</strong> för att gå igenom det du missat. Bokmärk de frågor som ständigt får dig att snubbla.</p><p>Varje fråga har en <strong>djupgående förklaring</strong> som visar varför det rätta svaret är rätt, och din <strong>AI-tutor</strong> kan förklara igen om regeln fortfarande känns abstrakt. Resultaten visas per område, på samma sätt som Trafikverket redovisar dina fel, så du ser var du ska lägga tid.</p><p>Det finns gratis kategorier att prova först. Bekräfta i appen vilka kategorier som är gratis och vilka som ingår i betalplanen innan du prenumererar.</p>",
    },
    {
      heading: "Teoriprov körkort: tips inför provdagen",
      html:
        "<ul><li><strong>Läs varje fråga två gånger.</strong> Se upp för ord som alltid, aldrig och endast.</li><li><strong>Öva med tidspress.</strong> 50 minuter för 70 frågor är under en minut per fråga. Använd Anpassat läge med timer.</li><li><strong>Gå igenom felen samma dag.</strong> Ett misstag du förstår upprepas sällan.</li><li><strong>Använd ljud.</strong> I provet kan du lyssna på frågorna på svenska. Öva på samma sätt om du läser långsamt.</li><li><strong>Boka teoriprov och körprov samtidigt</strong>, med några veckors mellanrum, som Trafikverket rekommenderar. Då hinner du göra om teoriprovet före körprovet om det behövs.</li></ul><p>Har du till exempel dyslexi, ADHD eller lässvårigheter kan du ansöka hos Trafikverket om förlängd provtid, muntligt prov eller prov med tolk. Vill du ha fler guider, läs <a href=\"/sv/blog/\">Drive Test-bloggen</a>.</p>",
    },
  ],
  faq: [
    { q: "Hur många frågor är det på teoriprovet för körkort B?", aHtml: "70 frågor. 5 är testfrågor som inte räknas, så du kan få högst 65 poäng. Du behöver 52 poäng för godkänt och har 50 minuter på dig." },
    { q: "Vad kostar teoriprovet för körkort?", aHtml: "420 kr dagtid och 520 kr efter kl. 18 och på helger enligt Trafikverkets prislista 2026. Foto inför första provet kostar 120 kr." },
    { q: "Vad behöver jag innan jag gör teoriprovet?", aHtml: "Ett giltigt körkortstillstånd, båda delarna av riskutbildningen och en giltig id-handling. Du fotograferas på plats, så kom minst 30 minuter innan." },
    { q: "Kan jag göra teoriprovet på engelska eller ett annat språk?", aHtml: "Ja. Teoriprovet för B finns på 15 översatta språk, bland annat engelska och arabiska. Du väljer språk när du bokar och kan också ansöka om prov med tolk." },
    { q: "Hur övar jag körkortsteori bäst?", aHtml: "Öva lite varje dag med provliknande frågor och tidsgräns, läs förklaringen till varje svar och repetera dina fel per område. I Drive Test kan du börja med de gratis kategorierna." },
    { q: "Räcker Drive Test för att klara teoriprovet?", aHtml: "Drive Test är ett studiestöd med provliknande övning, förklaringar och statistik. Vi kan inte lova resultat, men regelbunden övning och genomgång av dina misstag är det säkraste sättet att förbereda sig. Trafikverkets provfrågor är inte samma som övningsfrågor på nätet." },
  ],
  related: ["exams/taxi-licence", "for/driving-schools", "for/international-drivers", "compare/drive-test-vs-free-online-tests"],
  ctaTitle: "Öva inför teoriprovet",
  ctaText: "Ladda ned Drive Test gratis, prova de gratis kategorierna och se hur dina resultat i körkortsteori utvecklas.",
};

export const examDrivingLicence = { en, sv };
