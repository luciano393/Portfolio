import contactFormValidations from "./formulario.js";
import hamburgerMenu from "./hamburger-menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu('.btn-menu','.menu','.menu a');
    contactFormValidations();
})


ScrollReveal().reveal('#portfolio', {delay: 700});
ScrollReveal().reveal('#skills', { delay: 700 });
ScrollReveal().reveal('#about', { delay: 700 });
ScrollReveal().reveal('#contact', { delay: 700 });
ScrollReveal().reveal('footer', { delay: 700 });