// Get all checkboxes and submit button
const checkboxes = document.querySelectorAll('.video-checkbox');
const submitButton = document.getElementById('submitButton');
const videoContainer = document.getElementById('videoContainer');
const congratulationsMessage = document.getElementById('congratulationsMessage');

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', checkAllChecked);
});

// Function to check if all are checked
function checkAllChecked() {
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  if (allChecked) {
    submitButton.style.display = 'block'; // Show Submit Button
  } else {
    submitButton.style.display = 'none';  // Hide Submit Button
  }
}

// Function to handle the submission
function submitExercise() {
  // Hide the video container
  videoContainer.style.display = 'none';

  // Show the congratulations message
  congratulationsMessage.style.display = 'block';

  // Optionally disable the button after submission
  submitButton.disabled = true;
  submitButton.innerText = 'Submitted';
}
