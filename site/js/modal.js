/* modal.js — prototype action modal for Dillard Property Services */
(function () {
  'use strict';

  function showPrototypeModal(title, body) {
    const existing = document.getElementById('dp-proto-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'dp-proto-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,36,58,0.82);z-index:9999;display:flex;align-items:center;justify-content:center;padding:24px;';

    overlay.innerHTML = `
<div style="background:#fff;border-radius:12px;max-width:480px;width:100%;padding:36px 32px;position:relative;box-shadow:0 24px 64px rgba(0,36,58,0.3);">
  <button onclick="document.getElementById('dp-proto-modal').remove()" style="position:absolute;top:16px;right:20px;background:none;border:none;font-size:1.4rem;cursor:pointer;color:#6B7280;line-height:1;">&times;</button>
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
    <div style="width:40px;height:40px;border-radius:50%;background:#003d4d;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="18" height="18" fill="#C8922A" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    </div>
    <h3 style="font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:700;color:#00243a;margin:0;">${title || 'Action Confirmed'}</h3>
  </div>
  <div style="font-family:'Inter',sans-serif;font-size:0.9rem;color:#374151;line-height:1.65;">${body || '<p>This action would be processed in the live application.</p>'}</div>
  <button onclick="document.getElementById('dp-proto-modal').remove()" style="margin-top:24px;width:100%;padding:13px;background:#00243a;color:#fff;border:none;border-radius:8px;font-family:'Montserrat',sans-serif;font-size:0.88rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;">Close</button>
  <p style="text-align:center;margin-top:12px;font-size:0.72rem;color:#9CA3AF;font-style:italic;">Prototype only — no data is transmitted</p>
</div>`;

    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  }

  window.showPrototypeModal = showPrototypeModal;
})();
