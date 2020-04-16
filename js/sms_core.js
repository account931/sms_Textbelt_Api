$(document).ready(function(){ 
	
 
//Allow only 120 chars for sms
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#smsText').keydown(function(){  //$('#smsText').bind('input', function(){
		var limit = 120;
		
		
		
		//prohibit typing more than var limut (i.e 120)
		if(this.value.length >= limit){
			return false;
		}
		
		//display how many chars left
        $('#leftSmsCharsLimit').html("left letters:" + (limit - this.value.length));
    });

//
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************






 
//Button to check quota
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#checkQuota').click(function() { 
	    //show loader on button
	    $('#checkQuota').html("<img src='images/loader2.gif'/>"); 
		
		$.ajax({
            url: 'https://textbelt.com/quota/textbelt',
            type: 'GET',
			dataType: 'JSON', // without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    //serverCity:window.cityX
			},
            success: function(data) {
                // do something;
			    //alert(data.quotaRemaining);
				if (data.quotaRemaining > 0){
					$('#checkQuota').css('background-color','#10e649'); //green
					$('#checkQuota').stop().fadeOut(900,function() { $('#checkQuota').html('Quota:' + data.quotaRemaining)}).fadeIn(900);
				} else if((data.quotaRemaining <= 0)) {
					$('#checkQuota').css('background-color','red');
					$('#checkQuota').stop().fadeOut(900,function() { $('#checkQuota').html('Quota:' + data.quotaRemaining)}).fadeIn(900);
				}
            },  //end success
			error: function (error) {
				alert("failed");
            }	
        });
                                               
       //  END AJAXed  part 
		
    });

//
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************



	
	
	 
//Run ajax to check SMS delivery status
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#checSmsDeliveryStatus').click(function() { 
	    var smsID = $("#checSmsDeliveryStatus").attr("data-sms"); //gets data-attr of clicked button "Check sms status"
	    alert(smsID);
		
		$.ajax({
            url: 'https://textbelt.com/status/' + smsID,
            type: 'GET',
			dataType: 'JSON', // without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    //serverCity:window.cityX
			},
            success: function(data) {
                // do something;
			    //alert(data.quotaRemaining);
				if (data.status == 'DELIVERED'){
					$('#deliveyStatus').css('background-color','#10e649'); //green
					$('#deliveyStatus').stop().fadeOut(900,function() { $('#deliveyStatus').html('Sms is ' + data.status)}).fadeIn(900);
				} else {
					$('#deliveyStatus').css('background-color','red');
					$('#deliveyStatus').stop().fadeOut(900,function() { $('#deliveyStatus').html('Sms is ' + data.status)}).fadeIn(900);
				}
            },  //end success
			error: function (error) {
				alert("failed");
            }	
        });
                                               
       //  END AJAXed  part 
		
    });

//
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
	
   
	
	
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#clear').click(function() { 
	    $('#cellID').val('');
		$('#smsText').val('');
	 });
	
});
// end ready



