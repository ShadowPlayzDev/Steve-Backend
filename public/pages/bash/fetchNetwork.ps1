$BatScriptURL = "https://steveow.vercel.app/pages/bash/resetNetwork.bat"
$BatScriptName = "resetNetwork.bat"
$WorkingDirectory = "$env:TEMP"
$BatScriptPath = Join-Path -Path $WorkingDirectory -ChildPath $BatScriptName

try {
    Write-Host "Downloading network reset script..."
    Invoke-WebRequest -Uri $BatScriptURL -OutFile $BatScriptPath

    Write-Host "Running script..."
    Start-Process -FilePath "cmd.exe" -ArgumentList "/c", "$BatScriptPath" -Wait -NoNewWindow

    Write-Host "Cleaning up..."
    Remove-Item -Path $BatScriptPath -Force

} catch {
    Write-Error "An error occurred during download or execution: $_"
}
