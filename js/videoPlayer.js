(function() {
    var playbutton = document.getElementById("playButton");
    var video = document.getElementById("video");
    var startContent = document.getElementById("startContent");
    var headline = document.getElementById("headline");


    // playbutton.addEventListener("click", () => {
    //     if (video.onplay) {
    //         startContent.style.display = "none";
    //         video.style.display = "block";
    //         playbutton.style.display = "block";
    //         // playbutton.style.
    //         video.pause();
    //     }
    //     else {
    //         startContent.style.display = "block";
    //         video.style.display = "none";
    //         video.play();
    //     }
    // })

    headline.addEventListener("click", () => {
        if (video.onplay) {
            startContent.style.display = "none";
            video.style.display = "block";
            playbutton.style.display = "block";
            // playbutton.style.
            video.pause();
        }
        else if (video.onpause) {
            video.style.display = "none";
            startContent.style.display = "block";
        }
    })

    console.log('heueue')

})();