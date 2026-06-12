/* Drive Test homepage — interactions & GSAP animations */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ── Description expand/collapse (no GSAP needed) ─────── */
  var descCard = document.querySelector('.desc-card');
  var descToggle = document.querySelector('.desc-toggle');
  if (descCard && descToggle) {
    descToggle.addEventListener('click', function () {
      var open = descCard.classList.toggle('desc--open');
      descToggle.classList.toggle('is-open', open);
      descToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open) descCard.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  }

  /* ── Screenshot tilt on hover ─────────────────────────── */
  if (finePointer && !reduced) {
    var MAX_TILT = 10;
    document.querySelectorAll('.app__screenshots-list a').forEach(function (card) {
      var img = card.querySelector('.app__screenshot');
      if (!img) return;
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var rx = -((e.clientY - r.top) / r.height - 0.5) * 2 * MAX_TILT;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 2 * MAX_TILT;
        img.style.transform = 'perspective(700px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(1.05)';
        img.style.transition = 'transform 0.08s ease, box-shadow 0.3s ease';
      });
      card.addEventListener('mouseleave', function () {
        img.style.transform = 'perspective(700px) rotateX(0) rotateY(0) scale(1)';
        img.style.transition = 'transform 0.45s ease, box-shadow 0.3s ease';
      });
    });
  }

  /* ── Feature card cursor spotlight ────────────────────── */
  if (finePointer) {
    document.querySelectorAll('.feature-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--cx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--cy', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ── Hero mouse spotlight ─────────────────────────────── */
  var hero = document.querySelector('.hero');
  var spot = document.querySelector('.hero__spot');
  if (hero && spot && finePointer && !reduced) {
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      spot.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      spot.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  }

  /* ── Live app modal (PWA in phone mockup) ─────────────── */
  (function () {
    var modal = document.getElementById('app-modal');
    var openBtn = document.getElementById('phone-demo-open');
    var closeBtn = document.getElementById('app-modal-close');
    if (!modal || !openBtn || !closeBtn) return;
    var screen = modal.querySelector('.app-modal__screen');
    var frame = modal.querySelector('iframe');
    var phoneEl = modal.querySelector('.app-modal__phone');

    frame.addEventListener('load', function () {
      if (frame.src) screen.classList.add('is-loaded');
    });

    function openModal() {
      if (!frame.src) frame.src = frame.getAttribute('data-src');
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
      if (typeof gsap !== 'undefined' && !reduced) {
        gsap.fromTo(phoneEl,
          { scale: 0.78, y: 50, autoAlpha: 0 },
          { scale: 1, y: 0, autoAlpha: 1, duration: 0.55, ease: 'back.out(1.4)' });
      }
    }
    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      openBtn.focus();
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  })();

  /* ── Dock fallback (plain scroll listener) ────────────── */
  var dock = document.getElementById('download-dock');
  function dockFallback() {
    if (!dock) return;
    var downloadSec = document.querySelector('.download');
    var ticking = false;
    function update() {
      ticking = false;
      var past = window.scrollY > window.innerHeight * 0.85;
      var nearEnd = downloadSec &&
        downloadSec.getBoundingClientRect().top < window.innerHeight * 0.75;
      dock.classList.toggle('dock--visible', past && !nearEnd);
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ── GSAP ─────────────────────────────────────────────── */
  if (typeof gsap === 'undefined' || reduced) {
    dockFallback();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* Hero entrance timeline */
  var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.h-char', { yPercent: 115, duration: 0.9, stagger: 0.045 }, 0.1)
    .from('.hero__eyebrow', { y: -16, autoAlpha: 0, duration: 0.6 }, 0.35)
    .from('.hero__tagline', { y: 24, autoAlpha: 0, duration: 0.7 }, 0.65)
    .from('.hero__badges .badge', { y: 22, autoAlpha: 0, duration: 0.55, stagger: 0.09 }, 0.8)
    .from('.hero__stats .stat', { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, 0.95)
    .from('.hero__visual', { y: 60, autoAlpha: 0, rotate: 9, duration: 1.1, ease: 'power2.out' }, 0.45)
    .from('.hero__scroll', { autoAlpha: 0, duration: 0.6 }, 1.4);

  /* Stat counters */
  document.querySelectorAll('.stat__num[data-count]').forEach(function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var numSpan = el.querySelector('.num');
    if (!numSpan || isNaN(target)) return;
    var obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.6,
      delay: 1.0,
      ease: 'power2.out',
      onUpdate: function () { numSpan.textContent = Math.round(obj.v); }
    });
  });

  /* Hero phone parallax against mouse */
  var phone = document.querySelector('.phone');
  if (phone && finePointer) {
    var px = gsap.quickTo(phone, 'x', { duration: 0.8, ease: 'power3.out' });
    var py = gsap.quickTo(phone, 'y', { duration: 0.8, ease: 'power3.out' });
    hero.addEventListener('mousemove', function (e) {
      var nx = (e.clientX / window.innerWidth - 0.5) * 2;
      var ny = (e.clientY / window.innerHeight - 0.5) * 2;
      px(nx * -14);
      py(ny * -10);
    });
  }

  /* Hero content drifts up as you leave it */
  gsap.to('.hero__inner', {
    yPercent: -8,
    autoAlpha: 0.25,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
  });

  /* Magnetic store badges (desktop) */
  if (finePointer) {
    document.querySelectorAll('.hero__badges .badge, .store-buttons .store-btn').forEach(function (b) {
      var bx = gsap.quickTo(b, 'x', { duration: 0.4, ease: 'power3.out' });
      var by = gsap.quickTo(b, 'y', { duration: 0.4, ease: 'power3.out' });
      b.addEventListener('mousemove', function (e) {
        var r = b.getBoundingClientRect();
        bx((e.clientX - (r.left + r.width / 2)) * 0.3);
        by((e.clientY - (r.top + r.height / 2)) * 0.3);
      });
      b.addEventListener('mouseleave', function () { bx(0); by(0); });
    });
  }

  /* ── Screenshots: sticky horizontal scrub carousel ────── */
  (function () {
    var section = document.querySelector('.app__screenshots');
    var card = document.querySelector('.screenshots-card');
    var wrapper = document.querySelector('.app__screenshots-wrapper');
    var list = document.querySelector('.app__screenshots-list');
    var items = gsap.utils.toArray('.app__screenshots-list a');
    var progress = document.querySelector('.carousel-progress span');
    if (!section || !card || !wrapper || !list || !items.length) return;

    gsap.set(items, { scale: 0.35, opacity: 0, transformOrigin: 'center center' });
    wrapper.style.overflow = 'hidden';

    var scrollDist = Math.max(0, list.scrollWidth - wrapper.clientWidth);

    if (scrollDist > 0) {
      var track = document.createElement('div');
      var sticky = document.createElement('div');
      track.className = 'screenshots-track';
      sticky.className = 'screenshots-sticky';
      section.insertBefore(track, card);
      track.appendChild(sticky);
      sticky.appendChild(card);

      function setHeight() {
        scrollDist = Math.max(0, list.scrollWidth - wrapper.clientWidth);
        track.style.height = (window.innerHeight + scrollDist) + 'px';
      }
      setHeight();

      gsap.to(list, {
        x: function () { return -scrollDist; },
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
          onRefresh: setHeight,
          onUpdate: function (self) {
            if (progress) gsap.set(progress, { scaleX: self.progress });
          }
        }
      });

      function updateItems() {
        var wRect = wrapper.getBoundingClientRect();
        var cw = wRect.width;
        items.forEach(function (item) {
          var r = item.getBoundingClientRect();
          var iLeft = r.left - wRect.left;
          var iRight = r.right - wRect.left;
          var visible = Math.max(0, Math.min(iRight, cw) - Math.max(iLeft, 0));
          var t = Math.max(0, Math.min(1, visible / (r.width * 0.7)));
          gsap.set(item, { scale: 0.35 + 0.65 * t, opacity: t });
        });
      }
      requestAnimationFrame(function () {
        updateItems();
        gsap.ticker.add(updateItems);
      });
    } else {
      gsap.to(items, {
        scale: 1, opacity: 1, stagger: 0.07,
        scrollTrigger: { trigger: section, start: 'top 80%', end: 'top 25%', scrub: 0.8 }
      });
    }
  })();

  /* ── Section heads reveal ─────────────────────────────── */
  gsap.utils.toArray('.section__head').forEach(function (head) {
    gsap.from(head.children, {
      y: 36, autoAlpha: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: head, start: 'top 82%' }
    });
  });

  /* Feature cards stagger in */
  var featCards = gsap.utils.toArray('.feature-card');
  if (featCards.length) {
    gsap.from(featCards, {
      y: 56, autoAlpha: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.features__grid', start: 'top 80%' }
    });
  }

  /* Description + CTA cards expand in (scrubbed, reverses) */
  ['.desc-card', '.home-cta'].forEach(function (sel) {
    var el = document.querySelector(sel);
    if (!el) return;
    gsap.fromTo(el,
      { y: 70, autoAlpha: 0, scale: 0.95, transformOrigin: 'center top' },
      {
        y: 0, autoAlpha: 1, scale: 1,
        scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 35%', scrub: 0.8 }
      });
  });

  /* Download section reveal */
  var dl = document.querySelector('.download__inner');
  if (dl) {
    gsap.from(dl.children, {
      y: 44, autoAlpha: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.download', start: 'top 70%' }
    });
  }

  /* ── Floating dock visibility ─────────────────────────── */
  if (dock) {
    ScrollTrigger.create({
      start: function () { return window.innerHeight * 0.85; },
      end: 'max',
      onUpdate: function () {
        var downloadSec = document.querySelector('.download');
        var nearEnd = downloadSec &&
          downloadSec.getBoundingClientRect().top < window.innerHeight * 0.75;
        dock.classList.toggle('dock--visible', !nearEnd);
      },
      onEnter: function () { dock.classList.add('dock--visible'); },
      onLeaveBack: function () { dock.classList.remove('dock--visible'); }
    });
  }
})();
