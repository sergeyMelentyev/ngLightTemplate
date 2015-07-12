"use strict";
var centerTextArea = $('.centerTextArea');
var upperLevelText = $('.upperLevelText');
var centerLevelText = $('.centerLevelText');
var lowerLevelText = $('.lowerLevelText');
var upperLeftElem = $('.upperLeftElem');
var upperRightElem = $('.upperRightElem');
var lowerLeftElem = $('.lowerLeftElem');
var lowerRightElem = $('.lowerRightElem');




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


setTimeout(function(){

}, 3000);

new Vivus('upperLeftSvg', {
    type: 'async',
    duration: 500,
    animTimingFunction: Vivus.EASE
});
new Vivus('upperRightSvg', {
    type: 'async',
    duration: 500,
    animTimingFunction: Vivus.EASE
});
new Vivus('lowerLeftSvg', {
    type: 'delayed',
    duration: 650,
    animTimingFunction: Vivus.LINEAR
});
new Vivus('lowerRightSvg', {
    type: 'delayed',
    duration: 650,
    animTimingFunction: Vivus.LINEAR
});










