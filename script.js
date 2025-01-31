document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('BookingForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      firstName: document.getElementById('FirstName').value,
      lastName: document.getElementById('LastName').value,
      contactNumber: document.getElementById('Contact').value,
      email: document.getElementById('Email').value,
      gender: document.getElementById('Gender').value,
      timeSlot: document.getElementById('TimeSlot').value,
      notes: document.getElementById('Notes').value,
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxAFCaVq6mTL7whyHOQaZI0kjOES5jRiIgkpHAwfKrytQQzXrDxhkdeoJreGiYdCZv1sQ/exec', {
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
      alert('An error occurred. Please try again.');
    }
  });
});