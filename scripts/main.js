let currentSlideIndex = 0;
let slides = document.getElementsByClassName("carousel-item");
let dots = document.getElementsByClassName("dot");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].className += " active";
}

function changeSlide(n) {
  currentSlideIndex += n;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide();
}

function goToSlide(n) {
  currentSlideIndex = n;
  showSlide();
}

window.onload = function() {
  let previousButton = document.querySelector(".prev");
  let nextSlideButton = document.querySelector(".next");

  previousButton.onclick = function() {
    changeSlide(-1);
  };
  nextSlideButton.onclick = function() {
    changeSlide(1);
  };

  showSlide();
};