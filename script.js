let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}
window.addEventListener('scroll', scrollValue);

function scrollValue1() {
    var colorchange = document.getElementById('colorchange');
    var scroll = window.scrollY;
    if (scroll < 200) {
        colorchange.classList.remove('colorchange1');
    } if (scroll > 200){
        colorchange.classList.add('colorchange1');
    }
}
window.addEventListener('scroll', scrollValue1);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};




