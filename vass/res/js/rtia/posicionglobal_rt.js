$(document).ready(function() {
	
	     		getRTIA();
	     		
	     	});


function getRTIA() {
		var peticion = new Object();
		var parametros = new Array();

		var paquete = "PaqNbolParticulares";
		var evento ="PosicionGlobal";

		peticion.paquete = paquete;
		peticion.evento = evento;
		peticion.parametros = parametros;

		callRTIA(JSON.stringify(peticion), 

			function(data) {
		
			if (data != null) {
		
					for (index = 0; index < data.oferta.length; ++index) {

						var oferta = data.oferta[index];

						if (oferta.ubicacion != null
								&& oferta.ubicacion.indexOf('Consejo')!= -1) {

								fillConsejo(oferta);
						}
						if (oferta.ubicacion != null
								&& oferta.ubicacion.indexOf('Caja') != -1) {
							fillCaja(oferta);
						}

					}

				}
			},	function() {
				
			}
		
		
		);
}
	

	
	$(".btnAdvice").click(function (e){
		if(!$(e.target).hasClass("close")){
			$.ajax({
				url: "/gestion/services/rt/trackOfertaRT/"+paquete,
			    type: "POST"
			});
		}
	});
	
	$(".boxSortableDefault.boxSortableInfo").click(function (e){
		var paquete = "PaqNbolParticulares";
		if(!$(e.target).hasClass("close")){
			$.ajax({
				url: "/gestion/services/rt/trackOfertaRT/"+paquete,
			    type: "POST"
			});
		}
	});

	function fillConsejo(oferta) {


		var _idubicacion = '#' + oferta.ubicacion;
		
		$(_idubicacion).find('.col-lg-7.col-md-7.col-sm-6').empty().append(oferta.tituloPrincipal);
		$(_idubicacion).find('.btnAdvice').empty().append(oferta.textoBoton);							
		$(_idubicacion).find('.btnAdvice').attr("title", oferta.textoBoton);
		
		$(_idubicacion).find('.btnAdvice').attr("title", oferta.textoBoton);
		

	
		if (oferta.urldestino != null && (oferta.urldestino.indexOf('v-') != -1 || oferta.urldestino.indexOf('V-') != -1)) {
			
			
			var destino = oferta.urldestino.replace('v-', '');
			destino = destino.replace('V-','');
			
			$(_idubicacion).find('.btnAdvice').attr("onclick",
					"window.open('" + destino + "')");
	
		} else {
			$(_idubicacion).find('.btnAdvice').attr("href", oferta.urldestino);
	
		}
		
		$(_idubicacion).find('.btnAdvice.btnConversationBlue.btnBasicImg.btnTextTablet').empty().append("Preguntar a gestor");
					
		$(_idubicacion).find('.btnAdvice.btnConversationBlue.btnBasicImg.btnTextTablet').attr("title","Preguntar a gestor");
		
		
		$(_idubicacion).find('.btnAdvice.btnConversationBlue.btnBasicImg.btnTextTablet').attr("href","../../conversaciones/secure/conversacion_detalle.xhtml");
		$(_idubicacion).find('.btnAdvice.btnConversationBlue.btnBasicImg.btnTextTablet').attr("onclick","");
		
		$(_idubicacion).attr("class", "show");
		
		
	}
	
	
	function fillCaja(oferta) {
		
		
		var _idubicacion = '#' + oferta.ubicacion;
		
		



		var destino = '';

		if (oferta.urldestino != null) {
			destino = oferta.urldestino.replace('v-', '');
			destino = destino.replace('V-', '');
		}
	
		$(_idubicacion).click(function(event) {
			$(_idubicacion).load(destino);
			event.preventDefault();
		});

		$(_idubicacion).find('.nameCCC').empty().append(oferta.tituloPrincipal);
		$(_idubicacion).find('.description.recommend').empty().append('recomendado');
		$(_idubicacion).find('#idliteralizquierda').empty().append(oferta.literalIzquierda);
		$(_idubicacion).find('#idliteralderecha').empty().append(oferta.literalDerecha);
		$(_idubicacion).find('#idvalorizquierda').empty().append(oferta.variable1);
		$(_idubicacion).find('#idvalorderecha').empty().append(oferta.variable2);
	
		$(_idubicacion).attr("class", "boxSortableDefault boxSortableInfo show");
	
	

	}


