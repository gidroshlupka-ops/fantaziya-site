const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if(!BOT_TOKEN || !CHAT_ID) {
  console.warn('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set in env');
}

app.post('/send-telegram', async (req, res) => {
  const body = req.body || {};
  const message =
`Новая заявка с сайта:
👤Имя: ${body.name || '-'}
📞Телефон: ${body.phone || '-'}
✉️Email: ${body.email || '-'}
📦Изделия: ${body.items || '-'}
🔗Удобный контакт: ${body.contact_method || '-'}`;
  try {
    const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ chat_id: CHAT_ID, text: message })
    });
    const json = await resp.json();
    if(json.ok) res.json({ok:true});
    else res.status(500).json({ok:false, error:json});
  } catch(err) {
    console.error(err);
    res.status(500).json({ok:false, error: err.toString()});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
