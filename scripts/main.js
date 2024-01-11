let slideIndex = 1;
updateSlide(slideIndex);

// Next/previous controls
function plusSlides(n) {
  updateSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  updateSlide(slideIndex = n);
}

function updateSlide(n) {
  let slides = [...document.getElementsByClassName("carousel")];
  let dots = [...document.getElementsByClassName("dot")];

  // Adjust slideIndex if it's out of bounds
  slideIndex = ((n - 1 + slides.length) % slides.length) + 1;

  // Hide all slides and deactivate all dots
  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

  // Show the current slide and activate the corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}