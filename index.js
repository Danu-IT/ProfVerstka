'use strict'

let brandMenu = document.querySelector('.brand__menu');
let headerBurger = document.querySelector('.header__burger');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    brandMenu.classList.toggle('hidden');
}

headerBurger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu)