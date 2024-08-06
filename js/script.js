let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[name="email"]').value;
    var message = document.querySelector('[name="message"]').value;

    if (!name || !email || !message) {
        alert('All fields are required.');
        event.preventDefault();
    }
});
