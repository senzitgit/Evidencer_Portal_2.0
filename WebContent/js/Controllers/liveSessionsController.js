function getCaseEventId(caseEventId) {

    localStorage.setItem("caseEventId", caseEventId);
    window.location = "live_streaming.html";

}




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
                var arrayLength = obj.response.LiveSessionsList.length;
                var maninArea = document.getElementById("maninArea");
                if (arrayLength > 0) {

                    for (var i = 0; i < arrayLength; i++) {
                        var cur = obj.response.LiveSessionsList[i];

                        maninArea.innerHTML = maninArea.innerHTML + '<section class="panel panel-info" Style="border-color: #ddd;"> <div class="panel-body"><div class="clear"> <a href="#" class="text-info">' + cur.caseNo + ' : ' + cur.caseTitle + ' </a> <small class="block text-muted">' + cur.caseDesc + '</small> <b><br>Sitting No :  <span class="badge bg-warning">' + cur.sittingNo + '</span> | Session No : <span class="badge bg-success">' + cur.sessionNo + '</span> | Court : <span class="badge bg-info">' + cur.courtName + '</span> | Start Time : <span class="badge bg-primary">' + cur.startTime + '</span> </b><a href="#" onclick="getCaseEventId(' + cur.caseEventId + ')" class="thumb pull-right " style="width:100px;"> <i class="i i-tv" ></i>&nbsp;&nbsp;Watch Now </a> </div> </div> </section>';

                    }
                } else {
                    maninArea.innerHTML = '<br><br><br><b><center> No Live Sessions Are Currently Happening. <br></b><i>Visit Again Later...</center> </i> <br><br><br>';
                }




            } else {


            }
        }

    });


});