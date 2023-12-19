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




// Testimonial moving

const slider = document.querySelector('.movFlex');
let isDown = false;
let startX;
let scrollLeft;
let startScrollLeft;
let autoScrollInterval;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  startScrollLeft = scrollLeft;
  slider.classList.add('active');
  slider.style.transition = 'none'; // Disable transition during dragging

  clearInterval(autoScrollInterval); // Clear auto-scroll interval
});

slider.addEventListener('mouseleave', () => {
  if (isDown) snapToPosition();
});

slider.addEventListener('mouseup', () => {
  if (isDown) snapToPosition();
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

function snapToPosition() {
  isDown = false;
  slider.classList.remove('active');
  slider.style.transition = ''; // Re-enable transition for snapping

  let threshold = slider.offsetWidth * 0.4;
  let dragDistance = scrollLeft - slider.scrollLeft;

  if (Math.abs(dragDistance) > threshold) {
    // Slide to the next/previous testimonial
    slider.scrollLeft += dragDistance > 0 ? -slider.offsetWidth : slider.offsetWidth;
  } else {
    // Snap back to the original position
    slider.scrollLeft = startScrollLeft;
  }

  startAutoScroll();
}

// Auto-scroll functionality
function autoScroll() {
  if (isDown) return;
  slider.scrollLeft += slider.offsetWidth;
}

function startAutoScroll() {
  autoScrollInterval = setInterval(autoScroll, 4000);
}

startAutoScroll(); // Initialize auto-scroll
