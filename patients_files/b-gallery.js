// "use strict";

document.addEventListener('DOMContentLoaded', function(){

  const swiperGallery = new Swiper('.b-gallery__container', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        // Отображение кол-ва слайдов
        slidesPerView: 1,
        spaceBetween: 0,
      },
      
      480: {
        slidesPerView: 2,
        // Отступ между слайдами
        spaceBetween: 20,
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      
      1600: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    
    // Кол-во пролистываемых сдайдеров
    slidesPerGroup: 1,
    // Кол-во отображаемых слайдов
    slidesPerView: 4,
    // Стрелки
    navigation: {
      prevEl: '.b-gallery__button_prev',
      nextEl: '.b-gallery__button_next',
    },

    pagination: {
      el: '.b-gallery__pagination',
      clickable: true,
    },
    
    // Возможность управлять с клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Автопрокрутка
    // autoplay: {
    //   delay: 7000,
    // },
    // Зацикливание слайдов при прокрутке
    loop: true,
    // Отключение слайдера, если слайдов меньше видимой области
    watchOverflow: true,
    
  });
})

