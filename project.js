let currentSlide = 0;
const slides = document.querySelectorAll(".intro-box");

function slideIntro() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "prev");

        if (index === currentSlide) {
            slide.classList.add("active");
        } 
        else if (index === (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.add("prev");
        }
    });

    currentSlide = (currentSlide + 1) % slides.length;
}

slideIntro();
setInterval(slideIntro, 3000);

