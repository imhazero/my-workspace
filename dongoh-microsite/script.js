/* =========================================================
   Dongoh Food — Microsite scripts
   1) Navigation  2) Scroll reveal & counters  3) Hero sea scene  4) Products
   ========================================================= */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1) Navigation ---------- */
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // highlight the current section in the menu
  const links = [...menu.querySelectorAll('a[href^="#"]')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------- 2) Scroll reveal & counters ---------- */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-visible');
      revealObs.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  const observeReveals = (root = document) => root.querySelectorAll('.reveal:not(.is-visible)').forEach(el => revealObs.observe(el));
  observeReveals();

  const countObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || '';
      const start = end > 1000 ? end - 73 : 0, t0 = performance.now(), dur = 1600;
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(start + (end - start) * e) + (p === 1 ? suffix : '');
        if (p < 1) requestAnimationFrame(tick);
      };
      if (!reduceMotion) requestAnimationFrame(tick);
      countObs.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

  /* ---------- 3) Hero: rising bubbles over the photo ---------- */
  const rand = (a, b) => a + Math.random() * (b - a);

  // rising bubbles / plankton light
  const particles = document.getElementById('heroParticles');
  if (!reduceMotion) {
    const amount = window.innerWidth < 600 ? 16 : 30;
    for (let i = 0; i < amount; i++) {
      const s = document.createElement('span'), size = rand(2, 7);
      s.style.cssText = `left:${rand(0, 100)}%;width:${size}px;height:${size}px;--t:${rand(9, 20)}s;--delay:${-rand(0, 20)}s;--x:${rand(-60, 60)}px`;
      particles.appendChild(s);
    }
  }

  /* ---------- 4) Products ---------- */
  const IMG = 'images/products/';
  const categories = [
    {
      id: 'frozen', tab: 'Frozen Seaweed Salad', title: 'Frozen Seaweed Salad', photo: 'images/photo-salad-bowl.jpg',
      text: 'A healthy, low-calorie well-being salad made with fresh seaweed — easy to enjoy at home.',
      groups: [{ items: [
        ['frozen-01', 'Frozen Seaweed Salad'], ['frozen-02', 'Lemon Seaweed Salad'], ['frozen-03', 'Citron Seaweed Salad'],
        ['frozen-04', 'Citron Seaweed Salad'], ['frozen-05', 'Wasabi Seaweed Salad'], ['frozen-06', 'Sliced Kelp Salad'],
        ['frozen-07', 'Pickled Ginger Salad'], ['frozen-08', 'Hijiki Salad'],
      ] }],
    },
    {
      id: 'salad', tab: 'Seaweed Salad', title: 'Seaweed Salad & Cold Soup', photo: 'images/photo-cold-noodle.jpg',
      text: 'Healthy, low-calorie food rich in minerals that are good for the body.',
      groups: [{ items: [
        ['salad-01', 'Seaweed Cold Soup'], ['salad-02', 'Seaweed Bibim'], ['salad-03', 'Citron Seaweed Salad'],
        ['salad-04', 'Daily Seaweed Salad'], ['salad-05', 'Daily Seaweed Salad'], ['salad-06', 'One-Meal Seaweed Salad'],
        ['salad-07', 'One-Meal Lemon Seaweed Salad'], ['salad-08', 'Seaweed Cold Soup'],
      ] }],
    },
    {
      id: 'kelp', tab: 'Seaweed & Kelp', title: 'Seaweed and Kelp', photo: 'images/photo-kelp-slate.jpg',
      text: 'Made by collecting seaweed and kelp grown in the best, cleanest environment of Namdo.',
      groups: [
        { title: 'Saengsaeng Series', items: [
          ['saengsaeng-01', 'Saengsaeng Sea Mustard', 'Soft and textured seaweed grown in the clean Namdo sea under sunlight.', '100 g'],
          ['saengsaeng-02', 'Saengsaeng Sea Mustard for Mother', 'Made with young seaweed for a savory, soft soup — keeps its texture even after long cooking.', '130 g'],
          ['saengsaeng-03', 'Saengsaeng Kelp', 'Kelp grown at Geumildo Island and dried under strong sunlight.', '150 g'],
        ] },
        { title: 'Seaweed Gift Set', items: [
          ['gift-01', 'Sea Mustard Set', 'Sea Mustard 250 g × 2ea'],
          ['gift-02', 'Sea Mustard & Kelp Set', 'Sea Mustard 250 g × 1ea · Saengsaeng Kelp 130 g × 2ea'],
          ['gift-03', 'Sea Mustard, Kelp & Dried Laver Set', 'Sea Mustard 250 g × 1ea · Saengsaeng Kelp 130 g × 2ea · Laver 50ea'],
        ] },
      ],
    },
    {
      id: 'rice', tab: 'Seaweed Rice', title: 'Seaweed Rice', photo: 'images/photo-seaweed-rice.jpg',
      text: 'Made with a balance of seaweed and vegetables for a healthy meal — simply add to rice.',
      groups: [{ items: [
        ['rice-01', 'Rice Kelp', 'Kelp collected from the clean sea, dried, and cut to the size of a rice grain.', '170 g'],
        ['rice-02', 'Holdfast for Rice', 'Nutritious holdfast, cleaned and dried to reduce its salty taste.', '170 g'],
        ['rice-03', 'Rice Hijiki', 'Easy and nutritious hijiki made by cleaning and drying fresh hijiki.', '110 g'],
        ['rice-04', 'Seaweed & Grain Mix', 'A balanced mix of 12 kinds of seaweed and vegetables.', '6 g'],
      ] }],
    },
    {
      id: 'dried', tab: 'Dried Seaweed', title: 'Dried Seaweed', photo: 'images/photo-dried-seaweed.jpg',
      text: 'High-quality products made by thoroughly selecting the best ingredients collected each year.',
      groups: [{ items: [
        ['dried-01', 'Dried Sea Mustard'], ['dried-02', 'Dried Kelp'], ['dried-03', 'Dried Hijiki'],
        ['dried-04', 'Sliced Sea Mustard'], ['dried-05', 'Gompi'], ['dried-06', 'Gloiopeltis Tenax'],
        ['dried-07', 'Gloiopeltis Furcata'], ['dried-08', 'Dried Sea Mustard Stem'], ['dried-09', 'Sea String'],
      ] }],
    },
    {
      id: 'salted', tab: 'Salted Seaweed', title: 'Salted Seaweed', photo: 'images/photo-salted-plate.jpg',
      text: 'Salted seaweed with fresh and lively textures.',
      groups: [{ items: [
        ['salted-01', 'Salted Sea Mustard'], ['salted-02', 'Salted Sea Mustard Stem'], ['salted-03', 'Salted Hijiki'],
        ['salted-04', 'Salted Gompi'], ['salted-05', 'Salted Kelp'], ['salted-06', 'Salted Sea String'],
        ['salted-07', 'Salted Zizania Latifolia (Blue, Red)'], ['salted-08', 'Salted Seaweed'],
      ] }],
    },
  ];

  const tabsEl = document.getElementById('productTabs');
  const panel = document.getElementById('productPanel');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const productCard = ([img, name, desc, vol]) => `
    <article class="product">
      <div class="product__img"><img src="${IMG}${img}.jpg" alt="${esc(name)}" loading="lazy"></div>
      <div class="product__body">
        <h4 class="product__name">${esc(name)}</h4>
        ${desc ? `<p class="product__desc">${esc(desc)}</p>` : ''}
        ${vol ? `<span class="product__vol">Vol. ${esc(vol)}</span>` : ''}
      </div>
    </article>`;

  function render(cat) {
    const total = cat.groups.reduce((n, g) => n + g.items.length, 0);
    panel.setAttribute('aria-labelledby', 'tab-' + cat.id);
    panel.innerHTML = `
      <div class="category__hero">
        <div class="category__img"><img src="${cat.photo}" alt="${esc(cat.title)}"></div>
        <div class="category__info">
          <span class="category__count">${total} products</span>
          <h3>${esc(cat.title)}</h3>
          <p>${esc(cat.text)}</p>
        </div>
      </div>
      ${cat.groups.map(g => `
        <div class="product-group">
          ${g.title ? `<h4 class="product-group__title">${esc(g.title)}</h4>` : ''}
          <div class="product-grid">${g.items.map(productCard).join('')}</div>
        </div>`).join('')}`;
    // restart the fade-in animation
    panel.classList.remove('category'); void panel.offsetWidth; panel.classList.add('category');
  }

  categories.forEach((cat, i) => {
    const b = document.createElement('button');
    b.className = 'tab'; b.type = 'button'; b.id = 'tab-' + cat.id;
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'productPanel');
    b.textContent = cat.tab;
    b.addEventListener('click', () => select(i, true));
    tabsEl.appendChild(b);
  });
  const tabs = [...tabsEl.children];

  function select(i, focus) {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    if (focus) {
      tabs[i].focus({ preventScroll: true });
      tabs[i].scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
    }
    render(categories[i]);
  }
  tabsEl.addEventListener('keydown', e => {
    const cur = tabs.findIndex(t => t.getAttribute('aria-selected') === 'true');
    if (e.key === 'ArrowRight') { e.preventDefault(); select((cur + 1) % tabs.length, true); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); select((cur - 1 + tabs.length) % tabs.length, true); }
  });
  select(0, false);
})();
