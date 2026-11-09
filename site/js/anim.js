/* anim.js — anime.js helpers for Dillard Property Services */
(function () {
  'use strict';

  function revealOnLoad(selector, opts) {
    if (typeof anime === 'undefined') return;
    const defaults = { targets: selector, opacity: [0, 1], translateY: [24, 0], duration: 700, easing: 'easeOutCubic', delay: anime.stagger(120) };
    anime(Object.assign({}, defaults, opts));
  }

  function revealOnScroll(selector, opts) {
    if (typeof anime === 'undefined') return;
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime(Object.assign({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [32, 0],
            duration: 650,
            easing: 'easeOutCubic'
          }, opts));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  function animateCount(selector, target, suffix, duration) {
    if (typeof anime === 'undefined') return;
    const el = document.querySelector(selector);
    if (!el) return;
    const obj = { val: 0 };
    anime({
      targets: obj,
      val: target,
      duration: duration || 1800,
      easing: 'easeOutQuart',
      round: 1,
      update: () => { el.textContent = obj.val.toLocaleString() + (suffix || ''); }
    });
  }

  window.DillardAnim = { revealOnLoad, revealOnScroll, animateCount };
})();
