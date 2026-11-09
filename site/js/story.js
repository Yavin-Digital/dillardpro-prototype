/* Desktop scrollytelling: sticky scenes are CSS. This file scales and
   fades images, and drives the chapter rail. Phones and reduced-motion
   skip it and keep the stacked document. */
(function () {
  'use strict';

  var root = document.documentElement;
  if (root.classList.contains('reduced')) return;
  if (!window.matchMedia('(min-width: 1024px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('reduced');
    return;
  }
  if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  reduce.addEventListener('change', function () {
    if (reduce.matches) window.location.reload();
  });

  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', function () {
    gsap.utils.toArray('.js-zoom').forEach(function (img, index) {
      var chapter = img.closest('.chapter') || img.parentElement;
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: chapter,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.4,
          invalidateOnRefresh: true
        }
      });
      if (index === 0) {
        tl.fromTo(img, { scale: 1.1 }, { scale: 1, duration: 0.22, ease: 'none' });
      } else {
        tl.fromTo(img, { scale: 1.16, opacity: 0.62 }, { scale: 1, opacity: 1, duration: 0.28, ease: 'none' });
      }
      tl.to(img, { scale: 1.06, duration: 0.72, ease: 'none' });
    });

    root.classList.add('story-ready');
    ScrollTrigger.refresh();
  });
})();
