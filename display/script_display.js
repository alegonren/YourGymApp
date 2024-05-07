let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    }

    const offset = -slideIndex * (100 / totalSlides) + "%"; // Ajuste en el cálculo de la transformación
    document.querySelector('.slides').style.transform = `translateX(${offset})`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

setInterval(nextSlide, 10000);
