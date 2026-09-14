const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("header nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("active");
});