// ============================================
// CONTACT FORM API — Vercel serverless function
// Receives the contact form POST and emails it via Resend.
// The Resend API key is read from the RESEND_API_KEY env var
// (set in Vercel → Settings → Environment Variables) and is
// never exposed to the browser.
// ============================================

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, business, email, phone, interest, message } = req.body || {};

  // Mirror the required fields on the form
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // `from` MUST be an address on your verified Resend domain
        from: 'Kalyna Social Co. <hello@kalynasocial.com>',
        // Where you receive the lead
        to: ['hello@kalynasocial.com'],
        // Reply goes back to the visitor
        reply_to: email,
        subject: `New inquiry from ${name}${business ? ` (${business})` : ''}`,
        text:
          `Name: ${name}\n` +
          `Business: ${business || '—'}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone || '—'}\n` +
          `Interested in: ${interest || '—'}\n\n` +
          `Message:\n${message || '—'}`,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error('Resend error:', detail);
      return res.status(502).json({ error: 'Email service failed.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}
