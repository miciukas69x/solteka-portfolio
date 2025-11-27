
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
    "nav.company": "Company",
    "nav.about": "About Us",
    
    // Hero
    "hero.heading": "Sell more. Stress less.",
    "hero.title": "Websites & ads that actually bring clients",
    "hero.subtitle": "Fast, clear pages and performance marketing for small businesses that want inquiries, bookings, and sales—not just 'online presence.'",
    "hero.targetMarket": "For small & medium businesses in Lithuania and the Netherlands",
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
    
    // How We Work
    "howWeWork.heading": "How We Work",
    "howWeWork.subheading": "A simple, transparent process",
    "howWeWork.step1.title": "Short Call",
    "howWeWork.step1.description": "We discuss your needs, goals, and timeline to understand what you're looking for.",
    "howWeWork.step2.title": "Proposal & Price",
    "howWeWork.step2.description": "You receive a clear proposal with scope, timeline, and transparent pricing—no surprises.",
    "howWeWork.step3.title": "Delivery & Support",
    "howWeWork.step3.description": "We build, launch, and provide ongoing support to ensure everything works as expected.",
    
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
    "footer.s.ecommerce": "E-commerce Shop",
    "footer.s.tiktok": "TikTok Ads",
    "footer.h.1": "Page Solutions",
    "footer.h.2": "Marketing Solutions",

    "footer.c": "Company",
    "footer.c.about": "About Us",
    "footer.c.faq": "FAQ",
    "footer.c.blog": "Blog",
    "footer.c.testimonials": "Testimonials",
    "footer.c.contact": "Contact",

    "footer.l": "Legal",
    "footer.l.privacy": "Privacy Policy",
    "footer.l.tos": "Terms Of Service",
    "footer.l.cookie": "Cookie policy",
    "footer.rights": "All rights reserved.",
    "footer.kvk": "KVK: 98993402",
    "footer.consultation": "Book a Consultation",

    // Contact Page
    "contact.heading": "Get in Touch",
    "contact.subheading": "Ready to start your project? Let's discuss how we can help bring your vision to life.",
    "contact.info": "Contact Information",
    "contact.info.e": "Email",
    "contact.info.i": "We'll respond within 24 hours",
    "contact.info.b": "Book a consultation",
    "contact.info.bc": "Schedule a free 30-min call",
    "contact.info.c": "View available times",
    "contact.info.r": "Quick Response",
    "contact.info.q": "Need a fast answer? Message us directly",
    "contact.info.l": "Location",
    "contact.info.li": "Available globally • Remote work",

    "contact.workhours": "Working Hours",
    "contact.work1": "Monday - Friday",
    "contact.work2": "Saturday",
    "contact.work3": "Sunday",

    "contact.connect": "Connect on Social",
    "contact.precta": "Prefer to jump right in? Book a free consultation to discuss your project.",
    "contact.cta": "Book Free Consultation",

    // Newsletter
    "newsletter.heading": "Stay Updated",
    "newsletter.subheading": "Get discounts, deals, and our latest blog posts",
    "newsletter.emailPlaceholder": "Your email",
    "newsletter.namePlaceholder": "Your name (optional)",
    "newsletter.submit": "Subscribe",
    "newsletter.submitting": "Subscribing...",
    "newsletter.success": "Successfully subscribed!",
    "newsletter.error": "Something went wrong. Please try again.",
    "newsletter.alreadySubscribed": "This email is already subscribed.",

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
    
    // Checkout
    "checkout.heading": "Complete Your Order",
    "checkout.subheading": "Fill in your details to proceed with payment",
    "checkout.name": "Full Name",
    "checkout.email": "Email Address",
    "checkout.phone": "Phone Number",
    "checkout.comment": "Additional Comments",
    "checkout.commentPlaceholder": "Tell us about your project, timeline, or any specific requirements...",
    "checkout.demoPromise": "Demo Presentation Promise",
    "checkout.demoText": "We'll present a demo of your solution within the next couple of days after payment confirmation.",
    "checkout.payButton": "Proceed to Payment",
    "checkout.back": "Back to Solution",
    "checkout.orderSummary": "Order Summary",





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

    // About Us
    "about.heading": "About Solteka",
    "about.tagline": "It's not just about numbers—we understand what your business actually needs.",
    "about.subheading": "Building practical, conversion-focused solutions for small businesses",
    "about.mission.title": "Our Mission",
    "about.mission.content": "We deliver high-quality services across web development, marketing, creative production, and financial analysis. Our mission is simple: provide exceptional work that's worth every penny. We offer a broad range of services because we know businesses need more than just one thing—and when you work with us, you get quality, not shortcuts.",
    "about.vision.title": "Our Vision",
    "about.vision.content": "We grow together with our clients. Our vision is to become your go-to team—the one you never want to leave because the quality is that good. When we provide the best work, clients stick around. And when clients stick around, we scale together. That's how we all make real money: by building long-term partnerships, not quick transactions.",
    "about.why.title": "Why Choose Us?",
    "about.why.point1.title": "Quality Over Speed, Always",
    "about.why.point1.content": "We'd rather take an extra week to get it right than rush and deliver something that doesn't work. When you hire us, you're getting a team that actually knows what they're doing—not agencies that promise SEO capabilities but deliver blank pages when search engines crawl your site. We build solutions that work, not just look good. We're not here to make a quick buck—we're here to scale companies that are already making money. If you need something fast, we have Simple Hustle solutions. But if you want to grow, we're the team that actually delivers.",
    "about.why.point2.title": "A Team That Actually Delivers",
    "about.why.point2.content": "Our team combines finance expertise, full-stack development, performance marketing, and creative production. We have developers who code, marketers who understand data, finance students who analyze what actually moves the needle, and creatives who produce quality content. When a project needs more hands, we have trusted partners in both the Netherlands and Lithuania. We don't promise what we can't deliver—and we deliver what we promise.",
    "about.frameworks.title": "What We Offer",
    "about.frameworks.subtitle": "From modern web development to performance marketing and financial consulting, we provide the full stack of services your business needs to grow online.",
    "about.frameworks.fullstack": "Full-Stack Development",
    "about.frameworks.performance": "Performance Marketing",
    "about.frameworks.creative": "Creative Production",
    "about.frameworks.financial_analysis": "Financial Analysis",
    "about.frameworks.nextjs": "Next.js",
    "about.frameworks.react": "React",
    "about.frameworks.typescript": "TypeScript",
    "about.frameworks.tailwind": "Tailwind CSS",
    "about.frameworks.shopify": "Shopify",
    "about.frameworks.databases": "Databases",
    "about.frameworks.financial": "Financial Analysis",
    "about.frameworks.consulting": "Consulting",
    "about.frameworks.meta": "Meta Ads",
    "about.frameworks.google": "Google Ads",
    "about.frameworks.tiktok": "TikTok Ads",
    "about.frameworks.seo": "SEO",
    "about.frameworks.email": "Email Marketing",
    "about.frameworks.analytics": "Analytics",
    "about.frameworks.forecasting": "Financial Forecasting",
    "about.frameworks.video": "Video Production",
    "about.frameworks.editing": "Video Editing",
    "about.frameworks.content": "Content Creation",
    "about.frameworks.social": "Social Media Management",
    
    // Framework descriptions
    "about.frameworks.react.desc": "We build dynamic, component-based web applications with React. Focus on reusable components, state management, and performance for fast, scalable apps.",
    "about.frameworks.nextjs.desc": "SEO-friendly, high-performance websites with Next.js. Server-side rendering, automatic code splitting, and image optimization for production-ready apps.",
    "about.frameworks.typescript.desc": "All code written in TypeScript for reliability and maintainability. Fewer bugs, easier refactoring, and confidence when deploying updates.",
    "about.frameworks.tailwind.desc": "Custom, responsive designs built quickly with Tailwind CSS. Every design is unique to your business, not a template.",
    "about.frameworks.databases.desc": "We work with PostgreSQL, MongoDB, and more to store your data securely. Optimized schemas, proper indexing, and scalable solutions.",
    "about.frameworks.shopify.desc": "Custom Shopify stores and headless commerce solutions. We integrate Shopify with your existing systems for seamless e-commerce.",
    "about.frameworks.meta.desc": "Facebook and Instagram ad campaigns that convert. Precise targeting, compelling creatives, and data-driven optimization.",
    "about.frameworks.google.desc": "Google Ads campaigns optimized for ROI. We manage search, display, and shopping ads with continuous testing and optimization.",
    "about.frameworks.tiktok.desc": "TikTok ad campaigns that reach younger audiences. Creative video ads, precise targeting, and performance tracking for maximum engagement.",
    "about.frameworks.seo.desc": "Technical audits, on-page optimization, and quality backlinks. Real rankings, not vanity metrics.",
    "about.frameworks.analytics.desc": "Google Analytics, Facebook Pixel, and custom tracking set up. Clear reports on traffic sources and what drives revenue.",
    "about.frameworks.email.desc": "Email campaigns and automation workflows. We segment audiences, optimize deliverability, and track performance.",
    "about.frameworks.video.desc": "Professional videos—product demos, testimonials, explainer videos. Quality equipment and editing that converts viewers.",
    "about.frameworks.editing.desc": "Polished video editing with attention to pacing, color grading, and storytelling. From social clips to full promotional videos.",
    "about.frameworks.content.desc": "Blog posts, social media content, and marketing copy that aligns with your brand voice and drives action.",
    "about.frameworks.social.desc": "Content strategies, scheduling, and engagement across all platforms. We help build a community, not just followers.",
    "about.frameworks.financial.desc": "Data-driven analysis of revenue streams, expenses, and profitability. We identify opportunities to optimize costs and increase margins.",
    "about.frameworks.consulting.desc": "Strategic financial guidance for your business. We help you understand your numbers, plan budgets, and make informed scaling decisions.",
    "about.frameworks.forecasting.desc": "Revenue, expense, and cash flow forecasting based on historical data. Models to plan growth and anticipate cash needs.",
    "about.cta.testimonials": "See What Clients Say",
    "about.cta.consultation": "Book Free Consultation",
    "about.cta.heading": "Curious About Our Company?",
    "about.cta.subheading": "Learn more about our mission, vision, and the team behind Solteka.",
    "about.cta.button": "Read About Us",
  },
  lt: {
    // Navigation
    "nav.faq": "DUK",
    "nav.contact": "Kontaktai",
    "nav.blog": "Tinklaraštis",
    "nav.consultation": "Nemokama konsultacija",
    "nav.testimonials": "Atsiliepimai",
    "nav.solutions": "Sprendimai",
    "nav.company": "Kompanija",
    "nav.about": "Apie mus",
    
    // Hero
    "hero.heading": "Auginkite pardavimus - ne rūpesčius.",
    "hero.title": "Svetainės ir reklama, kurios uždirba, o ne tik gražiai atrodo",
    "hero.subtitle": "Kuriame greitus puslapius ir kampanijas, kad smulkus verslas gautų daugiau užklausų, rezervacijų ir pardavimų.",
    "hero.targetMarket": "Skirta smulkiam ir vidutiniam verslui Lietuvoje ir Nyderlanduose",
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
    
    // How We Work
    "howWeWork.heading": "Kaip Mes Dirbame",
    "howWeWork.subheading": "Paprastas, skaidrus procesas",
    "howWeWork.step1.title": "Trumpas Pokalbis",
    "howWeWork.step1.description": "Aptariame jūsų poreikius, tikslus ir laikotarpius, kad suprastume, ko ieškote.",
    "howWeWork.step2.title": "Pasiūlymas ir Kaina",
    "howWeWork.step2.description": "Gaunate aiškų pasiūlymą su apimtimi, laikotarpiu ir skaidria kaina—jokių netikėtumų.",
    "howWeWork.step3.title": "Pristatymas ir Palaikymas",
    "howWeWork.step3.description": "Kuriame, paleidžiame ir teikiame nuolatinį palaikymą, kad viskas veiktų kaip tikėtasi.",
     
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
    "footer.s.ecommerce": "E-commerce parduotuvė",
    "footer.s.tiktok": "TikTok reklama",
    "footer.h.1": "Puslapių sprendimai",
    "footer.h.2": "Marketingo sprendimai",

    "footer.c": "Kompanija",
    "footer.c.about": "Apie mus",
    "footer.c.faq": "DUK",
    "footer.c.blog": "Tinklaraštis",
    "footer.c.testimonials": "Atsiliepimai",
    "footer.c.contact": "Kontaktai",

    "footer.l": "Teisės",
    "footer.l.privacy": "Privatumo politika",
    "footer.l.tos": "Naudojimo sąlygos",
    "footer.l.cookie": "Slapukų politika",
    "footer.rights": "Visos teisės rezervuotos.",
    "footer.kvk": "KVK: 98993402",
    "footer.consultation": "Užsiregistruoti konsultacijai",

    // Contact Page
    "contact.heading": "Susisiekime",
    "contact.subheading": "Pasiruošę pradėti plėtrą, bet turite klausimų? Mielai į juos atsakysime",
    "contact.info": "Kontaktų informacija",
    "contact.info.e": "Paštas",
    "contact.info.i": "Atrašysime per 24 valandas",
    "contact.info.b": "Užsiregistruoti konsultacijai",
    "contact.info.bc": "Susiplanuokime 30 minučių pokalbį",
    "contact.info.c": "Žiūreti laisvus laikus",
    "contact.info.r": "Greitas atrašymas",
    "contact.info.q": "Reikia greito atsakymo? Parašykite mums tiesiogiai",
    "contact.info.l": "Lokacija",
    "contact.info.li": "Pasiekiamas gloabaliai • Darbas nuotoliu",

    "contact.workhours": "Darbo valandos",
    "contact.work1": "Pirmadienis - Penktadienis",
    "contact.work2": "Šeštadienis",
    "contact.work3": "Sekmadienis",

    "contact.connect": "Bendraukime per socalines medijas",
    "contact.precta": "Nežinai ko nori? Užsiregistruok nemokamai konsultacijai ir mes padėsime tau atrasti sprendimą",
    "contact.cta": "Užsiregistruoti konsultacijai",

    // Newsletter
    "newsletter.heading": "Būkite Informuoti",
    "newsletter.subheading": "Gaukite nuolaidas, pasiūlymus ir naujausius tinklaraščio straipsnius",
    "newsletter.emailPlaceholder": "Jūsų el. paštas",
    "newsletter.namePlaceholder": "Jūsų vardas (nebūtina)",
    "newsletter.submit": "Prenumeruoti",
    "newsletter.submitting": "Prenumeruojama...",
    "newsletter.success": "Sėkmingai užsiprenumeravote!",
    "newsletter.error": "Kažkas nutiko. Bandykite dar kartą.",
    "newsletter.alreadySubscribed": "Šis el. paštas jau užsiprenumeruotas.",

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
    
    // Checkout
    "checkout.heading": "Užbaikite užsakymą",
    "checkout.subheading": "Užpildykite savo duomenis, kad galėtumėte tęsti apmokėjimą",
    "checkout.name": "Vardas, pavardė",
    "checkout.email": "El. pašto adresas",
    "checkout.phone": "Telefono numeris",
    "checkout.comment": "Papildomi komentarai",
    "checkout.commentPlaceholder": "Papasakokite apie savo projektą, terminus arba bet kokius specifinius reikalavimus...",
    "checkout.demoPromise": "Demo pristatymo pažadas",
    "checkout.demoText": "Per kelias dienas po apmokėjimo patvirtinimo pristatysime jūsų sprendimo demonstraciją.",
    "checkout.payButton": "Tęsti į apmokėjimą",
    "checkout.back": "Atgal į sprendimą",
    "checkout.orderSummary": "Užsakymo santrauka",





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

    // About Us
    "about.heading": "Apie Solteka",
    "about.tagline": "Tai ne tik apie skaičius—mes suprantame, ko tikrai reikia jūsų verslui.",
    "about.subheading": "Kuriame praktiškus, konversijai orientuotus sprendimus smulkiam verslui",
    "about.mission.title": "Mūsų misija",
    "about.mission.content": "Teikiame aukštos kokybės paslaugas: svetainių kūrimą, rinkodarą, kūrybinę gamybą ir finansinę analizę. Mūsų misija paprasta: teikti išskirtinį darbą, kurio vertas kiekvienas centas. Siūlome platų paslaugų spektrą, nes suprantame, kad verslams reikia daugiau nei vieno dalyko—o kai dirbate su mumis, gaunate kokybę, ne kažkokius tai trumpinius.",
    "about.vision.title": "Mūsų vizija",
    "about.vision.content": "Augame kartu su klientais. Mūsų vizija—tapti jūsų pagrindine komanda, nuo kurios nenorite atsirišti, nes kokybė, tokia gera. Kai teikiame geriausią darbą, klientai lieka. O kai klientai lieka, augame kartu. Taip visi uždirbame tikrų pinigų: kurdami ilgalaikius partnerystės ryšius, ne greitus sandorius.",
    "about.why.title": "Kodėl rinktis mus?",
    "about.why.point1.title": "Kokybė pirmiausia, visada",
    "about.why.point1.content": "Geriau užtruksime savaitę ilgiau, bet padarysime teisingai, nei skubėsime ir pristatysime kažką, kas neveikia. Kai samdote mus, gaunate komandą, kuri tikrai žino, ką daro—ne agentūras, kurios pažada SEO galimybes, bet pristato tuščius puslapius, kai Google bot'ai juos peržiūri. Mes kuriate sprendimus, kurie veikia, o ne tik gerai atrodo. Mes čia ne dėl greito pelno—mes čia, kad padidintume kompanijas, kurios jau uždirba. Jei reikia greito sprendimo, turime Simple Hustle pasiūlymus. Bet jei norite augti, mes esame komanda, kuri tikrai pristato.",
    "about.why.point2.title": "Komanda, kuri tikrai pristato",
    "about.why.point2.content": "Mūsų komanda derina finansų žinias, pilno steko programavimą, našumo rinkodarą ir kūrybinę produkciją. Turime programuotojų, kurie koduoja, rinkodaros specialistų, kurie supranta duomenis, finansų studentų, kurie analizuoja, kas tikrai keičia padėtį, ir kūrybinių žmonių, kurie kuria kokybišką turinį. Kai projektui reikia daugiau rankų, turime patikimus partnerius tiek Nyderlanduose, tiek Lietuvoje. Mes nepažadame to, ko negalime pristatyti—ir pristatome tai, ką pažadame.",
    "about.frameworks.title": "Ką Siūlome",
    "about.frameworks.subtitle": "Nuo šiuolaikinio svetainių kūrimo iki našumo rinkodaros ir finansinių konsultacijų—teikiame visą paslaugų spektrą, kurio reikia jūsų verslui augti internete.",
    "about.frameworks.fullstack": "Full-Stack Kūrimas",
    "about.frameworks.performance": "Rinkodaros Kampanijos",
    "about.frameworks.creative": "Kūrybinė Gamyba",
    "about.frameworks.financial_analysis": "Finansinė Analizė",
    "about.frameworks.nextjs": "Next.js",
    "about.frameworks.react": "React",
    "about.frameworks.typescript": "TypeScript",
    "about.frameworks.tailwind": "Tailwind CSS",
    "about.frameworks.shopify": "Shopify",
    "about.frameworks.databases": "Duomenų bazės",
    "about.frameworks.financial": "Finansinė analizė",
    "about.frameworks.consulting": "Konsultacijos",
    "about.frameworks.meta": "Meta reklama",
    "about.frameworks.google": "Google reklama",
    "about.frameworks.tiktok": "TikTok reklama",
    "about.frameworks.seo": "SEO",
    "about.frameworks.email": "El. pašto rinkodara",
    "about.frameworks.analytics": "Analitika",
    "about.frameworks.forecasting": "Finansinis prognozavimas",
    "about.frameworks.video": "Vaizdo įrašų kūrimas",
    "about.frameworks.editing": "Vaizdo montažas",
    "about.frameworks.content": "Turinio kūrimas",
    "about.frameworks.social": "Socialinių tinklų valdymas",
    
    // Framework descriptions (Lithuanian)
    "about.frameworks.react.desc": "Kuriame dinamiškas, komponentais paremtas aplikacijas su React. Pernaudojami komponentai, būsenos valdymas ir našumas greitoms, mąstymo sistemoms.",
    "about.frameworks.nextjs.desc": "SEO draugiškos, našios svetainės su Next.js. Serverinis atvaizdavimas, automatinis kodo skaidymas ir vaizdų optimizavimas produkcijai paruoštoms aplikacijoms.",
    "about.frameworks.typescript.desc": "Visas kodas rašomas TypeScript kalba dėl patikimumo ir priežiūros. Mažiau klaidų, lengvesnis refaktoringas ir ramybė diegiant atnaujinimus.",
    "about.frameworks.tailwind.desc": "Individualūs, reaguojantys dizainai, greitai kuriami su Tailwind CSS. Kiekvienas dizainas unikalus jūsų verslui, ne šablonas.",
    "about.frameworks.databases.desc": "Dirbame su PostgreSQL, MongoDB ir daugiau, saugiam duomenų saugojimui. Optimizuotos schemos, tinkamas indeksavimas ir mąstymo sprendimai.",
    "about.frameworks.shopify.desc": "Individualios Shopify parduotuvės ir headless e-commerce sprendimai. Integruojame Shopify su jūsų esamomis sistemomis sklandesniam e-commerce.",
    "about.frameworks.meta.desc": "Facebook ir Instagram reklaminės kampanijos, kurios veikia. Tikslus taikymas, įtikinama kūryba ir duomenimis pagrįstas optimizavimas.",
    "about.frameworks.google.desc": "Google reklaminės kampanijos, optimizuotos ROI. Valdome paieškos, ekranų ir prekių reklamas su nuolatiniu testavimu ir optimizavimu.",
    "about.frameworks.tiktok.desc": "TikTok reklaminės kampanijos, pasiekiantys jaunesnę auditoriją. Kūrybinės vaizdo reklamos, tikslus taikymas ir rezultatų stebėjimas maksimaliam įsitraukimui.",
    "about.frameworks.seo.desc": "Techniniai auditai, puslapio optimizavimas ir kokybiškos atgalinės nuorodos. Tikros pozicijos, ne tuščios metrikos.",
    "about.frameworks.analytics.desc": "Google Analytics, Facebook Pixel ir individualus sekimas. Aiškios ataskaitos apie srauto šaltinius ir tai, kas varo pajamas.",
    "about.frameworks.email.desc": "El. pašto kampanijos ir automatizavimo darbo eigos. Segmentuojame auditoriją, optimizuojame pristatymą ir stebime rezultatus.",
    "about.frameworks.video.desc": "Profesionalūs vaizdo įrašai—produktų demonstracijos, atsiliepimai, paaiškinimo vaizdo įrašai. Kokybiška įranga ir montažas, pakonvertuos žiūrovus.",
    "about.frameworks.editing.desc": "Vaizdo montavimas, atkreipiant dėmesį į tempą, spalvų gradaciją ir istorijos pasakojimą. Nuo socialinių klipų iki pilnų reklaminių vaizdo įrašų.",
    "about.frameworks.content.desc": "Tinklaraščio įrašai, socialinių tinklų turinys ir rinkodaros tekstai, atitinkantys jūsų prekės ženklo balsą.",
    "about.frameworks.social.desc": "Turinio strategijos, planavimas ir bendravimas visose platformose. Padedame sukurti bendruomenę, ne tik sekėjus.",
    "about.frameworks.financial.desc": "Duomenimis pagrįsta pajamų srautų, išlaidų ir pelningumo analizė. Nustatome galimybes optimizuoti kaštus ir didinti maržas.",
    "about.frameworks.consulting.desc": "Strateginis finansinis vadovavimas jūsų verslui. Padedame suprasti skaičius, planuoti biudžetus ir priimti pagrįstus sprendimus.",
    "about.frameworks.forecasting.desc": "Pajamų, išlaidų ir pinigų srautų prognozavimas remiantis istoriniais duomenimis. Modeliai augimui planuoti ir pinigų poreikiui numatyti.",
    "about.cta.testimonials": "Pamatykite, ką kalba klientai",
    "about.cta.consultation": "Užsiregistruoti konsultacijai",
    "about.cta.heading": "Susidomėjote mūsų kompanija?",
    "about.cta.subheading": "Sužinokite daugiau apie mūsų misiją, viziją ir komandą už Soltekos vardo.",
    "about.cta.button": "Skaityti apie mus",
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
