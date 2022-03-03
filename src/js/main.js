const navbarList = document.getElementById('navbar-list');

function openNavbar() {
  navbarList.style = 'display: block';
}

function closeNavbar() {
  navbarList.style = 'display: none';
}

$('.partners__carousel').slick({
  centerMode: true,
  variableWidth: true,
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
