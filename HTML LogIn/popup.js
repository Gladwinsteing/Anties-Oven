// Get references to the elements
const hiddenInput = document.getElementById('uniqueid');
const generate = document.getElementById('generate');
const displayBox = document.getElementById('displayBox');
const displayValue = document.getElementById('displayValue');

// Event listener for the button click
generate.addEventListener('click', function() {
  // Get the value from the hidden input
const inputValue = hiddenInput.value;

  // Display the value in the display box
displayValue.textContent ="Reference: " + inputValue;
  displayBox.style.display = 'block'; // Show the box with the value
});