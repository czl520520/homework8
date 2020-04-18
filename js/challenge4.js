$(document).ready(function(){
    $('#challenge4_form').submit(function(e){
        var name = $("#name")
		var address = $("#addr")
		var validInput = true;


    if (address.val()==""){
        $("#addrerrormsg").css("display","block"); 
        validInput = false;
    }
    else {
        $("#addrerrormsg").css("display","none"); 
	}
	if (name.val()==""){
        $("#nameerrormsg").css("display","block"); 
        validInput = false;
    }
    else {
        $("#nameerrormsg").css("display","none");
    }

    return validInput;
	});
});
