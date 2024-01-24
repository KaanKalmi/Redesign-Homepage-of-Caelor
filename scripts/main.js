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

window.addEventListener('load', function() {
  let previousButton = document.querySelector(".prev");
  let nextSlideButton = document.querySelector(".next");

  previousButton.onclick = function() {
    changeSlide(-1);
  };
  nextSlideButton.onclick = function() {
    changeSlide(1);
  };

  showSlide();
});

let currentSlideIndex2 = 0;
let slides2 = document.getElementsByClassName("carousel-item-2");
let dots2 = document.getElementsByClassName("dot-2");

function showSlide2() {
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (let i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[currentSlideIndex2].style.display = "block";
  dots2[currentSlideIndex2].className += " active";
}

function changeSlide2(n) {
  currentSlideIndex2 += n;
  if (currentSlideIndex2 >= slides2.length) {
    currentSlideIndex2 = 0;
  }
  if (currentSlideIndex2 < 0) {
    currentSlideIndex2 = slides2.length - 1;
  }
  showSlide2();
}

function goToSlide2(n) {
  currentSlideIndex2 = n;
  showSlide2();
}

window.onload = function() {
  let previousButton2 = document.querySelector(".prev-2");
  let nextSlideButton2 = document.querySelector(".next-2");

  previousButton2.onclick = function() {
    changeSlide2(-1);
  };
  nextSlideButton2.onclick = function() {
    changeSlide2(1);
  };

  showSlide2();
};