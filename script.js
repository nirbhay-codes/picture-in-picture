const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const btnSelectInput = document.getElementById('select-content-share');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

// Start picture-in-picture
button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// Select screen to share
btnSelectInput.addEventListener('click', async () => {
  selectMediaStream();
});

// On Load
// selectMediaStream();
