'use client';

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, Music, Rocket, Search, ShoppingCart, Sparkles, Target, TrendingUp } from "lucide-react";

const solutionsByLang: Record<
  "en" | "lt",
  {
    page: Array<{
      icon: React.ReactElement;
      title: string;
      slug: string;
      description: string;
      features: string[];
      badge: string;
      ideal: string;
      category: string;
    }>;
    marketing: Array<{
      icon: React.ReactElement;
      title: string;
      slug: string;
      description: string;
      features: string[];
      badge: string;
      ideal: string;
      category: string;
    }>;
  }
> = {
  en: {
    page: [
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Simple Hustle",
        slug: "simple-hustle",
        description: "Fast and effective landing pages using proven tools.",
        features: [
          "Quick turnaround design",
          "External integrations (Calendly, forms, Shopify)",
          "Mobile responsive",
          "Basic hosting setup",
        ],
        badge: "Quick Start",
        ideal: "Perfect for startups and small businesses needing a quick web presence.",
        category: "Page Solutions",
      },
      {
        icon: <Search className="w-8 h-8" />,
        title: "SEO Integrated",
        slug: "seo-integrated",
        description: "Optimized pages that rank and convert.",
        features: [
          "Complete SEO optimization",
          "Meta tags & structured data",
          "External tool integration",
          "Performance optimization",
          "Analytics setup",
        ],
        badge: "Popular",
        ideal: "Best for businesses focused on organic growth and search visibility.",
        category: "Page Solutions",
      },
      {
        icon: <ShoppingCart className="w-8 h-8" />,
        title: "E-commerce Shop",
        slug: "ecommerce-shop",
        description: "Full-featured online stores with payment processing and inventory management.",
        features: [
          "Shopify store setup & customization",
          "Product catalog management",
          "Payment gateway integration",
          "Shipping & tax configuration",
          "Order management system",
        ],
        badge: "E-commerce",
        ideal: "Perfect for businesses ready to sell products online with a complete store solution.",
        category: "Page Solutions",
      },
      {
        icon: <Code2 className="w-8 h-8" />,
        title: "Fully Custom",
        slug: "fully-custom",
        description: "Tailored web solutions for unique business needs.",
        features: [
          "Custom design & layout",
          "Advanced functionality",
          "Scalable architecture",
          "Third-party integrations",
          "Ongoing support",
        ],
        badge: "Premium",
        ideal: "Ideal for businesses needing a fully tailored digital solution.",
        category: "Page Solutions",
      },
    ],
    marketing: [
      {
        icon: <Target className="w-8 h-8" />,
        title: "Meta Ads Management",
        slug: "meta-ads",
        description: "Facebook & Instagram advertising campaigns that drive results.",
        features: [
          "Campaign strategy & setup",
          "Audience targeting",
          "Ad creative optimization",
          "Performance monitoring",
          "A/B testing",
        ],
        badge: "Popular",
        ideal: "Perfect for businesses looking to grow through social media advertising.",
        category: "Marketing Solutions",
      },
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "SEO Services",
        slug: "seo-services",
        description: "Technical and on-page optimization for better rankings.",
        features: [
          "Keyword research",
          "On-page optimization",
          "Technical SEO audit",
          "Content strategy",
          "Performance tracking",
        ],
        badge: "Growth",
        ideal: "Best for businesses serious about long-term organic visibility.",
        category: "Marketing Solutions",
      },
      {
        icon: <Rocket className="w-8 h-8" />,
        title: "Google Ads",
        slug: "google-ads",
        description: "Search and display campaigns to reach your target audience.",
        features: [
          "Campaign setup",
          "Keyword optimization",
          "Bid management",
          "Conversion tracking",
          "ROI reporting",
        ],
        badge: "Results",
        ideal: "Ideal for businesses wanting immediate visibility on Google.",
        category: "Marketing Solutions",
      },
      {
        icon: <Music className="w-8 h-8" />,
        title: "TikTok Ads",
        slug: "tiktok-ads",
        description: "Creative video campaigns that reach younger audiences and drive engagement.",
        features: [
          "Video ad creative development",
          "Audience targeting & optimization",
          "Campaign setup & management",
          "Performance tracking & analytics",
          "Creative testing & iteration",
        ],
        badge: "Trending",
        ideal: "Best for businesses targeting Gen Z and Millennial audiences through video content.",
        category: "Marketing Solutions",
      },
    ],
  },
  lt: {
    page: [
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Paprastas Hustle",
        slug: "simple-hustle",
        description: "Greiti ir efektyvūs puslapiai, paremti patikrintais įrankiais.",
        features: [
          "Greitas sukūrimo terminas",
          "Integracijos (Calendly, formos, Shopify)",
          "Prisitaikantis dizainas telefone ir kompiuteryje",
          "Pagrindinis hostingo sutvarkymas",
        ],
        badge: "Greitas startas",
        ideal: "Tinka startuoliams ir smulkiam verslui, kuriam reikia greitos internetinės pradžios.",
        category: "Puslapio sprendimai",
      },
      {
        icon: <Search className="w-8 h-8" />,
        title: "SEO Integruotas",
        slug: "seo-integrated",
        description: "Optimizuoti puslapiai, kurie ir randami, ir parduoda.",
        features: [
          "Pilna SEO optimizacija",
          "Meta žymos ir struktūruoti duomenys",
          "Išorinių įrankių integracijos",
          "Spartos ir našumo optimizavimas",
          "Analitikos paruošimas",
        ],
        badge: "Populiarus",
        ideal: "Geriausias verslams, kurie nori augti organiškai ir būti matomi paieškoje.",
        category: "Puslapio sprendimai",
      },
      {
        icon: <ShoppingCart className="w-8 h-8" />,
        title: "E-commerce parduotuvė",
        slug: "ecommerce-shop",
        description: "Pilnai funkcionali internetinė parduotuvė su mokėjimų apdorojimu ir inventoriaus valdymu.",
        features: [
          "Shopify parduotuvės sukūrimas ir pritaikymas",
          "Produktų katalogo valdymas",
          "Mokėjimo sistemos integracija",
          "Pristatymo ir mokesčių konfigūracija",
          "Užsakymų valdymo sistema",
        ],
        badge: "E-commerce",
        ideal: "Tinka verslams, kurie nori parduoti produktus internete su pilnu parduotuvės sprendimu.",
        category: "Puslapio sprendimai",
      },
      {
        icon: <Code2 className="w-8 h-8" />,
        title: "Pilnai pagal poreikius",
        slug: "fully-custom",
        description: "Sprendimai nuo nulio pagal jūsų verslo specifiką.",
        features: [
          "Individualus dizainas ir struktūra",
          "Pažangus funkcionalumas",
          "Plešiama ir saugi architektūra",
          "Trečiųjų šalių integracijos",
          "Tęstinis palaikymas",
        ],
        badge: "Premium",
        ideal: "Tinka verslams, kuriems reikia pilnai pritaikyto skaitmeninio sprendimo.",
        category: "Puslapio sprendimai",
      },
    ],
    marketing: [
      {
        icon: <Target className="w-8 h-8" />,
        title: "Meta reklamos valdymas",
        slug: "meta-ads",
        description: "Facebook ir Instagram kampanijos, orientuotos į rezultatus.",
        features: [
          "Kampanijų strategija ir sukūrimas",
          "Tikslios auditorijos parinkimas",
          "Reklamų kūrybų optimizavimas",
          "Rezultatų stebėjimas",
          "A/B testavimas",
        ],
        badge: "Populiaru",
        ideal: "Tinka verslams, kurie nori auginti pardavimus per socialinius tinklus.",
        category: "Marketingo sprendimai",
      },
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "SEO paslaugos",
        slug: "seo-services",
        description: "Techninė ir vidinė optimizacija geresnėms pozicijoms paieškoje.",
        features: [
          "Raktinių žodžių analizė",
          "Vidinė SEO optimizacija",
          "Techninis SEO auditas",
          "Turinio strategija",
          "Rezultatų stebėsena",
        ],
        badge: "Augimas",
        ideal: "Skirta verslams, kurie rimtai žiūri į ilgalaikį organinį matomumą.",
        category: "Marketingo sprendimai",
      },
      {
        icon: <Rocket className="w-8 h-8" />,
        title: "Google reklama",
        slug: "google-ads",
        description: "Paieškos ir vaizdinės kampanijos, pasiekiančios jūsų klientus.",
        features: [
          "Kampanijų sukūrimas ir struktūra",
          "Raktinių žodžių optimizavimas",
          "Statymų ir biudžeto valdymas",
          "Konversijų stebėjimas",
          "Investicijų grąžos analizė",
        ],
        badge: "Rezultatai",
        ideal: "Tinka verslams, kurie nori iškart matomumo Google.",
        category: "Marketingo sprendimai",
      },
      {
        icon: <Music className="w-8 h-8" />,
        title: "TikTok reklama",
        slug: "tiktok-ads",
        description: "Kūrybinės vaizdo kampanijos, pasiekiančios jaunesnę auditoriją ir skatinančios įsitraukimą.",
        features: [
          "Vaizdo reklamų kūrybos kūrimas",
          "Auditorijos taikymas ir optimizavimas",
          "Kampanijų sukūrimas ir valdymas",
          "Rezultatų stebėjimas ir analitika",
          "Kūrybų testavimas ir iteracija",
        ],
        badge: "Populiaru",
        ideal: "Geriausias verslams, kurie siekia pasiekti Gen Z ir Millennial auditoriją per vaizdo turinį.",
        category: "Marketingo sprendimai",
      },
    ],
  },
};

