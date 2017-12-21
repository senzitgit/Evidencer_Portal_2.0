var videoSeek1, videoSeek2, videoSeek3, videoSeek4, playbtn, seekslider, audioSeek1, audioSeek2, audioSeek3, audioSeek4, curtimetext, durtimetext, mutebtn1, mutebtn2, mutebtn3, mutebtn4, volumeslider;

function intializePlayer() {
    // Set object references

    videoSeek1 = document.getElementById("video1");
    videoSeek2 = document.getElementById("video2");
    videoSeek3 = document.getElementById("video3");
    videoSeek4 = document.getElementById("video4");
    audioSeek1 = document.getElementById("audio1");
    audioSeek2 = document.getElementById("audio2");
    audioSeek3 = document.getElementById("audio3");
    audioSeek4 = document.getElementById("audio4");


    playbtn = document.getElementById("playpausebtn");
    seekslider = document.getElementById("seekslider");
    mutebtn1 = document.getElementById("mutebtn1");
    mutebtn2 = document.getElementById("mutebtn2");
    mutebtn3 = document.getElementById("mutebtn3");
    mutebtn4 = document.getElementById("mutebtn4");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    volumeslider = document.getElementById("volumeslider");
    // Add event listeners
    playbtn.addEventListener("click", playPause, false);
    seekslider.addEventListener("change", vidSeek, false);
    videoSeek1.addEventListener("timeupdate", seektimeupdate, false);
    volumeslider.addEventListener("change", setvolume, false);
    mutebtn1.addEventListener("click", vid1mute, false);
    mutebtn2.addEventListener("click", vid2mute, false);
    mutebtn3.addEventListener("click", vid3mute, false);
    mutebtn4.addEventListener("click", vid4mute, false);
    videoSeek1.play();
    videoSeek2.play();
    videoSeek3.play();
    videoSeek4.play();
    audioSeek1.play();
    audioSeek2.play();
    audioSeek3.play();
    audioSeek4.play();

}

function playPause() {
    if (videoSeek1.paused) {
        videoSeek1.play();
        videoSeek2.play();
        videoSeek3.play();
        videoSeek4.play();

        audioSeek1.play();
        audioSeek2.play();
        audioSeek3.play();
        audioSeek4.play();


        playbtn.innerHTML = '<div class="fa fa-pause"  style="font-size:25px;"></div>';
    } else {

        videoSeek1.pause();
        videoSeek2.pause();
        videoSeek3.pause();
        videoSeek4.pause();

        audioSeek1.pause();
        audioSeek2.pause();
        audioSeek3.pause();
        audioSeek4.pause();
        playbtn.innerHTML = '<div class="fa fa-play"  style="font-size:25px;"></div>';
    }
}

function vidSeek() {
    var seekto = videoSeek1.duration * (seekslider.value / 100);

    videoSeek1.currentTime = seekto;
    videoSeek2.currentTime = seekto;
    videoSeek3.currentTime = seekto;
    videoSeek4.currentTime = seekto;

    audioSeek1.currentTime = seekto;
    audioSeek2.currentTime = seekto;
    audioSeek3.currentTime = seekto;
    audioSeek4.currentTime = seekto;

}

function seektimeupdate() {
    var nt = videoSeek1.currentTime * (100 / videoSeek1.duration);
    seekslider.value = nt;
    var curmins = Math.floor(videoSeek1.currentTime / 60);
    var cursecs = Math.floor(videoSeek1.currentTime - curmins * 60);
    var durmins = Math.floor(videoSeek1.duration / 60);
    var dursecs = Math.floor(videoSeek1.duration - durmins * 60);
    if (cursecs < 10) {
        cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
        dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
        curmins = "0" + curmins;
    }
    if (durmins < 10) {
        durmins = "0" + durmins;
    }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;

}


function setvolume() {
    videoSeek1.volume = volumeslider.value / 100;
    videoSeek2.volume = volumeslider.value / 100;
    videoSeek3.volume = volumeslider.value / 100;
    videoSeek4.volume = volumeslider.value / 100;

    audioSeek1.volume = volumeslider.value / 100;
    audioSeek2.volume = volumeslider.value / 100;
    audioSeek3.volume = volumeslider.value / 100;
    audioSeek4.volume = volumeslider.value / 100;

}



