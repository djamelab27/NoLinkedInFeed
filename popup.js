const toggle = document.getElementById("toggle");
const statusText = document.getElementById("statusText");

function updateStatus(isEnabled) {
  toggle.checked = isEnabled;
  statusText.textContent = isEnabled ? "ON" : "OFF";
}

chrome.storage.local.get({ enabled: true }, (settings) => {
  updateStatus(settings.enabled);
});

toggle.addEventListener("change", () => {
  chrome.storage.local.set({ enabled: toggle.checked }, () => {
    updateStatus(toggle.checked);
  });
});
