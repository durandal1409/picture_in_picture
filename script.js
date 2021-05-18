const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass video and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // error
    }
    
}

button.addEventListener("click", async () => {
    // disable btn
    button.disabled = true;
    // start pip
    await videoElement.requestPictureInPicture();
    // enable btn
    button.disabled = false;
})

selectMediaStream();
