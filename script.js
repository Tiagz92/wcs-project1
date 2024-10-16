// Sélectionne toutes les cartes
const cards = document.querySelectorAll('.card');

// Ajoute un écouteur d'événement à chaque carte
cards.forEach(card => {
    card.addEventListener('mouseOn', function() {
        card.querySelector('.card-inner').classList.toggle('flipped');
    });
});
