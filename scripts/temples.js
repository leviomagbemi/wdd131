const hamburgerMenu = document.querySelector("#menu");
const headerLogo = document.querySelector("#header-logo")
const navigationList = document.querySelector(".nav-list");


hamburgerMenu.addEventListener('click', function (){
  hamburgerMenu.classList.toggle("open");
  headerLogo.classList.toggle("logo-hide");
  navigationList.classList.toggle("show-nav-list");
});