const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const dropdown = document.querySelector('.nav-dropdown');
const dropdownToggle = document.querySelector('.nav-dropdown-toggle');

function closeDropdown() {
  if (!dropdown || !dropdownToggle) return;
  dropdown.classList.remove('open');
  dropdownToggle.setAttribute('aria-expanded', 'false');
}

if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) closeDropdown();
  });

  dropdown.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDropdown();
      dropdownToggle.focus();
    }
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    if (!open) closeDropdown();
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    closeDropdown();
  }));
}

const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
  }), { threshold: 0.08 });
  els.forEach(el => io.observe(el));
} else {
  els.forEach(el => el.classList.add('visible'));
}

// Contact-form status after the Hostinger PHP handler redirects back to the page.
const formStatus = document.getElementById('form-status');
const formState = new URLSearchParams(window.location.search).get('form');
if (formStatus && formState) {
  if (formState === 'sent') {
    formStatus.textContent = 'Thank you. Your assessment request has been sent to info@biofacilitysolutions.ca.';
    formStatus.classList.add('form-success');
  } else if (formState === 'error') {
    formStatus.innerHTML = 'We could not send the form. Please email <a href="mailto:info@biofacilitysolutions.ca">info@biofacilitysolutions.ca</a> directly.';
    formStatus.classList.add('form-error');
  }
}


// v28: make both the header brand and "Back to top" return to the true page top.
function scrollToAbsoluteTop(event) {
  if (event) event.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  if (window.location.hash === '#top') {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', scrollToAbsoluteTop);
});

const brandHomeLink = document.querySelector('.brand');
if (brandHomeLink) {
  brandHomeLink.addEventListener('click', (event) => {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    if (currentFile === 'index.html' || currentFile === '') {
      scrollToAbsoluteTop(event);
    }
  });
}
