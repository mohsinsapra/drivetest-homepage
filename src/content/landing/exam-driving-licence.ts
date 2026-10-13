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

const sv: LandingPage = {
  slug: "exams/driving-licence",
  kind: "exam",
  metaTitle: "Teoriprov körkort app: öva B-körkort | Drive Test",
  metaDescription:
    "Öva inför teoriprovet för B-körkort med provliknande frågor, förklaringar, text-till-tal och framstegsuppföljning i Drive Test, en teoriprov körkort app.",
  eyebrow: "Prov · B-körkort teoriprov",
  title: "Teoriprov körkort: öva i mobilen",
  titleAccent: "när det passar dig",
  lede:
    "Förbereder du dig för teoriprovet till B-körkort? I Drive Test övar du körkortsteori med provliknande frågor, förklaringar och uppföljning av framsteg, så att du vet var du står inför teoriprovet.",
  stats: [
    { value: "3", label: "Studielägen: Övning, Anpassat och Granska" },
    { value: "2", label: "Plattformar: iOS och Android" },
    { value: "Gratis", label: "Gratis kategorier att prova först" },
  ],
  problems: [
    { icon: "alert", title: "Fel på små detaljer", text: "Väjningsregler, vägmärken och undantag blandas lätt ihop när du bara läst reglerna en gång." },
    { icon: "language", title: "Svensk ordalydelse", text: "Långa frågor med flera villkor är svårare om svenska är ditt andraspråk." },
    { icon: "money", title: "Omprov kostar", text: "Varje omprov av teorin kostar en avgift och försenar både körlektioner och körkort." },
  ],
  solutions: [
    { icon: "target", title: "Övning som speglar provet", text: "Svara på provliknande frågor och se rätt svar med förklaring direkt." },
    { icon: "language", title: "Flerspråkigt och uppläst", text: "Text-till-tal och flerspråkigt stöd hjälper dig förstå vad varje fråga egentligen frågar efter." },
    { icon: "chart", title: "Se dina svaga punkter", text: "Uppdelning per kategori visar vilka områden du ska repetera innan du bokar provet." },
  ],
  sections: [
    {
      heading: "Teoriprovet för B-körkort i Sverige",
      html:
        "<p>För att få svenskt körkort för bil klarar du ett <strong>teoriprov</strong> och ett praktiskt <em>körprov</em>, båda hos Trafikverket. Enligt Trafikverkets information har teoriprovet för B 65 poänggivande frågor plus några testfrågor som inte räknas, du behöver 52 rätt för att bli godkänd och har 50 minuter på dig. Eftersom detaljerna kan ändras bör du kontrollera aktuella uppgifter, språk och hjälpmedel på <strong>trafikverket.se</strong> innan du bokar.</p><p>Provet testar mer än vägmärken. Det omfattar trafikregler, risker och beteende, fordon, miljö och din egen roll som förare. Många som blir underkända gör det på frågor där två svar ser nästan rätt ut, så vanan att läsa noga och förstå orsaken är lika viktig som att kunna regeln.</p><p>Den här sidan handlar om vanligt personbilskörkort (B). Siktar du på ett yrke som förare kan du också vara intresserad av <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a>, där B-körkort är en förutsättning.</p>",
    },
    {
      heading: "Plugga körkortsteori med Drive Test",
      html:
        "<p>Drive Test har B-körkort bland sina kategoriområden. Använd <strong>Övning</strong> för att lära dig ett område, <strong>Anpassat</strong> för att bygga ett prov med egen längd och timer och <strong>Granska</strong> för att gå igenom det du missat. Bokmärk de frågor som ständigt får dig att snubbla.</p><p>Varje fråga har en <strong>djupgående förklaring</strong> som visar varför det rätta svaret är rätt, och din <strong>AI-tutor</strong> kan förklara igen om regeln fortfarande känns abstrakt. Resultaten visas i diagram, så du ser hur beredskapen växer pass för pass.</p><p>Drive Test fungerar på iOS och Android. Bekräfta i appen vilka kategorier som är gratis och vilka som ingår i betalplanen innan du prenumererar. Premiumåtkomst är kategoribaserad och hanteras via App Store, Google Play eller Stripe.</p>",
    },
    {
      heading: "På provdagen",
      html:
        "<ul><li><strong>Läs varje fråga två gånger.</strong> Se upp för ord som alltid, aldrig och endast.</li><li><strong>Öva med tidspress.</strong> Använd Anpassat läge med timer så att provtempot känns bekant.</li><li><strong>Gå igenom felen samma dag.</strong> Ett misstag du förstår upprepas sällan.</li><li><strong>Använd ljud.</strong> Läser du långsamt på svenska kan det hjälpa att lyssna medan du läser.</li></ul><p>Behöver du extra stöd, till exempel på grund av dyslexi, kan du ansöka hos Trafikverket om anpassade villkor; läs på deras webbplats hur det går till. När dina övningsresultat är stabila och du förstår dina misstag är du redo att boka.</p><p>Vill du ha fler Sverige-guider? Läs <a href=\"/sv/blog/\">Drive Test-bloggen</a>, eller läs om <a href=\"/sv/medborgarskapsprov/\">medborgarskapsprovet</a> om du bygger ditt liv i Sverige.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Hur många frågor är det på teoriprovet för B-körkort?", aHtml: "Enligt Trafikverkets information räknas 65 frågor till resultatet (plus några testfrågor), 52 rätt krävs och tiden är 50 minuter. Kontrollera alltid Trafikverket för aktuella regler." },
    { q: "Kan jag göra teoriprovet på engelska?", aHtml: "Trafikverket erbjuder teoriprovet på flera språk. Se trafikverket.se för aktuell lista och regler om tolk och hjälpmedel." },
    { q: "Räcker Drive Test för att klara teoriprovet?", aHtml: "Drive Test är ett studiestöd med provliknande övning, förklaringar och statistik. Vi kan inte lova resultat, men regelbunden övning och genomgång av dina misstag är det säkraste sättet att förbereda sig." },
    { q: "Finns B-körkort i Drive Test?", aHtml: "Ja, B-körkort är ett av kategoriområdena i appen. Se i appen vilka kategorier som är gratis och vilka som ingår i betalplanen." },
    { q: "Kan jag öva offline?", aHtml: "Appen ger offlineåtkomst till din provhistorik. Se i appen vad som är tillgängligt utan uppkoppling." },
  ],
  related: ["exams/taxi-licence", "for/driving-schools", "for/international-drivers", "compare/drive-test-vs-free-online-tests"],
  ctaTitle: "Öva körkortsteori",
  ctaText: "Ladda ned Drive Test gratis, prova de gratis kategorierna och se hur dina resultat utvecklas.",
};

export const examDrivingLicence = { en, sv };
