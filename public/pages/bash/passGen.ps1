param (
    [string]$length = 16
)
if ($length -match '^\d+$' -and $length -ge 8 -and $length -le 128) {
    $length = [int]$length
} else {
    Write-Host "None or Invalid length specified. Using default length (16)."
    $length = 16
}
$characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
$password = -join ((1..$length) | ForEach-Object { $characters | Get-Random })

Write-Output "Generated Password: $password"
