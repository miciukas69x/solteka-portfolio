'use client';

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsPageClient = () => {
  const { t } = useLanguage();
  // Top 3 testimonials (same as index page component)
  const topTestimonials = [
    {
      name: "Arnas Linkevičius",
      role: "Marketingo specialistas",
      company: "",
      content:
        "Super webas, tiko, patiko. Naudoju jau keletą mėnesių ir leidžiame reklamą kartu, puiki komanda, puikūs žmonės.",
      rating: 5,
      project: "Simple Hustle",
    },
    {
      name: "Matas Ulskis",
      role: "Verslo įkūrėjas",
      company: "Jurosgerybiunamai.lt",
      content:
        "Puslapis toks, kokio ir norėjau. Testavimo ir paleidimo fazėje radome paskutinius bug'us, bet viską greitai sutvarkė. Puslapis puikus ir daugiau dėmesio nereikalauja.",
      rating: 5,
      project: "E-commerce Shop",
    },
    {
      name: "Rogier Pyis",
      role: "Owner of 'Crown Pub'",
      company: "Groningen",
      content:
        "We had an event for which we wanted to get some traction, Solteka was in the right place at the right time and they proved their competence. Our event had put up more numbers than ever!",
      rating: 5,
      project: "Marketing Services",
    },
  ];

  // Additional testimonials
  const additionalTestimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      company: "Bloom & Co.",
      content:
        "Working with Solteka was a game-changer for my business. The Simple Hustle package got my store online in just 10 days, and I'm already seeing increased sales. The design is clean, professional, and exactly what I needed.",
      rating: 5,
      project: "Simple Hustle",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "TechFlow",
      content:
        "Outstanding service from start to finish. The SEO Integrated solution helped us rank on the first page of Google within 3 months. Communication was excellent, and the attention to detail was impressive.",
      rating: 5,
      project: "SEO Integrated",
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Manager",
      company: "GrowthHub",
      content:
        "The SEO optimization made a huge difference in our organic traffic. We saw a 150% increase in qualified leads within the first quarter. Highly recommend for anyone serious about digital growth!",
      rating: 5,
      project: "SEO Integrated",
    },
    {
      name: "David Park",
      role: "Restaurant Owner",
      company: "Bella Cucina",
      content:
        "Fast, professional, and exactly what we needed. Our new website with online ordering has brought in so many new customers. The Calendly integration makes reservations seamless.",
      rating: 5,
      project: "Simple Hustle",
    },
    {
      name: "Lisa Thompson",
      role: "Fitness Coach",
      company: "FitLife Studio",
      content:
        "I needed a website quickly to start taking bookings, and the Simple Hustle package was perfect. Beautiful design, works great on mobile, and my clients love how easy it is to book sessions.",
      rating: 5,
      project: "Simple Hustle",
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "DataSync Solutions",
      content:
        "The Fully Custom Coded solution exceeded our expectations. The team built a complex platform with custom CRM integration, and it scales perfectly with our growth. Worth every penny.",
      rating: 5,
      project: "Fully Custom",
    },
  ];

  const allTestimonials = [...topTestimonials, ...additionalTestimonials];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                {t("testimonials.page.heading")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("testimonials.page.subheading")}
            </p>
          </div>

          {/* Top 3 testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {topTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    {testimonial.company && (
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    )}
                    <div className="mt-3">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional testimonials */}
          {additionalTestimonials.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {additionalTestimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-slide-up"
                  style={{ animationDelay: `${(index + topTestimonials.length) * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <div className="mt-3">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                          {testimonial.project}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Card className="bg-secondary/30 border-border animate-slide-up">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t("testimonials.page.q")}</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("testimonials.page.c")}</p>
              <Link href="/solutions">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
                >
                  {t("testimonials.page.cta")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPageClient;
