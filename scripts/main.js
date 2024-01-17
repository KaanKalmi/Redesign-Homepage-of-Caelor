let currentSlideIndex = 1; //Hier declare ik de variabele currentSlideIndex en geef ik hem de waarde 1
updateSlideDisplay(currentSlideIndex); //Roept de functie updateSlideDisplay aan met de currentslideIndex als argument

function changeSlide(n) { 
  updateSlideDisplay(currentSlideIndex += n); //Geeft de currentSlideIndex een +1 of -1
}

function goToSlide(n) { 
  updateSlideDisplay(currentSlideIndex = n); //Definieert de updateSlideDisplay functie met de n als argument en roept vervolgens de nieuwe currentSlideIndex op
}

function updateSlideDisplay(n) { //Definieert de updateSlideDisplay functie met de n als argument
  let slideElements = [...document.getElementsByClassName("carousel")]; //Definieert de slideElements variabele en assigned hem aan alle elementen met de carousel class
  let dotElements = [...document.getElementsByClassName("dot")]; //Definieert de dotElements variabele en assigned hem aan alle elementen met de dot class
  let articleElements = [...document.getElementsByClassName("content")]; //Definieert de articleElements variabele en assigned hem aan alle elementen met de content class

  currentSlideIndex = ((n - 1 + slideElements.length) % slideElements.length) + 1; 
  /* De lijn hierboven berekent de nieuwe currentSlideIndex in een circulaire manier, de + slideElements,length zorgt ervoor dat de
  index niet negatief kan worden, als n<1 is dan wrapped hij naar de start, of als n>slideElements.length dan wrapped hij ook*/
  slideElements.forEach(slide => slide.style.display = "none"); //Hier wordt de display van alle slides op none gezet
  dotElements.forEach(dot => dot.className = dot.className.replace(" active", "")); //Hier wordt de active class van alle dots verwijderd
  articleElements.forEach(article => article.style.display = "none"); //Hier wordt de display van alle articles op none gezet

  slideElements[currentSlideIndex-1].style.display = "block"; //Hier wordt de display van de slide met de nieuwe currentSlideIndex op block gezet
  dotElements[currentSlideIndex-1].className += " active"; //Hier wordt de active class aan de dot met de nieuwe currentSlideIndex toegevoegd
  articleElements[currentSlideIndex-1].style.display = "block"; //Hier wordt de display van de article met de nieuwe currentSlideIndex op block gezet
}

document.addEventListener('DOMContentLoaded', (event) => { //Hier wordt de DOMContentLoaded eventlistener aangemaakt
  let previousButton = document.querySelector(".prev"); //Hier wordt de previousButton variabele aangemaakt en assigned aan het element met de prev class
  let nextSlideButton = document.querySelector(".next"); //Hier wordt de nextSlideButton variabele aangemaakt en assigned aan het element met de next class
  let dotElements = [...document.querySelectorAll(".dot")]; //Hier wordt de dotElements variabele aangemaakt en assigned aan alle elementen met de dot class

  previousButton.addEventListener("click", function() { changeSlide(-1); }); //Hier wordt de click eventlistener aangemaakt voor de previousButton en verandert de currentslide met -1
  nextSlideButton.addEventListener("click", function() { changeSlide(1); }); //Hier wordt de click eventlistener aangemaakt voor de nextSlideButton en verandert de currentslide met +1

  dotElements.forEach((dot, index) => { //Hier wordt er een eventlistener aangemaakt voor elke dot en verandert de currentslide naar de index van de dot
      dot.addEventListener("click", function() { goToSlide(index + 1); }); //Hier wordt de click eventlistener aangemaakt voor de dot en verandert de currentslide naar de index van de dot
  });
});

// Hieronder staan alle console.logs om te testen of alles werkt
console.log(currentSlideIndex);
console.log(slideElements);
console.log(dotElements);
console.log(articleElements);
console.log(previousButton);
console.log(nextSlideButton);
console.log(dotElements);
console.log(dotElements);