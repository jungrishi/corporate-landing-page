// var x = 1;
var sliderPort = document.getElementById('carousal-contain');

function switchSlide() {
    var nextSlide = 0;

    for (var i = 0; i < radiobuttons.length; i++) {
        // If current slide is active & NOT equal to last slide then increment nextSlide
        if ((radiobuttons[i].getAttribute('data-state') == 'active') && (i !== (radiobuttons.length-1))) {
            nextSlide = i + 1;
        }
        sliderHide(i);
    }
    sliderShow(nextSlide);
}

function sliderHide(num) {
    radiobuttons[num].setAttribute('data-state', '');
    images[num].setAttribute('data-state', '');
    images[num].style.opacity=0;
}

function sliderShow(num) {
    radiobuttons[num].checked = true;
    radiobuttons[num].setAttribute('data-state', 'active');
    images[num].setAttribute('data-state', 'active');
    images[num].style.opacity=1;

    
}

function setSlide(slideNum) {
    return function() {
        for (var i = 0; i < radiobuttons.length; i++) {
            radiobuttons[i].setAttribute('data-state', '');
            images[i].setAttribute('data-state', '');
            
            sliderHide(i);
        }

        radiobuttons[slideNum].setAttribute('data-state', 'active');
        images[slideNum].setAttribute('data-state', 'active');
        sliderShow(slideNum);

        clearInterval(switcher);
    };
}
while(true) {
    if(sliderPort) {
    var imagePort = document.querySelector('.slider-wrapper');
    var images = imagePort.children;
    var radiobuttons = document.querySelectorAll('.buttons');

    var switcher = setInterval(switchSlide, 3000);
    for (var i = 0; i < images.length; i++) {        
        images[i].style.position='absolute';
        radiobuttons[i].addEventListener("click",
        setSlide(i));
        }
}
}