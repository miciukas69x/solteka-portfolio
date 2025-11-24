
'use client';

import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSimple = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              {t("simple.heading")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("simple.subheading")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Mail className="w-6 h-6 text-primary" />
          <MessageSquare className="w-6 h-6 text-primary" />
        </div>

        <div className="mt-8">
          <Link href="/contact">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary-glow text-primary-foreground font-medium shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all min-h-[44px]"
            >
              {t("simple.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSimple;

