// Initialize EmailJS
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Replace with your EmailJS Public Key

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
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
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
