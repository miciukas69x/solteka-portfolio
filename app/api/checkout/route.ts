import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const checkoutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  comment: z.string().optional(),
  solutionSlug: z.string().min(1, 'Solution slug is required'),
  solutionTitle: z.string().min(1, 'Solution title is required'),
  pricing: z.string().min(1, 'Pricing is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validatedData = checkoutSchema.parse(body)
    
    // Create checkout submission
    const submission = await prisma.checkoutSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        comment: validatedData.comment || null,
        solutionSlug: validatedData.solutionSlug,
        solutionTitle: validatedData.solutionTitle,
        pricing: validatedData.pricing,
        status: 'pending',
      },
    })
    
    return NextResponse.json(
      { 
        success: true, 
        submissionId: submission.id,
        message: 'Checkout submission created successfully' 
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Checkout submission error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout submission. Please try again.' },
      { status: 500 }
    )
  }
}

