import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "for/international-drivers",
  kind: "audience",
  metaTitle: "Taxi Exam in Sweden for Non-Native Speakers | Drive Test",
  metaDescription:
    "Preparing for the Swedish taxi exam when Swedish is not your first language? Use multi-language support and text-to-speech in the Drive Test study app.",
  eyebrow: "For international drivers",
  title: "Pass the Swedish taxi exam",
  titleAccent: "when Swedish is not your first language",
  lede:
    "Many of Sweden's taxi drivers were born elsewhere. The exams are in Swedish, but your preparation does not have to be. Drive Test offers multi-language support and full text-to-speech so you can study the taxi exam for non-native speakers with real understanding.",
  stats: [
    { value: "TTS", label: "Full text-to-speech support" },
    { value: "AI", label: "Built-in AI tutor to explain answers" },
    { value: "3", label: "Platforms: iOS, Android and web" },
  ],
  problems: [
    { icon: "language", title: "Legal Swedish is hard", text: "Long sentences with formal vocabulary can hide a simple question." },
    { icon: "alert", title: "Knowing the rule is not enough", text: "You can lose points to wording even when you understand the traffic situation." },
    { icon: "book", title: "Material assumes fluent reading", text: "Many books and websites offer no help when a word or sentence blocks you." },
  ],
  solutions: [
    { icon: "language", title: "Multi-language support", text: "Study with support for languages beyond Swedish, so concepts become clear first." },
    { icon: "phone", title: "Listen as you read", text: "Text-to-speech reads the questions aloud, which helps comprehension and pronunciation." },
    { icon: "brain", title: "AI tutor and explanations", text: "Ask for another explanation until it makes sense." },
  ],
  sections: [
    {
      heading: "Studying the taxi exam in a second language",
      html:
        "<p>The knowledge exams for the <strong>taxiförarlegitimation</strong> are held in Swedish, and Trafikverket's page does not list language options or interpreters for the taxi theory test, so check with Trafikverket what applies to you. According to Trafikverket, the theory test has two parts, Säkerhet och beteende and Lagstiftning, and both must be passed within six months of the first.</p><p>If you took your driving licence abroad, you may also need to include a certificate from the issuing country when you apply. Our <a href=\"/taxi-licence-guide/\">taxi licence guide</a> explains the process in plain language and our <a href=\"/blog/\">blog</a> will collect more tips for newcomers.</p><p>The best strategy is to separate two tasks: first understand the content, then get used to the Swedish wording. Drive Test supports both. You can learn concepts with multi-language support and then practise in Swedish until the exam phrasing feels familiar.</p>",
    },
    {
      heading: "Multi-language support and text-to-speech",
      html:
        "<p>Drive Test is built so that language is not the barrier. <strong>Full text-to-speech support</strong> reads questions and answers aloud, which is useful if you understand spoken Swedish better than written, or if you learn better by listening. <strong>Multi-language support</strong> helps you grasp the content before you drill the exact exam wording.</p><p>Every answer comes with a <strong>deep-dive explanation</strong>. If a sentence is still confusing, the <strong>AI tutor</strong> can rephrase and explain in more than one way. Combine this with <strong>bookmarks</strong> for the words and rules that keep tripping you up, and with <strong>Review</strong> mode to repeat the ones you missed.</p><p>Check inside the app for the full list of supported languages, since we do not list them here. The app works on iOS, Android and in the browser.</p>",
    },
    {
      heading: "A plan for non-native speakers",
      html:
        "<ul><li><strong>Learn the content first.</strong> Use Practice mode with explanations and audio.</li><li><strong>Collect vocabulary.</strong> Bookmark questions with words you did not know.</li><li><strong>Train the Swedish wording.</strong> Repeat the bookmarked questions with text and audio.</li><li><strong>Finish under time.</strong> Use Custom mode with a timer to match exam conditions.</li></ul><p>Extra support such as longer exam time may be available if you have documented needs such as dyslexia; Trafikverket describes how to apply. Allow yourself more weeks than a native speaker would, because quality of understanding matters more than speed.</p><p>When you are ready, see the overview on our <a href=\"/exams/taxi-licence/\">taxi licence test page</a>, or read about the <a href=\"/medborgarskapsprov/\">Swedish citizenship test</a> if you are also working on citizenship.</p><p>Whatever route you choose, check current rules and fees with Trafikverket and Transportstyrelsen, keep your study sessions short and regular, and review your mistakes the same day while they are fresh.</p>",
    },
  ],
  faq: [
    { q: "Can I take the taxi exam in English or another language?", aHtml: "The taxi knowledge exams are held in Swedish. Ask Trafikverket whether any support is available for your situation. Drive Test helps you prepare in other languages." },
    { q: "Does Drive Test have text-to-speech?", aHtml: "Yes. Drive Test includes full text-to-speech support to help with comprehension." },
    { q: "Which languages does the app support?", aHtml: "The app has multi-language support. Open the app to see the current list of supported languages." },
    { q: "How long should I study if Swedish is my second language?", aHtml: "It varies. A good approach is to study regularly in short sessions and book the exam when your results are consistently strong in every category." },
    { q: "Is there a guide for non-native speakers?", aHtml: "Our <a href=\"/taxi-licence-guide/\">taxi licence guide</a> explains the process step by step in plain language." },
  ],
  related: ["exams/taxi-licence", "for/new-taxi-drivers", "exams/citizenship-test", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Study the taxi exam in a way that works for you",
  ctaText: "Download Drive Test and try multi-language support and text-to-speech in the free categories.",
};

