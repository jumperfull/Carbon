// Basic interactivity: mobile nav, search toggle, and year injection
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  hamburger && hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    // simple slide down/up using height
    if (mainNav.classList.contains('open')) {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.position = 'absolute';
      mainNav.style.right = '24px';
      mainNav.style.top = '64px';
      mainNav.style.background = 'linear-gradient(180deg, rgba(8,12,18,0.98), rgba(6,9,14,0.98))';
      mainNav.style.padding = '12px';
      mainNav.style.borderRadius = '12px';
      mainNav.style.boxShadow = '0 8px 30px rgba(0,0,0,0.6)';
    } else {
      mainNav.style.display = '';
      mainNav.style.position = '';
      mainNav.style.background = '';
      mainNav.style.padding = '';
      mainNav.style.borderRadius = '';
      mainNav.style.boxShadow = '';
    }
  });

  // Search toggle
  const searchToggle = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchInput = document.getElementById('searchInput');

  searchToggle && searchToggle.addEventListener('click', () => {
    const open = searchPanel.getAttribute('aria-hidden') === 'false';
    searchPanel.setAttribute('aria-hidden', String(!open));
    searchPanel.style.display = open ? 'none' : 'block';
    if (!open) setTimeout(()=> searchInput && searchInput.focus(), 120);
  });

  // Basic client-side search stub
  searchInput && searchInput.addEventListener('keyup', (e) => {
    // placeholder: in real site we'd fetch suggestions / docs
    if (e.key === 'Enter') {
      const q = searchInput.value.trim();
      if (q) {
        alert('Search is a demo. You searched for: ' + q);
      }
    }
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (ev) => {
    const target = ev.target;
    if (!target.closest || (!target.closest('#mainNav') && !target.closest('#hamburger'))) {
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        mainNav.style.display = '';
        mainNav.style.position = '';
      }
    }
  });
});
