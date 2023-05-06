import React from 'react'
import './b1.css'
const b1 = () => {

    // Références aux éléments importants
let sliderContainer = document.querySelector('.slider-container');
let slider = document.querySelector('.slider-items');
let items = slider.querySelectorAll('.slider-item');

// Variables globales
let initialDragOffset;
let currentDragOffset;

// Écouteur délégué des événements de clic
document.querySelector('.slider-arrows').addEventListener('click', (event) => {
  let clickEventPath = event.composedPath().slice(0, -2);
  
  console.log("Coucou");
  
  for (let element of clickEventPath) {
    if ('previous' in element.dataset) {
      previousSlideClickHandler(element, sliderContainer);
      break;
    } else if ('next' in element.dataset) {
      nextSlideClickHandler(element, sliderContainer);
      break;
    }
  }
});

// Gestionnaire du bouton précédent
function previousSlideClickHandler(element, section) {
  scrollToSlide('previous');
}

// Gestionnaire du bouton suivant
function nextSlideClickHandler(element, section) {
  scrollToSlide('next');
}

// Écouteur d'événements liés au drag du slider
sliderContainer.addEventListener('mousedown', (event) => desktopScrollMouseDownHandler(event));

document.addEventListener('mousemove', (event) => desktopScrollMouseMoveHandler(event));

document.addEventListener('mouseup', (event) => desktopScrollMouseUpHandler(event));

// Gestionnaire de l'initiation d'un drag slider
function desktopScrollMouseDownHandler(event) {
  if (event.target.classList.contains('slider-arrow')) return false;
  
  event.preventDefault();
  
  document.querySelector('body').setAttribute('data-sliding', '');
  
  initialDragOffset = event.clientX - sliderContainer.offsetLeft;
}

// Gestionnaire du drag slider
function desktopScrollMouseMoveHandler(event) {
 if (!document.querySelector('body').hasAttribute('data-sliding')) return false;
  
  currentDragOffset = event.clientX;
  
  let sliderScrollOffset = slider.scrollLeft;
  let nextSliderOffset = sliderScrollOffset - (currentDragOffset - initialDragOffset);
  
  slider.scroll({ left: nextSliderOffset, behavior: 'auto' });
  
  initialDragOffset = currentDragOffset;
}

// Gestionnaire de la fin d'un drag slider
async function desktopScrollMouseUpHandler(event) {
  if (!document.querySelector('body').hasAttribute('data-sliding')) return false;
  
  document.querySelector('body').removeAttribute('data-sliding');
  
  slider.style.scrollSnapType = "none";
  
  scrollToSlide();
  
  setTimeout(() => slider.style.scrollSnapType = null, 800)
}

// Gestionnaire du scroll
function scrollToSlide(command) {
  let numberOfItems = items.length;
  let itemWidth = items[0].offsetWidth;
  let sliderGap = parseInt(window.getComputedStyle(slider).rowGap);
  let numberOfItemsOnScreen = parseFloat((window.innerWidth / (itemWidth + sliderGap)).toFixed(2));
  let sliderScrollOffset = slider.scrollLeft;
  let activeItemIndex = Math.ceil(sliderScrollOffset / (itemWidth + sliderGap));
  let nextItemIndex;
  
  switch(command) {
    case 'previous':
      nextItemIndex = activeItemIndex - 1;      
      if (nextItemIndex < 0) {
        nextItemIndex = numberOfItems - Math.floor(numberOfItemsOnScreen);
      }
      break;
    case 'next':
      nextItemIndex = activeItemIndex + 1;
      if (nextItemIndex > numberOfItems - Math.floor(numberOfItemsOnScreen)) {
        nextItemIndex = 0;
      }
      break;
    default:
      nextItemIndex = Math.floor(sliderScrollOffset / (itemWidth + sliderGap));
  }
    
  let nextSliderOffset = nextItemIndex * (itemWidth + sliderGap);
  
  slider.scroll({ left: nextSliderOffset, behavior: 'smooth' });
}
  return (
    <>
    
      <div class="background-container">
  <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?w=1920" alt="Coucher de soleil sur une plage proche d'une ville"/>
</div>
<div class="background-overlay">
  <a class="copyright" href="https://www.pexels.com/fr-fr/photo/batiment-a-cote-de-la-rive-412681/" target="_blank">
    <p style="color: #fff">© Tyler Lastovich, Pexels</p>
  </a>
</div>

<div class="content-wrapper">
  <h1 class="content-title"><span>Propriété</span> <pre>mask-image</pre> <span>pour les sliders</span></h1>

  <section class="s-slider">
    <div class="slider-container">
      <ul class="slider-items">
        <li class="slider-item"><img src="https://images.pexels.com/photos/105950/pexels-photo-105950.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/5063779/pexels-photo-5063779.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/9376507/pexels-photo-9376507.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/4642403/pexels-photo-4642403.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/286076/pexels-photo-286076.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/13248624/pexels-photo-13248624.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/702343/pexels-photo-702343.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/1058759/pexels-photo-1058759.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/3584437/pexels-photo-3584437.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/8782716/pexels-photo-8782716.jpeg?h=240"/></li>
        <li class="slider-item"><img src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?h=240"/></li>
      </ul>
    </div>
    <div class="slider-arrows">
      <button class="slider-arrow" data-previous>prev</button>
      <button class="slider-arrow" data-next>next </button>
    </div>
  </section>
</div>
    </>
    
  )
}

export default b1
