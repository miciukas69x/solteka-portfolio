'use client';

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Check,
  Code2,
  CreditCard,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const solutionsByLang: Record<
  "en" | "lt",
  Record<
    string,
    {
      icon: React.ReactElement;
      title: string;
      tagline: string;
      description: string;
      features: string[];
      process: string[];
      pricing: string;
      timeline: string;
      badge: string;
      hasPayment: boolean;
    }
  >
> = {
  en: {
    "simple-hustle": {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Simple Hustle",
      tagline: "Get online fast with a beautiful, functional website.",
      description:
        "Perfect for entrepreneurs and small businesses who need a professional online presence quickly without compromising on clarity or quality.",
      features: [
        "Professional design tailored to your brand",
        "Fast 1–2 week turnaround time",
        "Mobile-responsive layout",
        "Integrations with Calendly, forms, and email tools",
        "E-commerce ready with Shopify integration (optional)",
        "Basic hosting and domain setup",
        "30 days of post-launch support",
      ],
      process: [
        "Discovery call to understand your business and goals",
        "Content and structure planning for your page",
        "Design and build of the landing page",
        "Final review, launch, and post-launch support",
      ],
      pricing: "Starting at $500",
      timeline: "Typically 1–2 weeks",
      badge: "Quick Start",
      hasPayment: true,
    },
    "seo-integrated": {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Integrated",
      tagline: "Pages built to rank and convert from day one.",
      description:
        "Designed for businesses that care about long-term organic traffic and visibility. Your page is built with SEO best practices baked in.",
      features: [
        "Comprehensive keyword research and mapping",
        "On-page SEO optimization",
        "Meta tags and structured data setup",
        "Core Web Vitals and performance improvements",
        "XML sitemap and robots.txt configuration",
        "Analytics and Search Console integration",
        "Monthly performance report for the first 3 months",
      ],
      process: [
        "SEO audit and keyword research",
        "Content and structure planning with SEO in mind",
        "Design and implementation",
        "Technical optimization and monitoring",
      ],
      pricing: "Starting at $800",
      timeline: "Typically 2–4 weeks",
      badge: "Popular",
      hasPayment: true,
    },
    "fully-custom": {
      icon: <Code2 className="w-12 h-12" />,
      title: "Fully Custom",
      tagline: "Built-for-you platforms, not templates.",
      description:
        "For projects that don’t fit into a box. Custom dashboards, internal tools, booking systems, or more complex multi-page sites.",
      features: [
        "Custom UX & UI based on your workflows",
        "Advanced backend logic and integrations",
        "Scalable architecture ready for future features",
        "Role-based access, admin panels, and more",
        "Performance and security best practices",
        "Documentation and handover",
      ],
      process: [
        "Deep-dive workshop and requirements gathering",
        "Wireframes and technical planning",
        "Iterative design & development",
        "Testing, deployment, and handover",
      ],
      pricing: "Custom pricing based on scope",
      timeline: "From 4 weeks and up",
      badge: "Premium",
      hasPayment: true,
    },
    "meta-ads": {
      icon: <Target className="w-12 h-12" />,
      title: "Meta Ads Management",
      tagline: "Facebook & Instagram campaigns that actually move numbers.",
      description:
        "Campaigns focused on outcomes, not just impressions. Ideal if you already have an offer and want to scale through paid social.",
      features: [
        "Campaign and funnel strategy",
        "Audience research and targeting",
        "Ad creative testing and optimization",
        "Budget and bid management",
        "Weekly performance reports",
      ],
      process: [
        "Kick-off call and goal setting",
        "Audience and creative research",
        "Campaign setup and launch",
        "Ongoing optimization and reporting",
      ],
      pricing: "Starting at $500/month + ad spend",
      timeline: "Ongoing monthly service",
      badge: "Popular",
      hasPayment: true,
    },
    "seo-services": {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO Services",
      tagline: "Long-term visibility, not quick hacks.",
      description:
        "Full SEO support for businesses that want a stable stream of organic traffic instead of only relying on ads.",
      features: [
        "Technical SEO audit",
        "On-page optimization for key pages",
        "Content strategy and topic planning",
        "Internal linking and structure improvements",
        "Performance tracking and reporting",
      ],
      process: [
        "Initial audit and benchmark",
        "Strategy and priority roadmap",
        "Implementation and optimization",
        "Monthly monitoring and updates",
      ],
      pricing: "Starting at $800/month",
      timeline: "Ongoing monthly service",
      badge: "Growth",
      hasPayment: true,
    },
    "google-ads": {
      icon: <Rocket className="w-12 h-12" />,
      title: "Google Ads",
      tagline: "Reach people who are actively looking for you.",
      description:
        "Search and display campaigns to put your offer in front of buyers with real intent, not random scrollers.",
      features: [
        "Campaign and ad group structure",
        "Keyword research and match-type strategy",
        "Bid and budget management",
        "Ad copywriting and testing",
        "Conversion tracking and reporting",
      ],
      process: [
        "Discovery call and goal definition",
        "Campaign planning and setup",
        "Launch and early-phase optimization",
        "Ongoing performance tuning",
      ],
      pricing: "Starting at $600/month + ad spend",
      timeline: "Ongoing monthly service",
      badge: "Performance",
      hasPayment: true,
    },
  },
  lt: {
    "simple-hustle": {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Paprastas Hustle",
      tagline: "Greitas, švarus ir funkcionalus puslapis jūsų verslui.",
      description:
        "Skirta verslininkams ir smulkiam verslui, kuriems reikia profesionalaus puslapio be bereikalingo sudėtingumo.",
      features: [
        "Profesionalus dizainas pagal jūsų prekinį ženklą",
        "Greitas įgyvendinimas per 1–2 savaites",
        "Pilnai prisitaikantis dizainas telefonui ir kompiuteriui",
        "Integracijos su Calendly, formomis ir el. pašto įrankiais",
        "Pagrindinis hostingo ir domeno sutvarkymas",
        "30 dienų palaikymas po paleidimo",
      ],
      process: [
        "Įvadinis pokalbis ir verslo tikslų išsigryninimas",
        "Turinio ir struktūros sudėliojimas",
        "Dizaino ir puslapio sukūrimas",
        "Galutinis aptarimas, paleidimas ir palaikymas",
      ],
      pricing: "Nuo 500 €",
      timeline: "Dažniausiai 1–2 savaitės",
      badge: "Greitas startas",
      hasPayment: true,
    },
    "seo-integrated": {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Integruotas",
      tagline: "Puslapiai, kurie ir randami, ir parduoda.",
      description:
        "Skirta verslams, kurie nori stabilaus organinio srauto ir aiškios matomumo strategijos, o ne tik gražaus dizaino.",
      features: [
        "Raktinių žodžių analizė ir žemėlapis",
        "Vidinė SEO optimizacija",
        "Meta žymos ir struktūruotų duomenų paruošimas",
        "Spartos ir Core Web Vitals gerinimas",
        "XML sitemap ir robots.txt paruošimas",
        "Analitikų ir Search Console pajungimas",
        "Pirmų 3 mėn. rezultatų ataskaita",
      ],
      process: [
        "SEO auditas ir raktinių žodžių analizė",
        "Turinio ir struktūros planavimas",
        "Dizainas ir įgyvendinimas",
        "Techninė optimizacija ir stebėsena",
      ],
      pricing: "Nuo 800 €",
      timeline: "Dažniausiai 2–4 savaitės",
      badge: "Populiarus",
      hasPayment: true,
    },
    "fully-custom": {
      icon: <Code2 className="w-12 h-12" />,
      title: "Pilnai pagal poreikius",
      tagline: "Platformos, kurios kuriamos pagal jūsų procesus.",
      description:
        "Tinka projektams, kurie netelpa į šablonus: vidiniai įrankiai, rezervacijų sistemos, sudėtingesni projektai ar kelių puslapių svetainės.",
      features: [
        "Individualus UX ir UI pagal jūsų darbo eigą",
        "Sudėtingesnė logika ir integracijos",
        "Plešiama ir saugi architektūra",
        "Rolėmis paremtos prieigos ir administravimo skydeliai",
        "Veikimo ir saugumo gerosios praktikos",
        "Dokumentacija ir perdavimas",
      ],
      process: [
        "Gilesnė dirbtuvė ir poreikių surinkimas",
        "Wireframe’ai ir techninis planas",
        "Iteratyvus dizainas ir programavimas",
        "Testavimas, paleidimas ir perdavimas",
      ],
      pricing: "Kaina priklauso nuo apimties",
      timeline: "Nuo 4 savaičių ir daugiau",
      badge: "Premium",
      hasPayment: true,
    },
    "meta-ads": {
      icon: <Target className="w-12 h-12" />,
      title: "Meta reklamos valdymas",
      tagline: "Facebook ir Instagram kampanijos su aiškiu tikslu.",
      description:
        "Skirta verslams, kurie jau turi pasiūlymą ir nori jį auginti per mokamą reklamą.",
      features: [
        "Kampanijos ir piltuvėlio strategija",
        "Auditorijų analizė ir taikymas",
        "Reklamų kūrybų testavimas ir optimizavimas",
        "Biudžeto ir statymų valdymas",
        "Periodinės rezultatų ataskaitos",
      ],
      process: [
        "Tikslų ir biudžeto aptarimas",
        "Auditorijų ir kūrybų paruošimas",
        "Kampanijų paleidimas",
        "Nuolatinė optimizacija ir ataskaitos",
      ],
      pricing: "Nuo 500 €/mėn. + reklamos biudžetas",
      timeline: "Tęstinė mėnesinė paslauga",
      badge: "Populiaru",
      hasPayment: true,
    },
    "seo-services": {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO paslaugos",
      tagline: "Ilgalaikis matomumas, o ne vienkartiniai triukai.",
      description:
        "Pilnas SEO palaikymas verslams, kurie nori stabilaus organinio srauto ir mažesnės priklausomybės nuo reklamos.",
      features: [
        "Techninis SEO auditas",
        "Vidinis optimizavimas svarbiausiems puslapiams",
        "Turinio ir temų strategija",
        "Vidinių nuorodų struktūros tvarkymas",
        "Rezultatų analizė ir ataskaitos",
      ],
      process: [
        "Pradinis auditas ir atskaitos taškas",
        "Strategijos ir prioritetų sudėliojimas",
        "Įgyvendinimas ir optimizavimas",
        "Kas mėnesį peržiūra ir korekcijos",
      ],
      pricing: "Nuo 800 €/mėn.",
      timeline: "Tęstinė mėnesinė paslauga",
      badge: "Augimas",
      hasPayment: true,
    },
    "google-ads": {
      icon: <Rocket className="w-12 h-12" />,
      title: "Google reklama",
      tagline: "Pasiekite žmones, kurie jau ieško jūsų sprendimo.",
      description:
        "Paieškos ir vaizdinės kampanijos, kurios rodosi žmonėms su realiu pirkimo ketinimu, o ne tik atsitiktiniams naršytojams.",
      features: [
        "Kampanijų ir skelbimų struktūra",
        "Raktinių žodžių analizė ir strategija",
        "Biudžeto ir statymų valdymas",
        "Skelbimų tekstų kūrimas ir testavimas",
        "Konversijų stebėsena ir ataskaitos",
      ],
      process: [
        "Tikslų ir KPI išsigryninimas",
        "Kampanijų planavimas ir paruošimas",
        "Paleidimas ir pirminė optimizacija",
        "Nuolatinis rezultatų gerinimas",
      ],
      pricing: "Nuo 600 €/mėn. + reklamos biudžetas",
      timeline: "Tęstinė mėnesinė paslauga",
      badge: "Rezultatai",
      hasPayment: true,
    },
  },
};

