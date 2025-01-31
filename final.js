const scriptURL = 'https://script.google.com/macros/s/AKfycbxAFCaVq6mTL7whyHOQaZI0kjOES5jRiIgkpHAwfKrytQQzXrDxhkdeoJreGiYdCZv1sQ/exec'
const form = document.forms['BookingForm']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => alert ("BOOKING SUCCESSFULLY SUBMITTED !!!"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('ERROR', error.message))
})