$uri = [System.Web.HttpUtility]::ParseQueryString([System.Uri]::EscapeUriString($MyInvocation.MyCommand.Definition))
$length = $uri["length"]
if (-not $length) {
    $length = 16
}
if ($length -match '^\d+$' -and $length -ge 8 -and $length -le 128) {
    $length = [int]$length
} else {
    Write-Output "Invalid length specified. Using default length (16)."
    $length = 16
}
# Define characters used for password
$characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
$password = -join ((1..$length) | ForEach-Object { $characters | Get-Random })

Write-Output "Generated Password: $password"
