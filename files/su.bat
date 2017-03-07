@echo off
echo Stop-Process -processname *screen* > su.ps1
powershell -executionPolicy bypass -command ".\su.ps1"
pause