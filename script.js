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

    alert('Форма готова. Добавьте номер WhatsApp или Telegram в script.js для получения заявок.');
  });

  const animatedBlocks = document.querySelectorAll('section, .hero .container, .card, .gallery img');

  animatedBlocks.forEach((block) => block.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedBlocks.forEach((block) => observer.observe(block));
});