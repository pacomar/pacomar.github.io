$( document ).ready(function() {
	var paquete;
	var MaxInputs       = 8; //maximum input boxes allowed
	var InputsWrapper   = $("#InputsWrapper"); //Input boxes wrapper ID
	var AddButton       = $("#AddMoreFileBox"); //Add button ID	
	
	var x = 5; //initlal text box count
	var FieldCount=4; //to keep track of text box added
		
	$(AddButton).click(function (e)  //on add input button click
	{
	        if(x <= MaxInputs) //max input box allowed
	        {
	            FieldCount++; //text box added increment
	            //add input box
	            $(InputsWrapper).append('<div><label>Parametro</label><input type="text" name="names[]" id="field_'+ FieldCount +'" value="Nombre"/><input type="text" name="values[]" id="value_'+ FieldCount +'" class="inputParamValues" value="Valor"/><a href="#" class="removeclass">&times;</a></div>');
	            x++; //text box increment
	        } else {
	        	$("#warningParams").text("Ha llegado al maximo de parametros permitidos.");
	        	$("#warningParams").show("slow").delay("3000").hide("slow");
	        }
	return false;
	});
		
	$("body").on("click",".removeclass", function(e){ //user click on remove text
        if( x > 4 ) {
                $(this).parent('div').remove(); //remove text box
                x--; //decrement textbox
        }
	return false;
	});
	
	$("#submitSimulation").click(function (e){
		$("#errorSimulador").hide("slow");
		
		paquete = $("#paquete").val();
		var evento = $("#evento").val();

		if(paquete == "" || evento == ""){
			$("#errorSimulador").text("Los campos paquete y evento son obligatorios. Reviselos, por favor.");
    		$("#errorSimulador").show("slow");
		} else {
			var persona = $("#persona").val();
			launchSimulator(paquete, evento, persona);
		}
		
	});
	
	function launchSimulator(paquete, evento, persona) {
		var peticion = new Object();
		var parametros = new Array();
		
		var personaData = new Object();
		personaData.name = "SessionId";
		personaData.value = persona;
		parametros.push(personaData);
		
		
		for(var i=0;i<MaxInputs;i++){
			var param = $("#field_"+i).val();
			var paramValue = $("#value_"+i).val();
			if(param != null && paramValue != null && paramValue != ""){
				var pairData = new Object();
				pairData.name = param;
				pairData.value = paramValue;
				parametros.push(pairData);
			} 
		}
		
		peticion.paquete = paquete;
		peticion.evento = evento;
		peticion.parametros = parametros;
		
		ajaxindicatorstart("Loading ...");
		callRTIA(JSON.stringify(peticion), 
				function(data){
					ajaxindicatorstop();
			    	if(data == null){
			    		$("#errorSimulador").text("No se han encontrado ofertas con estos parametros.");
			    		$("#errorSimulador").show("slow");
			    	} else {
			    		$("#errorSimulador").hide("slow");
			    		$("#ofertas").text(JSON.stringify(data));
			    		
			    		var oferta = Array.isArray(data.oferta)?data.oferta[0]:data.oferta;
			    		
			    		if(oferta != undefined){
			    			

							fillTemplate(oferta);			
							
							fillBotones(oferta);
				      		
				      		$("#formulario").slideToggle("slow");
				      		$("#resultados").slideToggle("slow");
			    		} else {
			    			$("#errorSimulador").text("No se han encontrado ofertas con estos parametros.");
				    		$("#errorSimulador").show("slow");
			    		}
			      		
			    	}
				}, 
				function(){
					ajaxindicatorstop();
			    	$("#errorSimulador").text("Ha ocurrido un error interno o los parametros no son correctos. Revise los logs para conocer mas detalles.");
		    		$("#errorSimulador").show("slow");
				}
		);
	}
	
	function fillTemplate(oferta) {
		
		var _idubicacion = '#template' + oferta.ofertaNotes.template;
		var destino = '';

	
		$("#titulopc").find("img").attr("src", "../.."+oferta.imgNotes.titulopc);
		$("#titulotablet").find("img").attr("src", "../.."+oferta.imgNotes.titulotablet);
		$("#titulomovil").find("img").attr("src", "../.."+oferta.imgNotes.titulomovil);

		var cDate = getCurrentDate();
		$("#currentdate").append(cDate);	

		if(oferta.ofertaNotes.publicidad == 'SI'){
			$("#publicidad").empty().append("PUBLICIDAD");
		}
							
		$(_idubicacion).find("#imagenpc").attr("src", "../.."+oferta.imgNotes.imagenpc);
		$(_idubicacion).find("#imagentablet").attr("src", "../.."+oferta.imgNotes.imagentablet);
		$(_idubicacion).find("#imagenmovil").attr("src", "../.."+oferta.imgNotes.imagenmovil);
									    			
		$(_idubicacion).find("#cuerpopc").empty().append(oferta.ofertaNotes.cuerpopc);
		$(_idubicacion).find("#cuerpopc2").empty().append(oferta.ofertaNotes.cuerpopc);
		$(_idubicacion).find("#cuerpotablet").empty().append(oferta.ofertaNotes.cuerpotablet);
		$(_idubicacion).find("#cuerpomovil").empty().append(oferta.ofertaNotes.cuerpomovil);
				      		
				      		
		$('#textoLegal').find('p').empty().append(oferta.ofertaNotes.legalpc);			      		

		$(_idubicacion).attr("class", "show");


}


		// contamos el numero de botones para saber como pintar la plantilla
		function contarBotones(obj, key) {
		var objects = 0;
		for ( var i in obj) {
			if (!obj.hasOwnProperty(i))
				continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getObjects(obj[i], key));
			} else if (i.indexOf(key) != -1) {
				objects++;
			}
		}
		
		return objects;
		}

		function getCurrentDate() {

			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth() + 1; //January is 0!

			var yyyy = today.getFullYear();
			if (dd < 10) {
				dd = '0' + dd
			}
			if (mm < 10) {
				mm = '0' + mm
			}
			var today = dd + '.' + mm + '.' + yyyy;
			return today;

		}


