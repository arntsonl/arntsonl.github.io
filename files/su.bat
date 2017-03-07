@echo off
echo Stop-Process -processname *screen* > c:\windows\temp\su.ps1
powershell -executionPolicy bypass -command "c:\windows\temp\su.ps1"
pause