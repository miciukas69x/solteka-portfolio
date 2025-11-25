import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Solteka",
  description:
    "Learn about Solteka's mission, vision, and why we're the right choice for your digital marketing and web development needs. Discover the technologies we work with.",
  openGraph: {
    title: "About Us | Solteka",
    description:
      "Learn about Solteka's mission, vision, and why we're the right choice for your digital marketing and web development needs. Discover the technologies we work with.",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

