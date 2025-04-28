// Initialize EmailJS
emailjs.init('Gwy8FMjdbQDN7m3gI'); // Replace with your EmailJS Public Key

const checkboxes = document.querySelectorAll('.video-checkbox');
const submitButton = document.getElementById('submitButton');

// Add event listener to all checkboxes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', checkAllChecked);
});

function checkAllChecked() {
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  if (allChecked) {
    submitButton.style.display = 'block';
  } else {
    submitButton.style.display = 'none';
  }
}

function submitExercise() {
  emailjs.send('service_4qfyu57', 'template_jpzi29a', {
    to_name: 'Doctor',
    from_name: 'Stroke Patient',
    message: 'Patient has completed today\'s exercises!'
  })
  .then(function(response) {
    alert('Submission successful! Doctor has been notified.');
  }, function(error) {
    alert('Submission failed. Please try again.');
  });
}
