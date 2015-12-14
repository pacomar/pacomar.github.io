$(document).ready(function() { 

	// //////////______________________________NOTIFICACIONES______________________________________________________
	
	function addBorderToBox(element){
		if(!$(element).hasClass('boxDesactive')){
			$(element).addClass("boxActive");
		}
	}
	
	$('.panelProductNotification .boxTransfer').click(function(){
		$('.panelProductNotification .boxTransfer').removeClass("boxActive");
		$(".panelTypeNotification").removeClass("hidden");
		if ($(window).width() <= 750) {
				$(".panelProductNotification .panel-body").hide();
				$(".panelProductNotification .panel-heading span").removeClass("hidden");	
				$(".panelProductNotification").addClass("panelMovilStep");
		}
		addBorderToBox(this);
		if ($(window).width() > 751) {
			scrollNextPanel(this);
		}
	});
	
	$('.panelTypeNotification .boxTransfer').not('.boxDesactive').click(function(){
		$('.panelTypeNotification .boxTransfer').removeClass("boxActive");
		addBorderToBox(this);
		if ($(window).width() > 751) {
			scrollNextPanel(this);
		}
	});
	
	
	// //////// Ocultar/Mostrar Tipo Notificacion - Notificaciones
	function showHideNotification(whatNotification, headingText){
		if (!$(this).hasClass('boxConfigured')){
			$(".contentTypeNotification > div").hide();
			$(whatNotification).removeClass("hidden");
			$(whatNotification).show();
			if ($(window).width() < 753) {
				//ocultar caja con los tipos de aviso
				$('.panelTypeNotification .panel-body').hide();
				$('.panelTypeNotification .panel-heading div').removeClass('hidden');								
				
				//muestra el texto en la cabecera
				$(headingText).show();
				$(headingText).removeClass('hidden');								
				
				//al seleccionar en un tipo de aviso se pliega la caja y se expande
				$('.panelTypeNotification').addClass('panelMovilStep');
				$('.contentTypeNotification').removeClass('hidden');
			}
			contentSize();
		}
	}
	$(".notificacionInformeSaldo").on('click',function(){
		showHideNotification('.detailNotificacionInformeSaldo','.typeInformeSaldo');
	});
	$(".notificacionExtractoMensual").on('click',function(){
		showHideNotification('.detailNotificacionExtractoMensual','.typeExtractoMensual');
	});
	$(".notificacionSaldoNegativo").on('click',function(){
		showHideNotification('.detailNotificacionSaldoNegativo','.typeSaldoNegativo');
	});
	$(".notificacionIngreso").on('click',function(){
		showHideNotification('.detailNotificacionIngreso','.typeIngreso');
	});
	$(".notificacionIngresoEx").on('click',function(){
		showHideNotification('.detailNotificacionIngresoEx','.typeIngreso');
	});
	$(".notificacionCarteraInversion").on('click',function(){
		showHideNotification('.detailNotificacionCarteraInversion','.typeIngreso');
	});
	$(".notificacionRecibirPago").on('click',function(){
		showHideNotification('.detailNotificacionRecibirPago','.typeIngreso');
	});
	$(".notificacionCobrarRecibo").on('click',function(){
		showHideNotification('.detailNotificacionCobrarRecibo','.typeIngreso');
	});
	$(".notificacionInformeMovimientos").click(function() {
		if (!$(this).hasClass('boxConfigured')){
			$(".contentTypeNotification > div").hide();		
			$(".detailNotificacionInformeMovimientos").removeClass("hidden");
			$(".detailNotificacionInformeMovimientos").show();
			$('.contentTypeNotification').removeClass('hidden');
			contentSize();
		}
	});
	
	
	// /////////// Click en cabeceras de panel en móvil - Notificaciones
	$(".panelProductNotification .panel-heading, .panelTypeNotification .panel-heading").click(function(){
			if ($(window).width() < 751) {
				$(this).closest('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show();
				$(this).find('> span').addClass('hidden');
				$(this).closest('.panel').nextAll('.panel').removeClass('panelMovilStep').addClass('hidden');
				$(this).closest('.panel').nextAll('.panel').find('.panel-heading > span').addClass('hidden');
				$(this).closest('.panel').nextAll('.panel').find('.panel-body').show();
				$(this).closest('.panel').find('.boxActive').removeClass('boxActive');
				$(this).closest('.panel').nextAll('.panel').find('.boxActive').removeClass('boxActive');
				
				$('.contentTypeNotification').addClass('hidden');
				contentSize();
			}
	});
	$(".contentTypeNotification .panel-heading").click(function(){
		if ($(window).width() < 751) {
			$(this).closest('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show().removeClass('hidden');
			$(this).find('> span').addClass('hidden');
			$(this).closest('.contentTypeNotification').nextAll('.panel').removeClass('panelMovilStep').addClass('hidden');
			
			contentSize();
		}
	});
	// ////////////////////////////////////////////////////////////////	
	
	// /////////// Rensponsive - Volver de pasos a normal al maximizar - Transferencias
	$(window).resize(function(){
			var boxActiveClass = $('.panelTypeNotification .boxTransfer.boxActive').attr('class');
			if ($(window).width() >= 751){
				$('.panelMovilStep').find('.panel-heading > span').addClass('hidden');
				$('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show();
			}
			if ($(window).width() < 751){
				$('.boxTransfer.boxActive').closest('.panel').addClass('panelMovilStep').find('.panel-body').hide();
				switch (boxActiveClass){
				case 'boxTransfer notificacionInformeSaldo boxActive':
					$('.panelTypeNotification .panel-heading > span.typeInformeSaldo').removeClass('hidden');
					break;
				case 'boxTransfer notificacionExtractoMensual boxActive':
					$('.panelTypeNotification .panel-heading > span.typeExtractoMensual').removeClass('hidden');
					break;
				case 'boxTransfer notificacionSaldoNegativo boxActive':
					$('.panelTypeNotification .panel-heading > span.typeSaldoNegativo').removeClass('hidden');
					break;
				case 'boxTransfer notificacionIngreso boxActive':
					$('.panelTypeNotification .panel-heading > span.typeIngreso').removeClass('hidden');
					break;
				case 'boxTransfer notificacionIngresoEx boxActive':
					$('.panelTypeNotification .panel-heading > span.typeIngresoEx').removeClass('hidden');
					break;
				case 'boxTransfer notificacionCarteraInversion boxActive':
					$('.panelTypeNotification .panel-heading > span.typeIngreso').removeClass('hidden');
					break;
				case 'boxTransfer notificacionRecibirPago boxActive':
					$('.panelTypeNotification .panel-heading > span.typeIngreso').removeClass('hidden');
					break;
				case 'boxTransfer notificacionCobrarRecibo boxActive':
					$('.panelTypeNotification .panel-heading > span.typeIngreso').removeClass('hidden');
					break;
				}
				$('.panelProductNotification .panel-heading > span').removeClass('hidden');
			}
	});
	// ////////////////////////////////////////////////////////////////
	
	// /////////// scroll a paso siguiente
	function scrollNextPanel(elementClick){
		var posBottomPanel = $(elementClick).closest('.panel').offset().top;
		var posNextPanel = posBottomPanel + $(elementClick).closest('.panel').outerHeight() - 30;
		$("html,body").animate({scrollTop: posNextPanel});
	}
	
	//////////////////////////////////////////////////////////////////
	
	
	$(".selectionDiasSemana").hide();
	$(".selectionDiasMes").hide();
	
	$(".dias_semana_saldo").click(function() {
		if ($(this).is(":checked")) {
			$(".selectionDiasMes").hide();
    		$(".selectionDiasSemana").show();
    	}
	});
	$(".dias_mes_saldo").click(function() {
		if ($(this).is(":checked")) {
			$(".selectionDiasMes").show();
    		$(".selectionDiasSemana").hide();
    	}
	});
	
	$(".si_corresponde").click(function() {
		if ($(this).is(":checked")) {
			$(this).parent().siblings("button").removeClass("btnStepNotificacionIngresoNomina");
			$(this).parent().siblings("button").addClass("btnNextTypeNotification");
			if ($(window).width() <= 750) {
				$(this).parent().siblings("button").removeClass("hidden");
			} else {
				$(this).parent().siblings("button").addClass("hidden");
			}
			
    	} 
	});
	$(".no_corresponde").click(function() {
		if ($(this).is(":checked")) {
			$(this).parent().siblings("button").addClass("btnStepNotificacionIngresoNomina");
			$(this).parent().siblings("button").removeClass("hidden").removeClass("btnNextTypeNotification");				
    	} 
	});
	
	$(document).on('click', '.btnStepNotificacionIngresoNomina',function() {	
		$(".firstStepNotificacionIngresoNomina").hide();
		$(".secondStepNotificacionIngresoNomina").removeClass("hidden");	
	});
	
	$(".notificacionIngresoNomina").click(function() {			
		$(".firstStepNotificacionIngresoNomina").show();
		$(".secondStepNotificacionIngresoNomina").addClass("hidden");
	});
	
	$(document).on('click', '.btnNextTypeNotification',function() {				    
		$(".panelTypeNotification  .panel-heading span").removeClass("hidden");
		$(".panelTypeNotification  .panel-body").hide();
		$(".panelWhereNotification").removeClass("hidden-xs");
		$(".panelBackNextNotification").removeClass("hidden-xs");
		$(".panelTypeNotification").addClass("panelMovilStep");	
	});
	
	if($('.multiselectSemana').length){
		$('.multiselectSemana').multiselect({
			maxHeight: 250,
			numberDisplayed: 4,
			buttonClass: 'btn btn-multiselect',
			templates: {
				 ul: '<ul class="multiselect-container dropdown-menu selectDiasSemana"></ul>'
		    },
			buttonTitle: function(options, select) {
		        var selected = 'Días de la semana';
		        options.each(function () {
		          selected += $(this).text() + ', ';
		        });
		        return selected.substr(0, selected.length - 2);
		      },
			buttonText: function(options, select) {
		        if (options.length == 0) {
		          return 'Días de la semana <b class="caret"></b>';
		        }
		        else {
		          if (options.length > this.numberDisplayed) {
		            return options.length + ' días de la semana  <b class="caret"></b>';
		          }
		          else {
		            var selected = '';
		            options.each(function() {
		              var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();
		 
		              selected += label + ', ';
		            });
		            return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
		          }
		        }
		      }
		});
	}
	if($('.multiselectMes').length){
		$('.multiselectMes').multiselect({
			maxHeight: 250,
			numberDisplayed: 4,
			buttonClass: 'btn btn-multiselect',
			buttonTitle: function(options, select) {
		        var selected = 'Días del mes';
		        options.each(function () {
		          selected += $(this).text() + ', ';
		        });
		        return selected.substr(0, selected.length - 2);
		      },
			buttonText: function(options, select) {
		        if (options.length == 0) {
		          return 'Días del mes <b class="caret"></b>';
		        }
		        else {
		          if (options.length > this.numberDisplayed) {
		            return options.length + ' días del mes  <b class="caret"></b>';
		          }
		          else {
		            var selected = '';
		            options.each(function() {
		              var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();
		 
		              selected += label + ', ';
		            });
		            return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
		          }
		        }
		      }
		});
	}
	
	
	if($('.multiselectPagoRecibos').length){
		$('.multiselectPagoRecibos').multiselect({
			maxHeight: 250,
			numberDisplayed: 4,
			buttonClass: 'btn btn-multiselect',
			buttonTitle: function(options, select) {
		        var selected = 'Seleccione uno o varios recibos';
		        options.each(function () {
		          selected += $(this).text() + ', ';
		        });
		        return selected.substr(0, selected.length - 2);
		      },
			buttonText: function(options, select) {
		        if (options.length == 0) {
		          return 'Seleccione uno o varios recibos <b class="caret"></b>';
		        }
		        else {
		          if (options.length > this.numberDisplayed) {
		            return options.length + ' Seleccione uno o varios reciboss  <b class="caret"></b>';
		          }
		          else {
		            var selected = '';
		            options.each(function() {
		              var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();
		 
		              selected += label + ', ';
		            });
		            return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
		          }
		        }
		      }
		});
	}	
	
	// //////// aceptar
	$('.btnAceptar').click(function(){	
		if(!$("input[name='dias_saldo']:checked").val()){
			alert('Debe seleccionar una opción primero');		
		}else{										
			
			if($("input[name='dias_saldo']:checked").val()=="dias_semana_saldo"){
				
				var resultSelectSemana= $(".multiselectSemana").val();				
				
				if(resultSelectSemana == null){
					alert('Debe seleccionar uno o varios días');
				}else{
					$('.panelWhereNotification').removeClass('hidden');
					$('.panelBackNextNotification').removeClass('hidden');
					
					if ($(window).width() < 753) {
						$('.detailNotificacionInformeSaldo').addClass('panelMovilStep');
						$('.detailNotificacionInformeSaldo').css('margin-top','0');
						$('.detailNotificacionInformeSaldo .panel-body').addClass('hidden');						
						$('.detailNotificacionInformeSaldo .panel-heading div').removeClass("hidden");
						$(".detailNotificacionInformeSaldo .panel-heading span").removeClass("hidden");
						$(".detailNotificacionInformeSaldo .panel-heading span").css('width','auto');
						$(".panelProductNotification .panel-heading span").removeClass("hidden");						
					}else{
						scrollNextPanel(this);
					}
				}
				
			}
			else if($("input[name='dias_saldo']:checked").val()=="dias_mes_saldo"){
				
				var resultSelectMes= $(".multiselectMes").val();				
				
				if(resultSelectMes == null){
					alert('Debe seleccionar uno o varios días del mes.');
				}else{
					$('.panelWhereNotification').removeClass('hidden');
					$('.panelBackNextNotification').removeClass('hidden');
					
					if ($(window).width() < 753) {
						$('.detailNotificacionInformeSaldo .panel-body').addClass('hidden');
						$('.detailNotificacionInformeSaldo').addClass('panelMovilStep');
						$('.detailNotificacionInformeSaldo').css('margin-top','0');
						$('.detailNotificacionInformeSaldo .panel-heading div').removeClass("hidden");
						$(".detailNotificacionInformeSaldo .panel-heading span").removeClass("hidden");
						$(".detailNotificacionInformeSaldo .panel-heading span").css('width','auto');
						$(".panelProductNotification .panel-heading span").removeClass("hidden");						
					}else{
						scrollNextPanel(this);
					}				
				}			
			}												
		}
	});
	
	//Extracto mensual	
	$('.btnAceptarExtractoMensual').click(function(){	
		$('.panelWhereNotification').removeClass('hidden');
		$('.panelBackNextNotification').removeClass('hidden');

		if ($(window).width() < 753) {
			$('.detailNotificacionExtractoMensual .panel-body').addClass('hidden');	
			$('.detailNotificacionExtractoMensual').addClass('panelMovilStep');
			$('.detailNotificacionExtractoMensual').css('margin-top','0');
			$('.detailNotificacionExtractoMensual .panel-heading div').removeClass("hidden");
			$(".detailNotificacionExtractoMensual .panel-heading span").removeClass("hidden");
			$(".detailNotificacionExtractoMensual .panel-heading span").css('width','auto');
			$(".panelProductNotification .panel-heading span").removeClass("hidden");			
		}else{
			scrollNextPanel(this);
		}	
	});	
	
	//Saldo negativo	
	$('.btnAceptarSaldoNegativo').click(function(){	
		$('.panelWhereNotification').removeClass('hidden');
		$('.panelBackNextNotification').removeClass('hidden');

		if ($(window).width() < 753) {
			$('.contentDetailNotificacionExtractoMensual').hide();	
			$('.detailNotificacionSaldoNegativo').addClass('panelMovilStep');
			$('.detailNotificacionSaldoNegativo').css('margin-top','0');
			$('.detailNotificacionSaldoNegativo .panel-heading div').removeClass("hidden");
			$(".detailNotificacionSaldoNegativo .panel-heading span").removeClass("hidden");
			$(".detailNotificacionSaldoNegativo .panel-heading span").css('width','auto');
			$(".panelProductNotification .panel-heading span").removeClass("hidden");
			$(".detailNotificacionSaldoNegativo .panel-body ").addClass("hidden");				
		}else{
			scrollNextPanel(this);
		}	
	});		
	
	

	//Al recibir un ingreso
	$('.btnAceptarRecibirIngreso').click(function(){
		if(isNaN($(".inputIngreso").val()) || ($(".inputIngreso").val().length < 1)){
				$('.errorPanel').removeClass('hidden');
		}else{		
			$('.panelWhereNotification').removeClass('hidden');
			$('.panelBackNextNotification').removeClass('hidden');

			if ($(window).width() < 753) {
				$('.detailNotificacionIngreso').addClass('panelMovilStep');
				$('.detailNotificacionIngreso .panel-heading div').removeClass("hidden");
				$(".detailNotificacionIngreso .panel-heading span").removeClass("hidden");		
				$(".detailNotificacionIngreso .panel-body ").addClass("hidden");	
				$(".detailNotificacionIngreso .panel-heading span").css('width','auto');	
			}else{
				scrollNextPanel(this);
			}
		}
		});
	
	
	
	//Al recibir un ingreso desde el extranjero
	$('.btnAceptarRecibirIngresoEx').click(function(){	
		
		if($("input[name='ingreso_extranjero']:checked").val()=="cualquier_ingreso"){
			
			$('.panelWhereNotification').removeClass('hidden');
			$('.panelBackNextNotification').removeClass('hidden');


			$('.detailNotificacionIngresoEx').addClass('panelMovilStep');
			$('.detailNotificacionIngresoEx .panel-heading div').removeClass("hidden");
			$(".detailNotificacionIngresoEx .panel-heading span").removeClass("hidden");		
			$(".detailNotificacionIngresoEx .panel-body").addClass("hidden");	
			$(".detailNotificacionIngresoEx .panel-heading span").css('width','auto');			
			$('.panelWhereNotification').removeClass('hidden');
			$('.panelBackNextNotification').removeClass('hidden');
			$('.detailNotificacionIngresoEx').css('margin-top','0');			
			scrollNextPanel(this);
			
		}else if($("input[name='ingreso_extranjero']:checked").val()=="superior_a"){
			if(isNaN($(".importeEx").val()) || ($(".importeEx").val().length < 1)){
				$('.errorPanel').removeClass('hidden');
				$('.errorPanel').show();
			}else{
				$('.panelWhereNotification').removeClass('hidden');
				$('.panelBackNextNotification').removeClass('hidden');
				if ($(window).width() > 751) {
					scrollNextPanel(this);
				}
			}
			
		}else{
			alert('Debe seleccionar una opción primero');
		}						
	});
	
	//Al tener una cartera de inversión
	$('.btnAceptarCarteraInversion').click(function(){	
		$('.panelWhereNotification').removeClass('hidden');
		$('.panelBackNextNotification').removeClass('hidden');

		if ($(window).width() < 753) {
			$('.contentDetailNotificacionSaldoNegativo').hide();	
			$('.detailNotificacionCarteraInversion').addClass('panelMovilStep');
			$('.detailNotificacionCarteraInversion').css('margin-top','0');
			$('.detailNotificacionCarteraInversion .panel-heading div').removeClass("hidden");
			$(".detailNotificacionCarteraInversion .panel-heading span").removeClass("hidden");
			$(".detailNotificacionCarteraInversion .panel-heading span").css('width','auto');
			$(".panelProductNotification .panel-heading span").removeClass("hidden");		
			$(".detailNotificacionCarteraInversion .panel-body ").addClass("hidden");				
		}else{
			scrollNextPanel(this);
		}
	});			
	
	//Al realizar un pago
	$('.btnAceptarRealizarPago').click(function(){	
		if(isNaN($(".realizarPago").val()) || ($(".realizarPago").val().length < 1)){
			$('.errorPanel').removeClass('hidden');
			$('.errorPanel').show();
		}else{
			$('.panelWhereNotification').removeClass('hidden');
			$('.panelBackNextNotification').removeClass('hidden');	

			if ($(window).width() < 753) {
				$('.contentDetailNotificacionSaldoNegativo').hide();	
				$('.detailNotificacionRecibirPago').addClass('panelMovilStep');
				$('.detailNotificacionRecibirPago').css('margin-top','0');
				$('.detailNotificacionRecibirPago .panel-heading div').removeClass("hidden");
				$(".detailNotificacionRecibirPago .panel-heading span").removeClass("hidden");
				$(".detailNotificacionRecibirPago .panel-heading span").css('width','auto');
				$(".panelProductNotification .panel-heading span").removeClass("hidden");		
				$(".detailNotificacionRecibirPago .panel-body ").addClass("hidden");				
			}else{
				scrollNextPanel(this);
			}
		}
	});
	
	//Al cobrarse un recibo
	$('.btnAceptarRecibo').click(function(){
		var resultSelectRecibo= $(".multiselectPagoRecibos").val();	
		if(resultSelectRecibo == null){
			alert('Debe seleccionar una o varias opciones');
		}else{
			$('.panelWhereNotification').removeClass('hidden');
			$('.panelBackNextNotification').removeClass('hidden');	

			if ($(window).width() < 753) {
				$('.contentDetailNotificacionSaldoNegativo').hide();	
				$('.detailNotificacionCobrarRecibo').addClass('panelMovilStep');
				$('.detailNotificacionCobrarRecibo').css('margin-top','0');
				$('.detailNotificacionCobrarRecibo .panel-heading div').removeClass("hidden");
				$(".detailNotificacionCobrarRecibo .panel-heading span").removeClass("hidden");
				$(".detailNotificacionCobrarRecibo .panel-heading span").css('width','auto');
				$(".panelProductNotification .panel-heading span").removeClass("hidden");		
				$(".detailNotificacionCobrarRecibo .panel-body ").addClass("hidden");				
			}else{
				scrollNextPanel(this);
			}
		}
		
	});

	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////
});