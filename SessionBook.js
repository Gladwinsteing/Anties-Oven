document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is logged in
    const username = localStorage.getItem('username');
    if (!username) {
        alert('You must log in to access this page.');
        window.location.href = "./HTML LogIn/login - Copy.html"; // Redirect to login page
    } else {
        console.log(`Welcome, ${username}`); // Optional: log the username
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxAFCaVq6mTL7whyHOQaZI0kjOES5jRiIgkpHAwfKrytQQzXrDxhkdeoJreGiYdCZv1sQ/exec';
const form = document.forms['BookingForm'];
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Disable the submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    try {
        // Send the form data to the server
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        // Alert success and reset the form
        alert('Booking successfully submitted!');
        form.reset();

    } catch (error) {
        // Show an error alert with a user-friendly message
        alert('An error occurred while submitting your booking. Please try again.');
        console.error('Submission error:', error);

    } finally {
        // Re-enable the submit button and reset its text
        submitButton.disabled = false;
        submitButton.textContent = 'Book Now';
    }
})

//read username
document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is logged in
    const username = localStorage.getItem('username');
    if (!username) {
        alert('You must log in to access this page.');
        window.location.href = "./HTML Login/login - Copy.html"; // Redirect to login page
    } else {
        // Automatically populate the FirstName field with the logged-in username
        const firstNameInput = document.getElementById('Email');
        if (firstNameInput) {
            firstNameInput.value = username;
        }
    }
});