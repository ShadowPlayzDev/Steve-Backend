$originalErrorActionPreference = $ErrorActionPreference
$ErrorActionPreference = "SilentlyContinue"
param (
    [int]$length = 16
)
if ($length -lt 8 -or $length -gt 128) {
    Write-Output "None or Invalid length specified. Using default length (16)."
    $length = 16
}
$characters = @('1','2','3','4','5','6','7','8','9','0',
               'a','b','c','d','e','f','g','h','i','j','k',
               'l','m','n','o','p','q','r','s','t','u','v',
               'w','x','y','z','A','B','C','D','E','F','G',
               'H','I','J','K','L','M','N','O','P','Q','R',
               'S','T','U','V','W','X','Y','Z','!','@','#',
               '$','%','^','&','*','(','','')
# Wait .5 Seconds
Start-Sleep -Milliseconds 1500
$password = -join ((1..$length) | ForEach-Object { $characters | Get-Random })
Write-Output "Generated Password: $password"
$ErrorActionPreference = $originalErrorActionPreference
