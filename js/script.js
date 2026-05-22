const mobileMenuButton = document.querySelector('.menubtn');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.menubtn i');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times'); 
    icon.classList.toggle('fa-bars');
});


/* Carrossel */

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) {
    console.log("Nenhum slide encontrado!");
    return;
  }

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

  if (dots.length > 0) {

    for (i = 0; i < dots.length; i++) {
      dots[i].className =
        dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
  }
}


showSlides(slideIndex);