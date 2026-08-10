# Privacy Policy for NoLinkedInFeed

Last updated: August 10, 2026

NoLinkedInFeed runs entirely inside Chrome. It has no server, account, analytics, advertising, tracking, or data sale.

## Data the extension handles

The extension stores one local preference: whether feed hiding is enabled. Its content script checks whether the current LinkedIn path is the home feed and adds or removes a CSS class. It does not read, copy, retain, or transmit posts, messages, profile information, contacts, or browsing history.

## Data sharing and retention

No data is sent to the developer or to third parties. The enabled/disabled preference remains in `chrome.storage.local` until the user changes it, clears extension data, or removes the extension.

## Permission

- `storage`: remember the local ON/OFF preference.
- Access to `www.linkedin.com`: apply the feed-hiding stylesheet only on LinkedIn. The hiding class is active only on the `/feed/` route.

## Limited use

The use of information received from Chrome APIs complies with the Chrome Web Store User Data Policy, including the Limited Use requirements. Information is used only to provide the feed-hiding feature and is not used for advertising or profiling.

## Contact

Questions can be opened as an issue at https://github.com/djamelab27/NoFeed/issues.
