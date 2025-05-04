Write-Host "  `n"
Write-Host "=== System Information ===`n"

Write-Host "OS:" (Get-CimInstance Win32_OperatingSystem).Caption
Write-Host "OS Version:" (Get-CimInstance Win32_OperatingSystem).Version
Write-Host "CPU:" (Get-CimInstance Win32_Processor).Name
Write-Host "RAM:" ((Get-CimInstance Win32_PhysicalMemory | Measure-Object -Property Capacity -Sum).Sum / 1GB).ToString("0.00") + " GB"
Write-Host "GPU:" (Get-CimInstance Win32_VideoController).Name
Write-Host "Disk Drives:" (Get-CimInstance Win32_DiskDrive | ForEach-Object { $_.Model + " - " + [math]::Round($_.Size / 1GB) + " GB" })
Write-Host "Motherboard:" (Get-CimInstance Win32_BaseBoard | ForEach-Object { $_.Manufacturer + " " + $_.Product })
Write-Host "System Model:" (Get-CimInstance Win32_ComputerSystem).Model
Write-Host "Serial Number:" (Get-CimInstance Win32_BIOS).SerialNumber
Write-Host "Uptime:" ((Get-CimInstance Win32_OperatingSystem).LastBootUpTime)
Write-Host "IP Address:" (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -notlike '169.*'} | Select-Object -ExpandProperty IPAddress)
