import ContactSimple from "@/components/ContactSimple";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Testimonials />
      <Services />
      <FAQ />
      <ContactSimple />
    </div>
  );
}
