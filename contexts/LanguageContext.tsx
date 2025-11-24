
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "lt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    "nav.consultation": "Free Consultation",
    "nav.testimonials": "Testimonials",
    "nav.solutions": "Solutions",
    
    // Hero
    "hero.heading": "Sell more. Stress less.",
    "hero.title": "Marketing & Page Solutions",
    "hero.subtitle": "From simple designs to fully custom platforms. Professional web development and digital marketing to help grow your business.",
    "hero.cta": "View Services",
    "hero.cta2": "Get in Touch",
    
    // Testimonials
    "testimonials.heading": "What Clients Say",
    "testimonials.subheading": "Real feedback from satisfied clients",
    "testimonials.cta": "See More Testimonials",
    
    // Services
    "services.heading": "Popular Solutions",
    "services.subheading": "Our most requested services to help grow your business",
    "services.cta": "More Solutions",
    "services.cta2": "Consultation",   

    // FAQ
    "faq.heading": "FAQ",
    "faq.subheading": "Everything you need to know about our servcies",
    
    // Contact Simple
    "simple.heading": "Let's Work Together",
    "simple.subheading": "Ready to elevate your online presence?",
    "simple.cta": "Get in Touch",
    
    // Footer
    "footer.heading": "Marketing & Page Solutions for modern businesses",
    "footer.s": "Services",
    "footer.s.all": "All solutions",
    "footer.s.simple": "Simple Hustle",
    "footer.s.seo": "SEO Integrated",
    "footer.s.custom": "Fully Custom",
    "footer.s.meta": "Meta Ads",
    "footer.s.adseo": "SEO Services",
    "footer.s.google": "Google Ads",
    "footer.h.1": "Page Solutions",
    "footer.h.2": "Marketing Solutions",

    "footer.c": "Company",
    "footer.c.faq": "FAQ",
    "footer.c.blog": "Blog",
    "footer.c.testimonials": "Testimonials",
    "footer.c.contact": "Contact",

    "footer.l": "Legal",
    "footer.l.privacy": "Privacy Policy",
    "footer.l.tos": "Terms Of Service",
    "footer.l.cookie": "Cookie policy",
    "footer.rights": "All rights reserved.",
    "footer.consultation": "Book a Consultation",

    // Contact Page
    "contact.heading": "Get in Touch",
    "contact.subheading": "Ready to start your project? Let's discuss how I can help bring your vision to life.",
    "contact.info": "Contact Information",
    "contact.info.e": "Email",
    "contact.info.i": "I'll respond within 24 hours",
    "contact.info.b": "Book a consultation",
    "contact.info.bc": "Schedule a free 30-min call",
    "contact.info.c": "View available times",
    "contact.info.r": "Quick Response",
    "contact.info.q": "Need a fast answer? Message me directly",
    "contact.info.l": "Location",
    "contact.info.li": "Available globally • Remote work",

    "contact.workhours": "Working Hours",
    "contact.work1": "Monday - Friday",
    "contact.work2": "Saturday",
    "contact.work3": "Sunday",

    "contact.connect": "Connect on Social",
    "contact.precta": "Prefer to jump right in? Book a free consultation to discuss your project.",
    "contact.cta": "Book Free Consultation",

    "contact.expect": "What to Expect",
    "contact.initial": "Initial Consultation",
    "contact.initial.info": "We'll discuss your goals, timeline, and budget to ensure alignment.",
    "contact.proposal": "Proposal & Quote", 
    "contact.proposal.info": "You'll receive a detailed proposal with pricing and timeline.",
    "contact.kickoff": "Project Kickoff",
    "contact.kickoff.info": "Once approved, we start building with regular updates.",

    // Solutions Page
    "solutions.heading": "All Solutions",
    "solutions.subheading": "Choose the solution that fits your needs and budget",
    "solutions.page": "Page Solutions",
    "solutions.marketing": "Marketing Solutions",
    "solutions.q": "Not sure which solution is right for you?",
    "solutions.cta": "Book a Free Consultation",



    // Solutions page – extra
    "solutions.learnMore": "Learn More",

    // Solution detail
    "solutionDetail.back": "Back to Solutions",
    "solutionDetail.included": "What's Included",
    "solutionDetail.process": "Process",
    "solutionDetail.ready": "Ready to Get Started?",
    "solutionDetail.readyText": "Book a free consultation to discuss your project, or proceed directly to payment if you're ready to begin.",
    "solutionDetail.paymentCta": "Proceed to Payment",





    // Testimonial page
    "testimonials.page.heading": "Client Testimonials",
    "testimonials.page.subheading": "Real feedback from satisfied clients who've grown their businesses with our solutions",
    "testimonials.page.q": "Ready to Join Them?",
    "testimonials.page.c": "Let's create something amazing together. Choose the solution that fits your needs.",
    "testimonials.page.cta": "View Solutions",

    // Blog
    "blog.heading": "Blog",
    "blog.title": "Notes on shipping, marketing, and learning out loud.",
    "blog.subtitle": "Short, tactical posts documenting what actually works while building bilingual landing pages, SEO programs, and Meta campaigns for small businesses.",
    "blog.readArticle": "Read article",
    "blog.backToPosts": "Back to all posts",
  },
  lt: {
    // Navigation
    "nav.faq": "DUK",
    "nav.contact": "Kontaktai",
    "nav.blog": "Tinklaraštis",
    "nav.consultation": "Nemokama konsultacija",
    "nav.testimonials": "Atsiliepimai",
    "nav.solutions": "Sprendimai",
    
    // Hero
    "hero.heading": "Auginkite pardavimus - ne rūpesčius.",
    "hero.title": "Rinkodaros ir Svetainių Sprendimai",
    "hero.subtitle": "Nuo paprastų dizainų iki visiškai individualių platformų. Profesionali svetainių kūrimo ir skaitmeninės rinkodaros paslauga, padedanti auginti jūsų verslą.",
    "hero.cta": "Peržiūrėti Paslaugas",
    "hero.cta2": "Susisiekime",
   
     // Testimonials
    "testimonials.heading": "Pamatykite, ką apie mus kalba",
    "testimonials.subheading": "Tikri atsiliepimai iš patenktintų klientų",
    "testimonials.cta": "Daugiau atsiliepimų",
    
    // Services
    "services.heading": "Populiariausi Sprendimai",
    "services.subheading": "Mūsų dažniausiai užsakomos paslaugos jūsų verslui auginti",
    "services.cta": "Daugiau sprendimų",
    "services.cta2": "Konsultacija",
     
    // FAQ
    "faq.heading": "DUK",
    "faq.subheading": "Viskas, ką jums reikia žinoti apie mūsų paslaugas",
    
    // Contact Simple
    "simple.heading": "Dirbkime kartu!",
    "simple.subheading": "Pavargote nematyti rezultatų?",
    "simple.cta": "Susisiekime",

    // Footer
    "footer.heading": "Puslapių ir marketingo sprendimai, įmonėms, kurios nori plėsti savo skaitmeninę įtaką",
    "footer.s": "Sprendimai",
    "footer.s.all": "Visi sprendimai",
    "footer.s.simple": "Paprastas Hustle",
    "footer.s.seo": "SEO Integruotas",
    "footer.s.custom": "Pilnai pagal poreikius",
    "footer.s.meta": "Meta reklama",
    "footer.s.adseo": "SEO paslaugos",
    "footer.s.google": "Google reklama",
    "footer.h.1": "Puslapių sprendimai",
    "footer.h.2": "Marketingo sprendimai",

    "footer.c": "Kompanija",
    "footer.c.faq": "DUK",
    "footer.c.blog": "Tinklaraštis",
    "footer.c.testimonials": "Atsiliepimai",
    "footer.c.contact": "Kontaktai",

    "footer.l": "Teisės",
    "footer.l.privacy": "Privatumo politika",
    "footer.l.tos": "Naudojimo sąlygos",
    "footer.l.cookie": "Slapukų politika",
    "footer.rights": "Visos teisės rezervuotos.",
    "footer.consultation": "Užsiregistruoti konsultacijai",

    // Contact Page
    "contact.heading": "Susisiekime",
    "contact.subheading": "Pasiruošę pradėti plėtrą, bet turite klausimų? Mielai į juos atsakysiu",
    "contact.info": "Kontaktų informacija",
    "contact.info.e": "Paštas",
    "contact.info.i": "Atrašysiu per 24 valandas",
    "contact.info.b": "Užsiregistruoti konsultacijai",
    "contact.info.bc": "Susiplanuokime 30 minučių pokalbį",
    "contact.info.c": "Žiūreti laisvus laikus",
    "contact.info.r": "Greitas atrašymas",
    "contact.info.q": "Reikia greito atsakymo? Parašyk man tiesiogiai",
    "contact.info.l": "Lokacija",
    "contact.info.li": "Pasiekiamas gloabaliai • Darbas nuotoliu",

    "contact.workhours": "Darbo valandos",
    "contact.work1": "Pirmadienis - Penktadienis",
    "contact.work2": "Šeštadienis",
    "contact.work3": "Sekmadienis",

    "contact.connect": "Bendraukime per socalines medijas",
    "contact.precta": "Nežinai ko nori? Užsiregistruok nemokamai konsultacijai ir mes padėsime tau atrasti sprendimą",
    "contact.cta": "Užsiregistruoti konsultacijai",

    "contact.expect": "Ko tikėtis?",
    "contact.initial": "Pirmoji konsultacija",
    "contact.initial.info": "Aptarsime jūsų dabartinę situaciją, biudžetą ir numatytą laiko trukmę.",
    "contact.proposal": "Pasiūlymas ir įkainiai", 
    "contact.proposal.info": "Gausite detaliai aprašytą sutartį su įkainiais ir projekto pagaminimo/reklamos testavimo laiko trukmes.",
    "contact.kickoff": "Projekto startas",
    "contact.kickoff.info": "Vos patvirtinus kibsime į darbus ir reguliariai pranešime apie progresą.",


    // Solutions Page
    "solutions.heading": "Visi sprendimai",
    "solutions.subheading": "Pasirinkite sprendimą, geriausiai atitinkantį jūsų lūkesčius ir biudžetą",
    "solutions.page": "Puslapio sprendimai",
    "solutions.marketing": "Marketingo sprendimai",
    "solutions.q": "Nežinai kuris pasiūlymas tau tinka geriausiai?",
    "solutions.cta": "Užsiregistruok konsultacijai",
    


    // Solutions page – extra
    "solutions.learnMore": "Plačiau",

    // Solution detail
    "solutionDetail.back": "Atgal į sprendimus",
    "solutionDetail.included": "Kas įtraukta",
    "solutionDetail.process": "Procesas",
    "solutionDetail.ready": "Pasiruošę pradėti?",
    "solutionDetail.readyText": "Užsisakykite nemokamą konsultaciją projektui aptarti arba, jei jau apsisprendėte, pereikite tiesiai prie apmokėjimo.",
    "solutionDetail.paymentCta": "Tęsti į apmokėjimą",





    // Testimonial page
    "testimonials.page.heading": "Klientų komentarai",
    "testimonials.page.subheading": "Tikri atsiliepimai iš patenktintų klientų, kurie mūsų paslaugų nauda, išpletė savus verslus",
    "testimonials.page.q": "Pasiruošę prisijungti?",
    "testimonials.page.c": "Sukurkime kažką neįprasto kartu! Išsirinkite sprendimą, geriausiai atitinkantį jūsų lūkesčius",
    "testimonials.page.cta": "Sprendimai",

    // Blog
    "blog.heading": "Tinklaraštis",
    "blog.title": "Užrašai apie kūrimą, rinkodarą ir mokymąsi garsiai.",
    "blog.subtitle": "Trumpi, taktiški įrašai, dokumentuojantys tai, kas tikrai veikia kuriant dvikalbius tikslinius puslapius, SEO programas ir Meta kampanijas smulkiam verslui.",
    "blog.readArticle": "Skaityti straipsnį",
    "blog.backToPosts": "Atgal į visus įrašus",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en"; // Default during SSR
    }
    const saved = localStorage.getItem("language");
    return (saved === "lt" ? "lt" : "en") as Language;
  });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setIsAnimating(true);
    setTimeout(() => {
      setLanguageState(lang);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={`transition-opacity- duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
