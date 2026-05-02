# Vercel Deployment Guide

## Project Structure
- FRONTEND: React + Vite application
- BACKEND: Node.js + Express API

## Deployment Steps

### 1. Prepare Your Repository
Make sure all files are committed to Git:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from the project root:
   ```bash
   cd d:\niyam-prajapati-main
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **niyam-prajapati** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to override settings? **N**

5. For production deployment:
   ```bash
   vercel --prod
   ```

#### Option B: Using Vercel Dashboard
1. Go to https://vercel.com/new
2. Import your Git repository (GitHub/GitLab/Bitbucket)
3. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: `cd FRONTEND && npm install && npm run build`
   - **Output Directory**: FRONTEND/dist
   - **Install Command**: `npm install`

### 3. Configure Environment Variables
In Vercel Dashboard, go to Project Settings > Environment Variables and add:

**For All Environments (Production, Preview, Development):**
- `MONGODB_URI` = `mongodb+srv://niyam_prajapati:niyam2209@cluster0.8y0xaqo.mongodb.net/premium_portfolio`
- `JWT_SECRET` = `LtlCYm/t02O/YrRiEGdgFOe1i52N5zlaph5wjNLFeDQ=`
- `NODE_ENV` = `production`
- `PORT` = `5000`

**Important:** After adding environment variables, redeploy your project.

### 4. Update CORS in Backend
The backend is already configured to accept requests from Vercel. Make sure this line is in your CORS config:
```javascript
"https://niyam-prajapati.vercel.app"
```

Update it with your actual Vercel domain after deployment.

### 5. Verify Deployment
After deployment, test these endpoints:
- Frontend: `https://your-app.vercel.app`
- API Health: `https://your-app.vercel.app/api`
- Profile API: `https://your-app.vercel.app/api/profile`

### 6. Update Frontend API URL
After getting your Vercel URL, update the CORS allowed origins in `BACKEND/server.js`:
```javascript
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  "https://your-actual-vercel-url.vercel.app"  // Update this
];
```

Then redeploy.

## Troubleshooting

### Build Fails
- Check that all dependencies are in package.json
- Ensure Node version compatibility (Vercel uses Node 18+ by default)
- Check build logs in Vercel dashboard

### API Not Working
- Verify environment variables are set correctly
- Check MongoDB connection string is correct
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

### CORS Errors
- Add your Vercel domain to allowed origins in server.js
- Redeploy after updating CORS settings

### Database Connection Issues
- Verify MongoDB Atlas network access allows all IPs
- Check MongoDB connection string format
- Ensure database user has correct permissions

## MongoDB Atlas Configuration
1. Go to MongoDB Atlas Dashboard
2. Navigate to Network Access
3. Add IP Address: `0.0.0.0/0` (Allow access from anywhere)
4. This is required for Vercel's serverless functions

## Custom Domain (Optional)
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update CORS origins in backend

## Continuous Deployment
Once connected to Git:
- Every push to main branch triggers production deployment
- Pull requests create preview deployments
- Automatic rollback available in Vercel dashboard

## Important Notes
- Vercel uses serverless functions for the backend
- Each API route runs as a separate serverless function
- Cold starts may cause initial delays (1-2 seconds)
- MongoDB connection pooling is handled automatically
- Free tier has limits on execution time and bandwidth

## Support
If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify all environment variables are set
4. Test API endpoints directly using Postman/curl
