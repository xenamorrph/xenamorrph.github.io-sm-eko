"use strict";
$(document).ready(function() {

	$('.js-spoiler-toggle').click(function(){
		var box = $(this).closest('.js-spoiler-box');
		console.log(box);
		if(box.hasClass('active')){
			box.removeClass('active');
			box.find('.js-spoiler-hidden').removeAttr('style');
		} else {
			var h = box.find('.js-spoiler-content').innerHeight();

			box.addClass('active');
			box.find('.js-spoiler-hidden').height(h);
		}

	});

});