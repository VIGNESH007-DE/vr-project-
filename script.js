// Get all checkboxes and submit button
const checkboxes = document.querySelectorAll('.video-checkbox');
const submitButton = document.getElementById('submitButton');
const videoContainer = document.getElementById('videoContainer');
const subtitle = document.querySelector('.subtitle'); // The "Please watch all 5 exercise videos" text
const congratulationsMessage = document.getElementById('congratulationsMessage');

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', checkAllChecked);
});

// Function to check if all checkboxes are checked
function checkAllChecked() {
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  if (allChecked) {
    submitButton.style.display = 'block'; // Show Submit Button
  } else {
    submitButton.style.display = 'none';  // Hide Submit Button
  }
}

// Function to handle submission (no email sending)
function submitExercise() {
  // Hide the subtitle, video container, and submit button
  subtitle.style.display = 'none';
  videoContainer.style.display = 'none';
  submitButton.style.display = 'none';

  // Show the congratulations message
  congratulationsMessage.style.display = 'block';

  alert('✅ Submission successful! Great job completing the exercises!');
}
