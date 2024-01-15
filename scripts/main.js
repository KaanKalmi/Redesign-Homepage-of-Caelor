/*Slideshow JS moet verandert worden, geen JS in HTML, interactie voor extra info moet erbij komen, event listeners etc de 3 stappenplan dus*/
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

//doe een event listener op de button dots,dot span en dan op de <article> een class togglen met display:block en display:none
// inline JS veranderen naar event listeners hiero