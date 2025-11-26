'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/contexts/LanguageContext'
import { Mail, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

interface NewsletterFormProps {
  source?: string
  tags?: string[]
  variant?: 'default' | 'inline' | 'minimal'
  onSuccess?: () => void
}

export default function NewsletterForm({ 
  source = 'footer', 
  tags = ['newsletter'],
  variant = 'default',
  onSuccess
}: NewsletterFormProps) {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast.error(t('newsletter.error'))
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          source,
          tags,
        }),
      })

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        throw new Error(text || t('newsletter.error'))
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || t('newsletter.error'))
      }

      if (data.alreadySubscribed) {
        toast.info(t('newsletter.alreadySubscribed'))
      } else {
        toast.success(t('newsletter.success'))
      }

      // Reset form
      setEmail('')
      setName('')

      // Call onSuccess callback if provided (e.g., to close popup)
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      toast.error(t('newsletter.error'))
    } finally {
      setIsLoading(false)
    }
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder={t('newsletter.emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="flex-1"
          required
        />
        <Button type="submit" disabled={isLoading} size="sm">
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Mail className="w-4 h-4" />
          )}
        </Button>
      </form>
    )
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder={t('newsletter.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="flex-1"
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              t('newsletter.submit')
            )}
          </Button>
        </div>
        <Input
          type="text"
          placeholder={t('newsletter.namePlaceholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
      </form>
    )
  }

  // Default variant
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">{t('newsletter.heading')}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {t('newsletter.subheading')}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder={t('newsletter.emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
        />
        <Input
          type="text"
          placeholder={t('newsletter.namePlaceholder')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t('newsletter.submitting')}
            </>
          ) : (
            t('newsletter.submit')
          )}
        </Button>
      </form>
    </div>
  )
}

