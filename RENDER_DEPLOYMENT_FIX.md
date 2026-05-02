# 🚀 RENDER DEPLOYMENT GUIDE - FIX FOR "API UNAVAILABLE"

## Problem
Your frontend is deployed but shows "Portfolio API unavailable" because the backend isn't running or isn't connected properly.

## Solution for Render

You have TWO options:

### Option 1: Deploy Both Frontend and Backend on Render (Recommended)

#### Step 1: Update render.yaml (ALREADY DONE)
The render.yaml has been updated to deploy both services.

#### Step 2: Push to GitHub
```bash
git add .
git commit -m "Fix Render deployment configuration"
git push origin main
```

#### Step 3: Deploy on Render
1. Go to https://dashboard.render.com
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will detect render.yaml and create 2 services:
   - portfolio-backend (API)
   - portfolio-frontend (Static Site)

#### Step 4: Add Environment Variables
For the **portfolio-backend** service:
- `MONGODB_URI` = `mongodb+srv://niyam_prajapati:niyam2209@cluster0.8y0xaqo.mongodb.net/premium_portfolio`
- `JWT_SECRET` = `LtlCYm/t02O/YrRiEGdgFOe1i52N5zlaph5wjNLFeDQ=`
- `NODE_ENV` = `production`

#### Step 5: Update CORS
After backend is deployed, get the backend URL (e.g., https://portfolio-backend.onrender.com)

Update BACKEND/server.js:
```javascript
const allowedOrigins = [
  "http://localhost:5173",
  "https://niyamprajapati01.onrender.com",  // Your frontend URL
  "https://portfolio-frontend.onrender.com"  // If different
];
```

Commit and push to redeploy.

---

### Option 2: Deploy Frontend on Render, Backend on Vercel

#### For Backend on Vercel:
1. Create a new project on Vercel
2. Import your repository
3. Set Root Directory to: `BACKEND`
4. Build Command: `npm install`
5. Output Directory: (leave empty)
6. Add environment variables
7. Deploy

#### For Frontend on Render:
Update FRONTEND/.env.production:
```
VITE_API_URL=https://your-vercel-backend.vercel.app/api
```

Then rebuild on Render.

---

## Current Configuration

### render.yaml (Updated):
- Backend service: Runs on port 10000
- Frontend service: Static site from FRONTEND/dist
- Frontend points to: https://portfolio-backend.onrender.com/api

### What You Need to Do:

1. **Push the updated files to GitHub**
2. **Redeploy on Render** (it will auto-deploy from GitHub)
3. **Add environment variables** to the backend service
4. **Update CORS** in BACKEND/server.js with your Render URLs
5. **Test the deployment**

---

## MongoDB Atlas Setup (CRITICAL)

1. Go to https://cloud.mongodb.com
2. Network Access → Add IP Address
3. Select "Allow Access from Anywhere" (0.0.0.0/0)
4. Confirm

---

## Testing After Deployment

- Frontend: https://niyamprajapati01.onrender.com
- Backend: https://portfolio-backend.onrender.com/api
- Profile API: https://portfolio-backend.onrender.com/api/profile

---

## Status: Ready to Fix!

Push the changes and redeploy on Render!
