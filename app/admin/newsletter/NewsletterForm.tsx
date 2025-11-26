'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { Loader2, Send, Mail, Eye } from 'lucide-react'
export default function NewsletterForm() {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [testEmail, setTestEmail] = useState('')
  const [useTestEmail, setUseTestEmail] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const getPreviewHTML = () => {
    if (!content) return ''
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Solteka</h1>
  </div>
  
  <div style="background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
    <p style="font-size: 16px; margin-top: 0; color: #333;">Hi there,</p>
    
    <div style="margin: 20px 0; color: #333;">
      ${content}
    </div>
    
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666; margin-bottom: 0; text-align: center;">
      <a href="${baseUrl}/api/newsletter/unsubscribe?token=preview" style="color: #667eea; text-decoration: none; margin-right: 10px;">Unsubscribe</a>
      <span style="color: #ccc;">|</span>
      <a href="${baseUrl}" style="color: #667eea; text-decoration: none; margin-left: 10px;">Visit our website</a>
    </p>
  </div>
</body>
</html>
    `.trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!subject.trim() || !content.trim()) {
      toast.error('Please fill in both subject and content')
      return
    }

    if (useTestEmail && !testEmail.trim()) {
      toast.error('Please enter a test email address')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/newsletter/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: subject.trim(),
          content: content.trim(),
          testEmail: useTestEmail ? testEmail.trim() : undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.error || 'Failed to send newsletter')
        return
      }

      toast.success(
        useTestEmail
          ? `Test email sent to ${testEmail}`
          : `Newsletter sent to ${data.success} subscribers${data.failed > 0 ? ` (${data.failed} failed)` : ''}`
      )

      // Reset form if not test email
      if (!useTestEmail) {
        setSubject('')
        setContent('')
      }
    } catch (error) {
      console.error('Newsletter send error:', error)
      toast.error('Failed to send newsletter. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const previewContent = showPreview && content ? getPreviewHTML() : ''

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Compose Newsletter</CardTitle>
          <CardDescription>
            Write and send newsletters to your subscribers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Newsletter subject line"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="content">Content</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPreview(!showPreview)}
                  disabled={!content.trim()}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </Button>
              </div>
              <Textarea
                id="content"
                placeholder="Enter your newsletter content (HTML supported)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={isLoading}
                rows={12}
                required
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground">
                You can use HTML tags for formatting (e.g., &lt;p&gt;, &lt;strong&gt;, &lt;a&gt;)
              </p>
            </div>

            {showPreview && previewContent && (
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-sm">Email Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: previewContent }}
                  />
                </CardContent>
              </Card>
            )}

            <div className="space-y-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="useTestEmail"
                  checked={useTestEmail}
                  onChange={(e) => setUseTestEmail(e.target.checked)}
                  disabled={isLoading}
                  className="rounded"
                />
                <Label htmlFor="useTestEmail" className="cursor-pointer">
                  Send test email first
                </Label>
              </div>
              {useTestEmail && (
                <div className="space-y-2">
                  <Label htmlFor="testEmail">Test Email Address</Label>
                  <Input
                    id="testEmail"
                    type="email"
                    placeholder="your-email@example.com"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    disabled={isLoading}
                    required={useTestEmail}
                    autoComplete="email"
                  />
                  <p className="text-xs text-muted-foreground">
                    The email must be in your subscriber list
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button type="submit" disabled={isLoading} className="flex-1">
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {useTestEmail ? 'Send Test Email' : 'Send Newsletter'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

