@echo off
REM ================================================
REM Portfolio Fullstack Development Startup Script
REM ================================================

setlocal enabledelayedexpansion

echo.
echo ================================================
echo  Portfolio Development Environment Startup
echo ================================================
echo.

REM Check if .env file exists
if not exist ".env" (
    echo ERROR: .env file not found!
    echo.
    echo Please copy .env.example to .env and configure:
    echo   copy .env.example .env
    echo.
    pause
    exit /b 1
)

echo [1/4] Checking dependencies...
if not exist "client\node_modules" (
    echo Installing client dependencies...
    cd client
    call npm install
    cd ..
)

if not exist "server\node_modules" (
    echo Installing server dependencies...
    cd server
    call npm install
    cd ..
)

echo [2/4] Starting MongoDB...
REM Check if mongod is in PATH
where mongod >nul 2>&1
if errorlevel 1 (
    echo WARNING: MongoDB not found in PATH
    echo Make sure MongoDB is running separately with: mongod
    echo.
) else (
    echo Starting MongoDB...
    start "MongoDB Server" cmd /k "mongod"
    timeout /t 3 /nobreak >nul
)

echo [3/4] Starting API Server (Backend)...
start "API Server - http://localhost:5000" cmd /k "cd server && npm run dev"
timeout /t 3 /nobreak >nul

echo [4/4] Starting Client (Frontend)...
start "Frontend Client - http://localhost:5173" cmd /k "cd client && npm run dev"

echo.
echo ================================================
echo  All Services Started Successfully!
echo ================================================
echo.
echo Frontend:  http://localhost:5173
echo API:       http://localhost:5000/api
echo Admin:     http://localhost:5173/admin
echo.
echo Press Ctrl+C in any window to stop a service
echo Close all windows to shutdown completely
echo.
pause
