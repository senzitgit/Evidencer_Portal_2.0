function editRole(index) {

    var cur = roleList[index];

    document.getElementById('rname_edit').value = cur.roleName;
    document.getElementById('rdesc_edit').value = cur.roleDesc;
    document.getElementById('rid').value = cur.roleId;

    $('#add-role-edit').modal('show');

}

function editType(index) {

    var cur = caseTypeList[index];

    document.getElementById('tname_edit').value = cur.caseType;
    document.getElementById('tdesc_edit').value = cur.caseTypeDesc;
    document.getElementById('tid').value = cur.caseTypeId;

    $('#add-types-edit').modal('show');

}

function editLocation(index) {

    var cur = locationList[index];

    document.getElementById('lname_edit').value = cur.locName;
    document.getElementById('ldesc_edit').value = cur.locDesc;
    document.getElementById('lid').value = cur.locId;

    $('#add-location-edit').modal('show');


}

function editCourt(index) {

    var cur = courtList[index];

    document.getElementById('cname_edit').value = cur.courtName;
    document.getElementById('cdesc_edit').value = cur.courtDetails;
    document.getElementById('cid').value = cur.courtId;

    $('#add-court-edit').modal('show');


}

function editStatus(index) {

    var cur = statusList[index];

    document.getElementById('sname_edit').value = cur.status;
    document.getElementById('sdesc_edit').value = cur.statusDesc;
    document.getElementById('sid').value = cur.statusId;

    $('#add-status-edit').modal('show');


}

function editPrivilege(index) {

    var cur = privilegeList[index];
    document.getElementById('pname_edit').value = cur.privilege;
    document.getElementById('pid').value = cur.privilegeId;

    $('#add-privilage-edit').modal('show');
}


