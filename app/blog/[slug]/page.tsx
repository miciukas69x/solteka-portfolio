import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug } from "@/lib/blog";
import { useLanguage } from "@/contexts/LanguageContext";
import { use } from "react";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Solteka",
    };
  }

  return {
    title: `${post.title.en} | Solteka Blog`,
    description: post.summary.en,
    openGraph: {
      title: `${post.title.en} | Solteka Blog`,
      description: post.summary.en,
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient slug={slug} />;
}

