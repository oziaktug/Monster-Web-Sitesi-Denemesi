document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.highlight');
    const letters = text.innerText.split('').map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`).join('');
    text.innerHTML = letters;

    const spans = text.querySelectorAll('span');

    spans.forEach((span, index) => {
        span.style.transitionDelay = `${index * 0.1}s`;
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 100); // Small delay to ensure animation starts after DOM is ready
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Sayfa kaydırıldığında butonun görünürlüğünü kontrol et
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    // Butona tıklandığında sayfayı üst kısma kaydır
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});