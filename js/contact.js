// ============================================
// CONTACT FORM — decorative submit handler
// No backend is wired up yet. This gives the user
// feedback and prevents an actual page submission/reload.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = "This form isn't connected yet. Please email hello@kalynasocial.com directly for now.";
    note.style.color = 'var(--berry)';
  });
});
