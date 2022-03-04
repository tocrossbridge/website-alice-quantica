const navbarList = document.getElementById('navbar-list');
const collapsible = document.getElementsByClassName('collapsible');

for (var i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    content =
      content.style.display === 'block'
        ? (content.style.display = 'None')
        : (content.style.display = 'block');
  });
}

function navbar(){
    navbarList.style.display === 'block' ? navbarList.style.display = "none" : navbarList.style.display = "block"
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
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
