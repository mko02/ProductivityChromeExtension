(() => {
	let currentTime;

	let currentUrl;
	let currentIcon;
	let totalUrlTime;
	let urlTimeStamps;

	let currentDomain;
	let totalDomainTime;
	let domainTimeStamps;

	chrome.runtime.onMessage.addListener((obj, sender, response) => {
		// chrome.storage.sync.clear();
		// chrome.storage.local.clear();

		const { url, domain, icon } = obj;
		currentUrl = url;
		currentDomain = domain;
		currentIcon = icon;

		console.log("currentUrl: ", currentUrl);
		console.log("currentDomain: ", currentDomain);
	});

	document.addEventListener("visibilitychange", function () {
		if (document.visibilityState == "visible") {
			loadCurrentActiveTab();
		} else {
			saveCurrentActiveTab();
			saveCurrentDomain();
		}
	});

	const loadCurrentActiveTab = async () => {
		currentTime = new Date();
		getCurrentDomainTime();
		getCurrentUrlTime();
	};

	const saveCurrentActiveTab = async () => {
		let closingTime = new Date();
		let timeSpent = closingTime - currentTime;
		let timeSpentInSeconds = timeSpent / 1000;

		totalUrlTime += timeSpentInSeconds;

		console.log("current session timeSpentInSeconds: ", timeSpentInSeconds);
		console.log("current session totalUrlTime: ", totalUrlTime);
		console.log("current session totalDomainTime: ", totalDomainTime);

		urlTimeStamps.push({
			start: currentTime,
			end: closingTime,
			timeSpent: timeSpentInSeconds,
		});

		let urlStorage = {
			type: "url",
			icon: currentIcon,
			totalUrlTime: totalUrlTime,
			timeStamps: urlTimeStamps,
		};

		console.log("tabStorage: ", urlStorage);

		chrome.storage.local.set({
			[currentUrl]: JSON.stringify(urlStorage),
		});
	};

	const saveCurrentDomain = async () => {
		let closingTime = new Date();
		let timeSpent = closingTime - currentTime;
		let timeSpentInSeconds = timeSpent / 1000;

		totalDomainTime += timeSpentInSeconds;

		console.log("current session timeSpentInSeconds: ", timeSpentInSeconds);
		console.log("current session totalDomainTime: ", totalDomainTime);

		domainTimeStamps.push({
			start: currentTime,
			end: closingTime,
			timeSpent: timeSpentInSeconds,
		});

		let domainStorage = {
			type: "domain",
			icon: currentIcon,
			totalDomainTime: totalDomainTime,
			timeStamps: domainTimeStamps,
		};

		console.log("domainStorage: ", domainStorage);

		chrome.storage.local.set({
			[currentDomain]: JSON.stringify(domainStorage),
		});
	};

	const getCurrentDomainTime = async () => {
		chrome.storage.local.get([currentDomain], (data) => {
			console.log("currentDomain: ", data);
			if (!data[currentDomain]) {
				totalDomainTime = 0;
				domainTimeStamps = [];
				console.log("no current domain found");
				console.log("current totalDomainTime: ", totalDomainTime);
				console.log("current timeStamps: ", domainTimeStamps);
				return;
			}

			let currentActiveDomainData = JSON.parse(data[currentDomain]);
			console.log("currentActiveDomainData: ", currentActiveDomainData);
			let parsedtotalDomainTime = parseFloat(
				currentActiveDomainData["totalDomainTime"]
			);
			let timeStamps = currentActiveDomainData["timeStamps"];
			console.log("parsedtotalDomainTime: ", parsedtotalDomainTime);

			if (!parsedtotalDomainTime) {
				totalDomainTime = 0;
				domainTimeStamps = [];
				console.log("no current domain time found");
				console.log("current totalDomainTime: ", totalDomainTime);
				console.log("current timeStamps: ", domainTimeStamps);
				return;
			}

			totalDomainTime = parsedtotalDomainTime;
			domainTimeStamps = timeStamps;
			console.log("current totalDomainTime: ", totalDomainTime);
			console.log("current timeStamps: ", domainTimeStamps);
		});
	};

	const getCurrentUrlTime = async () => {
		chrome.storage.local.get([currentUrl], (data) => {
			console.log("currentUrl: ", data);
			if (!data[currentUrl]) {
				totalUrlTime = 0;
				urlTimeStamps = [];
				console.log("current totalUrlTime: ", totalUrlTime);
				console.log("current timeStamps: ", urlTimeStamps);
				return;
			}

			let currentActiveTabData = JSON.parse(data[currentUrl]);
			let parsedtotalUrlTime = parseFloat(currentActiveTabData["totalUrlTime"]);
			let timeStamps = currentActiveTabData["timeStamps"];

			if (!parsedtotalUrlTime) {
				totalUrlTime = 0;
				urlTimeStamps = [];
				console.log("current totalUrlTime: ", totalUrlTime);
				console.log("current timeStamps: ", urlTimeStamps);
				return;
			}

			totalUrlTime = parsedtotalUrlTime;
			urlTimeStamps = timeStamps;
			console.log("current totalUrlTime: ", totalUrlTime);
			console.log("current timeStamps: ", urlTimeStamps);
		});
	};
})();
