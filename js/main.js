// ============================================
// KALYNA SOCIAL CO. — Shared site behavior
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initHeaderShrink();
  markActiveNav();
  initStatRotator();
});

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function initHeaderShrink() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 40) header.style.padding = '0.7rem var(--pad)';
    else header.style.padding = '1.1rem var(--pad)';
    lastY = y;
  }, { passive: true });
}

function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.classList.contains('nav-cta')) return;
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

function initStatRotator() {
  const card = document.querySelector('.stat-rotator');
  if (!card) return;

  const stats = [
    { client: 'R.A. Mechanical', platform: 'Facebook', value: '+869%', label: 'engagement growth since May', avatar: 'images/avatars/ra-mechanical.jpg' },
    { client: 'Sherwood Flooring', platform: 'Facebook', value: '+1,950%', label: 'engagement growth since May', avatar: 'images/avatars/sherwood-flooring.jpg' },
    { client: 'Terri Rosin', platform: 'Instagram', value: '+309%', label: 'reach growth since April', avatar: 'images/avatars/terri.jpg' },
    { client: 'MaintenAces', platform: 'Facebook', value: '+344%', label: 'views growth, June vs. May', avatar: 'images/avatars/maintenaces.jpg' },
  ];

  const avatarEl = card.querySelector('.hc-avatar img');
  const clientEl = card.querySelector('.hc-client');
  const platformEl = card.querySelector('.hc-platform');
  const statEl = card.querySelector('.hc-big-stat');
  const labelEl = card.querySelector('.hc-big-label');
  const dots = card.querySelectorAll('.stat-dot');

  let i = 0;

  function render(index) {
    avatarEl.src = stats[index].avatar;
    clientEl.textContent = stats[index].client;
    platformEl.textContent = stats[index].platform;
    statEl.textContent = stats[index].value;
    labelEl.textContent = stats[index].label;
    dots.forEach((d, di) => d.classList.toggle('active', di === index));
  }

  setInterval(() => {
    card.classList.add('fading');
    setTimeout(() => {
      i = (i + 1) % stats.length;
      render(i);
      card.classList.remove('fading');
    }, 450);
  }, 3400);
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}
