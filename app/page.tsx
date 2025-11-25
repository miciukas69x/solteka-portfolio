import type { Metadata } from "next";
import AboutSimple from "@/components/AboutSimple";
import ContactSimple from "@/components/ContactSimple";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Solteka | Marketing & Page Solutions",
  description:
    "Modern marketing, landing pages, and custom web solutions with bilingual support and clear pricing.",
  openGraph: {
    title: "Solteka | Marketing & Page Solutions",
    description: "Modern marketing, landing pages, and custom web solutions with bilingual support and clear pricing.",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Testimonials />
      <Services />
      <AboutSimple />
      <FAQ />
      <ContactSimple />
    </div>
  );
}
