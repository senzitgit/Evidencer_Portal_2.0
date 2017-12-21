$(document).ready(function() {




    $('#fname').bind('input', function() {
        document.getElementById("profileUpdate").disabled = false;
    });
    $('#mname').bind('input', function() {
        document.getElementById("profileUpdate").disabled = false;
    });
    $('#lname').bind('input', function() {


        document.getElementById("profileUpdate").disabled = false;
    });
    $('#smobile').bind('input', function() {
        document.getElementById("profileUpdate").disabled = false;
    });
    $('#semail').bind('input', function() {
        document.getElementById("profileUpdate").disabled = false;
    });




    $('#cpwd').bind("cut copy paste", function(e) {
        e.preventDefault();
    });

    var firstName = localStorage.getItem("firstName");
    var userRole = localStorage.getItem("userRole");
    var userPic = localStorage.getItem("proPic");




    $.ajax({
        url: webServerUrl,
        data: 'request=viewProfile',
        type: 'post',
        success: function(msg) {

            var loginJson = msg.trim();

            obj = JSON.parse(loginJson);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;


            if (resultCode == 1) {

                var firstName = obj.response.ViewProfileResult.firstName;
                var middleName = obj.response.ViewProfileResult.middleName;
                var lastName = obj.response.ViewProfileResult.lastName;

                var fullName = firstName + ' ' + lastName;

                var primaryMobileNo = obj.response.ViewProfileResult.primaryMobileNo;
                var primaryEmailId = obj.response.ViewProfileResult.primaryEmailId;
                var emailAddress = obj.response.ViewProfileResult.emailAddress;
                var mobileNumber = obj.response.ViewProfileResult.mobileNumber;
                var securityQuestion1 = obj.response.ViewProfileResult.securityQuestion1;
                var securityQuestion2 = obj.response.ViewProfileResult.securityQuestion2;
                var securityQuestion3 = obj.response.ViewProfileResult.securityQuestion3;
                var securityAnswer1 = obj.response.ViewProfileResult.securityAnswer1;
                var securityAnswer2 = obj.response.ViewProfileResult.securityAnswer2;
                var securityAnswer3 = obj.response.ViewProfileResult.securityAnswer3;

                var mainPanel = document.getElementById("mainPanel");
                mainPanel.innerHTML = '<div class="h4 m-t m-b-xs font-bold text-lt">' + fullName + '</div> <small class="text-muted m-b">' + userRole + '</small>';

                var mainPic = document.getElementById("mainPic");
                mainPic.innerHTML = '<img src="' + userPic + '" class="dker" width="250px" height="250px"> ';


                var communicationPanel = document.getElementById("communicationPanel");
                communicationPanel.innerHTML = '<div class="row m-b"><div class="col-xs-6 text-right"><small>Primary Mobile Number</small> <div class="text-lt font-bold">' + primaryMobileNo + '</div>  </div> <div class="col-xs-6"><small>Primary Email Address</small> <div class="text-lt font-bold">' + primaryEmailId + '</div></div></div>';
                communicationPanel.innerHTML = communicationPanel.innerHTML + '<div class="row"><div class="col-xs-6 text-right"><small>Secondary Mobile Number</small> <div class="text-lt font-bold">' + mobileNumber + '</div></div><div class="col-xs-6"><small>Secondary Email Address</small> <div class="text-lt font-bold">' + emailAddress + '</div></div></div> ';


                var sec1 = document.getElementById("sec1");
                var sec2 = document.getElementById("sec2");
                var sec3 = document.getElementById("sec3");

                sec1.innerHTML = '<div class="col-lg-8">' + securityQuestion1 + '</div><div class="col-lg-4" style="float:right;">*******</div>';
                sec2.innerHTML = '<div class="col-lg-8">' + securityQuestion2 + '</div><div class="col-lg-4" style="float:right;">*******</div>';
                sec3.innerHTML = '<div class="col-lg-8">' + securityQuestion3 + '</div><div class="col-lg-4" style="float:right;">*******</div>';

                document.getElementById('fname').value = firstName;
                document.getElementById('mname').value = middleName;
                document.getElementById('lname').value = lastName;
                document.getElementById('semail').value = emailAddress;
                document.getElementById('smobile').value = mobileNumber;


            }



        }

    });




    $("#editForm").submit(function() {

        var fname = $("#fname").val();
        var mname = $("#mname").val();
        var lname = $("#lname").val();
        var smobile = $("#smobile").val();
        var semail = $("#semail").val();



        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            $("#msgbox").removeClass().addClass('myinfo').text('Validating Details... ').fadeIn(1000);




            this.timer = setTimeout(function() {

                $.ajax({
                    url: webServerUrl,
                    data: 'request=updateProfile&fname=' + fname + '&mname=' + mname + '&lname=' + lname + '&smobile=' + smobile + '&semail=' + semail,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;

                        if (resultCode == 1) {


                            $("#msgbox").html('Updating Profile...').addClass('myinfo').fadeTo(900, 1,
                                function() {
                                    var fullName = fname + ' ' + lname;
                                    localStorage.setItem("firstName", fullName);
                                    window.location = "profile.html";

                                });

                        } else {
                            $("#msgbox").fadeTo(200, 0.1, function() //start fading the messagebox
                                {
                                    //add message and change the class of the box and start fading
                                    $(this).html(message).removeClass().addClass('myerror').fadeTo(900, 1);
                                });

                        }
                    }

                });
            }, 200);

        }


        return false;
    });



    $("#pass_frm").submit(function() {

        var myPassword = localStorage.getItem("pass");
        var currentpassword = $("#currentpassword").val();
        var pwd = $("#pwd").val();
        var cpwd = $("#cpwd").val();

        pwd = pwd.trim();
        cpwd = cpwd.trim();


        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            if (myPassword == currentpassword) {

                $("#msg_box").removeClass().addClass('myinfo').text('Validating Details..').fadeIn(1000);
                this.timer = setTimeout(function() {
                    localStorage.setItem("pass", cpwd);
                    $.ajax({
                        url: webServerUrl,
                        data: 'request=changePasswordPortal&cpwd=' + cpwd,
                        type: 'post',
                        success: function(msg) {

                            var loginJson = msg.trim();
                            obj = JSON.parse(loginJson);
                            var resultCode = obj.response.resultcode;
                            var message = obj.response.message;

                            if (resultCode == 1) {


                                $("#msg_box").html('Changing Password...').addClass('myinfo').fadeTo(900, 1,
                                    function() {
                                        window.location = "profile.html";

                                    });

                            } else {
                                $("#msg_box").fadeTo(200, 0.1, function() //start fading the messagebox
                                    {
                                        //add message and change the class of the box and start fading
                                        $(this).html(message).removeClass().addClass('myerror').fadeTo(900, 1);
                                    });

                            }
                        }

                    });
                }, 200);

            } else {

                $("#msg_box").removeClass().addClass('myinfo').text('Invalid current password!!!  ').fadeIn(1000);
                return false;
            }



        }




        return false;
    });




    $("#deleteProPic").click(function() {

        $.ajax({
            url: webServerUrl,
            data: 'request=deleteProPic',
            type: 'post',
            success: function(msg) {

                var loginJson = msg.trim();

                obj = JSON.parse(loginJson);
                var resultCode = obj.response.resultcode;
                var message = obj.response.message;


                if (resultCode == 1) {

                    localStorage.setItem("proPic", "images/default_pic.jpg");
                    window.location = "profile.html";
                }



            }

        });


    });




});