function vid4mute() {
    if (audioSeek4.muted) {
        audioSeek4.muted = false;
        mutebtn4.innerHTML = '<div  class="fa fa-volume-up"  style="font-size:20px; float:right;margin-top:-20px;">';
    } else {
        audioSeek4.muted = true;
        mutebtn4.innerHTML = '<div  class="fa fa-volume-off"  style="font-size:20px; float:right;margin-top:-20px;">';
    }

}


function vid1mute() {
    if (audioSeek1.muted) {
        audioSeek1.muted = false;
        mutebtn1.innerHTML = '<div  class="fa fa-volume-up"  style="font-size:20px; float:right;margin-top:-20px;">';
    } else {
        audioSeek1.muted = true;
        mutebtn1.innerHTML = '<div  class="fa fa-volume-off"  style="font-size:20px; float:right;margin-top:-20px;">';
    }

}

function vid2mute() {
    if (audioSeek2.muted) {
        audioSeek2.muted = false;
        mutebtn2.innerHTML = '<div  class="fa fa-volume-up"  style="font-size:20px; float:right;margin-top:-20px;">';
    } else {
        audioSeek2.muted = true;
        mutebtn2.innerHTML = '<div  class="fa fa-volume-off"  style="font-size:20px; float:right;margin-top:-20px;">';
    }
}

function vid3mute() {
    if (audioSeek3.muted) {
        audioSeek3.muted = false;
        mutebtn3.innerHTML = '<div  class="fa fa-volume-up"  style="font-size:20px; float:right;margin-top:-20px;">';
    } else {
        audioSeek3.muted = true;
        mutebtn3.innerHTML = '<div  class="fa fa-volume-off"  style="font-size:20px; float:right;margin-top:-20px;">';
    }
}




function seekFeeds(seekDuration) {

    var clickVideo1 = document.getElementById("video1");
    var clickVideo2 = document.getElementById("video2");
    var clickVideo3 = document.getElementById("video3");
    var clickVideo4 = document.getElementById("video4");
    var clickAudio1 = document.getElementById("audio1");
    var clickAudio2 = document.getElementById("audio2");
    var clickAudio3 = document.getElementById("audio3");
    var clickAudio4 = document.getElementById("audio4");

    clickVideo1.currentTime = seekDuration;
    clickVideo2.currentTime = seekDuration;
    clickVideo3.currentTime = seekDuration;
    clickVideo4.currentTime = seekDuration;
    clickAudio1.currentTime = seekDuration;
    clickAudio2.currentTime = seekDuration;
    clickAudio3.currentTime = seekDuration;
    clickAudio4.currentTime = seekDuration;
}



var c = 0;
var t;
var timer_is_on = 0;



function timedCount() {

    var videoSeek1 = document.getElementById("video1");
    var dur = videoSeek1.currentTime;
    document.getElementById('txt1').value = (dur).toFixed();
    document.getElementById('txt').value = c;
    c = c + 1;
    t = setTimeout("timedCount()", 1000);

    scroll_to((dur).toFixed());
}

function doTimer() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function scroll_to(div) {

    var elemId = "#s" + div;

    $('.content').animate({
        scrollTop: $(elemId).parent().scrollTop() + $(elemId).offset().top - $(elemId).parent().offset().top
    }, {
        duration: 1000,
        specialEasing: {
            width: 'linear',
            height: 'easeOutBounce'
        },
        complete: function(e) {

        }
    });

    if (finalDuration == div) {

        videoSeek1.pause();
        videoSeek2.pause();
        videoSeek3.pause();
        videoSeek4.pause();

        audioSeek1.pause();
        audioSeek2.pause();
        audioSeek3.pause();
        audioSeek4.pause();

        videoSeek1.currentTime = 0;
        playbtn.innerHTML = '<div class="fa fa-play"  style="font-size:25px;"></div>';
        videoSeek2.currentTime = 0;
        videoSeek3.currentTime = 0;
        videoSeek4.currentTime = 0;

        audioSeek1.currentTime = 0;
        audioSeek2.currentTime = 0;
        audioSeek3.currentTime = 0;
        audioSeek4.currentTime = 0;

    }


}



$(document).ready(function() {

    var caseNoSimple = document.getElementById('caseNoSimple');

    caseNoSimple.onkeyup = function() {
        this.value = this.value.toUpperCase();
    }
    var caseNo = document.getElementById('caseNo');

    caseNo.onkeyup = function() {
        this.value = this.value.toUpperCase();
    }
});