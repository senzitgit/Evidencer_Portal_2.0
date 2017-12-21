function mutevlc1() {
    var mutebtn1;
    mutebtn1 = document.getElementById("mutebtn1");
    jwplayer("audio1").setMute();
    var target1 = document.getElementById("target1");
    var icon1 = target1.className;

    if (icon1 == "fa fa-volume-off") {
        target1.className = "fa fa-volume-up";
    } else {
        target1.className = "fa fa-volume-off";
    }
}

function mutevlc2() {
    var mutebtn2;
    mutebtn2 = document.getElementById("mutebtn2");
    jwplayer("audio2").setMute();
    var target2 = document.getElementById("target2");
    var icon2 = target2.className;

    if (icon2 == "fa fa-volume-off") {
        target2.className = "fa fa-volume-up";
    } else {
        target2.className = "fa fa-volume-off";
    }
}

function mutevlc3() {
    var mutebtn3;
    mutebtn3 = document.getElementById("mutebtn3");
    jwplayer("audio3").setMute();
    var target3 = document.getElementById("target3");
    var icon3 = target3.className;

    if (icon3 == "fa fa-volume-off") {
        target3.className = "fa fa-volume-up";
    } else {
        target3.className = "fa fa-volume-off";
    }
}

function mutevlc4() {
    var mutebtn4;
    mutebtn4 = document.getElementById("mutebtn4");
    jwplayer("audio4").setMute();
    var target4 = document.getElementById("target4");
    var icon4 = target4.className;

    if (icon4 == "fa fa-volume-off") {
        target4.className = "fa fa-volume-up";
    } else {
        target4.className = "fa fa-volume-off";
    }
}




