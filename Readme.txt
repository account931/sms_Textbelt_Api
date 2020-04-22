#This is a non-Yii2 Textbelt Sms Api version. 
#This non-Yii2 version is designed in order to distribute it over multible 000webhost accounts, as 000webhost works with cURL and zzz.com.ua does not.

#Lists of Sms endpoints:
   1. http://dimmm931.000webhostapp.com/sms/  (same host Yii2 version() => http://dimmm931.000webhostapp.com/yii2_rest/web/sms-api/index)
   2. http://account9311.000webhostapp.com/sms/
   3. http://leonidex931.000webhostapp.com/sms/
   

Sms application functionality =>
#phone number autocomplete
#check phone number with UA regExp if it starts with +380, else for EU regExp
#counts and trim sms text up to 120(for latin text) or 60(for russian text) chars on keydown and on paste.
#prevent php form submitting if sms text is empty or cell number does not fit regExp(via js/sms_core.js)
#check sms delivery status via own middleware {Classes/ajax/getSmsStatus.php}, which uses {Classes/CheckSmsDeliveyStat.php}. 
Can not apply directly to endpoint https://textbelt.com/status/smsId} because of Cors cross origin. 
Id of sms is assigned by php in Classes/SendSms.php {to data-sms=""} and extracted by JS while sending ajax.