const SolutionsPageClient = () => {
  const { t, language } = useLanguage();
  const langKey: "en" | "lt" = language === "lt" ? "lt" : "en";
  const { page: pageSolutions, marketing: marketingSolutions } = solutionsByLang[langKey];

  const renderSolutionCard = (solution: (typeof pageSolutions)[number], index: number) => (
    <Card
      key={solution.slug}
      className="bg-card border border-border hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">{solution.icon}</div>
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {solution.badge}
          </Badge>
        </div>
        <CardTitle className="mb-2">{solution.title}</CardTitle>
        <CardDescription>{solution.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {solution.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="p-4 bg-secondary/30 rounded-lg mb-6">
          <p className="text-sm text-muted-foreground">{solution.ideal}</p>
        </div>

        <Link href={`/solutions/${solution.slug}`}>
          <Button className="w-full flex items-center justify-center gap-2" variant="ghost">
            {t("solutions.learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                {t("solutions.heading")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("solutions.subheading")}</p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">{t("solutions.page")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{pageSolutions.map(renderSolutionCard)}</div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">{t("solutions.marketing")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{marketingSolutions.map(renderSolutionCard)}</div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">{t("solutions.q")}</p>
            <a href="https://calendly.com/solteka432/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg">{t("solutions.cta")}</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPageClient;
