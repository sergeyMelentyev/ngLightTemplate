"use strict";
var removeLoader = document.getElementById("removeLoader");
var centerTextArea = $('.centerTextArea'),
	upperLevelText = $('.upperLevelText'),
	centerLevelText = $('.centerLevelText'),
	lowerLevelText = $('.lowerLevelText'),
	appWrapper = $('.appWrapper');

$('.centerLevelText').click(function(){
	appWrapper.transition({
		scale: 0.9, 
		perspective: '1000px',
		rotateY: '-5deg'
	},350,'cubic-bezier(0,0,0,.69)');
	setTimeout(function(){
		appWrapper.transition({
			x: 500,
			opacity: 0
			},500,'cubic-bezier(0,0,0,.69)');
		appWrapper.fadeOut(350);
	}, 350);
	setTimeout(function(){
		if (removeLoader.parentNode) {
			removeLoader.parentNode.removeChild(removeLoader);
		}
	}, 1000);
});
