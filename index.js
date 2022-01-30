'use strict';


let sizeMenu = document.querySelector('.size__menu');
let sizeText = document.querySelector('.size__text');
let sizeTextImg = document.querySelector('.size__text-img');

sizeText.addEventListener('click',function(){
    sizeMenu.classList.toggle('hidden');
    sizeText.classList.toggle('size__text-pink');
    sizeTextImg.classList.toggle('size__img-pink');

    if(sizeTextImg.getAttribute('src') === 'images/size/01.svg'){
        sizeTextImg.setAttribute('src', 'images/size/01-hover.svg')
    } else {
        sizeTextImg.setAttribute('src', 'images/size/01.svg')
    }
});

let sizeTitles = document.querySelectorAll('.size__title');
sizeTitles.forEach(function(header){
    header.addEventListener('click',function(event){
        event.target.nextElementSibling.classList.toggle('hidden');
    })
})


let sizeContent = document.querySelector('.size__content');
let sizeCheckbox = document.querySelector('.size__checkbox');
sizeContent.addEventListener('click',function(){
    sizeCheckbox.classList.toggle('hidden');
})