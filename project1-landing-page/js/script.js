const menuToggle = document.getElementById('menuToggle');
const darkToggle = document.getElementById('darkToggle');
const siteNav = document.getElementById('siteNav');
const navLinks = document.querySelectorAll('.nav-list a');
const ctaBtn = document.getElementById('ctaBtn');
const contactForm = document.getElementById('contactForm');

// Mobile menu toggle
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.classList.toggle('active');
  siteNav.classList.toggle('show');
});

// Dark mode toggle
const applyTheme = (theme) => {
  document.body.classList.toggle('dark', theme === 'dark');
  if (darkToggle) {
    darkToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    darkToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }
};

const storedTheme = localStorage.getItem('nova-flow-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(storedTheme);

darkToggle?.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('nova-flow-theme', nextTheme);
});

// Smooth scrolling for nav and buttons
const smoothLinks = [...navLinks, ...document.querySelectorAll('a[href^="#"]')];
smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (siteNav.classList.contains('show')) {
        siteNav.classList.remove('show');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// CTA button interaction
ctaBtn?.addEventListener('click', () => {
  ctaBtn.textContent = 'Launching...';
  ctaBtn.disabled = true;
  setTimeout(() => {
    ctaBtn.textContent = 'Start free trial';
    ctaBtn.disabled = false;
  }, 900);
});

// Simple form validation
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formFeedback = document.getElementById('formFeedback');

  let valid = true;
  const invalidFields = [];

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formFeedback.textContent = '';
  name.setAttribute('aria-invalid', 'false');
  email.setAttribute('aria-invalid', 'false');
  message.setAttribute('aria-invalid', 'false');

  if (!name.value.trim()) {
    nameError.textContent = 'Please enter your name.';
    name.setAttribute('aria-invalid', 'true');
    invalidFields.push(name);
    valid = false;
  }
  if (!email.value.trim()) {
    emailError.textContent = 'Please enter your email.';
    email.setAttribute('aria-invalid', 'true');
    invalidFields.push(email);
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    email.setAttribute('aria-invalid', 'true');
    invalidFields.push(email);
    valid = false;
  }
  if (!message.value.trim()) {
    messageError.textContent = 'Please add a brief message.';
    message.setAttribute('aria-invalid', 'true');
    invalidFields.push(message);
    valid = false;
  }

  if (!valid) {
    formFeedback.textContent = 'Please fix the errors above before submitting.';
    formFeedback.style.color = '#ba1f1f';
    if (invalidFields.length > 0) {
      invalidFields[0].focus();
    }
    return;
  }

  formFeedback.style.color = '#196f3d';
  formFeedback.textContent = 'Thanks! Your message has been sent successfully.';
  contactForm.reset();
});

// Sticky header shadow on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 12) {
    document.querySelector('.site-header')?.classList.add('scrolled');
  } else {
    document.querySelector('.site-header')?.classList.remove('scrolled');
  }
});

// Close mobile menu with Escape key and keep keyboard accessible
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (siteNav?.classList.contains('show')) {
      siteNav.classList.remove('show');
      menuToggle?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.focus();
    }
  }
});

// Section active state using IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav-list a[href="#${id}"]`);
    if (entry.isIntersecting) {
      link?.classList.add('active');
    } else {
      link?.classList.remove('active');
    }
  });
}, { threshold: 0.35 });
sections.forEach((section) => sectionObserver.observe(section));

// Scroll reveal effect (optional subtle)
const revealElements = document.querySelectorAll('.card, .about-content, .hero-content, .hero-visual');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
revealElements.forEach((el) => revealObserver.observe(el));
