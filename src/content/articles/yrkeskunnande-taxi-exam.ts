import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent } from "./types";

const sources = [
  { label: "Transportstyrelsen – Prov i yrkeskunnande för taxitrafiktillstånd", url: "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/prov-i-yrkeskunnande-for-trafiktillstand/" },
  { label: "Transportstyrelsen – Trafikansvarig (taxi)", url: "https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/trafikansvarig/" },
  { label: "Transportstyrelsen – TSFS 2021:118 (prov i yrkeskunnande, taxitrafik)", url: "https://www.transportstyrelsen.se/TSFS/TSFS%202021_118k.pdf" },
  { label: "Transportstyrelsen – Fees for yrkestrafik", url: "https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/" },
  { label: "Trafikverket – Prices for tests (updated 7 January 2026)", url: "https://www.trafikverket.se/korkort/priser/" },
];

const en: ArticleContent = {
  metaTitle: "Yrkeskunnande Taxi Exam: Who Needs It | Drive Test",
  metaDescription:
    "The yrkeskunnande taxi exam explained: who needs it for a taxi traffic permit, the four test parts, how long each takes, exemptions and how to prepare.",
  eyebrow: "Sweden · Taxi company",
  tag: "Taxi company",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Updated 13 October 2026",
  title: "The Yrkeskunnande Taxi Exam Explained",
  lede: "The <strong>yrkeskunnande taxi exam</strong> is the professional competence test you need to pass to run a taxi company in Sweden. This guide explains who needs it, the four test parts, how they are run and how to prepare.",
  intro:
    "Driving a taxi and running a taxi company are two different things in Swedish law. To drive, you need a <strong>taxiförarlegitimation</strong>. To hold a <strong>taxi traffic permit (trafiktillstånd)</strong>, the company needs a responsible person who can show <strong>yrkeskunnande</strong>, professional competence in running a transport business. That is proven by a written exam organised by Trafikverket.",
  excerpt:
    "Who needs the yrkeskunnande exam for a taxi traffic permit, what the four parts cover, timing, exemptions and preparation.",
  cover: "/assets/blog/ob-permit-paperwork.jpg",
  sections: [
    {
      heading: "What the yrkeskunnande taxi exam is",
      html: `<p>The <strong>yrkeskunnande taxi exam</strong> (prov i yrkeskunnande för taxitrafik) is one of the requirements for a taxi traffic permit. Transportstyrelsen decides on the permit, Trafikverket runs the written tests, and the rules are set out in Transportstyrelsen's regulation TSFS 2021:118.</p><p>Do not mix it up with the taxi driver licence exam. That one is about driving passengers safely and following taxi rules, covered in <a href="/blog/taxi-licence-exam-questions/">taxi licence exam questions</a>. The yrkeskunnande exam is about running a company: law, finances and technical standards.</p>`,
    },
    {
      heading: "Who needs to pass it",
      html: `<p>A legal entity that holds a taxi traffic permit must have a <strong>trafikansvarig</strong>, one person responsible for making sure the business follows the taxi rules. According to Transportstyrelsen this is, in general:</p>`,
      list: {
        ordered: false,
        items: [
          "In an <strong>aktiebolag</strong> or ekonomisk förening: the managing director (verkställande direktör), or if there is none, a board member appointed by the company.",
          "In a <strong>handelsbolag</strong>: every partner (bolagsman).",
          "In an <strong>enskild firma</strong> (sole trader): the owner must meet the requirements personally.",
        ],
      },
    },
    {
      html: `<p>The trafikansvarig must show yrkeskunnande by passing the written tests, and is also part of the suitability review (lämplighetsprövning) for the permit, which includes <strong>good reputation</strong> and <strong>financial circumstances</strong>. Check Transportstyrelsen's page for the details of those requirements.</p>`,
    },
    {
      heading: "The four test parts",
      html: `<p>The exam has four parts (delprov). You can take them in any order, and all four must be passed within <strong>six months</strong> of the first part you pass.</p>`,
      table: {
        headers: ["Delprov", "Subject", "Time"],
        rows: [
          { cells: ["1", "Rättsregler (legal rules)", "45 minutes"] },
          { cells: ["2", "Företagsledning och ekonomisk ledning av ett företag (business and financial management)", "45 minutes"] },
          { cells: ["3", "Tekniska normer, driftsförhållanden och trafiksäkerhet (technical standards, operating conditions and traffic safety)", "45 minutes"] },
          { cells: ["4", "Fördjupade kunskaper om delprov 1 till 3 (case studies)", "120 minutes"] },
        ],
      },
    },
    {
      html: `<p class="muted">Transportstyrelsen's page does not state the pass marks, so we do not quote any. Check the official knowledge requirements (kunskapskrav) linked from that page before you plan your preparation.</p>`,
    },
    {
      heading: "What the topics look like in practice",
      html: `<p>The regulation shows that the finance part is practical: candidates need to be able to set up and interpret a <strong>profit and loss budget and a liquidity budget</strong>, and to understand what a <strong>balance sheet</strong> and an <strong>income statement</strong> are and how they are read. The legal part covers the rules that govern taxi traffic and companies, and the technical part covers vehicle standards, operating conditions and road safety.</p><p>Delprov 4 builds on the first three with case studies, so it rewards people who understand how the topics connect, not just people who memorise facts.</p>`,
    },
    {
      heading: "Exemptions and the kontrollprov",
      html: `<p>Transportstyrelsen may grant an exemption in some cases. If you have education that covers certain subjects, you may be exempt from those. If you can document <strong>at least five years of practical experience</strong> as a trafikansvarig or at management level in a transport company, you may be exempt from the whole exam, but you still must pass a <strong>kontrollprov</strong>, which consists of delprov 4, the case studies.</p><p>As of 2026, Transportstyrelsen lists an exemption from the competence test rules at 4 300 kr. Check the <a href="https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/">official fee page</a> for the current figure.</p>`,
    },
    {
      heading: "How the test is run, language and cost",
      html: `<p>You book the test through Trafikverket and take it at a förarprovskontor. TSFS 2021:118 states that the test is carried out <strong>in Swedish</strong>. People with reading or writing difficulties and similar needs can apply for support, such as extended time, through Trafikverket's page for tests with support. If language is your main worry, read <a href="/blog/taxi-exam-for-non-native-speakers/">the taxi exam for non-native speakers</a>.</p><p>As of 2026, Trafikverket's price list shows 420 kr (daytime) and 520 kr (evenings and weekends) for the taxi yrkeskunnande test. The page does not make clear whether that is per part, so confirm this with Trafikverket when you book. The permit itself is a separate Transportstyrelsen fee, listed at 12 500 kr in 2026. See <a href="/blog/taxi-licence-cost-sweden/">taxi licence cost in Sweden</a> for the driver side of the costs.</p>`,
    },
    {
      heading: "How to prepare",
      html: `<p>Plan around the four parts: refresh the legal framework, practise the budgeting and accounting basics, learn the technical and safety standards, and then work through case studies. The <strong>Drive Test app</strong> includes study material for Yrkeskunnande, with explanations of why an answer is correct, multi-language support with text-to-speech, practice modes and progress analytics. Start with our <a href="/exams/taxi-company/">taxi company exam page</a>. If you are a fleet owner training drivers as well, see our overview in the <a href="/taxi-licence-guide/">taxi licence guide</a>.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "What is yrkeskunnande for taxi?", aHtml: "It is the professional competence needed to run a taxi company. It is proven by passing the written yrkeskunnande exam organised by Trafikverket, as a requirement for a taxi traffic permit." },
    { q: "Do I need it to drive a taxi?", aHtml: "No. Driving a taxi requires a taxiförarlegitimation. The yrkeskunnande exam is for the person responsible for a taxi company's traffic permit." },
    { q: "How many parts does the exam have?", aHtml: "Four: legal rules, business and financial management, technical standards and traffic safety, and a case-study part. All must be passed within six months of the first." },
    { q: "Can I be exempt from the exam?", aHtml: "Possibly. With at least five years of documented experience as a trafikansvarig or in company management you can apply for an exemption, but you still need to pass the kontrollprov, which is the case-study part." },
    { q: "Is the exam held in Swedish?", aHtml: "Yes. TSFS 2021:118 states that the test is carried out in Swedish." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/blog/taxi-licence-cost-sweden/", "/blog/taxi-exam-for-non-native-speakers/", "/exams/taxi-company/", "/taxi-licence-guide/"],
};

const sv: ArticleContent = {
  metaTitle: "Yrkeskunnande taxi: prov, krav och delprov | Drive Test",
  metaDescription:
    "Yrkeskunnande taxi förklarat: vem som behöver provet för trafiktillstånd, de fyra delproven, tider, undantag och hur du förbereder dig inför provet.",
  eyebrow: "Sverige · Taxiföretag",
  tag: "Taxiföretag",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Uppdaterad 13 oktober 2026",
  title: "Yrkeskunnande taxi: provet för trafiktillstånd",
  lede: "<strong>Yrkeskunnande taxi</strong> är provet du behöver klara för att kunna driva taxiföretag i Sverige. Här går vi igenom vem som behöver det, de fyra delproven, hur provet går till och hur du förbereder dig.",
  intro:
    "Att köra taxi och att driva taxiföretag är två olika saker i svensk lagstiftning. För att köra behöver du <strong>taxiförarlegitimation</strong>. För att ett företag ska få <strong>trafiktillstånd för taxi</strong> måste det ha en ansvarig person som kan visa <strong>yrkeskunnande</strong>, alltså yrkeskompetens för att driva transportverksamhet. Det visar man genom ett skriftligt prov som Trafikverket ordnar.",
  excerpt:
    "Vem som behöver yrkeskunnandeprovet för taxitrafiktillstånd, vad de fyra delproven innehåller, tider, undantag och förberedelser.",
  cover: "/assets/blog/ob-permit-paperwork.jpg",
  sections: [
    {
      heading: "Vad är provet i yrkeskunnande för taxi?",
      html: `<p>Provet i <strong>yrkeskunnande taxi</strong> (prov i yrkeskunnande för taxitrafik) är ett av kraven för att få trafiktillstånd för taxi. Transportstyrelsen beslutar om tillståndet, Trafikverket genomför de skriftliga proven och reglerna finns i Transportstyrelsens föreskrift TSFS 2021:118.</p><p>Blanda inte ihop det med provet för taxiförarlegitimation. Det handlar om att köra passagerare säkert och följa taxireglerna, se <a href="/sv/blog/taxi-licence-exam-questions/">taxiförarlegitimation frågor</a>. Yrkeskunnandeprovet handlar om att driva ett företag: lagar, ekonomi och tekniska normer.</p>`,
    },
    {
      heading: "Vem behöver klara provet?",
      html: `<p>En juridisk person som har taxitrafiktillstånd måste ha en <strong>trafikansvarig</strong>, en person som ansvarar för att verksamheten följer taxireglerna. Enligt Transportstyrelsen är det i regel:</p>`,
      list: {
        ordered: false,
        items: [
          "I ett <strong>aktiebolag</strong> eller en ekonomisk förening: verkställande direktören, eller om det inte finns någon vd, en styrelseledamot som bolaget utsett.",
          "I ett <strong>handelsbolag</strong>: varje bolagsman.",
          "I en <strong>enskild firma</strong>: ägaren, som själv måste uppfylla kraven.",
        ],
      },
    },
    {
      html: `<p>Den trafikansvariga ska visa yrkeskunnande genom att klara de skriftliga proven och ingår i lämplighetsprövningen för tillståndet, där bland annat <strong>gott anseende</strong> och <strong>ekonomiska förhållanden</strong> bedöms. Läs Transportstyrelsens sida för detaljerna i de kraven.</p>`,
    },
    {
      heading: "De fyra delproven",
      html: `<p>Provet har fyra delprov. Du kan ta dem i valfri ordning, och alla fyra måste vara godkända inom <strong>sex månader</strong> från det första godkända delprovet.</p>`,
      table: {
        headers: ["Delprov", "Ämne", "Tid"],
        rows: [
          { cells: ["1", "Rättsregler", "45 minuter"] },
          { cells: ["2", "Företagsledning och ekonomisk ledning av ett företag", "45 minuter"] },
          { cells: ["3", "Tekniska normer, driftsförhållanden och trafiksäkerhet", "45 minuter"] },
          { cells: ["4", "Fördjupade kunskaper om delprov 1 till 3 (fallstudier)", "120 minuter"] },
        ],
      },
    },
    {
      html: `<p class="muted">Transportstyrelsens sida anger inte godkändgränserna, så vi redovisar inga. Titta på kunskapskraven som länkas från sidan innan du planerar dina förberedelser.</p>`,
    },
    {
      heading: "Så ser innehållet ut i praktiken",
      html: `<p>Föreskriften visar att ekonomidelen är praktisk: du ska kunna upprätta och tolka en <strong>resultat- och likviditetsbudget</strong> samt förstå vad en <strong>balansräkning</strong> och en <strong>resultaträkning</strong> är och hur de läses. Juridikdelen täcker reglerna för taxitrafik och företag, och den tekniska delen fordonskrav, driftsförhållanden och trafiksäkerhet.</p><p>Delprov 4 bygger på de tre första med fallstudier, så det lönar sig att förstå hur områdena hänger ihop i stället för att bara plugga fakta.</p>`,
    },
    {
      heading: "Undantag och kontrollprov",
      html: `<p>Transportstyrelsen kan i vissa fall medge undantag. Har du utbildning som täcker vissa ämnen kan du slippa dem. Kan du styrka <strong>minst fem års praktisk erfarenhet</strong> som trafikansvarig eller på ledningsnivå i ett transportföretag kan du få undantag från hela provet, men du måste ändå klara ett <strong>kontrollprov</strong>, som består av delprov 4, fallstudierna.</p><p>Enligt Transportstyrelsens avgiftslista 2026 kostar ett undantag från reglerna om prov i yrkeskunnande 4 300 kr. Se den <a href="https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/">officiella avgiftssidan</a> för aktuellt belopp.</p>`,
    },
    {
      heading: "Så går provet till, språk och kostnad",
      html: `<p>Du bokar provet hos Trafikverket och skriver det på ett förarprovskontor. Enligt TSFS 2021:118 genomförs provet <strong>på svenska</strong>. Har du läs- och skrivsvårigheter eller liknande behov kan du ansöka om stöd, till exempel förlängd provtid, via Trafikverkets sida om prov med stöd. Oroar du dig mest för språket, läs <a href="/sv/blog/taxi-exam-for-non-native-speakers/">taxiprov på engelska, arabiska och andra språk</a>.</p><p>Enligt Trafikverkets prislista 2026 kostar yrkeskunnandeprovet för taxi 420 kr dagtid och 520 kr kvällar och helger. Sidan anger inte tydligt om det gäller per delprov, så bekräfta det med Trafikverket vid bokning. Själva tillståndet är en separat avgift hos Transportstyrelsen, som 2026 anges till 12 500 kr. Förarsidans kostnader finns i <a href="/sv/blog/taxi-licence-cost-sweden/">vad kostar taxilegitimation</a>.</p>`,
    },
    {
      heading: "Så förbereder du dig",
      html: `<p>Planera efter de fyra delarna: fräscha upp regelverket, öva på budget och bokföring i grunden, lär dig tekniska normer och trafiksäkerhet och arbeta sedan med fallstudier. Appen <strong>Drive Test</strong> har studiematerial för Yrkeskunnande, förklaringar till varför ett svar är rätt, flerspråkigt stöd med text-till-tal, övningslägen och framstegsanalys. Börja på sidan för <a href="/sv/exams/taxi-company/">yrkeskunnande taxi</a>. Äger du en bilpark och utbildar förare, se även vår <a href="/sv/taxi-licence-guide/">guide till taxiförarlegitimation</a>.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Vad är yrkeskunnande taxi?", aHtml: "Det är den yrkeskompetens som krävs för att driva taxiföretag. Den visas genom att klara det skriftliga yrkeskunnandeprovet som Trafikverket ordnar, ett krav för trafiktillstånd för taxi." },
    { q: "Behöver jag provet för att köra taxi?", aHtml: "Nej. För att köra taxi behöver du taxiförarlegitimation. Yrkeskunnandeprovet är till för den som är ansvarig för ett taxiföretags trafiktillstånd." },
    { q: "Hur många delprov är det?", aHtml: "Fyra: rättsregler, företagsledning och ekonomi, tekniska normer och trafiksäkerhet samt fallstudier. Alla ska vara godkända inom sex månader från det första." },
    { q: "Kan jag få undantag från provet?", aHtml: "Kanske. Med minst fem års dokumenterad erfarenhet som trafikansvarig eller i företagsledning kan du ansöka om undantag, men du måste ändå klara kontrollprovet, det vill säga fallstudierna." },
    { q: "Görs provet på svenska?", aHtml: "Ja. Enligt TSFS 2021:118 genomförs provet på svenska." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/blog/taxi-licence-cost-sweden/", "/sv/blog/taxi-exam-for-non-native-speakers/", "/sv/exams/taxi-company/", "/sv/taxi-licence-guide/"],
};


const extraEn: ArticleSection[] = [
  {
    heading: "Yrkeskunnande or taxiförarlegitimation: which do you need?",
    html: `<p>Many people ask which exam applies to them. The answer depends on what you want to do.</p>`,
    table: {
      headers: ["You want to", "You need"],
      rows: [
        { cells: ["Drive a taxi for an employer", "A taxiförarlegitimation (theory tests, driving test, medical certificate, application)"] },
        { cells: ["Be the person responsible for a taxi company's permit", "Yrkeskunnande, shown by the written exam, plus the other permit requirements"] },
        { cells: ["Do both: own the company and drive", "Both, they are separate requirements"] },
      ],
    },
  },
  {
    html: `<p><strong>A realistic preparation timeline</strong></p><p>Because the four parts cover different skills, a rolling plan works better than one long push. For example: spend the first two weeks on the legal rules, the next two on business and financial management, a week on technical standards and traffic safety, and the last two weeks on case studies and timed practice. Treat delprov 4 as the main target, because it draws on the other three and has the longest time limit, 120 minutes.</p><p>Keep the six-month window in mind. If you pass the first part early, the clock starts, so it is wise to be ready for all four before you begin booking. Finally, check the knowledge requirements linked from Transportstyrelsen's page, and use them as a checklist of what you can and cannot yet explain.</p>`,
  },
];
const extraSv: ArticleSection[] = [
  {
    heading: "Yrkeskunnande eller taxiförarlegitimation: vilket behöver du?",
    html: `<p>Många undrar vilket prov som gäller dem. Svaret beror på vad du vill göra.</p>`,
    table: {
      headers: ["Du vill", "Du behöver"],
      rows: [
        { cells: ["Köra taxi hos en arbetsgivare", "Taxiförarlegitimation (teoriprov, körprov, läkarintyg, ansökan)"] },
        { cells: ["Vara ansvarig för ett taxiföretags tillstånd", "Yrkeskunnande, visat genom det skriftliga provet, plus övriga krav för tillståndet"] },
        { cells: ["Göra båda: äga företaget och köra", "Båda, de är separata krav"] },
      ],
    },
  },
  {
    html: `<p><strong>En realistisk tidsplan för förberedelserna</strong></p><p>Eftersom de fyra delarna täcker olika färdigheter fungerar en rullande plan bättre än en lång pluggperiod. Till exempel: lägg de första två veckorna på rättsreglerna, nästa två på företagsledning och ekonomi, en vecka på tekniska normer och trafiksäkerhet och de sista två veckorna på fallstudier och tidsatt övning. Se delprov 4 som huvudmålet, eftersom det bygger på de tre andra och har längst provtid, 120 minuter.</p><p>Ha sexmånadersfönstret i åtanke. Klarar du den första delen tidigt börjar klockan ticka, så det är klokt att vara redo för alla fyra innan du börjar boka. Kontrollera slutligen kunskapskraven som länkas från Transportstyrelsens sida och använd dem som checklista över vad du kan och inte kan förklara ännu.</p>`,
  },
];
en.sections.splice(en.sections.length - 1, 0, ...extraEn);
sv.sections.splice(sv.sections.length - 1, 0, ...extraSv);


const more1: ArticleSection[] = [
  {
    html: `<p><strong>A note on sole traders.</strong> If you run an enskild firma, you personally must meet the requirements, so you personally need to pass the exam. For a company with several owners or directors, work out early who the trafikansvarig will be, because that person carries the exam requirement. If the trafikansvarig changes later, the permit holder must notify Transportstyrelsen, and failing to do so can lead to a sanction fee of 10 000 kr.</p>`,
  },];
const more2: ArticleSection[] = [
  {
    html: `<p><strong>En not om enskild firma.</strong> Driver du enskild firma måste du själv uppfylla kraven, och alltså själv klara provet. I ett företag med flera ägare eller direktörer bör du tidigt avgöra vem som blir trafikansvarig, eftersom den personen bär provkravet. Byts den trafikansvariga senare måste tillståndshavaren anmäla det till Transportstyrelsen, och uteblir anmälan kan en sanktionsavgift på 10 000 kr bli aktuell.</p><p>Tänk också på att tillståndet och provet är två olika steg. Provet visar att personen har yrkeskunnande, men tillståndet prövas av Transportstyrelsen, som även tittar på gott anseende och ekonomiska förhållanden. Börja därför i god tid, så att inget av stegen blir flaskhalsen.</p>`,
  },];
en.sections.splice(en.sections.length - 1, 0, ...more1);
sv.sections.splice(sv.sections.length - 1, 0, ...more2);


const more3: ArticleSection[] = [
  {
    html: `<p><strong>For fleet owners.</strong> If you run several cars, think about who in your organisation will be the trafikansvarig and whether that person has time to prepare. Passing the exam is a one-time effort, but the knowledge it tests, from budgeting to vehicle standards, is what you rely on every week. Many owners use the preparation as a chance to review their own routines.</p>`,
  },];
const more4: ArticleSection[] = [
  {
    html: `<p><strong>För dig med flera bilar.</strong> Har du flera bilar, fundera på vem i organisationen som ska vara trafikansvarig och om personen hinner förbereda sig. Att klara provet är en engångsinsats, men kunskaperna det testar, från budget till fordonskrav, är sådant du använder varje vecka. Många ägare passar på att se över sina egna rutiner under förberedelserna.</p><p>Utbildar du dessutom förare i företaget kan du låta dem börja med <a href="/sv/blog/taxi-licence-exam-questions/">taxiförarlegitimation frågor</a> medan du själv läser in dig på företagsdelen. Det är två olika prov med olika mål, men de bygger på samma grundförståelse för taxiregler.</p><p>Sist men inte minst: skriv ned datum för varje godkänt delprov. Sexmånadersfönstret räknas från det första godkända delprovet, och det är lätt att tappa bort när man planerar fyra prov.</p>`,
  },];
en.sections.splice(en.sections.length - 1, 0, ...more3);
sv.sections.splice(sv.sections.length - 1, 0, ...more4);

export const yrkeskunnandeTaxiExam = { slug: "yrkeskunnande-taxi-exam", en, sv };
