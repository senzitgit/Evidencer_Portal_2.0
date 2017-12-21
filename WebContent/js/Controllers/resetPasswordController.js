$(document).ready(function() {

    $("#first_frm").submit(function() {

        var username = $("#username").val();
        var email = $("#email").val();



        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {



            this.timer = setTimeout(function() {

                $.ajax({
                    url: webServerUrl,
                    data: 'request=forgotPassword&username=' + username + '&email=' + email,
                    type: 'post',
                    success: function(msg) {


                        console.log(msg);



                        var loginJson = msg.trim();

                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;

                        if (resultCode == 1) {

                            $("#msg_box").html('Retrieving Security Questions.....').addClass('myinfo').fadeTo(900, 1,
                                function() {



                                    firstQuestion = obj.response.ForgotPasswordResult.firstQuestion;
                                    secondQuestion = obj.response.ForgotPasswordResult.secondQuestion;

                                    var secQues1 = document.getElementById("secQues1");
                                    secQues1.innerHTML = 'Question 1 : ' + firstQuestion;

                                    var secQues2 = document.getElementById("secQues2");
                                    secQues2.innerHTML = 'Question 2 : ' + secondQuestion;

                                    document.getElementById("firstStep").style.display = "none";
                                    document.getElementById("secondStep").style.display = "block";

                                });

                        } else {
                            $("#msg_box").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            document.getElementById("fForm").disabled = "true";
            return false;




        }

    });




    $("#second_frm").submit(function() {

        var secAns1 = $("#secAns1").val();
        var secAns2 = $("#secAns2").val();



        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {


            this.timer = setTimeout(function() {

                $.ajax({
                    url: webServerUrl,
                    data: 'request=forgotPassAnswer&answer1=' + secAns1 + '&answer2=' + secAns2 + '&question1=' + firstQuestion + '&question2=' + secondQuestion,
                    type: 'post',
                    success: function(msg) {
                        console.log(msg);

                        var loginJson = msg.trim();

                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;


                        if (resultCode == 1) {

                            $("#msg_box1").html('Verifying Details.....').addClass('myinfo').fadeTo(900, 1,
                                function() {

                                    document.getElementById("secondStep").style.display = "none";
                                    document.getElementById("thirdStep").style.display = "block";

                                });

                        } else {
                            $("#msg_box1").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);

            document.getElementById("sForm").disabled = "true";
            return false;

        }

    });




    $("#third_frm").submit(function() {

        var secretcode = $("#secretcode").val();
        var npassword = $("#npassword").val();
        var cpassword = $("#cpassword").val();

        npassword = npassword.trim();
        cpassword = cpassword.trim();

        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {



            this.timer = setTimeout(function() {

                $.ajax({
                    url: webServerUrl,
                    data: 'request=resetPassword&secretcode=' + secretcode + '&npassword=' + npassword + '&cpassword=' + cpassword,
                    type: 'post',
                    success: function(msg) {

                        console.log(msg);

                        var loginJson = msg.trim();

                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;

                        if (resultCode == 1) {

                            $("#msg_box2").html('Validating Details.....').addClass('myinfo').fadeTo(900, 1,
                                function() {

                                    document.getElementById("thirdStep").style.display = "none";
                                    document.getElementById("succesStep").style.display = "block";

                                });

                        } else {
                            $("#msg_box2").fadeTo(200, 0.1, function() {
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