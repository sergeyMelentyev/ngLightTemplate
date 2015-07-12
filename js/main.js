"use strict";
var centerTextArea = $('.centerTextArea');
var upperLevelText = $('.upperLevelText');
var centerLevelText = $('.centerLevelText');
var lowerLevelText = $('.lowerLevelText');
var upperLeftElem = $('.upperLeftElem');
var upperRightElem = $('.upperRightElem');
var lowerLeftElem = $('.lowerLeftElem');
var lowerRightElem = $('.lowerRightElem');
var appWrapper = $('.appWrapper');
var upperLeftElemHidden = $('.upperLeftElemHidden');
var upperRightElemHidden = $('.upperRightElemHidden');
var lowerLeftElemHidden = $('.lowerLeftElemHidden');
var lowerRightElemHidden = $('.lowerRightElemHidden');

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

upperLeftElem.transition({
		opacity: 100
	},5000,'cubic-bezier(0,0,0,.69)');
upperRightElem.transition({
		opacity: 100
	},5000,'cubic-bezier(0,0,0,.69)');
lowerLeftElem.transition({
		opacity: 100
	},5000,'cubic-bezier(0,0,0,.69)');
lowerRightElem.transition({
		opacity: 100
	},5000,'cubic-bezier(0,0,0,.69)');

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
}, 3000);


new Vivus('upperLeftSvg', {
    type: 'async',
    duration: 250,
    animTimingFunction: Vivus.EASE
});
new Vivus('upperRightSvg', {
    type: 'async',
    duration: 250,
    animTimingFunction: Vivus.EASE
});
new Vivus('lowerLeftSvg', {
    type: 'delayed',
    duration: 300,
    animTimingFunction: Vivus.LINEAR
});
new Vivus('lowerRightSvg', {
    type: 'delayed',
    duration: 300,
    animTimingFunction: Vivus.LINEAR
});
setTimeout(function(){
	upperLeftElemHidden.transition({
		opacity: 100
	},1000,'cubic-bezier(0,0,0,.69)');
	upperRightElemHidden.transition({
		opacity: 100
	},1000,'cubic-bezier(0,0,0,.69)');
	lowerLeftElemHidden.transition({
		opacity: 100
	},1000,'cubic-bezier(0,0,0,.69)');
	lowerRightElemHidden.transition({
		opacity: 100
	},1000,'cubic-bezier(0,0,0,.69)');
}, 7000);



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













