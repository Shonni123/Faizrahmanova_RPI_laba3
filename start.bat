@echo off
cd /d "%~dp0"
echo Starting development server...
"D:\Apps\node.exe" "node_modules\vite\bin\vite.js" --host 127.0.0.1
pause
