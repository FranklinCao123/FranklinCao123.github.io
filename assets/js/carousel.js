document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);
});
