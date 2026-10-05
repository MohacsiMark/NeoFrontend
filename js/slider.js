document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function nextSlide() {
        slides.forEach(s => s.classList.remove("active"));

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        slides[index].classList.add("active");
    }

    setInterval(nextSlide, 4000);

});