// Code to create a persistent cookie that pings a site every 5 minutes and adds itself to other cookies

// Function to create a cookie
function createCookie(name, value, minutes) {
  var expires;
  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + (minutes *60* 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to ping a site
function pingSite() {
  // Replace "https://example.com" with the URL of the site you want to ping
  fetch("https://example.com")
    .then(response => {
      // Do something with the response if needed
    })
    .catch(error => {
      // Handle any errors
    });
}

// Function to add itself to other cookies
function addToOtherCookies() {
  var existingCookies = document.cookie.split(";");
  existingCookies.forEach(cookie => {
    var cookieName = cookie.split("=")[0].trim();
    var cookieValue = cookie.split("=")[1].trim();
    // Modify the existing cookie to include the new cookie's name and value
    document.cookie = cookieName + "=" + cookieValue + "; path=/";
  });
}

// Create the persistent cookie that pings the site every 5 minutes
createCookie("pingCookie", "ping", 5);

// Ping the site immediately
pingSite();

// Ping the site every 5 minutes
setInterval(pingSite, 5 *60* 1000);

// Add itself to other existing cookies
addToOtherCookies();
