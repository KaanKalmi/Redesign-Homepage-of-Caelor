let slideIndex = 1;
updateSlide(slideIndex);

function plusSlides(n) {
  updateSlide(slideIndex += n);
}

function currentSlide(n) {
  updateSlide(slideIndex = n);
}

function updateSlide(n) {
  let slides = [...document.getElementsByClassName("carousel")];
  let dots = [...document.getElementsByClassName("dot")];

  slideIndex = ((n - 1 + slides.length) % slides.length) + 1;

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}