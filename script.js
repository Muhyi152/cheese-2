document.addEventListener('DOMContentLoaded', function() {

    // Animasi saat scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // elemen akan terlihat saat 10% bagiannya masuk viewport
    });

    // Ambil semua elemen yang ingin dianimasikan
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});