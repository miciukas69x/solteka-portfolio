import type { Metadata } from "next";
import SolutionsPageClient from "./SolutionsPageClient";

export const metadata: Metadata = {
  title: "Solutions | Solteka",
  description:
    "Browse our page and marketing solutions. From quick landing pages to fully custom platforms, SEO optimization, Meta Ads, and Google Ads management.",
  openGraph: {
    title: "Solutions | Solteka",
    description:
      "Browse our page and marketing solutions. From quick landing pages to fully custom platforms, SEO optimization, Meta Ads, and Google Ads management.",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
      },
    ],
  },
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
