import { checkAdminSession } from '@/lib/admin-auth'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user is on login page - don't require auth for that
  // For other admin pages, they will check auth themselves
  return <>{children}</>
}

