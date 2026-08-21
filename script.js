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

    const message = `Здравствуйте. Хочу записаться на биозавивку. Имя: ${name}. Телефон: ${phone}`;

    const telegramUsername = '';
    const whatsappNumber = '';

    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      return;
    }

    if (telegramUsername) {
      window.open(`https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`, '_blank');
      return;
    }

    alert('Форма работает. Добавьте номер WhatsApp или Telegram в script.js для получения заявок.');
  });
});