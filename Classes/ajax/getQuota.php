<?php

require_once '../CheckQuota.php';
require_once '../../Credentials/credentials.php';

//if(isset( $_POST['invoiceno'] )) {
     $check = new MySmsTetxBelt\CheckQuota();
	 $result = $check->checkTodayQuota();
     $arrayResult = array('quotaRemaining' => $result );
	 echo json_encode($arrayResult);
//}


?>