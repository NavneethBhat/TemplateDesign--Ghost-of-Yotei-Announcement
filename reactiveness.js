// Select all cards
const cards = document.querySelectorAll('.card');

// Add hover animation dynamically using JavaScript
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
        card.style.opacity = '0.8';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.opacity = '1';
    });
});


