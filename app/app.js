const btn = document.getElementById('menu-btn')
const menu = document.querySelector('.navegation__menu')
btn.addEventListener('click', showMenu)

function showMenu(e) {
    menu.classList.toggle('show')
}





/* Scroll Reveal */
ScrollReveal().reveal('.content-img', { delay: 200 });
ScrollReveal().reveal('.services__title', { delay: 200 });
ScrollReveal().reveal('.services__content__card', { delay: 500 });
ScrollReveal().reveal('.projects__title', { delay: 200 });
ScrollReveal().reveal('.projects__content__card', { delay: 500 });
ScrollReveal().reveal('.about__text-content', { delay: 300 });
ScrollReveal().reveal('.about__img-content', { delay: 700 });
ScrollReveal().reveal('.content', { delay: 300 });
ScrollReveal().reveal('.footer', { delay: 300 });

