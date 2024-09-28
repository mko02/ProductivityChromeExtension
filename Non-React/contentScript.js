(() => {
  let currentActiveTabUrl;
  let currentActiveTabTime;
  let totalActiveTime;

  const loadCurrentActiveTab = async () => {
    // get the total time the tab was active
    chrome.storage.sync.get([currentActiveTabUrl], (data) => {
      if (data) totalActiveTime = data[currentActiveTabUrl];
      else totalActiveTime = 0;

      console.log("data: ", totalActiveTime);
    });

    // get the current time
    currentActiveTabTime = new Date();
    console.log("currentDateTime: ", currentActiveTabTime);
  };

  const saveCurrentActiveTab = async () => {
    let closingTime = new Date();
    let timeSpent = closingTime - currentActiveTabTime;
    let timeSpentInSeconds = timeSpent / 1000;

    totalActiveTime += timeSpentInSeconds;

    console.log("current session timeSpentInSeconds: ", timeSpentInSeconds);
    console.log("current session totalActiveTime: ", totalActiveTime);

    chrome.storage.sync.set({
      [currentActiveTabUrl]: JSON.stringify(totalActiveTime),
    });
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { url } = obj;
    currentActiveTabUrl = url;
    console.log("Current Active URL: ", currentActiveTabUrl);

    loadCurrentActiveTab();
  });

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState == "visible") {
      console.log("tab is active");
    } else {
      console.log("tab is inactive");
      saveCurrentActiveTab();
    }
  });
})();
