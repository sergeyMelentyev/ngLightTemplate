"use strict";

var preLoaderWrapper = $('.preLoaderWrapper'),
	centerLevelText = $('.centerLevelText');

function removeFirstLoader(){
	preLoaderWrapper.transition({ scale: 0.9 }, 250, 'cubic-bezier(0, 0, 0, 0.69)')
			  .transition({ x: 2000 }, 1000, 'cubic-bezier(0, 0, 0, 0.69)', function(){
			  	preLoaderWrapper.css({'visibility': 'hidden'});
			  });
};