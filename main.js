const slides = document.querySelector(".slides");
    const slideImgs = document.querySelectorAll(".slides img");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;

    function showSlide(i) {
      index = (i + slideImgs.length) % slideImgs.length;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));

    showSlide(index);