const SolutionDetailPage = () => {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const { language, t } = useLanguage();
  const langKey: "en" | "lt" = language === "lt" ? "lt" : "en";
  const solution = solutionsByLang[langKey][slug];

  if (!solution) {
    return (
      <div className="min-h-screen pt-24">
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("solutionDetail.back")}
            </Link>
            <p className="text-muted-foreground">Solution not found.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("solutionDetail.back")}
          </Link>

          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-primary/10 rounded-lg text-primary">{solution.icon}</div>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                {solution.badge}
              </Badge>
            </div>

            <h1 className="text-4xl font-bold mb-3">{solution.title}</h1>
            <p className="text-2xl text-muted-foreground mb-4">{solution.tagline}</p>
            <p className="text-lg text-muted-foreground max-w-3xl">{solution.description}</p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    {langKey === "lt" ? "Įgyvendinimo terminas" : "Timeline"}
                  </p>
                  <p className="text-xl font-semibold">{solution.timeline}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    {langKey === "lt" ? "Investicija" : "Investment"}
                  </p>
                  <p className="text-xl font-semibold">{solution.pricing}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border animate-slide-up">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">{t("solutionDetail.included")}</h2>
                <ul className="space-y-3">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">{t("solutionDetail.process")}</h2>
                <div className="space-y-4">
                  {solution.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="text-3xl font-bold text-primary">{String(index + 1).padStart(2, "0")}</div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-wide text-primary mb-2">{t("solutionDetail.ready")}</p>
                <h2 className="text-2xl font-bold mb-2">{solution.title}</h2>
                <p className="text-muted-foreground max-w-2xl">{t("solutionDetail.readyText")}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="https://calendly.com/michailinasmatas/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t("solutions.cta")}
                  </Button>
                </a>
                {solution.hasPayment && (
                  <a href="mailto:michailinasmatas@gmail.com" className="w-full">
                    <Button variant="outline" className="w-full">
                      <CreditCard className="w-4 h-4 mr-2" />
                      {t("solutionDetail.paymentCta")}
                    </Button>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetailPage;

