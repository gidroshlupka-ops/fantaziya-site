// Поведение модального окна
document.addEventListener('DOMContentLoaded', () => {

  /* ============================
     МОДАЛЬНОЕ ОКНО (как было)
  ============================ */
  const openBtn = document.getElementById('openCalc');
  const modal = document.getElementById('modalCalc');
  const closeBtns = document.querySelectorAll('[data-close-modal]');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  const form = document.getElementById('calcForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(form).entries());
      const SERVER_URL = 'https://hidden-sea-4724.babakapa065.workers.dev/';

      try {
        const res = await fetch(SERVER_URL, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
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
          alert('Ошибка отправки.');
        }
      } catch (err) {
        console.error(err);
        alert('Ошибка отправки.');
      }
    });
  }


  /* ============================
    МОБИЛЬНОЕ МЕНЮ (исправлено)
============================ */
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

if (openMenu){
  openMenu.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}

if (closeMenu){
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
}

/* закрытие свайпом по фону */
document.addEventListener('click', e => {
  if (e.target === mobileMenu){
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});


  /* ============================
      ОТЗЫВЫ
  ============================ */

  const reviewForm = document.getElementById('reviewForm');
  const reviewsContainer = document.getElementById('reviewsContainer');

  // вывод отдаём в отдельную функцию
  function renderReviews(){
    if (!reviewsContainer) return;

    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');

    reviewsContainer.innerHTML = reviews.map(r => `
      <div class="review-card">
        <div class="review-name">${r.name}</div>
        <div class="review-stars">${'⭐'.repeat(r.stars)}</div>
        <div class="review-text">${r.text}</div>
      </div>
    `).join('');
  }

  // при загрузке страницы отзывов — показать отзывы
  renderReviews();

  // отправка формы
  if (reviewForm){
    reviewForm.addEventListener('submit', e => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(reviewForm).entries());

      const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
      reviews.push({
        name: data.name,
        text: data.text,
        stars: Number(data.stars)
      });

      localStorage.setItem('reviews', JSON.stringify(reviews));

      reviewForm.reset();
      renderReviews();

      alert("Спасибо за ваш отзыв!");
    });
  }

});

