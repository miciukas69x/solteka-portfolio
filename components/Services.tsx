
'use client';

import React from "react";
import { Sparkles, Target, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type Service = {
  icon: React.ReactElement;
  title: string;
  description: string;
  bullets: string[];
  primaryCtaLabel: string;
  primaryCtaTo: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

const servicesByLang: Record<"en" | "lt", Service[]> = {
  en: [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Simple Hustle website",
      description:
        "Fast, clear landing page for small businesses that just need a clean online presence that works.",
      bullets: [
        "Single-page or simple multi-section site",
        "Mobile-friendly layout",
        "Contact / booking / forms integrated",
      ],
      primaryCtaLabel: "View Simple Hustle offer",
      primaryCtaTo: "/solutions/simple-hustle",
      secondaryCtaLabel: "Book a 30 min call",
      secondaryCtaHref: "https://calendly.com/michailinasmatas/30min",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Meta Ads management",
      description:
        "Facebook & Instagram campaigns set up and managed to actually drive leads, not just impressions.",
      bullets: [
        "Campaign setup and structure",
        "Audience targeting & creatives",
        "Ongoing optimization and reporting",
      ],
      primaryCtaLabel: "View Meta Ads offer",
      primaryCtaTo: "/solutions/meta-ads",
      secondaryCtaLabel: "Discuss campaigns",
      secondaryCtaHref: "https://calendly.com/michailinasmatas/30min",
    },
  ],

  lt: [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Simple Hustle svetainė",
      description:
        "Greitas, aiškus landing puslapis smulkiam verslui, kuriam reikia tvarkingo ir veikiančio internetinio veido.",
      bullets: [
        "Vieno puslapio arba paprasta kelių sekcijų svetainė",
        "Prisitaikantis dizainas telefonui ir kompiuteriui",
        "Kontaktai / rezervacijos / formos integruotos",
      ],
      primaryCtaLabel: "Peržiūrėti Simple Hustle pasiūlymą",
      primaryCtaTo: "/solutions/simple-hustle",
      secondaryCtaLabel: "Susitarti dėl 30 min pokalbio",
      secondaryCtaHref: "https://calendly.com/michailinasmatas/30min",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Meta reklamos valdymas",
      description:
        "Facebook ir Instagram kampanijos, sukurtos ir prižiūrimos taip, kad generuotų užklausas, o ne tik parodymus.",
      bullets: [
        "Kampanijų struktūra ir sukūrimas",
        "Auditorijos ir reklamos kūrybos",
        "Nuolatinė optimizacija ir ataskaitos",
      ],
      primaryCtaLabel: "Peržiūrėti Meta Ads pasiūlymą",
      primaryCtaTo: "/solutions/meta-ads",
      secondaryCtaLabel: "Aptarti reklamos kampanijas",
      secondaryCtaHref: "https://calendly.com/michailinasmatas/30min",
    },
  ],
};

const Services = () => {
  const { t, language } = useLanguage();
  const langKey: "en" | "lt" = language === "lt" ? "lt" : "en";
  const services = servicesByLang[langKey];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              {t("services.heading")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-slide-up">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card border border-border hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,0,0,0.35)] transition-all min-w-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="p-3 mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-center">
                  <Link href={service.primaryCtaTo} className="flex-1 lg:flex-initial min-w-0">
                    <Button className="w-full flex items-center justify-center gap-2 min-h-[44px] text-sm sm:text-base px-4">
                      <span className="truncate">{service.primaryCtaLabel}</span>
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    </Button>
                  </Link>
                  <a
                    href={service.secondaryCtaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-initial min-w-0"
                  >
                    <Button variant="ghost" className="w-full text-sm min-h-[44px] px-4 break-words lg:break-normal text-center">
                      {service.secondaryCtaLabel}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/solutions">
          <Button size="lg" variant="outline" className="gap-2">
            {t("services.cta")}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Services;

