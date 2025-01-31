// When the home page loads, retrieve the username from localStorage
window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        // Assuming there's an element with the id 'usernameDisplay' to show the logged-in username
        document.getElementById('usernameDisplay').textContent = `Logged In As: ${username}`;
    }
};
