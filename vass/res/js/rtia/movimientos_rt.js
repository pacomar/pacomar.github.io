function getRTIA() {
		var peticion = new Object();
		var parametros = new Array();
		var paquete = "PaqNbolParticulares";
		var evento ="ConsultaMovimientos";
		
		
		var saldoData = new Object();
		saldoData.name = "Saldo";
		saldoData.value = $("#idSaldo").val();
		parametros.push(saldoData);
		
		var tipoCTAData = new Object();
		tipoCTAData.name = "TipoCTA";
		tipoCTAData.value = $("#idTipoCuenta").val();
		parametros.push(tipoCTAData);
		

		
		peticion.paquete = paquete;
		peticion.evento = evento;
		peticion.parametros = parametros;
		
	
		callRTIA(JSON.stringify(peticion), 

			function(data) {
		
			if (data != null) {
		
					for (index = 0; index < data.oferta.length; ++index) {

						var oferta = data.oferta[index];

						if (oferta.ubicacion != null
								&& oferta.ubicacion == 'PanelSaldo') {

							$("#idTexto").empty()
									.append(oferta.tituloPrincipal);
							$("#idTextoBoton").empty()
									.append(oferta.textoBoton);
			
							
							if (oferta.urldestino != null && (oferta.urldestino.indexOf('v-') != -1 || oferta.urldestino.indexOf('V-') != -1)) {
								$("#idA").attr("onclick",
										"window.open('" + oferta.urldestino + "')");
								$("#idA").attr("href", "");
							} else {
							
								$("#idA").attr("href", oferta.urldestino);
						
							}
							
							$("#idPanelSaldo").attr("class", "show");
						}
						if (oferta.ubicacion != null
								&& oferta.ubicacion == 'PanelConsejo') {

							$("#idTextoConsejo").empty().append(
									oferta.tituloPrincipal);
							$("#idTextoBotonConsejo").empty().append(
									oferta.textoBoton);
						
							
							if (oferta.urldestino != null && (oferta.urldestino.indexOf('v-') != -1 || oferta.urldestino.indexOf('V-') != -1)) {
								
								var destino = oferta.urldestino.replace('v-', '');
								destino = destino.replace('V-','');
								
								$("#idTextoBotonConsejo").attr("onclick", 
										"window.open('" + destino + "')");
					
							} else {
							
								$("#idTextoBotonConsejo").attr("href", oferta.urldestino);
						
							}
							
							$("#idPanelConsejo").attr("class", "show");
						}

					}

				}
			},	function() {
				
			}
		
		
		);
}
	

	
	$("#idAConsejo").click(function (e){
		if(!$(e.target).hasClass("close")){
			$.ajax({
				url: "/gestion/services/rt/trackOfertaRT/"+paquete,
			    type: "POST"
			});
		}
	});
	
	$("#idA").click(function (e){
		var paquete = "PaqNbolParticulares";
		if(!$(e.target).hasClass("close")){
			$.ajax({
				url: "/gestion/services/rt/trackOfertaRT/"+paquete,
			    type: "POST"
			});
		}
	});




