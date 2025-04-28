// Initialize EmailJS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// Track videos completed
let videosWatched = 0;

// List of iframe IDs
const videoIds = ['video1', 'video2', 'video3', 'video4', 'video5'];

// For each iframe, add a listener to know when it finishes
videoIds.forEach(id => {
  const iframe = document.getElementById(id);

  // YouTube iframe API needs to be loaded
  iframe.addEventListener('load', () => {
    const player = new YT.Player(id, {
      events: {
        'onStateChange': function(event) {
          if (event.data === YT.PlayerState.ENDED) {
            videosWatched++;
            if (videosWatched === 5) {
              document.getElementById('submitButton').style.display = 'block';
            }
          }
        }
      }
    });
  });
});

// Submit button function
function submitExercise() {
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    patient_name: "Stroke Patient",  // You can make it dynamic if you want
    message: "The patient has completed today's exercise videos."
  })
  .then(function(response) {
    alert("Doctor has been notified!");
    window.location.reload(); // Reload page for next day
  }, function(error) {
    alert("Error sending email. Please try again.");
  });
}

// Load YouTube Iframe API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
