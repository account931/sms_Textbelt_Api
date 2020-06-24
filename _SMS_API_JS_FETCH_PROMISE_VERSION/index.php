<!doctype html>
<!--------------------------------Bootstrap  Main variant ------------------------------------------>
  <html lang="en-US">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="Send sms" />
      <meta name="keywords" content="sms, sms api">
      <title>Sms Api-> Fetch</title>
  
      <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
	  

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	 
	  
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


      <link rel="stylesheet" type="text/css" media="all" href="css/myCssApi.css">
      <script src="js/sms_core.js"></script><!--  Core Css Api JS-->
	 

	  <script src="js/changeStyleTheme.js"></script><!-- change wallpapers,changeStyleTheme JS-->
	  <script src="js/validate_regExp.js"></script><!-- Input RegExp Validation JS -->
	  
	  <script src="js/autocomplete.js"></script><!--  Core Css Api JS-->
	  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> <!-- City Input autocomplete JS UI, autocomplete won't work without it -->
	  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"> <!-- City Input autocomplete CSS UI, autocomplete won't work without it -->
	  
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script> <!-- Sweet Alert JS -->
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css"> <!--  Sweet Alert CSS -->
	  
	  <meta name="viewport" content="width=device-width" />

     </head>
	 
     <body>
	   
       <div id="headX" class=" text-center myShadow colorAnimate change-head-style" style ='background-color:lavender;padding:10px;'> <!--#2ba6cb;--> <!--.change-head-style sets bg image, .colorAnimate sets animation-->
	   
         <h1 id="h1Text">
		     <i class="fa fa-envelope-o" style="font-size:36px"></i>
             <!--<img id ="wLogo" class="shrink-large" src="images/weather2.png"/>-->	 
		     <span id="textChange" class="textShadow"> Send Sms via fetch() promise</span> 
		     <!--</span> <img src="http://78.media.tumblr.com/tumblr_m2hq5tt3ma1qav3uso1_400.gif" style="width:3%"/>--> 
			 <!--<img id ="wLogo2" src="images/weather.png"/>-->
			 <i class="fa fa-envelope-o" style="font-size:36px"></i>
			 <p class="language"><a class="lang" href="#">UA</a></p> <!-- LAnguage changer-->
			 <p class="theme"><a class="them" href="#">*</a></p>	 
		 </h1> 
	
         <h4>Send sms via promise fetch(), no Php cURL </h4>

         <br><br><br><br>
         <div class="wrapper grey">
    	   <div class="container">
		   
		   
		   
		      <div class="col-sm-2 col-xs-12"></div>
			  
		      <div class="col-sm-8 col-xs-12 myShadow shrink colorAnimate change-head-style" style="background-color:lavender;">  <!--.change-head-style sets bg image, .colorAnimate sets animation-->
			     
		           <!--------Form Start------>	
                   <form action="" id="formX" method="post">
                      <div class="form-group">
                          <label for="citytext" id="cityLable">Send sms via api <span class="glyphicon glyphicon-transfer"></span></label>
						  <!-- RegExp Span -->
						  <span class="error_req"> &nbsp;* </span> <span class="sp"  id =""></span>
						  
						  
						  <div class="form-group">
                              <label for="usr">Phone number:</label>
                              <input type="text" class="form-control" id="cellID" name="phone_number" placeholder="Phone number" value="+38097">
                          </div>
						  
						  <div class="form-group">
                              <label for="usr">Sms text:</label>
                              <textarea rows="4" class="form-control" cols="50" name="sms_text" id="smsText" placeholder="your sms here..."><?php if( isset($_POST['sms_text']) && !isset($messageAnswer['success'])){echo $_POST['sms_text']; } else {echo "";}?></textarea>
                          </div>
                          
						  
						  
                     </div>
				
				   <input type="submit" class="btn btn-default" value="Send sms" id="btnSendSms">
				   <button type="button" class="btn btn-default" id="clear">Clear</button>
                   </form>				   
                   <!---------END Form -------->				   
				   
				   <!------- How many chars left  -------->
				   <p id="leftSmsCharsLimit" class="left-chars"></p>
				   
				 </div> <!--END <div class="col-sm-4" style="background-color:lavender;">-->
				
				 
			     <!-- Results go here -->
				 <div class="col-sm-6 col-xs-12" id="smsResult"></div>
				 
				 
				 
				 <!--------------------------- START Error window (Not used???)---------------------------->
				<div class="row">
				   <div class="col-sm-6 col-xs-12" id="qrResult"> <!-- width:100% caused none-one line position in web view, normal in mobile--> 
				   </div> <!-- END <div class="col-sm-4 col-xs-12" id="qrResult">-->
				</div>
                <!------------------------- END Error window------------------------------>
				 
				 
				 
				 <br><br><!--<br><br><br>-->
				 
				 
			

				 
				 
				 
			
				 
				 <!--</center>-->
				 <br><br><br><br><br>
				 <br><br><br><br><br>
				 <br><br><br><br><br>
				 
				 
				

                                    
     
    			</div><!-- /.container -->	
				  		
    		</div><!-- /.wrapper -->

                

       
		
		
		
		<!-----Footer ---->
				<div class="footer "> <!--navbar-fixed-bottom  fixxes bootom problem-->
				    <!--Contact: --> <strong>dimmm931@gmail.com</strong><br>
					<?php  echo date("Y"); ?>
				</div>
		<!--END Footer ---->  
		
		
		
		
		
		
		<!-----------------  Button to change Style theme------------------------->
	   <input type="button" class="btn btn-sm" value=">>" id="changeStyle" style="position:absolute;top:0px;left:0px;" title="click to change theme"/>
	   <!-----------------  Button to change Style theme------------------------->
		
		
		<!-----------------  Button to check quota ------------------------->
	   <button type="button" class="btn btn-sm" id="checkQuota" style="position:absolute;top:0px;right:0px;cursor:pointer; color:black;" title="check quota">
	   <?php
	   //$check = new MySmsTetxBelt\CheckQuota();
	   //$check->checkTodayQuota();
	   ?>
	   </button>
	   <!-----------------  End Button to check quota------------------------->
		
		
		
	
		<script>
		//Js prevent form resending on F5
		if ( window.history.replaceState ) {
           window.history.replaceState( null, null, window.location.href );
        }
		</script>
		
		
    
    </body>
</html>





