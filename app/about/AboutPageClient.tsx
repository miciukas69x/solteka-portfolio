'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Calendar, 
  Target, 
  Zap,
  Code2,
  TrendingUp,
  Video,
  BarChart3,
  Scissors,
  PenTool,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShopify,
  SiMeta,
  SiGoogleads,
  SiGoogleanalytics,
} from "react-icons/si";
import { 
  FaDatabase,
  FaDollarSign,
  FaComments,
  FaChartLine,
  FaCreditCard,
  FaEnvelope,
} from "react-icons/fa";

const AboutPageClient = () => {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
    descriptionKey: string;
  } | null>(null);

  const offerings = [
    {
      category: t("about.frameworks.fullstack"),
      items: [
        { name: t("about.frameworks.react"), icon: SiReact, color: "#61DAFB", descKey: "about.frameworks.react.desc" },
        { name: t("about.frameworks.nextjs"), icon: SiNextdotjs, color: "#000000", descKey: "about.frameworks.nextjs.desc" },
        { name: t("about.frameworks.typescript"), icon: SiTypescript, color: "#3178C6", descKey: "about.frameworks.typescript.desc" },
        { name: t("about.frameworks.tailwind"), icon: SiTailwindcss, color: "#06B6D4", descKey: "about.frameworks.tailwind.desc" },
        { name: t("about.frameworks.databases"), icon: FaDatabase, color: "#336791", descKey: "about.frameworks.databases.desc" },
        { name: t("about.frameworks.shopify"), icon: SiShopify, color: "#96BF48", descKey: "about.frameworks.shopify.desc" },
      ],
    },
    {
      category: t("about.frameworks.performance"),
      items: [
        { name: t("about.frameworks.meta"), icon: SiMeta, color: "#0081FB", descKey: "about.frameworks.meta.desc" },
        { name: t("about.frameworks.google"), icon: SiGoogleads, color: "#4285F4", descKey: "about.frameworks.google.desc" },
        { name: t("about.frameworks.seo"), icon: FaChartLine, color: "#FF6B35", descKey: "about.frameworks.seo.desc" },
        { name: t("about.frameworks.analytics"), icon: SiGoogleanalytics, color: "#F4B400", descKey: "about.frameworks.analytics.desc" },
        { name: t("about.frameworks.email"), icon: FaEnvelope, color: "#EA4335", descKey: "about.frameworks.email.desc" },
      ],
    },
    {
      category: t("about.frameworks.creative"),
      items: [
        { name: t("about.frameworks.video"), icon: Video, color: "#FF0000", descKey: "about.frameworks.video.desc" },
        { name: t("about.frameworks.editing"), icon: Scissors, color: "#FF6B9D", descKey: "about.frameworks.editing.desc" },
        { name: t("about.frameworks.content"), icon: PenTool, color: "#8B5CF6", descKey: "about.frameworks.content.desc" },
        { name: t("about.frameworks.social"), icon: Share2, color: "#1DA1F2", descKey: "about.frameworks.social.desc" },
      ],
    },
    {
      category: t("about.frameworks.financial_analysis"),
      items: [
        { name: t("about.frameworks.financial"), icon: FaDollarSign, color: "#10B981", descKey: "about.frameworks.financial.desc" },
        { name: t("about.frameworks.consulting"), icon: FaComments, color: "#3B82F6", descKey: "about.frameworks.consulting.desc" },
        { name: t("about.frameworks.forecasting"), icon: TrendingUp, color: "#059669", descKey: "about.frameworks.forecasting.desc" },
      ],
    },
  ];

  const whyPoints = [
    {
      title: t("about.why.point1.title"),
      content: t("about.why.point1.content"),
      hasImage: false,
    },
    {
      hasImage: true,
    },
    {
      hasImage: true,
    },
    {
      title: t("about.why.point2.title"),
      content: t("about.why.point2.content"),
      hasImage: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading and Tagline */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Solteka
              </span>
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground max-w-5xl leading-relaxed">
              {t("about.tagline")}
            </p>
          </div>

          {/* Mission & Vision Side-by-Side */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-slide-up">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  {t("about.mission.title")}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("about.mission.content")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  {t("about.vision.title")}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("about.vision.content")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                {t("about.why.title")}
              </span>
            </h2>
            
            {/* Expertise Row at Top */}
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Code2, label: "Full-Stack Development" },
                  { icon: TrendingUp, label: "Performance Marketing" },
                  { icon: Video, label: "Creative Production" },
                  { icon: BarChart3, label: "Financial Analysis" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={idx}
                      className="bg-gradient-to-br from-primary/10 via-primary/15 to-primary/10 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 group shadow-[0_0_20px_hsl(var(--primary)/0.1)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
                    >
                      <CardContent className="p-6 flex flex-col items-center justify-center gap-4 min-h-[140px]">
                        <div className="p-4 bg-gradient-to-br from-primary to-primary-glow rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <span className="text-sm font-bold text-foreground text-center leading-tight">{item.label}</span>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Text Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {whyPoints.filter(p => !p.hasImage).map((point, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">{point.title}</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{point.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Growth Chart at Bottom */}
            <Card className="bg-gradient-to-br from-primary/10 via-primary/15 to-primary/10 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 overflow-hidden group shadow-[0_0_30px_hsl(var(--primary)/0.1)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.2)] max-w-3xl mx-auto">
              <CardContent className="p-5">
                <h4 className="text-lg font-bold text-center mb-5 text-foreground">Scaling Your Business</h4>
                
                <div className="relative w-full" style={{ aspectRatio: '16/9', maxHeight: '320px' }}>
                  <svg viewBox="0 0 800 450" className="w-full h-full">
                    <defs>
                      <linearGradient id="revenueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                      </linearGradient>
                      <linearGradient id="trafficGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid */}
                    {[1, 2, 3, 4].map((i) => (
                      <line
                        key={`h-${i}`}
                        x1="50"
                        y1={50 + i * 90}
                        x2="750"
                        y2={50 + i * 90}
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        opacity="0.15"
                      />
                    ))}
                    {[1, 2, 3, 4, 5].map((i) => (
                      <line
                        key={`v-${i}`}
                        x1={50 + i * 140}
                        y1="50"
                        x2={50 + i * 140}
                        y2="410"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        opacity="0.15"
                      />
                    ))}
                    
                    {/* Revenue area (bottom) */}
                    <path
                      d="M 50,410 L 190,360 L 330,300 L 470,240 L 610,180 L 750,130 L 750,410 Z"
                      fill="url(#revenueGrad)"
                    />
                    
                    {/* Traffic area (stacked on revenue) */}
                    <path
                      d="M 50,410 L 190,320 L 330,240 L 470,170 L 610,110 L 750,60 L 750,130 L 610,180 L 470,240 L 330,300 L 190,360 L 50,410 Z"
                      fill="url(#trafficGrad)"
                    />
                    
                    {/* Revenue line */}
                    <polyline
                      points="50,410 190,360 330,300 470,240 610,180 750,130"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Traffic line */}
                    <polyline
                      points="50,410 190,320 330,240 470,170 610,110 750,60"
                      fill="none"
                      stroke="hsl(var(--primary-glow))"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    {[
                      { x: 50, revenue: 410, traffic: 410 },
                      { x: 190, revenue: 360, traffic: 320 },
                      { x: 330, revenue: 300, traffic: 240 },
                      { x: 470, revenue: 240, traffic: 170 },
                      { x: 610, revenue: 180, traffic: 110 },
                      { x: 750, revenue: 130, traffic: 60 },
                    ].map((point, i) => (
                      <g key={i}>
                        <circle cx={point.x} cy={point.revenue} r="6" fill="hsl(var(--primary))" />
                        <circle cx={point.x} cy={point.traffic} r="6" fill="hsl(var(--primary-glow))" />
                      </g>
                    ))}
                  </svg>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 sm:px-12 pb-2">
                    <span className="text-[10px] sm:text-xs text-muted-foreground">M1</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">M2</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">M3</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">M4</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">M5</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">M6</span>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="flex justify-center gap-6 text-xs mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary-glow" />
                    <span className="text-muted-foreground">Traffic</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What We Offer */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                {t("about.frameworks.title")}
              </span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
              {t("about.frameworks.subtitle")}
            </p>
            <div className="space-y-8">
              {offerings.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">{category.category}</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                    {category.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={itemIndex}
                          className="aspect-square"
                          style={{ perspective: '1000px' }}
                        >
                          <div 
                            className="relative w-full h-full group [transform-style:preserve-3d] transition-transform duration-700 md:hover:[transform:rotateY(180deg)]"
                            onClick={() => {
                              // Only handle click on mobile (below md breakpoint)
                              if (typeof window !== 'undefined' && window.innerWidth < 768) {
                                setSelectedItem(item);
                              }
                            }}
                          >
                            {/* Front face */}
                            <Card className="absolute inset-0 bg-card border-border transition-all duration-300 [backface-visibility:hidden] md:cursor-default cursor-pointer">
                              <CardContent className="p-3 h-full flex flex-col items-center justify-center text-center">
                                <div className="mb-2 p-2 bg-background rounded-lg transition-transform duration-300">
                                  <Icon 
                                    className="w-4 h-4" 
                                    style={{ color: item.color }}
                                  />
                                </div>
                                <span className="font-medium text-xs leading-tight">{item.name}</span>
                              </CardContent>
                            </Card>
                            
                            {/* Back face - only visible on desktop */}
                            <Card className="absolute inset-0 bg-card border-primary/50 [backface-visibility:hidden] [transform:rotateY(180deg)] hidden md:block">
                              <CardContent className="p-3 h-full flex flex-col justify-center text-center overflow-auto">
                                <p className="text-xs leading-relaxed text-muted-foreground">
                                  {t(item.descKey)}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="grid md:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t("testimonials.heading")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("testimonials.subheading")}
                </p>
                <Link href="/testimonials">
                  <Button
                    variant="outline"
                    className="w-full border-primary/50 hover:border-primary hover:bg-primary/10"
                  >
                    {t("about.cta.testimonials")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t("nav.consultation")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("contact.info.bc")}
                </p>
                <a
                  href="https://calendly.com/michailinasmatas/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t("about.cta.consultation")}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Dialog for mobile item descriptions */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-md">
          {selectedItem && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <selectedItem.icon 
                      className="w-8 h-8" 
                      style={{ color: selectedItem.color }}
                    />
                  </div>
                  <DialogTitle className="text-xl">{selectedItem.name}</DialogTitle>
                </div>
              </DialogHeader>
              <DialogDescription className="text-base leading-relaxed text-foreground mt-4">
                {t(selectedItem.descKey)}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AboutPageClient;
