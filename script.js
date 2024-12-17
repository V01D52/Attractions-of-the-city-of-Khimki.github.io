document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header a, footer a, main a, a');
    const main = document.querySelector('main');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            main.classList.add('fade-out');
            
            setTimeout(() => {        
                window.location.href = link.href;
            }, 500);
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header a, footer a, main a, a');
    const main = document.querySelector('main');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            gsap.to(main, { duration: 0.5, opacity: 0, y: 20, ease: "power1.inOut", onComplete: () => {
                window.location.href = link.href;
            } });
        });
    });
});
