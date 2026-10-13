import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "compare/drive-test-vs-books",
  kind: "compare",
  metaTitle: "Taxi Exam Study: App vs Books | Drive Test",
  metaDescription:
    "Is an exam-prep app or a printed book better for the Swedish taxi licence test? Compare practice, feedback, language support and cost, fairly and honestly.",
  eyebrow: "Compare · Books",
  title: "Studying for the taxi exam",
  titleAccent: "app vs books and PDF compendia",
  lede:
    "Books and PDF compendia are the traditional way to study for the taxi licence exam in Sweden. An app like Drive Test offers a different approach based on practice and feedback. Here is how they compare, and when each is the better choice.",
  problems: [
    { icon: "book", title: "Reading is not testing", text: "You can read a chapter and feel confident, yet struggle with exam-style questions on the same material." },
    { icon: "alert", title: "No feedback loop", text: "A book cannot tell you which answers you got wrong or which topics to repeat." },
    { icon: "language", title: "One language, one speed", text: "Printed material is written in dense Swedish with no audio or translation support." },
  ],
  solutions: [
    { icon: "target", title: "Active practice", text: "Answer exam-style questions, see the correct answer and read why it is right." },
    { icon: "chart", title: "Progress tracking", text: "Performance charts and category breakdowns show where to focus." },
    { icon: "phone", title: "On your phone", text: "Short sessions on the bus or between shifts, with text-to-speech when reading is slow." },
  ],
  sections: [
    {
      heading: "Where books and compendia are strong",
      html:
        "<p>Printed books and PDF compendia give <strong>depth and structure</strong>. They present a subject from the beginning, they can be annotated, and you can flip between chapters. For topics such as legislation or company management, a well-written reference is hard to beat for understanding the big picture. A book also works without a battery or a connection, and many people simply learn better on paper.</p><p>Books are also stable references. Rules for the <strong>taxiförarlegitimation</strong> and <strong>yrkeskunnande</strong> are set by Transportstyrelsen and tested by Trafikverket, and the official regulations remain the final word. A good book follows them closely, but it can age as rules change, so check the date and confirm current requirements with the authorities.</p><p>If you like to read first and understand deeply, a book can be a very good foundation. Our <a href=\"/taxi-licence-guide/\">taxi licence guide</a> is a free overview of the process that you can read alongside any book.</p>",
    },
    {
      heading: "Where an app adds something books cannot",
      html:
        "<p>Reading is passive. The exam, on the other hand, asks you to <strong>apply</strong> what you know to a question, under time pressure and in Swedish. Drive Test is built around that: <strong>Practice</strong>, <strong>Custom</strong> and <strong>Review</strong> modes let you answer exam-style questions, set your own test length and timer, and return to what you missed.</p><p>Each answer comes with a <strong>deep-dive explanation</strong>, and an <strong>AI tutor</strong> can rephrase it when the text is hard. <strong>Text-to-speech</strong> and multi-language support help if Swedish is not your first language. <strong>Bookmarks</strong> save tricky questions, and analytics show your results over time, which no printed book can do.</p><p>What the app does not do: it is not a full textbook and it is not a teacher. It is best seen as the practice half of your preparation. For the full picture of options, see the <a href=\"/compare/\">comparison overview</a>.</p>",
    },
    {
      heading: "The best of both: how to combine them",
      html:
        "<p>For most candidates the answer is not either/or. A simple approach: read a chapter or section in your book, then immediately practise questions on that topic in Drive Test. Mark what you miss, read the explanation, and go back to the book for the details that did not stick.</p><ul><li><strong>Book first, app second</strong> if you like structure and want to understand a topic before testing it.</li><li><strong>App first, book second</strong> if you prefer to learn from mistakes and use the book as a reference.</li><li><strong>App only</strong> if your time is short and you mainly need practice and feedback.</li></ul><p>You can try the free categories without paying anything, and see how the app works next to your book. Premium plans are category-based; confirm current prices in the app. For more tips on passing the exams, visit the <a href=\"/blog/\">Drive Test blog</a>.</p>",
    },
  ],
  comparison: {
    headers: ["", "Printed books / PDF compendia", "Drive Test app"],
    rows: [
      ["Depth and reference", "Strong, easy to annotate", "Explanations per question, not a full textbook"],
      ["Exam-style practice", "Usually few or none", "Core of the app"],
      ["Instant feedback", "No", "Yes, with explanations"],
      ["Progress tracking", "Manual", "Charts, history and activity logs"],
      ["Language support", "Printed language only", "Multi-language and text-to-speech"],
      ["Works offline", "Yes", "Offline access to test history"],
      ["Cost", "One-off purchase", "Free categories, paid plans in app"],
    ],
  },
  faq: [
    { q: "Is an app better than a book for the taxi exam?", aHtml: "They do different jobs. A book is good for depth and reference, an app is good for practice and feedback. Many candidates use both." },
    { q: "Can I pass the taxi exam using only a book?", aHtml: "Some people do. Without practice questions it can be hard to know if you are ready, so adding exam-style practice is helpful." },
    { q: "Does Drive Test replace a textbook?", aHtml: "No. It gives you exam-style practice with explanations, not a full textbook. Use it alongside the official regulations and your own materials." },
    { q: "What if my book is out of date?", aHtml: "Rules can change, so check publication dates and confirm current requirements with Transportstyrelsen and Trafikverket." },
    { q: "Is Drive Test free?", aHtml: "There are free categories to try. Premium access is category-based and managed through the App Store, Google Play or Stripe. Check the app for current prices." },
  ],
  related: ["compare", "compare/drive-test-vs-free-online-tests", "exams/taxi-licence", "for/new-taxi-drivers"],
  ctaTitle: "Add practice to your reading",
  ctaText: "Try the free categories in Drive Test next to your book and see how your results change.",
};

