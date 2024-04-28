"use strict";

document.addEventListener('DOMContentLoaded', function(){
  const contentHidden = document.querySelector('.b-text-icon__hidden');
  const buttons = document.querySelectorAll('.b-text-icon__show');
 
  if (contentHidden) {
    buttons.forEach((button) => 
      button.addEventListener('click', function(e){
        let parent = e.target.parentElement;
        parent.classList.toggle('active');

        if (parent.classList.contains('active')){
          e.target.textContent = 'Скрыть';
        } else {
          e.target.textContent = 'Показать ещё';
        }
      })
    )
  };

  
});



