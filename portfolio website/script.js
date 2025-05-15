const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple form validation example (could be expanded)
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === '' || email === '' || message === '') {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill out all fields.';
    return;
  }

  // Fake sending form (no backend)
  formMessage.style.color = 'green';
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';

  form.reset();
});
