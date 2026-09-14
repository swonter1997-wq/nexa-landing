const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav a");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("active");
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });
});