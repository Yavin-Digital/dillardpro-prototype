/* One section per step, on every page.
   Desktop wheel and trackpad: one gesture, one move, then a short lock.
   A section taller than the screen scrolls inside until its end.
   Phones keep natural scrolling plus the next button.
   prefers-reduced-motion jumps instantly. */
(function () {
  'use strict';

  var NAV = 72;
  var LOCK = 850;
  var SLACK = 40;

  function reduced() {
    return document.documentElement.classList.contains('reduced') ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function phone() {
    return window.matchMedia('(max-width: 639px)').matches;
  }
  function typing(el) {
    if (!el || !el.closest) return false;
    var tag = (el.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || tag === 'iframe' || tag === 'video') return true;
    if (el.isContentEditable) return true;
    return !!el.closest('input, textarea, select, iframe');
  }

  var sections = [];
  function collect() {
    var list = [];
    var narrow = phone();
    document.querySelectorAll('[data-snap]').forEach(function (el) {
      var beats = el.querySelectorAll(':scope > .beat');
      if (narrow && beats.length) {
        Array.prototype.forEach.call(beats, function (beat) { list.push(beat); });
      } else {
        list.push(el);
      }
    });
    sections = list;
    document.documentElement.classList.toggle('snap-touch', narrow);
  }
  collect();
  if (!sections.length) return;

  var live = document.querySelector('.chapter-live');
  if (!live) {
    live = document.createElement('p');
    live.className = 'chapter-live';
    live.setAttribute('aria-live', 'polite');
    document.body.appendChild(live);
  }
  var button = document.querySelector('.chapter-next');
  if (!button) {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'chapter-next';
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v14M6 13l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    document.body.appendChild(button);
  }

  var links = Array.prototype.slice.call(document.querySelectorAll('.rail a'));
  var anim = 0;
  var locked = false;
  var announced = -1;

  function docTop(el) {
    return el.getBoundingClientRect().top + window.scrollY;
  }
  function maxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }
  function clampY(y) {
    return Math.max(0, Math.min(maxScroll(), y));
  }
  function alignY(el) {
    return clampY(docTop(el) - (phone() ? 0 : NAV));
  }
  function indexAt() {
    var marker = window.scrollY + (phone() ? 16 : NAV + 8);
    var idx = 0;
    sections.forEach(function (el, i) {
      if (docTop(el) <= marker) idx = i;
    });
    return idx;
  }
  function labelOf(el, i) {
    return el.getAttribute('aria-label') || el.getAttribute('data-chapter') || ('Section ' + (i + 1));
  }
  function paint(i) {
    var el = sections[i];
    var id = el.getAttribute('data-chapter') || el.id;
    links.forEach(function (link) {
      var on = id && link.getAttribute('data-chapter') === id;
      link.classList.toggle('is-active', on);
      if (on) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    var last = i === sections.length - 1 && atEnd(i);
    button.classList.toggle('is-top', last);
    button.setAttribute('aria-label', last ? 'Back to top' : 'Next section');
    if (announced !== i) {
      announced = i;
      live.textContent = 'Section ' + (i + 1) + ' of ' + sections.length + ', ' + labelOf(el, i);
    }
  }
  function atEnd(i) {
    var bottom = docTop(sections[i]) + sections[i].offsetHeight;
    return bottom <= window.scrollY + window.innerHeight + SLACK;
  }
  function atStart(i) {
    var edge = phone() ? window.scrollY : window.scrollY + NAV;
    return docTop(sections[i]) >= edge - SLACK;
  }
  function stop() {
    if (anim) cancelAnimationFrame(anim);
    anim = 0;
  }
  function scrollToY(y, done) {
    stop();
    y = clampY(y);
    if (reduced() || Math.abs(y - window.scrollY) < 2) {
      window.scrollTo(0, y);
      if (done) done();
      return;
    }
    var start = window.scrollY;
    var dist = y - start;
    var t0 = performance.now();
    var dur = 800;
    function frame(now) {
      var t = Math.min(1, (now - t0) / dur);
      var e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      window.scrollTo(0, start + dist * e);
      if (t < 1) anim = requestAnimationFrame(frame);
      else { anim = 0; if (done) done(); }
    }
    anim = requestAnimationFrame(frame);
  }
  function lock() {
    locked = true;
    window.setTimeout(function () { locked = false; }, reduced() ? 280 : LOCK);
  }
  function targetFor(dir) {
    var i = indexAt();
    if (dir > 0) {
      var bottom = docTop(sections[i]) + sections[i].offsetHeight;
      var remaining = bottom - (window.scrollY + window.innerHeight);
      if (remaining > Math.max(80, window.innerHeight * 0.18)) {
        return clampY(Math.min(bottom - window.innerHeight, window.scrollY + Math.round(window.innerHeight * 0.92)));
      }
      if (i < sections.length - 1) return alignY(sections[i + 1]);
      return clampY(window.scrollY);
    }
    if (!atStart(i)) {
      var top = alignY(sections[i]);
      return clampY(Math.max(top, window.scrollY - Math.round(window.innerHeight * 0.92)));
    }
    if (i > 0) {
      var prev = sections[i - 1];
      var prevTop = alignY(prev);
      var prevBottom = docTop(prev) + prev.offsetHeight;
      if (prevBottom - docTop(prev) > window.innerHeight + 80) {
        return clampY(prevBottom - window.innerHeight);
      }
      return prevTop;
    }
    return 0;
  }
  function move(dir) {
    if (locked) return;
    lock();
    var y = targetFor(dir);
    scrollToY(y, function () { paint(indexAt()); });
    paint(indexAt());
  }
  function goToSection(i) {
    i = Math.max(0, Math.min(sections.length - 1, i));
    lock();
    scrollToY(alignY(sections[i]), function () { paint(i); });
    announced = -1;
    paint(i);
  }

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (typing(e.target) || typing(document.activeElement)) return;
    var space = e.key === ' ' || e.key === 'Spacebar';
    var next = e.key === 'ArrowDown' || e.key === 'PageDown' || (space && !e.shiftKey);
    var prev = e.key === 'ArrowUp' || e.key === 'PageUp' || (space && e.shiftKey);
    var home = e.key === 'Home';
    var end = e.key === 'End';
    if (!next && !prev && !home && !end) return;
    if (space && e.target.closest && e.target.closest('button, a, [role="button"]')) return;
    e.preventDefault();
    if (home) goToSection(0);
    else if (end) goToSection(sections.length - 1);
    else move(next ? 1 : -1);
  });

  button.addEventListener('click', function () {
    var i = indexAt();
    if (i === sections.length - 1 && atEnd(i)) goToSection(0);
    else move(1);
  });

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = (link.getAttribute('href') || '').replace('#', '');
      var i = sections.findIndex(function (el) {
        return el.id === id || (el.closest && el.closest('#' + id));
      });
      if (i < 0) return;
      e.preventDefault();
      goToSection(i);
    });
  });

  window.addEventListener('wheel', function (e) {
    if (typing(e.target)) return;
    e.preventDefault();
    if (locked) return;
    if (Math.abs(e.deltaY) < 4 && Math.abs(e.deltaX) < 4) return;
    move(e.deltaY > 0 || e.deltaX > 0 ? 1 : -1);
  }, { passive: false });

  var touchY = null;
  window.addEventListener('touchstart', function (e) {
    if (!phone() || typing(e.target) || e.touches.length !== 1) { touchY = null; return; }
    touchY = e.touches[0].clientY;
  }, { passive: true });
  window.addEventListener('touchmove', function (e) {
    if (touchY == null || !phone() || typing(e.target)) return;
    if (e.cancelable) e.preventDefault();
  }, { passive: false });
  window.addEventListener('touchend', function (e) {
    if (touchY == null || !e.changedTouches.length) return;
    var dy = touchY - e.changedTouches[0].clientY;
    touchY = null;
    if (Math.abs(dy) < 42) return;
    move(dy > 0 ? 1 : -1);
  }, { passive: true });

  var tick = 0;
  window.addEventListener('scroll', function () {
    if (tick) return;
    tick = requestAnimationFrame(function () {
      tick = 0;
      paint(indexAt());
    });
  }, { passive: true });

  paint(indexAt());
})();
