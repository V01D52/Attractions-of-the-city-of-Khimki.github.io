document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

   backToTopBtn.addEventListener('click', () => {
    const start = window.scrollY;
    const duration = 800;

      const startTime = performance.now();

      function animateScroll(currentTime) {
           const elapsedTime = currentTime - startTime;
           const progress = Math.min(elapsedTime / duration, 1);

          window.scrollTo(0, start * (1 - progress));


          if (progress < 1) {
              requestAnimationFrame(animateScroll);
          }
      }

       requestAnimationFrame(animateScroll);
    });
});