import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.json(
      { error: 'Missing unsubscribe token' },
      { status: 400 }
    )
  }

  try {
    await prisma.newsletterSubscriber.update({
      where: { id: token },
      data: {
        isActive: false,
        unsubscribedAt: new Date(),
      },
    })

    // Redirect to confirmation page
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    redirect(`${baseUrl}/newsletter/unsubscribed`)
  } catch (error) {
    console.error('Unsubscribe error:', error)
    // Even if there's an error, redirect to confirmation page
    // This prevents revealing whether the token was valid
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    redirect(`${baseUrl}/newsletter/unsubscribed`)
  }
}

