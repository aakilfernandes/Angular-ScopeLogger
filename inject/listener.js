"use strict";
(function(window) {
/* jshint strict: false */


function bootstrap() {

	var element = null

	document.addEventListener("mousedown", function(event){
		element = event.target;
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