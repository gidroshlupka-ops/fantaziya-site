<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&size=32&pause=1000&color=C9A96E&center=true&vCenter=true&width=600&lines=%D0%90%D1%82%D0%B5%D0%BB%D1%8C%D0%B5+%C2%AB%D0%A4%D0%B0%D0%BD%D1%82%D0%B0%D0%B7%D0%B8%D1%8F%C2%BB;%D0%A1%D0%B0%D0%B9%D1%82+%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%B5" alt="Typing SVG" />

<br/>

![GitHub Repo Size](https://img.shields.io/github/repo-size/gidroshlupka-ops/fantaziya-site?style=for-the-badge&color=c9a96e&labelColor=1a1a1a)
![License](https://img.shields.io/badge/license-MIT-c9a96e?style=for-the-badge&labelColor=1a1a1a)
![HTML](https://img.shields.io/badge/HTML5-c9a96e?style=for-the-badge&logo=html5&logoColor=white&labelColor=1a1a1a)
![JavaScript](https://img.shields.io/badge/JavaScript-c9a96e?style=for-the-badge&logo=javascript&logoColor=white&labelColor=1a1a1a)
![Node.js](https://img.shields.io/badge/Node.js-c9a96e?style=for-the-badge&logo=node.js&logoColor=white&labelColor=1a1a1a)

<br/>

*Элегантное решение для презентации услуг ателье с автоматической отправкой заказов в Telegram*

<br/>

[**🌐 Открыть сайт**](https://gidroshlupka-ops.github.io/fantaziya-site/) &nbsp;·&nbsp;
[**📋 Сообщить об ошибке**](../../issues) &nbsp;·&nbsp;
[**💡 Предложить идею**](../../issues)

</div>

---

## ✨ О проекте

**Ателье «Фантазия»** — современный сайт-визитка для швейного ателье. Клиент заходит на сайт, просматривает каталог услуг и галерею работ, оставляет заявку — и она моментально приходит мастеру прямо в Telegram. Никаких лишних шагов, никаких пропущенных заказов.

### Что умеет сайт

- 🪡 Презентация услуг ателье с каталогом по категориям
- 🖼️ Галерея готовых работ и материалов
- 📬 Форма заказа с отправкой в Telegram-бот
- 🔒 Безопасное хранение токенов через прокси-сервер
- 📱 Адаптивная вёрстка — корректно выглядит на любом устройстве

---

## 🏗️ Структура проекта

```
fantaziya-site/
│
├── 📄 index.html          # Главная страница — точка входа
│
├── 📁 photos/             # Медиа-архив
│   ├── works/             # Готовые работы ателье
│   ├── fabrics/           # Ткани и материалы
│   └── interior/          # Интерьер и атмосфера
│
├── 📁 catalog/            # Страницы категорий услуг
│   ├── dresses.html       # Платья
│   ├── alterations.html   # Ремонт и подгонка
│   └── ...
│
├── 📁 js/
│   └── main.js            # Логика фронтенда, работа с API
│
├── 📁 css/
│   └── style.css          # Стили
│
└── 📁 server/             # Node.js бэкенд
    ├── index.js           # Прокси-сервер
    └── package.json
```

---

## 🖼️ Работа с изображениями

> [!IMPORTANT]
> Для соблюдения чистоты путей следуйте правилу:

1. Все фото хранятся в папке `/photos/` в корне проекта
2. Если вы находитесь внутри папки `catalog/`, вызывайте фото так:

```html
<img src="../photos/my-work.jpg" alt="Описание работы">
```

3. С главной страницы `index.html`:

```html
<img src="photos/my-work.jpg" alt="Описание работы">
```

---

## 🚀 Развёртывание

### 1. Статика — GitHub Pages

```bash
# Клонировать репозиторий
git clone https://github.com/gidroshlupka-ops/fantaziya-site.git
cd fantaziya-site

# Загрузить изменения
git add .
git commit -m "update"
git push origin main
```

Затем в настройках репозитория:

**Settings** → **Pages** → **Branch: main** → **Save**

Через 1–2 минуты сайт будет доступен по адресу:
`https://gidroshlupka-ops.github.io/fantaziya-site/`

---

### 2. Бэкенд — Telegram Bot

Форма заявки отправляется через прокси-сервер — токен бота никогда не попадает на фронтенд.

**Деплой на Render / Railway:**

1. Залить папку `server/` как отдельный сервис
2. Добавить переменные окружения:

```env
TELEGRAM_BOT_TOKEN=ваш_токен_от_BotFather
TELEGRAM_CHAT_ID=ваш_chat_id
```

3. Скопировать URL сервера в `js/main.js`

**Как получить `CHAT_ID`:**
Напишите любое сообщение своему боту, затем откройте:
```
https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates
```

---

## 🛠️ Технологии

<div align="center">

| Слой | Технология |
|:----:|:-----------|
| Фронтенд | HTML5, CSS3, Vanilla JS |
| Бэкенд | Node.js, Express |
| Доставка заявок | Telegram Bot API |
| Хостинг сайта | GitHub Pages |
| Хостинг сервера | Render / Railway |

</div>

---

## 📬 Схема работы заявки

```
Клиент заполняет форму
        ↓
   js/main.js
        ↓
  Node.js сервер       ← токен хранится здесь, клиент его не видит
        ↓
  Telegram Bot API
        ↓
  Сообщение мастеру в Telegram 📲
```

---

## 📄 Лицензия

Распространяется под лицензией **MIT** — используйте свободно с указанием авторства.

---

<div align="center">

🎓 **Данный проект является курсовой работой**

<br/>

*Сайт разработан с вниманием к деталям — как и каждое изделие ателье «Фантазия»*

<br/>

⭐ Если проект понравился — поставьте звёздочку!

</div>
