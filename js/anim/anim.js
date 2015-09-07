"use strict";

var timerCounterLoaderWrapper = Date.now() - timerStart;
var preLoaderWrapper = $('.preLoaderWrapper'),
	launchAppButton = $('.launchAppButton'),
	haveToWait = $('.haveToWait'),
	haveToWaitUp = $('.haveToWaitUp'),
	haveToWaitDown = $('.haveToWaitDown'),
	preLoaderUpperText = $('.preLoaderUpperText'),
	preLoaderLowerText = $('.preLoaderLowerText'),
	canvas = $('#canvas');

function launchAppHaveToWaitHide(){
	haveToWaitUp.transition({ y: -20, opacity: 0 }, 1000, 'cubic-bezier(0, 0, 0, 0.69)');
	haveToWaitDown.transition({ y: 20, opacity: 0 }, 1000, 'cubic-bezier(0, 0, 0, 0.69)');
	haveToWait.transition({ opacity: 0 }, 1000, 'cubic-bezier(0, 0, 0, 0.69)', launchAppButtonShow);
};
function launchAppButtonShow(){
	launchAppButton.addClass('animateStartButton').transition({ opacity: 1 }, 1000);
	preLoaderUpperText.
		transition({ x: -20 }, 10).
		transition({ x: 0, opacity: 1 }, 3000, 'cubic-bezier(0, 0, 0, 0.69)');
	preLoaderLowerText.
		transition({ x: 20 }, 10).
		transition({ x: 0, opacity: 1 }, 3000, 'cubic-bezier(0, 0, 0, 0.69)');
};
function removePreLoader(){
	preLoaderWrapper.transition({ scale: 0.9 }, 250, 'cubic-bezier(0, 0, 0, 0.69)')
					.transition({ x: 2000 }, 1000, 'cubic-bezier(0, 0, 0, 0.69)', function(){
						canvas.remove();
					});
};
