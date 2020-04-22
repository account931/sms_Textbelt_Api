<?php
//middleware for ajax to get sms delivery status, sends cUrl request to my php Class, 
//can't connect directly to {'https://textbelt.com/status/' + smsID } because of CORS{ajax-request-being-block-because-cross-origin}

require_once '../CheckSmsDeliveryStat.php';
//require_once '../../Credentials/credentials.php';


if(isset( $_POST['serverSmsID'] )) {
     $check = new MySmsTetxBelt\CheckSmsDeliveryStat();
	 $result = $check->checkSmsStatus($_POST['serverSmsID']);
     $arrayResult = array('status' => $result );
	 echo json_encode($arrayResult);
}


?>