$(document).ready(function() {


    $.ajax({
        url: webServerUrl,
        data: 'request=getLiveDetails&caseEventId=' + localStorage.getItem("caseEventId"),
        type: 'post',
        success: function(msg) {

            var loginJson = msg.trim();

            obj = JSON.parse(loginJson);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;




            if (resultCode == 1) {

                console.log(msg);


                var CAM1 = obj.response.getLiveDetailsResult.mediaLinks.CAM1.Url;
                var CAM2 = obj.response.getLiveDetailsResult.mediaLinks.CAM2.Url;
                var CAM3 = obj.response.getLiveDetailsResult.mediaLinks.CAM3.Url;
                var CAM4 = obj.response.getLiveDetailsResult.mediaLinks.CAM4.Url;

                var AUD1 = obj.response.getLiveDetailsResult.mediaLinks.CAM1.Aud;
                var AUD2 = obj.response.getLiveDetailsResult.mediaLinks.CAM2.Aud;
                var AUD3 = obj.response.getLiveDetailsResult.mediaLinks.CAM3.Aud;
                var AUD4 = obj.response.getLiveDetailsResult.mediaLinks.CAM4.Aud;


                var caseNo = obj.response.getLiveDetailsResult.caseDetails.caseNo;
                var caseTitle = obj.response.getLiveDetailsResult.caseDetails.caseTitle;
                var caseDesc = obj.response.getLiveDetailsResult.caseDetails.caseDesc;
                var caseSession = obj.response.getLiveDetailsResult.caseDetails.sessionNo;
                var caseSitting = obj.response.getLiveDetailsResult.caseDetails.sittingNo;
                var caseTime = obj.response.getLiveDetailsResult.caseDetails.startTime;

                var judges = obj.response.getLiveDetailsResult.participants.judges;
                var lawyers = obj.response.getLiveDetailsResult.participants.lawyers;
                var participants = obj.response.getLiveDetailsResult.participants.participants;
                var others = obj.response.getLiveDetailsResult.participants.others;




                var judgesArrayLength = judges.length;

                if (judgesArrayLength > 0) {
                    for (var i = 0; i < judgesArrayLength; i++) {
                        var user = judges[i];
                        courtJudges.innerHTML = courtJudges.innerHTML + '<li style="z-index: 1;" class="activeUser" ><div onclick="activeUser(' + i + ',1)"><a href="#">' + user + '</a></div></li>';
                    }
                } else {
                    courtJudges.innerHTML = '<li style="z-index: 1;" class="activeUser" ><div onclick=""><a href="#">List Not Avilable</a></div></li>';

                }


                var lawyersArrayLength = lawyers.length;
                if (lawyersArrayLength > 0) {
                    for (var i = 0; i < lawyersArrayLength; i++) {
                        var user = lawyers[i];
                        courtLawyers.innerHTML = courtLawyers.innerHTML + '<li style="z-index: 1;" class="activeUser" ><div onclick="activeUser(' + i + ',2)"><a href="#">' + user + '</a></div></li>';
                    }
                } else {
                    courtLawyers.innerHTML = '<li style="z-index: 1;" class="activeUser" ><div onclick=""><a href="#">List Not Avilable</a></div></li>';

                }


                var participantsArrayLength = participants.length;
                if (participantsArrayLength > 0) {
                    for (var i = 0; i < participantsArrayLength; i++) {
                        var user = participants[i];
                        courtParticipants.innerHTML = courtParticipants.innerHTML + '<li style="z-index: 1;" class="activeUser" ><div onclick="activeUser(' + i + ',3)"><a href="#">' + user + '</a></div></li>';
                    }
                } else {
                    courtParticipants.innerHTML = '<li style="z-index: 1;" class="activeUser" ><div onclick=""><a href="#">List Not Avilable</a></div></li>';

                }

                var othersLength = others.length;
                if (othersLength > 0) {
                    for (var i = 0; i < othersLength; i++) {
                        var user = others[i];
                        courtOthers.innerHTML = courtOthers.innerHTML + '<li style="z-index: 1;" class="activeUser" ><div onclick="activeUser(' + i + ',4)"><a href="#">' + user + '</a></div></li>';
                    }
                } else {
                    courtOthers.innerHTML = '<li style="z-index: 1;" class="activeUser" ><div onclick=""><a href="#">List Not Avilable</a></div></li>';

                }




                jwplayer("video1").setup({

                    autostart: true,
                    controls: true,


                    file: CAM1,

                    rtmp: {
                        bufferlength: 0
                    },
                    width: "306",
                    height: "200",
                    primary: "flash",
                    'stretching': 'exactfit',
                    logo: {
                        file: "images/jw_logo.png"
                    }


                });


                jwplayer("video2").setup({

                    autostart: true,
                    controls: true,


                    file: CAM2,

                    rtmp: {
                        bufferlength: 0
                    },
                    width: "306",
                    height: "200",
                    primary: "flash",
                    'stretching': 'exactfit',
                    logo: {
                        file: "images/jw_logo.png"
                    }


                });


                jwplayer("video3").setup({

                    autostart: true,
                    controls: true,


                    file: CAM3,

                    rtmp: {
                        bufferlength: 2
                    },
                    width: "306",
                    height: "200",
                    primary: "flash",
                    'stretching': 'exactfit',
                    logo: {
                        file: "images/jw_logo.png"
                    }


                });


                jwplayer("video4").setup({

                    autostart: true,
                    controls: true,


                    file: CAM4,

                    rtmp: {
                        bufferlength: 2
                    },
                    width: "306",
                    height: "200",
                    primary: "flash",
                    'stretching': 'exactfit',
                    logo: {
                        file: "images/jw_logo.png"
                    }


                });


                jwplayer("audio1").setup({

                    autostart: true,
                    controls: true,


                    file: AUD1,

                    rtmp: {
                        bufferlength: 0
                    },
                    width: "0",
                    height: "0",
                    primary: "flash",
                    'stretching': 'exactfit',
                    logo: {
                        file: "images/jw_logo.png"
                    },
                    mute: "false"

                });


                jwplayer("audio2").setup({

                    autostart: true,
                    controls: true,


                    file: AUD2,

                    rtmp: {
                        bufferlength: 0
                    },
                    width: "0",
                    height: "0",
                    primary: "flash",
                    'stretching': 'exactfit',
                    logo: {
                        file: "images/jw_logo.png"
                    },
                    mute: "false"


                });


                jwplayer("audio3").setup({

                    autostart: true,
                    controls: true,


                    file: AUD3,

                    rtmp: {
                        bufferlength: 0
                    },
                    width: "0",
                    height: "0",
                    primary: "flash",
                    'stretching': 'exactfit',
                    logo: {
                        file: "images/jw_logo.png"
                    },
                    mute: "false"


                });


                jwplayer("audio4").setup({

                    autostart: true,
                    controls: true,


                    file: AUD4,

                    rtmp: {
                        bufferlength: 0
                    },
                    width: "0",
                    height: "0",
                    primary: "flash",
                    'stretching': 'exactfit',
                    logo: {
                        file: "images/jw_logo.png"
                    },
                    mute: "false"


                });




                caseDetails.innerHTML = '<h4>' + caseNo + ' - ' + caseTitle + '</h4> <div class="r b bg-warning-ltest wrapper m-b"> ' + caseDesc + ' </div><div class="list-group"> <div class="list-group-item text-ellipsis"> <span class="badge bg-warning">' + caseTime + '</span> Start Time</div> <div  class="list-group-item text-ellipsis"> <span class="badge bg-success">' + caseSitting + '</span> Sitting Number</div> <div  class="list-group-item text-ellipsis"> <span class="badge bg-success">' + caseSession + '</span> Session Number</div> </div>';

            } else {


            }
        }

    });


});