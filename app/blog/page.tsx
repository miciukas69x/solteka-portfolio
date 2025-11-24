import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Solteka",
  description:
    "Notes on shipping, marketing, and learning out loud. Short, tactical posts documenting what actually works while building bilingual landing pages, SEO programs, and Meta campaigns.",
  openGraph: {
    title: "Blog | Solteka",
    description:
      "Notes on shipping, marketing, and learning out loud. Short, tactical posts documenting what actually works while building bilingual landing pages, SEO programs, and Meta campaigns.",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}

