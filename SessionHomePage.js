window.onload = function() {
    const username = getSession();
    
    if (!username) {
        // If no user session exists, redirect to login page
        window.location.href = './HTML-LogIn/login-Copy.html';
    } else {
        // Welcome the logged-in user
        document.getElementById('welcomeMessage').innerText = `Welcome, ${username}!`;
    }
};

function getSession() {
    // Retrieve the session from cookies
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [name, value] = cookie.split('=');
        name = name.trim();
        if (name === 'user_id') {
            return value;  // Return the stored username from the cookie
        }
    }
    return null;  // No session found
}