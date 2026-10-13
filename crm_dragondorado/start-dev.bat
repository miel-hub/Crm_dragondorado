@echo off
REM Script para iniciar Backend y Frontend en Windows

echo ========================================
echo   CRM Mi Dulce Tesoro - Inicio Rapido
echo ========================================
echo.

REM Verificar si Node.js esta instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js no esta instalado
    echo Por favor instala Node.js desde https://nodejs.org/
    pause
    exit /b 1
)

echo [1/4] Verificando dependencias del Backend...
cd Backend
if not exist "node_modules" (
    echo Instalando dependencias del Backend...
    call npm install
)

echo.
echo [2/4] Iniciando Backend en el puerto 3000...
start "CRM Backend" cmd /k "npm run dev"

timeout /t 3 >nul

echo.
echo [3/4] Verificando dependencias del Frontend...
cd ..\Frontend
if not exist "node_modules" (
    echo Instalando dependencias del Frontend...
    call npm install --legacy-peer-deps
)

echo.
echo [4/4] Iniciando Frontend en el puerto 5173...
start "CRM Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo   Aplicacion iniciada correctamente
echo ========================================
echo.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:5173
echo.
echo Presiona Ctrl+C en cada ventana para detener
echo.
pause
