(function() {
    var playbutton = document.getElementById("playButton");
    var video = document.getElementById("video");
    var startContent = document.getElementById("startContent");

    playbutton.addEventListener("click", () => {
        if (video.play) {
            startContent.style.display = "none";
            video.style.display = "block";
            playbutton.style.display = "block";
            // playbutton.style.
            video.pause();
        }
        else {
            startContent.style.display = "block";
            video.style.display = "none";
            video.play();
        }
    })
})();