chrome.tabs.onActivated.addListener((tabId, tab) => {
  console.log("Tab updated: ");

  // await for response for getCurrentTab
  getCurrentTab().then((url) => {
    console.log("Url: ", url);

    // send message to contentScript.js
    chrome.tabs.sendMessage(tabId.tabId, { url: url }, (response) => {
      console.log("response: ", response);
    });
  });
});

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };

  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.url;
}
