'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CreditCard, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { solutionsByLang } from '../SolutionDetailClient';

// Re-export for type safety
type SolutionData = {
  icon: React.ReactElement;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: string[];
  pricing: string;
  timeline: string;
  badge: string;
  hasPayment: boolean;
};

interface CheckoutClientProps {
  slug: string;
}

const CheckoutClient = ({ slug }: CheckoutClientProps) => {
  const { t, language } = useLanguage();
  const langKey: "en" | "lt" = language === "lt" ? "lt" : "en";
  const solution = solutionsByLang[langKey][slug];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!solution) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          comment: formData.comment || null,
          solutionSlug: slug,
          solutionTitle: solution.title,
          pricing: solution.pricing,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      // TODO: Redirect to Stripe checkout with submissionId
      // For now, show success message
      toast.success('Form submitted successfully! We will contact you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        comment: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/solutions/${slug}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("checkout.back")}
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{t("checkout.heading")}</h1>
            <p className="text-muted-foreground">{t("checkout.subheading")}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <div className="md:col-span-3">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.pricing}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("checkout.name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t("checkout.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("checkout.phone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+370 600 00000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comment">{t("checkout.comment")}</Label>
                      <Textarea
                        id="comment"
                        name="comment"
                        rows={4}
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder={t("checkout.commentPlaceholder")}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Processing...'
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 mr-2" />
                          {t("checkout.payButton")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2">
              <Card className="bg-card border-border sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">{t("checkout.orderSummary")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Solution</p>
                    <p className="font-semibold">{solution.title}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {langKey === "lt" ? "Investicija" : "Investment"}
                    </p>
                    <p className="font-semibold text-xl">{solution.pricing}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {langKey === "lt" ? "Įgyvendinimo terminas" : "Timeline"}
                    </p>
                    <p className="font-semibold">{solution.timeline}</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm mb-1">{t("checkout.demoPromise")}</p>
                        <p className="text-xs text-muted-foreground">{t("checkout.demoText")}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutClient;

