  // Animación fade-up al hacer scroll
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(function(el) {
    observer.observe(el);
  });

  // Resaltar link activo en el nav al hacer scroll
  const secciones = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function() {
    let actual = '';
    secciones.forEach(function(sec) {
      if (window.scrollY >= sec.offsetTop - 100) {
        actual = sec.getAttribute('id');
      }
    });
    navLinks.forEach(function(link) {
      link.style.color = link.getAttribute('href') === '#' + actual ? '#c9a84c' : '';
    });
  });
