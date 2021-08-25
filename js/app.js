import hamburgerMenu from "./hamburger-menu.js";

const d = document;
var scroll = new SmoothScroll('a[href*="#"]');

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu('.btn-menu','.menu','.menu a');
})
	