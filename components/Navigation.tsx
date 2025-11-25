'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="/favicon-32x32.png"
            alt="Solteka"
            width={32}
            height={32}
            className="h-7 w-7 sm:h-8 sm:w-8"
          />
          <span className="font-semibold text-base sm:text-lg">Solteka</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 outline-none">
              {t("nav.company")}
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link 
                  href="/about" 
                  className={cn("cursor-pointer", pathname === "/about" && "text-primary")}
                >
                  {t("nav.about")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#faq" className="cursor-pointer">
                  {t("nav.faq")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  href="/blog" 
                  className={cn("cursor-pointer", pathname === "/blog" && "text-primary")}
                >
                  {t("nav.blog")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  href="/testimonials" 
                  className={cn("cursor-pointer", pathname === "/testimonials" && "text-primary")}
                >
                  {t("nav.testimonials")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink 
            to="/contact" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            {t("nav.contact")}
          </NavLink>
          <a 
            href="https://calendly.com/solteka432/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden lg:inline">{t("nav.consultation")}</span>
          </a>
          <NavLink to="/solutions">
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-all"
            >
              {t("nav.solutions")}
            </Button>
          </NavLink>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitch />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitch />
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <NavLink 
                  to="/solutions" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.solutions")}
                </NavLink>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    {t("nav.company")}
                  </p>
                  <div className="flex flex-col gap-3 pl-2">
                    <NavLink
                      to="/about"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      activeClassName="text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("nav.about")}
                    </NavLink>
                    <Link 
                      href="/#faq" 
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("nav.faq")}
                    </Link>
                    <NavLink
                      to="/blog"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      activeClassName="text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("nav.blog")}
                    </NavLink>
                    <NavLink
                      to="/testimonials"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      activeClassName="text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("nav.testimonials")}
                    </NavLink>
                  </div>
                </div>
                <NavLink 
                  to="/contact" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.contact")}
                </NavLink>
                <a 
                  href="https://calendly.com/solteka432/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar className="w-5 h-5" />
                  {t("nav.consultation")}
                </a>
                <NavLink to="/solutions" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-medium shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-all"
                  >
                    {t("nav.solutions")}
                  </Button>
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

