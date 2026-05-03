# 🚀 RENDER - CREATE BACKEND SERVICE

## Current Problem:
You only have the FRONTEND deployed on Render.
The BACKEND API service doesn't exist yet, so the frontend can't connect to it.

## Solution: Create the Backend Service

### Option 1: Use Blueprint (Automatic - Recommended)

1. Go to https://dashboard.render.com
2. Click "New" → "Blueprint"
3. Connect your repository: Niyamprajapati101/niyam-prajapati
4. Render will read render.yaml and create BOTH services:
   - portfolio-backend
   - portfolio-frontend
5. Add environment variables to portfolio-backend (see below)
6. Both services will deploy automatically

### Option 2: Create Backend Service Manually

1. Go to https://dashboard.render.com
2. Click "New" → "Web Service"
3. Connect your repository: Niyamprajapati101/niyam-prajapati
4. Configure:
   - **Name:** portfolio-backend
   - **Region:** Choose closest to you
   - **Branch:** main
   - **Root Directory:** (leave empty)
   - **Runtime:** Node
   - **Build Command:** cd BACKEND && npm install
   - **Start Command:** cd BACKEND && npm start
   - **Plan:** Free

5. Add Environment Variables:
   - MONGODB_URI = mongodb+srv://niyam_prajapati:niyam2209@cluster0.8y0xaqo.mongodb.net/premium_portfolio
   - JWT_SECRET = LtlCYm/t02O/YrRiEGdgFOe1i52N5zlaph5wjNLFeDQ=
   - NODE_ENV = production
   - PORT = 10000

6. Click "Create Web Service"

### After Backend is Created:

1. Wait for backend to deploy (5-10 minutes)
2. Copy the backend URL (e.g., https://portfolio-backend.onrender.com)
3. Update BACKEND/server.js CORS to include your frontend URL
4. Update FRONTEND/.env.production with the correct backend URL
5. Redeploy frontend

## Quick Fix: Update Frontend to Point to Correct Backend

If your backend is already deployed with a different name, update this:

FRONTEND/.env.production:
```
VITE_API_URL=https://YOUR-ACTUAL-BACKEND-URL.onrender.com/api
```

Then rebuild the frontend.

## Check Your Current Services:

Go to https://dashboard.render.com and check:
- Do you have a service called "portfolio-backend"?
- If NO → Create it using Option 1 or 2 above
- If YES → Check if it's running and has environment variables

## Status: Need to Create Backend Service! 🚀
