chrome.contextMenus.create({
	title: 'Log scope to console'
	,contexts:['all']
	,onclick: function(info,tab){
		chrome.tabs.sendMessage(tab.id,{})
	}
});