function fillBotones(oferta) {
var nBotones =		contarBotones(oferta.ofertaNotes, 'destinoboton');

	var _idubicacion = '#boton' + nBotones;
	
	
	$(_idubicacion).find("#boton1").attr("onclick","window.open('" + oferta.ofertaNotes.destinoboton1 + "')");
	$(_idubicacion).find("#boton1").attr("value",oferta.ofertaNotes.textoboton1 );
	$(_idubicacion).find("#boton2").attr("onclick","window.open('" + oferta.ofertaNotes.destinoboton2 + "')");
	$(_idubicacion).find("#boton2").attr("value",oferta.ofertaNotes.textoboton2 );
	$(_idubicacion).find("#boton3").attr("onclick","window.open('" + oferta.ofertaNotes.destinoboton3 + "')");
	$(_idubicacion).find("#boton3").attr("value",oferta.ofertaNotes.textoboton3 );
	
	$(_idubicacion).find("#telefono").attr("href","telf:" + oferta.ofertaNotes.telefonoinfo );

	
	$(_idubicacion).find("#telefono").empty().append(oferta.ofertaNotes.telefonoinfo );
	
	$(_idubicacion).attr("class", "row show");
}
	
	$("#backSimulation").click(function (e){
		$("#resultados").slideToggle("slow");
		$("#formulario").slideToggle("slow");
	});
	
	$("#PaqEbankinter_oferta").click(function (e){
		if(!$(e.target).hasClass("close")){
			$.ajax({
				url: "/gestion/services/rtia/trackOfertaRT/"+paquete,
			    type: "POST"
			});
		}
	});
});

function ajaxindicatorstart(text){
	if($('body').find('#resultLoading').attr('id') != 'resultLoading'){
	$('body').append('<div id="resultLoading" style="display:none"><div><img src="/res/css/rtia/img/ajax-loader.gif"><div>'+text+'</div></div><div class="bg"></div></div>');
	}

	$('#resultLoading').css({
		'width':'100%',
		'height':'100%',
		'position':'fixed',
		'z-index':'10000000',
		'top':'0',
		'left':'0',
		'right':'0',
		'bottom':'0',
		'margin':'auto'
	});

	$('#resultLoading .bg').css({
		'background':'#000000',
		'opacity':'0.7',
		'width':'100%',
		'height':'100%',
		'position':'absolute',
		'top':'0'
	});

	$('#resultLoading>div:first').css({
		'width': '250px',
		'height':'75px',
		'text-align': 'center',
		'position': 'fixed',
		'top':'0',
		'left':'0',
		'right':'0',
		'bottom':'0',
		'margin':'auto',
		'font-size':'16px',
		'z-index':'10',
		'color':'#ffffff'

	});

    $('#resultLoading .bg').height('100%');
    $('#resultLoading').fadeIn(300);
    $('body').css('cursor', 'wait');
}

function ajaxindicatorstop(){
    $('#resultLoading .bg').height('100%');
    $('#resultLoading').fadeOut(300);
    $('body').css('cursor', 'default');
}