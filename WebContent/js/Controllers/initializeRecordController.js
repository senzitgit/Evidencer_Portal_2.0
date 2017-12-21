$(document).ready(function() {

    var caseNoFirst = document.getElementById('caseNoFirst');

    caseNoFirst.onkeyup = function() {
        this.value = this.value.toUpperCase();
    }
    var mainUser = localStorage.getItem("mainUser");
    localStorage.setItem("loguser", mainUser);

    $.ajax({
        url: webServerUrl,
        data: 'request=getCaseTypes',
        type: 'post',
        success: function(msg) {


            var ServerResp = msg.trim();

            obj = JSON.parse(ServerResp);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;


            if (resultCode == 1) {
                var arrayLength = obj.response.caseTypeList.length;
                var caseType = document.getElementById("caseType");
                if (arrayLength > 0) {

                    for (var i = 0; i < arrayLength; i++) {
                        var cur = obj.response.caseTypeList[i];
                        caseType.innerHTML = caseType.innerHTML + '<option value="' + cur.caseType + '">' + cur.caseType + '</option>';

                    }
                } else {}


            } else {
                alert("Error");

            }
        }

    });




    $("#continueSitting").click(function() {

        sessionNo = sessionNo + 1;

        document.getElementById('sittingNo').value = sittingNo;
        document.getElementById('sessionNo').value = sessionNo;


    });

    $("#newSitting").click(function() {

        sessionNo = 1;
        sittingNo = sittingNo + 1;

        document.getElementById('sittingNo').value = sittingNo;
        document.getElementById('sessionNo').value = sessionNo;

    });


    $("#myform").submit(function(e) {

        var caseNo = $("#caseNo").val();
        var caseTitle = $("#caseTitle").val();
        var caseDesc = $("#caseDesc").val();
        var sittingNo = $("#sittingNo").val();
        var sessionNo = $("#sessionNo").val();
        var confidential = $("#confidential").val();
        var caseType = $("#caseType").val();
        var initiatingSite = $("#initiatingSite").val();
        var caseLocation = $("#caseLocation").val();

        localStorage.setItem("caseNo", caseNo);
        localStorage.setItem("caseTitle", caseTitle);
        localStorage.setItem("sittingNo", sittingNo);
        localStorage.setItem("sessionNo", sessionNo);



        localStorage["judges"] = "";
        localStorage["lawyers"] = "";
        localStorage["participants"] = "";
        localStorage["others"] = "";




        var judges = new Array();
        $("input[name=judges]").each(function() {

            if ($(this).val() != "") {
                judges.push($(this).val());
            }
        });

        var lawyers = new Array();
        $("input[name=lawyers]").each(function() {
            if ($(this).val() != "") {
                lawyers.push($(this).val());
            }
        });

        var participants = new Array();
        $("input[name=participants]").each(function() {
            if ($(this).val() != "") {
                participants.push($(this).val());
            }
        });

        var others = new Array();
        $("input[name=others]").each(function() {
            if ($(this).val() != "") {
                others.push($(this).val());
            }
        });


        localStorage["judges"] = JSON.stringify(judges);
        localStorage["lawyers"] = JSON.stringify(lawyers);
        localStorage["participants"] = JSON.stringify(participants);
        localStorage["others"] = JSON.stringify(others);



        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {


            $.ajax({
                url: webServerUrl,
                data: 'request=newCase&caseNo=' + caseNo + '&caseTitle=' + caseTitle + '&caseDesc=' + caseDesc + '&sittingNo=' + sittingNo + '&sessionNo=' + sessionNo + '&confidential=' + confidential + '&caseType=' + caseType + '&judges=' + judges + '&lawyers=' + lawyers + '&participants=' + participants + '&others=' + others,
                type: 'post',
                success: function(msg) {

                    var loginJson = msg.trim();

                    obj = JSON.parse(loginJson);
                    var resultCode = obj.response.resultcode;
                    var message = obj.response.message;


                    if (resultCode == 1) {

                        console.log(msg);
                        var caseEventId = obj.response.NewCaseEventResult.caseEventId;
                        localStorage.setItem("caseEventId", caseEventId);


                        window.location = "evi_recorder.html";

                    } else {


                    }
                }

            });
            return false;
        }

        return false;
    });




    $('#case_form').on('submit', function() {




        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            var caseNoFirst = $("#caseNoFirst").val();




            $.ajax({
                url: webServerUrl,
                data: 'request=checkCase&caseNo=' + caseNoFirst,
                type: 'post',
                success: function(msg) {


                    var ServerResp = msg.trim();

                    obj = JSON.parse(ServerResp);
                    var resultCode = obj.response.resultcode;
                    var message = obj.response.message;


                    if (resultCode == 1) {

                        document.getElementById("checkForm").style.display = "none";
                        document.getElementById("startForm").style.display = "block";


                        console.log(ServerResp);

                        if (message == 'New Case') {


                            document.getElementById('caseNo').value = caseNoFirst;
                            document.getElementById('sittingNo').value = 1;
                            document.getElementById('sessionNo').value = 1;
                            document.getElementById('defaultLocation').value = "India";

                            document.getElementById('caseNo').readOnly = true;
                            document.getElementById('sittingNo').readOnly = true;
                            document.getElementById('sessionNo').readOnly = true;
                            document.getElementById('defaultLocation').readOnly = true;



                        } else if (message == 'Existing Case') {


                            sittingNo = obj.response.CaseCheckResult.sittingNo;
                            sessionNo = obj.response.CaseCheckResult.sessionNo;
                            var caseDesc = obj.response.CaseCheckResult.caseDescription;
                            var caseTitle = obj.response.CaseCheckResult.caseTitle;
                            var caseType = obj.response.CaseCheckResult.caseType;

                            var ExistCaseType = document.getElementById("ExistCaseType");
                            ExistCaseType.innerHTML = '<input type="text" class="form-control"  data-required="true" value="' + caseType + '" name="caseType" id="caseType" readonly>';

                            document.getElementById('caseNo').value = caseNoFirst;
                            document.getElementById('sittingNo').value = sittingNo;
                            document.getElementById('sessionNo').value = sessionNo;
                            document.getElementById('defaultLocation').value = "India";
                            document.getElementById('caseTitle').value = caseTitle;
                            document.getElementById('caseDesc').value = caseDesc;

                            document.getElementById('caseNo').readOnly = true;
                            document.getElementById('sittingNo').readOnly = true;
                            document.getElementById('sessionNo').readOnly = true;
                            document.getElementById('defaultLocation').readOnly = true;
                            document.getElementById('caseTitle').readOnly = true;
                            document.getElementById('caseDesc').readOnly = true;

                            /*var caseDetails = document.getElementById("caseDetails");
						caseDetails.innerHTML='<div class="col-lg-4">Case Number </div>: '+caseNoFirst+'  <br><div class="col-lg-4">Case Title </div>: '+caseTitle+'<br><div class="col-lg-4">Sitting No </div>: '+sittingNo+'<br><div class="col-lg-4">Session No </div>: '+sessionNo+'';						
					*/

                            $('#confirmModal').modal('show');

                        }



                    } else {
                        alert("Error");

                    }
                }

            });

        }
    });




});