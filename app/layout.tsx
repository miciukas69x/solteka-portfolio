import type { Metadata } from "next";
import { KoHo, Roboto_Flex } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";

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
  metadataBase: new URL('https://solteka.co'),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${koho.variable} ${solteka.variable} antialiased bg-background text-foreground`}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ? (
          <Suspense fallback={null}>
            <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID} />
          </Suspense>
        ) : (
          <div data-fb-pixel="missing" style={{ display: 'none' }} />
        )}
      </body>
    </html>
  );
}
