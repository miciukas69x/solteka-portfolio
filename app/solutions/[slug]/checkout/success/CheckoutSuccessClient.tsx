'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function CheckoutSuccessClient({ sessionId }: { sessionId: string }) {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(true)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    // Verify payment was successful
    fetch(`/api/checkout/verify-session?session_id=${sessionId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setVerified(true)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">{t("checkout.success.verifying")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className={`w-16 h-16 ${verified ? 'text-green-500' : 'text-yellow-500'}`} />
              </div>
              <CardTitle className="text-3xl">{t("checkout.success.heading")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-muted-foreground">
                {t("checkout.success.message")}
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {t("checkout.success.backHome")}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

