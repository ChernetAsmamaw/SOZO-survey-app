const scriptURL = 'https://script.google.com/macros/s/AKfycbwcmyoa1hn-qAmB5o3CaoBtAnBfhvX-Ggzt_O4V2kwj0H06CpYPBGodgnx8Mj-5OL8Xyw/exec';
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