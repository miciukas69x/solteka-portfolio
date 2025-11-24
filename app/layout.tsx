import type { Metadata } from "next";
import { KoHo, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const koho = KoHo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-koho",
});

// Roboto Flex for headings - expressive and business-focused font
const solteka = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-solteka",
});

export const metadata: Metadata = {
  title: "Solteka | Marketing & Page Solutions",
  description:
    "Modern marketing, landing pages, and custom web solutions with bilingual support and clear pricing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${koho.variable} ${solteka.variable} antialiased bg-background text-foreground`}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
