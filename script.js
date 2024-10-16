let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

function moveCarousel() {
    index++;
    if (index >= totalSlides) {
        index = 0; // Réinitialiser à la première image
    }
    const offset = -510 * index; // Calculer la position
    slides.style.transform = `translateX(${offset}px)`; // Appliquer le décalage
    slides.style.transition = 'transform 0.5s ease-in-out'; // Assurer une transition fluide
}

// Lancer le carrousel toutes les 3 secondes
setInterval(moveCarousel, 3000);
