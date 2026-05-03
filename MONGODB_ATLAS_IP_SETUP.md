# 🔐 MONGODB ATLAS - ADD RENDER IP ADDRESS

## The IP Address for Render:
74.220.48.0/24

This is Render's IP range that needs access to your MongoDB Atlas database.

## Step-by-Step Instructions:

### 1. Go to MongoDB Atlas
https://cloud.mongodb.com

### 2. Login to Your Account
Use your MongoDB Atlas credentials

### 3. Select Your Cluster
Click on your cluster: Cluster0

### 4. Go to Network Access
- Click "Network Access" in the left sidebar
- Or go to: Security → Network Access

### 5. Add IP Address
Click the "Add IP Address" button

### 6. Enter Render IP
In the popup:
- **IP Address:** 74.220.48.0/24
- **Comment:** Render deployment
- Click "Confirm"

### 7. Also Add "Allow from Anywhere" (Recommended for Render)
Click "Add IP Address" again:
- Click "Allow Access from Anywhere"
- **IP Address:** 0.0.0.0/0
- **Comment:** Allow all (for Render free tier)
- Click "Confirm"

## Why Both?

Render's free tier uses dynamic IPs, so it's safer to allow 0.0.0.0/0 (all IPs) for Render deployments.

The specific IP 74.220.48.0/24 is one of Render's IP ranges, but they may use others.

## Verification:

After adding the IPs, your Network Access list should show:
- ✅ 74.220.48.0/24 (Render specific)
- ✅ 0.0.0.0/0 (Allow from anywhere)

## Security Note:

For production, you should:
1. Use Render's paid plan (static IPs)
2. Add only those specific IPs
3. Remove 0.0.0.0/0

For free tier, 0.0.0.0/0 is necessary because IPs change.

## After Adding IPs:

1. Wait 1-2 minutes for changes to propagate
2. Redeploy your Render service
3. Test your API endpoints
4. The "API unavailable" error should be gone!

## Status: Ready to Add IP! 🚀
