$(document).ready(function() {
	var externalSignButton = $('#externalSignButton').text();
   if(externalSignButton!=null && externalSignButton!=""){
		$('input[id*="signOTPButton"]').css("visibility", "hidden");
		$('input[id*="'+externalSignButton+'"]').bind('click', function (e){
			$('input[id*="'+externalSignButton+'"]').unbind('click');
			$('input[id*="signOTPButton"]').click();
			});
		}
   });