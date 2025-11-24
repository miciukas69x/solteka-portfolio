# Connecting Your Custom Domain to Vercel

## Prerequisites
- ✅ Your website is already deployed on Vercel
- ✅ You have access to your domain registrar's DNS settings
- ✅ Your domain is active and registered

## Step 1: Add Domain in Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your **Solteka** project
3. Click on **Settings** tab
4. Click on **Domains** in the left sidebar
5. Enter your domain (e.g., `solteka.com` or `www.solteka.com`)
6. Click **Add**

Vercel will show you DNS configuration options.

---

## Step 2: Configure DNS Records

Vercel will give you specific DNS records to add. Here's what you'll need:

### Option A: Apex Domain (solteka.com) - Recommended

**If your domain registrar supports it**, use **Apex Domain** configuration:

1. In your domain registrar's DNS settings, add an **A record**:
   ```
   Type: A
   Name: @ (or leave blank, or use your domain name)
   Value: 76.76.21.21
   TTL: 3600 (or Automatic)
   ```

   Vercel will show you the exact IP address to use (it may vary).

2. **Also add** a CNAME record for the www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600 (or Automatic)
   ```

### Option B: CNAME Method (if A records aren't supported)

Some registrars don't support A records for apex domains. In that case:

1. Add a **CNAME** record pointing to Vercel:
   ```
   Type: CNAME
   Name: @ (or your domain)
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

**Note**: Not all registrars support CNAME for apex domains. If yours doesn't, you must use Option A.

### Option C: Nameservers Method (Easiest - Recommended)

**This is the easiest option** - point your domain's nameservers to Vercel:

1. In Vercel Dashboard → Domains → Click on your domain
2. Scroll down and copy the **Nameservers** (they'll look like):
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

3. In your domain registrar's settings:
   - Find "Nameservers" or "DNS Settings"
   - Replace your current nameservers with Vercel's nameservers
   - Save changes

**This method is easiest** because Vercel manages all DNS for you automatically!

---

## Step 3: Wait for DNS Propagation

- **CNAME records**: Usually 1-2 minutes to 1 hour
- **A records**: Usually 5 minutes to 2 hours
- **Nameserver changes**: Usually 30 minutes to 48 hours (but often much faster)

You can check DNS propagation status at:
- https://www.whatsmydns.net
- https://dnschecker.org

---

## Step 4: Verify in Vercel

1. Go back to Vercel Dashboard → Your Project → Settings → Domains
2. Wait for the status to change from **Pending** to **Valid** ✅
3. Vercel will automatically issue an SSL certificate (free, takes ~5 minutes)

---

## Common Domain Registrars - Where to Find DNS Settings

### GoDaddy
1. Log in → My Products → DNS
2. Click on your domain → Manage DNS

### Namecheap
1. Log in → Domain List → Manage
2. Click "Advanced DNS" tab

### Google Domains
1. Log in → My Domains → DNS

### Cloudflare
1. Log in → Select your domain → DNS
2. If using Cloudflare, you can also use their proxy (orange cloud) with Vercel

### Google Domains (Now Squarespace Domains)
1. Log in → Domains → Manage DNS

### Name.com
1. Log in → My Domains → Manage → DNS Records

---

## What Vercel Shows You

When you add a domain in Vercel, you'll see something like:

```
To configure your domain, add the following DNS records:

For apex domain (solteka.com):
Type: A
Name: @
Value: 76.76.21.21

For www subdomain (www.solteka.com):
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Follow these instructions exactly!**

---

## Both www and Non-www (Recommended Setup)

You should configure **both**:
- `solteka.com` (apex domain)
- `www.solteka.com` (www subdomain)

Vercel will automatically redirect one to the other (you can choose which is primary in settings).

### To configure both:
1. Add `solteka.com` in Vercel → Get DNS instructions
2. Add `www.solteka.com` in Vercel → Get DNS instructions
3. Configure both DNS records in your registrar

---

## Troubleshooting

### Domain shows "Invalid Configuration"
- Double-check DNS records are entered correctly
- Wait for DNS propagation (can take up to 48 hours)
- Make sure TTL is set correctly (3600 seconds recommended)

### SSL Certificate not issuing
- Wait 5-10 minutes after DNS is valid
- Make sure your domain is accessible via DNS
- Check Vercel dashboard for SSL errors

### www redirects not working
- Go to Vercel → Domains → Click your domain
- Check "Redirect" settings
- Choose if you want `solteka.com → www.solteka.com` or vice versa

### Domain propagation slow
- Clear your DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)
- Use a different DNS server temporarily (Google DNS: 8.8.8.8)
- Wait - some changes can take 24-48 hours

---

## Quick Checklist

- [ ] Website deployed on Vercel
- [ ] Domain added in Vercel Dashboard
- [ ] DNS records configured in domain registrar
- [ ] Waited for DNS propagation
- [ ] Domain shows "Valid" in Vercel
- [ ] SSL certificate issued automatically
- [ ] Website accessible via custom domain
- [ ] Both www and non-www working (optional)

---

## Need Help?

- Vercel Domain Docs: https://vercel.com/docs/concepts/projects/domains
- Vercel Support: https://vercel.com/support

Once your domain is connected, Vercel will automatically:
- ✅ Issue free SSL certificates
- ✅ Handle HTTPS redirects
- ✅ Manage DNS (if using nameservers)
- ✅ Auto-renew SSL certificates

Your site will be live at your custom domain! 🎉

