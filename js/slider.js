// var x = 1;
var sliderPort = document.getElementById('car');

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

        // clearInterval(switcher);
    };
}

if(sliderPort) {
    var imagePort  = document.querySelector('.sliderWrapper');
    var images = imagePort.children;
    var radiobuttons = document.querySelectorAll('.buttons');

    // var width = sliderPort.clientWidth;
    // var height = sliderPort.clientHeight;
    // sliderPort.style.width = width + 'px';
    // sliderPort.style.height=height + 'px';
    // sliderPort.style.position='relative';

    // imagePort.style.width = 100 + '%';
    // imagePort.style.height = 100 + 'px';
    // imagePort.style.position = 'relative';
    setSlide(1)
    for (var i = 0; i < images.length; i++) {        
        images[i].style.position='absolute';
        radiobuttons[i].addEventListener("click",
        setSlide(i));
        }

    // var switcher = setInterval(function() {
    //     switchSlide();
    // }, 5000);
}

// updateViewport {

// }