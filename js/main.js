"use strict";
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
	}, 350);
	setTimeout(function(){
		appWrapper.fadeOut();
	}, 450);
});
