# Проверяем, установлен ли Docker
if (!(Get-Command "docker" -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Docker не установлен. Установите Docker Desktop." -ForegroundColor Red
    exit 1
}

# Переход в папку server и установка зависимостей
Set-Location -Path "server"
if (-Not (Test-Path "node_modules")) {
    npm install
    Write-Host "✅ Сервер: зависимости установлены"
}
Set-Location ..

# Переход в папку client и установка зависимостей
Set-Location -Path "client"
if (-Not (Test-Path "node_modules")) {
    npm install
    Write-Host "✅ Клиент: зависимости установлены"
}
Set-Location ..

# Запуск Docker Compose
docker-compose up -d
Write-Host "✅ Проект запущен через Docker" -ForegroundColor Green