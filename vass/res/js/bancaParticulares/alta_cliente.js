$(document).ready(function() {

	// ////////// ________________ ALTA CLIENTE ________________________
	function scanDoc(){
		$('.scanModule, .scanTitle, .attachDocBlock').show();
		$('.attachModule, .attachTitle, .scanDocBlock').hide();
	}
	function attachDoc(){
		$('.scanModule, .scanTitle, .attachDocBlock').hide();
		$('.attachModule, .attachTitle, .scanDocBlock').show();
	}
	if($('.attachModule').length){
		if($(window).width() < 992){
			$('.scanModule, .scanTitle, .attachDocBlock').show();
			$('.attachModule, .attachTitle, .scanDocBlock').hide();
		}else{
			$('.scanModule, .scanTitle, .attachDocBlock').hide();
			$('.attachModule, .attachTitle, .scanDocBlock').show();
		}
	}
	
	$('.scanDoc').click(function(){
		scanDoc();
		contentSize();
	});
	$('.attachDoc').click(function(){
		attachDoc();
		contentSize();
	});
	$('.nextStepProcess').click(function(){
		$('.processBlock, .help-block').hide();
		$('.waitingMessage').removeClass('hidden');
		window.setTimeout(greetingsStep, 2000);
		contentSize();
	});
	function greetingsStep(){
		window.location.href = 'cc_confirm_identif.html';
	}
	
	$('.acceptPassword').click(function(){
		$(this).closest('.panel').next('.panel').removeClass('hidden').next('.backNextPanel').removeClass('hidden');
	});
	
	$('.trabajo').change(function(){
		if($(this).val() == 'cuentaAjena'){
			$('.cuentaAjena').removeClass('hidden');
			$('.cuentaPropia').addClass('hidden');
		}else if($(this).val() == 'cuentaPropia'){
			$('.cuentaAjena').addClass('hidden');
			$('.cuentaPropia').removeClass('hidden');
		}else if($(this).val() == 'cuentaAjenaPropia'){
			$('.cuentaAjena').removeClass('hidden');
			$('.cuentaPropia').removeClass('hidden');
		}else{
			$('.cuentaAjena').addClass('hidden');
			$('.cuentaPropia').addClass('hidden');
		}
	});
	
	$('.seguro').change(function(){
		var valor = $('.seguro:checked').val();
		if(valor == 'yes'){
			$('.assurance').addClass('hidden');
		}else{
			$('.assurance').removeClass('hidden');
		}
	});
	
	$('.upload input[type="file"]').change(function(){
		var fileName = $(this).val();
		$(this).closest('.upload').addClass('hidden').next('.fileBlock').removeClass('hidden').find('.fileName').html(fileName);
	});
	$('.fileBlock button').click(function(){
		$(this).closest('.fileBlock').addClass('hidden').prev('.upload').removeClass('hidden').find('.input').val('');
	});
	
	var contadorPais = 0;
	$('.anotherCountry').click(function(){
		contadorPais++;
		if(contadorPais < 5){
			$(this).prev('.pais').addClass('paisUltimo');
			$(this).prev('.pais').clone().insertAfter('.paisUltimo');
			$('.pais').removeClass('paisUltimo');
			$(this).prev('.pais').addClass('paisUltimo').find('.deleteCountry').on( "click", function() {
				contadorPais--;
				if(contadorPais >= 0){
					$(this).closest('.pais').remove();
					$('.anotherCountry').prev('.pais').addClass('paisUltimo');
				} 
			});
			$('.deleteCountry').removeClass('hidden');
		}
	});
	$('.deleteCountry').click(function(){
		contadorPais--;
		if(contadorPais >= 0){
			$(this).closest('.pais').remove();
			$('.anotherCountry').prev('.pais').addClass('paisUltimo');
		}
	});
	// ////////////////////////////////////////////////////////////////
	
	// //////////_____________________________DATOS CLIENTE______________________________________________________
	$('.btnAceptarTelMovil').click(function(){
		if($('.noMovil').is(':checked')){
			//$('.backNextPanel').removeClass('hidden');
		}else{
			//$('.backNextPanel, .alert-warning').removeClass('hidden');
		}
	});
	$('.btnAceptarCoord').click(function(){
		$('.backNextPanel').removeClass('hidden');
		$(this).closest('.panel').next('.panel').removeClass('hidden');
	});
	if($('.noMovil').length){
		$('.noMovil').click(function(){
			if($(this).is(':checked')){
				$('.prefijoPais, .telefono').attr('disabled', true);
				$(this).closest('form').attr('action','../Primera_fase/inicio_3x_clave.html');
			}else{
				$('.prefijoPais, .telefono').attr('disabled', false);
				$(this).closest('form').attr('action','contrasena_otp.html');
			}
			$('.backNextPanel, .alert-warning').addClass('hidden');
		});
	}
	
	
	// ////////////////////////////////////////////////////////////////
	
});