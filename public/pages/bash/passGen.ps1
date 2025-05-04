param (
    [int]$length = 16
)

if ($length -lt 8 -or $length -gt 128) {
    Write-Output "None or Invalid length specified. Using default length (16)."
    $length = 16
}
$originalErrorActionPreference = $ErrorActionPreference
$ErrorActionPreference = "SilentlyContinue"
$characters = @('1','2','3','4','5','6','7','8','9','0',
               'a','b','c','d','e','f','g','h','i','j','k',
               'l','m','n','o','p','q','r','s','t','u','v',
               'w','x','y','z','A','B','C','D','E','F','G',
               'H','I','J','K','L','M','N','O','P','Q','R',
               'S','T','U','V','W','X','Y','Z','!','@','#',
               '$','%','^','&','*')
# Wait 1.5 Seconds
Start-Sleep -Milliseconds 1500

$password = -join ((1..$length) | ForEach-Object { $characters | Get-Random })
Write-Output "Generated Password: $password"
$ErrorActionPreference = $originalErrorActionPreference
Write-Output ""
Write-Output "Choose an option:"
Write-Output "1. Copy to clipboard"
Write-Output "2. Save to plaintext file"
Write-Output "3. Save base64-encoded password to file"
Write-Output "4. Exit"

$choice = Read-Host "Enter your choice (1-4)"

switch ($choice) {
    '1' {
        Set-Clipboard -Value $password
        Write-Output "Password copied to clipboard."
    }
    '2' {
        $file = "$env:USERPROFILE\Desktop\password.txt"
        $password | Out-File -FilePath $file -Encoding utf8
        Write-Output "Saved to $file"
    }
    '3' {
        $encoded = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($password))
        $file = "$env:USERPROFILE\Desktop\password_b64.txt"
        $encoded | Out-File -FilePath $file -Encoding ascii
        Write-Output "Base64-encoded password saved to $file"
    }
    '4' {
        Write-Output "Exiting..."
    }
    Default {
        Write-Output "Invalid option '$choice'"
    }
}
