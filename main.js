// year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    mainNav.style.display = expanded ? 'none' : 'block';
  });
}

// simple contact form validation + demo submit
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = form.checkValidity();
    const msgEl = document.getElementById('form-msg');
    if (!ok) {
      msgEl.textContent = 'Please fill the form correctly.';
      form.reportValidity();
      return;
    }
    // simulate successful send
    msgEl.textContent = 'Thanks — message sent (demo).';
    form.reset();
  });
}
