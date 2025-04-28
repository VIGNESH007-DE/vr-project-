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

// Function to display success message after submission
function submitExercise() {
  // Display success message
  const successMessage = document.createElement('div');
  successMessage.style.textAlign = 'center';
  successMessage.style.fontSize = '24px';
  successMessage.style.color = 'green';
  successMessage.style.marginTop = '20px';
  successMessage.textContent = 'Great Work! Keep it up!';
  document.querySelector('.container').appendChild(successMessage);

  // Optionally disable the button after submission
  submitButton.disabled = true;
  submitButton.innerText = 'Submitted';
}
