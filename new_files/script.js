"use strict";

document.addEventListener('DOMContentLoaded', function(){
  let menuToggle = document.querySelector('.header__menu');

  menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('active');
  })

	let search = document.querySelector('.header__search');

	if(search){
		search.querySelector('.header__search-toggle').addEventListener('click', function(){
			if(search.classList.contains('active')){
				search.classList.remove('active');
			} else {
				search.classList.add('active');
			}
		});
	}

	let header = document.querySelector('.js-header-stick');

	if(header){
		window.addEventListener("scroll", headerStick);
	}

	function headerStick(){
		let scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;

		if(scrollTop > 100){
			header.classList.add('stick');
		} else {
			header.classList.remove('stick');
		}
	}

	if(document.getElementById('alert-toolbar')!=null){document.body.classList.add('show-alert-toolbar');}

});