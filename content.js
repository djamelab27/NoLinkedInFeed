function applySetting(isEnabled) {
  const isHomeFeed = location.pathname === "/feed" || location.pathname.startsWith("/feed/");
  document.documentElement.classList.toggle("nolinkedinfeed-enabled", isEnabled && isHomeFeed);
}

chrome.storage.local.get({ enabled: true }, (settings) => {
  applySetting(settings.enabled);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.enabled) {
    applySetting(changes.enabled.newValue);
  }
});

// LinkedIn changes routes without a full page load. Keep the class scoped to
// the home feed as the user navigates through the single-page application.
let previousPath = location.pathname;
setInterval(() => {
  if (location.pathname === previousPath) return;
  previousPath = location.pathname;
  chrome.storage.local.get({ enabled: true }, (settings) => {
    applySetting(settings.enabled);
  });
}, 1000);
