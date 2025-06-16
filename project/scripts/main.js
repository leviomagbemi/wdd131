const hamburgerMenu = document.querySelector("#menu");
const headerLogo = document.querySelector("#header-logo");
const navigation = document.querySelector(".nav-list");


hamburgerMenu.addEventListener("click", function(e){
 hamburgerMenu.classList.toggle("open");
 headerLogo.classList.toggle("logo-hide");
 navigation.classList.toggle("show-nav-list");
})