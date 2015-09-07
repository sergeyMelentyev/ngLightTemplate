"use strict";

$(window).load(function() {
	if (timerCounterLoaderWrapper < 4900) {
		setTimeout(appLoaded, 5000 - timerCounterLoaderWrapper);
	} else {
		appLoaded();
	}
});

function appLoaded(){
	launchAppHaveToWaitHide();
	launchAppButton.click(removePreLoader);	
};
