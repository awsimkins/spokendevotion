// Gentle fade-in on scroll (skipped when the visitor prefers reduced motion).
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  var els=document.querySelectorAll('main > section, main > div, body > section, .sd-welcome, .sd-pray, .sd-verse-band, .audio-card');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('sd-in');io.unobserve(e.target);}});},{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){if(el.classList.contains('page-banner'))return;el.classList.add('sd-reveal');io.observe(el);});
})();
