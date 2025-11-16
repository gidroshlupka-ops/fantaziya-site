# Сайт Ателье «Фантазия»

## Структура
(см. дерево в README выше)

## Как работать с изображениями
- Поместите все изображения в папку `photos/` рядом с `index.html`.
- В `catalog/` используйте путь `../photos/имя.jpg`.

## Развёртывание статики (GitHub Pages)
1. Создайте репозиторий `fantaziya-site` на GitHub.
2. Скопируйте структуру и файлы в репозиторий.
3. Commit & push.
4. В репо: Settings → Pages → Source → выберите `main` branch and / (root).
5. После пары минут сайт будет доступен по `https://<ваш_логин>.github.io/fantaziya-site/`.

## Запуск бэкенда (рекомендовано для отправки форм)
1. Разверните `server/` на Render / Vercel / Heroku.
2. Установите переменные окружения:
   - TELEGRAM_BOT_TOKEN = `<токен вашего бота>`
   - TELEGRAM_CHAT_ID = `<ваш chat_id>`
3. Деплой. Получите URL, например `https://fantaziya-form.onrender.com`.
4. В `js/main.js` замените `SERVER_URL` на `https://.../send-telegram`.

## Как узнать chat_id
- Отправьте сообщение своему боту и вызовите:
  `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
- В ответе найдите `chat.id`.

## Безопасность
- НЕ храните BOT_TOKEN в клиентском коде. Всегда использовать server endpoint.

