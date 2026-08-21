// AUTO-PORTED from legacy ob-taxi-sweden/index.html + ob-taxi-sweden/sv/index.html
// Structured as sections so tables, lists and FAQ all survive intact.

export interface ArticleTableRow {
  cells: string[]; // may contain inline HTML (e.g. <span class="pill">)
}
export interface ArticleTable {
  headers: string[];
  rows: ArticleTableRow[];
}
export interface ArticleFaqItem {
  q: string;
  aHtml: string;
}
export interface ArticleSection {
  heading?: string;
  html?: string; // paragraph(s) as HTML snippet, may contain <strong>/<em>
  image?: { src: string; alt: string };
  table?: ArticleTable;
  list?: { ordered: boolean; items: string[] };
  card?: { title: string; html: string };
  alert?: { title: string; html: string; list?: string[] };
}

export const obTaxiSweden = {
  en: {
    metaTitle: "Taxi OB Calculator Sweden – What OB Is & How to Calculate OB Pay | Drive Test",
    metaDescription:
      "Free taxi OB calculator for Sweden. Learn what OB (obekväm arbetstid) means for taxi drivers, how OB1 and OB2 are calculated from your Vilotidsrapport, and work out your OB pay instantly.",
    eyebrow: "Sweden · Taxi pay",
    lastUpdated: "2026-06-17",
    lastUpdatedLabel: "Updated 17 June 2026",
    title: "Taxi OB Calculator Sweden",
    lede: "<strong>OB</strong> — short for <strong>obekväm arbetstid</strong> (\"inconvenient working hours\") — is the extra pay Swedish taxi drivers earn for evenings, nights, weekends and holidays. Here's exactly how OB1 and OB2 are worked out from your Vilotidsrapport, then price it in seconds with our free calculator.",
    intro:
      "<strong>OB</strong> is one of the most important — and most misunderstood — parts of a taxi driver's pay in Sweden. If you drive evenings, nights, weekends or holidays, a big share of your wage comes from OB supplements. This guide explains what OB means, how OB1 and OB2 differ, and how the amount is worked out from your rest-time slip, so you can check that every krona you've earned actually shows up on your payslip.",
    sections: [
      {
        heading: "What is OB?",
        image: { src: "/assets/blog/ob-taxi-driving.jpg", alt: "Taxi driver's hands on the wheel — the worked hours that OB is paid for" },
        html:
          "<p>OB stands for <strong>obekväm arbetstid</strong> — \"inconvenient working hours.\" It's a wage supplement paid <em>on top of</em> your normal hourly rate when you work at times most people don't: evenings, nights, weekends and public holidays. The rates and exact hours come from the collective agreement (Taxiavtalet).</p><p>For taxi drivers, OB is tied to the <strong>Vilotidsrapport</strong> — the rest-time slip that records when you rested during a shift. Your <em>worked</em> time is simply the gaps between those rest periods, and each gap is priced by when it happened.</p>",
      },
      {
        heading: "OB1 vs OB2 — the two bands",
        html: "<p>There are two OB levels. OB2 is the higher one, paid for the most antisocial hours; OB1 is the lower one. Everything else is Normal time with no supplement.</p>",
        table: {
          headers: ["Band", "When it applies", "Example rate"],
          rows: [
            { cells: ["OB2", "Fri 19:00 → Sat 06:00 · Sat 19:00 → Sun 06:00 · Sun 19:00 → Mon 06:00 · public holidays and the day before a holiday, 19:00 → 06:00", "52.79 kr/h"] },
            { cells: ["OB1", "Weekday nights (Mon–Fri) 19:00 → 06:00 · Saturdays & Sundays 06:00 → 19:00 · public holidays 06:00 → 19:00", "31.58 kr/h"] },
            { cells: ["Normal", "Mon–Fri daytime 06:00 → 19:00 (not a holiday)", "—"] },
          ],
        },
      },
      {
        html: "<p class=\"muted\">The figures above are the calculator's default example rates. Your actual OB rates depend on your collective agreement and the year — you can change them in the calculator.</p>",
      },
      {
        heading: "Day, night and the \"evening date\" rule",
        image: { src: "/assets/blog/ob-taxi-night.jpg", alt: "Lit taxi sign at night — night hours carry the higher OB2 supplement" },
        html:
          "<p>A night belongs to its <strong>evening date</strong>: the slice from 00:00–06:00 is owned by the previous evening. So a shift that starts late on Friday and runs past midnight into Saturday morning still counts as a <strong>Friday night</strong> — and stays OB2. This is the rule that trips most people up when they try to add hours by hand.</p>",
      },
      {
        heading: "How taxi OB is calculated, step by step",
        list: {
          ordered: true,
          items: [
            "<strong>Read the Vilotidsrapport.</strong> Note each day's date and its rest periods (from–to times).",
            "<strong>Find the worked time.</strong> Worked time = the gaps <em>between</em> rest periods within the day's window.",
            "<strong>Split each worked slice</strong> at 06:00 and 19:00 (and midnight), so no slice spans two bands.",
            "<strong>Classify each slice</strong> as Normal, OB1 or OB2 by the time of day and the weekday (using the evening-date rule for nights).",
            "<strong>Multiply</strong> the OB1 and OB2 minutes by their rates and add them up — that's your OB pay.",
          ],
        },
      },
      {
        card: {
          title: "Worked example",
          html:
            "<p class=\"muted\" style=\"margin-bottom:10px\">Friday shift, one rest period 04:15–16:15:</p><p style=\"margin:0\">Worked time is 00:00–04:15 and 16:15–24:00. The early-morning slice belongs to Thursday evening → OB1 4 h 15 m. 16:15–19:00 is Friday daytime → Normal 2 h 45 m. 19:00–24:00 is Friday evening → OB2 5 h. At the example rates that's 4.25 × 31.58 + 5 × 52.79 = <strong>796.33 kr</strong> of OB on top of base pay.</p>",
        },
      },
      {
        heading: "OB and your work / residence permit",
        image: { src: "/assets/blog/ob-permit-paperwork.jpg", alt: "Signing official paperwork — accurate OB records matter for residence-permit reviews" },
        html:
          "<p>If you work in Sweden on a <strong>work permit</strong>, OB is more than pay — it's part of your employment record, and it can be a <strong>sensitive area</strong>.</p>",
      },
      {
        alert: {
          title: "⚠ Why Migrationsverket may look at your OB",
          html:
            "<p>When you apply to <strong>extend your permit</strong> or for <strong>permanent residence (PR)</strong>, Migrationsverket checks that your real working conditions matched the terms your permit was granted on — the agreed salary, the hours, and that your total pay reaches the collective-agreement level <em>including OB supplements</em>.</p><p>Practical points:</p>",
          list: [
            "Your reported OB and hours should match your <strong>Vilotidsrapport and payslips</strong>. Under-reported OB or mismatched hours can raise questions during an extension or PR review.",
            "Keep your <strong>own copies</strong> of rest-time slips and payslips — you may be asked to show your monthly pay met the required level.",
            "If an employer under-pays or mis-reports OB, it can affect <em>your</em> permit case, not only theirs.",
          ],
        },
      },
      {
        html: "<p>Getting OB right protects both your income and your residence-permit case. Use the calculator to check every slip and keep a clean record.</p>",
      },
    ] as ArticleSection[],
    faq: [
      { q: "What does OB mean?", aHtml: "OB = obekväm arbetstid, \"inconvenient working hours.\" It's an extra supplement on top of your normal hourly wage for evenings, nights, weekends and public holidays." },
      { q: "How much is OB for taxi drivers in Sweden?", aHtml: "It depends on your collective agreement and the year. As an example, this calculator defaults to 31.58 kr/h for OB1 and 52.79 kr/h for OB2 — you can change both to match your agreement." },
      { q: "Does a night shift past midnight stay OB2?", aHtml: "Yes. A 00:00–06:00 slice belongs to the previous evening's date, so a Friday-night shift that runs into Saturday morning stays OB2." },
      { q: "Do I need the Vilotidsrapport to calculate OB?", aHtml: "It's the easiest source: your worked time is the gaps between the rest periods on the slip. You can also enter the times manually in the calculator." },
    ] as ArticleFaqItem[],
    disclaimer:
      "This page is general information, not legal or tax advice. OB rates and rules come from your collective agreement; permit decisions are made by Migrationsverket. For your own situation, check with Migrationsverket and your union (e.g. Transport).",
    ctaTitle: "Calculate your taxi OB now",
    ctaBody: "Snap your Vilotidsrapport → AI reads it → you verify → OB1 / OB2 priced instantly.",
    ctaBtn: "Open the Taxi OB Calculator →",
  },
  sv: {
    metaTitle: "Taxi OB-kalkylator Sverige – Vad är OB och hur räknar man ut det? | Drive Test",
    metaDescription:
      "Gratis OB-kalkylator för taxi i Sverige. Lär dig vad OB (obekväm arbetstid) innebär, hur OB1 och OB2 räknas ut från din vilotidsrapport, och räkna ut din OB-ersättning direkt.",
    eyebrow: "Sverige · Taxilön",
    lastUpdated: "2026-06-17",
    lastUpdatedLabel: "Uppdaterad 17 juni 2026",
    title: "Taxi OB-kalkylator Sverige",
    lede: "<strong>OB</strong> — <strong>obekväm arbetstid</strong> — är den extra ersättning svenska taxiförare får för kvällar, nätter, helger och röda dagar. Här är exakt hur OB1 och OB2 räknas ut från din vilotidsrapport, räkna sedan ut det på några sekunder med vår gratis kalkylator.",
    intro:
      "<strong>OB</strong> är en av de viktigaste — och mest missförstådda — delarna av en taxiförares lön i Sverige. Kör du kvällar, nätter, helger eller röda dagar kommer en stor del av lönen från OB-tillägg. Den här guiden förklarar vad OB betyder, hur OB1 och OB2 skiljer sig åt och hur beloppet räknas ut från din vilotidsrapport — så att du kan kontrollera att varje krona du tjänat faktiskt syns på lönespecen.",
    sections: [
      {
        heading: "Vad är OB?",
        image: { src: "/assets/blog/ob-taxi-driving.jpg", alt: "En taxiförares händer på ratten — de arbetade timmarna som OB betalas för" },
        html:
          "<p>OB står för <strong>obekväm arbetstid</strong>. Det är ett lönetillägg <em>utöver</em> din vanliga timlön när du arbetar på tider då de flesta inte gör det: kvällar, nätter, helger och röda dagar. Satserna och de exakta tiderna kommer från kollektivavtalet (Taxiavtalet).</p><p>För taxiförare är OB kopplat till <strong>vilotidsrapporten</strong> — som visar när du vilade under ett pass. Din <em>arbetade</em> tid är helt enkelt mellanrummen mellan viloperioderna, och varje mellanrum prissätts efter när det inträffade.</p>",
      },
      {
        heading: "OB1 mot OB2 — de två nivåerna",
        html: "<p>Det finns två OB-nivåer. OB2 är den högre, för de mest obekväma timmarna; OB1 är den lägre. Allt annat är Normal tid utan tillägg.</p>",
        table: {
          headers: ["Nivå", "När det gäller", "Exempelsats"],
          rows: [
            { cells: ["OB2", "Fre 19:00 → lör 06:00 · lör 19:00 → sön 06:00 · sön 19:00 → mån 06:00 · röda dagar och dagen före röd dag, 19:00 → 06:00", "52,79 kr/h"] },
            { cells: ["OB1", "Vardagsnätter (mån–fre) 19:00 → 06:00 · lördagar & söndagar 06:00 → 19:00 · röda dagar 06:00 → 19:00", "31,58 kr/h"] },
            { cells: ["Normal", "Mån–fre dagtid 06:00 → 19:00 (ej röd dag)", "—"] },
          ],
        },
      },
      {
        html: "<p class=\"muted\">Siffrorna ovan är kalkylatorns exempelsatser. Dina verkliga OB-satser beror på ditt kollektivavtal och året — du kan ändra dem i kalkylatorn.</p>",
      },
      {
        heading: "Dag, natt och regeln om \"kvällsdatum\"",
        image: { src: "/assets/blog/ob-taxi-night.jpg", alt: "Upplyst taxiskylt på natten — nattens timmar ger det högre OB2-tillägget" },
        html:
          "<p>En natt tillhör sitt <strong>kvällsdatum</strong>: delen 00:00–06:00 ägs av kvällen före. Ett pass som börjar sent på fredagen och fortsätter förbi midnatt in på lördag morgon räknas alltså fortfarande som en <strong>fredagsnatt</strong> — och förblir OB2. Det är den här regeln som ställer till det mest när man försöker räkna timmar för hand.</p>",
      },
      {
        heading: "Så räknas taxi-OB ut, steg för steg",
        list: {
          ordered: true,
          items: [
            "<strong>Läs vilotidsrapporten.</strong> Notera varje dags datum och dess viloperioder (från–till-tider).",
            "<strong>Hitta arbetad tid.</strong> Arbetad tid = mellanrummen <em>mellan</em> viloperioderna inom dagens fönster.",
            "<strong>Dela varje arbetad del</strong> vid 06:00 och 19:00 (och midnatt), så att ingen del spänner över två nivåer.",
            "<strong>Klassa varje del</strong> som Normal, OB1 eller OB2 efter tid på dygnet och veckodag (med kvällsdatum-regeln för nätter).",
            "<strong>Multiplicera</strong> OB1- och OB2-minuterna med satserna och summera — det är din OB-ersättning.",
          ],
        },
      },
      {
        card: {
          title: "Räkneexempel",
          html:
            "<p class=\"muted\" style=\"margin-bottom:10px\">Fredagspass, en viloperiod 04:15–16:15:</p><p style=\"margin:0\">Arbetad tid är 00:00–04:15 och 16:15–24:00. Den tidiga morgondelen tillhör torsdagskvällen → OB1 4 tim 15 min. 16:15–19:00 är fredag dagtid → Normal 2 tim 45 min. 19:00–24:00 är fredagskväll → OB2 5 tim. Med exempelsatserna blir det 4,25 × 31,58 + 5 × 52,79 = <strong>796,33 kr</strong> i OB utöver grundlönen.</p>",
        },
      },
      {
        heading: "OB och ditt arbets-/uppehållstillstånd",
        image: { src: "/assets/blog/ob-permit-paperwork.jpg", alt: "Underskrift av officiella papper — korrekta OB-uppgifter spelar roll vid prövning av uppehållstillstånd" },
        html:
          "<p>Arbetar du i Sverige på <strong>arbetstillstånd</strong> är OB mer än lön — det är en del av din anställningshistorik, och det kan vara ett <strong>känsligt område</strong>.</p>",
      },
      {
        alert: {
          title: "⚠ Varför Migrationsverket kan granska din OB",
          html:
            "<p>När du ansöker om att <strong>förlänga ditt tillstånd</strong> eller om <strong>permanent uppehållstillstånd (PUT)</strong> kontrollerar Migrationsverket att dina verkliga arbetsvillkor motsvarade det tillståndet beviljades på — avtalad lön, arbetstid och att din totala lön når kollektivavtalsnivå <em>inklusive OB-tillägg</em>.</p><p>Praktiska punkter:</p>",
          list: [
            "Din rapporterade OB och arbetstid ska stämma med <strong>vilotidsrapport och lönespecar</strong>. För lågt rapporterad OB eller tider som inte stämmer kan väcka frågor vid en förlängning eller PUT-prövning.",
            "Spara <strong>egna kopior</strong> av vilotidsrapporter och lönespecar — du kan behöva visa att månadslönen nådde rätt nivå.",
            "Om en arbetsgivare betalar för lite eller rapporterar fel OB kan det drabba <em>ditt</em> tillståndsärende, inte bara arbetsgivarens.",
          ],
        },
      },
      {
        html: "<p>Att få OB rätt skyddar både din inkomst och ditt uppehållstillståndsärende. Använd kalkylatorn för att kontrollera varje rapport och hålla ordning.</p>",
      },
    ] as ArticleSection[],
    faq: [
      { q: "Vad betyder OB?", aHtml: "OB = obekväm arbetstid. Det är ett extra tillägg utöver din vanliga timlön för kvällar, nätter, helger och röda dagar." },
      { q: "Hur mycket är OB för taxiförare i Sverige?", aHtml: "Det beror på ditt kollektivavtal och året. Som exempel utgår kalkylatorn från 31,58 kr/h för OB1 och 52,79 kr/h för OB2 — du kan ändra båda så de matchar ditt avtal." },
      { q: "Förblir ett nattpass efter midnatt OB2?", aHtml: "Ja. Delen 00:00–06:00 tillhör kvällen innan, så en fredagsnatt som fortsätter in på lördag morgon förblir OB2." },
      { q: "Behöver jag vilotidsrapporten för att räkna OB?", aHtml: "Det är den enklaste källan: din arbetade tid är mellanrummen mellan viloperioderna i rapporten. Du kan också mata in tiderna manuellt i kalkylatorn." },
    ] as ArticleFaqItem[],
    disclaimer:
      "Den här sidan är allmän information, inte juridisk eller skatterådgivning. OB-satser och regler kommer från ditt kollektivavtal; tillståndsbeslut fattas av Migrationsverket. För din egen situation, kontrollera med Migrationsverket och ditt fackförbund (t.ex. Transport).",
    ctaTitle: "Räkna ut din taxi-OB nu",
    ctaBody: "Fota din vilotidsrapport → AI läser den → du verifierar → OB1 / OB2 prissätts direkt.",
    ctaBtn: "Öppna OB-kalkylatorn →",
  },
};

