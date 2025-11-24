'use client';

import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPageClient = () => {
  const { t, language } = useLanguage();
  const langKey: "en" | "lt" = language === "lt" ? "lt" : "en";

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">{t("blog.heading")}</p>
            <h1 className="text-4xl md:text-5xl font-bold">
              {t("blog.title")}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("blog.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="bg-card border-border hover:border-primary/40 transition-colors animate-slide-up"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
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

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">{post.title[langKey]}</h2>
                    <p className="text-muted-foreground">{post.summary[langKey]}</p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {t("blog.readArticle")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPageClient;

