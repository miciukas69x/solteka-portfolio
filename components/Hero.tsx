
'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSolteka from "@/components/AnimatedSolteka";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
// 
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-16 md:pt-20">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in pt-4 sm:pt-8 md:pt-12">
        <div className="mb-0 inline-block">
          <Image
            src="/android-chrome-192x192.png"
            alt="Solteka Logo"
            width={96}
            height={96}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto animate-glow"
            priority
          />
        </div>
        
        <div className="mb-0 -mt-4 sm:-mt-6 md:-mt-8">
          <AnimatedSolteka />
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 animate-slide-up -mt-2 sm:-mt-4 md:-mt-6 px-2">
          {t("hero.title")}
        </p>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 animate-slide-up px-4">
          {t("hero.subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto bg-primary hover:bg-primary-glow text-primary-foreground font-medium shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all min-h-[44px]"
          >
            {t("hero.cta")} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto border-primary/50 hover:border-primary hover:bg-primary/10 min-h-[44px]"
          >
            {t("hero.cta2")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

