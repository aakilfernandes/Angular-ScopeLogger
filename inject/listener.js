"use strict";
(function(window) {
/* jshint strict: false */


function bootstrap() {

	var element = null

	document.addEventListener("mousedown", function(event){
	    if(event.button == 2)
		    element = event.target;
		else
			element = null
	}, true);

	document.addEventListener('inspectscope',function(){
		if(typeof angular === 'undefined'){
			console.error('Cannot inspect scope, angular is undefined')
			return
		}

		console.log(angular.element(element).scope())
	})

}

if (document.readyState === 'complete') {
	bootstrap();
} else {
	window.addEventListener('load', bootstrap);
}

})(window);