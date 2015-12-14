$(document).ready(function() {

	// //////////______________________________TRASPASO FONDOS______________________________________________________
	function resetAllFunds(){
		$('.asociateNewFund, .clasesFunds, .panelAmountTransfer, .panelAmountTransfer2, .panelSimilarFunds, .panelFusionFunds, .panelFormFunds, .panelFormResultFunds, .alert-info, .backNextPanel').addClass('hidden');
		$('.panelAmountTransfer, .panelAmountTransfer2, .panelFormFunds').find('input[type="text"]').val('');
		$('.panelAmountTransfer, .panelAmountTransfer2, .panelFormFunds, .panelFormResultFunds').find('input[type="checkbox"]').attr('checked', false);
		$('.panelSimilarFunds, .panelFusionFunds, .panelFormFunds').find('input[type="radio"]').attr('checked', false);
		$('.panelFormFunds').find('select option:first-child').prop('selected', true);
	}

	if($(".boxSearchSecondFunds").length){
		$(".boxSearchSecondFunds").hide();
	}
	$(".showSearchSecondFund").click(function() {
		if ($('.boxSearchSecondFunds').is(':visible')) {
			$(".boxSearchFirstButtonFunds").show();
			$(".boxSearchSecondButtonFunds").show();
			$(".boxSearchFirstInput").addClass("col-lg-8").removeClass("col-lg-12").addClass("col-md-8").removeClass("col-md-12");
			$(".boxSearchFirstLabel").addClass("col-lg-8").removeClass("col-lg-12");
		} else {
			$(".boxSearchFirstButtonFunds").hide();
			$(".boxSearchSecondButtonFunds").hide();
			$(".boxSearchFirstInput").removeClass("col-lg-8").addClass("col-lg-12").removeClass("col-md-8").addClass("col-md-12");
			$(".boxSearchFirstLabel").removeClass("col-lg-8").addClass("col-lg-12").removeClass("col-md-8").addClass("col-md-12");
		}								
		$(".boxSearchSecondFunds").slideToggle();
		$(".addonBackground").toggleClass("addonBackgroundFinish");
	});					
	
	$('.boxSearchFirstButtonFunds').click(function(){
		$('.boxSearchFirstFieldsetFunds').hide();
		$('.boxEditSearchFunds').slideToggle();
	});
	
	$(".btSearchFundsBottom").click(function() {
		$(".boxSearchFirstFieldsetFunds").hide();
		$(".boxSearchSecondFunds").hide();
		$(".boxEditSearchFunds").slideToggle();
	});
	
	$('.btnEditSearchButtonChangeFunds').click(function(){
		$('.boxSearchFirstButtonFunds').show();
		$('.boxEditSearchFunds').hide();
		$('.boxSearchFirstFieldsetFunds').slideToggle();
		$(".boxSearchFirstInput").addClass("col-lg-8").removeClass("col-lg-12").addClass("col-md-8").removeClass("col-md-12");
		$(".boxSearchFirstLabel").addClass("col-lg-8").removeClass("col-lg-12").addClass("col-md-8").removeClass("col-md-12");						
	});
	
	$('.btnEditSearchButtonCancelFunds').click(function(){
		window.location.reload();
	});
	
	if($('.tableFunds .boxEditSearchFunds').length){
		$('.boxEditSearchFunds').hide();
	}
	
	if($('.tableFunds tr.rowDetailsFunds').length){
		$('.tableFunds tr.rowDetailsFunds').hide();
	}
	
	if($('.rowDetailsFunds').length){
		$('.rowDetailsFunds').hide();
	}
	if($('.tableFunds .subTable').length){
		$('.tableFunds .subTable tr:not(:first-child)').hide();
	}
	/* comportamiento responsive */
	$('.tableFunds').on('click','.pinned tbody > .rowSummary',function(){
		var numRow = $(this).index();
		if(!$(this).hasClass('openedDetails')){
			$('.tableFunds .subRowSummary').removeClass('openedDetails');
			if(!$(this).hasClass('subTable')){
				$('.subTable').removeClass('openedDetails').find('tr.groupFundsHead').nextAll().removeClass('openedDetails').hide();
				$('.tablePanel.tableFunds .tableResponsiveSecurityChange .pinned').css('position','relative').css('width','100%');
				$('.scrollable').hide();
				$(this).addClass('openedDetails').find('.rowDetailsFunds').show();
			}else{
				$('.tableFunds .rowSummary').not('.subTable').removeClass('openedDetails').find('.rowDetailsFunds').hide();
				$(this).find('tr.groupFundsHead').nextAll().removeClass('openedDetails').show();
				$('.scrollable').find('.rowSummary:nth-child(' + (numRow + 1) + ')').find('.groupFundsHead td').css('display','table-cell').css('text-indent','-9999px').css('background-color','#ededed');
				$('.scrollable').find('.rowSummary:nth-child(' + (numRow + 1) + ')').find('.subRowSummary').css('display','table-row').find('td').css('display','table-cell');
				$('.scrollable').find('.rowSummary:nth-child(' + (numRow + 1) + ')').find('.subRowSummary').css('display','table-row').find('td table td:first-child').css('display','none');
				$(this).addClass('openedDetails');
			}							
		}else{
			$('.tableFunds .subRowSummary').removeClass('openedDetails');
			if($(this).hasClass('subTable')){
				$('.subTable.openedDetails').each(function(){
					$(this).addClass('openedDetails');
				});
				$('.scrollable').find('.rowSummary:nth-child(' + (numRow + 1) + ')').find('.groupFundsHead td').css('display','none').css('text-indent','0').css('background-color','#ffffff');
				$('.scrollable').find('.rowSummary:nth-child(' + (numRow + 1) + ')').find('.subRowSummary').css('display','table-row').find('td').css('display','none');
				$(this).find('tr.groupFundsHead').nextAll().removeClass('openedDetails').hide();
			}
			$(this).removeClass('openedDetails').find('.rowDetailsFunds').hide();
			$('.scrollable').find('.rowSummary').find('.groupFundsHead td').css('background-color','#ffffff');
			$('.tablePanel.tableFunds .tableResponsiveSecurityChange .pinned').css('position','absolute').css('width','50%');
			$('.scrollable').show();
		}
		$('.tableFunds .pinned .subRowSummary .rowDetailsFunds').hide();
		contentSize();
	});
	
	$('.tableFunds').on('click','.pinned .subTable .subRowSummary',function(){
		$(this).siblings('.subRowSummary').removeClass('openedDetails').find('.rowDetailsFunds').hide();
		$(this).toggleClass('openedDetails').find('.rowDetailsFunds').toggle();
		$('.tablePanel.tableFunds .tableResponsiveSecurityChange .pinned').css('position','relative').css('width','100%');
		$('.scrollable').hide();
		//$('.tablePanel.tableFunds .tableResponsiveSecurityChange .pinned').css('position','absolute').css('width','50%');
		//$('.scrollable').hide();
		contentSize();
		return false;
	});
	
	$('.tableFunds').on('click','.scrollable .rowSummary',function(){
		return false;
	});
	/* fin comportamiento responsive */
	
	$('.tableFunds .rowSummary').click(function(){
		if(!$(this).hasClass('openedDetails')){
			if($(this).hasClass('subTable')){
				$('.tableFunds .rowDetailsFunds').hide();
				$('.tableFunds .rowSummary').not('.subTable').removeClass('openedDetails');
				$(this).addClass('openedDetails').find('tr.groupFundsHead').nextAll().removeClass('openedDetails').toggle();
			}else{
				$('.tableFunds .rowDetailsFunds').hide();
				$('.tableFunds .rowSummary').removeClass('openedDetails').find('tr.groupFundsHead').nextAll().hide();
				$(this).addClass('openedDetails').find('.rowDetailsFunds').toggle();
			}
		}else{
			if($(this).hasClass('subTable')){
				$(this).removeClass('openedDetails').find('tr.groupFundsHead').nextAll().toggle();
			}else{
				$(this).removeClass('openedDetails').find('.rowDetailsFunds').toggle();
			}
		}
		contentSize();
	});
	$('.tableFunds tr.rowDetailsFunds').click(function(){
		$(this).toggleClass('openedDetails').toggle().prev('.tableFunds .rowSummary').toggleClass('openedDetails');
		contentSize();
	});
	$('.tableFunds .subRowSummary').click(function(){
		$(this).siblings('.subRowSummary').removeClass('openedDetails').find('.rowDetailsFunds').hide();
		$(this).toggleClass('openedDetails').find('.rowDetailsFunds').toggle();
		contentSize();
		return false;
	});
	
	$('.amountTransferFirstFund').keyup(function(){
		if($(this).val()){
			$('.panelSimilarFunds').removeClass('hidden');
		}else{
			$('.panelSimilarFunds').addClass('hidden');
		}
		contentSize();
	});
	
	$('input.similarFunds').change(function(){
		$('.panelForTransfer, .panelFusionFunds').addClass('hidden');
	});
	$('.btnAceptarSimilarFunds').click(function(){
		if($('input.similarFunds:checked').val() == 'otherClases'){
			$('.panelForTransfer:not(.asociateNewFund)').removeClass('hidden');
			$('.panelFusionFunds').addClass('hidden');
		}else if($('input.similarFunds:checked').val() == 'thisFund'){
			$('.panelFusionFunds').removeClass('hidden');
			$('.panelForTransfer:not(.asociateNewFund').addClass('hidden');
		}
		scrollNextPanel(this);
	});
	
	$('input.fusionFund').change(function(){
		$('.panelFormFunds').addClass('hidden');
	});
	$('.btnAceptarFusionFunds').click(function(){
		if($('input.fusionFund:checked').val() == 'continueThisFund'){
			$('.panelFormFunds').removeClass('hidden');
		}else if($('input.fusionFund:checked').val() == 'fusionResult'){
			window.location.reload();
		}
		scrollNextPanel(this);
	});
	
	$('.btnAceptarFormFunds').click(function(){
		$('.panelFormResultFunds').removeClass('hidden');
		scrollNextPanel(this);
	});
	
	$('.btnContinueBuy').click(function(){
		$('.panelFormResultFunds').find('hr').removeClass('hidden');
		$('.panelFormResultFunds').find('.checkbox').removeClass('hidden');
		$('.panelFormResultFunds').find('.textoConfirm').removeClass('hidden');
		$('.alert-info, .backNextPanel').removeClass('hidden');
		scrollNextPanel(this);
	});
	
	var participaciones;
	$('.amountTransfer').keyup(function(){
		if($(this).val()){
			$('.mensaje1, .mensaje2, .plusvalía').removeClass('hidden');
			participaciones = 200;
			$('.participaciones').html(participaciones + ' participaciones');
			$('.backNextPanel').removeClass('hidden');
		}else{
			$('.mensaje1, .mensaje2, .plusvalía').addClass('hidden');
			participaciones = 0;
			$('.participaciones').html(participaciones + ' participaciones');
			$('.backNextPanel').addClass('hidden');
		}
	});
	
	$('.transferAll').change(function(){
		if($(this).is(':checked')){
			$('.amountTransfer').prop( "disabled", true );
			//$('.amountTransfer').val('1000');
			participaciones = '';
			$('.participaciones').html(participaciones + ' participaciones');
			$('.mensaje2 span').html(0);
			$('.mensaje2').removeClass('hidden');
			$('.backNextPanel').removeClass('hidden');
		}else{
			//$('.mensaje2 span').html(200);
			$('.mensaje2').addClass('hidden');
			$('.amountTransfer').prop( "disabled", false );
		}
	});
	
	$('.partOtraEntidad').change(function(){
		$('.mensaje3').toggleClass('hidden');
	});
	
	$('.btnAceptarAmmountTransfer').click(function(){
		if($('.amountTransfer').val()){
			if($('.panelObservationsTransfer').length){
				$('.panelObservationsTransfer').removeClass('hidden');
			}else{
				$('.backNextPanel').removeClass('hidden');
			}
			scrollNextPanel(this);
		}else{
			alert('Debe indicar un importe');
			$(this).focus();
		}
	});
	
	/*$('.otraOperacion').change(function(){
		if($('input[name="otraOperacion"]:checked').val() == 'si'){
			$('.backNextPanel .btnArrowNext').html('Hacer otro traspaso');
			$('form').prop('action','traspaso_fondos_multi.html');
		}else{
			$('.backNextPanel .btnArrowNext').html('Siguiente');
			$('form').prop('action','traspaso_firma.html');
		}
		$('.backNextPanel').removeClass('hidden');
	});*/
	
	// /////////// Organización de diapositivas en carrusel /////////////////////
	function organizarCarrusel(carrusel){
		$(carrusel).find('.carousel-inner .item > div.boxFunds').unwrap();//se extraen los fondos de las diapositivas iniciales
		$(carrusel).find('.carousel-indicators li').remove();//se eliminan los indicadores inferiores iniciales(botones de navegación)
		var fundsBoxes = new Array();
		fundsBoxes = $(carrusel).find('div.boxFunds:not(.hidden)');//se contabiliza el número de fondos
		var numBoxesPerItem;
		if($(window).width() < 768){//el número de fondos que se quiera meter en cada slide según dispositivo
			numBoxesPerItem = 2;
		}else{
			numBoxesPerItem = 6;
		}
		
		//cambiamos la distribucion del carrusel para el carrusel que tenga la clase .myCarouselTransferTo
		if ($('.carousel').hasClass("myCarouselTransferTo")){
			if($(window).width() < 768){
				numBoxesPerItem = 2;
			}
		}
		
		var numItems = Math.ceil(fundsBoxes.length/numBoxesPerItem);//se calcula en número de diapositivas necesarias
		
		for(i=0;i<numItems;i++){//se crean los contenedores-diapositivas y los indicadores inferiores (botones de navegación)
			$(carrusel).find('.carousel-inner').prepend('<div class="item"></div>');
			//myCarouselTransferFrom +  myCarouselTransferTo
			$(carrusel).find('.carousel-indicators').append('<li data-target="'+carrusel+'" data-slide-to="'+i+'"></li>');
			//$(carrusel).find('.carousel-indicators').append('<li data-target=".myCarouselTransferFrom" data-slide-to="'+i+'"></li>');
		}
		
		var itemBoxes = new Array();
		itemBoxes = $(carrusel).find('.carousel-inner .item');
		
		var contador = 1;
		var n = 0;
		for(i=0;i<fundsBoxes.length;i++){//cada contenedor-diapositiva se rellena de los fondos correspondientes
			$(itemBoxes[n]).append(fundsBoxes[i]);
			contador++;
			if(contador > numBoxesPerItem){
				contador = 1;
				n++;
			}
		}
		$(carrusel).find('.carousel-inner .item:first-child').addClass('active');//se inicializa la primera diapositiva como activa
		$(carrusel).find('.carousel-indicators li:first-child').addClass('active');//se inicializa el primer indicador como activo
		
		$(carrusel).find('.carouselPagination .currentSlide').html(1);
		$(carrusel).find('.carouselPagination .totalSlides').html(numItems);
		
		if(numItems < 2){//evitamos que sólo haya un único indicador inferior
			$(carrusel).find('.carousel-control').hide();
			$(carrusel).find('.carousel-indicators').hide();
		}else{
			$(carrusel).find('.carousel-control').show();
			$(carrusel).find('.carousel-indicators').show();
		}
	}
	
	$(window).resize(function(){//inicializa la reorganización en window resize
		if($('.funds .carousel').length){
			organizarCarrusel('.myCarouselTransferFrom');
			organizarCarrusel('.myCarouselTransferTo');
		}
	});
	if($('.funds .carousel').length){//inicializa la reorganización
		organizarCarrusel('.myCarouselTransferFrom');
		organizarCarrusel('.myCarouselTransferTo');
	}
	
	$('.searchFundsFrom').keyup(function(){//detecta el cambio en el campo de búsqueda y lo compara con el título del fondo
		var searchContent = $(this).val().toLowerCase();
		$(this).closest('.panel').find('.carousel div.boxFunds').each(function(){
			var titleContent = $(this).find('h5').html().toLowerCase();
			if(titleContent.indexOf(searchContent) >= 0){
				$(this).removeClass('hidden');
			}else{
				$(this).addClass('hidden');
			}
		});
		organizarCarrusel('.myCarouselTransferFrom');
		organizarCarrusel('.myCarouselTransferTo');
	});
	
	$('.funds .carousel').on('slid.bs.carousel', function () {//control de la visibilidad de los botones siguiente y anterior para las slides inicial y final
		  var numSlideActive = $(this).find('.item.active').index();
		  var numSlideTotal = $(this).find('.item').length;
		  $(this).find('.carouselPagination .currentSlide').html(numSlideActive+1);
		  $(this).find('.carouselPagination .totalSlides').html(numSlideTotal);
		  //alert('totales '+numSlideTotal+'\n actual '+numSlideActive);
		  if(numSlideActive == (numSlideTotal-1)){
			  $(this).find('.carousel-control.right').hide();
			  $(this).find('.carousel-control.left').show();
		  }else if(numSlideActive == 0){
			  $(this).find('.carousel-control.left').hide();
			  $(this).find('.carousel-control.right').show();
		  }else{
			  $(this).find('.carousel-control.right, .carousel-control.left').show();
		  }
		});
	
	// /////////////////////////////////////////////////////////
	// /////////////////////////////////////////////////////////
	
//////////______________________________FONDOS______________________________________________________

	
	// /////////// Boxes - Transferencias /////////////////////
	function resetAllTransferencias(){
		
		$('.panelAmountTransfer, .detailsNewBeneficiary, .panelObservationsTransfer').find('input[type="text"]').val('');
		$('.panelAmountTransfer, .detailsNewBeneficiary').find('input[type="checkbox"]').attr('checked', false);
		$('.panelAmountTransfer').find('select option:first-child').prop('selected', true);
		$('.detailsNewBeneficiary').find('.transferencia_nacional').prop('checked', true);
		$('.detailsNewBeneficiary').find('.transferencia_internacional').prop('checked', false);
		$('.formTypeChange').find('input[type="radio"]').prop('checked', false);
		$(".formTransferInternacional").hide();
		$(".btn_whatIsIban").show();
		$(".formTransferPeriodic ").hide();
		$(".optionTransferInter").hide();
	}
	
	function addBorderToBox(element){
		if(!$(element).hasClass('boxDesactive')){
			$(element).addClass("boxActive");
		}
	}
	
	$(".panelFromTransfer .boxTransfer").click(function(){
		$('.detailsNewBeneficiary, .panelDetailsBeneficiary, .panelDetailsDelivery, .detailsContacts, .panelAmountTransfer, .panelObservationsTransfer, .backNextPanel').addClass('hidden');
		resetAllTransferencias();
		
		if ($(this).hasClass("Visa")){
			$(".forTransfer .boxTransfer").addClass("boxDesactive");
			$("span.Selected").remove();
			$(".secondaryBoxes").hide();
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
			if ($(window).width() <= 751) {
				$(".panelFromTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".panelFromTransfer .panel-body").hide();
				$(".panelForTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".panelForTransfer .panel-body").hide();
			}
			$(".boxTransfer").removeClass("boxActive");
			$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
			$(".panelForTransfer .boxTransfer.boxSharedAccount").removeClass('boxDesactive').addClass("boxActive");
			
			$('.panelForTransfer').removeClass('hidden').removeClass('hidden-xs');
		}else if($(this).closest('.panelFromTransfer').hasClass('buyFirstFund')){
			$(".buyFirstFund .boxTransfer").removeClass("boxActive");
			$('.fromAccount').addClass('hidden');
			$('.fromFund').addClass('hidden');
			$('.fromOtherFund').addClass('hidden');
			resetAllFunds();
			if($(this).hasClass('yourAccounts')){
				$('.fromAccount').removeClass('hidden');
			}else if($(this).hasClass('yourFunds')){
				$('.fromFund').removeClass('hidden');
			}else if($(this).hasClass('otherFunds')){
				$('.fromOtherFund').removeClass('hidden');
			}
			scrollNextPanel(this);
		}else if($(this).closest('.panelFromTransfer').hasClass('fromAccount')){
			$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
		}else if($(this).closest('.panelFromTransfer').hasClass('fromFund')){
			$('.panelAmountTransfer2').removeClass('hidden').removeClass('hidden-xs');
		}else if($(this).hasClass('mostrarEntidad')){
			$('.entidad').removeClass('hidden');
			addBorderToBox(this);
			return false;
		}else{
			if(!$(this).closest('.boxFunds').length){
				$(".forTransfer .boxTransfer").removeClass("boxDesactive");
			}
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
			if ($(window).width() <= 751) {
				$(".panelFromTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".panelFromTransfer .panel-body").hide();
			}
			$(".boxTransfer").removeClass("boxActive");
			
			$('.panelForTransfer').removeClass('hidden').removeClass('hidden-xs');
		}
		
		addBorderToBox(this);
		if ($(window).width() > 751) {
			scrollNextPanel(this);
		}
		contentSize();
		
	});
	
	var destinatarioHalCash;
	$(".panelForTransfer .boxTransfer").click(function(){
		if (!$(this).hasClass('boxDesactive')){							
			$('.detailsNewBeneficiary, .panelDetailsBeneficiary, .panelDetailsDelivery, .detailsContacts, .panelAmountTransfer, .panelObservationsTransfer, .backNextPanel').addClass('hidden');
			resetAllTransferencias();
			
			if($(this).hasClass("newBeneficiary")){
				$('.detailsNewBeneficiary').removeClass('hidden').removeClass('hidden-xs');
			}else if($(this).hasClass("Contacts")){
				$('.detailsContacts').removeClass('hidden').removeClass('hidden-xs');
			}else if($(this).hasClass("Cajero")){
				if($(this).hasClass('aMiMismo')){
					destinatarioHalCash = 'A mí mismo';
					$('.panelDetailsBeneficiary').find('input[name="telefono"]').val('600000000');
					$('.panelDetailsBeneficiary').find('.langSMS').hide();
					$('.recordatorioClave').hide();
				}else{
					destinatarioHalCash = 'new';
					$('.panelDetailsBeneficiary').find('input[name="telefono"]').val('');
					$('.panelDetailsBeneficiary').find('.langSMS').show();
					$('.recordatorioClave').show();
				}
				$('.panelDetailsBeneficiary').removeClass('hidden').removeClass('hidden-xs');
			}else if($(this).closest('.forTransfer').hasClass('fundClases')){
				$('.panelFusionFunds').removeClass('hidden');
				$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
				scrollNextPanel(this);
			}else if($(this).closest('.panelForTransfer').hasClass('asociateNewFund')){
				$('.panelAmountTransfer2').removeClass('hidden');
			}else{
				$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
				// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
				if ($(window).width() <= 751) {									
					$(".panelForTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
					$(".panelForTransfer .panel-body").hide();
				}
				
			}
			
			$(".panelForTransfer .boxTransfer").removeClass("boxActive");
			
			addBorderToBox(this);
			
			if($('.fusionAlert').length){
				$('.fusionAlert').removeClass('hidden');
			}

			if ($(window).width() > 751) {
				scrollNextPanel(this);
			}else{
				if($('.detailsNewBeneficiary').is(':visible')){
					var posDetailsNewBenef = $('.detailsNewBeneficiary').offset().top - 60;
					$("html,body").animate({scrollTop: posDetailsNewBenef});
				}else if($('.detailsContacts').is(':visible')){
					var posDetailsContact = $('.detailsContacts').offset().top - 60;
					$("html,body").animate({scrollTop: posDetailsContact});
				}else if($('.panelDetailsBeneficiary').is(':visible')){
					var posDetailsBenef = $('.panelDetailsBeneficiary').offset().top - 60;
					$("html,body").animate({scrollTop: posDetailsBenef});
				}
				
			}
			contentSize();
		}
	});
	
	$('.panelDetailsDelivery .setAmount').click(function(){
		$('input.amount').val($(this).html());
	});
	
	$(".myCarouselContacts .boxTransfer").click(function(){
		$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
		$(".myCarouselContacts .boxTransfer").removeClass('boxActive');
		// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
		if ($(window).width() <= 751) {
			$(".panelForTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
			$(".panelForTransfer .panel-body").hide();
			$('.detailsContacts').addClass('hidden');
		}
		addBorderToBox(this);
		if ($(window).width() > 751) {
			scrollNextPanel(this);
		}
		contentSize();
	});
	
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
	
	// paginación de carrusel
	if($('.myCarouselContacts').length){
		var numSlideActiveContact = $('.myCarouselContacts').find('.item.active').index();
		var numSlideTotalContact = $('.myCarouselContacts').find('.item').length;
		$('.myCarouselContacts .carouselPagination .currentSlide').html(numSlideActiveContact+1);
		$('.myCarouselContacts .carouselPagination .totalSlides').html(numSlideTotalContact);
	}
	$('.myCarouselContacts').on('slid.bs.carousel', function () {//control de la visibilidad de los botones siguiente y anterior para las slides inicial y final
		var numSlideActiveContact = $('.myCarouselContacts').find('.item.active').index();
		var numSlideTotalContact = $('.myCarouselContacts').find('.item').length;
		$('.myCarouselContacts').find('.carouselPagination .currentSlide').html(numSlideActiveContact+1);
		  $('.myCarouselContacts').find('.carouselPagination .totalSlides').html(numSlideTotalContact);
		  //alert('totales '+numSlideTotalContact+'\n actual '+numSlideActiveContact);
		});
	
	// //////// validación de input tipo text en evento blur
	function validateOnBlur(inputText,mensaje){
		if(!$(inputText).val()){
			alert(mensaje);
			$(inputText).focus();
		}
	}
	$('.inputNameBeneficiary').on('blur',function(){
		validateOnBlur(this,'Debe introducir el nombre del beneficiario');
	});
	$('.inputIban').on('blur',function(){
		validateOnBlur(this,'Debe introducir el código IBAN');
	});
	$('.inputSwift').on('blur',function(){
		validateOnBlur(this,'Debe introducir el código SWIFT');
	});
	$('.amount').on('blur',function(){
		validateOnBlur(this,'Debe introducir el importe');
	});
	$('.claveTextArbitraje').on('blur',function(){
		validateOnBlur(this,'Debe indicar la clave de arbitraje');
	});
	
	// //////// botones aceptar
	function acceptNewBeneficiary(){
		if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_nacional') && !$('.inputIban').val()){
			alert('Debe introducir el código IBAN');
		}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional') && (!$('.inputIban').val())){
			alert('Debe introducir el código IBAN');
		}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional') && (!$('.inputSwift').val())){
			alert('Debe introducir la dirección SWIFT/BIC');
		}else if(!$('.inputNameBeneficiary').val()){
			alert('Debe introducir el nombre del beneficiario');
		}else {
			$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
			if ($(window).width() <= 751) {
				$(".panelForTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".panelForTransfer .panel-body").hide();
				$('.detailsNewBeneficiary').addClass('hidden');
			}
			if ($(window).width() > 751) {
				scrollNextPanel(this);
			}
		}
	}
	
	function acceptAmmount(){
		// /////////// Validación
		if(!$('.amount').val()){
			alert('Debe indicar un importe');
		}else if($('.convertTransfer').is(':checked') && (!$('input[name="perioricidad"]').is(':checked') || !$('input[name="duracion"]').is(':checked'))){
			alert('Debe indicar una perioricidad y una duración');
		}else if($('.convertTransfer').is(':checked') && ($('input[name="duracion"]:checked').val() == 'hasta') && !$('.datepickericon').val()){
			alert('Debe indicar una fecha de finalización');
		}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional' && $('.opcionesAvanzadas').is(':checked')) && (!$('input[name="tipocambio"]:checked').val())){
			alert('Debe seleccionar el tipo de cambio');
		}else if(($('input[name="tipocambio"]:checked').val() == 'seguroCambios') && !$('.codigoSeguro').val()){
			alert('Debe indicar el código del seguro');
		}else if(($('input[name="tipocambio"]:checked').val() == 'claveArbitrajes') && !$('.claveTextArbitraje').val()){
			alert('Debe indicar la clave de arbitraje');
		}else{
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
			if ($(window).width() <= 751) {
				$(".panelAmountTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".panelAmountTransfer  .panel-body").hide();
			}
			$('.panelObservationsTransfer').find('.help-block').html('Podrá mandar un mail o sms de confirmación al beneficiario al terminar el proceso de transferencia.');
			$('.panelObservationsTransfer, .backNextPanel').removeClass('hidden').removeClass('hidden-xs');
			if ($(window).width() > 751) {
				scrollNextPanel(this);
			}
		}
		
	}					
	function acceptBeneficiary(){
			$('.panelDetailsDelivery').removeClass('hidden').removeClass('hidden-xs');
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
			if ($(window).width() <= 751) {
				$(".panelForTransfer").addClass("panelMovilStep").find('.panel-heading > span').html($('select[name="prefijoPais"]').find('option:selected').val()+' '+$('input[name="telefono"]').val()).removeClass('hidden');
				$(".panelForTransfer .panel-body").hide();
				$('.panelDetailsBeneficiary').addClass('hidden');
				$('.backNextPanel').removeClass('hidden, hidden-xs');
				$("html,body").animate({scrollTop: 0});
			}
			if ($(window).width() > 751) {
				scrollNextPanel(this);
			}
	}
	
	function acceptDelivery(){
			$('.panelObservationsTransfer').find('.help-block').html('Podrá indicar si quiere que le informemos por mail o sms de la situación del envío al terminar el proceso de transferencia.');
			if(destinatarioHalCash == 'A mí mismo'){
				$('.panelObservationsTransfer').find('input.observations').val(destinatarioHalCash);
			}else{
				$('.panelObservationsTransfer').find('input.observations').val('');
			}
			$('.panelObservationsTransfer').removeClass('hidden').removeClass('hidden-xs');
			$('.backNextPanel').removeClass('hidden');
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
			if ($(window).width() <= 751) {
				$(".panelDetailsDelivery").addClass("panelMovilStep").find('.panel-heading > span').html($('.panelDetailsDelivery input[name="cantidad"]').val()+'€' ).removeClass('hidden');
				$(".panelDetailsDelivery .panel-body").hide();
				$("html,body").animate({scrollTop: 0});
			}
			if ($(window).width() > 751) {
				scrollNextPanel(this);
			}
	}
	
	function acceptOtroFondo(){
		$('.asociateNewFund').removeClass('hidden').removeClass('hidden-xs');
		scrollNextPanel(this);
	}
	
	$(".btnAceptarNewBeneficiary").click(acceptNewBeneficiary);
	$(".btnAceptarBeneficiary").click(acceptBeneficiary);
	$(".btnAceptarDelivery").click(acceptDelivery);
	$(".btnAceptarAmmount").click(acceptAmmount);
	$(".btnAceptarOtroFondo").click(acceptOtroFondo);
	
	
	// //////// insertar seguro de cambio desde el modal
	$('.tableResponsiveSecurityChange table td:first-child a').click(function(){
		var securityCode = $(this).html();
		$('.codigoSeguro').val(securityCode);
		$('.myModalSeguro').modal('hide');
	});
	
	// //////// iniciar carrusel de contactos abierto en pc
	/*if ($(window).width() > 751) {
		$(".myItem").removeClass("item");
	}*/
	
	// //////// Ocultar/Mostrar Transferencia Internacional - Transferencias					
	$('.transferencia_nac_internac').change(function() {
		$('.formTransferInternacional').slideToggle(500);
		$('.btn_whatIsIban').toggle();
		$('.panelAmountTransfer').addClass('hidden');
		$('.addressBeneficiary').slideToggle(250);
		
		if($('.transferencia_nac_internac:checked').val() == 'transferencia_nacional'){
			$('.moneda').addClass('hidden');
			$('.euroSimbol').removeClass('hidden').closest('.input-group').css('width','auto');
			$(".optionTransferInter").hide();
			$('.convertTransferPeriodic').show();
			$('.opcionesAvanzadas').prop('checked',false);
			$('.opcionesAvanzadas').prop('checked',false);
			$('.formTypeChange input[type="radio"]').prop('checked',false);
			$(".formTypeChange").hide();
			$('.anadir_contactos').closest('div.checkbox').show();
		}else if($('.transferencia_nac_internac:checked').val() == 'transferencia_iternacional'){
			$('.moneda').removeClass('hidden');
			$('.euroSimbol').addClass('hidden').closest('.input-group').css('width','100%');
			$(".optionTransferInter").show();
			$('.convertTransferPeriodic').hide();
			$('.anadir_contactos').closest('div.checkbox').hide();
		}
		
		contentSize();
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
	if($('.caducidad').length){
		$('.caducidad').datepicker({
	    	language: 'es',
	        format: "dd/mm/yyyy",
	        weekStart: 1,
	        startDate: "0d",
	        /*endDate: "40m",*/
	        autoclose: true,
	        todayHighlight: true
		});
	}
	// ////////////////////////////////////////////////////////////////
	
	// /////////// scroll a paso siguiente
	function scrollNextPanel(elementClick){
		if($('.panelFromTransfer').length || $('.funds').length){//lo hacemos independiente del script de notificaciones
			var posBottomPanel = $(elementClick).closest('.panel').offset().top;
			var posNextPanel = posBottomPanel + $(elementClick).closest('.panel').outerHeight() - 30;
			$("html,body").animate({scrollTop: posNextPanel});
		}
	}
	
	//////////////////////////////////////////////////////////////////
	
	// /////////// Click en cabeceras de panel en móvil - Fondos
	$(".panel-heading").click(function(){
		if($('.panelFromTransfer').length){//lo hacemos independiente del script de notificaciones
			if ($(window).width() < 751 && $(this).closest('.panel').is('.panelMovilStep')) {
				$(this).closest('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show();
				$(this).find('> span').addClass('hidden');
				$(this).closest('.panel').nextAll('.panel').removeClass('panelMovilStep').addClass('hidden');
				$(this).closest('.panel').nextAll('.panel').find('.panel-heading > span').addClass('hidden');
				$(this).closest('.panel').nextAll('.panel').find('.panel-body').show();
				$(this).closest('.panel').find('.boxActive').removeClass('boxActive');
				$(this).closest('.panel').nextAll('.panel').find('.boxActive').removeClass('boxActive');
				resetAllTransferencias();
				contentSize();
			}
		}
	});
	// ////////////////////////////////////////////////////////////////
	
	// /////////// Rensponsive - Volver de pasos a normal al maximizar - Transferencias
	$(window).resize(function(){
		if($('.panelFromTransfer').length){//lo hacemos independiente del script de notificaciones
			if ($(window).width() >= 751){
				$('.panelMovilStep').find('.panel-heading > span').addClass('hidden');
				$('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show();
			}
			if ($(window).width() < 751){
				$('.boxTransfer.boxActive').closest('.panel').addClass('panelMovilStep').find('.panel-body').hide();
				$('.boxTransfer.boxActive').closest('.panel').find('.panel-heading > span').removeClass('hidden');
				
			}
		}
		
	});
	// ////////////////////////////////////////////////////////////////

	// /////////// Click en cabeceras de panel en móvil - Fondos					
	$(".panel-heading").click(function(){
		if('.panelFromTransfer'){//lo hacemos independiente del script de notificaciones						
			if ($(window).width() < 751 && $(this).closest('.panel').is('.panelMovilStep')) {							
				$(this).closest('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show();
				$(this).find('> span').addClass('hidden');
			}
		}
	});
	// ////////////////////////////////////////////////////////////////

	// colocaciÃ³n del footer absolute o static dependiendo de la altura de los contenidos
	function contentSize(){
		var bodyHeight = $("body").outerHeight(true);
		var footerHeight = $("footer.footer").outerHeight(true);
		var totalHeight = footerHeight;
		if($("body").hasClass("home")){
			//para acceso clientes y home
			if($(".carousel").length){//altura del carrusel
    			var carouselHeight = bodyHeight - 90;
    			$(".carousel").css("height",carouselHeight+"px");
    		}
			
			if($(".login").length){
				var loginHeight = $(".login").outerHeight(true); 
				totalHeight += loginHeight;
			}
			var articleHeight = $(".article").outerHeight(true);
			totalHeight += articleHeight;
			
		}else{
			//para todas las pÃ¡ginas excepto acceso clientes y home
			var headContainerHeight = $(".headContainer").outerHeight(true);
			totalHeight += headContainerHeight;
			
			if($(".breadcrumb").length && $(".breadcrumb").closest('nav').css('display')=='block'){
				var breadCrumbsHeight = $(".breadcrumb").outerHeight(true);
				totalHeight += breadCrumbsHeight;
			}
			
			var articleHeight = $(".article").outerHeight(true);
			totalHeight += articleHeight;
			
			if($(".mainMenuContent").length){
				var mainMenuContentHeight = $(".mainMenuContent ").outerHeight(true);
				totalHeight += mainMenuContentHeight;
			}
			//alert("totalHeight: "+totalHeight+"\nbody: "+bodyHeight)
		}
		
		if(totalHeight < bodyHeight){
			$("footer.footer").addClass("absoluteFooter");
		}else{
			$("footer.footer").removeClass("absoluteFooter");							
		}
	}
						
	contentSize();
	$(window).resize(contentSize);
	// ////////////////////////////////////////////////////////////////	
	
});