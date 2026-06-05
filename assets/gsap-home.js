(function () {
  if (typeof gsap === 'undefined') return;
  if (window.__pageKey !== 'home') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  // ── 1. Screenshots: sticky carousel + magnify-in ──────────
  // Sticky approach: a tall "track" drives scroll progress; the card
  // sticks via CSS — no pin:true so no snap-to-top jump.
  var section = document.querySelector('.app__screenshots');
  var card    = document.querySelector('.screenshots-card');
  var wrapper = document.querySelector('.app__screenshots-wrapper');
  var list    = document.querySelector('.app__screenshots-list');
  var items   = gsap.utils.toArray('.app__screenshots-list a');

  if (section && card && wrapper && list && items.length) {
    items.forEach(function (el) { el.classList.remove('scroll-reveal'); });
    // Start all hidden; ticker will correct item1+ on first frame
    gsap.set(items, { scale: 0.3, opacity: 0, transformOrigin: 'center center' });
    wrapper.style.overflow = 'hidden';

    var scrollDist = Math.max(0, list.scrollWidth - wrapper.clientWidth);

    if (scrollDist > 0) {
      // Build sticky scaffold
      var track  = document.createElement('div');
      var sticky = document.createElement('div');
      track.className  = 'screenshots-track';
      sticky.className = 'screenshots-sticky';
      section.insertBefore(track, card);
      track.appendChild(sticky);
      sticky.appendChild(card);

      function setHeight() {
        scrollDist = Math.max(0, list.scrollWidth - wrapper.clientWidth);
        track.style.height = (window.innerHeight + scrollDist) + 'px';
      }
      setHeight();

      // Scrubbed horizontal drive
      gsap.to(list, {
        x: -scrollDist,
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
          onRefresh: setHeight,
        }
      });

      // Per-frame: scale each screenshot by how much of it is visible in the wrapper.
      // Using getBoundingClientRect so transforms are already factored in.
      function updateItems() {
        var wRect = wrapper.getBoundingClientRect();
        var cw    = wRect.width;
        items.forEach(function (item) {
          var r       = item.getBoundingClientRect();
          var iLeft   = r.left  - wRect.left;
          var iRight  = r.right - wRect.left;
          var visible = Math.max(0, Math.min(iRight, cw) - Math.max(iLeft, 0));
          // Reach full scale once 70 % of the item is visible
          var t = Math.max(0, Math.min(1, visible / (r.width * 0.70)));
          gsap.set(item, { scale: 0.3 + 0.7 * t, opacity: t });
        });
      }

      // Initialise on first frame (layout stable), then track every frame
      requestAnimationFrame(function () {
        updateItems();
        gsap.ticker.add(updateItems);
      });
    } else {
      // All screenshots fit — stagger-magnify in on scroll
      gsap.fromTo(items,
        { scale: 0.3, opacity: 0 },
        {
          scale: 1, opacity: 1, stagger: 0.07,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.8,
          }
        }
      );
    }

    // Section title animates in before sticky kicks in
    var scrTitle = section.querySelector('.app__section-title');
    if (scrTitle) {
      scrTitle.classList.remove('scroll-reveal');
      gsap.fromTo(scrTitle,
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            end: 'top 30%',
            scrub: 0.8,
          }
        }
      );
    }
  }

  // ── 2. Section card expand reveals (scrub → reverses on scroll up) ──
  [
    { sel: '.app__fulldescription', fromY: 72, fromScale: 0.95 },
    { sel: '.home-cta',            fromY: 72, fromScale: 0.90 },
  ].forEach(function (cfg) {
    var el = document.querySelector(cfg.sel);
    if (!el) return;
    el.classList.remove('scroll-reveal');
    el.querySelectorAll('.scroll-reveal').forEach(function (child) {
      child.classList.remove('scroll-reveal');
      child.style.opacity   = '1';
      child.style.transform = 'none';
    });
    gsap.fromTo(el,
      { y: cfg.fromY, opacity: 0, scale: cfg.fromScale, transformOrigin: 'center top' },
      {
        y: 0, opacity: 1, scale: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'top 18%',
          scrub: 0.8,
        }
      }
    );
  });
})();
