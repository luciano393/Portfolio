import hamburgerMenu from "./hamburger-menu.js";

const d = document;
let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu('.btn-menu','.menu','.menu a');
})
	