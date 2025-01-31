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
});