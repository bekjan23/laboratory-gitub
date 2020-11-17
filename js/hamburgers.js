// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var headerMobileMenu = document.querySelector(".header__mobile-menu");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  headerMobileMenu.classList.toggle("is-active");
  // Do something else, like open/close menu
});