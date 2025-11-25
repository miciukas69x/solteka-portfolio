'use client';

import { Button } from "@/components/ui/button";
import { Building2, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSimple = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Image with fallback */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20" />
        <Image
          src="/aboutsimple.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
          onError={(e) => {
            // Hide image if it fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30" />
        {/* Fade edges for smooth transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/100 via-background/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/100 via-background/50 to-transparent pointer-events-none" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-card/80 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
          <div className="mb-8 animate-fade-in">
            <div className="flex justify-center gap-4 mb-6">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                {t("about.cta.heading")}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.cta.subheading")}
            </p>
          </div>

          <div className="animate-slide-up">
            <Link href="/about">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary-glow text-primary-foreground font-medium shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all min-h-[44px] px-8"
              >
                {t("about.cta.button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple;

