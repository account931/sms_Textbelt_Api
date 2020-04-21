<?php

namespace MySmsTetxBelt;



class SendSms 
{
    public function sendingSms($phoneNumber, $sms_text)
    {
		$ch = curl_init('https://textbelt.com/text');
                $data = array(
                    'phone' =>   $_POST['phone_number'], //'+380976641342',
                    'message' => $_POST['sms_text'], //'Hello. Eng version. Русская версия',
                    'key' => SMS_API_KEY, //'textbelt',
                 );

               curl_setopt($ch, CURLOPT_POST, 1);
               curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
               curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

               $response = curl_exec($ch);
		       $err = curl_error($ch);
               curl_close($ch);
		
	          
	          //info if any curl error happened
		      if ($err) {
                  //echo "cURL Error #:" . $err;
			      $errorX = $err; //'<p class="bg-warning">Sms not sent.</p>' . $err;
              } else {
                  //echo "<p> FEATURE STATUS=></p><p>Below is response from API-></p>";
                  //echo $response;
		          $errorX = "No error detected";
              }
		
		      $messageAnswer = json_decode($response, TRUE); //gets the cUrl response and decode to normal array
		
		      //echo $messageAnswer;
		      if($messageAnswer['success']){
				  $status = '<p class="sms-success">Sms was sent successfully.</p>';
				  $status = $status . 
				      '<button id="checSmsDeliveryStatus" class="btn check-sms-delivery" data-sms="'. $messageAnswer['textId'] .'">Check sms status.</button>' . //button to check send delivery of sent sms
					  '<p id="deliveyStatus"></p>';  // <p> to show Delivery result
					  
				  $status = $status . " " . $messageAnswer['success'];
		    } else {
			      $status = '<p class="sms-fail">Sms not sent.</p>';
		    }
		
	        if(isset($messageAnswer['error'])){
	            $errMsg = $messageAnswer['error']; //gets the array element "message", it exists only if UUID is unique, i.e "message":"Feature does not exist", if Feature exists, 'message' does not exist
	        } else {
			    $errMsg = "No errors";
		    }
        
		    //convert array to string
		    $allMsg = str_replace('=', ':', http_build_query($messageAnswer, null, ','));
		
		    $text = $status . " Error: " .  $errMsg . " Err: " . $errorX ." Response=> " . $allMsg;
			return $text;
		
       
    }

}