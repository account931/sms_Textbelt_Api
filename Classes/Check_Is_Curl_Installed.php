<?php

namespace MySmsTetxBelt\Classes;



class Check_Is_Curl_Installed 
{
	
    // Check if cUrl is installed
     public function _is_curl_installed() 
	 {
         if  (in_array  ('curl', get_loaded_extensions())) {
			 echo '<p class="padding-x"> cUrl is installed </p>';
             return true;
         } else {
			 echo '<p class="sms-fail"> cUrl is not installed </p>';
             return false;
         }
      }

}