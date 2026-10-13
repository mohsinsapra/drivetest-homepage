import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "compare/drive-test-vs-taxi-schools",
  kind: "compare",
  metaTitle: "Taxi School vs Exam Prep App in Sweden | Drive Test",
  metaDescription:
    "Do you need a taxi school or classroom course for the Swedish taxi licence exams? Compare cost, flexibility and support with the Drive Test app, fairly.",
  eyebrow: "Compare · Taxi schools",
  title: "Taxi school or exam-prep app?",
  titleAccent: "How they differ and how they work together",
  lede:
    "Classroom courses and taxi schools offer something an app cannot: a real teacher in the room. An app like Drive Test offers flexibility and daily practice. Below is a comparison for anyone preparing for the taxiförarlegitimation or yrkeskunnande exams in Sweden.",
  problems: [
    { icon: "money", title: "Course fees", text: "Classroom courses carry a fee on top of the exam and application costs, which is a real consideration for many candidates." },
    { icon: "clock", title: "Fixed schedules", text: "Set course days are hard to combine with shift work, family or a day job." },
    { icon: "alert", title: "Not a replacement for practice", text: "Even with a course, you still need to practise questions yourself between sessions." },
  ],
  solutions: [
    { icon: "phone", title: "Flexible daily practice", text: "Study when you have time, on iOS or Android." },
    { icon: "brain", title: "Explanations on demand", text: "Deep-dive explanations and an AI tutor answer your questions at any hour." },
    { icon: "check", title: "A complement, not a competitor", text: "Use the app for repetition and a course for teacher contact." },
  ],
  sections: [
    {
      heading: "What taxi schools and classroom courses do well",
      html:
        "<p>A good course gives you things an app cannot. A <strong>teacher</strong> can answer unexpected questions, explain context from real experience in the trade, and keep you motivated. You study with other candidates, and a fixed schedule creates structure for people who find it hard to start alone. For subjects such as company management and finance in <strong>yrkeskunnande</strong>, a live explanation can save hours.</p><p>Courses can also help with the practical side, including the driving test. The driving exam is a practical test taken with Trafikverket and is something a book or app cannot practise for you.</p><p>We cannot judge individual schools, and quality and prices vary, so compare options and ask what is included. Remember too that a course is not required by Transportstyrelsen to apply; the requirements are the exams and the other conditions in our <a href=\"/taxi-licence-guide/\">taxi licence guide</a>. Confirm the current rules with the authorities.</p>",
    },
    {
      heading: "What an app adds",
      html:
        "<p>An app is available at 6 a.m. before a shift and at 11 p.m. after one. Drive Test lets you practise in <strong>short sessions</strong>, repeat mistakes in <strong>Review</strong> mode, set up your own test in <strong>Custom</strong> mode and see <strong>progress charts</strong> per category. <strong>Text-to-speech</strong> and multi-language support help if Swedish is not your first language, which is common among candidates, even though the exams are in Swedish.</p><p>It also typically costs less than a course and has free categories to try, though prices vary, so check the app for current plans. There is no fixed timetable and no commute. For many people, that is the difference between studying regularly and not studying at all.</p><p>What the app cannot do: it is not a teacher, it does not give you personal feedback from a person, and it is not a replacement for the official regulations. It is a study aid built for practice and understanding.</p>",
    },
    {
      heading: "How to use both",
      html:
        "<p>A course and an app suit each other. Use the course for structure, context and teacher contact. Use Drive Test between sessions to repeat what you learned, find your weak spots and bring specific questions back to your teacher. If money or time is tight, the app on its own, together with the free <a href=\"/taxi-licence-guide/\">licence guide</a>, is a realistic option for self-motivated learners.</p><ul><li><strong>Need a teacher and structure?</strong> Consider a course, plus an app for daily repetition.</li><li><strong>Self-motivated with limited time or budget?</strong> An app, plus official sources, may be enough.</li><li><strong>Studying in a second language?</strong> Look for text-to-speech and multi-language support, whichever route you choose.</li></ul><p>Read the other comparisons in our <a href=\"/compare/\">overview</a>, or go straight to the <a href=\"/exams/taxi-licence/\">taxi licence test page</a>.</p>",
    },
  ],
  comparison: {
    headers: ["", "Taxi school / classroom course", "Drive Test app"],
    rows: [
      ["Teacher contact", "Yes, in person", "No, AI tutor for explanations"],
      ["Schedule", "Fixed course dates", "Any time, any place"],
      ["Exam-style practice", "Depends on the course", "Core of the app"],
      ["Progress tracking", "Depends on the school", "Charts, history and activity logs"],
      ["Language support", "Depends on the school", "Multi-language and text-to-speech"],
      ["Cost", "Course fee (varies)", "Free categories, paid plans in app"],
      ["Driving test preparation", "Often available", "Not covered"],
    ],
  },
  faq: [
    { q: "Do I need a taxi school to get a taxi licence in Sweden?", aHtml: "No course is required to apply. You need to meet the requirements, including passing the exams at Trafikverket. See the <a href=\"/taxi-licence-guide/\">licence guide</a> and confirm with the authorities." },
    { q: "Is an app cheaper than a taxi school?", aHtml: "Usually, but prices vary. Drive Test has free categories and category-based paid plans shown in the app." },
    { q: "Can an app replace a teacher?", aHtml: "No. An app offers practice, explanations and tracking, but not personal teaching. Many people use both." },
    { q: "Can I use Drive Test while attending a course?", aHtml: "Yes. It works well for repeating material between classes and finding your weak areas." },
    { q: "What about the driving test?", aHtml: "Drive Test covers theory practice. The practical taxi driving test is taken at Trafikverket and must be practised behind the wheel." },
  ],
  related: ["compare", "compare/drive-test-vs-books", "for/new-taxi-drivers", "exams/taxi-company"],
  ctaTitle: "Add practice to your course",
  ctaText: "Try Drive Test free, alongside a course or on its own.",
};

