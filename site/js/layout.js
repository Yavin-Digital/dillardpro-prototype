(function () {
  const S = window.SITE;
  if (!S) return;

  const navLinks = S.nav.map(n => `<a href="${n.href}" class="dp-nav-link">${n.label}</a>`).join('');

  document.head.insertAdjacentHTML('beforeend', `
<style>
:root{--navy:#000000;--teal:#1c1c1c;--gold:#e94039;--gold-light:#c8302a;--dark:#0d0d0d;--muted:#6B7280;--light:#F5F5F5;--white:#ffffff;}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Inter',sans-serif;background:var(--white);color:var(--dark);}
a{color:inherit;text-decoration:none;}
.container{width:100%;max-width:1180px;margin-inline:auto;padding-inline:20px;}
@media(min-width:1024px){.container{padding-inline:24px;}}

/* NAV */
.dp-nav{background:var(--navy);position:sticky;top:0;z-index:999;box-shadow:0 2px 16px rgba(0,0,0,0.3);}
.dp-nav-inner{max-width:1180px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:72px;}
.dp-logo{display:flex;align-items:center;gap:14px;text-decoration:none;}
.dp-logo img{height:46px;width:auto;border-radius:4px;}
.dp-wordmark{display:flex;flex-direction:column;line-height:1;}
.dp-wordmark-main{font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:800;color:var(--white);letter-spacing:0.02em;text-transform:uppercase;}
.dp-wordmark-sub{font-size:0.6rem;font-weight:400;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-top:3px;}
.dp-menu{display:flex;align-items:center;gap:28px;}
.dp-nav-link{color:rgba(255,255,255,0.72);text-decoration:none;font-size:0.78rem;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;transition:color 0.2s;padding-bottom:2px;border-bottom:2px solid transparent;}
.dp-nav-link:hover,.dp-nav-link.active{color:var(--gold);border-bottom-color:var(--gold);}
.dp-nav-cta{font-size:0.78rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--navy);background:var(--gold);text-decoration:none;padding:10px 20px;border-radius:6px;transition:background 0.2s,color 0.2s;white-space:nowrap;}
.dp-nav-cta:hover{background:var(--gold-light);}
.dp-toggle{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;}
.dp-toggle span{display:block;width:24px;height:2px;background:var(--white);transition:all 0.3s;}
@media(max-width:900px){
  .dp-toggle{display:flex;}
  .dp-menu{display:none;position:absolute;top:72px;left:0;right:0;background:var(--navy);flex-direction:column;align-items:flex-start;padding:24px;gap:18px;border-top:1px solid rgba(255,255,255,0.1);box-shadow:0 8px 24px rgba(0,0,0,0.3);}
  .dp-menu.is-open{display:flex;}
  .dp-nav-cta{align-self:flex-start;}
}

/* FOOTER */
.dp-footer{background:var(--dark);border-top:4px solid var(--gold);padding:64px 24px 28px;}
.dp-footer-grid{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;margin-bottom:48px;}
.dp-footer-brand img{height:54px;width:auto;margin-bottom:16px;border-radius:4px;}
.dp-footer-name{font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:800;color:var(--white);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:8px;}
.dp-footer-sub{font-size:0.78rem;color:rgba(255,255,255,0.4);line-height:1.8;}
.dp-footer-label{font-family:'Montserrat',sans-serif;font-size:0.78rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:8px;}
.dp-footer-link{display:block;font-size:0.85rem;color:rgba(255,255,255,0.55);text-decoration:none;margin-bottom:9px;transition:color 0.2s;}
.dp-footer-link:hover{color:var(--gold);}
.dp-footer-bar{max-width:1180px;margin:0 auto;border-top:1px solid rgba(255,255,255,0.08);padding-top:24px;display:flex;justify-content:space-between;align-items:center;font-size:0.73rem;color:rgba(255,255,255,0.25);}
.dp-footer-bar a{color:rgba(255,255,255,0.2);text-decoration:none;}
.dp-footer-bar a:hover{color:rgba(255,255,255,0.5);}
@media(max-width:768px){.dp-footer-grid{grid-template-columns:1fr 1fr;}.dp-footer-grid>:first-child{grid-column:1/-1;}.dp-footer-bar{flex-direction:column;gap:8px;text-align:center;}}
@media(max-width:480px){.dp-footer-grid{grid-template-columns:1fr;}}
</style>`);

  const navEl = document.getElementById('dp-nav');
  if (navEl) navEl.innerHTML = `
<nav class="dp-nav">
  <div class="dp-nav-inner">
    <a href="./index.html" class="dp-logo">
      <img src="./img/logo.jpg" alt="Dillard Property Services logo">
      <div class="dp-wordmark"><span class="dp-wordmark-main">Dillard</span><span class="dp-wordmark-sub">Property Services</span></div>
    </a>
    <button class="dp-toggle" aria-label="Menu" onclick="this.classList.toggle('is-open');document.getElementById('dp-menu').classList.toggle('is-open')">
      <span></span><span></span><span></span>
    </button>
    <div class="dp-menu" id="dp-menu">
      ${navLinks}
      <a href="./cheat-sheet.html" class="dp-nav-cta">Get the Cheat Sheet</a>
    </div>
  </div>
</nav>`;

  const footEl = document.getElementById('dp-footer');
  if (footEl) footEl.innerHTML = `
<footer class="dp-footer">
  <div class="dp-footer-grid">
    <div class="dp-footer-brand">
      <img src="./img/logo.jpg" alt="Dillard logo">
      <div class="dp-footer-name">Dillard Property Services</div>
      <p class="dp-footer-sub">Texas's premier apartment locators. Serving Austin, DFW, Houston &amp; San Antonio since 2004.<br><br>Text only: 512-640-2443<br>masterleads@dillardpropertyservices.com</p>
    </div>
    <div>
      <div class="dp-footer-label">Navigate</div>
      ${S.nav.map(n=>`<a href="${n.href}" class="dp-footer-link">${n.label}</a>`).join('')}
    </div>
    <div>
      <div class="dp-footer-label">Metros</div>
      ${S.metros.map(m=>`<a href="./availabilities.html#${m.id}" class="dp-footer-link">${m.name}</a>`).join('')}
      <div style="margin-top:20px;">
        <a href="${S.zillowReviews}" target="_blank" rel="noopener" class="dp-footer-link" style="color:var(--gold);font-weight:600;">100+ Reviews on Zillow &rarr;</a>
      </div>
    </div>
  </div>
  <div class="dp-footer-bar">
    <span>&copy; ${new Date().getFullYear()} Dillard Property Services &nbsp;&middot;&nbsp; All rights reserved &nbsp;&middot;&nbsp; Texas Licensed Real Estate</span>
    <span>Built by <a href="https://thetribemaker.com" target="_blank" rel="noopener">The Tribe Maker</a></span>
  </div>
</footer>`;

  document.querySelectorAll('.dp-nav-link').forEach(a => {
    const href = a.getAttribute('href').replace('./', '');
    if (location.pathname.endsWith(href) || (href === 'index.html' && (location.pathname.endsWith('/') || location.pathname === ''))) {
      a.classList.add('active');
    }
  });
})();
