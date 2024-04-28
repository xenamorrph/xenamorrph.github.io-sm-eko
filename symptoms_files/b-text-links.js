"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const block = document.querySelector('.b-text-links');
  const list = block.querySelectorAll('.b-text-links__list ul li');
  const showButton = block.querySelector('.b-text-links__show');

  const SHOW = 13;
  
  if (block && list.length > SHOW) {
    hiddenMobile();

    window.addEventListener('resize', function(){
      hiddenMobile();
      showButton.textContent = 'Показать больше';
    });
    
    showButton.addEventListener('click', function(){
      if (showButton.textContent == 'Показать больше') {
        showList();
        showButton.textContent = 'Скрыть';
      } else if (showButton.textContent = 'Скрыть') {
        hiddenList();
        showButton.textContent = 'Показать больше';
      } else {
        showList();
        showButton.textContent = 'Скрыть';
      }
    })
  }


  function hiddenMobile(){
    if (document.documentElement.clientWidth <= 768) {
      hiddenList();
      showButton.textContent = 'Показать больше';
    } else {
      showList();
    }
  }

  function hiddenList(){
    for (let i = SHOW; i < list.length; i++) {
      list[i].style.display="none";
    }
  };

  function showList(){
    for (let i = 0; i < list.length; i++) {
      list[i].style.display="flex";
    }
  }
})