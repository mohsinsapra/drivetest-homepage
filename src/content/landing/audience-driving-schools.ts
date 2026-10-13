import type { LandingPage } from "./types";

const en: LandingPage = {
  slug: "for/driving-schools",
  kind: "audience",
  metaTitle: "Theory Practice App for Driving Schools | Drive Test",
  metaDescription:
    "Recommend Drive Test to your learners: exam-style theory practice, explanations, text-to-speech and progress tracking that supports your driving school lessons.",
  eyebrow: "For driving schools",
  title: "Theory practice app for your learners",
  titleAccent: "alongside your lessons",
  lede:
    "Learners need to practise theory often. Drive Test gives your students driving licence theory practice on their phone, with explanations and progress tracking, alongside the lessons you already give.",
  stats: [
    { value: "3", label: "Study modes: Practice, Custom and Review" },
    { value: "3", label: "Platforms: iOS, Android and web" },
    { value: "Free", label: "Free categories for learners to try" },
  ],
  problems: [
    { icon: "clock", title: "Limited time in the classroom", text: "Lesson time is better spent on driving and discussion than on drilling every rule." },
    { icon: "language", title: "Learners with different languages", text: "Students who are new to Swedish need help understanding the exact question wording." },
    { icon: "alert", title: "Unclear self-study", text: "Learners often do not know how much they have to practise or where they are weak." },
  ],
  solutions: [
    { icon: "phone", title: "Practice between lessons", text: "Students drill theory on their own phone between sessions." },
    { icon: "language", title: "Multi-language and speech", text: "Text-to-speech and multi-language support help learners follow the questions." },
    { icon: "chart", title: "Self-tracked progress", text: "Learners see their own results per category and know when they are ready to book the theory test." },
  ],
  sections: [
    {
      heading: "How students prepare for the theory test",
      html:
        "<p>The B-licence <strong>teoriprov</strong> is taken at Trafikverket. According to Trafikverket's information, 52 correct answers are needed, with 50 minutes to answer, and Trafikverket is the place to confirm the current rules. Most of the learning happens outside the classroom, in the learner's own study time.</p><p>Drive Test is a self-study tool that fits into that time. <strong>Practice</strong> mode teaches topic by topic, <strong>Custom</strong> mode lets learners set test length and timer, and <strong>Review</strong> mode repeats mistakes. Each question includes a <strong>deep-dive explanation</strong> and an <strong>AI tutor</strong> for follow-up questions.</p><p>Point students to the <a href=\"/exams/driving-licence/\">driving licence theory page</a> to see how the app works. It is a study aid and does not replace your teaching or the official materials.</p><p>Whatever route you choose, check current rules and fees with Trafikverket and Transportstyrelsen, keep your study sessions short and regular, and review your mistakes the same day while they are fresh.</p>",
    },
    {
      heading: "What the app can and cannot do",
      html:
        "<p>To keep expectations clear: Drive Test is an app for <strong>individual learners</strong>. Each student has their own account and plan. We do not provide school dashboards, teacher accounts or group reporting, and we do not offer price packages for schools at this time. Learners confirm the available categories and prices in the app.</p><p>What it does well is give students a place to practise: exam-style questions, explanations, bookmarking for difficult questions, performance charts, test history and daily activity tracking. Students who prefer to listen can use text-to-speech.</p><ul><li>Works on iOS, Android and in the browser.</li><li>Free categories let students try before they subscribe.</li><li>Premium access is category-based and paid through the App Store, Google Play or Stripe.</li></ul><p>If you have questions about how the app might fit your school, reach us through the support page.</p>",
    },
    {
      heading: "Students who want to work as professional drivers",
      html:
        "<p>Many learners go on to professional driving. Drive Test also prepares people for the <a href=\"/exams/taxi-licence/\">taxi licence test</a> and for yrkeskunnande, so a student who passes the B theory test and later wants to drive a taxi can continue in the same app. See our <a href=\"/taxi-licence-guide/\">taxi licence guide</a> for what that path involves.</p><p>For students who are newcomers to Sweden, the page on <a href=\"/for/international-drivers/\">international drivers</a> explains how multi-language support and text-to-speech work in practice. The <a href=\"/blog/\">blog</a> has more guides.</p><p>To compare studying in an app with other options, read <a href=\"/compare/drive-test-vs-free-online-tests/\">Drive Test vs free online tests</a>. We aim to be fair about what each approach does well.</p><p>Whatever route you choose, check current rules and fees with Trafikverket and Transportstyrelsen, keep your study sessions short and regular, and review your mistakes the same day while they are fresh.</p>",
    },
  ],
  faq: [
    { q: "Does Drive Test have a teacher or school account?", aHtml: "No. Drive Test is built for individual learners. Each student has their own account and plan." },
    { q: "Can my students try the app for free?", aHtml: "Yes, there are free categories to explore before subscribing. Confirm current details in the app." },
    { q: "Does the app cover the B-licence theory test?", aHtml: "B-körkort is one of the category areas in the app. See <a href=\"/exams/driving-licence/\">the driving licence page</a>." },
    { q: "Does it help students who are new to Swedish?", aHtml: "Yes, it includes multi-language support and text-to-speech to help comprehension." },
    { q: "Does the app replace driving lessons?", aHtml: "No. It is a theory study aid that complements lessons and the official materials." },
  ],
  related: ["exams/driving-licence", "for/international-drivers", "compare/drive-test-vs-books", "compare/drive-test-vs-free-online-tests"],
  ctaTitle: "Tell your learners about the app",
  ctaText: "Try Drive Test on iOS, Android or the web to see if it suits your students.",
};

