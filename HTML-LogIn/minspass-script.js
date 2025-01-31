function validatePassword(password) {
const minLength = 8;
const upperCasePattern = /[A-Z]/;
const lowerCasePattern = /[a-z]/;
const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;

if (password.length < minLength) {
return "Password must be at least 8 characters long.";
}
if (!upperCasePattern.test(password)) {
return "Password must contain at least one uppercase letter.";
}
if (!lowerCasePattern.test(password)) {
return "Password must contain at least one lowercase letter.";
}
if (!specialCharacterPattern.test(password)) {
return "Password must contain at least one special character.";
}
return null; // No errors
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
const password = document.getElementById("password").value;
const errorMessage = validatePassword(password);

// Show error message or success
const errorSpan = document.getElementById("passwordError");
if (errorMessage) {
errorSpan.textContent = errorMessage;
errorSpan.classList.add("error");
errorSpan.classList.remove("success");
  event.preventDefault(); // Prevent form submission
} else {
errorSpan.textContent = "Password is valid.";
errorSpan.classList.add("success");
errorSpan.classList.remove("error");
}
});