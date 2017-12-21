$(document).ready(function() {



    $('#login_frm').on('submit', function(formInstance) {




        var vname = $("#username").val();
        var vpass = $("#password").val();
        localStorage.setItem("pass", vpass);
        localStorage.setItem("loguser", vname);
        localStorage.setItem("defUser", vname);
        localStorage.setItem("mainUser", vname);


        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {


            $("#msg_box").removeClass().addClass('myinfo').text('Validating Your Login..').fadeIn(1000);


            this.timer = setTimeout(function() {

                $.ajax({
                    url: webServerUrl,
                    data: 'request=login&username=' + $('#username').val() + '&password=' + $('#password').val(),
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();

                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;

                        var userType = obj.response.UserLoginResult.userType;
                        var proPic = obj.response.UserLoginResult.proPic;
                        var firstName = obj.response.UserLoginResult.firstName;
                        var lastName = obj.response.UserLoginResult.lastName;

                        if (proPic == '') {
                            proPic = 'images/default_pic.jpg';
                        }

                        var fullName = firstName + ' ' + lastName;
                        localStorage.setItem("proPic", proPic);
                        localStorage.setItem("firstName", fullName);

                        if (userType == 0) {
                            localStorage.setItem("userRole", "Administrator");
                        } else {
                            localStorage.setItem("userRole", "User");
                        }


                        if (resultCode == 1) {

                            $("#msg_box").html('Login Verified, Logging in.....').addClass('myinfo').fadeTo(900, 1,
                                function() {

                                    window.location = "dashboard.html";

                                });

                        } else {
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
});