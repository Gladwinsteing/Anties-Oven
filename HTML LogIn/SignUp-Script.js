document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var uniqueid = document.getElementById('uniqueid').value

    // The URL of your Google Apps Script Web App (replace with your URL)
    var url = "https://script.google.com/macros/s/AKfycbw4RLCg-5_N9ngXKWM9eXWDl0gmwsQyxjcPhuomxE2P0SKzN-wifRoCe3Cxgv6awdtaBg/exec";
    var APIs= "https://script.google.com/macros/s/AKfycbyxWn2g-mZ7N3fVG4LKdGs0yfRJPg4jONaM2VU7YJxHFG2-p_1J7Q2jz9H8pRiti9C8Wg/exec";
    fetch(url, {
    method: 'POST',
    body: new URLSearchParams({
        'action': 'signup', // Action type to differentiate signup and login requests
        'username': username,
        'password': password,
        'uniqueid': uniqueid
    
    })
    })
    .then(response => response.text())
    .then(result => {
    if (result === "Success") {
        document.getElementById('message').innerText = "Account created successfully!\n Save or Screenshot your REFERENCE";
    } else if (result === "Username exists") {
        document.getElementById('message').innerText = "Username already taken.";
    } else {
        document.getElementById('message').innerText = "An error occurred. Please try again.";
    }
    })
    .catch(error => {
    console.error('Error:', error);
    document.getElementById('message').innerText = "An error occurred. Please try again.\n Ignore this REFERENCE below!";
    });
});
function navigate() {
    window.location.href = "login - Copy.html";
}