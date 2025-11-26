'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const HowWeWork = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              {t("howWeWork.heading")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("howWeWork.subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          <Card className="bg-card border-border hover:border-primary/40 transition-colors">
            <CardContent className="p-6 sm:p-8">
              <div className="text-3xl font-bold text-primary mb-3">01</div>
              <h3 className="font-semibold mb-3 text-lg">{t("howWeWork.step1.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("howWeWork.step1.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/40 transition-colors" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6 sm:p-8">
              <div className="text-3xl font-bold text-primary mb-3">02</div>
              <h3 className="font-semibold mb-3 text-lg">{t("howWeWork.step2.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("howWeWork.step2.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/40 transition-colors" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 sm:p-8">
              <div className="text-3xl font-bold text-primary mb-3">03</div>
              <h3 className="font-semibold mb-3 text-lg">{t("howWeWork.step3.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("howWeWork.step3.description")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

