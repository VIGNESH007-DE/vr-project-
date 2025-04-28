// Initialize EmailJS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// Track videos completed
let videosWatched = 0;

// List of iframe IDs
const videoIds = ['video1', 'video2', 'video3', 'video4', 'video5'];

// After YouTube API is ready
function onYouTubeIframeAPIReady() {
  videoIds.forEach(id => {
    const player = new YT.Player(id, {
      events: {
        'onStateChange': function(event) {
          if (event.data === YT.PlayerState.ENDED) {
            videosWatched++;
            if (videosWatched === 5) {
              document.getElementById('submitButton').style.display = 'inline-block';
            }
          }
        }
      }
    });
  });
}

// Submit button function
function submitExercise() {
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    patient_name: "Stroke Patient",
    message: "The patient has completed today's exercise videos."
  })
  .then(function(response) {
    alert("Doctor has been notified successfully!");
    window.location.reload(); // Reload for the next day's work
  }, function(error) {
    alert("Failed to send email. Please try again later.");
  });
}

// Load YouTube Iframe API dynamically
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
