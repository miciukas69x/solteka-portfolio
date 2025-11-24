import type { Metadata } from "next";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Testimonials | Solteka",
  description:
    "Read what our clients say about working with Solteka. Real feedback from satisfied customers who have experienced our marketing and web development services.",
  openGraph: {
    title: "Testimonials | Solteka",
    description:
      "Read what our clients say about working with Solteka. Real feedback from satisfied customers who have experienced our marketing and web development services.",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
      },
    ],
  },
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
