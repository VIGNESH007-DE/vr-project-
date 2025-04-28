// Initialize EmailJS
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Replace with your actual EmailJS public key

let players = [];
let finishedVideos = 0;

function onYouTubeIframeAPIReady() {
  players = [
    new YT.Player('video1', { events: { 'onStateChange': onPlayerStateChange } }),
    new YT.Player('video2', { events: { 'onStateChange': onPlayerStateChange } }),
    new YT.Player('video3', { events: { 'onStateChange': onPlayerStateChange } }),
    new YT.Player('video4', { events: { 'onStateChange': onPlayerStateChange } }),
    new YT.Player('video5', { events: { 'onStateChange': onPlayerStateChange } }),
  ];
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    finishedVideos++;

    if (finishedVideos === 5) {
      document.getElementById('submitButton').style.display = 'block';
    }
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

// Load the IFrame Player API code asynchronously
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
