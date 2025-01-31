 // Get today's date in the format yyyy-mm-dd
 const today = new Date().toISOString().split('T')[0];

 // Set the 'min' attribute of the date picker to today's date
 document.getElementById('SessionDate').setAttribute('min', today);