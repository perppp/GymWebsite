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

  
  
  
document.addEventListener("DOMContentLoaded", function() {
  var pictures = document.querySelectorAll(".fourPictures");
  var maximizedImageContainer = document.querySelector(".maximizedImageContainer");
  var maximizedImage = document.querySelector(".maximizedImage");

  pictures.forEach(function(picture) {
    picture.addEventListener("click", function() {
      var imageUrl = this.style.backgroundImage.slice(5, -2);
      maximizedImage.style.backgroundImage = "url(" + imageUrl + ")";
      maximizedImageContainer.style.display = "flex";
      maximizedImage.style.width = "620px"
      maximizedImage.style.height = "620px"
    });
  });

  maximizedImageContainer.addEventListener("click", function() {
    maximizedImageContainer.style.display = "none";
  });
});

  