function changePicture(fileName, fileTypes) {


    if (!fileName) return;
    dots = fileName.split(".")
    fileType = "." + dots[dots.length - 1];

    if (fileTypes.join(".").indexOf(fileType) != -1) {




        this.timer = setTimeout(function() {

            var jForm = new FormData();
            jForm.append("file", $('#file').get(0).files[0]);

            $.ajax({
                url: changePicUrl,
                type: "POST",
                data: jForm,
                mimeType: "multipart/form-data",
                contentType: false,
                cache: false,
                processData: false,
                success: function(msg) {

                    var loginJson = msg.trim();
                    obj = JSON.parse(loginJson);
                    var resultCode = obj.response.resultcode;
                    var message = obj.response.message;

                    if (resultCode == 1) {


                        var newPic = obj.response.changeProPicResult;
                        localStorage.setItem("proPic", newPic);
                        window.location = "profile.html";

                    } else {

                    }
                }

            });
        }, 200);
        return false;

    } else {

        $("#picmsg").fadeTo(200, 0.1, function() {
            $(this).html("<center><div class='fa fa-warning' style='font-size:15px;'></div><br>Only \n\n" + (fileTypes.join(" .")) + "\n\n file types are allowed!!</center>").css("color", "#a00a0a").removeClass().addClass('myerror').fadeTo(900, 1);
        });

    }




}




