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

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();

    if (name.length < 2) {
        formMessage.textContent = "Введите имя минимум из 2 символов.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Введите корректный email.";
        return;
    }

    formMessage.textContent = "Заявка отправлена! Мы свяжемся с вами.";

    contactForm.reset();

});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

    });

});