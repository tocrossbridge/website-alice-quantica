const navbarList = document.getElementById('navbar-list');

function openNavbar() {
  navbarList.style = 'display: block';
}

function closeNavbar() {
  navbarList.style = 'display: none';
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
