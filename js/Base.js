(function () {
  'use strict';

  /*
    Disable custom cursor only on touch devices
  */
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const hasHover = window.matchMedia('(hover: hover)').matches;

  if (isCoarsePointer && !hasHover) {
    document.documentElement.classList.add('no-custom-cursor');
  }

  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    function toggleVisibility() {
      btn.classList.toggle('is-visible', window.scrollY > 100);
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


