const navbarList = document.getElementById('navbar-list');
const collapsible = document.getElementsByClassName('collapsible');

for(var i=0; i < collapsible.length; i ++){
    collapsible[i].addEventListener('click', function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content = content.style.display === 'block' ? content.style.display = "None" : content.style.display = "block";
    });
}

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
