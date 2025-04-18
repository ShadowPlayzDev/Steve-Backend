@echo off
echo Resetting Network...
ipconfig /release > nul 2>&1
ipconfig /flushdns > nul 2>&1
ipconfig /renew > nul 2>&1
echo Renewing IP Address...
netsh winsock reset > nul 2>&1
netsh int ip reset all > nul 2>&1
echo Network reset complete. You may need to restart your computer.
echo.
choice /m "Would you like to restart now? (Y/N)" /c YN /n
if errorlevel 2 goto :NOT_restart
if errorlevel 1 goto :restart

:restart
echo Restarting system...
timeout /t 1 /nobreak > nul
echo Just a quick moment...
timeout /t 0.5 /nobreak > nul
echo Cleaning up network services...
shutdown /r /t 0
goto :eof

:NOT_restart
echo Not restarting system.
goto :eof

:eof
pause
