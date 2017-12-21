 var defaultloguser = localStorage.getItem("mainUser");
 localStorage.setItem("loguser", defaultloguser);
 defUser = localStorage.getItem("defUser");

 var logUserRole = "Clerk";
 var DefaultLogUserRole = "Clerk";
 var mainloguser = localStorage.getItem("mainUser");



 var dcaseNo = localStorage.getItem("caseNo");
 var dcaseTitle = localStorage.getItem("caseTitle");
 var dsittingNo = localStorage.getItem("sittingNo");
 var dsessionNo = localStorage.getItem("sessionNo");

 function endCase() {

     $(location).attr('href', 'initialize_record.html');

 }




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
         data: 'request=forceStartRecord',
         type: 'post',
         success: function(msg) {

             var loginJson = msg.trim();

             obj = JSON.parse(loginJson);
             var resultCode = obj.response.resultcode;
             var message = obj.response.message;

             var CAM1 = obj.response.StreamDetail.CAM1.Url;
             var CAM2 = obj.response.StreamDetail.CAM2.Url;
             var CAM3 = obj.response.StreamDetail.CAM3.Url;
             var CAM4 = obj.response.StreamDetail.CAM4.Url;

             var AUD1 = obj.response.StreamDetail.CAM1.Aud;
             var AUD2 = obj.response.StreamDetail.CAM2.Aud;
             var AUD3 = obj.response.StreamDetail.CAM3.Aud;
             var AUD4 = obj.response.StreamDetail.CAM4.Aud;



             /*	var CAM1  = 'rtmp://fms.12E5.edgecastcdn.net/0012E5/mp4:videos/8Juv1MVa-485.mp4';
             	var CAM2  = 'rtmp://fms.12E5.edgecastcdn.net/0012E5/mp4:videos/8Juv1MVa-485.mp4';
             	var CAM3  = 'rtmp://fms.12E5.edgecastcdn.net/0012E5/mp4:videos/8Juv1MVa-485.mp4';
             	var CAM4 =  'rtmp://fms.12E5.edgecastcdn.net/0012E5/mp4:videos/8Juv1MVa-485.mp4';
             	
             	var AUD1  = 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3';
             	var AUD2  = 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3';
             	var AUD3  = 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3';
             	var AUD4  = 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3';
             	  		
             	 */
             if (resultCode == 1) {

                 console.log(msg);



                 /*VLC Block*/


                 /*var feed1 = document.getElementById("feed1");
		   		var feed2 = document.getElementById("feed2");
		   		var feed3 = document.getElementById("feed3");
		   		var feed4 = document.getElementById("feed4");
		   		
		   		feed1.innerHTML = '<embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2"  id="vlc" loop="yes" autoplay="yes" target="'+CAM1+'" Style="height:auto; width:98%;"></embed><embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2"  id="vlc1" loop="yes" autoplay="yes" target="'+AUD1+'" Style="height:0px; width:0px;"></embed>';
		   		feed2.innerHTML = '<embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2"  id="vlc" loop="yes" autoplay="yes" target="'+CAM2+'" Style="height:auto; width:98%;"></embed><embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2"  id="vlc2" loop="yes" autoplay="yes" target="'+AUD2+'" Style="height:0px; width:0px;"></embed>';
		   		feed3.innerHTML = '<embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2"  id="vlc" loop="yes" autoplay="yes" target="'+CAM3+'" Style="height:auto; width:98%;"></embed><embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2"  id="vlc3" loop="yes" autoplay="yes" target="'+AUD3+'" Style="height:0px; width:0px;"></embed>';
		   		feed4.innerHTML = '<embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2"  id="vlc" loop="yes" autoplay="yes" target="'+CAM4+'" Style="height:auto; width:98%;"></embed><embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2"  id="vlc4" loop="yes" autoplay="yes" target="'+AUD4+'" Style="height:0px; width:0px;"></embed>';
	*/



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




                 var thisCaseDetails = document.getElementById("thisCaseDetails");
                 thisCaseDetails.innerHTML = 'Case Number : <span class="badge bg-success" style="background-color:#000">' + dcaseNo + '</span> | Case Title :  <span class="badge bg-success" style="background-color:#000">' + dcaseTitle + '</span> Sitting Number: <span class="badge bg-success" style="background-color:#000">' + dsittingNo + '</span> | Session Number: <span class="badge bg-success" style="background-color:#000">' + dsessionNo + '</span>';



             } else {


             }
         }

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
     var dw = new Date();
     var ew = formatDate(dw);




     var logs = {
         "logNotes": [{
             "duration": 00,
             "notes": "Recording Started",
             "speaker": "Clerk : " + defUser,
             "timestamp": ew
         }]

     };



     var div = document.getElementById('newText');

     div.innerHTML = '<div class="list-group-item text-ellipsis"><b>' + ew + '</b> : <span class="badge bg-success" Style="font-size:10px;float:none;background-color:#a00a0a;">Clerk : ' + defUser + '</span> : <b>Recording Started</b> </div> ';

     /*var judges = localStorage["judges"];
     var lawyers = localStorage["lawyers"];
     var participants = localStorage["participants"];
     var others = localStorage["others"];
     */

     var courtJudges = document.getElementById('courtJudges');
     var courtLawyers = document.getElementById('courtLawyers');
     var courtParticipants = document.getElementById('courtParticipants');
     var courtOthers = document.getElementById('courtOthers');

     var judges = JSON.parse(localStorage["judges"]);
     var lawyers = JSON.parse(localStorage["lawyers"]);
     var participants = JSON.parse(localStorage["participants"]);
     var others = JSON.parse(localStorage["others"]);


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




     $('[data-toggle="confirmation"]').confirmation();
     $('.confirmation-callback').confirmation({
         onConfirm: function() {


             var stopDate = new Date();
             var stopDur = formatDate(stopDate);
             var dur = localStorage.getItem("duration");

             logs.logNotes.push({
                 "duration": dur,
                 "notes": "Recording Stopped",
                 "speaker": "Clerk : " + defUser,
                 "timestamp": stopDur
             });

             var finalJson = JSON.stringify(logs, undefined, 2);
             var dataString = 'finalJson=' + finalJson;


             $.ajax({
                 type: "POST",
                 url: webServerUrl,
                 data: 'request=stopRecord&finalJson=' + finalJson,
                 cache: false,
                 success: function(result) {


                     $('#liveModal').modal('show');




                 }
             });




         },
         onCancel: function() {}
     });




     $("#logButton").click(function() {


         var message = $("textarea").val();
         if (message == "") {
             $('#logs').attr('placeholder', 'Logs Cannot be empty!!');
         } else {

             changeThis();
             $('#logs').attr('placeholder', 'Type Lognotes and press ENTER');

             $('#logNotes').scrollTop($('#logNotes')[0].scrollHeight);

             function changeThis() {
                 if (c_writer.checked == 1) {
                     logUserRole = "Clerk";
                     localStorage.setItem("loguser", defaultloguser);
                 }
                 var formInput = document.getElementById('logs').value;

                 var d = new Date();
                 var e = formatDate(d);

                 var div = document.getElementById('newText');

                 var second = localStorage.getItem("duration");
                 var loguser = localStorage.getItem("loguser");

                 div.innerHTML = div.innerHTML + '<div class="list-group-item text-ellipsis w-f scrollable" Style="max-height: 40px;"><b>' + e + '</b> : <span class="badge bg-success" Style="font-size:10px;float:none;background-color:#a00a0a;">' + logUserRole + ' : ' + loguser + '</span> : <b>' + formInput + '</b></div>';


                 logs.logNotes.push({
                     "duration": second,
                     "notes": formInput,
                     "speaker": logUserRole + ' : ' + loguser,
                     "timestamp": e
                 });




                 document.getElementById('logs').value = '';


             }


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

         }
     });

     $('#logs').keydown(function() {
         var message = $("textarea").val();
         if (event.keyCode == 13) {
             if (message == "") {
                 $('#logs').attr('placeholder', 'Logs Cannot be empty!!');
             } else {
                 $('#logs').attr('placeholder', 'Type Lognotes and press ENTER');
                 $('#my_form').submit();
                 changeThis();

                 $('#logNotes').scrollTop($('#logNotes')[0].scrollHeight);

                 function changeThis() {

                     var formInput = document.getElementById('logs').value;

                     var d = new Date();
                     var e = formatDate(d);

                     var div = document.getElementById('newText');

                     var second = localStorage.getItem("duration");
                     var loguser = localStorage.getItem("loguser");

                     div.innerHTML = div.innerHTML + '<div class="list-group-item text-ellipsis w-f scrollable" Style="max-height: 40px;"><b>' + e + '</b> : <span class="badge bg-success" Style="font-size:10px;float:none;background-color:#a00a0a;">' + logUserRole + ' : ' + loguser + '</span> : <b>' + formInput + '</b></div>';


                     logs.logNotes.push({
                         "duration": second,
                         "notes": formInput,
                         "speaker": logUserRole + ' : ' + loguser,
                         "timestamp": e
                     });

                     document.getElementById('logs').value = '';

                 }



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

             }
             $("textarea").val('');
             return false;
         }
     });



     $("#login_frm").submit(function() {

         var form = $(this);
         form.parsley().validate();
         if (form.parsley().isValid()) {


             $("#msgbox").removeClass().addClass('myinfo').text('Validating Your Login ').fadeIn(1000);


             this.timer = setTimeout(function() {

                 var privateNoteUser = $('#login_id').val();
                 localStorage.setItem("privateNoteUser", privateNoteUser);


                 $.ajax({
                     url: webServerUrl,
                     data: 'request=privateNoteAuth&un=' + $('#login_id').val() + '&pw=' + $('#password').val(),
                     type: 'post',
                     success: function(msg) {

                         var loginJson = msg.trim();
                         obj = JSON.parse(loginJson);
                         var resultCode = obj.response.resultcode;
                         var message = obj.response.message;

                         if (resultCode == 1) {


                             $("#msgbox").html('Login Verified, Logging in.....').addClass('myinfo').fadeTo(900, 1,
                                 function() {
                                     document.getElementById("login_box").style.display = "none";
                                     document.getElementById("note_box").style.display = "block";
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
             return false;



         }


     });




     $("#note_frm").submit(function() {


         var form = $(this);
         form.parsley().validate();
         if (form.parsley().isValid()) {



             $("#msgbox_add").removeClass().addClass('myinfo').text('Validating Your Input... ').fadeIn(1000);

             this.timer = setTimeout(function() {
                 $.ajax({
                     url: webServerUrl,
                     data: 'request=enterPrivateNote&notes=' + $('#private_notes').val(),
                     type: 'post',
                     success: function(msg) {
                         var loginJson = msg.trim();
                         obj = JSON.parse(loginJson);
                         var resultCode = obj.response.resultcode;
                         var message = obj.response.message;

                         if (resultCode == 1) {

                             $("#msgbox_add").html('Adding Privatenotes..').addClass('myinfo').fadeTo(900, 1,
                                 function() {
                                     document.getElementById("login_box").style.display = "none";
                                     document.getElementById("note_box").style.display = "none";
                                     document.getElementById("confirm_box").style.display = "block";



                                     document.getElementById('login_id').value = '';
                                     document.getElementById('password').value = '';
                                     document.getElementById('private_notes').value = '';

                                     var msgbox = document.getElementById('msgbox');

                                     msgbox.innerHTML = '';

                                     var d = new Date();
                                     var e = formatDate(d);




                                     var div = document.getElementById('newText');
                                     var second = localStorage.getItem("duration");
                                     div.innerHTML = div.innerHTML + '<div class="list-group-item text-ellipsis"><b>' + e + '</b> : <span class="badge bg-success" Style="font-size:10px;float:none;background-color:#a00a0a;">Admin : ' + localStorage.getItem("privateNoteUser") + '</span> : <b>Private Note Added</b> </div> ';


                                     logs.logNotes.push({
                                         "duration": second,
                                         "notes": "Private Note Added",
                                         "speaker": "Admin : " + localStorage.getItem("privateNoteUser"),
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
                             $("#msgbox_add").fadeTo(200, 0.1, function() //start fading the messagebox
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


     $("#con_frm").submit(function() {

         $('#add-privatenotes').modal('hide');

         document.getElementById("login_box").style.display = "block";
         document.getElementById("note_box").style.display = "none";
         document.getElementById("confirm_box").style.display = "none";

     });




 });

 function activeUser(index, user) {

     $('.activeUser').hide();
     $("#logs").focus()
         .prop('selectionStart', 0)
         .prop('selectionEnd', 0);


     if (user == 1) {
         var judges = JSON.parse(localStorage["judges"]);
         var typeUser = judges[index];
         localStorage.setItem("loguser", typeUser);
         logUserRole = "Judge";
         c_writer.checked = false;

     } else if (user == 2) {
         var lawyers = JSON.parse(localStorage["lawyers"]);
         var typeUser = lawyers[index];
         localStorage.setItem("loguser", typeUser);
         logUserRole = "Lawyer";
         c_writer.checked = false;

     } else if (user == 3) {
         var participants = JSON.parse(localStorage["participants"]);
         var typeUser = participants[index];
         localStorage.setItem("loguser", typeUser);
         logUserRole = "Participant";
         c_writer.checked = false;
     } else {
         var others = JSON.parse(localStorage["others"]);
         var typeUser = others[index];
         localStorage.setItem("loguser", typeUser);
         logUserRole = "Other";
         c_writer.checked = false;
     }


 }