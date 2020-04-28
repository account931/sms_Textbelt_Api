<?php

namespace MySmsTetxBelt\Classes;



class CheckQuota 
{
    public function checkTodayQuota()
    {
              $ch = curl_init('https://textbelt.com/quota/textbelt');// . SMS_API_KEY);
               
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
			  
			  
			  return $messageAnswer['quotaRemaining'];
		
    }
	 
}

