$(document).ready(function() {
    $("#first_frm").submit(function() {




        var name = $("#name").val();
        var username = $("#username").val();
        var password = $("#pwd").val();
        var mobile = $("#mobile").val();
        var email = $("#email").val();

        password = password.trim();

        localStorage.setItem("myName", name);
        localStorage.setItem("username", username);


        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

        
            document.getElementById("firstSubmit").value = "Processing...";

            this.timer = setTimeout(function() {

                $.ajax({
                    url: webServerUrl,
                    data: 'request=register&name=' + name + '&username=' + username + '&password=' + password + '&mobile=' + mobile + '&email=' + email,
                    type: 'post',
                    success: function(msg) {

                        var data = 'request=register&name=' + name + '&username=' + username + '&password=' + password + '&mobile=' + mobile + '&email=' + email;
                        console.log(data);
                        console.log(msg);



                        var loginJson = msg.trim();

                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;

                        if (resultCode == 1) {

                            $("#msg_box").html('Sending Verification Codes.....').addClass('myinfo').fadeTo(900, 1,
                                function() {

                                    document.getElementById("firstStep").style.display = "none";
                                    //  $('input:submit').attr("value",Processing);
                                    document.getElementById("secondStep").style.display = "block";

                                });

                        } else {
                        	
                        
                            document.getElementById("firstSubmit").value = "Register";
                            $("#msg_box").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);


            return false;




        }

    });




    $("#second_frm").submit(function() {


        var myName = localStorage.getItem("myName");
        var myUserName = localStorage.getItem("username");

        document.getElementById("conffname").value = myName;
        document.getElementById('confusername').value = myUserName;



        var emailCode = $("#emailCode").val();
        var smsCode = $("#smsCode").val();



        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {


            
            document.getElementById("secondSubmit").value = "Verifying...";
            this.timer = setTimeout(function() {

                $.ajax({
                    url: webServerUrl,
                    data: 'request=regCode&emailCode=' + emailCode + '&smsCode=' + smsCode,
                    type: 'post',
                    success: function(msg) {

                        var data = 'request=regCode&emailCode=' + emailCode + '&smsCode=' + smsCode;

                        console.log(data);
                        console.log(msg);

                        localStorage.setItem("fname", name);


                        var loginJson = msg.trim();

                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;

                        var location = obj.response.UserRegResult.defaultLocation;
                        localStorage.setItem("location", location);

                        if (resultCode == 1) {

                            $("#msg_box1").html('Verifying Details.....').addClass('myinfo').fadeTo(900, 1,
                                function() {

                                    document.getElementById("secondStep").style.display = "none";
                                    document.getElementById("thirdStep").style.display = "block";

                                });

                        } else {
                        	
                             document.getElementById("secondSubmit").value = "Verify";
                        	
                        	
                            $("#msg_box1").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);

            return false;




        }

    });




    $("#third_frm").submit(function() {

        var fname = localStorage.getItem("myName");
        var location = localStorage.getItem("location");
        var mname = $("#mname").val();
        var lname = $("#lname").val();

        var semail = $("#semail").val();
        var smobile = $("#smobile").val();

        var secq1 = $("#secq1").val();
        var secq2 = $("#secq2").val();
        var secq3 = $("#secq3").val();

        var seca1 = $("#seca1").val();
        var seca2 = $("#seca2").val();
        var seca3 = $("#seca3").val();



        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {



            this.timer = setTimeout(function() {

                $.ajax({
                    url: webServerUrl,
                    data: 'request=regPro&mname=' + mname + '&lname=' + lname + '&semail=' + semail + '&smobile=' + smobile + '&secq1=' + secq1 + '&secq2=' + secq2 + '&secq3=' + secq3 + '&seca1=' + seca1 + '&seca2=' + seca2 + '&seca3=' + seca3 + '&fname=' + fname + '&location=' + location + '&fname=' + fname,
                    type: 'post',
                    success: function(msg) {

                        var data = 'request=regPro&mname=' + mname + '&lname=' + lname + '&semail=' + semail + '&smobile=' + smobile + '&secq1=' + secq1 + '&secq2=' + secq2 + '&secq3=' + secq3 + '&seca1=' + seca1 + '&seca2=' + seca2 + '&seca3=' + seca3 + '&fname=' + fname + '&location=' + location;
                        console.log(data);
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