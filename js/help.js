const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

var g = document.getElementById("canvas");
var text = g.getContext("2d");
// var gradient = text.createLinearGradient(1, 4, g.width, 2);
{
  gradient.addColorStop("1.0", "black");
  text.font = "40px sans-serif";
  // text.strokeStyle = gradient;
  text.strokeText("Smart Panda", 10, 60);
}
