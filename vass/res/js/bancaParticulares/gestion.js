$(document).ready(function() {

	// //////////_____________________________CORREO WEB______________________________________________________
	$('.showCheckCorreoWeb').click(function(){
		$('.checkCorreoWeb').toggle();
	});
	$('.showSearchCorreoWeb').click(function(){
		$('.checkCorreoWeb').hide().find('input').prop('checked',false);
		$('.checkAllCorreoWeb').prop('checked',false);
	});
	$('.checkAllCorreoWeb').change(function(){
		if($(this).is(':checked')){
			$('.checkCorreoWeb').find('input').prop('checked',true);
		}else{
			$('.checkCorreoWeb').find('input').prop('checked',false);
		}
	});
	// ////////////////////////////////////////////////////////////////
	
});