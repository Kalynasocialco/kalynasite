// ============================================
// KALYNA SOCIAL CORP. — Client grid + case study modal
// Tiles render from the markup; modal details live in CLIENTS.
// ============================================

(function () {
  var grid = document.getElementById('clientGrid');
  var modal = document.getElementById('clientModal');
  if (!grid || !modal) return;

  var ICONS = {
    instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor"/></svg>',
    facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 4h-2.2C10.1 4 9 5.4 9 7.8V10H7v3h2v7h3v-7h2.4l.4-3H12V8c0-.9.3-1.4 1.4-1.4H15V4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="2.5" stroke="currentColor" stroke-width="1.8"/><circle cx="7.2" cy="8" r="1.15" fill="currentColor"/><line x1="7.2" y1="11" x2="7.2" y2="17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M11 17v-4c0-1.4 1-2.4 2.4-2.4s2.1 1 2.1 2.4v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="11" y1="11" x2="11" y2="17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
  };

  var CLIENTS = {
    "sherwood-flooring": {
      eyebrow: "Flooring & Trades",
      name: "Sherwood Flooring",
      package: "Instagram + Facebook \u00B7 client since May",
      shot: "images/feeds/sherwood-flooring-feed.png",
      shotAlt: "Sherwood Flooring Instagram grid",
      desc: "A family-run flooring business in Sherwood Park, on board since May. We leaned into team culture, product education, and client testimonials, and the jump from a near-standing-start account was immediate.",
      stats: [
        ["+1,950%", "Facebook engagement since May"],
        ["+429%", "Facebook views since May"],
        ["+125%", "Instagram profile visits since May"],
        ["11,425", "Instagram impressions since May"]
      ],
      note: "Sherwood Flooring has generated real leads directly through their social presence.",
      links: [
        { type: "instagram", href: "https://www.instagram.com/sherwoodflooring/", label: "@sherwoodflooring" },
        { type: "facebook", href: "https://www.facebook.com/sherwoodflooringcorp/", label: "Sherwood Flooring" }
      ]
    },
    "terri-rosin": {
      eyebrow: "Real Estate",
      name: "Terri Rosin, Royal LePage Prestige Realty",
      package: "Instagram + Facebook + LinkedIn \u00B7 client since April",
      shot: "images/feeds/terri-feed.png",
      shotAlt: "Terri Rosin Instagram grid",
      desc: "Terri\u2019s a long-time Sherwood Park realtor who needed her socials to actually reflect the volume of business she does. We took over all three platforms in April, building a consistent content rhythm around listings, sold stories, and client testimonials.",
      stats: [
        ["+309%", "Instagram reach since April"],
        ["+683%", "Facebook impressions since April"],
        ["+677%", "Facebook engagement since April"],
        ["+3,141%", "LinkedIn impressions since April"],
        ["+15", "net LinkedIn followers since April"]
      ],
      note: "Since taking over all three platforms in April, Terri\u2019s presence has grown month after month: Instagram reach broke out +240.7% in the first month, Facebook impressions climbed past 21,000 in June alone, and LinkedIn impressions jumped nearly eightfold out of the gate, all backed by steady, consistent follower growth.",
      links: [
        { type: "instagram", href: "https://www.instagram.com/terrirosinrealestate/", label: "@terrirosinrealestate" },
        { type: "facebook", href: "https://www.facebook.com/terri.b.rosin/", label: "Terri Rosin" },
        { type: "linkedin", href: "https://www.linkedin.com/in/terri-rosin-69bb197a/", label: "Terri Rosin" }
      ]
    },
    "ra-mechanical": {
      eyebrow: "HVAC & Trades",
      name: "R.A. Mechanical",
      package: "Instagram + Facebook \u00B7 client since May",
      shot: "images/feeds/ra-mechanical-feed.png",
      shotAlt: "R.A. Mechanical Instagram grid",
      desc: "An HVAC company in Sherwood Park & Edmonton, on board since May. We built their content around real install photos, seasonal maintenance reminders, and behind-the-scenes footage of the team at work.",
      stats: [
        ["2,411", "Instagram reach since May"],
        ["+869%", "Facebook engagement since May"],
        ["+432%", "Facebook views since May"]
      ],
      note: "Beyond the metrics: leads booked directly from social, an opportunity to become the preferred HVAC contractor for a Fortune 500 insurance company sourced from a single Facebook post, and an install photo from their Instagram picked up by Napoleon Products for their own site.",
      links: [
        { type: "instagram", href: "https://www.instagram.com/r.a.mechanical/", label: "@r.a.mechanical" },
        { type: "facebook", href: "https://www.facebook.com/p/RA-Mechanical-61555128344082/", label: "R.A. Mechanical" }
      ]
    },
    "maintenaces": {
      eyebrow: "Property Maintenance & Trades",
      name: "MaintenAces",
      package: "Facebook \u00B7 client since May (2 months)",
      shot: "images/feeds/maintenaces-feed.png",
      shotAlt: "MaintenAces Facebook grid",
      desc: "A locally owned lawn care & snow removal business in Leduc. Just two months in, and the account has already turned into a real lead source, not just a place to post photos.",
      stats: [
        ["11", "new followers, May + June"],
        ["9,058", "views in June (+344% vs. May)"],
        ["125", "total engagements, May (+240.9% vs. April)"],
        ["89", "profile visits, May (+242.3% vs. April)"],
        ["92.9%", "of June\u2019s reach was non-followers"]
      ],
      note: "May on its own was already a strong first month: +35.3% follower growth and +242.3% more profile visits than April, with 73% of everyone reached being non-followers, brand new eyes on the business. That non-follower reach climbed even further in June, alongside a major jump in views. MaintenAces has gotten real leads directly through Facebook in this short window.",
      links: [
        { type: "facebook", href: "https://www.facebook.com/maintenaces", label: "MaintenAces" }
      ]
    },
    "countertop-expressions": {
      eyebrow: "Countertops & Cabinetry",
      name: "Countertop Expressions",
      package: "Instagram + Facebook \u00B7 client since May",
      shot: "images/clients/countertop-expressions.jpg",
      shotAlt: "Countertop Expressions Instagram grid",
      desc: "Countertops and cabinet doors for kitchens and baths, including thermofoil doors made in Alberta. On board since May.",
      stats: [],
      note: "",
      links: [
        { type: "instagram", href: "https://www.instagram.com/countertop.expressions/", label: "@countertop.expressions" },
        { type: "facebook", href: "https://www.facebook.com/countertopexpressions", label: "Countertop Expressions" }
      ]
    },
    "plumb-simple": {
      eyebrow: "Plumbing & Home Comfort",
      name: "Plumb Simple",
      package: "Instagram + Facebook \u00B7 client since July",
      shot: "images/clients/plumb-simple.jpg",
      shotAlt: "Plumb Simple Instagram grid",
      desc: "Plumbing and home comfort in Edmonton. On board since July.",
      stats: [],
      note: "",
      links: [
        { type: "instagram", href: "https://www.instagram.com/plumbsimple/", label: "@plumbsimple" },
        { type: "facebook", href: "https://www.facebook.com/profile.php?id=61578454170438", label: "Plumb Simple" }
      ]
    },
    "braden-tidball": {
      eyebrow: "Accounting",
      name: "Braden Tidball, CPA",
      package: "Instagram + Facebook \u00B7 client since July",
      shot: "images/clients/braden-tidball.jpg",
      shotAlt: "Braden Tidball Instagram grid",
      desc: "Chartered Professional Accountant helping small businesses stay on top of tax and books. On board since July.",
      stats: [],
      note: "",
      links: [
        { type: "instagram", href: "https://www.instagram.com/braden.tidball.cpa/", label: "@braden.tidball.cpa" },
        { type: "facebook", href: "https://www.facebook.com/profile.php?id=61590827292019", label: "Braden Tidball, CPA" }
      ]
    },
    "cossack-earthworks": {
      eyebrow: "Earthworks & Excavation",
      name: "Cossack Earthworks",
      package: "Facebook + LinkedIn \u00B7 client since May",
      shot: "images/clients/cossack-earthworks.png",
      shotAlt: "Cossack Earthworks social grid",
      desc: "Earthworks and excavation \u2014 grading, driveways, and site prep. On board since May.",
      stats: [],
      note: "",
      links: [
        { type: "facebook", href: "https://www.facebook.com/profile.php?id=61572262630816", label: "Cossack Earthworks" },
        { type: "linkedin", href: "https://www.linkedin.com/company/cossackearthworks", label: "Cossack Earthworks" }
      ]
    },
    "ja-web-design": {
      eyebrow: "Web Design",
      name: "J.A. Web Design",
      package: "Instagram + LinkedIn \u00B7 client for two months (July\u2013August)",
      shot: "images/clients/ja-web-design.png",
      shotAlt: "J.A. Web Design Instagram grid",
      desc: "Web design by Jeffrey Agyepong. A two-month sprint over July and August.",
      stats: [],
      note: "",
      links: [
        { type: "instagram", href: "https://www.instagram.com/j.a.webdesign/", label: "@j.a.webdesign" },
        { type: "linkedin", href: "https://www.linkedin.com/company/j-a-web-design", label: "J.A. Web Design" }
      ]
    }
  };

  var el = {
    eyebrow: document.getElementById('cmEyebrow'),
    name: document.getElementById('cmName'),
    pkg: document.getElementById('cmPackage'),
    shot: document.getElementById('cmShot'),
    desc: document.getElementById('cmDesc'),
    stats: document.getElementById('cmStats'),
    note: document.getElementById('cmNote'),
    links: document.getElementById('cmLinks'),
    close: modal.querySelector('.client-modal-close')
  };

  var lastFocus = null;

  function openModal(id) {
    var c = CLIENTS[id];
    if (!c) return;
    el.eyebrow.textContent = c.eyebrow;
    el.name.textContent = c.name;
    el.pkg.textContent = c.package;
    el.shot.src = c.shot;
    el.shot.alt = c.shotAlt;
    el.desc.textContent = c.desc;

    el.stats.innerHTML = '';
    if (c.stats && c.stats.length) {
      c.stats.forEach(function (s) {
        var d = document.createElement('div');
        d.className = 'stat';
        var strong = document.createElement('strong');
        strong.textContent = s[0];
        var span = document.createElement('span');
        span.textContent = s[1];
        d.appendChild(strong);
        d.appendChild(span);
        el.stats.appendChild(d);
      });
      el.stats.style.display = '';
    } else {
      el.stats.style.display = 'none';
    }

    if (c.note) {
      el.note.textContent = c.note;
      el.note.style.display = '';
    } else {
      el.note.style.display = 'none';
    }

    el.links.innerHTML = '';
    c.links.forEach(function (l) {
      var a = document.createElement('a');
      a.className = 'case-link';
      a.href = l.href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = ICONS[l.type] || '';
      a.appendChild(document.createTextNode(l.label));
      el.links.appendChild(a);
    });

    lastFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    el.close.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  grid.addEventListener('click', function (e) {
    var tile = e.target.closest('.client-tile');
    if (tile) openModal(tile.getAttribute('data-client'));
  });

  modal.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();
