/* Progressive enhancement: hide pre-reveal states only after html.js,
   and force everything visible if motion is reduced or JS stalls. */
(function () {
  'use strict';

  var root = document.documentElement;

  function showAll() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-in');
    });
  }

  if (root.classList.contains('reduced') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('reduced');
    showAll();
    return;
  }

  var nodes = document.querySelectorAll('.reveal');
  if (!nodes.length || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    nodes.forEach(function (el) { io.observe(el); });
  }

  window.setTimeout(function () {
    root.classList.add('reveal-fallback');
    showAll();
  }, 1500);
})();
