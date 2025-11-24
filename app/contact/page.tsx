import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Solteka",
  description:
    "Get in touch with Solteka for marketing solutions and web development. Schedule a free consultation or reach out via email.",
  openGraph: {
    title: "Contact | Solteka",
    description:
      "Get in touch with Solteka for marketing solutions and web development. Schedule a free consultation or reach out via email.",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
