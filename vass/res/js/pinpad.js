	
$(document).ready(function() {
	var externalSignButton = $('#externalSignButton').text();
	if(externalSignButton!=null && externalSignButton!=""){
		$('#coordenada').css("visibility", "");
		$('input[id*="signCoordsButton"]').css("visibility", "hidden");
		$('input[id*="'+externalSignButton+'"]').bind('click', function (e){
			$('input[id*="'+externalSignButton+'"]').unbind('click');
			$('input[id*="signCoordsButton"]').click();
		});
	}
});


function showPinpad(data){
	$('span[id*="pinpadImage"]').closest("div.textCode").css("display", "none");
	if(data.status == "success") {
		pinpadStatus=1;
		deleteCoords();
		$('span[id*="pinpadImage"]').closest("div.textCode").css("display", "block");
		$('div[id*="signCodePanelError"]').css("display", "none");
		$('input[id*="signCodeCoordenada"]').prop("disabled", true);
		
		$('body').bind('click', handleCoordinateClick);
	}
}

function handleCoordinateClick(e){
	if(!$(e.target).hasClass("signCodeInput") && !$(e.target).hasClass("deleteCodeCoordenate") && !$(e.target).hasClass("labelSignCode")){
		killEvent(e);
		if(!$(e.target).closest("span.pinpadGroup").length){
			shutdownPinpad();
		} else if($(e.target).hasClass("pinpad")){
			var pos = $(e.target).offset();
			var posX = (e.pageX - pos.left);
			var posY = (e.pageY - pos.top);
			
			var coord = String(parseInt(posX))+ "," + String(parseInt(posY)); 
			if(coord!=null){
				var selectedCoords = $('input[id*="scc"]').val();
				if(selectedCoords == null || selectedCoords == ""){
					$('input[id*="scc"]').val(coord);
					$('input[id*="signCodeCoordenada"]').val('X');
				} else {
					$('input[id*="scc"]').val(selectedCoords+","+coord);
					$('input[id*="signCodeCoordenada"]').val('XX');
					shutdownPinpad();
				}
			}
			
		}
	}
}

function shutdownPinpad(){
	$('body').unbind("click", handleCoordinateClick);
	$('span[id*="pinpadImage"]').closest("div.textCode").slideToggle();
	$('input[id*="signCodeCoordenada"]').prop("disabled", false);
	
}

function deleteCoords() {
	$('input[id*="signCodeCoordenada"]').val("");
	$('input[id*="scc"]').val("");
}

function killEvent(event){
	event.preventDefault();
	event.stopImmediatePropagation();
	event.stopPropagation();
}

function clickOnThis(element)
{
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
	  if (document.createEvent)
	  {
	    var evObj = document.createEvent('MouseEvents');
	    evObj.initEvent( 'click', true, false );
	    element.dispatchEvent(evObj);
	  }
	  else if (document.createEventObject)
	  {
		element.fireEvent('onclick');
	  }
	}
}

