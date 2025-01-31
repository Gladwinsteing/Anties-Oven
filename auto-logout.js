let inactivityTimeout;  // Variable to store the timeout ID
let countdownInterval;  // Variable to store the countdown interval
let timeLeft = 10;      // Time remaining before auto logout (in seconds)

// Function to handle logout
function logout() {
    localStorage.removeItem('username'); // Clear the stored username
    alert('You have been logged out due to inactivity.');
    window.location.href = "../../HTML Design/index.html"; // Redirect to login page
}

// Function to update the countdown and display the warning message
function updateWarningMessage() {
    const countdownElement = document.getElementById('countdown');
    const warningMessage = document.getElementById('warningMessage');
    
    // Update the countdown text
    countdownElement.textContent = timeLeft;

    // Show the warning message when there are 5 seconds left
    if (timeLeft <= 5) {
        warningMessage.style.display = 'block';
    }
    
    // If the timer hits 0, log the user out
    if (timeLeft <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        logout();
    }
}

// Function to reset the inactivity timer
function resetTimer() {
    clearTimeout(inactivityTimeout);  // Clear the previous timeout
    clearInterval(countdownInterval); // Clear the countdown interval

    // Reset the countdown timer to 10 seconds
    timeLeft = 10;
    
    // Hide the warning message when the timer resets
    document.getElementById('warningMessage').style.display = 'none';

    // Start a new countdown interval
    countdownInterval = setInterval(updateWarningMessage, 1000); // Update every second
    inactivityTimeout = setTimeout(logout, 10000); // Log out after 10 seconds if no interaction
}

// Add event listeners to reset the timer on user interaction
document.addEventListener('mousemove', resetTimer);  // Mouse move
document.addEventListener('keydown', resetTimer);    // Keyboard input
document.addEventListener('click', resetTimer);      // Click event

// Initialize the inactivity timer when the page loads
resetTimer();  // Start the timer when the page is loaded
