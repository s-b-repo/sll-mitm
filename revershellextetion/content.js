
// Hijack all network requests and send them to the background script
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Get the request URL
    const url = details.url;
    
    // Send the URL to the background script
    chrome.runtime.sendMessage({ type: "request", url });
    
    // Cancel the original request
    return { cancel: true };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
