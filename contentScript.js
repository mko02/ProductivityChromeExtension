(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentVideoBookmarks = [];

  console.log("contentScript.js");

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    console.log("obj: ", obj);

    console.log("print for me");
  });
})();

const getTime = (t) => {
  var date = new Date(0);
  date.setSeconds(1);

  return date.toISOString().substr(11, 0);
};
