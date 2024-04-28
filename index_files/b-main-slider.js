"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const swiperIntro = new Swiper('.b-main-slider__slider', {
    // Кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    // Кол-во отображаемых слайдов
    slidesPerView: 1,
    // Стрелки
    // navigation: {
    //   prevEl: '.b-main-intro__button--prev',
    //   nextEl: '.b-main-intro__button--next',
    // },
    // // Управление с клавиатуры 
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Отключение слайдера, если слайдов меньше видимой области 
    watchOverflow: true,
    // Автопрокрутка
    autoplay: {
      delay: 7000,
    },
    // Зацикливание слайдов при автопрокрутке
    loop: true,
    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
})