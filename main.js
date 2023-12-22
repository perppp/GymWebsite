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


// Slider thing



$(document).ready(function () {
  let currentSlide = 0;
  const totalSlides = $('.slide').length;
  const slidesContainer = $('.slider');

  if (!slidesContainer.length || !slidesContainer.css || !('transform' in slidesContainer[0].style)) {
    console.error("Slider elements not found or not supported.");
  }

  function showSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentSlide = index;
      const translateValue = -index * 100 + (index === 0 ? 0.01 : 0) + '%';
      slidesContainer.css('transform', 'translateX(' + translateValue + ')');
    }
  }

  function updateDots() {
    const dots = $('.dot');
    dots.each(function (i) {
      $(this).toggleClass('active', i === currentSlide);
    });
  }

  function changeSlide(index) {
    showSlide(index);
    updateDots();
  }

  $('.dot').click(function () {
    const index = $(this).index();
    changeSlide(index);
  });

  showSlide(currentSlide);
  updateDots();
});





var info1Elements = document.querySelectorAll('.info1');

  info1Elements.forEach(function(info1Element) {
    var info1PathElements = info1Element.querySelectorAll('path');

    info1Element.addEventListener('mouseover', function() {
      info1PathElements.forEach(function(pathElement) {
        pathElement.style.fill = '#fc540c';
      });
    });

    info1Element.addEventListener('mouseout', function() {
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
  slider.style.transition = 'none';

  clearInterval(autoScrollInterval);
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
    slider.scrollLeft += dragDistance > 0 ? -slider.offsetWidth : slider.offsetWidth;
  } else {
    slider.scrollLeft = startScrollLeft;
  }

  startAutoScroll();
}

function autoScroll() {
  if (isDown) return;
  slider.scrollLeft += slider.offsetWidth;
}

function startAutoScroll() {
  autoScrollInterval = setInterval(autoScroll, 4000);
}

startAutoScroll();





//Scroll to a tags


document.addEventListener("DOMContentLoaded", function () {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }



  document.getElementById("subA").addEventListener("click", function () {
    scrollToSection("subscriptions");
  });

  document.getElementById("testA").addEventListener("click", function () {
    scrollToSection("testimonials");
  });

  document.getElementById("plansA").addEventListener("click", function () {
    scrollToSection("plansSection");
  });

  document.getElementById("contactA").addEventListener("click", function () {
    scrollToSection("footer");
  });
});





// Register popup




const myUsername = document.getElementById("myUsername");
const myEmail = document.getElementById("myEmail");
const myPassword = document.getElementById("myPassword");
const myRePassword = document.getElementById("myRePassword");
const myForm = document.getElementById("myForm");

function closePopup(popup) {
  const popupElement = document.getElementById(popup);
  if (popupElement) {
      popupElement.style.display = 'none';
  }
}

// Function to save email and password to localStorage
function saveCredentials(email, password) {
    // Retrieve existing credentials or initialize an empty array
    const storedCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];

    // Ensure storedCredentials is an array
    if (!Array.isArray(storedCredentials)) {
        // If not an array, initialize it as an empty array
        localStorage.setItem('userCredentials', JSON.stringify([]));
        return;
    }

    // Add new credentials to the array
    storedCredentials.push({ email, password });

    // Save the updated array back to localStorage
    localStorage.setItem('userCredentials', JSON.stringify(storedCredentials));
}

myForm.addEventListener('submit', function (el) {
    el.preventDefault();

    let result = true;
    if (myUsername.value.length == 0) {
        myUsername.nextElementSibling.style.display = "block";
        result = false;
    } else {
        myUsername.nextElementSibling.style.display = "none";
    }

    if (myEmail.value.length == 0 || !myEmail.validity.valid) {
        result = false;
        myEmail.nextElementSibling.style.display = "block";
    } else {
        myEmail.nextElementSibling.style.display = "none";
    }

    if (!myPassword.validity.valid || myPassword.value.length == 0) {
        result = false;
        myPassword.nextElementSibling.style.display = "block";
    } else {
        myPassword.nextElementSibling.style.display = "none";
    }

    if (!myRePassword.value === myPassword.value || myRePassword.value.length < 8) {
        result = false;
        myRePassword.nextElementSibling.style.display = "block";
    } else {
        myRePassword.nextElementSibling.style.display = "none";
    }

    if (result) {
        saveCredentials(myEmail.value, myPassword.value);
        closePopup('registerPopup');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('registerButton');
    const registerPopup = document.getElementById('registerPopup');
    const loginPopup = document.getElementById('loginPopup');
    const overlay = document.querySelector('.overlay');

    function openPopup(popup) {
        popup.style.display = 'block';
    }

    function closePopup(popup) {
        popup.style.display = 'none';
    }

    registerButton.addEventListener('click', function () {
        openPopup(registerPopup);
    });

    document.getElementById('showLogin').addEventListener('click', function () {
        closePopup(registerPopup);
        openPopup(loginPopup);
    });

    document.getElementById('showRegister').addEventListener('click', function () {
        closePopup(loginPopup);
        openPopup(registerPopup);
    });

    overlay.addEventListener('click', function () {
        closePopup(registerPopup);
        closePopup(loginPopup);
    });

    document.querySelectorAll('.close').forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            const popupId = closeButton.closest('.popup').id;
            closePopup(document.getElementById(popupId));
        });
    });
});

const mySubmitLoginButton = document.getElementById('mySubmitLogin');
const registerButton = document.getElementById('registerButton');
const myEmailLogin = document.getElementById('myEmailLogin');
const myPasswordLogin = document.getElementById('myPasswordLogin');
const loginPopup = document.getElementById('loginPopup');

function checkCredentials(email, password) {
    const storedCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];
    return storedCredentials.some(cred => cred.email === email && cred.password === password);
}

mySubmitLoginButton.addEventListener('click', function (event) {
    event.preventDefault();

    const email = myEmailLogin.value;
    const password = myPasswordLogin.value;

    const errorSpan = mySubmitLoginButton.nextElementSibling;

    if (checkCredentials(email, password)) {
        loginPopup.style.display = 'none';

        registerButton.textContent = "My Profile";
        registerButton.disabled = true;
    } else {
        errorSpan.textContent = "Email or password is incorrect";
        errorSpan.style.display = "block";
    }
});

