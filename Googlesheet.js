const scriptURL = 'https://script.google.com/macros/s/AKfycbyUlOyGCYHLrT9VA4-KKdzWrsBapxU6gWsUeDT6NpH-5Q30KsdKEQq8zlQSITW049tY5A/exec';
const form = document.forms['votingForm'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      Swal.fire({
        title: 'Success!',
        text: 'Thank you! Your form is submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.reload();
      });
    })
    .catch(error => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
});