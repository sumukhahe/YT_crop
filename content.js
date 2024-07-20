// content.js

document.addEventListener('DOMContentLoaded', () => {
  // Function to restore video to its default style settings
  function restoreVideoStyle() {
    const videoPlayer = document.querySelector('video.html5-main-video');
    if (videoPlayer) {
      // Resetting styles to defaults
      videoPlayer.style.width = '';
      videoPlayer.style.height = '';
      videoPlayer.style.objectFit = 'contain'; // Default object fit
      console.log('Video styles restored to default settings.');
    } else {
      console.log('No video player found.');
    }
  }

  // Function to apply cropping style on entering fullscreen
  function applyCropStyle() {
    const videoPlayer = document.querySelector('video.html5-main-video');
    if (videoPlayer) {
      // Modify styles for cropping here (e.g., set width to 100%, height to fit proportionally)
      videoPlayer.style.width = '100%';
      videoPlayer.style.objectFit = 'cover'; // Adjust objectFit based on your desired cropping
      console.log('Video cropping style applied.');
    } else {
      console.log('No video player found.');
    }
  }

  // Attach event listeners
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      console.log('Entered fullscreen mode.');
      applyCropStyle();
    } else {
      console.log('Exited fullscreen mode.');
      restoreVideoStyle();
    }
  });

  document.addEventListener('webkitfullscreenchange', () => {
    if (document.fullscreenElement) {
      console.log('Entered fullscreen mode (webkit).');
      applyCropStyle();
    } else {
      console.log('Exited fullscreen mode (webkit).');
      restoreVideoStyle();
    }
  });

  // Additional event listener for key press events (optional)
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' || event.key.toLowerCase() === 'f') {
      console.log(`Key "${event.key}" pressed, attempting to restore video style.`);
      // Delay the restore function to ensure it runs after the fullscreen toggle has processed
      setTimeout(restoreVideoStyle, 100);
    }
  });
});
