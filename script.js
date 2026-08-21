document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const button = form?.querySelector('button');

  button?.addEventListener('click', () => {
    const name = form.querySelector('input[type="text"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();

    if (!name || !phone) {
      alert('Заполните имя и телефон');
      return;
    }

    alert('Спасибо! Заявка подготовлена. Подключите WhatsApp, Telegram или CRM для отправки данных.');
  });
});