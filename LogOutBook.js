function logout() {
    localStorage.removeItem('username'); // Clear the stored username
    alert('You have been logged out.');
    window.location.href = "../../HTML Design/index.html"; // Redirect to login page
}