export const obTaxiSwedenJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Taxi OB Calculator Sweden – What OB Is and How to Calculate OB Pay",
      inLanguage: "en",
      about: "OB (obekväm arbetstid) pay for taxi drivers in Sweden",
      author: { "@type": "Organization", name: "Drive Test" },
      publisher: {
        "@type": "Organization",
        name: "Drive Test",
        logo: { "@type": "ImageObject", url: "https://drivetest.se/assets/icon.png" },
      },
      mainEntityOfPage: "https://drivetest.se/ob-taxi-sweden/",
    },
    {
      "@type": "SoftwareApplication",
      name: "Taxi OB Calculator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://drivetest.se/ob-calculator/",
      offers: { "@type": "Offer", price: "0", priceCurrency: "SEK" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does OB mean for taxi drivers in Sweden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OB stands for obekväm arbetstid – inconvenient working hours. It is an extra wage supplement paid on top of your normal hourly pay for working evenings, nights, weekends and public holidays.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between OB1 and OB2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OB1 is the lower supplement (weekday evenings/nights and weekend daytime). OB2 is the higher supplement for the most inconvenient hours: Friday, Saturday and Sunday nights and public holidays.",
          },
        },
        {
          "@type": "Question",
          name: "How is taxi OB calculated from a Vilotidsrapport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your worked time is the gaps between the rest periods recorded on the Vilotidsrapport. Each worked slice is split at 06:00 and 19:00, classified as Normal, OB1 or OB2 by the time of day and weekday, then multiplied by the matching OB rate.",
          },
        },
        {
          "@type": "Question",
          name: "Why does OB matter for a work or residence permit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When Migrationsverket assesses a permit extension or permanent residence, it checks that your real salary and hours – including OB supplements – met the terms your permit was granted on. Accurate OB records help your case.",
          },
        },
      ],
    },
  ],
};
