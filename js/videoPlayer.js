(function() {
    var play = document.getElementById("playButton");
    var video = document.getElementById("video");
    var startContent = document.getElementById("startContent");
    var headline = document.getElementById("headline");
    var h = document.getElementById("ba");
    var playButton = play.childNodes[1];

    headline.addEventListener("click",() => {
        if (video.paused) {
        headline.style.cursor = "pointer";
        startContent.style.display = 'none';
        video.play();

    }
        else {
            startContent.style.display = 'block';
            video.load();
            video.pause();
        }
    })
})();