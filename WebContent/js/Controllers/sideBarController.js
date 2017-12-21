var firstName = localStorage.getItem("firstName");
var userRole = localStorage.getItem("userRole");
var userPic = localStorage.getItem("proPic");

var unreadcount = 0;



$(document).ready(function() {




    $.ajax({
        url: webServerUrl,
        data: 'request=getLiveSessions',
        type: 'post',
        success: function(msg) {

            var loginJson = msg.trim();

            obj = JSON.parse(loginJson);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;


            if (resultCode == 1) {

                console.log(msg);
                var LiveSessionsListarrayLength = obj.response.LiveSessionsList.length;




                var sideBar = document.getElementById("sideBar");
                sideBar.innerHTML = sideBar.innerHTML + '<li Style="border-bottom:1px solid #E6E6E6;  margin-top:10px; margin-bottom:10px; "><a href="dashboard.html" > <i class="i i-statistics icon"> </i><span class="font-bold">Dashboard</span></a></li>';

                sideBar.innerHTML = sideBar.innerHTML + ' <li Style="border-bottom:1px solid #E6E6E6; margin-top:10px; margin-bottom:10px;"><a href="live_sessions.html" > <i class="i i-signal icon "></i><span class="font-bold">Live Streaming</span> <b class="badge bg-danger pull-right" style="background-color:#c6aa5d;">' + LiveSessionsListarrayLength + ' Cases</b></a> </li> ';

                sideBar.innerHTML = sideBar.innerHTML + '<li Style="border-bottom:1px solid #E6E6E6; margin-top:10px; margin-bottom:10px;"><a href="initialize_record.html" > <i class="fa fa-video-camera"></i> <span class="font-bold">EviRecorder</span> </a> </li>';

                sideBar.innerHTML = sideBar.innerHTML + '<li Style="border-bottom:1px solid #E6E6E6; margin-top:10px; margin-bottom:10px;"><a href="video_on_demand.html" > <i class="fa fa-play"></i> <span class="font-bold">EviPlayer</span> </a> </li>';


                if (userRole == 'Administrator') {
                    sideBar.innerHTML = sideBar.innerHTML + '<li Style="border-bottom:1px solid #E6E6E6; margin-top:10px; margin-bottom:10px;"><a href="admin_area.html" > <i class="fa fa-cogs"></i> <span class="font-bold">Admin Area</span> </a> </li>';
                }
                sideBar.innerHTML = sideBar.innerHTML + '<li> <a href="profile.html"> <i class="i i-user3 icon"> </i><span class="font-bold">Profile</span> </a> </li>';




            }




        }

    });




});