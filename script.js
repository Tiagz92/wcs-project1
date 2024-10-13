let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function moveCarousel() {
    index++;
    if (index >= totalSlides) {
      index = 0;  
}
slides.style.transform = `translateX(${-510 * index}px)`;
slides.style.transition = 'transform 0.5s ease-in-out';
}
setInterval(moveCarousel, 3000);