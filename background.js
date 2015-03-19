chrome.contextMenus.create({
	title: 'Inspect Scope'
	,contexts:['all']
	,onclick: function(info,tab){
		chrome.tabs.sendMessage(tab.id,{})
	}
});