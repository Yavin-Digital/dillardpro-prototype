(function () {
  const S = window.SITE;
  if (!S) return;

  const navLinks = S.nav.map(function (n) {
    return '<a href="' + n.href + '" class="dp-nav-link">' + n.label + '</a>';
  }).join('');

  const navEl = document.getElementById('dp-nav');
  if (navEl) {
    navEl.innerHTML =
      '<nav class="dp-nav">' +
        '<div class="dp-nav-inner">' +
          '<a href="./index.html" class="dp-logo">' +
            '<img src="./img/logo.jpg" alt="Dillard Property Services logo">' +
            '<div class="dp-wordmark"><span class="dp-wordmark-main">Dillard</span><span class="dp-wordmark-sub">Property Services</span></div>' +
          '</a>' +
          '<button class="dp-toggle" type="button" aria-label="Menu" aria-expanded="false" onclick="var open=document.getElementById(\'dp-menu\').classList.toggle(\'is-open\');this.setAttribute(\'aria-expanded\', open?\'true\':\'false\')">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
          '<div class="dp-menu" id="dp-menu">' +
            navLinks +
            '<a href="./cheat-sheet.html" class="dp-nav-cta">Get the Cheat Sheet</a>' +
          '</div>' +
        '</div>' +
      '</nav>';
  }

  const footEl = document.getElementById('dp-footer');
  if (footEl) {
    footEl.innerHTML =
      '<footer class="dp-footer" data-snap aria-label="Footer">' +
        '<div class="dp-footer-grid">' +
          '<div class="dp-footer-brand">' +
            '<img src="./img/logo.jpg" alt="Dillard logo">' +
            '<div class="dp-footer-name">Dillard Property Services</div>' +
            '<p class="dp-footer-sub">Finding the right apartment in Austin, DFW, Houston and San Antonio since 2004.<br><br>512-640-2443<br>masterleads@dillardpropertyservices.com</p>' +
          '</div>' +
          '<div>' +
            '<div class="dp-footer-label">Navigate</div>' +
            S.nav.map(function (n) { return '<a href="' + n.href + '" class="dp-footer-link">' + n.label + '</a>'; }).join('') +
          '</div>' +
          '<div>' +
            '<div class="dp-footer-label">Metros</div>' +
            S.metros.map(function (m) { return '<a href="./availabilities.html#' + m.id + '" class="dp-footer-link">' + m.name + '</a>'; }).join('') +
            '<div style="margin-top:20px;"><a href="' + S.zillowReviews + '" target="_blank" rel="noopener" class="dp-footer-link" style="color:var(--gold);font-weight:600;">100+ Reviews on Zillow &rarr;</a></div>' +
          '</div>' +
        '</div>' +
        '<div class="dp-footer-bar">' +
          '<span>&copy; ' + new Date().getFullYear() + ' Dillard Property Services &nbsp;&middot;&nbsp; All rights reserved &nbsp;&middot;&nbsp; Texas Licensed Real Estate</span>' +
          '<span>Built by <a href="https://thetribemaker.com" target="_blank" rel="noopener">The Tribe Maker</a></span>' +
        '</div>' +
      '</footer>';
  }

  document.querySelectorAll('.dp-nav-link').forEach(function (a) {
    const href = a.getAttribute('href').replace('./', '');
    if (location.pathname.endsWith(href) || (href === 'index.html' && (location.pathname.endsWith('/') || location.pathname === ''))) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();
