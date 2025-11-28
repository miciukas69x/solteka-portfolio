import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
})

const sessionSchema = z.object({
  submissionId: z.string().min(1),
})

// Extract price from pricing string (e.g., "Starting at 400 €" -> 40000 cents)
// Handles both USD ($) and EUR (€) formats
function extractPriceInCents(pricing: string): number | null {
  // Handle custom pricing
  if (pricing.toLowerCase().includes('custom') || 
      pricing.toLowerCase().includes('priklauso') ||
      pricing.toLowerCase().includes('apskaičiuojama')) {
    return null
  }
  
  // Extract number from strings like "Starting at 400 €", "1,200 €", "Nuo 400 €", etc.
  const match = pricing.match(/[\$€]?\s*([\d,]+)/)
  if (match) {
    const price = parseFloat(match[1].replace(/,/g, ''))
    return Math.round(price * 100) // Convert to cents
  }
  
  return null
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { submissionId } = sessionSchema.parse(body)
    
    // Get submission from database
    const submission = await prisma.checkoutSubmission.findUnique({
      where: { id: submissionId },
    })
    
    if (!submission) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }
    
    // Extract price
    const amountInCents = extractPriceInCents(submission.pricing)
    
    if (!amountInCents) {
      return NextResponse.json(
        { error: 'Custom pricing requires consultation. Please contact us directly.' },
        { status: 400 }
      )
    }
    
    // Get origin for redirect URLs
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    
    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: submission.solutionTitle,
              description: `Website solution: ${submission.solutionTitle}`,
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/solutions/${submission.solutionSlug}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/solutions/${submission.solutionSlug}/checkout?cancelled=true`,
      customer_email: submission.email,
      metadata: {
        submissionId: submission.id,
        solutionSlug: submission.solutionSlug,
      },
    })
    
    // Update submission with session ID
    await prisma.checkoutSubmission.update({
      where: { id: submissionId },
      data: { stripeSessionId: session.id },
    })
    
    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Stripe session creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

