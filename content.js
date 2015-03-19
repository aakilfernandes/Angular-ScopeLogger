(function(){

if (window.top !== window) return

injectScript('listener.js')

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	injectScript('onclick.js');
});

function injectScript(url){
	var inspectorScript = document.createElement('script');
	inspectorScript.type = 'text/javascript';
	inspectorScript.src = chrome.extension.getURL('inject/inspectscope.'+url);
	document.head.appendChild(inspectorScript);
}


})()