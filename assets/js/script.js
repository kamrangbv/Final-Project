// var burgerMenu = document.getElementById('burger-menu');
// var overlay = document.getElementById('menu');
// burgerMenu.addEventListener('click', function () {
//     this.classList.toggle("close");
//     overlay.classList.toggle("overlay");
// });

var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
});