import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "compare/drive-test-vs-free-online-tests",
  kind: "compare",
  metaTitle: "Free Online Taxi Tests vs Drive Test App | Drive Test",
  metaDescription:
    "Are free online practice tests enough for the Swedish taxi or driving theory exam? Compare explanations, tracking, language support and cost in a fair review.",
  eyebrow: "Compare · Free online tests",
  title: "Free online practice tests",
  titleAccent: "or a dedicated exam-prep app?",
  lede:
    "Free online tests are a great way to get a quick feel for the taxi and driving theory exams in Sweden. A dedicated app like Drive Test adds explanations, tracking and structure. Here is a fair look at when free is enough and when it is not.",
  problems: [
    { icon: "alert", title: "Hard to judge quality", text: "Free tests can be outdated, written by unknown authors or built around rules that have since changed." },
    { icon: "brain", title: "Answers without reasons", text: "Many free tests show only right or wrong, so you cannot learn why." },
    { icon: "chart", title: "No history", text: "Without an account or tracking, you cannot see whether you are improving over weeks." },
  ],
  solutions: [
    { icon: "check", title: "Explained answers", text: "Every question in Drive Test has a deep-dive explanation, with an AI tutor for follow-ups." },
    { icon: "chart", title: "Tracked progress", text: "Test history, category breakdowns and activity logs show whether you are improving." },
    { icon: "language", title: "Language support", text: "Text-to-speech and multi-language support help when the wording is the hard part." },
  ],
  sections: [
    {
      heading: "What free online tests do well",
      html:
        "<p>Free tests cost nothing, need no commitment and are often available instantly in the browser. They are excellent for a <strong>quick baseline</strong>: take one test before you start studying and you will see roughly where you stand. They are also useful for a last warm-up on the day before an exam, or for trying out the format.</p><p>Some free sites and official materials are well made. Trafikverket publishes information about its exams, and Transportstyrelsen publishes the regulations, both free. Use them as your authority on rules and requirements for the <strong>taxiförarlegitimation</strong>, including that, according to Trafikverket, the theory test has two parts that must be passed within six months of the first.</p><p>If you are only after a taste of the exam or a short refresher, a free test may be all you need. Just be careful to check how current the questions are, and who wrote them, before you rely on them.</p>",
    },
    {
      heading: "Where a dedicated app helps",
      html:
        "<p>Preparing well for a theory exam means repeating the right things at the right time. Free tests rarely support that. In Drive Test, you can choose <strong>Practice</strong>, <strong>Custom</strong> or <strong>Review</strong> mode, bookmark difficult questions and return to your mistakes. Each question includes an explanation, and the <strong>AI tutor</strong> can explain it again in other words.</p><p>The analytics dashboard keeps your full test history and shows your results per category, so you can see when a weak area has turned strong. That is what turns practice into preparation. <strong>Text-to-speech</strong> and multi-language support matter for the many candidates who study in a second language, and the app works on iOS, Android and in the browser.</p><p>Drive Test also offers free categories, so you do not have to choose between free and focused. Premium access is category-based, and prices are shown in the app before you buy. See the <a href=\"/exams/taxi-licence/\">taxi licence test page</a> for what is covered.</p>",
    },
    {
      heading: "A practical way to use both",
      html:
        "<p>You do not need to pick just one. A sensible plan is to begin with a free test for a baseline, use Drive Test for daily practice and review, and finish with a free test as a sanity check before booking. If you notice that a free test contradicts the app, check the rule with the official source rather than trusting either blindly.</p><ul><li>Use free tests for <strong>quick checks</strong>.</li><li>Use an app for <strong>structured practice and feedback</strong>.</li><li>Use official sources for <strong>rules, fees and requirements</strong>.</li></ul><p>For the wider picture, see our <a href=\"/compare/\">comparison overview</a>, or learn more about the process in the <a href=\"/taxi-licence-guide/\">taxi licence guide</a> and the <a href=\"/blog/\">blog</a>.</p><p>Whatever route you choose, check current rules and fees with Trafikverket and Transportstyrelsen, keep your study sessions short and regular, and review your mistakes the same day while they are fresh.</p>",
    },
  ],
  comparison: {
    headers: ["", "Free online tests", "Drive Test app"],
    rows: [
      ["Cost", "Free", "Free categories, paid plans in app"],
      ["Explanations", "Varies, often none", "Deep-dive explanation for each question"],
      ["Progress tracking", "Often limited", "History, charts and activity logs"],
      ["Review of mistakes", "Varies", "Dedicated Review mode and bookmarks"],
      ["Language support", "Varies", "Multi-language and text-to-speech"],
      ["Content currency", "Check each source", "Updated regularly; report errors via support"],
    ],
  },
  faq: [
    { q: "Are free online taxi tests good enough?", aHtml: "They are good for a quick check. For structured preparation with explanations and tracking, an app can add more. Many people use both." },
    { q: "Are free tests accurate?", aHtml: "It varies. Check who wrote them and when they were updated, and confirm rules with Trafikverket and Transportstyrelsen." },
    { q: "Does Drive Test have free content?", aHtml: "Yes, there are free categories you can try before subscribing. Premium access is category-based. Check the app for current details." },
    { q: "What if I find a wrong question in the app?", aHtml: "Email us at <a href=\"mailto:support@drivetest.se\">support@drivetest.se</a> with the question text and category. We review all reports." },
    { q: "Can I use free tests and Drive Test together?", aHtml: "Yes. Use a free test for a baseline and the app for focused practice. Verify rules with official sources." },
  ],
  related: ["compare", "compare/drive-test-vs-books", "exams/driving-licence", "exams/taxi-licence"],
  ctaTitle: "Try the free categories first",
  ctaText: "See how explanations, tracking and review modes compare with the free tests you already use.",
};

