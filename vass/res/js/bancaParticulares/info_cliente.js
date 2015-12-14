$(document).ready(function() {
	if($(".modificarClave").length){		
	    $(".linkClave").click(function(){
			location.href = 'modificar_acceso_coord.html';
	    });		
	    
	    $(".linkCodigo").click(function(){
		location.href = 'modificar_cap_coord.html';		
	    });			

	$('.btnAceptarSimilarFunds').click(function(){		
		if($('.modificarClave').is(':checked')){
			$('.claveConexion').removeClass('hidden');
			$('.solicitarCap').addClass('hidden');			
			$('.contentBtnModificar').removeClass('hidden');
			$('.contentBtnSolicitar').addClass('hidden');			
		}else if($('.solicitarCodigo').is(':checked')){
			$('.solicitarCap').removeClass('hidden');
			$('.claveConexion').addClass('hidden');				
			$('.contentBtnSolicitar').removeClass('hidden');	
			$('.contentBtnModificar').addClass('hidden');				
		}else{
			alert('Debe seleccionar una opción')
		}
	})
	}
	
		
	
	if($(".btnAceptarCoord").length){
	    $(".btnAceptarCoord").click(function(){
		location.href = 'modificar_cap_conf.html';		
		   });	
	    $(".btnAceptarCoordPin").click(function(){
			location.href = 'Mostrar_Pin_pantalla_Confirmacion.html';		
			   });
	    
		$('.btnAceptarCoordenada').click(function(){	
			$('.alertSms').removeClass('hidden');
			$('.panelClave').removeClass('hidden');
			$('.panelVolver').removeClass('hidden');
			$('.btnAceptarCoord').removeClass('hidden');
			$('.btnReturn').addClass('hidden');			
		});			
	}		
});