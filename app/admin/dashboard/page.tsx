import { requireAdmin } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Users, Mail, TrendingUp, Calendar } from 'lucide-react'
import { format } from 'date-fns'
import LogoutButton from './LogoutButton'

export default async function AdminDashboardPage() {
  await requireAdmin()

  // Fetch subscriber statistics
  const [totalSubscribers, activeSubscribers, recentSubscribers] = await Promise.all([
    prisma.newsletterSubscriber.count(),
    prisma.newsletterSubscriber.count({ where: { isActive: true } }),
    prisma.newsletterSubscriber.findMany({
      where: { isActive: true },
      orderBy: { subscribedAt: 'desc' },
      take: 10,
      select: {
        email: true,
        name: true,
        subscribedAt: true,
        source: true,
      },
    }),
  ])

  const inactiveSubscribers = totalSubscribers - activeSubscribers

  return (
    <div className="min-h-screen bg-background p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Newsletter subscriber overview</p>
          </div>
          <div className="flex gap-3">
            <Link href="/admin/newsletter">
              <Button>Send Newsletter</Button>
            </Link>
            <LogoutButton />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSubscribers}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {activeSubscribers} active, {inactiveSubscribers} inactive
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeSubscribers}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Ready to receive newsletters
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Signups</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recentSubscribers.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Last 10 subscribers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Subscribers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Subscribers</CardTitle>
            <CardDescription>
              Latest {recentSubscribers.length} active subscribers
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentSubscribers.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No subscribers yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Source</th>
                      <th className="text-left py-3 px-4 font-medium">Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSubscribers.map((subscriber) => (
                      <tr key={subscriber.email} className="border-b">
                        <td className="py-3 px-4">{subscriber.email}</td>
                        <td className="py-3 px-4">{subscriber.name || '-'}</td>
                        <td className="py-3 px-4">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {subscriber.source || 'unknown'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            {format(new Date(subscriber.subscribedAt), 'MMM d, yyyy')}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

