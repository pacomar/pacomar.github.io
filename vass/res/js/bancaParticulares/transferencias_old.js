$(document).ready(function() { 

	// //////////______________________________TRANSFERENCIAS______________________________________________________

	// /////////// Rensponsive - Volver de pasos a normal al maximizar - Transferencias /////////////////////
	$(window).resize(function() {
						if ($(window).width() >= 751) {
							$(".panelFromTransfer  .panel-body").show();
							$(".panelFromTransfer  .panel-heading span").addClass("hidden");
							$(".panelForTransfer  .panel-body").show();
							$(".panelForTransfer  .panel-heading span").addClass("hidden");
							$(".panelAmountTransfer  .panel-body").show();
							$(".panelAmountTransfer  .panel-heading span").addClass("hidden");
							$(".panelObservationsTransfer  .panel-body").show();
							$(".panelFromTransfer").removeClass("panelMovilStep");
							$(".panelForTransfer").addClass("hidden-xs").removeClass("panelMovilStep");
							$(".panelAmountTransfer").addClass("hidden-xs").removeClass("panelMovilStep");
							$(".btnNextAmountTransfer").addClass("hidden");
							$(".panelObservationsTransfer").addClass("hidden-xs").removeClass("panelMovilStep");
							$(".panelBackNextTransfer").addClass("hidden-xs");
							$(".myItem").removeClass("item");
						} else {
							$(".myItem").addClass("item");
						}
					});

	if ($(window).width() >= 751) {
		$(".myItem").removeClass("item");
	}
	// ///////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// /////////// Quitar el padding-top al panel que tenga boxes dentro /////////////////////
	$(".boxTransfer").closest('.panel-body').css('padding-top',0);
	
	// /////////// Boxes - Transferencias /////////////////////
	$(".boxTransfer").click(function() {
						
						if ($(this).hasClass("Visa")){
							$(".forTransfer .boxTransfer").addClass("boxDesactive");
							$(".boxTransfer").removeClass("boxActive");
							$("span.Selected").remove();
							$(".secondaryBoxes").hide();

						}
						if ($(this).not(".Visa").parents(".FromTransfer").length) {
							$(".boxTransfer").removeClass("boxDesactive");
						}
						// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias /////////////////////
						if ($(window).width() <= 750) {
							if ($(this).parents(".FromTransfer").length) {
								$(".panelFromTransfer  .panel-body").hide();
								$(".panelFromTransfer  .panel-heading span").removeClass("hidden");
								$(".panelForTransfer").removeClass("panelMovilStep");
								$(".panelForTransfer  .panel-body").show();
								$(".panelForTransfer").removeClass("hidden-xs");
								$(".panelFromTransfer").addClass("panelMovilStep");												
								if ($(this).hasClass("Visa")){
									$(".forTransfer .boxTransfer").addClass("boxDesactive");
									$(".panelForTransfer  .panel-body").hide();
									$(".panelForTransfer  .panel-heading span").removeClass("hidden");
									$(".panelAmountTransfer").removeClass("panelMovilStep");
									$(".panelAmountTransfer  .panel-body").show();
									$(".panelAmountTransfer").removeClass("hidden-xs");
									$(".btnNextAmountTransfer").removeClass("hidden");
									$(".panelForTransfer").addClass("panelMovilStep");	
								}
							}
							if ($(this).parents(".forTransfer").length) {
								if (!$(this).hasClass("boxSelected")) {
									$(".panelForTransfer  .panel-body").hide();
									$(".panelForTransfer  .panel-heading span").removeClass("hidden");
									$(".panelAmountTransfer").removeClass("panelMovilStep");
									$(".panelAmountTransfer  .panel-body").show();
									$(".panelAmountTransfer").removeClass("hidden-xs");
									$(".btnNextAmountTransfer").removeClass("hidden");
									$(".panelForTransfer").addClass("panelMovilStep");
								}
							}
							if ($(this).parents(".secondaryBoxes").length) {
								$(".panelForTransfer  .panel-body").hide();
								$(".panelForTransfer  .panel-heading span").removeClass("hidden");
								$(".panelAmountTransfer").removeClass("panelMovilStep");
								$(".panelAmountTransfer  .panel-body").show();
								$(".panelAmountTransfer").removeClass("hidden-xs");
								$(".btnNextAmountTransfer").removeClass("hidden");
								$(".panelForTransfer").addClass("panelMovilStep");
							}
						}

						// ////// Añadir Borde al Box Seleccionado ////////////////////////
						var className = $(this).parent().parent().attr('class');
						var classBoxes = className.split(' ');
						var classBoxesTotal = "."
								+ classBoxes[0] + "."
								+ classBoxes[1];
						
						if (!$(this).hasClass('boxDesactive')){
							
							if($(this).closest('.secondaryBoxes').hasClass('detailsContacts')){
								$('.secondaryBoxes.detailsContacts .boxActive').removeClass("boxActive");
							}else{
								$(classBoxesTotal).find(".boxActive").removeClass("boxActive");
							}
							$(this).addClass("boxActive");
						}
						
						// ////////////////////////////////////////////////////////////////
						
						// ////// Condición Visa y eCuenta o Cuenta Compartida ////////////////////////
						if ($(".Visa").hasClass("boxActive") && ($(".boxSharedAccount").hasClass("boxActive") || $(".boxDesactive").hasClass("boxActive"))) {
					        $(".panelObservationsTransfer").hide();
					        $(".convertTransferPeriodic").hide();
					        $(".optionTransferInter").hide();
					        $(".maximumAmount").show();
					       
					    } else {
					    	$(".panelObservationsTransfer").show();
					    	$(".convertTransferPeriodic").show();
					    	$(".maximumAmount").hide();
					    	if ($(".transferencia_iternacional").is(":checked")) {
					    		$(".optionTransferInter").hide();
					    	}
					    	$(".transferencia_iternacional").attr('checked', false);
					    }
						// ////////////////////////////////////////////////////////////////

						// ////////// Añadir flecha al Box seleccionado ///////////////////
						if ($(this).hasClass("boxSelected") && !$(this).hasClass('boxDesactive')) {
							$(classBoxesTotal).find(".Selected").remove();
							$(this).append("<span class='Selected'></span>");
						} else {
							if (!$(this).hasClass('boxDesactive')){
								$(classBoxesTotal).find(".Selected").remove();
							}
							
							if (classBoxes[1] == "forTransfer") {
								$(".detailsContacts").hide();
								$(".detailsNewBeneficiary").hide();
								$(".boxes.forTransfer:last-child").removeAttr(".margin-top");
							}
						}
						// ////////////////////////////////////////////////////////////////
		   
	});
	
	$(".btnNewContactTransfer").click(function() {
				$(".panelForTransfer .panel-heading span").removeClass("hidden");
				$(".panelForTransfer  .panel-body").hide();
				$(".panelAmountTransfer").removeClass("hidden-xs");
				$(".panelAmountTransfer").removeClass("hidden");
				$(".panelForTransfer").addClass("panelMovilStep");
				$(".btnNextAmountTransfer").removeClass("hidden");
				
				if ($(".transferencia_iternacional").is(":checked")) {
					 $(".convertTransferPeriodic").hide();
					 $(".optionTransferInter").show();
					}
				else {
					$(".convertTransferPeriodic").show();
					$(".optionTransferInter").hide();
				}
	});
	
	$(".btnNextAmountTransfer").click(function() {
				$(".panelAmountTransfer  .panel-heading span").removeClass("hidden");
				$(".btnNextAmountTransfer").addClass("hidden");
				$(".panelAmountTransfer  .panel-body").hide();
				$(".panelObservationsTransfer").removeClass("hidden-xs");
				$(".panelBackNextTransfer").removeClass("hidden-xs");
				$(".panelAmountTransfer").addClass("panelMovilStep");	
	});

	// /////////// Rensponsive - Volver sobre cualquier paso en movil - Transferencias
	$(".panelFromTransfer > .panel-heading").click(function() {
				if ($(window).width() <= 750) {
					$(this).find("span").addClass("hidden");
					$(".panelForTransfer > .panel-heading").find("span").addClass("hidden");
					$(".panelAmountTransfer > .panel-heading").find("span").addClass("hidden");
					$(this).parent().removeClass("panelMovilStep");
					$(this).next().show();
					$(".btnNextAmountTransfer").addClass("hidden");
					$(".panelBackNextTransfer").addClass("hidden-xs");
					$(".panelForTransfer").addClass("hidden-xs");
					$(".panelAmountTransfer").addClass("hidden-xs");
					$(".panelObservationsTransfer").addClass("hidden-xs");
				}
			});
	$(".panelForTransfer > .panel-heading").click(function() {
				if ($(window).width() <= 750) {
					$(this).find("span").addClass("hidden");
					$(".panelAmountTransfer > .panel-heading").find("span").addClass("hidden");
					$(this).parent().removeClass("panelMovilStep");
					$(this).next().show();
					$(".btnNextAmountTransfer").addClass("hidden");
					$(".panelBackNextTransfer").addClass("hidden-xs");
					$(".panelAmountTransfer").addClass("hidden-xs");
					$(".panelObservationsTransfer").addClass("hidden-xs");
				}
			});
	$(".panelAmountTransfer > .panel-heading").click(function() {
				if ($(window).width() <= 750) {
					$(this).find("span").addClass("hidden");
					$(this).parent().removeClass("panelMovilStep");
					$(this).next().show();
					$(".btnNextAmountTransfer").removeClass("hidden");
					$(".panelBackNextTransfer").addClass("hidden-xs");
					$(".panelObservationsTransfer").addClass("hidden-xs");
				}
			});
	// ///////////////////////////////////////////////////////////////////////////////

	// //////// Ocultar/Mostrar Nuevo Beneficiario o Contactos nuevos - Transferencias
	
	
		$(".Contacts").click(function() {
			if (!$(this).hasClass('boxDesactive')){
			$(".detailsNewBeneficiary").hide();
			$(".detailsContacts").removeClass("hidden");
			$(".detailsContacts").show();
			}
		});
		$(".newBeneficiary").click(function() {
			if (!$(this).hasClass('boxDesactive')){
			$(".detailsContacts").hide();
			$(".detailsNewBeneficiary").removeClass("hidden");
			$(".detailsNewBeneficiary").show();
			}
		});
	
	// /////////////////////////////////////////////////////////////////////////////////
	
	

	// //////// Ocultar/Mostrar Transferencia Internacional - Transferencias					
	$('.transferencia_iternacional').change(function() {
		$(".formTransferInternacional").slideToggle(500);
		$(".btn_whatIsIban").toggle();
		$(".convertTransferPeriodic").toggle();
		$(".optionTransferInter").toggle();
		$('.addressBeneficiary').slideToggle(250);
		$('.anadir_contactos').closest('div.checkbox').toggle();
	});
	$('.transferencia_nacional').change(function() {
		$(".formTransferInternacional").slideToggle(500);
		$(".btn_whatIsIban").toggle();
		$(".convertTransferPeriodic").toggle();
		$(".optionTransferInter").toggle();
		$('.addressBeneficiary').slideToggle(250);
		$('.anadir_contactos').closest('div.checkbox').toggle();
	});
	// ////////////////////////////////////////////////////////

	// //////// Ocultar/Mostrar Convertir a periodicas - Transferencias
	$('.convertTransfer').change(function() {
		$(".formTransferPeriodic").slideToggle(500);
	});
	// ////////////////////////////////////////////////////////////////
	
	
	// //////// Ocultar/Mostrar opciones avanzadas - Transferencias
	$('.moneda').change(function() {
		if($('.moneda').val() != 'eur'){
			$(".formTypeChange").slideDown(500);
		}else{
			$(".formTypeChange").slideUp(500);
		}
	});
	/*$('.opcionesAvanzadas').change(function() {
		$(".formTypeChange").slideToggle(500);
	});*/
	// ////////////////////////////////////////////////////////////////

	// //////// Ocultar/Mostrar LOPD - Transferencias  /////////////////
	$('.showTransferLopd > a').click(function() {
		$('.transferLopd').slideToggle(500);
	});
	// ////////////////////////////////////////////////////////////////

	// //////// Ocultar/Mostrar Numeros de las coordenadas - Transferencias
	$(".codeCoordinate").click(function() {
		$(".textCode").slideToggle();
	});
	// ////////////////////////////////////////////////////////////////

	// //////// Borrar campo Codigo Coordenadas - Transferencias
	$(".deleteCodeCoordenate").click(function() {
		$('.codeCoordinate').val('');
	});
	// ////////////////////////////////////////////////////////

	// //////// interacción swipe del carrusel  ///////////////////////////////
	function swipeSlideLeft(){
		$('.carousel').carousel('next').carousel('pause');
	}
	function swipeSlideRight(){
		$('.carousel').carousel('prev').carousel('pause');
	}
	if($(".carousel").length){
		$(".carousel").on('swipeleft',swipeSlideLeft).on('swiperight',swipeSlideRight);
	}

	// ////////////////////////////////////////////////////////////////
	
	// claves banco / ciudad banco
	$('.adicionalData').change(function(){
		if($('.adicionalData:checked').val() == 'claves'){
			$('.claves *').prop('disabled',false);
			$('.ciudad *').prop('disabled',true);
		}else{
			$('.claves *').prop('disabled',true);
			$('.ciudad *').prop('disabled',false);
		}
	});
	// ////////////////////////////////////////////////////////////////	
	
	// /////////// Datapicker Bootstrap - Transferencias
    if($('.datepickericon').length){
    	$('.datepickericon').datepicker({
	    	language: 'es',
	        format: "dd/mm/yyyy",
	        weekStart: 1,
	        startDate: "0d",
	        //endDate: "+24m",
	        autoclose: true,
	        todayHighlight: true
	    });
    }
	// /////////////////////////////////////////////////////////

	// //////////______________________________CONTACTOS______________________________________________________
	/* eliminar fila cuando se acepta la eliminación del contacto en el modal */
	if($('.rowSummary button.btnRemove').length){
		$('.rowSummary button.btnRemove').click(function(){
			$(this).parents('.rowSummary').addClass('temp');
		});
	}

	if($('.deleteRow').length){
		$('.deleteRow').click(function(){
			$('.rowSummary.temp').hide();
		});
		$('.myModalDeleteRow').on('hidden.bs.modal', function (e) {
			$('.rowSummary.temp').removeClass('temp');
		});
	}

});