const sv: LandingPage = {
  slug: "for/international-drivers",
  kind: "audience",
  metaTitle: "Taxiprov på annat språk än svenska | Drive Test",
  metaDescription:
    "Plugga inför taxiprovet i Sverige när svenska inte är ditt modersmål. Flerspråkigt stöd och text-till-tal i Drive Test hjälper dig förstå frågorna.",
  eyebrow: "För förare med annat modersmål",
  title: "Klara svenska taxiprovet",
  titleAccent: "även om svenska inte är ditt modersmål",
  lede:
    "Många av Sveriges taxiförare är födda i ett annat land. Proven är på svenska, men din förberedelse behöver inte vara det. Drive Test har flerspråkigt stöd och fullt text-till-tal, så att du kan plugga taxiprovet med verklig förståelse.",
  stats: [
    { value: "TTS", label: "Fullt stöd för text-till-tal" },
    { value: "AI", label: "Inbyggd AI-tutor som förklarar svar" },
    { value: "3", label: "Plattformar: iOS, Android och webben" },
  ],
  problems: [
    { icon: "language", title: "Juridisk svenska är svår", text: "Långa meningar med formella ord kan gömma en enkel fråga." },
    { icon: "alert", title: "Att kunna regeln räcker inte", text: "Du kan tappa poäng på ordalydelsen även när du förstår trafiksituationen." },
    { icon: "book", title: "Materialet förutsätter flytande läsning", text: "Många böcker och sidor ger ingen hjälp när ett ord eller en mening stoppar dig." },
  ],
  solutions: [
    { icon: "language", title: "Flerspråkigt stöd", text: "Plugga med stöd på fler språk än svenska så att begreppen blir tydliga först." },
    { icon: "phone", title: "Lyssna medan du läser", text: "Text-till-tal läser upp frågorna, vilket hjälper förståelse och uttal." },
    { icon: "brain", title: "AI-tutor och förklaringar", text: "Be om en ny förklaring tills det blir begripligt." },
  ],
  sections: [
    {
      heading: "Plugga taxiprovet på ett andraspråk",
      html:
        "<p>Kunskapsproven för <strong>taxiförarlegitimation</strong> hålls på svenska, och Trafikverkets sida anger inga språkalternativ eller tolk för taxiproven, så kontrollera med Trafikverket vad som gäller dig. Enligt Trafikverket har teoriprovet två delprov, Säkerhet och beteende samt Lagstiftning, och båda ska vara godkända inom sex månader från det första.</p><p>Har du tagit körkort utomlands kan du också behöva bifoga ett intyg från utfärdarlandet när du ansöker. Vår <a href=\"/sv/taxi-licence-guide/\">guide till taxiförarlegitimation</a> förklarar processen på enkel svenska och vår <a href=\"/sv/blog/\">blogg</a> samlar fler tips för nyanlända.</p><p>Den bästa strategin är att skilja på två uppgifter: först förstå innehållet, sedan vänja sig vid den svenska formuleringen. Drive Test stödjer båda. Du kan lära dig begreppen med flerspråkigt stöd och sedan öva på svenska tills provets formuleringar känns bekanta.</p>",
    },
    {
      heading: "Flerspråkigt stöd och text-till-tal",
      html:
        "<p>Drive Test är byggt så att språket inte ska vara hindret. <strong>Fullt text-till-tal-stöd</strong> läser upp frågor och svar, vilket är användbart om du förstår talad svenska bättre än skriven, eller lär dig bättre genom att lyssna. <strong>Flerspråkigt stöd</strong> hjälper dig förstå innehållet innan du övar in provets exakta ordalydelse.</p><p>Varje svar har en <strong>djupgående förklaring</strong>. Är en mening fortfarande förvirrande kan <strong>AI-tutorn</strong> formulera om och förklara på fler än ett sätt. Kombinera det med <strong>bokmärken</strong> för de ord och regler som ständigt stoppar dig, och med <strong>Granska</strong> för att repetera det du missat.</p><p>Se i appen för den fullständiga listan över språk som stöds, eftersom vi inte listar dem här. Appen fungerar på iOS, Android och i webbläsaren.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
    {
      heading: "En plan för dig som inte har svenska som modersmål",
      html:
        "<ul><li><strong>Lär dig innehållet först.</strong> Använd Övning med förklaringar och ljud.</li><li><strong>Samla ordförråd.</strong> Bokmärk frågor med ord du inte kunde.</li><li><strong>Träna den svenska ordalydelsen.</strong> Repetera bokmärkta frågor med text och ljud.</li><li><strong>Avsluta med tidspress.</strong> Använd Anpassat med timer för att likna provet.</li></ul><p>Extra stöd som förlängd provtid kan finnas om du har dokumenterade behov, till exempel dyslexi; Trafikverket beskriver hur du ansöker. Ge dig själv fler veckor än en person med svenska som modersmål, eftersom förståelsens kvalitet är viktigare än tempot.</p><p>När du är redo, se översikten på sidan om <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a>, eller läs om <a href=\"/sv/medborgarskapsprov/\">medborgarskapsprovet</a> om du också arbetar mot medborgarskap.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Kan jag göra taxiprovet på engelska eller ett annat språk?", aHtml: "Kunskapsproven för taxi hålls på svenska. Fråga Trafikverket om det finns stöd för din situation. Drive Test hjälper dig att förbereda dig på andra språk." },
    { q: "Har Drive Test text-till-tal?", aHtml: "Ja. Drive Test har fullt stöd för text-till-tal som hjälper förståelsen." },
    { q: "Vilka språk stöder appen?", aHtml: "Appen har flerspråkigt stöd. Öppna appen för att se den aktuella listan över språk som stöds." },
    { q: "Hur länge ska jag plugga om svenska är mitt andraspråk?", aHtml: "Det varierar. Ett bra upplägg är att plugga regelbundet i korta pass och boka provet när dina resultat konsekvent är starka i alla kategorier." },
    { q: "Finns det en guide för dem som inte har svenska som modersmål?", aHtml: "Vår <a href=\"/sv/taxi-licence-guide/\">guide till taxiförarlegitimation</a> förklarar processen steg för steg på enkelt språk." },
  ],
  related: ["exams/taxi-licence", "for/new-taxi-drivers", "exams/citizenship-test", "compare/drive-test-vs-taxi-schools"],
  ctaTitle: "Plugga taxiprovet på ett sätt som funkar för dig",
  ctaText: "Ladda ned Drive Test och prova flerspråkigt stöd och text-till-tal i de gratis kategorierna.",
};

export const audienceInternationalDrivers = { en, sv };
