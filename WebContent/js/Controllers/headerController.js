if (localStorage.getItem("firstName") == null) {
    window.location = "index.html";
}


$(document).ready(function() {

    var firstName = localStorage.getItem("firstName");
    var userRole = localStorage.getItem("userRole");
    var userPic = localStorage.getItem("proPic");

    var namePanel = document.getElementById("namePanel");
    namePanel.innerHTML = firstName;

    var rolePanel = document.getElementById("rolePanel");
    rolePanel.innerHTML = userRole;

    var picPanel = document.getElementById("picPanel");
    picPanel.innerHTML = '<img src="' + userPic + '" class="dker" alt="..."><i class="on md b-light"></i>';

    var navBar = document.getElementById("navBar");
    navBar.innerHTML = '<a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="thumb-sm avatar pull-left"><img src="' + userPic + '" class="dker" alt="..."></span> <b>' + firstName + '</b> <b class="caret"></b> </a><ul class="dropdown-menu animated fadeInRight"><li> <a href="profile.html">Profile</a> </li> <li>  <a href="#"> <span class="badge bg-danger pull-right">3</span> Notifications </a> </li> <li> <a href="#" onclick="signout();">Logout</a> </li> </ul> ';




});


function signout() {




    $.ajax({
        url: webServerUrl,
        data: 'request=logout',
        type: 'post',
        success: function(msg) {

            var loginJson = msg.trim();

            obj = JSON.parse(loginJson);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;


            if (resultCode == 1) {

                console.log(msg);
                localStorage.clear();
                window.location = "index.html";

            }




        }

    });



    console.log(msg);
    localStorage.clear();
    window.location = "index.html";



}