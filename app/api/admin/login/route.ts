import { NextRequest, NextResponse } from 'next/server'
import { createAdminSession } from '@/lib/admin-session'
import { timingSafeEqual } from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      )
    }

    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Constant-time password comparison to prevent timing attacks
    const providedPasswordBuffer = Buffer.from(password, 'utf8')
    const expectedPasswordBuffer = Buffer.from(adminPassword, 'utf8')

    // If lengths don't match, create a dummy comparison to maintain constant time
    if (providedPasswordBuffer.length !== expectedPasswordBuffer.length) {
      // Still do a comparison to maintain constant time
      timingSafeEqual(
        Buffer.alloc(expectedPasswordBuffer.length),
        expectedPasswordBuffer
      )
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    const passwordsMatch = timingSafeEqual(
      providedPasswordBuffer,
      expectedPasswordBuffer
    )

    if (!passwordsMatch) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    // Create session
    await createAdminSession()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Failed to process login' },
      { status: 500 }
    )
  }
}

