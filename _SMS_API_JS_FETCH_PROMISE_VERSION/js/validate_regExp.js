$(document).ready(function(){ 
	
//Uses RegExp for cell number field while user is typing the number. Used 2 dynamically selected RegExp. 
//Addintionally, cell number RegExp is done in js/sms_core.js on form submitting {$("#formX").submit(function(e){}
	
	//RegExp for Front-end checking the city input===================================
    //var RegExp_Phone = /^[a-zA-Z\-\s,]+$/;//->{engLetters, - ,blankSpace, comma} //may contain only English chars;   //  /^[a-zA-Z0-9_-]{1,16}\.(gif|jpg|mp3)$/;   //only english letter or ints,(-_) name length (1-16), ends in(.(gif|jpg|mp3)   //was  /^[a-zA-Z]{1,16}$/;
    var RegExp_Phone_UA = /^[+]380[\d]{2}[0-9]{7}$/; //phone number regExp for Ukraine //must have strict +380 & 9 digits ///^[+]380[\d]{1,4}[0-9]+$/;
	var RegExp_Phone = /^[+][\d]{8,9}[0-9]+$/; //phone number regExp for world wide

// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 


//$(document).on("change", '.checkRegExp', function(e) {  //must have {e} to detect event //newly generated
$("#cellID").on('input', function(e) {   //input'
    if( $("#cellID").val().match(/^\+380/)){  //if it is ua number use RegExp for ua numbers
	    var regExpp = RegExp_Phone_UA; 
		var messageError = ' incomplete UA number';
		var messageOK = "UA";
	} else {
		var regExpp = RegExp_Phone; 
		var messageError = ' incomplete EU number';
		var messageOK = "EU";
	}
      myValidate($(this), this.id, regExpp, 'btnSendSms', messageError, messageOK, e);   //{e} new must have arg, otherwise not visible
});

//End  OnChange-------
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************








//Function that Validates inputs on change (confirm delete 2nd arg (id)?????).
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
function myValidate(thisX, id, regExp, butttonToDisable,  messageErr, messageSuccess, e)  //{e} -. it is change event from {$(document).on("change", '.fileCheck', function(e) { }
//args($this, $this.id, RegExp, button to disable, error message to show, event)
{

     //if (e.target.files[0].name !=='')
     if ($("#" +id).val()!==''){
		
		
		//var fileName = e.target.files[0].name;  //gets the input file name
		//alert(fileName);
		
        //alert (id);
		//gets the input
        var idm = $("#" +id).val();   //alert('val is-> '+idm);    //$('input[type=file]').val()

        //if  REgEXp  match
        if (idm/*fileName*/.match(regExp)){ //alert('OK');
		     console.log(thisX.parent().siblings().find('.sp')); //$(this).parent().parent().siblings().find('.price-x')
            $('.sp').html('<span style="color:green;">correct ' + messageSuccess + ' phone</span>');//thisX.prevAll(".sp:first").html('Correct');// erase  error  message //$("#" +id).prevAll(".sp:first").html('Correct');// erase  error  message
            $("#" + butttonToDisable)/*$(':input[type="submit"]')*/.prop('disabled', false); //enable  button  //$(':input[type="button"]').prop('disabled', false);
            $("#" + butttonToDisable).html('OK');
                      
         } else {  //if RegExp does not  match
		
             $('.sp').html('<span style="color:red;">' + messageErr + '</span>');//thisX.prevAll(".sp").html(messageErr);   //$("#" +id).prevAll(".sp:first").html(messageErr);   //finds the 1st prev span
             $("#" + butttonToDisable)/*$(':input[type="submit"]')*/.prop('disabled', true);
             $("#" + butttonToDisable).html/*val*/('Disabled');
         }
     //  end if ($("#" +id).val()!==''){
   
     } else {//if  the input is empty, set no  error to span
         thisX.prevAll(".sp:first").html('');
		 $("#" + butttonToDisable).prop('disabled', false);
         $("#" + butttonToDisable).html('OK');   
     } 
}
  
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
//
	
	
	
   
	
});
// end ready



