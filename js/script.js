document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      if (mainNav.classList.contains('open')) {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.right = '24px';
        mainNav.style.top = '64px';
        mainNav.style.background = 'linear-gradient(180deg, rgba(8,17,13,0.98), rgba(6,14,11,0.98))';
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
  }

  const searchToggle = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchInput = document.getElementById('searchInput');
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', () => {
      const hidden = searchPanel.getAttribute('aria-hidden') === 'true';
      searchPanel.setAttribute('aria-hidden', String(!hidden));
      searchPanel.style.display = hidden ? 'block' : 'none';
      if (hidden && searchInput) {
        setTimeout(() => searchInput.focus(), 120);
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          alert('Search not yet implemented: ' + query);
        }
      }
    });
  }
});