const sv: LandingPage = {
  slug: "compare/drive-test-vs-books",
  kind: "compare",
  metaTitle: "Plugga taxiprovet: app eller böcker | Drive Test",
  metaDescription:
    "Är en provapp eller en tryckt bok bäst för taxiprovet i Sverige? Jämför övning, återkoppling, språkstöd och kostnad på ett rättvist och ärligt sätt.",
  eyebrow: "Jämför · Böcker",
  title: "Plugga taxiprovet",
  titleAccent: "app eller böcker och pdf-kompendier",
  lede:
    "Böcker och pdf-kompendier är det traditionella sättet att plugga inför taxiprovet i Sverige. En app som Drive Test erbjuder ett annat upplägg, byggt på övning och återkoppling. Så här står de sig mot varandra, och när det ena är bättre än det andra.",
  problems: [
    { icon: "book", title: "Läsa är inte att testa", text: "Du kan läsa ett kapitel och känna dig säker, men ändå ha svårt med provliknande frågor på samma material." },
    { icon: "alert", title: "Ingen återkopplingsloop", text: "En bok kan inte säga vilka svar du hade fel eller vilka områden du ska repetera." },
    { icon: "language", title: "Ett språk, ett tempo", text: "Tryckt material är skrivet på tät svenska utan ljud eller översättningsstöd." },
  ],
  solutions: [
    { icon: "target", title: "Aktiv övning", text: "Svara på provliknande frågor, se rätt svar och läs varför det är rätt." },
    { icon: "chart", title: "Framstegsuppföljning", text: "Diagram och kategoriuppdelning visar var du ska fokusera." },
    { icon: "phone", title: "I mobilen", text: "Korta pass på bussen eller mellan passen, med text-till-tal när läsningen går långsamt." },
  ],
  sections: [
    {
      heading: "Där böcker och kompendier är starka",
      html:
        "<p>Tryckta böcker och pdf-kompendier ger <strong>djup och struktur</strong>. De presenterar ett ämne från början, du kan göra anteckningar och bläddra mellan kapitel. För områden som lagstiftning eller företagsledning är ett välskrivet uppslagsverk svårslaget när du vill förstå helheten. En bok fungerar också utan batteri eller uppkoppling, och många lär sig helt enkelt bättre på papper.</p><p>Böcker är också stabila referenser. Reglerna för <strong>taxiförarlegitimation</strong> och <strong>yrkeskunnande</strong> beslutas av Transportstyrelsen och prövas av Trafikverket, och de officiella föreskrifterna har sista ordet. En bra bok följer dem noga, men den kan bli inaktuell när regler ändras, så kontrollera datum och bekräfta gällande krav hos myndigheterna.</p><p>Gillar du att läsa först och förstå på djupet kan en bok vara en mycket bra grund. Vår <a href=\"/sv/taxi-licence-guide/\">guide till taxiförarlegitimation</a> är en gratis översikt av processen som du kan läsa vid sidan av vilken bok som helst.</p>",
    },
    {
      heading: "Vad en app tillför som böcker inte kan",
      html:
        "<p>Läsning är passiv. Provet ber dig däremot <strong>tillämpa</strong> det du kan på en fråga, under tidspress och på svenska. Drive Test är byggt kring just det: lägena <strong>Övning</strong>, <strong>Anpassat</strong> och <strong>Granska</strong> låter dig svara på provliknande frågor, ställa in egen provlängd och timer och gå tillbaka till det du missat.</p><p>Varje svar har en <strong>djupgående förklaring</strong>, och en <strong>AI-tutor</strong> kan formulera om den när texten är svår. <strong>Text-till-tal</strong> och flerspråkigt stöd hjälper om svenska inte är ditt förstaspråk. <strong>Bokmärken</strong> sparar knepiga frågor, och statistiken visar dina resultat över tid, vilket ingen tryckt bok kan göra.</p><p>Vad appen inte gör: den är ingen komplett lärobok och ingen lärare. Se den som övningsdelen av din förberedelse. För hela bilden av alternativen, se <a href=\"/sv/compare/\">jämförelsesidan</a>.</p>",
    },
    {
      heading: "Det bästa av båda: så kombinerar du dem",
      html:
        "<p>För de flesta är svaret inte antingen eller. Ett enkelt upplägg: läs ett kapitel eller avsnitt i boken och öva direkt därefter frågor om det området i Drive Test. Markera det du missar, läs förklaringen och gå tillbaka till boken för detaljerna som inte fastnade.</p><ul><li><strong>Bok först, app sedan</strong> om du gillar struktur och vill förstå ett område innan du testar det.</li><li><strong>App först, bok sedan</strong> om du hellre lär dig av misstag och använder boken som uppslagsverk.</li><li><strong>Bara appen</strong> om tiden är knapp och du mest behöver övning och återkoppling.</li></ul><p>Du kan prova de gratis kategorierna utan att betala något och se hur appen fungerar bredvid din bok. Premiumplaner är kategoribaserade; bekräfta aktuella priser i appen. Fler tips för att klara proven hittar du i <a href=\"/sv/blog/\">Drive Test-bloggen</a>.</p>",
    },
  ],
  comparison: {
    headers: ["", "Tryckta böcker / pdf-kompendier", "Drive Test-appen"],
    rows: [
      ["Djup och uppslagsverk", "Starkt, lätt att göra anteckningar", "Förklaringar per fråga, ingen komplett lärobok"],
      ["Provliknande övning", "Oftast få eller inga", "Appens kärna"],
      ["Direkt återkoppling", "Nej", "Ja, med förklaringar"],
      ["Framstegsuppföljning", "Manuell", "Diagram, historik och aktivitetsloggar"],
      ["Språkstöd", "Bara det tryckta språket", "Flerspråkigt och text-till-tal"],
      ["Fungerar offline", "Ja", "Offlineåtkomst till provhistorik"],
      ["Kostnad", "Engångsköp", "Gratis kategorier, betalplaner i appen"],
    ],
  },
  faq: [
    { q: "Är en app bättre än en bok för taxiprovet?", aHtml: "De gör olika saker. En bok är bra för djup och uppslag, en app är bra för övning och återkoppling. Många använder båda." },
    { q: "Kan jag klara taxiprovet med bara en bok?", aHtml: "Vissa gör det. Utan övningsfrågor kan det vara svårt att veta om du är redo, så provliknande övning är ett bra tillägg." },
    { q: "Ersätter Drive Test en lärobok?", aHtml: "Nej. Den ger provliknande övning med förklaringar, inte en komplett lärobok. Använd den tillsammans med de officiella föreskrifterna och ditt eget material." },
    { q: "Vad gör jag om min bok är gammal?", aHtml: "Regler kan ändras, så kontrollera utgivningsdatum och bekräfta gällande krav hos Transportstyrelsen och Trafikverket." },
    { q: "Är Drive Test gratis?", aHtml: "Det finns gratis kategorier att prova. Premiumåtkomst är kategoribaserad och hanteras via App Store, Google Play eller Stripe. Se aktuella priser i appen." },
  ],
  related: ["compare", "compare/drive-test-vs-free-online-tests", "exams/taxi-licence", "for/new-taxi-drivers"],
  ctaTitle: "Lägg till övning till din läsning",
  ctaText: "Prova de gratis kategorierna i Drive Test vid sidan av din bok och se hur dina resultat förändras.",
};

export const compareVsBooks = { en, sv };
