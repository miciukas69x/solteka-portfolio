'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug } from "@/lib/blog";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPostClientProps {
  slug: string;
}

const BlogPostClient = ({ slug }: BlogPostClientProps) => {
  const { t, language } = useLanguage();
  const langKey: "en" | "lt" = language === "lt" ? "lt" : "en";
  const post = getPostBySlug(slug);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("blog.backToPosts")}
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readingTime[langKey]}</span>
              <div className="flex flex-wrap gap-2">
                {post.tags[langKey].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{post.title[langKey]}</h1>
            <p className="text-lg text-muted-foreground">{post.summary[langKey]}</p>
          </div>

          <article className="space-y-6 text-base text-muted-foreground leading-relaxed">
            {post.content[langKey].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostClient;

