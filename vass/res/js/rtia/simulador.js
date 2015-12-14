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
		
		//{"paquete" : "PaqEbankinter", "evento" : "EventoTotal", "parametros" : [{"name":"SessionId", "value":"0573216"}, {"name":"ChannelType", "value":"W"}, {"name":"ChannelId", "value":"EBK"},{"name":"UsuarioWeb", "value":"PRUEBA"}]}
		
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
			    		
			    		var magicIA = Array.isArray(data.magicIA)?data.magicIA[0]:data.magicIA;
			    		
			    		if(magicIA != undefined){
				    		$("#myModalLabelInfo").empty().append(magicIA.descripcion.raiz.Titulo);
				    		$("#cabeceraOferta").empty().append(magicIA.descripcion.raiz.Cabecera);
				      		$("#contenidoOferta").empty().append(magicIA.descripcion.raiz.Cuerpo);
				      		
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
	
	$("#backSimulation").click(function (e){
		$("#resultados").slideToggle("slow");
		$("#formulario").slideToggle("slow");
	});
	
	$("#PaqEbankinter_oferta").click(function (e){
		if(!$(e.target).hasClass("close")){
			$.ajax({
				url: "/gestion/services/rtia/trackOferta/"+paquete,
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