"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const swiperVideoGallery = new Swiper('.b-licenses-2__container', {
    pagination: {
      el: '.b-licenses-2__pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    watchOverflow: true,
    // autoplay: {
    //   delay: 7000,
    // },
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      100: {
        // Отображение кол-ва слайдов
        slidesPerView: 1,
        spaceBetween: 0,
      },

      480: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      

      768: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      
      1024: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
    },
  });
})