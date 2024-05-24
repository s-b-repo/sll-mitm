
// This code attempts to block inspect element, as well as various browser shortcuts including keyboard shortcuts and mouse actions.
// It disables the right-click menu, the F12 key, the context menu, and other commonly used browser shortcuts.
// Please note that this code may not be foolproof and can be bypassed by determined users.

// Disable right-click menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Disable F12 key
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 123) {
    event.preventDefault();
  }
});

// Disable context menu
document.addEventListener('mousedown', function(event) {
  if (event.button === 2) {
    event.preventDefault();
  }
});

// Disable browser shortcuts
document.addEventListener('keydown', function(event) {
  // Disable Ctrl+Shift+I (Inspect Element) for Chrome and Firefox
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') {
    event.preventDefault();
  }
  
  // Disable Ctrl+Shift+C (Inspect Element) for Chrome and Firefox
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') {
    event.preventDefault();
  }
  
  // Disable Ctrl+Shift+J (Inspect Element) for Chrome and Firefox
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'J') {
    event.preventDefault();
  }
  
  // Disable Ctrl+U (View Page Source) for Chrome and Firefox
  if ((event.ctrlKey || event.metaKey) && event.key === 'U') {
    event.preventDefault();
  }
  
  // Disable F5 (Refresh) for Chrome and Firefox
  if (event.key === 'F5') {
    event.preventDefault();
  }
  
  // Disable Ctrl+R (Refresh) for Chrome and Firefox
  if ((event.ctrlKey || event.metaKey) && event.key === 'R') {
    event.preventDefault();
  }
  
  // Disable Ctrl+Shift+R (Hard Refresh) for Chrome and Firefox
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'R') {
    event.preventDefault();
  }

  // Add more shortcuts to disable as needed
});
// This code attempts to block inspect element and handle its opening. It also refreshes the page when inspect element is open and redirects to Google if it is detected.

// Block inspect element
document.addEventListener('keydown', function(event) {
  // Close inspect element when it opens
  if (event.keyCode === 123) {
    window.close();
  }
});

// Refresh the page when inspect element is open
window.addEventListener('devtoolschange', function(event) {
  if (event.detail.isOpen) {
    window.location.reload();
  }
});

// Redirect to Google if inspect element is detected
(function() {
  "use strict";
  var devtools = {
    isOpen: false,
    orientation: undefined
  };
  var threshold = 160;
  var emitEvent = function(isOpen, orientation) {
    if (devtools.isOpen !== isOpen || devtools.orientation !== orientation) {
      devtools.isOpen = isOpen;
      devtools.orientation = orientation;

      var event = new CustomEvent("devtoolschange", {
        detail: {
          isOpen: isOpen,
          orientation: orientation
        }
      });
      window.dispatchEvent(event);
    }
  };
  setInterval(function() {
    var widthThreshold = window.outerWidth - window.innerWidth > threshold;
    var heightThreshold = window.outerHeight - window.innerHeight > threshold;
    var orientation = widthThreshold ? "vertical" : "horizontal";

    if (!(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
      if (!devtools.isOpen || devtools.orientation !== orientation) {
        emitEvent(true, orientation);
      }
    } else {
      if (devtools.isOpen) {
        emitEvent(false, undefined);
      }
    }
  }, 500);
})();

// Redirect to Google if inspect element is detected
if (window.console && window.console.firebug) {
  window.location.href = "https://www.google.com/";
}




