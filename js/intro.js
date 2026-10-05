// ============================================
// INTRO ANIMATION CONTROLLER
// A scatter of berries rain down across the whole screen,
// bounce a couple times with cartoon-ish physics, and
// settle — then the Kalyna wordmark fades in on top.
// Berries falling over the center bounce off an invisible
// "ceiling" just above the wordmark, piling softly instead
// of covering the logo. Runs once per browser session
// (sessionStorage).
// ============================================

(function () {
  const SESSION_KEY = 'kalynaIntroPlayed';
  const screen = document.getElementById('intro-screen');
  if (!screen) return;

  const alreadyPlayed = sessionStorage.getItem(SESSION_KEY);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (alreadyPlayed || reducedMotion) {
    screen.remove();
    document.body.classList.add('intro-done');
    return;
  }

  document.body.classList.add('intro-active');
  document.body.style.overflow = 'hidden';

  const field = screen.querySelector('.berry-field');
  const wordmark = screen.querySelector('.intro-wordmark');
  const skipBtn = screen.querySelector('.intro-skip');

  // Brand berry tones to pick from
  const COLORS = [
    'var(--berry)',
    'var(--berry-deep)',
    'var(--berry-bright)',
    'var(--rose)',
  ];

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isSmall = vw < 600;
  const COUNT = isSmall ? 48 : 110;

  const berries = [];

  for (let i = 0; i < COUNT; i++) {
    const berry = document.createElement('div');
    berry.className = 'fall-berry';

    const size = Math.round(18 + Math.random() * (isSmall ? 30 : 46)); // 18–48px / 18–64px
    // Berries rain across the full width. In the center band (where the
    // wordmark will pop in) they bounce off an invisible "ceiling" just
    // above the logo instead of falling through it.
    const halfBand = isSmall ? 28 : 22; // vw each side of center
    const startX = 2 + Math.random() * 92;
    const inCenter = startX > 50 - halfBand && startX < 50 + halfBand;
    const ceiling = vh / 2 - (isSmall ? 120 : 150); // just above the wordmark
    // NOTE: berries start at top:-120px, so final berry top = floorY - 120.
    let floorY;
    if (inCenter) {
      // Soft mound above the logo: dense at the ceiling, feathering upward
      const restTop = ceiling - Math.pow(Math.random(), 1.5) * 200;
      floorY = 120 + restTop;
    } else {
      // Anywhere from the very top to the very bottom of the screen
      floorY = 120 + Math.random() * Math.max(0, vh - size);
    }
    const drift = (Math.random() - 0.5) * 90; // px horizontal scatter while falling
    const dur = 1.15 + Math.random() * 0.55;
    const delay = Math.random() * 0.55;
    const bounce1 = 36 + Math.random() * 34;
    const bounce2 = bounce1 * 0.42;
    const bounce3 = bounce1 * 0.16;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    berry.style.setProperty('--bsize', size + 'px');
    berry.style.setProperty('--bx', startX + 'vw');
    berry.style.setProperty('--bfloor', floorY + 'px');
    berry.style.setProperty('--bdrift', drift + 'px');
    berry.style.setProperty('--bdur', dur + 's');
    berry.style.setProperty('--bdelay', delay + 's');
    berry.style.setProperty('--bbounce1', bounce1 + 'px');
    berry.style.setProperty('--bbounce2', bounce2 + 'px');
    berry.style.setProperty('--bbounce3', bounce3 + 'px');
    berry.style.setProperty('--bcolor', color);

    const shine = document.createElement('div');
    shine.className = 'shine';
    berry.appendChild(shine);

    field.appendChild(berry);
    berries.push({ el: berry, dur, delay });
  }

  // Find the berry that settles last, so we can time the wordmark reveal off it
  const lastSettle = berries.reduce((max, b) => Math.max(max, b.dur + b.delay), 0);

  function finish() {
    sessionStorage.setItem(SESSION_KEY, '1');
    screen.classList.add('hidden');
    document.body.classList.add('intro-done');
    document.body.style.overflow = '';
    setTimeout(() => screen.remove(), 700);
  }

  function playSequence() {
    // 1. Berries drop & bounce in, all starting near-simultaneously (their own randomized delay handles stagger)
    berries.forEach(b => b.el.classList.add('drop'));

    // 2. Logo fades in once most berries have settled
    const wordmarkAt = Math.min(lastSettle * 1000 * 0.72, 1500);
    setTimeout(() => {
      wordmark.classList.add('show');
      field.classList.add('settle');
    }, wordmarkAt);

    // 3. Hold a beat, then dismiss
    setTimeout(finish, wordmarkAt + 1350);
  }

  skipBtn.addEventListener('click', finish);
  requestAnimationFrame(() => requestAnimationFrame(playSequence));
})();