function loadDetails() {
    $.ajax({
        url: webServerUrl,
        data: 'request=getAllDetails',
        type: 'post',
        success: function(msg) {

            var loginJson = msg.trim();

            obj = JSON.parse(loginJson);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;


            if (resultCode == 1) {

                roleList = obj.response.detailsList.roleList;
                roleListarrayLength = obj.response.detailsList.roleList.length;

                caseTypeList = obj.response.detailsList.caseTypeList;
                caseTypeListarrayLength = obj.response.detailsList.caseTypeList.length;

                statusList = obj.response.detailsList.statusList;
                statusListarrayLength = obj.response.detailsList.statusList.length;

                courtList = obj.response.detailsList.courtList;
                courtListarrayLength = obj.response.detailsList.courtList.length;

                privilegeList = obj.response.detailsList.privilegeList;
                privilegeListarrayLength = obj.response.detailsList.privilegeList.length;

                locationList = obj.response.detailsList.locationList;
                locationListarrayLength = obj.response.detailsList.locationList.length;

                partialRegList = obj.response.detailsList.partialRegList;
                partialRegListarrayLength = obj.response.detailsList.partialRegList.length;


                var loadRole = document.getElementById("loadRole");
                var loadType = document.getElementById("loadType");
                var loadStatus = document.getElementById("loadStatus");
                var loadCourt = document.getElementById("loadCourt");
                var loadPrivilege = document.getElementById("loadPrivilege");
                var loadLocation = document.getElementById("loadLocation");
                var loadUsers = document.getElementById("loadUsers");
                var locationDrop = document.getElementById("locationDrop");
                var locationDropEdit = document.getElementById("locationDrop_edit");

                loadRole.innerHTML = "";
                loadType.innerHTML = "";
                loadStatus.innerHTML = "";
                loadCourt.innerHTML = "";
                loadPrivilege.innerHTML = "";
                loadLocation.innerHTML = "";
                loadUsers.innerHTML = "";
                locationDrop.innerHTML = "";
                locationDropEdit.innerHTML = "";




                if (roleListarrayLength > 0) {

                    for (var i = 0; i < roleListarrayLength; i++) {
                        var cur = roleList[i];
                        loadRole.innerHTML = loadRole.innerHTML + '<tr><td>' + cur.roleName + '</td><td>' + cur.roleDesc + '</td><td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="editRole(' + i + ')"><div class="fa fa-pencil"></div> &nbsp;&nbsp;Edit</a></li><li><a href="#" data-toggle="modal" data-target="#notAvailable"><div class="fa fa-trash-o"></div> &nbsp;&nbsp;Remove</a></li></ul></div></td> </tr>';
                    }


                }

                if (locationListarrayLength > 0) {

                    for (var i = 0; i < locationListarrayLength; i++) {
                        var cur = locationList[i];
                        loadLocation.innerHTML = loadLocation.innerHTML + '<tr><td>' + cur.locName + '</td><td>' + cur.locDesc + '</td><td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="editLocation(' + i + ')"><div class="fa fa-pencil"></div> &nbsp;&nbsp;Edit</a></li><li><a href="#" data-toggle="modal" data-target="#notAvailable"><div class="fa fa-trash-o"></div> &nbsp;&nbsp;Remove</a></li></ul></div></td> </tr>';
                    }

                    for (var i = 0; i < locationListarrayLength; i++) {
                        var cur = locationList[i];
                        locationDrop.innerHTML = locationDrop.innerHTML + '<option value="' + cur.locId + '">' + cur.locName + '</option>';
                        locationDropEdit.innerHTML = locationDropEdit.innerHTML + '<option value="' + cur.locId + '">' + cur.locName + '</option>';

                    }




                }

                if (statusListarrayLength > 0) {

                    for (var i = 0; i < statusListarrayLength; i++) {
                        var cur = statusList[i];
                        loadStatus.innerHTML = loadStatus.innerHTML + '<tr><td>' + cur.status + '</td><td>' + cur.statusDesc + '</td><td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="editStatus(' + i + ')"><div class="fa fa-pencil"></div> &nbsp;&nbsp;Edit</a></li><li><a href="#" data-toggle="modal" data-target="#notAvailable"><div class="fa fa-trash-o"></div> &nbsp;&nbsp;Remove</a></li></ul></div></td> </tr>';
                    }


                }


                if (caseTypeListarrayLength > 0) {

                    for (var i = 0; i < caseTypeListarrayLength; i++) {
                        var cur = caseTypeList[i];
                        loadType.innerHTML = loadType.innerHTML + '<tr><td>' + cur.caseType + '</td><td>' + cur.caseTypeDesc + '</td><td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="editType(' + i + ')"><div class="fa fa-pencil"></div> &nbsp;&nbsp;Edit</a></li><li><a href="#" data-toggle="modal" data-target="#notAvailable"><div class="fa fa-trash-o"></div> &nbsp;&nbsp;Remove</a></li></ul></div></td> </tr>';
                    }


                }


                if (privilegeListarrayLength > 0) {

                    for (var i = 0; i < privilegeListarrayLength; i++) {
                        var cur = privilegeList[i];
                        loadPrivilege.innerHTML = loadPrivilege.innerHTML + '<tr><td>' + cur.privilegeId + '</td><td>' + cur.privilege + '</td><td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="editPrivilege(' + i + ')"><div class="fa fa-pencil"></div> &nbsp;&nbsp;Edit</a></li><li><a href="#" data-toggle="modal" data-target="#notAvailable"><div class="fa fa-trash-o"></div> &nbsp;&nbsp;Remove</a></li></ul></div></td> </tr>';
                    }


                }

                if (courtListarrayLength > 0) {

                    for (var i = 0; i < courtListarrayLength; i++) {
                        var cur = courtList[i];
                        loadCourt.innerHTML = loadCourt.innerHTML + '<tr><td>' + cur.courtName + '</td><td>' + cur.courtDetails + '</td><td>' + cur.location + '</td><td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="editCourt(' + i + ')"><div class="fa fa-pencil"></div> &nbsp;&nbsp;Edit</a></li><li><a href="#" data-toggle="modal" data-target="#notAvailable"><div class="fa fa-trash-o"></div> &nbsp;&nbsp;Remove</a></li></ul></div></td> </tr>';
                    }


                }


                if (partialRegListarrayLength > 0) {

                    for (var i = 0; i < partialRegListarrayLength; i++) {
                        var cur = partialRegList[i];
                        loadUsers.innerHTML = loadUsers.innerHTML + '<tr><td>' + cur.userName + '</td><td>' + cur.primaryMobileNumber + '</td><td>' + cur.primaryEmailId + '</td> <td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="approveUser(' + i + ')"><div class="fa fa-check"></div> &nbsp;&nbsp;Approve</a></li><li><a href="#" onclick="rejectUser(' + i + ')"><div class="fa fa-times"></div> &nbsp;&nbsp;Reject</a></li><li class="divider"></li><li ><a href="#" onclick="viewProfile(' + i + ')"> <div class="fa fa-user"></div> &nbsp;&nbsp;View Profile</a></li></ul></div></td> </tr>';
                    }


                }




            }

        }

    });

}




