import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'default-secret-change-in-production'
const SESSION_COOKIE_NAME = 'admin-session'
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

// Create a secret key for JWT
const getSecretKey = () => {
  return new TextEncoder().encode(SESSION_SECRET)
}

export async function createAdminSession() {
  const secretKey = getSecretKey()
  const expiresAt = new Date(Date.now() + SESSION_DURATION)

  const token = await new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresAt.getTime() / 1000)
    .sign(secretKey)

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  })

  return token
}

export async function verifyAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value

    if (!token) {
      return false
    }

    const secretKey = getSecretKey()
    const { payload } = await jwtVerify(token, secretKey)

    // Check if token has admin claim
    return payload.admin === true
  } catch (error) {
    return false
  }
}

export async function deleteAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}

