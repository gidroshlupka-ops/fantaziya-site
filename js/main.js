// === Modal behavior ===
document.addEventListener('DOMContentLoaded', ()=> {

  const openBtn = document.getElementById('openCalc');
  const modal = document.getElementById('modalCalc');
  const closeBtns = document.querySelectorAll('[data-close-modal]');

  if(openBtn) {
    openBtn.addEventListener('click', ()=> { 
      modal.classList.add('open'); 
      document.body.style.overflow='hidden'; 
    });
  }

  closeBtns.forEach(btn => 
    btn.addEventListener('click', ()=> { 
      modal.classList.remove('open'); 
      document.body.style.overflow=''; 
    })
  );

  if(modal) {
    modal.addEventListener('click', (e)=> { 
      if(e.target === modal){
        modal.classList.remove('open'); 
        document.body.style.overflow=''; 
      }
    });
  }


  // === Telegram form submit ===
  const form = document.getElementById('calcForm');
  if(!form) return;

  // ⬇⬇⬇ ВСТАВЛЯЕШЬ СВОИ ДАННЫЕ ТУТ
  const BOT_TOKEN = "8536272545:AAEYGZGwaZ3Huv3I76kq2F2_i7_qgGv-HrE"; 
  const CHAT_ID = "5631390959";        
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const formData = new FormData(form);
    let message = "<b>Новая заявка с сайта</b>\n\n";

    formData.forEach((value, key) => {
      message += `<b>${key}:</b> ${value}\n`;
    });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML"
        })
      });

      if (response.ok) {
        alert("Спасибо! Ваша заявка отправлена.");
        form.reset();
        modal.classList.remove('open');
        document.body.style.overflow='';
      } else {
        console.error(await response.text());
        alert("Ошибка отправки. Подробности в консоли.");
      }

    } catch (err) {
      console.error(err);
      alert("Ошибка соединения. Проверь консоль.");
    }
  });
});
