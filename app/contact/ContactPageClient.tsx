'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Linkedin, Mail, MapPin, MessageSquare } from "lucide-react";

const ContactPageClient = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                {t("contact.heading")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("contact.subheading")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border animate-slide-up">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">{t("contact.info")}</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.info.e")}</h3>
                      <p className="text-muted-foreground">support@solteka.co</p>
                      <p className="text-sm text-muted-foreground mt-1">{t("contact.info.i")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.info.b")}</h3>
                      <p className="text-muted-foreground">{t("contact.info.bc")}</p>
                      <a
                        href="https://calendly.com/solteka432/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-1 inline-block"
                      >
                        {t("contact.info.c")}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.info.r")}</h3>
                      <p className="text-muted-foreground">{t("contact.info.q")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.info.l")}</h3>
                      <p className="text-muted-foreground">{t("contact.info.li")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">{t("contact.workhours")}</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("contact.work1")}</span>
                    <span className="font-medium">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("contact.work2")}</span>
                    <span className="font-medium">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("contact.work3")}</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold mb-4">{t("contact.connect")}</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/solteka-digital/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">{t("contact.precta")}</p>
                  <a href="https://calendly.com/solteka432/30min" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all">
                      <Calendar className="w-4 h-4 mr-2" />
                      {t("contact.cta")}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("contact.expect")}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">01</div>
                  <h3 className="font-semibold mb-2">{t("contact.initial")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contact.initial.info")}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">02</div>
                  <h3 className="font-semibold mb-2">{t("contact.proposal")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contact.proposal.info")}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">03</div>
                  <h3 className="font-semibold mb-2">{t("contact.kickoff")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contact.kickoff.info")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPageClient;

