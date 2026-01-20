(function () {
  'use strict';

  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;

    function showHide() {
      btn.style.display = window.scrollY > 400 ? 'block' : 'none';
    }

    // show/hide on scroll
    window.addEventListener('scroll', showHide, { passive: true });

    // smooth scroll to top on click
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // run once in case the page is already scrolled
    showHide();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackToTop);
  } else {
    initBackToTop();
  }
})();