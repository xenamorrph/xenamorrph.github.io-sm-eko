"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const swiperVideoGallery = new Swiper('.b-video-gallery-2__inner', {
    slidesPerGroup: 1,
    slidesPerView: 3,
    navigation: {
      prevEl: '.b-video-gallery-2__button_prev',
      nextEl: '.b-video-gallery-2__button_next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    watchOverflow: true,
    autoplay: {
      delay: 7000,
    },
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      100: {
        // Отображение кол-ва слайдов
        slidesPerView: 1,
        spaceBetween: 0,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 35,
      },
      
      1024: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
  });
})