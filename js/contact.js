// ============================================
// CONTACT FORM — submits to /api/contact (Resend)
// Posts the form data to the serverless function, which
// sends the email. Shows the visitor real success/error states.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form-submit');
    const data = Object.fromEntries(new FormData(form).entries());

    submitBtn.disabled = true;
    note.textContent = 'Sending…';
    note.style.color = 'var(--ink-soft)';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Request failed');

      form.reset();
      note.textContent = "Thanks! We've got your message and will be in touch shortly.";
      note.style.color = 'var(--berry)';
    } catch (err) {
      note.textContent = "Something went wrong. Please email hello@kalynasocial.com directly.";
      note.style.color = 'var(--berry)';
    } finally {
      submitBtn.disabled = false;
    }
  });
});
