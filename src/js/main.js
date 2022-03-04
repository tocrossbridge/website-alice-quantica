const navbarList = document.getElementById('navbar-list');
const collapsible = document.getElementsByClassName('collapsible');

for (var i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    content =
      content.style.display === 'block'
        ? (content.style.display = 'none')
        : (content.style.display = 'block');
  });
}

function navbar() {
  navbarList.style.display === 'block'
    ? (navbarList.style.display = 'none')
    : (navbarList.style.display = 'block');
}

$('.partners__carousel').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  variableWidth: true,
  slidesToScroll: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});

// pedagogical guide - slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(x){ showSlides(slideIndex += x); }
function currentSlide(x){ showSlides(slideIndex = x); }
function showSlides(x){

  var slides = document.getElementsByClassName('slider__div');
  var dots = document.getElementsByClassName('slider__dot');
  console.log(dots)

  if(x > slides.length) { slideIndex = 1 }
  if(x < 1) { slideIndex = slides.length }

  for(var i = 0; i < slides.length; i++){ slides[i].style.display = 'none'; }
  for(var i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' slider__active', '');
  }
  
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' slider__active';
}