const sv: LandingPage = {
  slug: "compare/drive-test-vs-taxi-schools",
  kind: "compare",
  metaTitle: "Taxiskola eller provapp i Sverige | Drive Test",
  metaDescription:
    "Behöver du taxiskola eller klassrumskurs för proven till taxiförarlegitimation? Jämför kostnad, flexibilitet och stöd med Drive Test-appen rättvist.",
  eyebrow: "Jämför · Taxiskolor",
  title: "Taxiskola eller provapp?",
  titleAccent: "Så skiljer de sig åt och så fungerar de tillsammans",
  lede:
    "Klassrumskurser och taxiskolor erbjuder något en app inte kan: en riktig lärare i rummet. En app som Drive Test erbjuder flexibilitet och daglig övning. Nedan finns en jämförelse för dig som förbereder dig för proven till taxiförarlegitimation eller yrkeskunnande i Sverige.",
  problems: [
    { icon: "money", title: "Kursavgifter", text: "Klassrumskurser kostar utöver prov- och ansökningsavgifterna, vilket för många är en verklig faktor." },
    { icon: "clock", title: "Fasta scheman", text: "Bestämda kursdagar är svåra att kombinera med skiftarbete, familj eller ett vanligt jobb." },
    { icon: "alert", title: "Ersätter inte övning", text: "Även med kurs behöver du öva frågor själv mellan lektionerna." },
  ],
  solutions: [
    { icon: "phone", title: "Flexibel daglig övning", text: "Plugga när du har tid, på iOS eller Android." },
    { icon: "brain", title: "Förklaringar när du behöver dem", text: "Djupgående förklaringar och en AI-tutor svarar på dina frågor när som helst på dygnet." },
    { icon: "check", title: "Ett komplement, inte en konkurrent", text: "Använd appen för repetition och en kurs för lärarkontakt." },
  ],
  sections: [
    {
      heading: "Det taxiskolor och klassrumskurser gör bra",
      html:
        "<p>En bra kurs ger dig sådant en app inte kan. En <strong>lärare</strong> kan svara på oväntade frågor, förklara sammanhang utifrån verklig erfarenhet av branschen och hålla motivationen uppe. Du pluggar med andra som tar samma prov, och ett fast schema skapar struktur för den som har svårt att komma igång själv. För ämnen som företagsledning och ekonomi i <strong>yrkeskunnande</strong> kan en levande förklaring spara timmar.</p><p>Kurser kan också hjälpa med den praktiska sidan, inklusive körprovet. Körprovet är ett praktiskt prov hos Trafikverket och är något varken bok eller app kan öva åt dig.</p><p>Vi kan inte bedöma enskilda skolor, och kvalitet och priser varierar, så jämför alternativ och fråga vad som ingår. Kom också ihåg att Transportstyrelsen inte kräver någon kurs för att ansöka; kraven är proven och övriga villkor som beskrivs i vår <a href=\"/sv/taxi-licence-guide/\">guide till taxiförarlegitimation</a>. Bekräfta gällande regler hos myndigheterna.</p>",
    },
    {
      heading: "Vad en app tillför",
      html:
        "<p>En app finns tillgänglig klockan sex på morgonen före ett pass och klockan elva på kvällen efter ett. Med Drive Test övar du i <strong>korta pass</strong>, repeterar misstag i <strong>Granska</strong>, bygger ett eget prov i <strong>Anpassat</strong> och ser <strong>framstegsdiagram</strong> per kategori. <strong>Text-till-tal</strong> och flerspråkigt stöd hjälper om svenska inte är ditt förstaspråk, vilket är vanligt bland kandidater, trots att proven är på svenska.</p><p>Den kostar också vanligtvis mindre än en kurs och har gratis kategorier att prova, men priserna varierar, så se aktuella planer i appen. Det finns inget fast schema och ingen restid. För många är det skillnaden mellan att plugga regelbundet och att inte plugga alls.</p><p>Vad appen inte kan: den är ingen lärare, ger ingen personlig återkoppling från en människa och ersätter inte de officiella föreskrifterna. Den är ett studiestöd byggt för övning och förståelse.</p>",
    },
    {
      heading: "Så använder du båda",
      html:
        "<p>En kurs och en app passar varandra. Använd kursen för struktur, sammanhang och lärarkontakt. Använd Drive Test mellan lektionerna för att repetera, hitta dina svaga punkter och ta med konkreta frågor tillbaka till läraren. Om pengar eller tid är knappa är appen ensam, tillsammans med den gratis <a href=\"/sv/taxi-licence-guide/\">legitimationsguiden</a>, ett realistiskt alternativ för självgående elever.</p><ul><li><strong>Behöver du lärare och struktur?</strong> Överväg en kurs, plus en app för daglig repetition.</li><li><strong>Självgående med begränsad tid eller budget?</strong> En app, plus officiella källor, kan räcka.</li><li><strong>Pluggar du på ett andraspråk?</strong> Leta efter text-till-tal och flerspråkigt stöd, oavsett väg.</li></ul><p>Läs de andra jämförelserna i vår <a href=\"/sv/compare/\">översikt</a>, eller gå direkt till sidan om <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a>.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  comparison: {
    headers: ["", "Taxiskola / klassrumskurs", "Drive Test-appen"],
    rows: [
      ["Lärarkontakt", "Ja, på plats", "Nej, AI-tutor för förklaringar"],
      ["Schema", "Fasta kursdatum", "När och var som helst"],
      ["Provliknande övning", "Beror på kursen", "Appens kärna"],
      ["Framstegsuppföljning", "Beror på skolan", "Diagram, historik och aktivitetsloggar"],
      ["Språkstöd", "Beror på skolan", "Flerspråkigt och text-till-tal"],
      ["Kostnad", "Kursavgift (varierar)", "Gratis kategorier, betalplaner i appen"],
      ["Körprovsförberedelse", "Finns ofta", "Ingår inte"],
    ],
  },
  faq: [
    { q: "Måste jag gå på taxiskola för att få taxiförarlegitimation?", aHtml: "Ingen kurs krävs för att ansöka. Du ska uppfylla kraven, bland annat godkända prov hos Trafikverket. Se <a href=\"/sv/taxi-licence-guide/\">legitimationsguiden</a> och bekräfta med myndigheterna." },
    { q: "Är en app billigare än taxiskola?", aHtml: "Vanligtvis, men priserna varierar. Drive Test har gratis kategorier och kategoribaserade betalplaner som visas i appen." },
    { q: "Kan en app ersätta en lärare?", aHtml: "Nej. En app ger övning, förklaringar och uppföljning, men inte personlig undervisning. Många använder båda." },
    { q: "Kan jag använda Drive Test medan jag går en kurs?", aHtml: "Ja. Den fungerar bra för att repetera material mellan lektionerna och hitta dina svaga områden." },
    { q: "Hur är det med körprovet?", aHtml: "Drive Test täcker teoriövning. Det praktiska taxikörprovet görs hos Trafikverket och måste övas bakom ratten." },
  ],
  related: ["compare", "compare/drive-test-vs-books", "for/new-taxi-drivers", "exams/taxi-company"],
  ctaTitle: "Lägg till övning vid sidan av kursen",
  ctaText: "Prova Drive Test gratis, vid sidan av en kurs eller på egen hand.",
};

export const compareVsTaxiSchools = { en, sv };
