@echo off
cd /d "%~dp0"
echo.
echo =========================================
echo       ROYAL BITE - DEV SERVER
echo =========================================
echo.
if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 goto :error
)
echo.
echo Starting Royal Bite...
call npm run dev
pause
goto :eof
:error
echo.
echo Installation failed. Please run npm install manually.
pause
