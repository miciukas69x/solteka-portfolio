import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import SolutionDetailClient from "./SolutionDetailClient";

// Solution titles for metadata (using English)
const solutionTitles: Record<string, string> = {
  "simple-hustle": "Simple Hustle",
  "seo-integrated": "SEO Integrated",
  "fully-custom": "Fully Custom",
  "meta-ads": "Meta Ads Management",
  "seo-services": "SEO Services",
  "google-ads": "Google Ads",
};

const solutionDescriptions: Record<string, string> = {
  "simple-hustle": "Get online fast with a beautiful, functional website. Perfect for entrepreneurs and small businesses.",
  "seo-integrated": "Pages built to rank and convert from day one. Designed for businesses that care about long-term organic traffic.",
  "fully-custom": "Tailored web solutions for unique business needs. Ideal for businesses needing a fully tailored digital solution.",
  "meta-ads": "Facebook & Instagram advertising campaigns that drive results. Perfect for businesses looking to grow through social media advertising.",
  "seo-services": "Technical and on-page optimization for better rankings. Best for businesses serious about long-term organic visibility.",
  "google-ads": "Search and display campaigns to reach your target audience. Ideal for businesses wanting immediate visibility on Google.",
};

interface SolutionDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SolutionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = solutionTitles[slug];
  const description = solutionDescriptions[slug];

  if (!title || !description) {
    return {
      title: "Solution Not Found | Solteka",
    };
  }

  return {
    title: `${title} | Solteka`,
    description,
    openGraph: {
      title: `${title} | Solteka`,
      description,
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
        },
      ],
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionDetailPageProps) {
  const { slug } = await params;
  
  // Validate slug exists
  if (!solutionTitles[slug]) {
    notFound();
  }

  return <SolutionDetailClient slug={slug} />;
}
