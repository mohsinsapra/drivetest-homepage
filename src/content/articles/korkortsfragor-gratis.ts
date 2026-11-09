import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent, ArticleSource } from "./types";

// Facts checked against Trafikverket (personbil, priser) and Transportstyrelsen on 9 November 2026.
// The sample questions are written by Drive Test from the traffic rules. They are not Trafikverket's test questions.

const sources: ArticleSource[] = [
  { label: "Trafikverket – Personbil och lätt lastbil (teoriprovet)", url: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/" },
  { label: "Trafikverket – Priser för prov och fotografering", url: "https://www.trafikverket.se/korkort/boka-betala-och-avboka-prov/priser/" },
  { label: "Trafikverket – Teoriprovet på annat språk", url: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/teoriprovet-pa-annat-sprak/" },
  { label: "Transportstyrelsen – Trafikregler", url: "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/" },
];

/** One sample question as HTML: question, options, answer and why. */
function q(n: number, question: string, options: string[], correct: number, why: string, lang: "sv" | "en"): string {
  const letters = ["A", "B", "C", "D"];
  const opts = options.map((o, i) => `<li><strong>${letters[i]}.</strong> ${o}</li>`).join("");
  const label = lang === "sv" ? { q: "Fråga", a: "Rätt svar", w: "Därför" } : { q: "Question", a: "Correct answer", w: "Why" };
  return `<p><strong>${label.q} ${n}.</strong> ${question}</p><ul>${opts}</ul><p><strong>${label.a}: ${letters[correct]}.</strong> ${label.w}: ${why}</p>`;
}

const sv: ArticleContent = {
  metaTitle: "Körkortsfrågor gratis: exempelfrågor med svar | Drive Test",
  metaDescription:
    "Körkortsfrågor gratis med svar och förklaring: 12 exempelfrågor om hastighet, väjning, alkohol, däck och parkering, plus hur teoriprovet för B-körkort går till.",
  eyebrow: "B-körkort · Övningsfrågor",
  tag: "Körkort",
  lastUpdated: "2026-11-09",
  lastUpdatedLabel: "Uppdaterad 9 november 2026",
  title: "Körkortsfrågor gratis: exempelfrågor med svar",
  lede: "Här är <strong>12 gratis körkortsfrågor</strong> med svar och en kort förklaring till varje. De täcker sådant som ofta kommer upp på teoriprovet för B-körkort: hastighet, väjningsplikt, alkohol, däck, mobil och parkering.",
  intro:
    "Frågorna är skrivna av oss utifrån trafikreglerna. De är <strong>inte</strong> Trafikverkets provfrågor, och Trafikverket påpekar själva att frågor du hittar på nätet inte är samma som på provet. Använd dem för att testa om du förstår reglerna, inte för att lära dig svar utantill. Regler kan ändras, så kontrollera alltid hos Trafikverket och Transportstyrelsen.",
  excerpt:
    "12 gratis körkortsfrågor med svar och förklaring, plus hur teoriprovet för B-körkort går till och hur du övar vidare.",
  cover: "/assets/blog/korkortsfragor-small-town-road.webp",
  coverAlt: "Vy genom vindrutan från förarplatsen i en bil på en tom gata genom en liten svensk ort en klar morgon, med vita hus och flaggstänger",
  sections: [
    {
      heading: "Så fungerar teoriprovet för B-körkort",
      html: `<p>Innan du testar frågorna är det bra att veta vad du övar inför. Enligt <a href="https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/" target="_blank" rel="noopener noreferrer">Trafikverket</a> ser teoriprovet för B ut så här:</p>`,
      table: {
        headers: ["Del", "Uppgift"],
        rows: [
          { cells: ["Antal frågor", "70 flervalsfrågor, ett rätt svar per fråga"] },
          { cells: ["Testfrågor", "5 frågor räknas inte, så du kan få högst 65 poäng"] },
          { cells: ["Godkänt", "Minst 52 poäng"] },
          { cells: ["Provtid", "50 minuter"] },
          { cells: ["Språk", "Svenska eller något av 15 översatta språk, bland annat engelska, arabiska och persiska"] },
          { cells: ["Avgift 2026", "420 kr dagtid, 520 kr efter kl. 18 och helg"] },
        ],
      },
    },
    {
      html: `<p>Provet mäter fem områden: fordonskännedom och manövrering, miljö, trafiksäkerhet, trafikregler och personliga förutsättningar. Du får inte se vilka frågor du svarade fel på, bara inom vilka områden. Därför lönar det sig att förstå varför ett svar är rätt.</p>`,
    },
    {
      heading: "Körkortsfrågor om hastighet och väjningsplikt",
      html:
        q(1, "Du kör inne i en tätort. Det finns inga hastighetsskyltar. Vilken hastighet gäller?", ["30 km/h", "50 km/h", "70 km/h"], 1, "bashastigheten i tätort är 50 km/h om inget annat är skyltat.", "sv") +
        q(2, "Du kör på en väg utanför tätort utan hastighetsskyltar. Vad är högsta tillåtna hastighet?", ["70 km/h", "80 km/h", "90 km/h"], 0, "utanför tätort är bashastigheten 70 km/h. Högre gräns kräver skyltning.", "sv") +
        q(3, "Du kommer till en korsning utan vägmärken och utan trafiksignaler. En bil närmar sig från höger. Vad gäller?", ["Du kör först eftersom du kom först", "Du ska väja för bilen från höger", "Den som kör på den större vägen kör först"], 1, "när inget annat är reglerat gäller högerregeln: du lämnar företräde åt fordon från höger.", "sv") +
        q(4, "Du kör in i en cirkulationsplats med väjningspliktsmärke vid infarten. Vem har företräde?", ["Du, eftersom du kommer från höger", "Fordon som redan kör i cirkulationen", "Den som har störst fordon"], 1, "väjningspliktsmärket gör att du ska lämna företräde åt trafiken som redan är i cirkulationsplatsen.", "sv"),
    },
    {
      heading: "Körkortsfrågor om gående och parkering",
      html:
        q(5, "En fotgängare står vid kanten av ett obevakat övergångsställe och ska gå ut. Vad ska du göra?", ["Tuta så att hen väntar", "Stanna eller sakta in så att hen kan gå över", "Fortsätta, eftersom hen inte har gått ut än"], 1, "vid ett obevakat övergångsställe har du väjningsplikt mot gående som är på väg ut på det, inte bara mot dem som redan går.", "sv") +
        q(6, "Hur nära före ett övergångsställe får du stanna eller parkera?", ["Närmare än 10 meter går bra", "Inte närmare än 10 meter före", "Inte närmare än 30 meter före"], 1, "du får inte stanna eller parkera på ett övergångsställe eller inom 10 meter före det, eftersom bilen skymmer gående.", "sv"),
    },
    {
      heading: "Körkortsfrågor om alkohol, mobil och bälte",
      html:
        q(7, "Vid vilken alkoholhalt i blodet räknas det som rattfylleri?", ["0,2 promille", "0,5 promille", "0,8 promille"], 0, "gränsen för rattfylleri i Sverige är 0,2 promille. Den säkra nivån är ingen alkohol alls.", "sv") +
        q(8, "Får du prata i en mobil som du håller i handen medan du kör?", ["Ja, om samtalet är kort", "Ja, om du kör under 50 km/h", "Nej, det är förbjudet"], 2, "du får inte använda en mobil som du håller i handen under körning. Handsfree är tillåtet, men även det kan ta din uppmärksamhet.", "sv") +
        q(9, "En passagerare i din bil är 12 år och har inte på sig bältet. Vem ansvarar?", ["Passageraren själv", "Du som förare", "Föräldern, även om hen inte är med"], 1, "föraren ansvarar för att passagerare under 15 år använder bälte eller annan skyddsanordning.", "sv"),
    },
    {
      heading: "Körkortsfrågor om däck, ljus och bromssträcka",
      html:
        q(10, "Vilket minsta mönsterdjup krävs för vinterdäck under vinterperioden?", ["1,6 mm", "3 mm", "5 mm"], 1, "vinterdäck ska ha minst 3 mm mönsterdjup under vinterperioden. För sommardäck är kravet 1,6 mm.", "sv") +
        q(11, "Måste du ha ljus tänt när du kör på dagen?", ["Nej, bara när det är mörkt", "Ja, halvljus eller varselljus ska vara tänt", "Bara på motorväg"], 1, "i Sverige ska du ha halvljus eller varselljus tänt när du kör, även på dagen.", "sv") +
        q(12, "Du fördubblar hastigheten från 40 till 80 km/h. Vad händer ungefär med bromssträckan?", ["Den blir dubbelt så lång", "Den blir ungefär fyra gånger så lång", "Den är densamma"], 1, "bromssträckan växer med hastigheten i kvadrat. Dubbel fart ger ungefär fyrdubbel bromssträcka.", "sv"),
    },
    {
      card: {
        title: "Hur gick det?",
        html: `<p>Fick du 11 eller 12 rätt kan du grunderna i de här områdena. Missade du flera, läs förklaringarna igen och testa om några dagar. Kom ihåg att det riktiga provet har 70 frågor och kräver 52 poäng av 65, så du behöver kunna mycket mer än det som står här.</p>`,
      },
    },
    {
      heading: "Gratis teoriprov: så övar du vidare",
      html: `<p>Ett par frågor räcker inte för att klara provet. Det som brukar fungera är att öva lite varje dag, i provets format, och att gå igenom varje fel tills du förstår regeln bakom.</p><ul><li><strong>Öva med tidsgräns.</strong> 50 minuter för 70 frågor ger dig under en minut per fråga.</li><li><strong>Läs förklaringen</strong> även när du svarar rätt. Ibland gissade du rätt.</li><li><strong>Repetera dina fel</strong> några dagar senare, så fastnar de.</li><li><strong>Följ resultatet per område</strong>, eftersom provet också redovisar per område.</li></ul><p>I <strong>Drive Test</strong> övar du körkortsteori för B med provliknande frågor, förklaringar, AI-handledare och text-till-tal. Det finns gratis kategorier att prova först. Se i appen vad som ingår gratis och vad som ingår i betalplanen. Läs mer på sidan om <a href="/sv/exams/driving-licence/">teoriprov för körkort</a>.</p><p><strong><a href="/sv/exams/driving-licence/">Öva körkortsteori i Drive Test &rsaquo;</a></strong></p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Är de här körkortsfrågorna samma som på teoriprovet?", aHtml: "Nej. Vi har skrivit frågorna själva utifrån trafikreglerna. Trafikverket säger att frågor du hittar på nätet inte är samma som på provet, så använd dem för att förstå reglerna." },
    { q: "Hur många frågor är det på teoriprovet för B-körkort?", aHtml: "70 frågor, varav 5 är testfrågor som inte räknas. Du kan få högst 65 poäng och behöver minst 52 för godkänt. Provtiden är 50 minuter." },
    { q: "Finns det gratis teoriprov på nätet?", aHtml: "Ja, det finns gratis övningsfrågor, till exempel på den här sidan och i de gratis kategorierna i Drive Test. Själva teoriprovet hos Trafikverket kostar 420 kr dagtid och 520 kr efter kl. 18 och på helger (2026)." },
    { q: "Kan jag göra teoriprovet på ett annat språk än svenska?", aHtml: "Ja. Teoriprovet för B finns på 15 språk, bland annat engelska, arabiska, persiska och somaliska. Du väljer språk när du bokar. Du kan också ansöka om prov med tolk." },
    { q: "Får jag se vilka frågor jag svarade fel på?", aHtml: "Nej. Trafikverket visar bara om du blev godkänd och inom vilka områden du svarade fel. Därför är det bra att öva per område innan provet." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/exams/driving-licence/", "/sv/exams/taxi-licence/"],
};

const en: ArticleContent = {
  metaTitle: "Free Swedish Driving Theory Questions with Answers | Drive Test",
  metaDescription:
    "12 free Swedish driving theory questions with answers and explanations: speed limits, right of way, alcohol, tyres and parking, plus how the B theory test works.",
  eyebrow: "B licence · Practice questions",
  tag: "Driving licence",
  lastUpdated: "2026-11-09",
  lastUpdatedLabel: "Updated 9 November 2026",
  title: "Free Swedish driving theory questions with answers",
  lede: "Here are <strong>12 free practice questions</strong> for the Swedish B-licence theory test (teoriprov), each with the answer and a short explanation.",
  intro:
    "We wrote these questions ourselves from the Swedish traffic rules. They are <strong>not</strong> Trafikverket's test questions, and Trafikverket says questions found online are not the ones on the test. Use them to check that you understand the rules. Rules can change, so always check Trafikverket and Transportstyrelsen.",
  excerpt: "12 free Swedish driving theory questions with answers, plus how the B theory test works.",
  cover: "/assets/blog/korkortsfragor-small-town-road.webp",
  coverAlt: "View through the windscreen from the driver's seat of a car on an empty street in a small Swedish town on a clear morning, with white buildings and flagpoles",
  sections: [
    {
      heading: "The B theory test at a glance",
      html: `<p>According to Trafikverket: 70 multiple-choice questions, 5 of them unscored, so the maximum is 65 points. You need 52 to pass and you get 50 minutes. The test is available in Swedish and 15 translated languages, including English. The fee in 2026 is 420 kr in daytime and 520 kr after 18:00 and at weekends.</p>`,
    },
    {
      heading: "Practice questions",
      html:
        q(1, "You are driving in a built-up area with no speed signs. What is the speed limit?", ["30 km/h", "50 km/h", "70 km/h"], 1, "the default limit in built-up areas is 50 km/h.", "en") +
        q(2, "You are outside a built-up area with no speed signs. What is the limit?", ["70 km/h", "80 km/h", "90 km/h"], 0, "the default limit outside built-up areas is 70 km/h.", "en") +
        q(3, "At a junction with no signs or signals, a car approaches from your right. What applies?", ["You go first", "You give way to the car from the right", "The bigger road goes first"], 1, "with no other rule in place, you give way to traffic from the right.", "en") +
        q(4, "A pedestrian is about to step onto an uncontrolled zebra crossing. What do you do?", ["Sound the horn", "Slow down or stop so they can cross", "Keep going because they have not stepped out yet"], 1, "you must give way to pedestrians who are on or about to step onto the crossing.", "en") +
        q(5, "What blood alcohol level counts as drink-driving in Sweden?", ["0.2 per mille", "0.5 per mille", "0.8 per mille"], 0, "the limit is 0.2 per mille. The safe level is none at all.", "en") +
        q(6, "Can you talk on a phone held in your hand while driving?", ["Yes, briefly", "Yes, below 50 km/h", "No"], 2, "using a hand-held phone while driving is not allowed.", "en") +
        q(7, "What minimum tread depth do winter tyres need in the winter period?", ["1.6 mm", "3 mm", "5 mm"], 1, "winter tyres need at least 3 mm; summer tyres at least 1.6 mm.", "en") +
        q(8, "You double your speed. Roughly what happens to the braking distance?", ["It doubles", "It becomes about four times longer", "It stays the same"], 1, "braking distance grows with the square of the speed.", "en"),
    },
    {
      heading: "Practise more",
      html: `<p>Practise a little every day, in test format and against the clock, and review every mistake until you understand the rule. In <strong>Drive Test</strong> you practise B-licence theory with exam-style questions, explanations, an AI tutor and text-to-speech. Some categories are free to try. See <a href="/exams/driving-licence/">driving licence theory test practice</a>.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Are these the real test questions?", aHtml: "No. We wrote them from the traffic rules. Trafikverket says online questions are not the ones on the test." },
    { q: "How many questions are on the Swedish B theory test?", aHtml: "70, of which 5 are unscored. You need 52 of 65 points, and you have 50 minutes." },
    { q: "Can I take the theory test in English?", aHtml: "Yes. The B theory test is available in 15 translated languages, including English. You choose the language when you book." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/exams/driving-licence/", "/exams/taxi-licence/"],
};

export const korkortsfragorGratis = { slug: "korkortsfragor-gratis", en, sv };
