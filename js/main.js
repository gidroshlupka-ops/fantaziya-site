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

const API_URL = "https://reviewsdb.babakapa065.workers.dev/";


// --- Отправка отзыва ---
document.getElementById("reviewForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.name.value.trim(),
    text: form.text.value.trim(),
    stars: form.stars.value
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const json = await res.json();

  if (json.ok) {
    alert("Спасибо за отзыв!");
    form.reset();
    loadReviews();
  }
});


// --- Загрузка отзывов ---
async function loadReviews() {
  const container = document.getElementById("reviewsContainer");
  if (!container) return;

  const res = await fetch(API_URL);
  const list = await res.json();

  container.innerHTML = "";

  list.reverse().forEach(r => {
    const div = document.createElement("div");
    div.className = "review-card";
    div.innerHTML = `
      <div class="stars">${"⭐".repeat(r.stars)}</div>
      <div class="name"><b>${r.name}</b></div>
      <div class="text">${r.text}</div>
      <div class="date">${new Date(r.date).toLocaleDateString()}</div>
    `;
    container.appendChild(div);
  });
}

loadReviews();





