// Поведение модального окна
document.addEventListener('DOMContentLoaded', () => {

  const openBtn = document.getElementById('openCalc');
  const modal = document.getElementById('modalCalc');
  const closeBtns = document.querySelectorAll('[data-close-modal]');

  // Открытие модального окна
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Закрытие модалки по кнопкам
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Закрытие при клике по фону
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Отправка формы
  const form = document.getElementById('calcForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    // Замените SERVER_URL на URL вашего сервера
    const SERVER_URL = 'https://your-server.example.com/send-telegram';

    try {
      const res = await fetch(SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const json = await res.json();

      if (json.ok) {
        alert('Спасибо! Ваша заявка отправлена.');
        form.reset();
        modal.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        console.error(json);
        alert('Ошибка отправки. Смотрите консоль.');
      }

    } catch (err) {
      console.error(err);
      alert('Ошибка отправки. Смотрите консоль.');
    }
  });

});
