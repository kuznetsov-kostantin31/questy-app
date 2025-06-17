#!/bin/bash

# Перейти в папку с сервером и установить зависимости
cd server || { echo "Не удалось перейти в папку server"; exit 1; }
npm install
echo "✅ Сервер: зависимости установлены"

# Вернуться в корень
cd ..

# Перейти в папку с клиентом и установить зависимости
cd client || { echo "Не удалось перейти в папку client"; exit 1; }
cp -a ../.env .env
npm install
echo "✅ Клиент: зависимости установлены"

# Вернуться в корень
cd ..

# Поднять контейнеры
docker-compose build --no-cache
docker-compose up -d
echo "✅ Проект запущен через Docker"