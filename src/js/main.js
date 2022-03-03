const navbarList = document.getElementById('navbar-list');
const collapsible = document.getElementsByClassName('collapsible');

for(var i=0; i < collapsible.length; i ++){
    collapsible[i].addEventListener('click', function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content = content.style.display === 'block' ? content.style.display = "none" : content.style.display = "block";
    });
}

function navbar(){
    navbarList.style.display === 'block' ? navbarList.style.display = "none" : navbarList.style.display = "block"
}