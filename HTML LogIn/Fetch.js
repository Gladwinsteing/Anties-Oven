document.addEventListener("DOMContentLoaded", function() {
    const username ='gladfemy@gmail.com' //localStorage.getItem('username'); // Retrieve username from localStorage
    
    if (!username) {
      alert('You must log in to access this page.');
      window.location.href = 'login - Copy.html'; // Redirect to login page if no username is found
    } else {
      console.log(`Welcome, ${username}`); // For debugging
      fetchUserDetails(username); // Fetch user details from Google Sheets
       //Assign or Populate with LoggedIn username
    const UserName = document.getElementById('username');
    if (UserName) {
    UserName.value = username;
    }
    }
  });
  
  // Function to fetch user details from Google Sheets
  function fetchUserDetails(username) {
    const url = 'https://script.google.com/macros/s/AKfycbzTNi6HSwklhoGiVNtDapRY8YWB990TWtoRAfvEJ6inBMHPnlJ74IYDj4LpM6vjzZNb/exec'; // Replace with your web app URL
    const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    console.log("Fetching user details for: " + username);
  
    // Make the API request to the Google Apps Script web app
    fetch(`${url}?username=${encodeURIComponent(username)}`, params)
      .then(response => {
        console.log('Response received');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        if (data) {
          populateForm(data); // If user found, populate the form
        } else {
          alert('No user found with that username.');
        }
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }
  
  // Function to populate the form with user details
  function populateForm(userDetails) {
    document.getElementById('username').value = userDetails.username;
    document.getElementById('firstname').value = userDetails.firstname;
    document.getElementById('lastname').value = userDetails.lastname;
    document.getElementById('contact').value = userDetails.contact;
    document.getElementById('altcontact').value = userDetails.altcontact;
    document.getElementById('address').value = userDetails.address;
    console.log("Form populated successfully.");
  }
  
  // Form submit handler to update user details
  document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const contact = document.getElementById('contact').value;
    const altcontact = document.getElementById('altcontact').value;
    const address = document.getElementById('address').value;
    
    updateUserDetails(username, firstname, lastname, contact, altcontact, address);
  });
  
  // Function to update user details in Google Sheets
  function updateUserDetails(username, firstname, lastname, contact, altcontact, address) {
    const url = 'https://script.google.com/macros/s/AKfycbzTNi6HSwklhoGiVNtDapRY8YWB990TWtoRAfvEJ6inBMHPnlJ74IYDj4LpM6vjzZNb/exec'; // Replace with your web app URL
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        lastname: lastname,
        contact: contact,
        altcontact: altcontact,
        address: address
      })
    };
  
    console.log('Sending updated data:', {
      username, firstname, lastname, contact, altcontact, address
    });
  
    // Send the updated data to Google Sheets
    fetch(`${url}/updateUser`, params)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('User details updated successfully.');
        } else {
          alert('Failed to update user details.');
        }
      })
      .catch(error => {
        console.error('Error updating user details:', error);
      });
  }
  