const sv: LandingPage = {
  slug: "compare/drive-test-vs-free-online-tests",
  kind: "compare",
  metaTitle: "Gratis provsajter eller Drive Test-appen | Drive Test",
  metaDescription:
    "Räcker gratis övningsprov på nätet för taxi- eller körkortsteorin i Sverige? Jämför förklaringar, uppföljning, språkstöd och kostnad på ett rättvist sätt.",
  eyebrow: "Jämför · Gratis provsajter",
  title: "Gratis övningsprov på nätet",
  titleAccent: "eller en särskild provapp?",
  lede:
    "Gratis prov på nätet är ett utmärkt sätt att snabbt få en känsla för taxi- och körkortsteorin i Sverige. En särskild app som Drive Test tillför förklaringar, uppföljning och struktur. Här är en rättvis titt på när gratis räcker och när det inte gör det.",
  problems: [
    { icon: "alert", title: "Svårt att bedöma kvaliteten", text: "Gratisprov kan vara föråldrade, skrivna av okända avsändare eller bygga på regler som ändrats sedan dess." },
    { icon: "brain", title: "Svar utan skäl", text: "Många gratisprov visar bara rätt eller fel, så du kan inte lära dig varför." },
    { icon: "chart", title: "Ingen historik", text: "Utan konto eller uppföljning kan du inte se om du blir bättre över flera veckor." },
  ],
  solutions: [
    { icon: "check", title: "Förklarade svar", text: "Varje fråga i Drive Test har en djupgående förklaring, med AI-tutor för följdfrågor." },
    { icon: "chart", title: "Följd utveckling", text: "Provhistorik, kategoriuppdelning och aktivitetsloggar visar om du blir bättre." },
    { icon: "language", title: "Språkstöd", text: "Text-till-tal och flerspråkigt stöd hjälper när ordalydelsen är det svåra." },
  ],
  sections: [
    {
      heading: "Det gratisprov gör bra",
      html:
        "<p>Gratisprov kostar ingenting, kräver inget åtagande och finns ofta direkt i webbläsaren. De är utmärkta för en <strong>snabb nulägesbild</strong>: gör ett prov innan du börjar plugga så ser du ungefär var du står. De är också användbara som sista uppvärmning dagen före provet, eller för att testa formatet.</p><p>Vissa gratissajter och officiella material är bra gjorda. Trafikverket publicerar information om sina prov och Transportstyrelsen publicerar föreskrifterna, båda gratis. Använd dem som din auktoritet för regler och krav för <strong>taxiförarlegitimation</strong>, till exempel att teoriprovet enligt Trafikverket har två delprov som ska vara godkända inom sex månader från det första.</p><p>Om du bara vill ha en försmak av provet eller en kort repetition kan ett gratisprov vara allt du behöver. Kontrollera bara hur aktuella frågorna är, och vem som skrivit dem, innan du förlitar dig på dem.</p>",
    },
    {
      heading: "Där en särskild app hjälper",
      html:
        "<p>Att förbereda sig väl för ett teoriprov handlar om att repetera rätt saker vid rätt tidpunkt. Gratisprov stödjer sällan det. I Drive Test väljer du <strong>Övning</strong>, <strong>Anpassat</strong> eller <strong>Granska</strong>, bokmärker svåra frågor och återvänder till dina misstag. Varje fråga har en förklaring, och <strong>AI-tutorn</strong> kan förklara den igen med andra ord.</p><p>Statistikvyn sparar hela din provhistorik och visar resultat per kategori, så du ser när ett svagt område blivit starkt. Det är det som gör övning till förberedelse. <strong>Text-till-tal</strong> och flerspråkigt stöd betyder mycket för de många som pluggar på ett andraspråk, och appen fungerar på iOS, Android och i webbläsaren.</p><p>Drive Test har också gratis kategorier, så du behöver inte välja mellan gratis och fokuserat. Premiumåtkomst är kategoribaserad och priserna visas i appen före köp. Se sidan om <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a> för vad som ingår.</p>",
    },
    {
      heading: "Ett praktiskt sätt att använda båda",
      html:
        "<p>Du behöver inte välja bara ett. Ett förnuftigt upplägg är att börja med ett gratisprov som nulägesbild, använda Drive Test för daglig övning och repetition och avsluta med ett gratisprov som kontroll före bokning. Om ett gratisprov motsäger appen, kontrollera regeln hos den officiella källan i stället för att lita blint på någon av dem.</p><ul><li>Använd gratisprov för <strong>snabba kontroller</strong>.</li><li>Använd en app för <strong>strukturerad övning och återkoppling</strong>.</li><li>Använd officiella källor för <strong>regler, avgifter och krav</strong>.</li></ul><p>För helheten, se vår <a href=\"/sv/compare/\">jämförelseöversikt</a>, eller läs mer om processen i <a href=\"/sv/taxi-licence-guide/\">guiden till taxiförarlegitimation</a> och i <a href=\"/sv/blog/\">bloggen</a>.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  comparison: {
    headers: ["", "Gratis provsajter", "Drive Test-appen"],
    rows: [
      ["Kostnad", "Gratis", "Gratis kategorier, betalplaner i appen"],
      ["Förklaringar", "Varierar, ofta inga", "Djupgående förklaring till varje fråga"],
      ["Framstegsuppföljning", "Ofta begränsad", "Historik, diagram och aktivitetsloggar"],
      ["Genomgång av misstag", "Varierar", "Eget Granska-läge och bokmärken"],
      ["Språkstöd", "Varierar", "Flerspråkigt och text-till-tal"],
      ["Innehållets aktualitet", "Kontrollera varje källa", "Uppdateras regelbundet; rapportera fel via support"],
    ],
  },
  faq: [
    { q: "Räcker gratis taxiprov på nätet?", aHtml: "De är bra för en snabb koll. För strukturerad förberedelse med förklaringar och uppföljning kan en app tillföra mer. Många använder båda." },
    { q: "Är gratisprov korrekta?", aHtml: "Det varierar. Kontrollera vem som skrivit dem och när de uppdaterades, och bekräfta regler hos Trafikverket och Transportstyrelsen." },
    { q: "Har Drive Test gratis innehåll?", aHtml: "Ja, det finns gratis kategorier du kan prova innan du prenumererar. Premiumåtkomst är kategoribaserad. Se aktuella uppgifter i appen." },
    { q: "Vad gör jag om jag hittar en felaktig fråga i appen?", aHtml: "Maila oss på <a href=\"mailto:support@drivetest.se\">support@drivetest.se</a> med frågetexten och kategorin. Vi granskar alla rapporter." },
    { q: "Kan jag använda gratisprov och Drive Test tillsammans?", aHtml: "Ja. Använd ett gratisprov som nulägesbild och appen för fokuserad övning. Kontrollera regler hos officiella källor." },
  ],
  related: ["compare", "compare/drive-test-vs-books", "exams/driving-licence", "exams/taxi-licence"],
  ctaTitle: "Prova de gratis kategorierna först",
  ctaText: "Se hur förklaringar, uppföljning och granskningslägen står sig mot de gratisprov du redan använder.",
};

export const compareVsFreeOnlineTests = { en, sv };
