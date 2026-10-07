const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mobile-nav');
function closeMenu() { menu?.setAttribute('aria-expanded', 'false'); if (nav) nav.hidden = true; }
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open)); nav.hidden = !open;
});
nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
matchMedia('(min-width: 861px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('.copy-email')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  const status = document.querySelector('.copy-status');
  try { await navigator.clipboard.writeText(button.dataset.email); status.textContent = button.dataset.success; }
  catch { status.textContent = button.dataset.failure; }
});
const dialog = document.querySelector('.privacy-dialog');
document.querySelector('.privacy-open')?.addEventListener('click', () => dialog.showModal());
document.querySelector('.privacy-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
