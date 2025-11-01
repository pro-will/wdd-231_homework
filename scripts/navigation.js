const navbuttom = document.querySelector('#hum-btn');
const navlinks = document.querySelector('#nav-bar');

//Toggle the navigation menu
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
});