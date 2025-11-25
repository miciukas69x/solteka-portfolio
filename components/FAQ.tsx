
'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqsByLang: Record<
  "en" | "lt",
  {
    question: string;
    answer: string;
  }[]
> = {
  en: [
    {
      question: "What's the difference between the page solution tiers?",
      answer:
        "Simple Hustle is ideal for fast, clean launches using proven tools and simple integrations. SEO Integrated adds search-focused structure, technical SEO, and analytics from day one. Fully Custom is for complex, unique platforms with custom functionality, dashboards, or advanced workflows.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Simple Hustle projects typically take around 1–2 weeks once content is ready. SEO Integrated projects usually take 2–4 weeks, since there’s more planning and optimization involved. Fully Custom platforms vary based on scope and complexity, but usually land around 4–12 weeks.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes. Every project includes a support period after launch to fix bugs and adjust small things. For more complex or custom-coded projects, we can also agree on extended support, maintenance, or a monthly retainer if you want someone to keep an eye on things long term.",
    },
    {
      question: "Can you help with existing websites?",
      answer:
        "Absolutely. We can optimize your existing site, improve speed and structure, adjust the design, add new sections or features, or, if it makes more sense, rebuild it properly instead of endlessly patching something that doesn't scale.",
    },
    {
      question: "What's included in Meta Ads management?",
      answer:
        "Meta Ads management includes campaign strategy, audience research, ad creative testing, budget and bid optimization, and performance reporting. We work with experienced marketers to make sure the results and decisions are grounded, not guesswork.",
    },
    {
      question: "Do I need to provide the content?",
      answer:
        "If you already have content, great, we'll shape and structure it. If not, we can help define the core message, structure the sections, and draft copy together with you. We're not pure copywriters, but we can guide messaging and suggest what content is needed where.",
    },
    {
      question: "What platforms do you integrate with?",
      answer:
        "Common integrations include Calendly, Shopify, payment processors, email marketing tools, form providers, Google Analytics, and similar services. For custom-coded projects, we can integrate almost any platform that exposes an API or has a usable embed.",
    },
    {
      question: "Who is behind Solteka?",
      answer:
        "Solteka is a digital marketing and web development agency focused on building practical, conversion-focused solutions for small businesses. We combine web development, performance marketing, and structured thinking to deliver results, not just pretty layouts.",
    },
  ],

  lt: [
    {
      question: "Kuo skiriasi puslapių sprendimų lygiai?",
      answer:
        "Simple Hustle tinka greitam, švariam startui naudojant patikrintus įrankius ir paprastas integracijas. SEO Integruotas prideda SEO struktūrą, techninę optimizaciją ir analitiką nuo pirmos dienos. Pilnai pagal poreikius skirtas sudėtingesnėms, unikalioms platformoms su individualia logika ar valdymo skydeliais.",
    },
    {
      question: "Per kiek laiko įgyvendinamas projektas?",
      answer:
        "Simple Hustle dažniausiai trunka apie 1–2 savaites, jei turinys jau paruoštas. SEO Integruotas sprendimas paprastai užtrunka 2–4 savaites, nes daugiau darbo su struktūra ir optimizacija. Pilnai pagal poreikius projektų trukmė priklauso nuo apimties, dažniausiai 4–12 savaičių.",
    },
    {
      question: "Ar po projekto užbaigimo teikiate palaikymą?",
      answer:
        "Taip. Visi projektai turi palaikymo laikotarpį po paleidimo: smulkiems pataisymams, bug’ams ir korekcijoms. Sudėtingesniems ir custom sprendimams galime susitarti dėl išplėstinio palaikymo ar mėnesinio plano, jei norite, kad kažkas nuolat prižiūrėtų sistemą.",
    },
    {
      question: "Ar galite padėti su jau egzistuojančia svetaine?",
      answer:
        "Taip. Galime optimizuoti esamą svetainę, pagerinti greitį ir struktūrą, pakoreguoti dizainą, pridėti naujų sekcijų ar funkcijų. Jei dabartinis sprendimas visiškai neveža, dažnai logiškiau yra pastatyti naują, o ne lopti seną be pabaigos.",
    },
    {
      question: "Kas įeina į Meta reklamos valdymą?",
      answer:
        "Meta reklamos valdymas apima kampanijos strategiją, auditorijų analizę, reklamos kūrybų testavimą, biudžeto ir statymų optimizavimą bei rezultatų ataskaitas. Dirbame su patyrusiais rinkodaros specialistais, kad sprendimai būtų paremti duomenimis, o ne nuojauta.",
    },
    {
      question: "Ar turiu pateikti visą turinį pats?",
      answer:
        'Jei turite paruoštą turinį – puiku, jį sutvarkysime ir sudėliosime. Jei ne, padėsime išsigryninti žinutę, pasiūlyti struktūrą ir kartu su jumis sudėlioti tekstus. Nesame „gryni" tekstų kūrėjai, bet galime aiškiai parodyti, koks turinys reikalingas kurioje puslapio vietoje.',
    },
    {
      question: "Su kokiomis platformomis integruojate?",
      answer:
        "Dažniausios integracijos: Calendly, Shopify, mokėjimų sistemos, el. pašto rinkodaros įrankiai, įvairios formos, Google Analytics ir pan. Custom sprendimuose galime jungtis prie beveik bet kokios platformos, jei ji turi API arba bent jau įterpimo (embed) galimybes.",
    },
    {
      question: "Kas yra Solteka?",
      answer:
        "Solteka yra skaitmeninės rinkodaros ir svetainių kūrimo agentūra, orientuota į praktiškus, konversijai orientuotus sprendimus smulkiam verslui. Deriname svetainių kūrimą, našumo rinkodarą ir struktūrizuotą mąstymą, kad pateiktume rezultatus, o ne tik gražius dizainus.",
    },
  ],
};

const FAQ = () => {
  const { t, language } = useLanguage();
  const langKey: "en" | "lt" = language === "lt" ? "lt" : "en";
  const faqs = faqsByLang[langKey];

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              {t("faq.heading")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("faq.subheading")}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 animate-slide-up">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border-border rounded-lg px-4 sm:px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

