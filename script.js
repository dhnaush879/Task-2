const form = document.getElementById('contactForm');
const error = document.getElementById('error');

form.addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === '' || email === '') {
    error.textContent = 'Please fill in all required fields.';
    e.preventDefault();
  } else if (!email.match(emailPattern)) {
    error.textContent = 'Please enter a valid email address.';
    e.preventDefault();
  } else {
    error.textContent = '';
  }
});