const form = document.getElementById('BookingForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
    FirstName: document.getElementById('FirstName').value,
    LastName: document.getElementById('LastName').value,
    Contact: document.getElementById('Contact').value,
    Email: document.getElementById('Email').value,
    Gender: document.getElementById('Gender').value,
    TimeSlot: document.getElementById('TimeSlot').value,
    Notes: document.getElementById('Notes').value,
    };

    try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbx_BFMmNV9VZc3eA8GdRZBEfjwSH0KPTXdG-29JNljS5Q8QRndQ2WPozsEruws5iIbi/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === 'success') {
    alert('Booking successful!');
    form.reset();
    } else {
    alert('Something went wrong. Please try again.');
    }
    } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
    }
});