let slideIndex = 0;

function showSlides(index) {
  const slides = document.querySelectorAll('.mainBanner');
  const dots = document.querySelectorAll('.dot');

  // Hide all slides and remove active class from all dots
  slides.forEach((slide) => slide.style.display = 'none');
  dots.forEach((dot) => dot.classList.remove('active'));

  // Show the current slide and add active class to the current dot
  slides[index].style.display = 'block';
  dots[index].classList.add('active');
}

function plusDivs() {
  slideIndex++;
  if (slideIndex >= document.querySelectorAll('.mainBanner').length) {
    slideIndex = 0;
  }
  showSlides(slideIndex);
}

function minusDivs() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = document.querySelectorAll('.mainBanner').length - 1;
  }
  showSlides(slideIndex);
}

// Initialize the slideshow
showSlides(slideIndex);

// Add event listeners to next and prev buttons
document.querySelector('.next').addEventListener('click', plusDivs);
document.querySelector('.prev').addEventListener('click', minusDivs);

// Add event listeners to dots
document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    showSlides(slideIndex);
  });
});

// Auto change slides every 3 seconds
setInterval(plusDivs, 3000);
