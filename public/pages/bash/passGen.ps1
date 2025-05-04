param (
    [string]$length = 16
)

# Validate that $length is a number and within a reasonable range
if ($length -match '^\d+$' -and $length -ge 8 -and $length -le 128) {
    $length = [int]$length
} else {
    Write-Host "Invalid length specified. Using default length (16)."
    $length = 16
}

$characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
$password = -join ((Get-Random -Count $length -InputObject $characters) | ForEach-Object {$_})

Write-Host "Generated Password: $password"
