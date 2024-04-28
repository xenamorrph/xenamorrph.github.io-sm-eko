"use strict";

document.addEventListener('DOMContentLoaded', function(){

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {

    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  // Функция callback при необходиомсти 
  // const someFunc = (instance) => {
  //   if (instance) {
  //     instance.on('slideChange', function (e) {
  //       console.log('*** mySwiper.activeIndex', instance.activeIndex);
  //     });
  //   }
  // };

  resizableSwiper(
    '(max-width: 768px)',
    '.b-action-tile__container',
    {
      loop: true,
      spaceBetween: 32,
      slidesPerGroup: 1,
      slidesPerView: 1,
      
      pagination: {
        el: '.b-action-tile__pagination',
        clickable: true,
      },

      autoplay: {
        delay: 7000,
      },

      watchOverflow: true,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    },
  );


})