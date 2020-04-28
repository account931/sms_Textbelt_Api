<?php
//middleware Class for ajax to get sms delivery status, used from ajax/getSmsDeliveryStatus.php <- js/sms_core.js
//can't connect directly to {'https://textbelt.com/status/' + smsID } because of CORS {ajax-request-being-block-because-cross-origin}


namespace MySmsTetxBelt\Classes;



class CheckSmsDeliveryStat 
{
	
    public function checkSmsStatus($smsID)
    {
              $ch = curl_init('https://textbelt.com/status/' . $smsID);
               
               //curl_setopt($ch, CURLOPT_POST, 1);
               //curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
               curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //return result

               $response = curl_exec($ch);
		       $err = curl_error($ch);
               curl_close($ch);
			   
			    //info if any curl error happened
		      /*if ($err) { 
			      echo "error";
			  }*/
			   
			   $messageAnswer = json_decode($response, TRUE); //gets the cUrl response and decode to normal array
		
		     /* if($messageAnswer['quotaRemaining'] > 0){
		          echo "<span class='green'> Quota: " . $messageAnswer['quotaRemaining']. "</span>";
			  } else {
				  echo "<span class='red'> Quota: " . $messageAnswer['quotaRemaining']. "</span>";
			  }*/
			  
			  
			  return $messageAnswer['status'];
		
    }
	 
}

