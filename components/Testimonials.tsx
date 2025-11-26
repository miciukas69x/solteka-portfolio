
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: "Arnas Linkevičius",
      role: "Marketingo specialistas.",
      content: "Super webas, tiko, patiko. Naudoju jau keletą mėnesių ir leidžiame reklamą kartu, puiki komanda, puikūs žmonės.",
      rating: 5,
    },
    {
      name: "Matas Ulskis",
      role: "Verslo įkūrėjas. Jurosgerybiunamai.lt",
      content: "Puslapis toks, kokio ir norėjau. Testavimo ir paleidimo fazėje radome paskutinius bug'us, bet viską greitai sutvarkė. Puslapis puikus ir daugiau dėmesio nereikalauja.",
      rating: 5,
    },
    {
      name: "Rogier Pyis",
      role: "Owner of 'Crown Pub'. Groningen",
      content: "We had an event for which we wanted to get some traction, Solteka was in the right place at the right time and they proved their competence. Our event had put up more numbers than ever!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              {t("testimonials.heading")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subheading")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button 
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              {t("testimonials.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

