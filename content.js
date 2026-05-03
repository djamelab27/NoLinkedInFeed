function applySetting(isEnabled) {
  document.documentElement.classList.toggle("nolinkedinfeed-enabled", isEnabled);
}

chrome.storage.local.get({ enabled: true }, (settings) => {
  applySetting(settings.enabled);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.enabled) {
    applySetting(changes.enabled.newValue);
  }
});
