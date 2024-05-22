document.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.querySelectorAll('.scroll-hide');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            } else {
                entry.target.style.opacity = '0';
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.remove("fade-out");
  
    window.addEventListener("beforeunload", function () {
      document.body.classList.add("fade-out");
    });
  });