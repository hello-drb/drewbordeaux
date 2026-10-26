// Mobile menu
const menuButton = document.querySelector('.menu');
if (menuButton) {
  menuButton.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close' : 'Menu';
  });
  document.querySelectorAll('header nav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu';
  }));
}

// Forms post to Web3Forms (same accounts the old site used)
async function send(form) {
  const button = form.querySelector('button[type="submit"]');
  const error = form.querySelector('.form-error');
  const label = button.textContent;
  button.disabled = true;
  button.textContent = 'Sending…';
  if (error) error.classList.remove('show');
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    const data = await response.json();
    if (!data.success) throw new Error(data.message || 'Not sent');
    return true;
  } catch (e) {
    if (error) error.classList.add('show');
    return false;
  } finally {
    button.disabled = false;
    button.textContent = label;
  }
}

const contactForm = document.querySelector('form.form');
if (contactForm) {
  // Arriving from a door on another page preselects the right option.
  const type = new URLSearchParams(location.search).get('type');
  const select = contactForm.querySelector('select');
  const option = type && select && select.querySelector(`option[data-type="${type}"]`);
  if (option) select.value = option.value;
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (await send(contactForm)) document.getElementById('contact').classList.add('sent');
  });
}

const signupForm = document.querySelector('form.signup');
if (signupForm) {
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (await send(signupForm)) signupForm.innerHTML = '<span class="mono">Thanks. You’ll hear when there’s new music.</span>';
  });
}
