@echo off
echo ========================================
echo   Portfolio Deployment Helper
echo ========================================
echo.

echo Checking if Vercel CLI is installed...
where vercel >nul 2>&1
if %errorlevel% neq 0 (
    echo Vercel CLI not found!
    echo Installing Vercel CLI globally...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo Failed to install Vercel CLI
        echo Please install manually: npm install -g vercel
        pause
        exit /b 1
    )
)

echo Vercel CLI is installed!
echo.

echo ========================================
echo   Deployment Options
echo ========================================
echo 1. Deploy to Preview (Development)
echo 2. Deploy to Production
echo 3. View Deployment Logs
echo 4. Open Vercel Dashboard
echo 5. Exit
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo.
    echo Deploying to Preview...
    vercel
) else if "%choice%"=="2" (
    echo.
    echo Deploying to Production...
    vercel --prod
) else if "%choice%"=="3" (
    echo.
    echo Fetching deployment logs...
    vercel logs
) else if "%choice%"=="4" (
    echo.
    echo Opening Vercel Dashboard...
    start https://vercel.com/dashboard
) else if "%choice%"=="5" (
    echo.
    echo Exiting...
    exit /b 0
) else (
    echo.
    echo Invalid choice!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Check your deployment URL
echo 2. Test all features
echo 3. Update CORS in BACKEND/server.js if needed
echo.
pause
