"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const breed3Block = document.querySelector('.b-breed-3');
  const breed3List = breed3Block.querySelectorAll('.b-breed-3__item');
  const breedButton = breed3Block.querySelector('.b-breed-3__all');

  const SHOW = 3;

  hiddenMobile();

  window.addEventListener('resize', function(){
    hiddenMobile();
    breedButton.textContent = 'Показать больше';
  });

  breedButton.addEventListener('click', function(){
    if (breedButton.textContent == 'Показать больше') {
      showList();
      breedButton.textContent = 'Скрыть';
    } else if (breedButton.textContent = 'Скрыть') {
      hiddenList();
      breedButton.textContent = 'Показать больше';
    } else {
      showList();
      breedButton.textContent = 'Скрыть';
    }
  })

  function hiddenMobile(){
    if (breed3Block && breed3List.length > SHOW) {
      if (document.documentElement.clientWidth <= 768) {
        hiddenList();
        breedButton.textContent = 'Показать больше';
      } else {
        showList();
      }
    }
  }

  function hiddenList(){
    for (let i = SHOW; i < breed3List.length; i++) {
      breed3List[i].style.display="none";
    }
  };

  function showList(){
    for (let i = 0; i < breed3List.length; i++) {
      breed3List[i].style.display="flex";
    }
  }
})