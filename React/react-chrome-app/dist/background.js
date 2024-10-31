let activeTab = null;
let activeWindowID = null;

let storageLock = false;
let storageQueue = [];

// handling tab switches within the same window
chrome.tabs.onActivated.addListener(function (activeInfo) {
	// Since previous activeDomain exists, we need to create lostFocus event
	if (activeTab !== null) {
		const currTime = new Date().toISOString();
		const activeDomain = getDomainFromUrl(activeTab.url);
		const activeUrl = activeTab.url;
		const activeIcon = activeTab.favIconUrl;

		storageQueue.push({
			domain: activeDomain,
			url: activeUrl,
			currTime: currTime,
			focusType: "active_off",
			icon: activeIcon,
			callback: function () {},
		});

		activeTab = null;
	}

	// get the information of the newly activated tab
	chrome.tabs.get(activeInfo.tabId, function (tab) {
		const currTime = new Date().toISOString();
		const domain = getDomainFromUrl(tab.url);
		const url = tab.url;
		const icon = tab.favIconUrl;

		// ensure we are not saving the extension, new tab, or chrome:// urls
		if (isValidDomain(domain) && isValidUrl(url)) {
			// create focus event for current tab
			storageQueue.push({
				domain: domain,
				url: url,
				currTime: currTime,
				focusType: "active_on",
				icon: icon,
				callback: function () {},
			});

			activeTab = tab;
		}

		if (!storageLock) {
			processStorageQueue();
		}
	});
});

// window switches
chrome.windows.onFocusChanged.addListener(function (windowId) {
	if (activeTab !== null) {
		const currTime = new Date().toISOString();
		const activeDomain = getDomainFromUrl(activeTab.url);
		const activeUrl = activeTab.url;
		const activeIcon = activeTab.favIconUrl;

		// switching window causes previous tab to lose focus
		storageQueue.push({
			domain: activeDomain,
			url: activeUrl,
			currTime: currTime,
			focusType: "windoe_off",
			icon: activeIcon,
			callback: function () {},
		});

		activeTab = null;

		if (!storageLock) {
			processStorageQueue();
		}
	}

	// change focus from one window to another
	if (windowId !== chrome.windows.WINDOW_ID_NONE) {
		// get the current window active tab
		chrome.windows.get(windowId, { populate: true }, function (window) {
			if (window.focused) {
				activeTab = window.tabs.find((tab) => tab.active);

				if (activeTab) {
					const domain = getDomainFromUrl(activeTab.url);
					const url = activeTab.url;
					const currTime = new Date().toISOString();
					const icon = activeTab.favIconUrl;

					if (isValidDomain(domain) && isValidUrl(url)) {
						storageQueue.push({
							domain: domain,
							url: url,
							currTime: currTime,
							focusType: "window_on",
							icon: icon,
							callback: function () {},
						});
					} else {
						activeTab = null;
					}
				}
			}

			if (!storageLock) {
				processStorageQueue();
			}
		});
	}

	activeWindowID = windowId;
});

chrome.tabs.onRemoved.addListener(function (tabId) {
	const currTime = new Date().toISOString();
	const activeDomain = getDomainFromUrl(activeTab.url);
	const activeUrl = activeTab.url;
	const activeIcon = activeTab.favIconUrl;
	const activeTabId = activeTab.id;

	if (tabId === activeTabId && activeDomain) {
		storageQueue.push({
			domain: activeDomain,
			url: activeUrl,
			currTime: currTime,
			focusType: "remove_off",
			icon: activeIcon,
			callback: function () {},
		});

		activeTab = null;

		if (!storageLock) {
			processStorageQueue();
		}
	}
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	// ensure the tab is fully loaded
	if (changeInfo.status !== "complete") {
		return;
	}

	const currTime = new Date().toISOString();

	if (activeTab !== null) {
		const activeDomain = getDomainFromUrl(activeTab.url);
		const activeUrl = activeTab.url;
		const activeIcon = activeTab.favIconUrl;
		const activeTabId = activeTab.id;

		storageQueue.push({
			domain: activeDomain,
			url: activeUrl,
			currTime: currTime,
			focusType: "update_off",
			icon: activeIcon,
			callback: function () {},
		});

		activeTab = null;
	}

	const domain = getDomainFromUrl(tab.url);
	const url = tab.url;
	const icon = tab.favIconUrl;

	// ensure we are not saving the extension, new tab, or chrome:// urls
	if (isValidDomain(domain) && isValidUrl(url)) {
		// create focus event for current tab
		storageQueue.push({
			domain: domain,
			url: url,
			currTime: currTime,
			focusType: "update_on",
			icon: icon,
		});

		activeTab = tab;
	}

	if (!storageLock) {
		processStorageQueue();
	}
});

function processStorageQueue() {
	if (storageQueue.length == 0) {
		storageLock = false;
		return;
	}

	storageLock = true;
	const { domain, url, currTime, focusType, icon, callback } =
		storageQueue.shift();

	createFocusEvent(domain, url, currTime, focusType, icon, function () {
		if (callback) callback();
		processStorageQueue();
	});
}

function createFocusEvent(domain, url, currTime, focusType, iconURL, callback) {
	const focusEvent = {
		timeStamp: currTime,
		focusType: focusType,
		url: url,
	};

	chrome.storage.local.get(["tabFocusEvents"], function (result) {
		const tabFocusEvents = result.tabFocusEvents || {};

		if (!tabFocusEvents[domain]) {
			tabFocusEvents[domain] = {
				domain: domain,
				events: [],
				icon: iconURL,
			};
		}

		tabFocusEvents[domain].events.push(focusEvent);

		chrome.storage.local.set({ tabFocusEvents: tabFocusEvents }, function () {
			console.log("tabFocusEvents set for: ", domain, focusEvent);
			if (callback) callback();
		});
	});
}

function getDomainFromUrl(url) {
	try {
		const urlObj = new URL(url); // Use the URL constructor to parse
		return urlObj.hostname;
	} catch (error) {
		console.error("Invalid URL: ", error);
		return null;
	}
}

function isValidDomain(domain) {
	return !(
		domain === "extensions" ||
		domain === null ||
		domain === "mlgpaokmkbpbhmdebjfajahjfbefbkog"
	);
}

function isValidUrl(url) {
	return !(
		url.includes("chrome://") ||
		url.includes("gcomkonnlehkbfdpfoooldgoidapikgn")
	);
}

function logStorageContents() {
	chrome.storage.local.get(null, function (items) {
		console.log("===== Chrome Storage Contents =====");

		if (Object.keys(items).length === 0) {
			console.log("Storage is empty.");
		} else {
			for (const key in items) {
				if (items.hasOwnProperty(key)) {
					console.log(`Key: ${key}`);

					if (typeof items[key] === "object") {
						console.log("Value (Object): ");
						console.log(JSON.stringify(items[key], null, 2));
					} else {
						console.log(`Value: ${items[key]}`);
					}

					console.log("-----------------------------------");
				}
			}
		}

		console.log("===== End of Storage Contents =====");
	});
}

chrome.runtime.onInstalled.addListener(() => {
	console.log("Extension installed, remove storage contents...");
	chrome.storage.local.clear();
	console.log("Extension installed, logging storage contents...");
	logStorageContents();
});
