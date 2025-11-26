import { verifyAdminSession } from './admin-session'
import { redirect } from 'next/navigation'

/**
 * Check if user has valid admin session
 * If not authenticated, redirects to /admin
 * Use this in server components and API routes
 */
export async function requireAdmin() {
  const isAuthenticated = await verifyAdminSession()
  
  if (!isAuthenticated) {
    redirect('/admin')
  }
  
  return true
}

/**
 * Check if user has valid admin session (non-redirecting version)
 * Returns boolean - use this when you need to handle redirect yourself
 */
export async function checkAdminSession(): Promise<boolean> {
  return await verifyAdminSession()
}

