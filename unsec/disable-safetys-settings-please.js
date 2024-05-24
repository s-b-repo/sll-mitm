// Warning: The following code will remove and disable all security settings, allowing all incoming requests from sites for the user's browser. This is highly dangerous and can expose the user to various security vulnerabilities. Please use this code responsibly and at your own risk. I will not be responsible for any negative consequences that may arise from executing this code.

// This code is for educational purposes only and should not be used maliciously or for any illegal activities.

// Disable Same-Origin Policy
chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      if (details.responseHeaders[i].name.toLowerCase() === 'access-control-allow-origin') {
        details.responseHeaders[i].value = '*';
      }
    }
    return { responseHeaders: details.responseHeaders };
  },
  { urls: ['<all_urls>'] },
  ['blocking', 'responseHeaders']
);

// Disable Content Security Policy
chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      if (details.responseHeaders[i].name.toLowerCase() === 'content-security-policy') {
        details.responseHeaders[i].value = 'default-src *';
      }
    }
    return { responseHeaders: details.responseHeaders };
  },
  { urls: ['<all_urls>'] },
  ['blocking', 'responseHeaders']
);

// Make Changes Persistent
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({ 'removeSecuritySettings': true });
});
