// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');

// function nextSlide() {
//   slides[currentSlide].style.transform = 'translateX(-100%)';
  
//   currentSlide = (currentSlide + 1) % slides.length;
  
//   slides[currentSlide].style.transform = 'translateX(0)';
// }

// // Initialize the first slide
// slides[currentSlide].style.transform = 'translateX(0)';

// setInterval(nextSlide, 3000);

var info1Elements = document.querySelectorAll('.info1');

  info1Elements.forEach(function(info1Element) {
    var info1PathElements = info1Element.querySelectorAll('path');

    info1Element.addEventListener('mouseover', function() {
      // Change the color of info1 path to "#fc540c"
      info1PathElements.forEach(function(pathElement) {
        pathElement.style.fill = '#fc540c';
      });
    });

    info1Element.addEventListener('mouseout', function() {
      // Restore the original color when mouse leaves
      info1PathElements.forEach(function(pathElement) {
        pathElement.style.fill = '#676a79';
      });
    });
  });