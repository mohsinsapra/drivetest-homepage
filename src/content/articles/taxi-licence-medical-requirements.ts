import type { ArticleSection, ArticleFaqItem } from "../obTaxiSweden";
import type { ArticleContent } from "./types";

const sources = [
  { label: "Transportstyrelsen – Application for taxi driver licence (requirements, medical certificate, suitability)", url: "https://www.transportstyrelsen.se/ansokan-om-taxiforarlegitimation" },
  { label: "Transportstyrelsen – Medicinska intyg (optician, vision certificates)", url: "https://www.transportstyrelsen.se/sv/vagtrafik/korkort/trafikmedicin/medicinska-tillstand-som-regleras/inledande-bestammelser-och-medicinska-intyg/medicinska-intyg/" },
  { label: "Transportstyrelsen – Fees for yrkestrafik (advance ruling, medical exemption)", url: "https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/" },
  { label: "Transportstyrelsen – TSFS 2021:119 (taxi driver licence regulation)", url: "https://www.transportstyrelsen.se/TSFS/TSFS%202021_119k.pdf" },
];

const en: ArticleContent = {
  metaTitle: "Taxi Licence Medical Requirements in Sweden | Drive Test",
  metaDescription:
    "Taxi licence medical requirements in Sweden: the läkarintyg, vision checks with an optician, how recent it must be, and the suitability check.",
  eyebrow: "Sweden · Requirements",
  tag: "Requirements",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Updated 13 October 2026",
  title: "Taxi Licence Medical Requirements in Sweden",
  lede: "The <strong>taxi licence medical requirements</strong> in Sweden mean you need a medical certificate (läkarintyg) with your application, including a check of your vision, and you must be judged suitable as a driver. Below you can read how each part works and what to prepare.",
  intro:
    "Passing the exams is only one step toward a <strong>taxiförarlegitimation</strong>. Transportstyrelsen also needs to be sure you are medically fit to carry passengers and that you are a suitable person for the job. This guide explains the medical certificate, the vision part, and the suitability check, using Transportstyrelsen's own pages. We do not give medical advice: if you have a health question, talk to your doctor.",
  excerpt:
    "The medical certificate, vision checks and suitability review you need for a Swedish taxi driver licence.",
  cover: "/assets/blog/ob-permit-paperwork.jpg",
  sections: [
    {
      heading: "Taxi licence medical requirements: the basics",
      html: `<p>To get a taxi driver licence you must meet the <strong>medical requirements necessary for the safety of passengers and other road users</strong>. In practice, this means a <strong>medical certificate (läkarintyg)</strong> must be submitted with your application, on the form that Transportstyrelsen has set for taxi driver licences.</p><p>The other main requirements, according to Transportstyrelsen, are that you are at least 20 years old, have held a category B licence for at least two years (or have category D), and have passed the theory and driving tests. See our <a href="/taxi-licence-guide/">taxi licence guide</a> for the whole path.</p>`,
    },
    {
      heading: "The medical certificate (läkarintyg)",
      html: `<p>Key points from Transportstyrelsen's application page:</p>`,
      list: {
        ordered: false,
        items: [
          "The certificate is required with the application.",
          "It must be <strong>issued within two months before you apply</strong>, so do not get it too early.",
          "You must identify yourself at the doctor's visit.",
          "The doctor can send the certificate digitally to Transportstyrelsen through the e-service Webcert.",
          "Transportstyrelsen may decide that you must provide a new certificate within a set time.",
        ],
      },
    },
    {
      heading: "Vision requirements and the optician",
      html: `<p>Vision is part of the medical check. Transportstyrelsen explains that the part of the certificate that deals with vision <strong>may be certified by an optician, but only if the doctor has indicated this on the form</strong>. Basic vision data goes on the medical form, or on a separate basic vision certificate if an optician provides it.</p><p>If the basic data cannot show whether the vision requirements are met, an <strong>extended vision certificate (utökat synintyg)</strong> is required. That can be issued by an ophthalmology specialist or an optician. An optician cannot certify other conditions such as hearing or heart conditions, those need a physician.</p>`,
    },
    {
      html: `<p class="muted">We do not list exact vision values here. They are set in the medical regulations and are best read with your optician or doctor, who will tell you whether your eyes meet the requirement.</p>`,
    },
    {
      heading: "If you are unsure about a medical condition",
      html: `<p>Transportstyrelsen allows you to apply for a <strong>pre-decision (förhandsbesked)</strong> with a medical certificate and a specialist's statement before you spend money on exams. As of 2026 the fee for that is 1 500 kr. There is also a possible exemption from the medical requirements, listed at 3 000 kr. Check the <a href="https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/">official fee page</a> for current amounts.</p>`,
    },
    {
      heading: "Suitability (lämplighet) and criminal record",
      html: `<p>Besides health, you must be <strong>suitable to work as a taxi driver</strong> regarding professional competence and law-abidingness (laglydnad). Transportstyrelsen says it may look closer if there are, for example, repeated traffic fines, criminal convictions, a gap in licence validity or a medical issue, and in that case sends a notice with a deadline to respond.</p>`,
      table: {
        headers: ["Situation", "What Transportstyrelsen says"],
        rows: [
          { cells: ["Lived outside Sweden in the last five years", "Submit a police record extract (or equivalent) from each country where you stayed, from a competent authority. Foreign extracts are sent as originals."] },
          { cells: ["Foreign driving licence", "Attach a certificate from the issuing authority showing it is valid and whether it was withdrawn or revoked in the past two years."] },
          { cells: ["Refused because of a crime", "A period of unsuitability (olämplighetstid) of six months to five years can apply, during which you cannot reapply."] },
          { cells: ["Licence revoked", "Your driving licence must not have been revoked in the last two years."] },
        ],
      },
    },
    {
      alert: {
        title: "Order matters",
        html: `<p>The tests must be recent when you apply (theory tests no older than three years, driving test no older than one year), and the medical certificate no older than two months. Plan the sequence so nothing expires while you wait.</p>`,
      },
    },
    {
      heading: "A practical checklist",
      html: `<p>Use this order to avoid delays. The costs are covered in <a href="/blog/taxi-licence-cost-sweden/">taxi licence cost in Sweden</a>.</p>`,
      list: {
        ordered: true,
        items: [
          "Book and pass the two theory tests and the driving test. Our <a href=\"/blog/how-to-pass-taxi-licence-test/\">study plan</a> can help.",
          "Book the medical appointment and ask whether you need an optician for the vision part.",
          "Check that your certificate will still be under two months old when you submit.",
          "Gather police record extracts and foreign licence certificates if they apply to you.",
          "Apply to Transportstyrelsen and answer any request for more information by the deadline.",
        ],
      },
    },
    {
      heading: "Prepare for the exam with Drive Test",
      html: `<p>While the paperwork is in progress, keep studying. The <strong>Drive Test app</strong> offers official-style practice for the taxi theory tests with explanations and progress analytics. Start at the <a href="/exams/taxi-licence/">taxi licence exam page</a>. Working as a driver already? Our <a href="/ob-taxi-sweden/">OB calculator</a> checks your evening and night pay.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Do I need a medical certificate for a taxi licence?", aHtml: "Yes. A medical certificate on the form set by Transportstyrelsen must be submitted with the application." },
    { q: "How recent must the certificate be?", aHtml: "It must be issued within two months before you apply." },
    { q: "Can an optician do the vision part?", aHtml: "Yes, if the doctor has indicated on the form that the optician may certify the vision part. Other conditions, such as hearing or heart, must be certified by a physician." },
    { q: "What if I have a medical condition?", aHtml: "You can apply for a pre-decision (förhandsbesked) before taking the exams, or for an exemption from the medical requirements. Fees apply, see Transportstyrelsen's fee page." },
    { q: "Is my criminal record checked?", aHtml: "Transportstyrelsen assesses whether you are suitable, including law-abidingness. If you have not lived in Sweden for the past five years you must submit a police record extract from each country where you stayed." },
    { q: "How old do I need to be?", aHtml: "At least 20 years old, according to Transportstyrelsen's application page, and you must have held a B licence for at least two years or have category D." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/blog/taxi-licence-cost-sweden/", "/blog/how-to-pass-taxi-licence-test/", "/taxi-licence-guide/", "/exams/taxi-licence/"],
};

const sv: ArticleContent = {
  metaTitle: "Läkarintyg taxi: medicinska krav och syn | Drive Test",
  metaDescription:
    "Läkarintyg taxi: så fungerar de medicinska kraven för taxiförarlegitimation, synintyg hos optiker, hur färskt intyget ska vara och lämplighetsprövningen.",
  eyebrow: "Sverige · Krav",
  tag: "Krav",
  lastUpdated: "2026-10-13",
  lastUpdatedLabel: "Uppdaterad 13 oktober 2026",
  title: "Läkarintyg taxi: medicinska krav och lämplighet",
  lede: "Ett <strong>läkarintyg för taxi</strong> är ett krav när du ansöker om taxiförarlegitimation, och det inkluderar en kontroll av synen. Dessutom måste du bedömas som lämplig som förare. Här går vi igenom hur varje del fungerar och vad du behöver förbereda.",
  intro:
    "Att klara proven är bara ett steg på vägen mot en <strong>taxiförarlegitimation</strong>. Transportstyrelsen vill också vara säker på att du är medicinskt lämplig att köra passagerare och att du är en lämplig person för yrket. Den här guiden förklarar läkarintyget, synkravet och lämplighetsprövningen utifrån Transportstyrelsens egna sidor. Vi ger inga medicinska råd: har du en hälsofråga, prata med din läkare.",
  excerpt:
    "Läkarintyget, synkontrollen och lämplighetsprövningen du möter när du ansöker om taxiförarlegitimation.",
  cover: "/assets/blog/ob-permit-paperwork.jpg",
  sections: [
    {
      heading: "Läkarintyg taxi: det här gäller",
      html: `<p>För att få taxiförarlegitimation måste du uppfylla <strong>de medicinska krav som är nödvändiga med hänsyn till säkerheten för passagerare och andra trafikanter</strong>. I praktiken innebär det att ett <strong>läkarintyg</strong> ska skickas in med ansökan, på den blankett som Transportstyrelsen fastställt för taxiförarlegitimation.</p><p>Övriga huvudkrav enligt Transportstyrelsen är att du är minst 20 år, har haft körkort för behörighet B i minst två år (eller har D) och har klarat teoriproven och körprovet. Hela vägen finns i vår <a href="/sv/taxi-licence-guide/">guide till taxiförarlegitimation</a>.</p>`,
    },
    {
      heading: "Så fungerar läkarintyget",
      html: `<p>Viktiga punkter från Transportstyrelsens ansökningssida:</p>`,
      list: {
        ordered: false,
        items: [
          "Intyget krävs tillsammans med ansökan.",
          "Det ska vara <strong>utfärdat inom två månader före ansökan</strong>, så skaffa det inte för tidigt.",
          "Du måste legitimera dig vid läkarbesöket.",
          "Läkaren kan skicka intyget digitalt till Transportstyrelsen via e-tjänsten Webcert.",
          "Transportstyrelsen kan besluta att du ska lämna in ett nytt intyg inom en viss tid.",
        ],
      },
    },
    {
      heading: "Synkrav och optiker",
      html: `<p>Synen är en del av den medicinska kontrollen. Transportstyrelsen förklarar att den del av intyget som gäller syn <strong>får intygas av optiker, men bara om läkaren angett detta på blanketten</strong>. Grundläggande synuppgifter anges på läkarintygsblanketten, eller på ett separat grundläggande synintyg om en optiker lämnar uppgifterna.</p><p>Om de grundläggande uppgifterna inte räcker för att visa att synkraven är uppfyllda krävs ett <strong>utökat synintyg</strong>. Det kan utfärdas av en ögonläkare med specialistkompetens eller en optiker. En optiker kan inte intyga andra tillstånd som hörsel eller hjärta, de kräver en läkare.</p>`,
    },
    {
      html: `<p class="muted">Vi anger inga exakta synvärden här. De regleras i de medicinska föreskrifterna och tas bäst upp med din optiker eller läkare, som kan säga om dina ögon uppfyller kraven.</p>`,
    },
    {
      heading: "Om du är osäker på ett medicinskt tillstånd",
      html: `<p>Transportstyrelsen låter dig ansöka om ett <strong>förhandsbesked</strong> med läkarintyg och ett specialistutlåtande innan du lägger pengar på proven. Avgiften är 1 500 kr 2026. Det finns också möjlighet till undantag från de medicinska kraven, som anges till 3 000 kr. Se den <a href="https://www.transportstyrelsen.se/sv/om-oss/avgifter/avgifter-inom-vagtrafik/avgifter-for-tillstands--och-andra-provningar/Yrkestrafik/">officiella avgiftssidan</a> för aktuella belopp.</p>`,
    },
    {
      heading: "Lämplighet och belastning",
      html: `<p>Förutom hälsan måste du vara <strong>lämplig att tjänstgöra som taxiförare</strong> när det gäller yrkeskompetens och laglydnad. Transportstyrelsen säger att de kan titta närmare om det till exempel finns upprepade trafikböter, brott, ett avbrott i körkortsgiltigheten eller ett medicinskt problem, och skickar då en underrättelse med en svarsfrist.</p>`,
      table: {
        headers: ["Situation", "Det här säger Transportstyrelsen"],
        rows: [
          { cells: ["Har bott utomlands de senaste fem åren", "Skicka in utdrag ur polisregister (eller motsvarande) från varje land där du vistats, från behörig myndighet. Utländska utdrag skickas som original."] },
          { cells: ["Utländskt körkort", "Bifoga intyg från utfärdande myndighet om att körkortet är giltigt och om det återkallats eller dragits in de senaste två åren."] },
          { cells: ["Avslag på grund av brott", "En olämplighetstid på sex månader till fem år kan gälla, och under den tiden kan du inte ansöka igen."] },
          { cells: ["Återkallat körkort", "Ditt körkort får inte ha varit återkallat de senaste två åren."] },
        ],
      },
    },
    {
      alert: {
        title: "Ordningen är viktig",
        html: `<p>Proven ska vara färska när du ansöker (teoriprov högst tre år gamla, körprov högst ett år) och läkarintyget högst två månader gammalt. Planera ordningen så att inget hinner gå ut medan du väntar.</p>`,
      },
    },
    {
      heading: "En praktisk checklista",
      html: `<p>Följ den här ordningen för att undvika förseningar. Kostnaderna beskrivs i <a href="/sv/blog/taxi-licence-cost-sweden/">vad kostar taxilegitimation</a>.</p>`,
      list: {
        ordered: true,
        items: [
          "Boka och klara de två teoriproven och körprovet. Vår <a href=\"/sv/blog/how-to-pass-taxi-licence-test/\">studieplan</a> hjälper dig.",
          "Boka läkartid och fråga om du behöver en optiker för syndelen.",
          "Kontrollera att intyget fortfarande är under två månader gammalt när du skickar in.",
          "Samla polisutdrag och utländska körkortsintyg om det gäller dig.",
          "Ansök hos Transportstyrelsen och besvara eventuell begäran om komplettering i tid.",
        ],
      },
    },
    {
      heading: "Förbered dig med Drive Test",
      html: `<p>Medan pappersarbetet pågår kan du fortsätta plugga. Appen <strong>Drive Test</strong> har övning i officiell stil för taxiprovets teoridelar, med förklaringar och framstegsanalys. Börja på sidan för <a href="/sv/exams/taxi-licence/">taxiförarlegitimation</a>. Kör du redan taxi? Vår <a href="/sv/ob-taxi-sweden/">OB-kalkylator</a> kontrollerar din kvälls- och nattersättning.</p>`,
    },
  ] as ArticleSection[],
  faq: [
    { q: "Behöver jag läkarintyg för taxiförarlegitimation?", aHtml: "Ja. Ett läkarintyg på den blankett som Transportstyrelsen fastställt ska skickas in med ansökan." },
    { q: "Hur färskt ska läkarintyget vara?", aHtml: "Det ska vara utfärdat inom två månader före ansökan." },
    { q: "Kan en optiker göra syndelen?", aHtml: "Ja, om läkaren angett på blanketten att optikern får intyga syndelen. Andra tillstånd, som hörsel eller hjärta, måste intygas av en läkare." },
    { q: "Vad gör jag om jag har ett medicinskt tillstånd?", aHtml: "Du kan ansöka om förhandsbesked innan du tar proven, eller om undantag från de medicinska kraven. Avgifter gäller, se Transportstyrelsens avgiftssida." },
    { q: "Kontrolleras mitt belastningsregister?", aHtml: "Transportstyrelsen bedömer om du är lämplig, inklusive laglydnad. Har du inte bott i Sverige de senaste fem åren ska du lämna utdrag ur polisregister från varje land där du vistats." },
    { q: "Hur gammal måste jag vara?", aHtml: "Minst 20 år enligt Transportstyrelsens ansökningssida, och du ska ha haft körkort B i minst två år eller ha behörighet D." },
  ] as ArticleFaqItem[],
  sources,
  related: ["/sv/blog/taxi-licence-cost-sweden/", "/sv/blog/how-to-pass-taxi-licence-test/", "/sv/taxi-licence-guide/", "/sv/exams/taxi-licence/"],
};


const extraEn: ArticleSection[] = [
  {
    html: `<p><strong>Tips for the doctor's visit</strong></p><p>Bring photo ID, because you must identify yourself. Bring your glasses or contact lenses if you use them, and any earlier medical documents or specialist statements that relate to a condition you are asking the doctor to assess. Ask whether the clinic can send the certificate digitally to Transportstyrelsen through Webcert, which avoids paper delays. Finally, ask how soon you will have the certificate, since the two-month clock starts on the day it is issued.</p><p>If the doctor or optician says your vision needs a closer look, ask which type of extended vision certificate Transportstyrelsen needs, and who is allowed to write it.</p>`,
  },
  {
    heading: "What happens after you apply",
    html: `<p>According to Transportstyrelsen, the queue time before processing starts is typically five to seven weeks. If something is missing, you receive a request for more information with a deadline. If Transportstyrelsen thinks you may not meet a requirement, you receive a notice and get a chance to reply before a decision is made. If you are refused, you can appeal in writing within three weeks of receiving the decision. If you are approved, you get a basic document and a payment slip, and the licence is produced once the fee is paid.</p>`,
  },
];
const extraSv: ArticleSection[] = [
  {
    html: `<p><strong>Tips inför läkarbesöket</strong></p><p>Ta med legitimation med foto, eftersom du måste legitimera dig. Ta med glasögon eller linser om du använder sådana, och tidigare läkarhandlingar eller specialistutlåtanden som rör ett tillstånd du vill att läkaren ska bedöma. Fråga om kliniken kan skicka intyget digitalt till Transportstyrelsen via Webcert, vilket undviker pappersförseningar. Fråga till sist hur snart du får intyget, eftersom tvåmånadersklockan börjar gå den dag det utfärdas.</p><p>Om läkaren eller optikern säger att din syn behöver undersökas närmare, fråga vilken typ av utökat synintyg Transportstyrelsen behöver och vem som får skriva det.</p>`,
  },
  {
    heading: "Vad händer efter ansökan?",
    html: `<p>Enligt Transportstyrelsen är kötiden innan handläggningen startar normalt fem till sju veckor. Saknas något får du en begäran om komplettering med sista svarsdag. Om Transportstyrelsen tror att du kanske inte uppfyller ett krav får du en underrättelse och möjlighet att svara innan beslut fattas. Blir du nekad kan du överklaga skriftligt inom tre veckor från det att du fick beslutet. Blir du godkänd får du en grundhandling och ett inbetalningskort, och legitimationen tillverkas när avgiften är betald.</p>`,
  },
];
en.sections.splice(en.sections.length - 1, 0, ...extraEn);
sv.sections.splice(sv.sections.length - 1, 0, ...extraSv);


const more1: ArticleSection[] = [];
const more2: ArticleSection[] = [
  {
    html: `<p><strong>Vanliga frågor kring intyget.</strong> Många undrar om de måste gå till en vårdcentral eller om en privat läkare räcker. Transportstyrelsens sida beskriver kraven på intyget och blanketten, inte vilken vårdgivare du ska välja, så fråga vårdgivaren om de har erfarenhet av just blanketten för taxiförarlegitimation innan du bokar. Fråga också om priset i förväg, eftersom det inte finns någon nationell avgift.</p><p>Behöver du förnya din legitimation senare kan ett nytt intyg krävas, och Transportstyrelsen kan dessutom besluta att du ska lämna ett nytt intyg inom en viss tid om något ändrats i din hälsa. Kontakta Transportstyrelsens kundservice för yrkestrafik om du är osäker på vad som gäller för dig.</p>`,
  },];
en.sections.splice(en.sections.length - 1, 0, ...more1);
sv.sections.splice(sv.sections.length - 1, 0, ...more2);


const more3: ArticleSection[] = [
  {
    html: `<p><strong>Keep your own copies.</strong> Keep a copy of the certificate, the dates and any messages from Transportstyrelsen. If you are asked for more information, you can answer quickly, and you can see at a glance whether the certificate is still within the two-month limit. If you have any doubt about your health, talk to a doctor rather than guessing: this article is general information, and the decision is made by Transportstyrelsen.</p>`,
  },];
const more4: ArticleSection[] = [];
en.sections.splice(en.sections.length - 1, 0, ...more3);
sv.sections.splice(sv.sections.length - 1, 0, ...more4);

export const taxiLicenceMedicalRequirements = { slug: "taxi-licence-medical-requirements", en, sv };
