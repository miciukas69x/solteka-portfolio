import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { prisma } from '@/lib/prisma'
import { getNewsletterEmailHTML, getNewsletterEmailText } from '@/lib/email-templates'
import { verifyAdminSession } from '@/lib/admin-session'

const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error('RESEND_API_KEY is not set in environment variables')
}

const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: NextRequest) {
  try {
    // Check admin session
    const isAuthenticated = await verifyAdminSession()
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { subject, content, testEmail } = body

    if (!subject || !content) {
      return NextResponse.json(
        { error: 'Subject and content are required' },
        { status: 400 }
      )
    }

    // Get all active subscribers
    const subscribers = await prisma.newsletterSubscriber.findMany({
      where: { isActive: true },
    })

    if (subscribers.length === 0) {
      return NextResponse.json(
        { error: 'No active subscribers found' },
        { status: 400 }
      )
    }

    // If testEmail is provided, send only to that email
    const recipients = testEmail 
      ? subscribers.filter((s: { email: string }) => s.email === testEmail)
      : subscribers

    if (testEmail && recipients.length === 0) {
      return NextResponse.json(
        { error: 'Test email not found in subscribers' },
        { status: 400 }
      )
    }

    if (!resend) {
      return NextResponse.json(
        { error: 'Resend API key is not configured' },
        { status: 500 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Solteka <newsletter@solteka.co>'
    
    console.log('Sending newsletter:', {
      recipientsCount: recipients.length,
      fromEmail,
      subject,
      hasContent: !!content,
    })
    
    const results = []

    // Send emails with delay to respect rate limit (2 requests per second)
    for (let i = 0; i < recipients.length; i++) {
      const subscriber = recipients[i]
      const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?token=${subscriber.id}`
      
      try {
        const emailData = {
          from: fromEmail,
          to: subscriber.email,
          subject,
          html: getNewsletterEmailHTML(content, unsubscribeUrl, subscriber.name || undefined),
          text: getNewsletterEmailText(content, unsubscribeUrl, subscriber.name || undefined),
        }

        console.log(`Attempting to send email to ${subscriber.email} from ${fromEmail}`)
        
        const { data, error } = await resend.emails.send(emailData)

        if (error) {
          console.error(`Failed to send to ${subscriber.email}:`, JSON.stringify(error, null, 2))
          results.push({ 
            email: subscriber.email, 
            success: false, 
            error: error.message || JSON.stringify(error) || 'Unknown error' 
          })
        } else {
          console.log(`Successfully sent to ${subscriber.email}, ID: ${data?.id}`)
          results.push({ email: subscriber.email, success: true, id: data?.id })
        }
        
        // Add delay between emails to respect rate limit (600ms = ~1.6 req/sec, under 2/sec limit)
        // Skip delay after the last email
        if (i < recipients.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 600))
        }
      } catch (error) {
        console.error(`Error sending to ${subscriber.email}:`, error)
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        console.error('Full error:', error)
        results.push({ 
          email: subscriber.email, 
          success: false, 
          error: errorMessage
        })
      }
    }

    const successCount = results.filter(r => r.success).length
    const failCount = results.filter(r => !r.success).length

    return NextResponse.json({
      message: `Newsletter sent to ${successCount} subscribers${failCount > 0 ? `, ${failCount} failed` : ''}`,
      results,
      total: recipients.length,
      success: successCount,
      failed: failCount,
    })
  } catch (error) {
    console.error('Newsletter send error:', error)
    return NextResponse.json(
      { error: 'Failed to send newsletter' },
      { status: 500 }
    )
  }
}

