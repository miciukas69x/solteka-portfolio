export type BlogPost = {
  slug: string;
  title: Record<"en" | "lt", string>;
  summary: Record<"en" | "lt", string>;
  date: string;
  readingTime: Record<"en" | "lt", string>;
  tags: Record<"en" | "lt", string[]>;
  content: Record<"en" | "lt", string[]>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "launch-a-high-converting-landing-page-in-10-days",
    title: {
      en: "How To Launch A High-Converting Landing Page In 10 Days",
      lt: "Kaip paleisti konversiją generuojantį puslapį per 10 dienų",
    },
    summary: {
      en: "A practical checklist I use with clients to go from zero to a conversion-ready landing page without endless revisions.",
      lt: "Praktinis sąrašas, kurį naudoju su klientais, kad pereitume nuo nulio iki konversijai paruošto puslapio be begalinių peržiūrų.",
    },
    date: "2024-08-03",
    readingTime: {
      en: "6 min read",
      lt: "6 min trukmės",
    },
    tags: {
      en: ["Execution", "Landing Pages", "Process"],
      lt: ["Įgyvendinimas", "Puslapiai", "Procesas"],
    },
    content: {
      en: [
        "Most landing pages take months because there is no process. You can ship in 10 days if every day has a single purpose.",
        "Day 1 is alignment: offer, audience, goal. Days 2-3 are structure + copy. Day 4 is visual direction. Days 5-7 are build + QA. Days 8-9 are instrumentation and polish. Day 10 is launch + review.",
        "If you're missing assets, collect them once and lock scope. Every new idea goes into a parking lot for v1.1. Launch fast, learn faster.",
      ],
      lt: [
        "Dauguma puslapių užtrunka mėnesius, nes nėra proceso. Galite paleisti per 10 dienų, jei kiekviena diena turi vieną tikslą.",
        "1 diena – suderinimas: pasiūlymas, auditorija, tikslas. 2-3 dienos – struktūra + tekstai. 4 diena – vizualinė kryptis. 5-7 dienos – kūrimas + testavimas. 8-9 dienos – instrumentacija ir poliravimas. 10 diena – paleidimas + peržiūra.",
        "Jei trūksta medžiagų, surinkite jas vieną kartą ir užrakinkite apimtį. Kiekviena nauja idėja eina į „parkavimo aikštelę“ v1.1 versijai. Paleiskite greitai, mokykitės greičiau.",
      ],
    },
  },
  {
    slug: "seo-foundations-for-small-business-owners",
    title: {
      en: "SEO Foundations Every Small Business Owner Should Nail",
      lt: "SEO pagrindai, kuriuos turėtų įvaldyti kiekvienas smulkaus verslo savininkas",
    },
    summary: {
      en: "Forget advanced hacks. These are the five fundamentals that deliver measurable search traffic without hiring a massive agency.",
      lt: "Pamirškite sudėtingus triukus. Šie penki pagrindai suteikia matomą paieškos srautą be didžiųjų agentūrų samdymo.",
    },
    date: "2024-05-19",
    readingTime: {
      en: "5 min read",
      lt: "5 min trukmės",
    },
    tags: {
      en: ["SEO", "Growth"],
      lt: ["SEO", "Augimas"],
    },
    content: {
      en: [
        "Search is compound interest. Nail the boring basics and you will outrun 90% of your local competition.",
        "1) Clarify a primary keyword for each core page. 2) Ship useful on-page copy that actually answers questions. 3) Make the site fast on mobile. 4) Connect Search Console and watch queries weekly. 5) Build one meaningful backlink each month.",
        "Everything else (AI content, massive link swaps) is optional. Discipline beats gimmicks.",
      ],
      lt: [
        "Paieška yra sudėtinės palūkanos. Įvaldykite nuobodžius pagrindus ir aplenksite 90% vietinės konkurencijos.",
        "1) Išaiškinkite pagrindinį raktažodį kiekvienam svarbiausiam puslapiui. 2) Sukurkite naudingą puslapio turinį, kuris tikrai atsako į klausimus. 3) Padarykite svetainę greitą mobiliajame. 4) Prijunkite Search Console ir stebėkite užklausas kas savaitę. 5) Sukurkite vieną prasmingą atgalinę nuorodą kiekvieną mėnesį.",
        "Viskas kita (AI turinys, masiniai nuorodų pasikeitimai) yra neprivaloma. Disciplina įveikia gudrybes.",
      ],
    },
  },
  {
    slug: "meta-ads-lessons-from-early-campaigns",
    title: {
      en: "3 Lessons From Running Early Meta Ads Campaigns Under Supervision",
      lt: "3 pamokos iš ankstyvesnių Meta reklamos kampanijų valdymų",
    },
    summary: {
      en: "What small business owners should know before putting €1 into paid social, based on campaigns I run with an experienced mentor.",
      lt: "Ką smulkaus verslo savininkai turėtų žinoti prieš įdėdami €1 į mokamą socialinę reklamą, remiantis kampanijomis, kurias vykdau su patyrusiu mentoriumi.",
    },
    date: "2024-02-11",
    readingTime: {
      en: "4 min read",
      lt: "4 min trukmės",
    },
    tags: {
      en: ["Paid Media", "Meta Ads"],
      lt: ["Mokama Rinkodara", "Meta Reklama"],
    },
    content: {
      en: [
        "Lesson one: creative fatigue is real. Rotate hooks weekly even at low spend.",
        "Lesson two: broad targeting beats hyper-specific interests when your pixel is fresh. Let the algorithm explore.",
        "Lesson three: always define a KPI you can measure this week. If you can't see it in Ads Manager, it's vanity.",
      ],
      lt: [
        "Pirma pamoka: kūrybinis nuovargis yra tikras. Keiskite hook'us kas savaitę, net ir turint mažesnias pajamas.",
        "Antra pamoka: platus tikslinimas įveikia itin specifinius interesus, kai jūsų pikselis yra naujas. Leiskite algoritmui tyrinėti.",
        "Trečia pamoka: visada apibrėžkite KPI, kurį galite išmatuoti šią savaitę. Jei jo neturi Ads Manager, vadinasi neseki rezultatų.",
      ],
    },
  },
  {
    slug: "why-simple-websites-convert-better",
    title: {
      en: "Why Simple Websites Convert Better Than Complex Ones",
      lt: "Kodėl paprastos svetainės konvertuoja geriau už sudėtingas",
    },
    summary: {
      en: "Less is more when it comes to conversions. Here's why stripping down your website to essentials drives better results.",
      lt: "Mažiau yra daugiau, kai kalbame apie konversijas. Štai kodėl supaprastinimas iš esmės duoda geresnius rezultatus.",
    },
    date: "2024-11-15",
    readingTime: {
      en: "5 min read",
      lt: "5 min trukmės",
    },
    tags: {
      en: ["Conversion", "Design", "UX"],
      lt: ["Konversija", "Dizainas", "Vartotojo Patirtis"],
    },
    content: {
      en: [
        "Every extra button, animation, or section is a decision point. More decisions mean more opportunities for visitors to leave.",
        "Simple websites focus on one goal: get the visitor to take action. No distractions, no confusion, just a clear path forward.",
        "Test it yourself: remove half the elements from your homepage. You'll likely see conversion rates improve because visitors know exactly what to do next.",
      ],
      lt: [
        "Kiekvienas papildomas mygtukas, animacija ar sekcija yra sprendimo taškas. Daugiau sprendimų reiškia daugiau galimybių lankytojams išeiti.",
        "Paprastos svetainės sutelkia dėmesį į vieną tikslą: priversti lankytoją imtis veiksmų. Jokių išsiblaškymų, jokio painiavos, tik aiškus kelias į priekį.",
        "Išbandykite patys: pašalinkite pusę elementų iš pagrindinio puslapio. Greičiausiai pamatysite, kad konversijos rodikliai pagerės, nes lankytojai tiksliai žino, ką daryti toliau.",
      ],
    },
  },
  {
    slug: "mobile-first-design-is-not-optional",
    title: {
      en: "Mobile-First Design Is Not Optional Anymore",
      lt: "Mobilusis dizainas nebėra pasirenkamas",
    },
    summary: {
      en: "Over 60% of web traffic is mobile. If your site doesn't work perfectly on phones, you're losing customers before they even see your offer.",
      lt: "Daugiau nei 60% interneto srauto yra iš mobiliųjų įrenginių. Jei jūsų svetainė neveikia puikiai telefonuose, prarandate klientus dar prieš jiem pamačius jūsų pasiūlymą.",
    },
    date: "2024-10-22",
    readingTime: {
      en: "4 min read",
      lt: "4 min trukmės",
    },
    tags: {
      en: ["Mobile", "Design", "Performance"],
      lt: ["Mobilusis", "Dizainas", "Veikimas"],
    },
    content: {
      en: [
        "Mobile-first doesn't mean mobile-only. It means starting with the smallest screen and building up. This forces you to prioritize what actually matters.",
        "Test every page on a real phone, not just browser dev tools. What looks fine on desktop can be unusable on mobile.",
        "Speed matters more on mobile. A slow-loading site on mobile is worse than a slow site on desktop. Users will bounce in seconds.",
      ],
      lt: [
        "Mobile-first, nereiškia darbas tik prie telefonų. Tai reiškia pradėti nuo mažiausio ekrano ir kurti aukštyn. Tai verčia prioritizuoti tai, kas tikrai svarbu.",
        "Išbandykite kiekvieną puslapį tikrame telefone, ne tik naršyklės kūrimo įrankiuose. Kas atrodo gerai stacionariame kompiuteryje, gali būti nenaudojama mobiliajame.",
        "Greitis svarbesnis mobiliajame. Lėtai kraunačiojanti svetainė mobiliajame yra blogiau nei lėta svetainė stacionariame. Vartotojai išeis per sekundes.",
      ],
    },
  },
  {
    slug: "content-structure-beats-beautiful-design",
    title: {
      en: "Content Structure Beats Beautiful Design Every Time",
      lt: "Turinio struktūra visada įveikia gražų dizainą",
    },
    summary: {
      en: "A well-structured page with basic design converts better than a beautiful page with poor structure. Here's how to get it right.",
      lt: "Gerai struktūruotas puslapis su pagrindiniu dizainu konvertuoja geriau nei gražus puslapis su prasta struktūra. Štai kaip tai padaryti teisingai.",
    },
    date: "2024-09-10",
    readingTime: {
      en: "6 min read",
      lt: "6 min trukmės",
    },
    tags: {
      en: ["Content", "Structure", "Conversion"],
      lt: ["Turinys", "Struktūra", "Konversija"],
    },
    content: {
      en: [
        "Visitors scan, they don't read. Use clear headings, short paragraphs, and visual hierarchy to guide them to your CTA.",
        "The best structure: problem → solution → proof → action. Every section should answer 'why should I care?' before moving forward.",
        "Test your structure by removing all styling. If the page still makes sense and guides users to action, you've nailed it.",
      ],
      lt: [
        "Lankytojai peržvelgia, jie neskaito. Naudokite aiškias antraštes, trumpus pastraipas ir vizualinę hierarchiją, kad nukreiptumėte juos į jūsų CTA.",
        "Geriausia struktūra: problema → sprendimas → įrodymas → veiksmas. Kiekviena sekcija turėtų atsakyti į 'kodėl man tai rūpi?' prieš einant toliau.",
        "Išbandykite savo struktūrą pašalindami visą stilių. Jei puslapis vis dar turi prasmę ir veda vartotojus į veiksmą, jūs tai įveikėte.",
      ],
    },
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);

