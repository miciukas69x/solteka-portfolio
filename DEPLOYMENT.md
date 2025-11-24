# Vercel Deployment Guide

## Step 1: Commit Your Changes

First, commit all your changes to git:

```bash
git add .
git commit -m "Ready for deployment: Complete Solteka website with all features"
```

## Step 2: Push to GitHub

### Option A: If you already have a GitHub repository

1. Add your remote (if not already added):
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

2. Push to GitHub:
```bash
git push -u origin master
```

### Option B: If you need to create a new GitHub repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "solteka-website")
3. **Don't** initialize with README, .gitignore, or license
4. Then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Note: If your local branch is `master` and GitHub uses `main`, you may need to rename:
```bash
git branch -M main
```

## Step 3: Deploy to Vercel

### Method 1: Via Vercel Web Interface (Recommended - Easiest)

1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
6. Click "Deploy"
7. Wait for deployment to complete (usually 2-3 minutes)
8. Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Via Vercel CLI (Alternative)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Enter your preferred name)
   - Directory? `./` (default)
   - Override settings? **No**

5. For production deployment:
```bash
vercel --prod
```

## Step 4: Configure Environment Variables (If Needed)

If you have any environment variables (API keys, etc.), add them in:
- Vercel Dashboard → Your Project → Settings → Environment Variables

## Step 5: Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `solteka.com`)
3. Follow DNS configuration instructions
4. Vercel will automatically issue SSL certificates

## Post-Deployment Checklist

- ✅ Test all pages (home, blog, solutions, testimonials, contact)
- ✅ Test language switching (EN/LT)
- ✅ Test theme toggle (light/dark)
- ✅ Verify all links work
- ✅ Check mobile responsiveness
- ✅ Test blog posts load correctly
- ✅ Verify testimonials display properly

## Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Environment variables not working
- Make sure you've added them in Vercel Dashboard
- Restart deployment after adding variables

### 404 errors on routes
- Check that all routes are properly exported
- Verify file structure matches Next.js App Router conventions

## Continuous Deployment

Once connected to GitHub, Vercel will automatically deploy:
- Every push to `main`/`master` branch → Production
- Every pull request → Preview deployment

No need to manually deploy anymore! 🚀

