// ============================================================
// KARTIK SAXENA — qvrtik portfolio
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile drawer ---------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('drawer');
  const drawerClose = document.getElementById('drawerClose');

  hamburgerBtn?.addEventListener('click', () => drawer.classList.add('open'));
  drawerClose?.addEventListener('click', () => drawer.classList.remove('open'));
  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('open'));
  });

  /* ---------- Scroll-triggered reveal ---------- */
  const revealTargets = document.querySelectorAll('.reveal, .polaroid.reveal-item');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => io.observe(el));

  /* ---------- Hero curated photos: subtle scroll parallax ---------- */
  const heroPhotos = document.querySelectorAll('.hero-photo');

  function updateHeroOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    heroPhotos.forEach(photo => {
      const speed = parseFloat(photo.dataset.speed) || 0;
      photo.style.transform = `translateY(${-scrollY * speed}px)`;
    });
  }

  window.addEventListener('scroll', updateHeroOnScroll, { passive: true });
  updateHeroOnScroll();

  /* ---------- Parallax headings (rAF loop, smooth not choppy) ---------- */
  const parallaxTargets = document.querySelectorAll('.about-heading, .contact-heading');

  function parallaxLoop() {
    const viewportCenter = window.innerHeight / 2;

    parallaxTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const distance = elCenter - viewportCenter;
      const offset = distance * 0.04;
      el.style.transform = `translateY(${offset}px)`;
    });

    requestAnimationFrame(parallaxLoop);
  }
  requestAnimationFrame(parallaxLoop);

  /* ---------- Contact form (placeholder submit handling) ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Replace this with a real submission (e.g. fetch to a form backend,
    // mailto link, or a service like Formspree) when you're ready.
    status.textContent = 'Thanks — message noted. (Wire this up to a real backend when ready.)';
    form.reset();
  });

});