const sv: LandingPage = {
  slug: "for/driving-schools",
  kind: "audience",
  metaTitle: "Teoriapp för trafikskolor och elever | Drive Test",
  metaDescription:
    "Rekommendera Drive Test till dina elever: teoriprov körkort app med provliknande övning, förklaringar, text-till-tal och framstegsuppföljning.",
  eyebrow: "För trafikskolor",
  title: "Teoriapp för dina elever",
  titleAccent: "vid sidan av lektionerna",
  lede:
    "Eleverna behöver öva teori ofta. Drive Test ger dina elever provliknande körkortsteori i mobilen, med förklaringar och uppföljning av framsteg, vid sidan av de lektioner du redan håller.",
  stats: [
    { value: "3", label: "Studielägen: Övning, Anpassat och Granska" },
    { value: "3", label: "Plattformar: iOS, Android och webben" },
    { value: "Gratis", label: "Gratis kategorier för eleverna att prova" },
  ],
  problems: [
    { icon: "clock", title: "Begränsad tid i klassrummet", text: "Lektionstiden används bättre till körning och diskussion än till att drilla varje regel." },
    { icon: "language", title: "Elever med olika språk", text: "Elever som är nya i svenskan behöver hjälp att förstå frågornas exakta ordalydelse." },
    { icon: "alert", title: "Oklart egenstudium", text: "Eleverna vet ofta inte hur mycket de behöver öva eller var de är svaga." },
  ],
  solutions: [
    { icon: "phone", title: "Övning mellan lektionerna", text: "Eleverna drillar teori i sin egen mobil mellan passen." },
    { icon: "language", title: "Flerspråkigt och uppläst", text: "Text-till-tal och flerspråkigt stöd hjälper eleverna att följa frågorna." },
    { icon: "chart", title: "Egen framstegsuppföljning", text: "Eleverna ser sina resultat per kategori och vet när de är redo att boka teoriprovet." },
  ],
  sections: [
    {
      heading: "Så förbereder sig eleverna inför teoriprovet",
      html:
        "<p>Teoriprovet för B-körkort görs hos Trafikverket. Enligt Trafikverkets information krävs 52 rätt svar och provtiden är 50 minuter, och Trafikverket är platsen att bekräfta gällande regler. Det mesta av inlärningen sker utanför klassrummet, på elevens egen studietid.</p><p>Drive Test är ett självstudieverktyg som passar in i den tiden. <strong>Övning</strong> lär ut område för område, <strong>Anpassat</strong> låter eleven ställa in provets längd och timer, och <strong>Granska</strong> repeterar misstag. Varje fråga har en <strong>djupgående förklaring</strong> och en <strong>AI-tutor</strong> för följdfrågor.</p><p>Hänvisa eleverna till sidan om <a href=\"/sv/exams/driving-licence/\">teoriprov körkort app</a> för att se hur appen fungerar. Den är ett studiestöd och ersätter inte din undervisning eller det officiella materialet.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
    {
      heading: "Vad appen kan och inte kan",
      html:
        "<p>För att hålla förväntningarna tydliga: Drive Test är en app för <strong>enskilda elever</strong>. Varje elev har eget konto och egen plan. Vi erbjuder inga skolvyer, lärarkonton eller grupprapporter, och vi har inga prispaket för skolor i dagsläget. Eleverna bekräftar tillgängliga kategorier och priser i appen.</p><p>Det den gör bra är att ge eleverna en plats att öva: provliknande frågor, förklaringar, bokmärkning av svåra frågor, resultatdiagram, provhistorik och daglig aktivitetsuppföljning. Elever som föredrar att lyssna kan använda text-till-tal.</p><ul><li>Fungerar på iOS, Android och i webbläsaren.</li><li>Gratis kategorier låter eleverna prova innan de prenumererar.</li><li>Premiumåtkomst är kategoribaserad och betalas via App Store, Google Play eller Stripe.</li></ul><p>Har du frågor om hur appen kan passa din skola når du oss via supportsidan.</p>",
    },
    {
      heading: "Elever som vill arbeta som yrkesförare",
      html:
        "<p>Många elever går vidare till yrkesmässig körning. Drive Test förbereder också för <a href=\"/sv/exams/taxi-licence/\">taxiförarlegitimation prov</a> och för yrkeskunnande, så en elev som klarar B-teorin och senare vill köra taxi kan fortsätta i samma app. Se vår <a href=\"/sv/taxi-licence-guide/\">guide till taxiförarlegitimation</a> för vad den vägen innebär.</p><p>För elever som är nya i Sverige förklarar sidan om <a href=\"/sv/for/international-drivers/\">förare med annat modersmål</a> hur flerspråkigt stöd och text-till-tal fungerar i praktiken. <a href=\"/sv/blog/\">Bloggen</a> har fler guider.</p><p>För att jämföra att plugga i en app med andra alternativ, läs <a href=\"/sv/compare/drive-test-vs-free-online-tests/\">Drive Test eller gratis provsajter</a>. Vi försöker vara rättvisa mot vad varje sätt gör bra.</p><p>Oavsett väg du väljer: kontrollera gällande regler och avgifter hos Trafikverket och Transportstyrelsen, håll studiepassen korta och regelbundna och gå igenom dina misstag samma dag medan de är färska.</p>",
    },
  ],
  faq: [
    { q: "Har Drive Test lärar- eller skolkonto?", aHtml: "Nej. Drive Test är byggt för enskilda elever. Varje elev har eget konto och egen plan." },
    { q: "Kan mina elever prova appen gratis?", aHtml: "Ja, det finns gratis kategorier att utforska innan man prenumererar. Bekräfta aktuella uppgifter i appen." },
    { q: "Täcker appen teoriprovet för B-körkort?", aHtml: "B-körkort är ett av kategoriområdena i appen. Se <a href=\"/sv/exams/driving-licence/\">sidan om körkortsteori</a>." },
    { q: "Hjälper den elever som är nya i svenska?", aHtml: "Ja, den har flerspråkigt stöd och text-till-tal som hjälper förståelsen." },
    { q: "Ersätter appen körlektioner?", aHtml: "Nej. Det är ett teoristöd som kompletterar lektionerna och det officiella materialet." },
  ],
  related: ["exams/driving-licence", "for/international-drivers", "compare/drive-test-vs-books", "compare/drive-test-vs-free-online-tests"],
  ctaTitle: "Berätta om appen för dina elever",
  ctaText: "Prova Drive Test på iOS, Android eller webben för att se om den passar dina elever.",
};

export const audienceDrivingSchools = { en, sv };
