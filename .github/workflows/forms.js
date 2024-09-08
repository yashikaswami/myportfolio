document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fadeInOnScroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to trigger animation
                entry.target.classList.add('visible');
            } else {
                // Optionally remove the class if you want the animation to reset
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});