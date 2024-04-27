$(document).ready(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__prev-btn" src="images/icon/arrow-left.svg">',
        nextArrow: '<img class="slider__next-btn" src="images/icon/arrow-right.svg">',

        
    });

    $("#phone").mask("+7(999)999 99 99");
});

let menuBtn = document.querySelector('.menu-btn');
let menuList = document.querySelector('.menu__list');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});