export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('scroll-reveal', {
      mounted(el, binding) {
        const options = {
          root: null, // Utiliser la fenêtre comme root
          rootMargin: '0px',
          threshold: 0.1 // Déclencher lorsque 10% de l'élément est visible
        };
  
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Ajouter la classe pour afficher l'élément
              entry.target.classList.add(binding.value || 'reveal-visible');
              observer.unobserve(entry.target); // Ne plus observer une fois visible
            }
          });
        }, options);
  
        observer.observe(el);
      }
    });
  });
  