// Handle form submission via AJAX
function handleLogin(event) {
    event.preventDefault(); // Prevent traditional form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // URL of the deployed Google Apps Script Web App
    var url = "https://script.google.com/macros/s/AKfycbykU8I5lBBHahSAG1e_FoETR3ggMMPItD6BFH5PtylrjdtDvz9Se0JpNYO-NlRD_jNQoA/exec";

    // Send data to Google Apps Script using fetch
    fetch(url, {
        method: 'POST',
        body: new URLSearchParams({
            'action': 'login', // Action identifier
            'username': username,
            'password': password,
        })
    })

    .then(response => response.text()) // Process the response from Apps Script
        .then(result => {
            if (result === "Success") {

                // Save the username to localStorage
                localStorage.setItem('username', username);

                // Redirect to the booking page
                window.location.href = "../../HTML Design/index.html";
                //../../HTML Design/book.html
            } else {
                document.getElementById('message').innerText = "Incorrect Username or Password";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('message').innerText = "Something went wrong. Try again later!";
        });
}