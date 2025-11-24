'use client';

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
/*Footer
    "footer.s.all": "Visi sprendimai",
    "footer.s.simple": "Paprastas Hustle",
    "footer.s.seo": "SEO Integruotas",
    "footer.s.custom": "Pilnai pagal poreikius",
    "footer.s.meta": "Meta reklama",
    "footer.s.adseo": "SEO paslaugos",
    "footer.s.google": "Google reklama",

    "footer.c.faq": "DUK",
    "footer.c.testimonials": "Atsiliepimai",
    "footer.c.contact": "Kontaktai",

    "footer.l.pricay": "Privatumo politika",
    "footer.l.tos": "Naudojimo sąlygos",
    "footer.l.cookie": "Slapukų politika",
  },
*/
const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-16 px-6 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/favicon-32x32.png" alt="Solteka" width={24} height={24} className="h-6 w-6" />
              <span className="font-semibold">Solteka</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.heading")}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t("footer.s")}</h3>
            <div className="space-y-2 text-sm">
              <Link href="/solutions" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.s.all")}
              </Link>
              <div className="text-xs text-muted-foreground/70 mt-3 mb-1">{t("footer.h.1")}</div> 
              <Link href="/solutions/simple-hustle" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.s.simple")}
              </Link>
              <Link href="/solutions/seo-integrated" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.s.seo")}
              </Link>
              <Link href="/solutions/fully-custom" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.s.custom")}
              </Link>
              <div className="text-xs text-muted-foreground/70 mt-3 mb-1">{t("footer.h.2")}</div>
              <Link href="/solutions/meta-ads" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.s.meta")}
              </Link>
              <Link href="/solutions/seo-services" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.s.adseo")}
              </Link>
              <Link href="/solutions/google-ads" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.s.google")}
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t("footer.c")}</h3>
            <div className="space-y-2 text-sm">
              <Link href="/#faq" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.c.faq")}
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.c.blog")}
              </Link>
              <Link href="/testimonials" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.c.testimonials")}
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.c.contact")}
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t("footer.l")}</h3>
            <div className="space-y-2 text-sm">
              <Link href="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.l.privacy")}
              </Link>
              <Link href="/terms-of-service" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.l.tos")}
              </Link>
              <Link href="/cookie-policy" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.l.cookie")}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Solteka. {t("footer.rights")}
          </p>
          
          <a 
            href="https://calendly.com/michailinasmatas/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            {t("footer.consultation")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

