import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent } from "./types";

const sources = [
  { label: "Transportstyrelsen – TSFS 2021:119, 1 § (taxi driver test is carried out in Swedish)", url: "https://www.transportstyrelsen.se/TSFS/TSFS%202021_119k.pdf" },
  { label: "Transportstyrelsen – TSFS 2021:118, 1 § (yrkeskunnande taxi test is carried out in Swedish)", url: "https://www.transportstyrelsen.se/TSFS/TSFS%202021_118k.pdf" },
  { label: "Trafikverket – Taxiförarlegitimation", url: "https://www.trafikverket.se/korkort/yrkesprov/taxiforarlegitimation/" },
  { label: "Trafikverket – Teoriprov och yrkesprov med stöd", url: "https://www.trafikverket.se/korkort/ta-korkort/teoriprov-och-yrkesprov-med-stod/" },
  { label: "Trafikverket – Teoriprovet på annat språk (category B)", url: "https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/teoriprovet-pa-annat-sprak/" },
];

const en: ArticleContent = {
  metaTitle: "Taxi Exam for Non-Native Speakers in Sweden | Drive Test",
  metaDescription:
    "Taxi exam for non-native speakers in Sweden: which language the test is in, what support exists, how to learn Swedish taxi terms and study in your own language.",
  eyebrow: "Sweden · Languages",
  tag: "Languages",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Updated 13 October 2026",
  title: "Taxi Exam for Non-Native Speakers in Sweden",
  lede: "Taking the <strong>taxi exam as a non-native speaker</strong> in Sweden means preparing for a test that is written in Swedish. This article explains what the rules say, what support you can ask for, and how to study the terminology in a language you understand.",
  intro:
    "Many people who want a <strong>taxiförarlegitimation</strong> in Sweden did not grow up speaking Swedish. A very common question is: <em>can I take the taxi exam in English or Arabic?</em> We have checked the official sources. In short, the regulations say the taxi tests are carried out in Swedish, which makes preparation strategy the thing to get right. The article states what we could and could not confirm.",
  excerpt:
    "Which language the Swedish taxi tests are in, what support exists, and how to prepare if Swedish is not your first language.",
  cover: "/assets/blog/ob-taxi-driving.jpg",
  sections: [
    {
      heading: "The taxi exam for non-native speakers: what language is the test in?",
      html: `<p>Transportstyrelsen's regulation on the taxi driver licence (TSFS 2021:119) states that the professional competence test for taxi drivers <strong>is carried out in Swedish</strong>. The regulation for the company-side exam (TSFS 2021:118) says the same about the yrkeskunnande test for taxi traffic.</p><p>The page Trafikverket publishes about the taxi licence test describes the structure and topics, but does not describe translated versions or an interpreter option. We did not find an official page confirming either for the taxi tests, so do not plan around them without checking.</p>`,
    },
    {
      card: {
        title: "Confirm before you book",
        html: `<p>Trafikverket's customer service can tell you what is possible for your situation at the time you book. Ask specifically about the <em>taxi</em> tests, because rules differ between test types.</p>`,
      },
    },
    {
      heading: "What about the car theory test in other languages?",
      html: `<p>You may read that the theory test is available in many languages. That is true for the <strong>category B car theory test</strong>: Trafikverket lists 15 languages, and an interpreter option for people who cannot read and understand Swedish. But that page covers the B test and does not mention taxi. Do not assume the same options apply to the taxi licence test.</p>`,
      table: {
        headers: ["Test", "Language rule we could verify"],
        rows: [
          { cells: ["Taxi driver licence tests (theory and driving)", "Carried out in Swedish (TSFS 2021:119)"] },
          { cells: ["Yrkeskunnande, taxi company", "Carried out in Swedish (TSFS 2021:118)"] },
          { cells: ["B car theory test", "Available in several languages and with an interpreter, per Trafikverket"] },
        ],
      },
    },
    {
      heading: "Support you can apply for",
      html: `<p>Trafikverket offers theory tests with support for people with, for example, dyslexia, ADHD, autism or a language disorder. For the taxi theory test this includes <strong>extended test time</strong>. You apply through Trafikverket's e-service with BankID and need a certificate from a qualified professional. This is not a language accommodation for second-language speakers, so it only applies if you have one of those needs.</p>`,
    },
    {
      heading: "Learn the Swedish taxi terms first",
      html: `<p>If the exam is in Swedish, the efficient approach is to learn the concepts in a language you know well, then learn the Swedish words that go with them. Start with these terms, which turn up in the topics Trafikverket lists.</p>`,
      table: {
        headers: ["Swedish term", "Meaning"],
        rows: [
          { cells: ["körprov", "driving test"] },
          { cells: ["delprov", "test part"] },
          { cells: ["lagstiftning", "legislation"] },
          { cells: ["trafikregler, vägmärken", "traffic rules, road signs"] },
          { cells: ["passagerare", "passenger"] },
          { cells: ["funktionsnedsättning", "disability"] },
          { cells: ["fordonskontroll", "vehicle check"] },
          { cells: ["laglydnad", "law-abidingness"] },
        ],
      },
    },
    {
      heading: "A study method that works for second-language learners",
      html: `<p>Use a simple loop.</p>`,
      list: {
        ordered: true,
        items: [
          "Read a question in your own language first, so you understand the idea.",
          "Read the same question in Swedish, and notice the key words.",
          "Listen to the Swedish question read aloud so you connect the spelling and the sound.",
          "Bookmark the words you miss and review them every few days.",
          "Finish with timed practice entirely in Swedish, because that is what the exam will look like.",
        ],
      },
    },
    {
      heading: "How Drive Test helps",
      html: `<p>This is exactly the situation the <strong>Drive Test app</strong> was built for. It offers multi-language support and text-to-speech, so you can read or listen to a question in the language you feel most comfortable with, then switch to Swedish. The site lists Swedish, English, Arabic and Somali, and you should check the app for the current list. Explanations show why an answer is correct, an AI tutor helps when something does not click, and bookmarks keep tricky words in front of you. Because the exam itself is in Swedish, finish your preparation in Swedish.</p><p>Read more about it on our <a href="/for/international-drivers/">page for international drivers</a> and the <a href="/exams/taxi-licence/">taxi licence exam page</a>.</p>`,
    },
    {
      heading: "Next steps",
      html: `<p>Learn what the exam asks in <a href="/blog/taxi-licence-exam-questions/">taxi licence exam questions</a>, follow the <a href="/blog/how-to-pass-taxi-licence-test/">study plan</a>, and see the full process in the <a href="/taxi-licence-guide/">taxi licence guide</a>. If you work in Swedish taxi on a permit, our <a href="/ob-taxi-sweden/">OB calculator</a> helps you keep accurate pay records.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Can I take the taxi exam in English?", aHtml: "The regulations state that the taxi tests are carried out in Swedish. We found no official page confirming an English version. Confirm with Trafikverket before booking." },
    { q: "Can I use an interpreter for the taxi theory test?", aHtml: "Trafikverket describes interpreter tests for the B car theory test. We could not confirm the same for the taxi tests, so ask Trafikverket's customer service." },
    { q: "Is there extra time for non-native speakers?", aHtml: "Extra time is offered as support for needs such as dyslexia, ADHD or autism, with a certificate. It is not given for second-language learners as such." },
    { q: "Does Drive Test have the questions in other languages?", aHtml: "The app has multi-language support and text-to-speech to help you understand the questions. The real exam is in Swedish, so practise in Swedish too." },
    { q: "How can I learn the Swedish terms quickly?", aHtml: "Learn the concept in your own language, then the Swedish word, listen to it read aloud, and bookmark the words you miss to review." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/blog/how-to-pass-taxi-licence-test/", "/blog/taxi-licence-exam-questions/", "/for/international-drivers/", "/exams/taxi-licence/"],
};

const sv: ArticleContent = {
  metaTitle: "Taxiprov på engelska, arabiska m.fl. språk | Drive Test",
  metaDescription:
    "Taxiprov på engelska eller arabiska? Vi reder ut vilket språk taxiproven genomförs på, vilket stöd som finns och hur du pluggar svenska termer på ditt språk.",
  eyebrow: "Sverige · Språk",
  tag: "Språk",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Uppdaterad 13 oktober 2026",
  title: "Taxiprov på engelska, arabiska och andra språk",
  lede: "Kan man göra <strong>taxiprovet på engelska</strong> eller <strong>arabiska</strong>? Här går vi igenom vad reglerna säger, vilket stöd du kan ansöka om och hur du kan plugga terminologin på ett språk du förstår.",
  intro:
    "Många som vill ha <strong>taxiförarlegitimation</strong> i Sverige har inte svenska som modersmål. En vanlig fråga är därför: <em>kan jag göra taxiprovet på engelska eller arabiska?</em> Vi har kontrollerat de officiella källorna. Kort sagt anger föreskrifterna att taxiproven genomförs på svenska, vilket gör att det är förberedelsen som avgör. Artikeln anger vad vi kunde och inte kunde bekräfta.",
  excerpt:
    "Vilket språk de svenska taxiproven genomförs på, vilket stöd som finns och hur du förbereder dig om svenska inte är ditt första språk.",
  cover: "/assets/blog/ob-taxi-driving.jpg",
  sections: [
    {
      heading: "Taxiprov på andra språk: vilket språk gäller?",
      html: `<p>Transportstyrelsens föreskrift om taxiförarlegitimation (TSFS 2021:119) anger att provet i yrkeskompetens för taxiförare <strong>ska genomföras på svenska</strong>. Föreskriften för företagsprovet (TSFS 2021:118) säger samma sak om provet i yrkeskunnande för taxitrafik.</p><p>Trafikverkets sida om taxiprovet beskriver upplägg och områden men nämner inga översatta versioner eller tolkmöjlighet. Vi hittade ingen officiell sida som bekräftar något av det för taxiproven, så planera inte utifrån det utan att kontrollera först.</p>`,
    },
    {
      card: {
        title: "Kontrollera innan du bokar",
        html: `<p>Trafikverkets kundtjänst kan berätta vad som är möjligt i just din situation när du bokar. Fråga uttryckligen om <em>taxiproven</em>, eftersom reglerna skiljer sig mellan olika prov.</p>`,
      },
    },
    {
      heading: "Och teoriprovet för bil på andra språk?",
      html: `<p>Du kanske har läst att teoriprovet finns på många språk. Det stämmer för <strong>teoriprovet för körkort B</strong>: Trafikverket listar 15 språk och en tolkmöjlighet för den som inte kan läsa och förstå svenska. Men den sidan gäller B-provet och nämner inte taxi. Räkna inte med att samma möjligheter finns för taxiförarlegitimationen.</p>`,
      table: {
        headers: ["Prov", "Språkregel vi kunnat verifiera"],
        rows: [
          { cells: ["Taxiförarlegitimation (teori och körprov)", "Genomförs på svenska (TSFS 2021:119)"] },
          { cells: ["Yrkeskunnande taxi", "Genomförs på svenska (TSFS 2021:118)"] },
          { cells: ["Teoriprov B-körkort", "Finns på flera språk och med tolk, enligt Trafikverket"] },
        ],
      },
    },
    {
      heading: "Stöd du kan ansöka om",
      html: `<p>Trafikverket erbjuder teoriprov med stöd för till exempel dyslexi, adhd, autism eller språkstörning. För teoriprovet för taxi innebär det <strong>förlängd provtid</strong>. Du ansöker via Trafikverkets e-tjänst med BankID och behöver ett intyg från en kvalificerad yrkesperson. Det är inte en språkanpassning för den som har svenska som andraspråk, utan gäller bara om du har något av de behoven.</p>`,
    },
    {
      heading: "Lär dig de svenska taxitermerna först",
      html: `<p>Om provet är på svenska är det effektivast att lära sig begreppen på ett språk du behärskar och sedan de svenska orden som hör till. Börja med termerna nedan, som dyker upp i de områden Trafikverket listar.</p>`,
      table: {
        headers: ["Svensk term", "Förklaring"],
        rows: [
          { cells: ["körprov", "praktiskt prov i bil"] },
          { cells: ["delprov", "en del av ett prov"] },
          { cells: ["lagstiftning", "lagar och regler"] },
          { cells: ["trafikregler, vägmärken", "regler och skyltar i trafiken"] },
          { cells: ["passagerare", "den som åker med"] },
          { cells: ["funktionsnedsättning", "när kroppen eller sinnena fungerar annorlunda"] },
          { cells: ["fordonskontroll", "kontroll av bilen innan körning"] },
          { cells: ["laglydnad", "att följa lagen"] },
        ],
      },
    },
    {
      heading: "Studiemetod för dig som har svenska som andraspråk",
      html: `<p>Använd en enkel loop.</p>`,
      list: {
        ordered: true,
        items: [
          "Läs frågan på ditt eget språk först så att du förstår idén.",
          "Läs samma fråga på svenska och lägg märke till nyckelorden.",
          "Lyssna på svenska frågan uppläst så att stavning och uttal hänger ihop.",
          "Bokmärk orden du missar och repetera dem med några dagars mellanrum.",
          "Avsluta med tidsatt övning helt på svenska, för så ser det riktiga provet ut.",
        ],
      },
    },
    {
      heading: "Så hjälper Drive Test",
      html: `<p>Det här är precis den situation appen <strong>Drive Test</strong> är gjord för. Den har flerspråkigt stöd och text-till-tal, så att du kan läsa eller lyssna på en fråga på det språk du är tryggast med och sedan växla till svenska. På vår sida nämns svenska, engelska, arabiska och somaliska, och du bör kolla appen för den aktuella listan. Förklaringar visar varför ett svar är rätt, en AI-tutor hjälper när något inte sitter och bokmärken håller svåra ord framför dig. Eftersom själva provet är på svenska bör du avsluta förberedelserna på svenska.</p><p>Läs mer på vår sida för <a href="/sv/for/international-drivers/">internationella förare</a> och sidan för <a href="/sv/exams/taxi-licence/">taxiförarlegitimation</a>.</p>`,
    },
    {
      heading: "Nästa steg",
      html: `<p>Se vad provet frågar om i <a href="/sv/blog/taxi-licence-exam-questions/">taxiförarlegitimation frågor</a>, följ <a href="/sv/blog/how-to-pass-taxi-licence-test/">studieplanen</a> och läs hela processen i <a href="/sv/taxi-licence-guide/">guiden till taxiförarlegitimation</a>. Arbetar du i svensk taxi med tillstånd hjälper vår <a href="/sv/ob-taxi-sweden/">OB-kalkylator</a> dig att hålla koll på lönen.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Kan jag göra taxiprovet på engelska?", aHtml: "Föreskrifterna anger att taxiproven genomförs på svenska. Vi hittade ingen officiell sida som bekräftar en engelsk version. Bekräfta med Trafikverket innan du bokar." },
    { q: "Kan jag använda tolk på teoriprovet för taxi?", aHtml: "Trafikverket beskriver tolkprov för teoriprovet för körkort B. Vi kunde inte bekräfta samma sak för taxiproven, så fråga Trafikverkets kundtjänst." },
    { q: "Får jag extra tid om svenska är mitt andraspråk?", aHtml: "Extra tid ges som stöd vid behov som dyslexi, adhd eller autism, med intyg. Den ges inte för andraspråksinlärare i sig." },
    { q: "Finns frågorna i Drive Test på andra språk?", aHtml: "Appen har flerspråkigt stöd och text-till-tal som hjälper dig att förstå frågorna. Det riktiga provet är på svenska, så öva även på svenska." },
    { q: "Hur lär jag mig de svenska termerna snabbt?", aHtml: "Lär dig begreppet på ditt eget språk, sedan det svenska ordet, lyssna på det uppläst och bokmärk orden du missar för repetition." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/blog/how-to-pass-taxi-licence-test/", "/sv/blog/taxi-licence-exam-questions/", "/sv/for/international-drivers/", "/sv/exams/taxi-licence/"],
};


const extraEn: ArticleSection[] = [
  {
    html: `<p><strong>Practical tips for exam day</strong></p><p>Arrive at least 30 minutes early for the photo and bring valid photo ID. Your phone must be switched off completely. Read each question slowly in Swedish, and underline the key verb and any word like <em>always</em>, <em>never</em> or <em>first</em> in your head. If a word is unfamiliar, look at the other words around it and at the answer options: often the context is enough. Use all 50 minutes per test, there is no prize for finishing early, and use the last minutes to re-read questions you marked as unsure.</p>`,
  },
  {
    heading: "If you are an employer or a fleet owner",
    html: `<p>If you employ drivers who learned Swedish as a second language, give them time to prepare and the right materials. A good plan is to let them study the concepts in their own language, then practise the same questions in Swedish. For the company-side requirements, see <a href="/blog/yrkeskunnande-taxi-exam/">the yrkeskunnande taxi exam</a>, and our <a href="/for/taxi-companies/">page for taxi companies</a>.</p>`,
  },
];
const extraSv: ArticleSection[] = [
  {
    html: `<p><strong>Praktiska tips inför provdagen</strong></p><p>Kom minst 30 minuter före för fotot och ta med giltig legitimation med foto. Mobilen ska vara helt avstängd. Läs varje fråga långsamt på svenska och leta efter nyckelverbet och ord som <em>alltid</em>, <em>aldrig</em> eller <em>först</em>. Är ett ord obekant, titta på orden runt omkring och på svarsalternativen: ofta räcker sammanhanget. Använd alla 50 minuter per prov, det finns inget pris för att bli klar tidigt, och använd sista minuterna till att läsa om frågor du markerat som osäkra.</p>`,
  },
  {
    heading: "Om du är arbetsgivare eller äger en bilpark",
    html: `<p>Om du anställer förare som lärt sig svenska som andraspråk, ge dem tid att förbereda sig och rätt material. En bra plan är att låta dem studera begreppen på sitt eget språk och sedan öva samma frågor på svenska. För företagets egna krav, se <a href="/sv/blog/yrkeskunnande-taxi-exam/">yrkeskunnande taxi</a> och vår sida för <a href="/sv/for/taxi-companies/">taxiföretag</a>.</p>`,
  },
];
en.sections.splice(en.sections.length - 1, 0, ...extraEn);
sv.sections.splice(sv.sections.length - 1, 0, ...extraSv);


const more1: ArticleSection[] = [
  {
    html: `<p><strong>Be realistic about your timeline.</strong> If your Swedish is at an early stage, give yourself more time than the four weeks that many first-language speakers need. A sensible plan is to spend the first weeks building vocabulary and understanding the topics in your own language, and only then move to timed practice in Swedish. Short daily sessions of 20 to 30 minutes usually work better than one long weekend session, because the words move into long-term memory when you meet them repeatedly.</p><p>Try to read real Swedish too: traffic signs, the taxi-related pages on Trafikverket and Transportstyrelsen, and notices at the förarprovskontor. The more of the vocabulary you meet in real situations, the less foreign it will feel in the exam room.</p>`,
  },];
const more2: ArticleSection[] = [
  {
    html: `<p><strong>Var realistisk med tidsplanen.</strong> Om din svenska är på en tidig nivå, ge dig själv mer tid än de fyra veckor som många med svenska som förstaspråk behöver. En vettig plan är att lägga de första veckorna på att bygga ordförråd och förstå områdena på ditt eget språk, och först därefter gå över till tidsatt övning på svenska. Korta dagliga pass på 20 till 30 minuter fungerar oftast bättre än ett långt helgpass, eftersom orden fastnar i långtidsminnet när du möter dem om och om igen.</p><p>Försök också läsa riktig svenska: vägmärken, taxirelaterade sidor hos Trafikverket och Transportstyrelsen, och anslag på förarprovskontoret. Ju mer av ordförrådet du möter i verkliga situationer, desto mindre främmande känns det i provsalen.</p><p>Ett sista råd: prata med andra förare som redan klarat provet. De kan berätta vilka svenska ord som var svåra och hur de övade, och du slipper upptäcka samma fallgropar själv.</p>`,
  },];
en.sections.splice(en.sections.length - 1, 0, ...more1);
sv.sections.splice(sv.sections.length - 1, 0, ...more2);


const more3: ArticleSection[] = [
  {
    html: `<p><strong>What we could not confirm.</strong> We looked for an official statement on translated taxi tests and interpreters and did not find one. The 2026 situation may differ from older articles and forum posts you read, so give more weight to the regulations and to Trafikverket's own pages than to second-hand claims. If you learn something different from Trafikverket, we would be glad to hear it so the article can be updated.</p>`,
  },];
const more4: ArticleSection[] = [
  {
    html: `<p><strong>Det vi inte kunnat bekräfta.</strong> Vi har letat efter ett officiellt besked om översatta taxiprov och tolk och inte hittat något. Läget 2026 kan skilja sig från äldre artiklar och forumtrådar du läser, så ge föreskrifterna och Trafikverkets egna sidor större tyngd än andrahandsuppgifter. Får du ett annat besked av Trafikverket uppdaterar vi gärna artikeln.</p><p>Tills du vet något annat är det tryggast att utgå från att provet är på svenska. Då blir din förberedelse rätt oavsett vad Trafikverket svarar, och en eventuell extra möjlighet blir en bonus i stället för en förutsättning.</p>`,
  },];
en.sections.splice(en.sections.length - 1, 0, ...more3);
sv.sections.splice(sv.sections.length - 1, 0, ...more4);

export const taxiExamForNonNativeSpeakers = { slug: "taxi-exam-for-non-native-speakers", en, sv };
