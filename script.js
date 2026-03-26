const elements = document.querySelectorAll(".hidden");

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
slides[currentSlide].style.display = "block";

document.getElementById("next").onclick = () => {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
};

document.getElementById("prev").onclick = () => {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
};

window.addEventListener("scroll", showOnScroll);