$(document).ready(function() {

    $("#usr_form").submit(function() {

        var role = $('#role').val();
        //alert(role);

        var privs = new Array();
        var privilageList = {
            privilageList: []
        };


        $("input:checkbox[name=privilage]:checked").each(function() {
            privs.push($(this).val());
            privilageList.privilageList.push($(this).val());
        });

        //alert(JSON.stringify(privilageList));

        //alert(localStorage.getItem("approveUsername"));



        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {


            this.timer = setTimeout(function() {


                $.ajax({
                    url: webServerUrl,
                    data: 'request=confirmReg&acceptOrReject=true&userName=' + localStorage.getItem("approveUsername") + '&privJson=' + JSON.stringify(privilageList) + '&role=' + role,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;


                        var loadUsers = document.getElementById("loadUsers");
                        loadUsers.innerHTML = "";

                        if (resultCode == 1) {

                            $('#approve_user').modal('hide');


                            partialRegList = obj.response.detailsList.partialRegList;
                            var partialRegListarrayLength = obj.response.detailsList.partialRegList.length;

                            if (partialRegListarrayLength > 0) {

                                for (var i = 0; i < partialRegListarrayLength; i++) {
                                    var cur = partialRegList[i];
                                    loadUsers.innerHTML = loadUsers.innerHTML + '<tr><td>' + cur.userName + '</td><td>' + cur.primaryMobileNumber + '</td><td>' + cur.primaryEmailId + '</td> <td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="approveUser(' + i + ')"><div class="fa fa-check"></div> &nbsp;&nbsp;Approve</a></li><li><a href="#" onclick="rejectUser(' + i + ')"><div class="fa fa-times"></div> &nbsp;&nbsp;Reject</a></li><li class="divider"></li><li ><a href="#"  onclick="viewProfile(' + i + ')"> <div class="fa fa-user"></div> &nbsp;&nbsp;View Profile</a></li></ul></div></td> </tr>';
                                }


                            }




                        } else {
                            $("#msgbox").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });




    $("#role_frm").submit(function() {

        var rname = $('#rname').val();
        var rdesc = $('#rdesc').val();


        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {


            this.timer = setTimeout(function() {

                $("#role_msg").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);

                $.ajax({
                    url: webServerUrl,
                    data: 'request=addNewRole&rname=' + rname + '&rdesc=' + rdesc,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#role_msg").fadeTo(200, 0.1, function() {
                                $(this).html("Role Successfully Added..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-role').modal('hide');
                                $("#role_msg").removeClass().addClass('myinfo').css("color", "none").text('');

                            }, 2000);



                            document.getElementById('rname').value = '';
                            document.getElementById('rdesc').value = '';
                            loadDetails();




                        } else {
                            $("#role_msg").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }

    });




    $("#loc_frm").submit(function() {

        var lname = $('#lname').val();
        var ldesc = $('#ldesc').val();

        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {

                $("#loc_msg").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);


                $.ajax({
                    url: webServerUrl,
                    data: 'request=addNewLocation&lname=' + lname + '&ldesc=' + ldesc,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#loc_msg").fadeTo(200, 0.1, function() {
                                $(this).html("Location Successfully Added..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-location').modal('hide');
                                $("#loc_msg").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);


                            document.getElementById('lname').value = '';
                            document.getElementById('ldesc').value = '';
                            loadDetails();




                        } else {
                            $("#loc_msg").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });




    $("#type_frm").submit(function() {

        var tname = $('#tname').val();
        var tdesc = $('#tdesc').val();

        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {


                $("#type_msg").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);



                $.ajax({
                    url: webServerUrl,
                    data: 'request=addNewCaseType&tname=' + tname + '&tdesc=' + tdesc,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#type_msg").fadeTo(200, 0.1, function() {
                                $(this).html("Case Type Successfully Added..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-types').modal('hide');
                                $("#type_msg").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            document.getElementById('tname').value = '';
                            document.getElementById('tdesc').value = '';
                            loadDetails();




                        } else {
                            $("#type_msg").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });




    $("#status_frm").submit(function() {

        var sname = $('#sname').val();
        var sdesc = $('#sdesc').val();

        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {


                $("#status_msg").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);


                $.ajax({
                    url: webServerUrl,
                    data: 'request=addNewCaseStatus&sname=' + sname + '&sdesc=' + sdesc,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#status_msg").fadeTo(200, 0.1, function() {
                                $(this).html("Case Status Successfully Added..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-status').modal('hide');
                                $("#status_msg").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            document.getElementById('sname').value = '';
                            document.getElementById('sdesc').value = '';
                            loadDetails();




                        } else {
                            $("#status_msg").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });



    $("#court_frm").submit(function() {

        var cname = $('#cname').val();
        var cdesc = $('#cdesc').val();
        var location = $('#locationDrop').val();



        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {


                $("#court_msg").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);


                $.ajax({
                    url: webServerUrl,
                    data: 'request=addNewCourt&cname=' + cname + '&cdesc=' + cdesc + '&location=' + location,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#court_msg").fadeTo(200, 0.1, function() {
                                $(this).html("Court Successfully Added..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-court').modal('hide');
                                $("#court_msg").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            document.getElementById('cname').value = '';
                            document.getElementById('cdesc').value = '';
                            loadDetails();




                        } else {
                            $("#court_msg").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });




    $("#priv_frm").submit(function() {

        var pname = $('#pname').val();


        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {


                $("#priv_msg").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);


                $.ajax({
                    url: webServerUrl,
                    data: 'request=addNewPrivilege&pname=' + pname,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {

                            $("#priv_msg").fadeTo(200, 0.1, function() {
                                $(this).html("Privilege Successfully Added..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-privilage').modal('hide');
                                $("#priv_msg").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            document.getElementById('pname').value = '';
                            loadDetails();




                        } else {
                            $("#priv_msg").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });


    /*Edit*/


    $("#role_frm_edit").submit(function() {

        var rname = $('#rname_edit').val();
        var rdesc = $('#rdesc_edit').val();
        var rid = $('#rid').val();


        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {


            this.timer = setTimeout(function() {

                $("#role_msg_edit").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);

                $.ajax({
                    url: webServerUrl,
                    data: 'request=updateRole&rname=' + rname + '&rdesc=' + rdesc + '&rid=' + rid,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#role_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html("Role Successfully Updated..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-role-edit').modal('hide');
                                $("#role_msg").removeClass().addClass('myinfo').css("color", "none").text('');

                            }, 2000);

                            loadDetails();

                        } else {
                            $("#role_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }

    });




    $("#loc_frm_edit").submit(function() {

        var lname = $('#lname_edit').val();
        var ldesc = $('#ldesc_edit').val();
        var lid = $('#lid').val();

        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {

                $("#loc_msg_edit").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);


                $.ajax({
                    url: webServerUrl,
                    data: 'request=updateLocation&lname=' + lname + '&ldesc=' + ldesc + '&lid=' + lid,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#loc_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html("Location Successfully Updated..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-location-edit').modal('hide');
                                $("#loc_msg_edit").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            loadDetails();

                        } else {
                            $("#loc_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });




    $("#type_frm_edit").submit(function() {

        var tname = $('#tname_edit').val();
        var tdesc = $('#tdesc_edit').val();
        var tid = $('#tid').val();

        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {


                $("#type_msg_edit").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);



                $.ajax({
                    url: webServerUrl,
                    data: 'request=updateCaseType&tname=' + tname + '&tdesc=' + tdesc + '&tid=' + tid,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#type_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html("Case Type Successfully Updated..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-types-edit').modal('hide');
                                $("#type_msg_edit").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            loadDetails();

                        } else {
                            $("#type_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });




    $("#status_frm_edit").submit(function() {

        var sname = $('#sname_edit').val();
        var sdesc = $('#sdesc_edit').val();
        var sid = $('#sid').val();

        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {


                $("#status_msg_edit").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);


                $.ajax({
                    url: webServerUrl,
                    data: 'request=updateCaseStatus&sname=' + sname + '&sdesc=' + sdesc + '&sid=' + sid,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#status_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html("Case Status Successfully Updated..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-status-edit').modal('hide');
                                $("#status_msg_edit").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            loadDetails();

                        } else {
                            $("#status_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });



    $("#court_frm_edit").submit(function() {

        var cname = $('#cname_edit').val();
        var cdesc = $('#cdesc_edit').val();
        var location = $('#locationDrop_edit').val();
        var cid = $('#cid').val();

        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {


                $("#court_msg_edit").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);


                $.ajax({
                    url: webServerUrl,
                    data: 'request=updateCourt&cname=' + cname + '&cdesc=' + cdesc + '&location=' + location + '&cid=' + cid,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {


                            $("#court_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html("Court Successfully Updated..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-court-edit').modal('hide');
                                $("#court_msg_edit").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            loadDetails();


                        } else {
                            $("#court_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });




    $("#priv_frm_edit").submit(function() {

        var pname = $('#pname_edit').val();
        var pid = $('#pid').val();


        var form = $(this);
        form.parsley().validate();
        if (form.parsley().isValid()) {

            this.timer = setTimeout(function() {


                $("#priv_msg_edit").removeClass().addClass('myinfo').text('Validating Your Input..').fadeIn(1000);


                $.ajax({
                    url: webServerUrl,
                    data: 'request=updatePrivilege&pname=' + pname + '&pid=' + pid,
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();
                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;




                        if (resultCode == 1) {

                            $("#priv_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html("Privilege Successfully Updated..").css("color", "#005C00").removeClass().addClass('myerror').fadeTo(900, 1);
                            });

                            setTimeout(function() {

                                $('#add-privilage-edit').modal('hide');
                                $("#priv_msg_edit").removeClass().addClass('myinfo').css("color", "none").text('');


                            }, 2000);

                            loadDetails();

                        } else {
                            $("#priv_msg_edit").fadeTo(200, 0.1, function() {
                                $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900, 1);
                            });

                        }
                    }

                });
            }, 200);
            return false;
        }
    });


    /*Edit Ends*/




});


function approveUser(index) {

    var cur = partialRegList[index];
    $('#approve_user').modal('show');

    var usernamePanel = document.getElementById("usernamePanel");
    usernamePanel.innerHTML = ' <b>' + cur.userName + '</b>';


    localStorage.setItem("approveUsername", cur.userName);

    var role = document.getElementById("role");
    var privlagesCheck = document.getElementById("privlagesCheck");

    if (roleListarrayLength > 0) {

        for (var i = 0; i < roleListarrayLength; i++) {
            var cur = roleList[i];
            role.innerHTML = role.innerHTML + '<option  value="' + cur.roleId + '">' + cur.roleName + '</option> ';
        }


    }


    if (privilegeListarrayLength > 0) {

        for (var i = 0; i < privilegeListarrayLength; i++) {
            var cur = privilegeList[i];
            privlagesCheck.innerHTML = privlagesCheck.innerHTML + '<input  type="checkbox" name="privilage" value="' + cur.privilegeId + '" data-required="true">  ' + cur.privilege + '<br>';
        }


    }



    $('#approve_user').modal('show');

}

function rejectUser(index) {

    var cur = partialRegList[index];
    $.ajax({
        url: webServerUrl,
        data: 'request=confirmReg&acceptOrReject=false&userName=' + cur.userName,
        type: 'post',
        success: function(msg) {

            var loginJson = msg.trim();

            obj = JSON.parse(loginJson);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;


            if (resultCode == 1) {


                $.ajax({
                    url: webServerUrl,
                    data: 'request=getAllDetails',
                    type: 'post',
                    success: function(msg) {

                        var loginJson = msg.trim();

                        obj = JSON.parse(loginJson);
                        var resultCode = obj.response.resultcode;
                        var message = obj.response.message;

                        var loadUsers = document.getElementById("loadUsers");
                        loadUsers.innerHTML = "";


                        if (resultCode == 1) {



                            partialRegList = obj.response.detailsList.partialRegList;
                            var partialRegListarrayLength = obj.response.detailsList.partialRegList.length;




                            if (partialRegListarrayLength > 0) {

                                for (var i = 0; i < partialRegListarrayLength; i++) {
                                    var cur = partialRegList[i];
                                    loadUsers.innerHTML = loadUsers.innerHTML + '<tr><td>' + cur.userName + '</td><td>' + cur.primaryMobileNumber + '</td><td>' + cur.primaryEmailId + '</td> <td class="text-right"><div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i></a><ul class="dropdown-menu pull-right"><li ><a href="#" onclick="approveUser(' + i + ')"><div class="fa fa-check"></div> &nbsp;&nbsp;Approve</a></li><li><a href="#" onclick="rejectUser(' + i + ')"><div class="fa fa-times"></div> &nbsp;&nbsp;Reject</a></li><li class="divider"></li><li ><a href="#"  onclick="viewProfile(' + i + ')"> <div class="fa fa-user"></div> &nbsp;&nbsp;View Profile</a></li></ul></div></td> </tr>';
                                }


                            }




                        }

                    }

                });


            }

        }

    });

}



function viewProfile(index) {

    var cur = partialRegList[index];

    var firstName = cur.firstName;
    var middleName = cur.userName;
    var lastName = cur.lastName;

    var fullName = firstName + ' ' + lastName;

    var primaryMobileNo = cur.primaryMobileNumber;
    var primaryEmailId = cur.primaryEmailId;

    var mainPanel = document.getElementById("mainPanel");
    mainPanel.innerHTML = '<div class="h4 m-t m-b-xs font-bold text-lt">' + fullName + '</div> <small class="text-muted m-b">Username : ' + middleName + '</small>';

    var mainPic = document.getElementById("mainPic");
    mainPic.innerHTML = '<img src="images/default_pic.jpg" class="dker"> ';


    var communicationPanel = document.getElementById("communicationPanel");
    communicationPanel.innerHTML = '<div class="row m-b"><div class="col-xs-6 text-right"><small>Primary Mobile Number</small> <div class="text-lt font-bold">' + primaryMobileNo + '</div>  </div> <div class="col-xs-6"><small>Primary Email Address</small> <div class="text-lt font-bold">' + primaryEmailId + '</div></div></div>';


    $('#user_profile').modal('show');

}