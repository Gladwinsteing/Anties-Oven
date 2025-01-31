let currentSection = 1; // Track current section
const totalSections = 22; // Total number of sections

const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');
const submitBtn = document.getElementById('submitBtn');

// Function to show the next section
function showNextSection() {
    const currentSectionElem = document.getElementById(`section${currentSection}`);
    currentSectionElem.classList.remove('active'); // Hide current section

    currentSection++; // Move to the next section

    if (currentSection > totalSections) {
        nextBtn.style.display = 'none'; // Hide next button when survey ends
        submitBtn.style.display = 'inline-block'; // Show submit button
    } else {
        const nextSectionElem = document.getElementById(`section${currentSection}`);
        nextSectionElem.classList.add('active'); // Show next section
    }

    // Show the "Previous" button if we're not on the first section
    if (currentSection > 1) {
        previousBtn.style.display = 'inline-block';
    }
}

// Function to show the previous section
function showPreviousSection() {
    const currentSectionElem = document.getElementById(`section${currentSection}`);
    currentSectionElem.classList.remove('active'); // Hide current section

    currentSection--; // Move to the previous section

    const previousSectionElem = document.getElementById(`section${currentSection}`);
    previousSectionElem.classList.add('active'); // Show previous section

    // Hide the "Previous" button if we're on the first section
    if (currentSection === 1) {
        previousBtn.style.display = 'none';
    }

    // Show the "Next" button again if it's hidden
    if (currentSection < totalSections) {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none'; // Hide submit button when navigating backwards
    }
}

// Event listener for the Next button
nextBtn.addEventListener('click', showNextSection);

// Event listener for the Previous button
previousBtn.addEventListener('click', showPreviousSection);

// Event listener for the Submit button (you can add form submission logic here)
submitBtn.addEventListener('click', function() {
    alert('Survey submitted! Thank you for your feedback.');
    // Here you could submit the form data using AJAX, etc.
});