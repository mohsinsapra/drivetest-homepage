import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent } from "./types";

const sources = [
  { label: "Trafikverket – Taxiförarlegitimation (tests, topics, driving test)", url: "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/" },
  { label: "Trafikverket – Teoriprov och yrkesprov med stöd", url: "https://www.trafikverket.se/korkort/ta-korkort/teoriprov-och-yrkesprov-med-stod/" },
  { label: "Trafikverket – Prices for tests (updated 7 January 2026)", url: "https://www.trafikverket.se/korkort/priser/" },
  { label: "Transportstyrelsen – Application for taxi driver licence", url: "https://www.transportstyrelsen.se/ansokan-om-taxiforarlegitimation" },
];

const en: ArticleContent = {
  metaTitle: "How to Pass the Taxi Licence Test in Sweden | Drive Test",
  metaDescription:
    "How to pass the taxi licence test in Sweden: a 4-week study plan, common reasons people fail, exam-day tips and what the practical driving test involves.",
  eyebrow: "Sweden · Taxi exam",
  tag: "Taxi exam",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Updated 13 October 2026",
  title: "How to Pass the Taxi Licence Test in Sweden",
  lede: "Want to know <strong>how to pass the taxi licence test</strong> in Sweden? It comes down to three things: a realistic study plan for the two theory tests, avoiding the mistakes that cost points, and being calm and prepared for the practical driving test.",
  intro:
    "The Swedish <strong>taxiförarlegitimation</strong> test has three parts, two theory tests and one driving test, and each has its own pass mark. Nothing in it is impossible, but people who treat it like a quick formality often have to book again. This article gives you a practical plan, based on what Trafikverket publishes about the exam, plus the habits that make the difference on the day.",
  excerpt:
    "A practical study plan, the usual reasons people fail, exam-day tips and a walk-through of the taxi driving test.",
  cover: "/assets/blog/ob-taxi-night.jpg",
  sections: [
    {
      heading: "How to pass the taxi licence test: know what you are aiming for",
      html: `<p>Before you plan anything, be clear about the targets. According to Trafikverket, delprov 1 (safety and behaviour) needs at least <strong>48 correct answers</strong> and delprov 2 (legislation) at least <strong>34 correct answers</strong>, with 50 minutes for each. Both must be passed within <strong>six months</strong>, and the driving test result may not be older than one year when you apply to Transportstyrelsen.</p><p>For the full structure and topic list, see our guide to <a href="/blog/taxi-licence-exam-questions/">taxi licence exam questions</a>.</p>`,
    },
    {
      heading: "A four-week study plan",
      html: `<p>Four weeks is a comfortable plan if you can study 30 to 45 minutes most days. Adjust it to your own schedule, the point is to repeat topics, not to cram them.</p>`,
      table: {
        headers: ["Week", "Focus", "What to do"],
        rows: [
          { cells: ["1", "Delprov 1 basics", "Go through route planning, driving style, passenger needs, illness and disability, vehicle knowledge. Bookmark every question you miss."] },
          { cells: ["2", "Delprov 2 rules", "Taxi rules, consequences of breaking them, traffic rules and road signs. Read each explanation, not just the answer."] },
          { cells: ["3", "Mixed practice", "Timed sessions across all categories. Aim for results clearly above the pass marks, not just at them."] },
          { cells: ["4", "Weak spots and driving", "Review bookmarks, retake weak categories, and practise the vehicle check and driving routine out loud."] },
        ],
      },
    },
    {
      heading: "Common reasons people fail",
      html: `<p>Trafikverket does not publish detailed failure statistics for each reason, so the points below are practical observations rather than numbers. They are the traps that show up again and again when people prepare for rule-based tests.</p>`,
      list: {
        ordered: false,
        items: [
          "<strong>Studying once and not repeating.</strong> Rules you read on Monday are gone by Friday unless you revisit them.",
          "<strong>Memorising answers instead of understanding.</strong> The wording changes, the reasoning does not.",
          "<strong>Reading too fast.</strong> A single <em>not</em> or <em>always</em> can flip an answer.",
          "<strong>Ignoring the legislation test.</strong> Many people prepare mostly for the practical parts of the job, and are surprised by rule detail.",
          "<strong>Language friction.</strong> If Swedish is not your first language, unfamiliar terms can cost you points, see <a href=\"/blog/taxi-exam-for-non-native-speakers/\">the taxi exam for non-native speakers</a>.",
          "<strong>Nerves in the driving test.</strong> Skipping the vehicle check or forgetting the oral task are avoidable mistakes.",
        ],
      },
    },
    {
      heading: "Exam-day tips for the theory tests",
      html: `<p>Trafikverket asks you to arrive <strong>at least 30 minutes early</strong> so a photo can be taken at the förarprovskontor, and to bring valid photo ID. Aids you need are provided in the theory room, and your phone must be completely switched off.</p>`,
      list: {
        ordered: true,
        items: [
          "Sleep properly and eat something before you go.",
          "Arrive early, with a valid ID, and switch your phone off.",
          "Answer the questions you are sure about first, and keep an eye on the clock: 50 minutes per test.",
          "Read every option before choosing, especially in the legislation test.",
          "Do not change an answer unless you have a clear reason.",
        ],
      },
    },
    {
      heading: "The practical driving test (körprov taxi)",
      html: `<p>To take the driving test you need a valid category B licence issued in Sweden or another EEA country, plus valid ID. You can choose manual or automatic when you book Trafikverket's car. According to Trafikverket the test has three parts:</p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Vehicle check.</strong> You find defects on the car and suggest how to fix them.",
          "<strong>Passenger safety.</strong> A task such as adjusting seat, headrest and belt, or using child safety equipment.",
          "<strong>Driving.</strong> At least 35 minutes on rural and urban roads to a set destination. GPS is provided, you get an oral task, you may take notes, and you must also be able to find your way without GPS.",
        ],
      },
    },
    {
      alert: {
        title: "Plan for realistic situations",
        html: `<p>Trafikverket describes example tasks such as collecting a passenger with heavy luggage at the door, following signs to a village, and handling changed destinations or road works. Practise talking through what you are doing and why. Calm, safe and customer-friendly driving is what the test is about.</p>`,
      },
    },
    {
      heading: "Support, booking and costs",
      html: `<p>You book and pay at Trafikverket's booking service. As of 2026, Trafikverket's price list shows 420 kr per theory part in the daytime and 520 kr evenings and weekends, and 1 000 kr for the driving test in the daytime and 1 400 kr evenings and weekends. The full cost picture is in <a href="/blog/taxi-licence-cost-sweden/">taxi licence cost in Sweden</a>, and always check the <a href="https://www.trafikverket.se/korkort/priser/">official price page</a>.</p><p>If you have dyslexia, ADHD, autism or a similar need, you can apply for support, and the taxi theory test can be taken with extended time. You apply with BankID on Trafikverket's page for tests with support.</p>`,
    },
    {
      heading: "Practise with Drive Test",
      html: `<p>The <strong>Drive Test app</strong> gives you official-style questions with explanations, Practice, Custom and Review modes, bookmarks and analytics by category, so your four-week plan has real data behind it. See the <a href="/exams/taxi-licence/">taxi licence exam page</a> for what is included. After the tests, follow the steps in our <a href="/taxi-licence-guide/">taxi licence guide</a>, and check <a href="/blog/taxi-licence-medical-requirements/">medical requirements</a> early so the certificate does not delay you.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "How long should I study for the taxi licence test?", aHtml: "That depends on your background, but four weeks of regular short sessions is a sensible plan for most people. The key is repeating topics and reviewing your mistakes." },
    { q: "How many correct answers do I need?", aHtml: "At least 48 in delprov 1 and at least 34 in delprov 2, according to Trafikverket." },
    { q: "What happens if I fail one part?", aHtml: "You book that part again. Both theory parts must be passed within six months of the first one you passed. Check Trafikverket for current rules on retakes." },
    { q: "Is there extra time if I have dyslexia?", aHtml: "Yes, you can apply for support, and the taxi theory test can be taken with extended time. You apply through Trafikverket's page for tests with support." },
    { q: "Can I use my own car for the driving test?", aHtml: "Trafikverket's page describes using its car, manual or automatic, chosen when you book. Check Trafikverket for any other options." },
    { q: "What do I bring on exam day?", aHtml: "A valid photo ID. Arrive at least 30 minutes early for the photo, and keep your phone fully switched off during the theory test." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/blog/taxi-licence-exam-questions/", "/blog/taxi-licence-cost-sweden/", "/taxi-licence-guide/", "/exams/taxi-licence/"],
};

const sv: ArticleContent = {
  metaTitle: "Klara taxiprovet: plan, tips och körprov | Drive Test",
  metaDescription:
    "Så klarar du taxiprovet: en studieplan på fyra veckor, vanliga orsaker till att man misslyckas, tips inför provdagen och vad körprovet för taxi innehåller.",
  eyebrow: "Sverige · Taxiprovet",
  tag: "Taxiprovet",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Uppdaterad 13 oktober 2026",
  title: "Så klarar du taxiprovet: plan, tips och körprov",
  lede: "Vill du veta hur du <strong>klarar taxiprovet</strong>? Det handlar om tre saker: en realistisk studieplan för de två teoriproven, att undvika misstagen som kostar poäng och att vara lugn och förberedd inför körprovet.",
  intro:
    "Provet för <strong>taxiförarlegitimation</strong> har tre delar, två teoriprov och ett körprov, och alla har egna godkändgränser. Inget av det är omöjligt, men den som ser provet som en snabb formalitet får ofta boka om. Den här artikeln ger dig en praktisk plan som bygger på det Trafikverket publicerar om provet, och de vanor som gör skillnad på provdagen.",
  excerpt:
    "En praktisk studieplan, vanliga orsaker till underkänt, tips inför provdagen och en genomgång av körprovet för taxi.",
  cover: "/assets/blog/ob-taxi-night.jpg",
  sections: [
    {
      heading: "Klara taxiprovet: börja med att veta vad du siktar på",
      html: `<p>Innan du planerar något bör målen vara tydliga. Enligt Trafikverket kräver delprov 1 (säkerhet och beteende) minst <strong>48 rätt</strong> och delprov 2 (lagstiftning) minst <strong>34 rätt</strong>, med 50 minuter för varje prov. Båda måste vara godkända inom <strong>sex månader</strong>, och körprovet får inte vara äldre än ett år när du ansöker hos Transportstyrelsen.</p><p>Hela upplägget och alla områden finns i vår genomgång av <a href="/sv/blog/taxi-licence-exam-questions/">taxiförarlegitimation frågor</a>.</p>`,
    },
    {
      heading: "Studieplan på fyra veckor",
      html: `<p>Fyra veckor är en bekväm plan om du kan studera 30 till 45 minuter de flesta dagar. Anpassa efter din vardag, poängen är att repetera områdena, inte att plugga allt i sista stund.</p>`,
      table: {
        headers: ["Vecka", "Fokus", "Gör så här"],
        rows: [
          { cells: ["1", "Grunderna i delprov 1", "Gå igenom ruttplanering, körstil, passagerares behov, sjukdomar och funktionsnedsättningar samt fordonskunskap. Bokmärk varje fråga du missar."] },
          { cells: ["2", "Reglerna i delprov 2", "Taxiregler, följder av regelbrott, trafikregler och vägmärken. Läs förklaringen, inte bara svaret."] },
          { cells: ["3", "Blandad övning", "Tidsatta pass över alla kategorier. Sikta tydligt över godkändgränserna, inte precis på dem."] },
          { cells: ["4", "Svaga punkter och körning", "Gå igenom bokmärken, repetera svaga kategorier och träna fordonskontrollen och körrutinen högt för dig själv."] },
        ],
      },
    },
    {
      heading: "Vanliga orsaker till att man blir underkänd",
      html: `<p>Trafikverket publicerar inte detaljerad statistik över orsakerna, så punkterna nedan är praktiska erfarenheter, inte siffror. Det är fällor som återkommer när man förbereder sig inför regelbaserade prov.</p>`,
      list: {
        ordered: false,
        items: [
          "<strong>Man pluggar en gång och repeterar aldrig.</strong> Regler du läste på måndagen är borta på fredagen om du inte återkommer till dem.",
          "<strong>Man lär sig svar utantill i stället för att förstå.</strong> Formuleringen ändras, resonemanget gör det inte.",
          "<strong>Man läser för snabbt.</strong> Ett enda <em>inte</em> eller <em>alltid</em> kan vända på svaret.",
          "<strong>Man slarvar med lagstiftningsprovet.</strong> Många förbereder sig mest på det praktiska i yrket och överraskas av detaljerna i reglerna.",
          "<strong>Språkbarriär.</strong> Är svenska inte ditt förstaspråk kan okända termer kosta poäng, läs mer i <a href=\"/sv/blog/taxi-exam-for-non-native-speakers/\">taxiprov på engelska, arabiska och andra språk</a>.",
          "<strong>Nervositet på körprovet.</strong> Att hoppa över fordonskontrollen eller glömma den muntliga uppgiften går att undvika.",
        ],
      },
    },
    {
      heading: "Tips inför teoriproven",
      html: `<p>Trafikverket ber dig komma <strong>minst 30 minuter före</strong> provet så att ett foto hinner tas på förarprovskontoret, och ta med giltig legitimation med foto. De hjälpmedel du behöver finns i provsalen och mobilen ska vara helt avstängd.</p>`,
      list: {
        ordered: true,
        items: [
          "Sov ordentligt och ät något innan du åker.",
          "Kom i god tid med giltig legitimation och stäng av mobilen.",
          "Svara först på det du är säker på och håll koll på klockan: 50 minuter per prov.",
          "Läs alla alternativ innan du väljer, särskilt på lagstiftningsprovet.",
          "Ändra inte ett svar utan en tydlig anledning.",
        ],
      },
    },
    {
      heading: "Körprovet för taxi",
      html: `<p>För att göra körprovet behöver du ett giltigt körkort för behörighet B, utfärdat i Sverige eller ett annat EES-land, samt giltig legitimation. Du väljer manuell eller automat när du bokar Trafikverkets bil. Enligt Trafikverket har provet tre delar:</p>`,
      list: {
        ordered: true,
        items: [
          "<strong>Fordonskontroll.</strong> Du hittar fel på bilen och föreslår hur de kan åtgärdas.",
          "<strong>Passagerarsäkerhet.</strong> En uppgift som att justera säte, nackstöd och bälte eller använda barnsäkerhetsutrustning.",
          "<strong>Körning.</strong> Minst 35 minuter på landsväg och i stad till ett bestämt mål. GPS finns på plats, du får en muntlig uppgift, får göra anteckningar och ska också kunna hitta utan GPS.",
        ],
      },
    },
    {
      alert: {
        title: "Förbered dig på verklighetsnära uppgifter",
        html: `<p>Trafikverket nämner exempel som att hämta en passagerare med tungt bagage vid dörren, följa skyltar till en by samt hantera ändrade mål eller vägarbeten. Träna på att tänka högt kring vad du gör och varför. Provet handlar om lugn, säker och kundvänlig körning.</p>`,
      },
    },
    {
      heading: "Stöd, bokning och kostnader",
      html: `<p>Du bokar och betalar via Trafikverkets bokningstjänst. Enligt Trafikverkets prislista 2026 kostar teoriproven 420 kr per del dagtid och 520 kr kvällar och helger, och körprovet 1 000 kr dagtid och 1 400 kr kvällar och helger. Hela kostnadsbilden finns i <a href="/sv/blog/taxi-licence-cost-sweden/">vad kostar taxilegitimation</a>, och kontrollera alltid <a href="https://www.trafikverket.se/korkort/priser/">Trafikverkets prissida</a>.</p><p>Har du dyslexi, adhd, autism eller liknande behov kan du ansöka om stöd, och teoriprovet för taxi kan göras med förlängd provtid. Du ansöker med BankID via Trafikverkets sida om prov med stöd.</p>`,
    },
    {
      heading: "Öva med Drive Test",
      html: `<p>Appen <strong>Drive Test</strong> ger dig frågor i officiell stil med förklaringar, lägena Övning, Anpassat och Granska, bokmärken och analys per kategori, så att din fyraveckorsplan får riktiga data bakom sig. Se sidan för <a href="/sv/exams/taxi-licence/">taxiförarlegitimation</a> för vad som ingår. Efter proven följer du stegen i vår <a href="/sv/taxi-licence-guide/">guide till taxiförarlegitimation</a>, och kolla <a href="/sv/blog/taxi-licence-medical-requirements/">läkarintyg för taxi</a> i god tid så att intyget inte försenar dig.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Hur länge ska jag plugga inför taxiprovet?", aHtml: "Det beror på din bakgrund, men fyra veckor med regelbundna korta pass är en rimlig plan för de flesta. Det viktiga är att repetera och gå igenom sina fel." },
    { q: "Hur många rätt krävs för att klara teoriprovet?", aHtml: "Minst 48 rätt på delprov 1 och minst 34 rätt på delprov 2, enligt Trafikverket." },
    { q: "Vad händer om jag blir underkänd på en del?", aHtml: "Då bokar du om just den delen. Båda teoridelarna måste vara godkända inom sex månader från den första godkända. Kontrollera Trafikverkets aktuella regler för omprov." },
    { q: "Får jag mer tid om jag har dyslexi?", aHtml: "Ja, du kan ansöka om stöd och teoriprovet för taxi kan göras med förlängd provtid. Du ansöker via Trafikverkets sida om prov med stöd." },
    { q: "Kan jag köra körprovet i min egen bil?", aHtml: "Trafikverkets sida beskriver att provet görs i Trafikverkets bil, manuell eller automat, som du väljer vid bokningen. Fråga Trafikverket om andra möjligheter." },
    { q: "Vad ska jag ta med på provdagen?", aHtml: "Giltig legitimation med foto. Kom minst 30 minuter i förväg för fotot och ha mobilen helt avstängd under teoriprovet." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/blog/taxi-licence-exam-questions/", "/sv/blog/taxi-licence-cost-sweden/", "/sv/taxi-licence-guide/", "/sv/exams/taxi-licence/"],
};


const extraEn: ArticleSection[] = [
  {
    heading: "How to practise for the driving test",
    html: `<p>Because the driving test is about calm, safe, passenger-friendly driving, practise in conditions close to the real thing. Drive with a friend as a pretend passenger, give them an oral destination and a change of plan, and talk through your mirror checks, speed choices and how you help with luggage. Rehearse the vehicle check as a routine: walk around the car, check lights and tyres, fluids and warning lights, and say out loud what you would do about each fault.</p><p>Also practise finding your way <strong>without GPS</strong>. Trafikverket says you must be able to do that, so get used to reading signs and holding a route in your head. If you plan to use an automatic car on the test, make sure you have practised in one.</p>`,
  },
  {
    html: `<p><strong>What to do if you do not pass</strong></p><p>A failed part is not the end. Look at which area went wrong, use your bookmarks and category analytics to find the pattern, and rebook that part only. Remember the six-month window: both theory parts must be passed within six months of the first one you passed, so rebook with that in mind. Retakes are paid for again, so it is worth spending an extra week on weak spots before you book.</p>`,
  },
];
const extraSv: ArticleSection[] = [
  {
    heading: "Så övar du inför körprovet",
    html: `<p>Eftersom körprovet handlar om lugn, säker och passagerarvänlig körning bör du öva under förhållanden som liknar det riktiga. Kör med en vän som låtsas vara passagerare, ge en muntlig destination och en planändring, och berätta högt om dina spegelkontroller, hastighetsval och hur du hjälper till med bagage. Träna fordonskontrollen som en rutin: gå runt bilen, kontrollera lyktor och däck, vätskor och varningslampor, och säg högt vad du skulle göra åt varje fel.</p><p>Träna också på att hitta <strong>utan GPS</strong>. Trafikverket säger att du ska kunna det, så vänj dig vid att läsa skyltar och hålla en rutt i huvudet. Planerar du att köra automat på provet bör du ha övat i en sådan bil.</p>`,
  },
  {
    html: `<p><strong>Om du inte klarar provet</strong></p><p>Ett underkänt delprov är inte slutet. Se vilket område det gick fel på, använd dina bokmärken och kategorianalysen för att hitta mönstret och boka om just den delen. Kom ihåg sexmånadersfönstret: båda teoridelarna ska vara godkända inom sex månader från det första godkända delprovet, så boka om med det i åtanke. Omprov betalas på nytt, så det lönar sig att lägga en extra vecka på de svaga punkterna innan du bokar.</p>`,
  },
];
en.sections.splice(en.sections.length - 1, 0, ...extraEn);
sv.sections.splice(sv.sections.length - 1, 0, ...extraSv);


const more1: ArticleSection[] = [];
const more2: ArticleSection[] = [
  {
    html: `<p><strong>Kom ihåg helheten.</strong> Att klara taxiprovet är ett delmål. Därefter väntar läkarintyg, ansökan och beslut hos Transportstyrelsen, och först när legitimationen är levererad får du köra taxi. Räkna därför med några veckor extra, och boka proven så att varken teoriproven (högst tre år gamla vid ansökan) eller körprovet (högst ett år) hinner bli för gamla.</p>`,
  },
];
en.sections.splice(en.sections.length - 1, 0, ...more1);
sv.sections.splice(sv.sections.length - 1, 0, ...more2);


const more3: ArticleSection[] = [
  {
    html: `<p><strong>Build a routine around mistakes.</strong> After each practice session, write down the three questions you got wrong and the one idea behind each. Next day, answer those same questions again before starting anything new. This small habit turns errors into the fastest form of learning, and it is the main thing that separates people who pass from people who keep rebooking.</p>`,
  },];
const more4: ArticleSection[] = [
  {
    html: `<p><strong>Bygg en rutin kring dina misstag.</strong> Skriv efter varje övningspass ned de tre frågor du svarade fel på och tanken bakom var och en. Svara på just de frågorna igen nästa dag innan du börjar med något nytt. Den lilla vanan gör felen till det snabbaste sättet att lära sig, och det är det som oftast skiljer dem som klarar provet från dem som fortsätter att boka om.</p><p>Hitta också en studiekompis om du kan. Att förklara en regel för någon annan visar direkt om du verkligen förstått den, och ni kan förhöra varandra på de områden där ni är osäkra.</p>`,
  },];
en.sections.splice(en.sections.length - 1, 0, ...more3);
sv.sections.splice(sv.sections.length - 1, 0, ...more4);

export const howToPassTaxiLicenceTest = { slug: "how-to-pass-taxi-licence-test", en, sv };
