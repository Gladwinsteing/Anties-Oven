
// Function to generate random string with uppercase, lowercase, and numbers
function generateRandomString(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}

// Attach event listener to the button
document.getElementById('generate').addEventListener('click', () => {
    const randomString = generateRandomString(8);  // Generate a random string of 8 characters
    document.getElementById('uniqueid').value = randomString;  // Set the value to the input field
});
