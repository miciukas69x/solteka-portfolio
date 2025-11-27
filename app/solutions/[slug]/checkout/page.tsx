import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CheckoutClient from "./CheckoutClient";

// Solution titles for metadata
const solutionTitles: Record<string, string> = {
  "simple-hustle": "Simple Hustle",
  "seo-integrated": "SEO Integrated",
  "ecommerce-shop": "E-commerce Shop",
  "fully-custom": "Fully Custom",
};

interface CheckoutPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CheckoutPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = solutionTitles[slug];

  if (!title) {
    return {
      title: "Checkout | Solteka",
    };
  }

  return {
    title: `${title} - Checkout | Solteka`,
    description: `Complete your order for ${title}`,
  };
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { slug } = await params;
  
  // Validate slug exists and is a website solution
  if (!solutionTitles[slug]) {
    notFound();
  }

  return <CheckoutClient slug={slug} />;
}

