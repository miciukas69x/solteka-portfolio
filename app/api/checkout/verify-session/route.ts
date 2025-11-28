import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { prisma } from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
})

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get('session_id')
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID required' },
        { status: 400 }
      )
    }
    
    // Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    
    // Update submission status if payment is complete
    if (session.payment_status === 'paid') {
      await prisma.checkoutSubmission.updateMany({
        where: { stripeSessionId: sessionId },
        data: { status: 'paid' },
      })
    }
    
    return NextResponse.json({
      success: session.payment_status === 'paid',
      paymentStatus: session.payment_status,
    })
  } catch (error) {
    console.error('Session verification error:', error)
    return NextResponse.json(
      { error: 'Failed to verify session' },
      { status: 500 }
    )
  }
}

