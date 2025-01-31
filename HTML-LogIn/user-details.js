window.onload = function() {
 const username = localStorage.getItem('username');  // Retrieve username from localStorage
//const username = 'gladfemy@gmail.com';

    if (!username) {
        alert('You must log in to access this page.');
        window.location.href = 'login - Copy.html';  // Redirect to login page
    } else {
       // console.log(`Welcome, ${username}`);  // Log the username for debugging
        fetchUserDetails(username);  // Fetch user details from Google Sheets
        fetchUserDetails(firstname);
        //Assign or Populate with LoggedIn username
        const UserName = document.getElementById('username');
        if (UserName) {
            UserName.value = username;
        }
    }
};




// Fetch user details from Google Sheets via Apps Script
function fetchUserDetails(username) {
    const url = 'https://script.google.com/macros/s/AKfycbx4kV8oTzwrEOLMHVfcQ29x8jEBaYhVC2m7FcWx3EPTrCkwbTdZ_5V1k4VKnmGe00ZB_g/exec?action=getUserDetails&username=' + username;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data) {
                //document.getElementById('username').value = data.username || '';
                document.getElementById('firstname').value = data.firstname || '';
                document.getElementById('lastname').value = data.lastname || '';
                document.getElementById('contact').value = data.contact || '';
                document.getElementById('altcontact').value = data.altcontact || '';
                document.getElementById('address').value = data.address || '';
            }            
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
        });
}

// Handle form submission to update user profile
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = localStorage.getItem('username');  // Get the username from localStorage
    if (!username) return;

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const contact = document.getElementById('contact').value;
    const altcontact = document.getElementById('altcontact').value;
    const address = document.getElementById('address').value;

    const url = 'https://script.google.com/macros/s/AKfycbx4kV8oTzwrEOLMHVfcQ29x8jEBaYhVC2m7FcWx3EPTrCkwbTdZ_5V1k4VKnmGe00ZB_g/exec';
    const formData = new URLSearchParams({
        action: 'updateUserDetails',
        username: username,
        firstname: firstname,
        lastname: lastname,
        contact: contact,
        altcontact: altcontact,
        address: address
    });

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert("Profile updated successfully!");
    })
    .catch(error => {
        console.error('Error updating profile:', error);
        alert("Something went wrong.");
    });
});