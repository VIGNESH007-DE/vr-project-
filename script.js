// Initialize EmailJS safely
(function() {
  emailjs.init('Gwy8FMjdbQDN7m3gI'); // ✅ Correct: Your EmailJS Public Key
})();

// Get all checkboxes and submit button
const checkboxes = document.querySelectorAll('.video-checkbox');
const submitButton = document.getElementById('submitButton');

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', checkAllChecked);
});

// Function to check if all are checked
function checkAllChecked() {
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  if (allChecked) {
    submitButton.style.display = 'block'; // ✅ Show Submit Button
  } else {
    submitButton.style.display = 'none';  // ✅ Hide Submit Button
  }
}

// Function to send Email when Submit Button is clicked
function submitExercise() {
  emailjs.send('service_4qfyu57', 'template_jpzi29a', {
    to_name: 'Doctor',
    from_name: 'Stroke Patient',
    message: 'Patient has completed today\'s exercises!'
  })
  .then(function(response) {
    alert('✅ Submission successful! Doctor has been notified.');
    console.log('SUCCESS!', response.status, response.text);
    // Optionally disable the button after submission
    submitButton.disabled = true;
    submitButton.innerText = 'Submitted';
  }, function(error) {
    alert('❌ Submission failed. Please try again.');
    console.error('FAILED...', error);
  });
}
