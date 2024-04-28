"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const module = document.querySelector('.b-anchors-2');
  const block = module.querySelector('.b-anchors-2__container');

  changeList();
  
  window.addEventListener('resize',function(){
    changeList();
  });

  function changeList(){
    if (module && document.documentElement.clientWidth <= 768) {
      block.addEventListener('click', function(){
        block.classList.toggle('active');
      });
    }
  }
 
});