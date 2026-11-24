(function(){
  var topbar = document.getElementById('topbar');
  addEventListener('scroll', function(){ topbar.classList.toggle('solid', scrollY > 24); }, { passive: true });

  // Mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');
  burger.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Soft reveals on scroll
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  }

  // FAQ: close other items when one opens (accordion behavior)
  var faq = document.getElementById('faq');
  var allDetails = faq.querySelectorAll('details');
  allDetails.forEach(function(d){
    d.addEventListener('toggle', function(){
      if (d.open) {
        allDetails.forEach(function(other){ if (other !== d) other.open = false; });
      }
    });
  });
})();
