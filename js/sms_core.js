$(document).ready(function(){ 
	
    var limitLatin = 120; //limit for chars in sms
	var limitCyrill = 70;
	var RegExp_Phone = /^[+][\d]{8,9}[0-9]+$/; //phone number regExp for world wide
	
	runAjaxToGetRemainingQuota();
	
	
	
	
//Check before php form submitting if fields()phone number/sms text are OK, if not OK - stop submitting
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $("#formX").submit(function(e){
		//if sms text is empty
		if( $('#smsText').val() == ""){
            swal("Stop!", "No sms text to send", "warning");
            e.preventDefault(e); //stop submitting
		}
		
		//if cell number is incorrect, uses RegExp. Additionally RegExp checking is used on cell number keypress (js/validate_regExp.js)
		if( !$("#cellID").val().match(RegExp_Phone)){
            swal("Stop!", "Phone number incorrect", "warning");
            e.preventDefault(e); //stop submitting
		}
    });

//
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************



 
//on key down count and html() number of printed chars
//this functionality is dublicated in {$('#smsText').keyup(function(){ }} otherwise {if(ifCyrillic())} here will fire on seconf russian letter only
//but we need this Dublicate in {$('#smsTextR').keydown(} as it keeps counting if u hold 1 letter and type it non-stop
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#smsTextR').keydown(function(){  //$('#smsText').bind('input', function(){ //keydown
	    if(ifCyrillic()){
			var limit = limitCyrill; //70;
		} else {
		    var limit = limitLatin; //120;
		}
		
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
	    //Dublicate functionality of {$('#smsTextR').keydown(function(){}} as it will fire on seconf russian letter only. And here it fires at once
		if(ifCyrillic()){
			var limit = limitCyrill; //70;
		} else {
		    var limit = limitLatin; //120;
		}
		
		//display how many chars left
        $('#leftSmsCharsLimit').html("left letters:" + (limit - this.value.length));
		//END Dublicate
		
		//var limit = limitLatin; //120;
		
		
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
	    //alert(smsID);
		
		$.ajax({
		url: 'Classes/ajax/getSmsDeliveryStatus.php', // can't connect directly to {'https://textbelt.com/status/' + smsID } because of CORS{ajax-request-being-block-because-cross-origin}
            type: 'POST',
			dataType: 'JSON', // without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    serverSmsID: smsID //passing ID of sent sms
			},
            success: function(data) {
                // do something;
			    //alert(data.status);
				if (data.status == 'DELIVERED'){
					$('#deliveyStatus').css('background-color','#10e649'); //green
					$('#deliveyStatus').stop().fadeOut(900,function() { $('#deliveyStatus').html('Sms is ' + data.status)}).fadeIn(900);
				} else {
					$('#deliveyStatus').css('background-color','red');
					$('#deliveyStatus').stop().fadeOut(900,function() { $('#deliveyStatus').html('Sms status is ' + data.status)}).fadeIn(900);
				}
            },  //end success
			error: function (error) {
				alert("failed => (Reason: CORS request failed)");
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
		$('#leftSmsCharsLimit').html("left letters: " + limitLatin);
	 });
	 
	 

//Paste text from clipboard	 
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

    $('#smsText').on('paste', function (e) { 
	    
		var pastedData = e.originalEvent.clipboardData.getData('text'); //gets the paste content
		//alert(pastedData );
		e.preventDefault(); //must-have to work without errors
		
		//if current sms text in textarea or clipboard text contains russian
		if(ifCyrillic() || pastedData.match(/[а-яА-ЯЁё]/)){ //
			var limit = limitCyrill; //70;
		} else {
		    var limit = limitLatin; //120;
		}
		
		//
		
	    var resultTruncate = cropTextProcessor( $('#smsText'), pastedData, limit);
	    $('#smsText').val(resultTruncate);
		
		//should not fire ever???
		if($('#smsText').val().length >/*=*/ limit ){  //8=Backspace; 46=Delete
		    alert("kkk " + $('#smsText').val().length);
			$('#smsText').val( $('#smsText').val().substring(0, limit)); 
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
		
    //if sms text is longer than 160 or 70 chars
    if (truncated.length >= maxLength) {
        truncated = truncated.substr(0, maxLength); // + '!';
		//$('#leftSmsCharsLimit').html("left letters: 0");
    }
	console.log(truncated);
    return truncated;
   }
   //Usage
  //var 1 =   document.querySelector('p').innerText = truncateText('p', 107);
  //var 2 =   cropTextProcessor( $(".text-truncated")[i], 407)
  
  
  
  
  
 
//function to check if sms text contain Cyrillic or pure Latin font
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 
	function ifCyrillic() { 
       var ruText = /[а-яА-ЯЁё]/;	
	   if( $('#smsText').val().match(ruText)){  //alert('ru');
	       return true;
	   } else {
		   return false;
	   
        }
	}
  
  
  
	
});
// end ready