function resetProfile() {

    document.getElementById("profileUpdate").disabled = true;


    $.ajax({
        url: webServerUrl,
        data: 'request=viewProfile',
        type: 'post',
        success: function(msg) {

            var loginJson = msg.trim();

            obj = JSON.parse(loginJson);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;


            if (resultCode == 1) {

                var firstName = obj.response.ViewProfileResult.firstName;
                var middleName = obj.response.ViewProfileResult.middleName;
                var lastName = obj.response.ViewProfileResult.lastName;

                var fullName = firstName + ' ' + lastName;

                var primaryMobileNo = obj.response.ViewProfileResult.primaryMobileNo;
                var primaryEmailId = obj.response.ViewProfileResult.primaryEmailId;
                var emailAddress = obj.response.ViewProfileResult.emailAddress;
                var mobileNumber = obj.response.ViewProfileResult.mobileNumber;
                var securityQuestion1 = obj.response.ViewProfileResult.securityQuestion1;
                var securityQuestion2 = obj.response.ViewProfileResult.securityQuestion2;
                var securityQuestion3 = obj.response.ViewProfileResult.securityQuestion3;
                var securityAnswer1 = obj.response.ViewProfileResult.securityAnswer1;
                var securityAnswer2 = obj.response.ViewProfileResult.securityAnswer2;
                var securityAnswer3 = obj.response.ViewProfileResult.securityAnswer3;

                var mainPanel = document.getElementById("mainPanel");
                mainPanel.innerHTML = '<div class="h4 m-t m-b-xs font-bold text-lt">' + fullName + '</div> <small class="text-muted m-b">' + userRole + '</small>';

                var mainPic = document.getElementById("mainPic");
                mainPic.innerHTML = '<img src="' + userPic + '" class="dker" width="250px" height="250px"> ';


                var communicationPanel = document.getElementById("communicationPanel");
                communicationPanel.innerHTML = '<div class="row m-b"><div class="col-xs-6 text-right"><small>Primary Mobile Number</small> <div class="text-lt font-bold">' + primaryMobileNo + '</div>  </div> <div class="col-xs-6"><small>Primary Email Address</small> <div class="text-lt font-bold">' + primaryEmailId + '</div></div></div>';
                communicationPanel.innerHTML = communicationPanel.innerHTML + '<div class="row"><div class="col-xs-6 text-right"><small>Secondary Mobile Number</small> <div class="text-lt font-bold">' + mobileNumber + '</div></div><div class="col-xs-6"><small>Secondary Email Address</small> <div class="text-lt font-bold">' + emailAddress + '</div></div></div> ';


                var sec1 = document.getElementById("sec1");
                var sec2 = document.getElementById("sec2");
                var sec3 = document.getElementById("sec3");

                sec1.innerHTML = '<div class="col-lg-8">' + securityQuestion1 + '</div><div class="col-lg-4" style="float:right;">*******</div>';
                sec2.innerHTML = '<div class="col-lg-8">' + securityQuestion2 + '</div><div class="col-lg-4" style="float:right;">*******</div>';
                sec3.innerHTML = '<div class="col-lg-8">' + securityQuestion3 + '</div><div class="col-lg-4" style="float:right;">*******</div>';

                document.getElementById('fname').value = firstName;
                document.getElementById('mname').value = middleName;
                document.getElementById('lname').value = lastName;
                document.getElementById('semail').value = emailAddress;
                document.getElementById('smobile').value = mobileNumber;


            }



        }

    });

}




function changePicture(fileString) {


    this.timer = setTimeout(function() {


        $.ajax({
            url: webServerUrl,
            data: 'request=changeProPic&fileString=' + fileString,
            type: 'post',
            success: function(msg) {

                var loginJson = msg.trim();
                obj = JSON.parse(loginJson);
                var resultCode = obj.response.resultcode;
                var message = obj.response.message;

                if (resultCode == 1) {

                    var newPic = obj.response.changeProPicResult;


                    localStorage.setItem("proPic", newPic);
                    window.location = "profile.html";

                } else {


                    $("#msgbox_pic").html(message).css('color', 'red').addClass('myinfo').fadeTo(900, 1,
                        function() {



                        });




                }
            }

        });
    }, 200);
    return false;

}