$(document).ready(function(){ 
	
    var limitLatin = 120; //limit for chars in sms
	var limitCyrill = 70;
	
	runAjaxToGetRemainingQuota();
	
	
	
 
//on key down count and html() number of printed chars
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#smsText').keydown(function(){  //$('#smsText').bind('input', function(){ //keydown
		var limit = limitLatin; //120;
		
		//display how many chars left
        $('#leftSmsCharsLimit').html("left letters:" + (limit - this.value.length));
    });

//
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





 
//on key up Allow only 120 chars for sms and prohibit typing more
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#smsText').keyup(function(){  //$('#smsText').bind('input', function(){ //keydown
		var limit = limitLatin; //120;
		
		
		//prohibit typing more than var limut (i.e 120)
		if(this.value.length >= limit ){  //8=Backspace; 46=Delete
		    alert(this.value.length);
			var $this = $(this);
			$this.val($this.val().substring(0, limit)); 
			//return false;
		   
		}
		
		
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
	    runAjaxToGetRemainingQuota();
		
    });

//
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

   function runAjaxToGetRemainingQuota(){
	    //show loader on button
	    $('#checkQuota').html("<img src='images/loader2.gif'/>"); 
		
		$.ajax({
            url: 'Classes/ajax/getQuota.php',//my ajax url //'https://textbelt.com/quota/textbelt',
            type: 'GET',
			dataType: 'JSON', // without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    //serverCity:window.cityX
			},
            success: function(data) {
                // do something;
			    //alert(data.quotaRemaining);
				if (data.quotaRemaining > 0){ //(data.quotaRemaining > 0){
					$('#checkQuota').css('background-color','#10e649'); //green
					$('#checkQuota').stop().fadeOut(900,function() { $('#checkQuota').html('Quota:' + data.quotaRemaining)}).fadeIn(900);
				} else if((data <= 0)) {  //else if((data.quotaRemaining <= 0))
					$('#checkQuota').css('background-color','red');
					$('#checkQuota').stop().fadeOut(900,function() { $('#checkQuota').html('Quota:' + data.quotaRemaining)}).fadeIn(900);
				}
            },  //end success
			error: function (error) {
				alert("failed");
            }	
        });
                                               
       //  END AJAXed  part 
		
   }
	
	
	 
	 
	 
//Run ajax to check SMS delivery status
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#checSmsDeliveryStatus').click(function() { 
	    var smsID = $("#checSmsDeliveryStatus").attr("data-sms"); //gets data-attr of clicked button "Check sms status"
	    alert(smsID);
		
		$.ajax({
            url: 'http://textbelt.com/status/' + smsID, //'https://textbelt.com/status/'
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
				alert(JSON.stringify(error, null, 4));
            }	
        });
                                               
       //  END AJAXed  part 
		
    });

//
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
	
   
	
//Button to clear fields
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#clear').click(function() { 
	    $('#cellID').val('');
		$('#smsText').val('');
	 });
	 
	 
	 
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#smsText').on('paste', function (e) { 
	    e.preventDefault(); //must-have to work without errors
		var pastedData = e.originalEvent.clipboardData.getData('text'); //gets the paste content
		//alert(pastedData );
		
	    var resultTruncate = cropTextProcessor( $('#smsText'), pastedData, limitLatin);
	    $('#smsText').val(resultTruncate);
		
		if($('#smsText').val().length >/*=*/ limitLatin ){  //8=Backspace; 46=Delete
		alert("kkk " + $('#smsText').val().length);
			$('#smsText').val( $('#smsText').val().substring(0, limitLatin)); 
		}  
		
	});




	 
	 
	 //function to cut/truncate text to certain length + "..."
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function cropTextProcessor(selector, pastedText, maxLength) {
    //var element = document.querySelector(selector),
        var truncated = selector.val(); //gets the input of sms textarea(if any)
		truncated+= pastedText; //concatenate the input of sms textarea(if any) + paste content
		//console.log(truncated);

    if (truncated.length >= maxLength) {
        truncated = truncated.substr(0, maxLength); // + '!';
    }
	console.log(truncated);
    return truncated;
   }
   //Usage
  //var 1 =   document.querySelector('p').innerText = truncateText('p', 107);
  //var 2 =   cropTextProcessor( $(".text-truncated")[i], 407)
  
  
  
  
  
  
  
  
  
	
});
// end ready



