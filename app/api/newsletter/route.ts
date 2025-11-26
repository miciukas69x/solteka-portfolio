import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
  source: z.string().optional(),
  tags: z.array(z.string()).optional().default(['newsletter']),
})

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const { email, name, source, tags } = subscribeSchema.parse(body)

    // Check if email already exists
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (existing) {
      // If already subscribed and active, return success
      if (existing.isActive) {
        return NextResponse.json(
          { message: 'Already subscribed', alreadySubscribed: true },
          { status: 200 }
        )
      }

      // If unsubscribed, reactivate
      await prisma.newsletterSubscriber.update({
        where: { email },
        data: {
          isActive: true,
          name: name || existing.name,
          source: source || existing.source,
          tags: tags || existing.tags,
          unsubscribedAt: null,
        },
      })

      return NextResponse.json({ message: 'Successfully re-subscribed' })
    }

    // Create new subscriber
    await prisma.newsletterSubscriber.create({
      data: {
        email,
        name,
        source,
        tags: tags || ['newsletter'],
        isActive: true,
      },
    })

    return NextResponse.json({ message: 'Successfully subscribed' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    // Handle Prisma errors
    if (error && typeof error === 'object' && 'code' in error) {
      console.error('Prisma error:', error)
      // P2002 is unique constraint violation (email already exists)
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'This email is already subscribed', alreadySubscribed: true },
          { status: 400 }
        )
      }
    }

    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}

