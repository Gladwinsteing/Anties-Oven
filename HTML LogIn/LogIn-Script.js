    // Handle form submission via AJAX
    function handleLogin(event) {
      event.preventDefault(); // Prevent traditional form submission

      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      // URL of the deployed Google Apps Script Web App
      var url = "https://script.google.com/macros/s/AKfycbz5pyPFLLKq4MmzlPzRdOhrZYiBmr-pnPT9Bgk0DyfwRBzfUyJpT8iQ-CwYasC8LQSPtg/exec";

      // Send data to Google Apps Script using fetch
      fetch(url, {
        method: 'POST',
        body: new URLSearchParams({
          'action': 'login',   // Action identifier (you can customize this)
          'username': username,
          'password': password
        })
      })
      .then(response => response.text())  // Process the response from Apps Script
      .then(result => {
        if (result === "Success") {
          window.location.href = "../../HTML Design/book.html";  // Redirect to welcome page on successful login
        } else {
          document.getElementById('message').innerText = "Incorrect username or password.";
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerText = "Something went wrong. Try again later.";
      });
    }