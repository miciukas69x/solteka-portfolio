'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import NewsletterForm from '@/components/NewsletterForm'
import { useLanguage } from '@/contexts/LanguageContext'
import { usePathname } from 'next/navigation'

const STORAGE_KEY = 'newsletter-popup-dismissed'
const DELAY_MS = 15000 // 15 seconds

export default function NewsletterPopup() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Don't show popup on admin pages
    if (pathname?.startsWith('/admin')) {
      return
    }

    // Check if user has already dismissed the popup
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed) {
      const expiryDate = new Date(dismissed)
      if (new Date() > expiryDate) {
        // Expired, remove it so popup can show again
        localStorage.removeItem(STORAGE_KEY)
      } else {
        // Still valid, don't show
        return
      }
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setOpen(true)
    }, DELAY_MS)

    return () => clearTimeout(timer)
  }, [pathname])

  const handleClose = () => {
    setOpen(false)
    // Remember that user dismissed it (for 30 days)
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 30)
    localStorage.setItem(STORAGE_KEY, expiryDate.toISOString())
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('newsletter.heading')}</DialogTitle>
          <DialogDescription>
            {t('newsletter.subheading')}
          </DialogDescription>
        </DialogHeader>
        <NewsletterForm 
          source="popup" 
          variant="inline"
          onSuccess={handleClose}
        />
      </DialogContent>
    </Dialog>
  )
}

