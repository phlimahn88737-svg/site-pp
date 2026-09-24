document.addEventListener('DOMContentLoaded', function () {

  // Menu mobile
  var header = document.querySelector('.site-header');
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Animação única das trilhas da placa no carregamento da página
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var traces = document.querySelectorAll('.trace');

  if (!reduceMotion && traces.length) {
    traces.forEach(function (trace, i) {
      setTimeout(function () {
        trace.classList.add('is-drawn');
      }, 120 * i);
    });
  } else {
    traces.forEach(function (trace) {
      trace.classList.add('is-drawn');
    });
  }

  // Ano no rodapé
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
