"use strict";

var appWrapper = $('.appWrapper'),
	centerLevelText = $('.centerLevelText');

function removeFirstLoader(){
	appWrapper.transition({ scale: 0.9 }, 250, 'cubic-bezier(0, 0, 0, 0.69)')
			  .transition({ x: 2000 }, 1000, 'cubic-bezier(0, 0, 0, 0.69)', function(){
			  	appWrapper.css({'visibility': 'hidden'});
			  });
};