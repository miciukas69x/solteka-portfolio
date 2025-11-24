# Connecting solteka.co (Namecheap) to Vercel - Step by Step

## Quick Overview
1. Add domain in Vercel Dashboard
2. Get DNS records from Vercel
3. Configure DNS in Namecheap
4. Wait for propagation
5. Done! 🎉

---

## Step 1: Add Domain in Vercel Dashboard

1. Go to **https://vercel.com/dashboard**
2. Click on your **Solteka** project
3. Click **Settings** tab (top navigation)
4. Click **Domains** in the left sidebar
5. In the input field, type: `solteka.co`
6. Click **Add**

**Vercel will show you DNS configuration options** - keep this page open!

---

## Step 2: Configure DNS in Namecheap

### A. Log into Namecheap

1. Go to **https://www.namecheap.com**
2. Click **Sign In** (top right)
3. Log in with your account

### B. Access DNS Settings

1. Click on **Account** → **Domain List** (or go to https://ap.www.namecheap.com/domains/list/)
2. Find **solteka.co** in your domain list
3. Click the **Manage** button next to your domain
4. Click on the **Advanced DNS** tab

### C. Add DNS Records

You'll see a section called "Host Records" with a table. Here's what to do:

#### For the Apex Domain (solteka.co):

**Option 1: Use A Record (Recommended)**

1. Click **Add New Record** button
2. Select **A Record** from the dropdown
3. Configure:
   - **Host**: `@` (this represents your root domain)
   - **Value**: Copy the IP address from Vercel (usually `76.76.21.21` or similar - **use what Vercel shows you!**)
   - **TTL**: `Automatic` (or `30 min`)
4. Click the **✓ (checkmark)** to save

**Option 2: Use CNAME (Alternative - if A record doesn't work)**

1. Click **Add New Record** button
2. Select **CNAME Record** from the dropdown
3. Configure:
   - **Host**: `@`
   - **Value**: `cname.vercel-dns.com` (copy exactly from Vercel)
   - **TTL**: `Automatic`
4. Click the **✓ (checkmark)** to save

**Note**: Some Namecheap accounts don't support CNAME for @ (apex domain). If that's the case, you MUST use the A Record method.

#### For the www Subdomain (www.solteka.co):

1. Click **Add New Record** button
2. Select **CNAME Record** from the dropdown
3. Configure:
   - **Host**: `www`
   - **Value**: `cname.vercel-dns.com` (or whatever Vercel shows you)
   - **TTL**: `Automatic`
4. Click the **✓ (checkmark)** to save

### D. Remove Conflicting Records (Important!)

Namecheap often has default records that might conflict:

1. **Look for any existing A or CNAME records** for `@` or `www`
2. If you see any **parking pages** or **default Namecheap records**, delete them:
   - Click the **trash can icon** next to conflicting records
3. Common records to remove:
   - A record pointing to parking pages (IPs like 192.0.0.1)
   - CNAME records pointing to parking pages

### E. Save Changes

1. Scroll down and click **Save All Changes** (green button)
2. Wait for confirmation message

---

## Step 3: Configure www Redirect (Optional but Recommended)

After DNS is set up, you can configure redirects in Vercel:

1. In Vercel Dashboard → Domains → Click on `solteka.co`
2. You'll see both `solteka.co` and `www.solteka.co` listed
3. Click on one of them → **Configure** → **Redirect**
4. Choose your preference:
   - **www.solteka.co → solteka.co** (recommended - shorter URL)
   - **solteka.co → www.solteka.co** (if you prefer www)

---

## Step 4: Wait for DNS Propagation

### What to Expect:

- **Usually takes**: 5-30 minutes (but can take up to 48 hours)
- **Namecheap typically**: 15-30 minutes
- Vercel will show status updates in real-time

### Check Propagation Status:

1. **In Vercel Dashboard**: 
   - Go to Settings → Domains
   - You'll see status: "Pending" → "Validating" → "Valid" ✅

2. **Or check DNS propagation**:
   - Go to https://www.whatsmydns.net
   - Enter `solteka.co`
   - Select "A" record type
   - Check if it shows Vercel's IP address globally

3. **Test locally**:
   - Open terminal/command prompt
   - Run: `ping solteka.co` (Windows) or `dig solteka.co` (Mac/Linux)
   - You should see Vercel's IP address

---

## Step 5: SSL Certificate (Automatic!)

Once DNS is valid:

1. Vercel **automatically issues** a free SSL certificate
2. Takes about **5-10 minutes** after DNS is valid
3. Your site will be accessible via **HTTPS** automatically
4. No action needed from you!

---

## Visual Guide - Namecheap Interface

Here's what you'll see in Namecheap Advanced DNS:

```
Host Records
┌──────────┬─────────┬─────────────┬──────┐
│ Type     │ Host    │ Value       │ TTL  │
├──────────┼─────────┼─────────────┼──────┤
│ A Record │ @       │ 76.76.21.21 │ Auto │ ← Add this
│ CNAME    │ www     │ cname.vercel│ Auto │ ← Add this
└──────────┴─────────┴─────────────┴──────┘
```

---

## Troubleshooting

### "Invalid Configuration" in Vercel

**Check:**
1. Did you use the **exact IP address** Vercel showed you?
2. Is the Host field set to `@` (for apex) or `www` (for subdomain)?
3. Did you save changes in Namecheap?
4. Wait 10-15 minutes and refresh Vercel dashboard

### Domain Not Resolving

**Try:**
1. Clear DNS cache:
   - **Windows**: Open Command Prompt → `ipconfig /flushdns`
   - **Mac/Linux**: `sudo dscacheutil -flushcache`
2. Try different DNS server (temporarily):
   - Google DNS: `8.8.8.8` and `8.8.4.4`
   - Cloudflare DNS: `1.1.1.1`
3. Wait longer - propagation can take time

### SSL Certificate Not Issuing

1. Make sure DNS shows "Valid" in Vercel
2. Wait 10-15 minutes after DNS is valid
3. Check Vercel dashboard for SSL status
4. If stuck, contact Vercel support

### Can't Add CNAME for @ (Apex)

**Solution**: Use A Record instead (Option 1 in Step 2C)

Namecheap sometimes restricts CNAME for apex domains. The A Record method works perfectly!

---

## What Your Final Namecheap DNS Should Look Like

After setup, you should have:

```
Type    Host    Value                  TTL
A       @       76.76.21.21           Automatic
CNAME   www     cname.vercel-dns.com  Automatic
```

**That's it!** Simple and clean.

---

## Quick Checklist

- [ ] Added `solteka.co` in Vercel Dashboard
- [ ] Logged into Namecheap
- [ ] Opened Advanced DNS for solteka.co
- [ ] Added A record for `@` with Vercel's IP
- [ ] Added CNAME record for `www` 
- [ ] Removed any conflicting/default records
- [ ] Saved all changes in Namecheap
- [ ] Waited for DNS propagation (15-30 min)
- [ ] Domain shows "Valid" in Vercel
- [ ] SSL certificate issued automatically
- [ ] Website accessible at https://solteka.co ✅

---

## Expected Timeline

- **DNS Configuration**: 2-5 minutes
- **DNS Propagation**: 15-30 minutes (Namecheap)
- **SSL Certificate**: 5-10 minutes after DNS is valid
- **Total**: ~30-45 minutes from start to finish

---

## Need Help?

- **Namecheap Support**: https://www.namecheap.com/support/
- **Vercel Domain Docs**: https://vercel.com/docs/concepts/projects/domains
- **Vercel Support**: https://vercel.com/support

Once complete, your site will be live at:
- **https://solteka.co** 🎉
- **https://www.solteka.co** (redirects to non-www)

Good luck! Let me know if you run into any issues.

