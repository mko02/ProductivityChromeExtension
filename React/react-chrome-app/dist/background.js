chrome.tabs.onActivated.addListener((tabId, tab) => {
	console.log("Tab updated: ");

	// await for response for getCurrentTab
	getCurrentTab().then((currentTab) => {
		//unpack
		let url = currentTab.url;
		let icon = currentTab.icon;
		let domain = new URL(url).hostname;

		console.log("Url: ", url);
		console.log("Domain: ", domain);

		// send message to contentScript.js
		chrome.tabs.sendMessage(
			tabId.tabId,
			{
				url: url,
				domain: domain,
				icon: icon,
			},
			(response) => {
				console.log("response: ", response);
			}
		);
	});
});

async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true };

	// `tab` will either be a `tabs.Tab` instance or `undefined`.
	let [tab] = await chrome.tabs.query(queryOptions);
	return {
		url: tab.url,
		icon: tab.favIconUrl,
	};
}
