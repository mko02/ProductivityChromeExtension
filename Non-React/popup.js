document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get("active", (data) => {
    const active = data["active"] ? JSON.parse(data["active"]) : [];
    const container = document.getElementsByClassName("container")[0];
  });
});
