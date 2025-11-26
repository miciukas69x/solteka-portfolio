import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export default function UnsubscribedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-green-500/10 rounded-full">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <CardTitle className="text-2xl">You've been unsubscribed</CardTitle>
          <CardDescription>
            You've been successfully removed from our newsletter. We're sorry to see you go!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Link href="/">
            <Button variant="outline">
              Return to homepage
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

