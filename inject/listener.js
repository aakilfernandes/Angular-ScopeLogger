"use strict";
(function(window) {
/* jshint strict: false */

function bootstrap() {
    var element = null;
    var doc = document;
    var win = window;
    if (window.iframe) {
        doc = iframe.contentDocument;
        win = iframe.contentWindow;
    }
    doc.addEventListener("mousedown", function(event){
        if(event.button == 2)
		    element = event.target;
		else
			element = null
	}, true);

	document.addEventListener('inspectscope',function(){
        if(typeof win.angular === 'undefined'){
			console.error('Cannot inspect scope, angular is undefined')
			return
		}
        console.log(win.angular.element(element).scope())
    });
    hasBootStrap = true;
}

if (window.iframe) {
    iframe.addEventListener('load', function(){
        bootstrap(true);
    });
    return;
} else if (document.readyState === 'complete') {
    bootstrap();
} else {
    window.addEventListener('load', bootstrap);
}
})(window);
