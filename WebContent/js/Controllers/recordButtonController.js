$(document).ready(function() {
    $("#shootButton").click(function() {
        document.getElementById("snap_button").style.display = "none";
        document.getElementById("upload_button").style.display = "block";
        document.getElementById("attachmentform").style.display = "none";

        $('#atta_frm').trigger("reset");


    });



    $("#show_privatenote").click(function() {
        document.getElementById("logArea").style.display = "none";
        document.getElementById("login_box").style.display = "block";
        document.getElementById("screen").style.display = "none";
        document.getElementById("snap_button").style.display = "none";
        document.getElementById("upload_button").style.display = "none";
        document.getElementById("attachmentform").style.display = "none";




    });

    $("#show_logs").click(function() {
        document.getElementById("logArea").style.display = "block";
        document.getElementById("login_box").style.display = "none";
        document.getElementById("screen").style.display = "none";
        document.getElementById("snap_button").style.display = "none";
        document.getElementById("upload_button").style.display = "none";
        document.getElementById("attachmentform").style.display = "none";
        document.getElementById("confirm_box").style.display = "none";
        document.getElementById("note_box").style.display = "none";
        document.getElementById("atta_confirm_box").style.display = "none";




    });

    $("#done_private").click(function() {


        document.getElementById("confirm_box").style.display = "none";
        document.getElementById("logArea").style.display = "block";




    });

    $("#show_attachment").click(function() {
        document.getElementById("logArea").style.display = "none";
        document.getElementById("screen").style.display = "block";
        document.getElementById("snap_button").style.display = "block";
        document.getElementById("login_box").style.display = "none";
        document.getElementById("confirm_box").style.display = "none";
        document.getElementById("note_box").style.display = "none";



    });

    $("#done_attachment").click(function() {


        document.getElementById("atta_confirm_box").style.display = "none";
        document.getElementById("logArea").style.display = "block";



    });

    $("#uploadButton").click(function() {


        webcam.freeze();
        webcam.upload();


        document.getElementById("attachmentform").style.display = "block";
        document.getElementById("upload_button").style.display = "none";
        document.getElementById("snap_button").style.display = "none";
        document.getElementById("screen").style.display = "none";

    });

    $("#cancButton").click(function() {

        document.getElementById("snap_button").style.display = "none";
        document.getElementById("upload_button").style.display = "none";
        document.getElementById("attachmentform").style.display = "none";
        document.getElementById("logArea").style.display = "block";
        document.getElementById("screen").style.display = "none";

    });

    $("#cancaButton").click(function() {

        document.getElementById("snap_button").style.display = "block";
        document.getElementById("upload_button").style.display = "none";
        document.getElementById("attachmentform").style.display = "none";
        document.getElementById("screen").style.display = "block";
        jQuery('#add-private div').html('');
        $('#add-private').modal('hide');

    });

    $("#save_conf").click(function() {

        document.getElementById("atta_confirm_box").style.display = "none";
        document.getElementById("logArea").style.display = "block";



    });

    $("#cancuButton").click(function() {

        document.getElementById("screen").style.display = "block";
        document.getElementById("snap_button").style.display = "block";
        document.getElementById("upload_button").style.display = "none";
        document.getElementById("attachmentform").style.display = "none";

        webcam.reset();


    });



    $("#atta_frm").submit(function() {


        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            $("#msgboxattac").removeClass().addClass('myinfo').text('Saving Attachment..').fadeIn(1000);

            var mainUser = localStorage.getItem("mainUser");
            var caseEventId = localStorage.getItem("caseEventId");

            this.timer = setTimeout(function() {
                $.ajax({
                    url: captureUploadUrl,
                    data: 'attachmentName=' + $('#atta_name').val() + '&attachmentDesc=' + $('#atta_desc').val() + '&userName=' + mainUser + '&caseEventId=' + caseEventId,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();

                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;


                        if (resultCode == 1) {



                            document.getElementById("snap_button").style.display = "none";
                            document.getElementById("upload_button").style.display = "none";
                            document.getElementById("screen").style.display = "none";
                            document.getElementById("attachmentform").style.display = "none";
                            document.getElementById("atta_confirm_box").style.display = "block";



                            $("#msgboxattac").html('').addClass('myinfo').fadeTo(900, 1,
                                function() {

                                    var d = new Date();
                                    var e = formatDate(d);

                                    var div = document.getElementById('newText');
                                    var second = localStorage.getItem("duration");
                                    div.innerHTML = div.innerHTML + '<div class="list-group-item text-ellipsis"><b>' + e + '</b> : <span class="badge bg-success" Style="font-size:10px;float:none;background-color:#a00a0a;">' + localStorage.getItem("defUser") + '</span> : <b>Attachment Saved.</b> </div> ';


                                    logs.logNotes.push({
                                        "duration": second,
                                        "notes": "Attachment Saved.",
                                        "speaker": mainUser,
                                        "timestamp": e
                                    });




                                    function formatDate(date) {
                                        var hours = date.getHours();
                                        var minutes = date.getMinutes();
                                        var seconds = date.getSeconds();
                                        var ampm = hours >= 12 ? 'pm' : 'am';
                                        hours = hours % 12;
                                        hours = hours ? hours : 12; // the hour '0' should be '12'
                                        minutes = minutes < 10 ? '0' + minutes : minutes;
                                        seconds = seconds < 10 ? '0' + seconds : seconds;
                                        var strTime = hours + ':' + minutes + ':' + seconds;
                                        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
                                    }

                                });

                        } else {
                            $("#msgboxattac").fadeTo(200, 0.1, function() //start fading the messagebox
                                {
                                    //add message and change the class of the box and start fading
                                    $(this).html(message).removeClass().addClass('myerror').fadeTo(900, 1);
                                });

                        }
                    }




                });
            }, 200);

            return false;
        }


    });



});