$(document).ready(function(){ 
	
 
//Allow only 120 chars for sms
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#smsText').keypress(function() {
		var limit = 120;
		
		//display how many chars left
        $('#leftSmsCharsLimit').html("left letters:" + (limit - this.value.length));
		
		//prohibit typing more than var limut (i.e 120)
		if(this.value.length == limit){
			return false;
		}
    });

//
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************







	
	
   
	
});
// end ready



