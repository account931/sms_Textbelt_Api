//JQ autocomplete UI, for IOS as IOS does not support dataList(+ must include JQ_UI.js + JQ_UI.css in index.php)
//DataList is used alongside with JQ autocomplete UI(core_js/autocomplete.js)

//used in IOS only
//if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){

    $(function() {
		//array of objects
         var availablePhoneTags = [
		                    {label: "+3809766", value : "Dm"},
							{label: "+3809785", value : "Sh"},
							{label: "+453112",  value : "Cph"},
							{label: "+44791755",  value : "UK"},

							  
        ];
		
		//connect autocomplete to input
        /*$( "#cellID" ).autocomplete({
            source: availablePhoneTags
        });*/
		
		
	//Autocomplete 
    $( function() {	
	
	     //fix function for autocomplete (u type email in <input id="userName">, get autocomplete hints and onSelect puts email value (i.e user ID to) to hidden <input id="userID">)
	     function displaySelectedCategoryLabel(event, ui) {
            $("#cellID").val(ui.item.label);
            //$("#userID").val(ui.item.value); //hidden <input id="userID"> to contain user (get from autocomplete array)
            event.preventDefault();
        };
		
		
	
		//Autocomplete itself
		$("#cellID").autocomplete({
           minLength: 1,
           source: availablePhoneTags, //array of objects for autocomplete
		   
		   select: function (event, ui) {
                displaySelectedCategoryLabel(event, ui);
            },
        })
		//build custom hints display
		.autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
        .append( "<div>" + item.label + " => " + item.value + "</div>" )
        .appendTo( ul );
      };
	
	
	
		
   } );
		
		
		
   } );

//}
