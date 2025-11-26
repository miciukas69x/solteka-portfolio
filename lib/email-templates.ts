export function getNewsletterEmailHTML(
  content: string,
  unsubscribeUrl: string,
  recipientName?: string
) {
  const name = recipientName || 'there'
  
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
    <p style="font-size: 16px; margin-top: 0; color: #333;">Hi ${name},</p>
    
    <div style="margin: 20px 0; color: #333;">
      ${content}
    </div>
    
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666; margin-bottom: 0; text-align: center;">
      <a href="${unsubscribeUrl}" style="color: #667eea; text-decoration: none; margin-right: 10px;">Unsubscribe</a>
      <span style="color: #ccc;">|</span>
      <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://solteka.co'}" style="color: #667eea; text-decoration: none; margin-left: 10px;">Visit our website</a>
    </p>
  </div>
</body>
</html>
  `.trim()
}

export function getNewsletterEmailText(
  content: string,
  unsubscribeUrl: string,
  recipientName?: string
) {
  const name = recipientName || 'there'
  // Strip HTML tags for plain text version
  const textContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n\s*\n/g, '\n\n')
    .trim()
  
  return `
Hi ${name},

${textContent}

---
Unsubscribe: ${unsubscribeUrl}
Visit our website: ${process.env.NEXT_PUBLIC_BASE_URL || 'https://solteka.co'}
  `.trim()
}

