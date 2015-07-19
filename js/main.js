"use strict";
var centerTextArea = $('.centerTextArea'),
	upperLevelText = $('.upperLevelText'),
	centerLevelText = $('.centerLevelText'),
	lowerLevelText = $('.lowerLevelText'),
	appWrapper = $('.appWrapper');

var starAnimationPosition = function(){
	upperLevelText.transition({
		x: -20,
		opacity: 0
	});
	centerLevelText.transition({
		x: 0,
		opacity: 0
	});
	lowerLevelText.transition({
		x: 20,
		opacity: 0
	});
};

starAnimationPosition();

setTimeout(function(){
	centerTextArea.css({'opacity': 100});
	upperLevelText.transition({
		x: 0,
		opacity: 100
	},5000,'cubic-bezier(0,0,0,.69)');
	centerLevelText.transition({
		x: 0,
		opacity: 100
	},5000,'cubic-bezier(0,0,0,.69)');
	lowerLevelText.transition({
		x: 0,
		opacity: 100
	},5000,'cubic-bezier(0,0,0,.69)');
}, 1000);

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













