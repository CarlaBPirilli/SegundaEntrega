document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.image-scroll-horizontal');
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    // Ajusta el desplazamiento según el tamaño del contenedor visible
    const scrollAmount = scrollContainer.clientWidth;

    nextButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
});