"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const block = document.querySelector('.b-photo');
  const list = block.querySelectorAll('.b-photo__item');
  const showButton = block.querySelector('.b-photo__show');
  const SHOW = 6;
  
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
      list[i].style.display="block";
    }
  }
});

