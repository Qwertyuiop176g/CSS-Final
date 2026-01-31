(function () {
  'use strict';

  // Disable custom cursor effects on touch devices
  const isTouch =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  if (isTouch) {
    document.documentElement.classList.add('no-custom-cursor');
  }

  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    function toggleVisibility() {
      btn.style.display = window.scrollY > 100 ? 'block' : 'none';
    }

    // Show / hide on scroll
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    // Smooth scroll to top
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Run once on load
    toggleVisibility();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackToTop);
  } else {
    initBackToTop();
  }
})();
