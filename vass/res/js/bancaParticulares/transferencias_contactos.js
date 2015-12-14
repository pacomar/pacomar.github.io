$(document).ready(function() {

  // colocación del footer absolute o static dependiendo de la altura de los contenidos
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
      //para todas las páginas excepto acceso clientes y home
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

  // //////// Versión clásica sólo para tablet y móvil
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.footer .footerLinks li .classicVersion').closest('li').show();
  } else {
    $('.footer .footerLinks li .classicVersion').closest('li').hide();
  }

  // //////////______________________________TRANSFERENCIAS______________________________________________________


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
    $(".comboDivisas").hide();
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
    
    if ($(this).is("[id^='visa_']")){
    	$(".toHalcash").css("pointer-events", "none").addClass("boxDesactive");
    } else {
    	$(".toHalcash").css("pointer-events", "auto").removeClass("boxDesactive");
    	
    }

    addBorderToBox(this);
    if ($(window).width() > 751) {
      scrollNextPanel(this);
    }
    contentSize();

  });

  //var destinatarioHalCash;
  $(".panelForTransfer .boxTransfer").click(function(){
    if (!$(this).hasClass('boxDesactive')){
      $('.detailsNewBeneficiary, .detailsBeneficiaryHalCash, .panelDetailsBeneficiary, .panelDetailsDelivery, .detailsContacts, .panelAmountTransfer, .panelObservationsTransfer, .backNextPanel').addClass('hidden');
      resetAllTransferencias();

      if($(this).hasClass("newBeneficiary")){
        $('.detailsNewBeneficiary').removeClass('hidden').removeClass('hidden-xs');
      }else if($(this).hasClass("Contacts")){
        $('.detailsContacts').removeClass('hidden').removeClass('hidden-xs');
      }else if($(this).hasClass("toHalcash")){
        $('.detailsBeneficiaryHalCash').removeClass('hidden').removeClass('hidden-xs');
      /*}else if($(this).hasClass("Cajero")){
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
        $('.panelDetailsBeneficiary').removeClass('hidden').removeClass('hidden-xs');*/
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
        } else if($('.detailsBeneficiaryHalCash').is(':visible')){
          var posDetailsBeneficiaryHalCash = $('.detailsBeneficiaryHalCash').offset().top - 60;
          $("html,body").animate({scrollTop: posDetailsBeneficiaryHalCash});
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
    if($(this).hasClass("toHalcash")) {
    	$('.detailsBeneficiaryHalCash').removeClass('hidden').removeClass('hidden-xs');
    } else {
    	$('.detailsBeneficiaryHalCash').addClass('hidden hidden-xs');
    	$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
    }

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
  function validateOnBlur(inputText, panelError){
    if(!$(inputText).val()){
      $("#"+panelError).show();
      $(inputText).focus();
    }
  }
  $('.inputNameBeneficiary').on('blur',function(){
    validateOnBlur(this,'transferF\\:panelErrorBeneficiario');
  });
  $('.inputIban').on('blur',function(){
    validateOnBlur(this,'transferF\\:panelErrorIban');
  });
  $('.inputSwift').on('blur',function(){
    validateOnBlur(this,'transferF\\:pnlErrorSwift');
  });
  /*$('.amount').on('blur',function(){
    validateOnBlur(this,'transferF\\:panelErrorImporte');
  });*/
  $('.claveTextArbitraje').on('blur',function(){
    validateOnBlur(this,'transferF\\:pnlErrorClaveArbitraje');
  });

  // //////// botones aceptar
  function acceptNewBeneficiary(){
    var ok = true;
    var iban = $("[id='transferF:IBANInput']").val();
    if(!iban || iban.length < 24 || !isNaN(iban.substring(0,2)) || isNaN(iban.substring(2))){
       ok = false;
       $("[id='transferF:panelErrorIban']").show();
    }
    if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional') && (!$('.inputSwift').val())){
      alert('Debe introducir la dirección SWIFT/BIC');
      ok = false;
    }
    if(!$('.inputNameBeneficiary').val()){
      $("[id='transferF:panelErrorBeneficiario']").show();
      ok = false;
    }
    if(ok) {
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


  /*
  function acceptAmmount(){
    // /////////// Validación
    var ok = true;
    var importe = $('.amount').val();
    if(!importe || isNaN(importe)){
      $("[id='transferF:panelErrorImporte']").show();
      ok = false;
    }
    if($('.convertTransfer').is(':checked') && !$('input[id="transferF\\:fechaInicioPeriodica"]').val()){
      $("[id='transferF\\:fechaInicioPeriodicaPanelError']").show();
      ok = false;
    }
    if($('.convertTransfer').is(':checked') && !$('input[name="transferF\\:periodicidad"]').is(':checked')){
      $("[id='transferF\\:periodicidadPanelError']").show();
      ok = false;
    }
    if($('.convertTransfer').is(':checked') && !$('input[name="transferF\\:duracion"]').is(':checked')){
      $("[id='transferF\\:duracionPanelError']").show();
      ok = false;
    }
    if($('.convertTransfer').is(':checked') && $('input[name="transferF\\:duracion"]:checked').val() == 'FECHA_HASTA' && !$('input[id="transferF\\:fechaFinPeriodica"]').val()){
      $("[id='transferF\\:fechaFinPeriodicaPanelError']").show();
      ok = false;
    }
//		}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional' && $('.opcionesAvanzadas').is(':checked')) && (!$('input[name="tipocambio"]:checked').val())){
//			alert('Debe seleccionar el tipo de cambio');
//		}else if(($('input[name="tipocambio"]:checked').val() == 'seguroCambios') && !$('.codigoSeguro').val()){
//			alert('Debe indicar el código del seguro');
//		}else if(($('input[name="tipocambio"]:checked').val() == 'claveArbitrajes') && !$('.claveTextArbitraje').val()){
//			alert('Debe indicar la clave de arbitraje');
    if(ok){
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
  */

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
  //$(".btnAceptarAmmount").click(acceptAmmount);
  $(".btnAceptarOtroFondo").click(acceptOtroFondo);

  // //////// insertar seguro de cambio desde el modal
  $('.tableResponsiveSecurityChange table td:first-child a').click(function(){
    var securityCode = $(this).html();
    $('.codigoSeguro').val(securityCode);
    $('.myModalSeguro').modal('hide');
  });

  // //////// iniciar carrusel de contactos abierto en pc
  if ($(window).width() > 751) {
    $(".myItem").removeClass("item");
  }

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
      $(".comboDivisas").hide();
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
      $(".comboDivisas").show();
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
          //startDate: "0d",
          //endDate: "+24m",
          autoclose: true,
          todayHighlight: true
      }).on('show', function(ev){
    	  $(".datepicker.datepicker-dropdown.dropdown-menu .day.active").removeClass("active today");
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

  // /////////// Click en cabeceras de panel en móvil - Transferencias
  $(".panel-heading").click(function(){
    if($('.panelFromTransfer').length){//lo hacemos independiente del script de notificaciones
      var cabecera =  $(this);
      if ($(window).width() < 751 && cabecera.closest('.panel').is('.panelMovilStep')) {
    	var cabeceraPanel = cabecera.closest('.panel');
    	var panelesSiguientes = cabeceraPanel.nextAll('.panel');
    	
    	cabecera.closest('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show();
    	cabecera.find('> span').addClass('hidden');
    	
    	if (cabeceraPanel.hasClass("panelForTransfer")) {
    		var panelParaActivo = cabeceraPanel.find('.boxActive');
    		var panelRelacionado = null;
    		if( panelParaActivo.hasClass("newBeneficiary")) {
    		  panelRelacionado = $(".detailsNewBeneficiary");
  			} else if(panelParaActivo.hasClass("Contacts")) {
  			  if ($(".detailsContacts .boxActive").hasClass("toHalcash")) {
  				$(".detailsContacts").removeClass("hidden hidden-xs");
  				panelRelacionado = $(".detailsBeneficiaryHalCash");  
  			  } else {
  				panelRelacionado = $(".detailsContacts");  
  			  }
  			} else if(panelParaActivo.hasClass("newBeneficiaryHalcash") || panelParaActivo.hasClass("toMyselfHalcash")) {
  			  panelRelacionado = $(".detailsBeneficiaryHalCash");
  			}
    		if (panelRelacionado) {
    		  panelRelacionado.removeClass("panelMovilStep hidden hidden-xs");
    		  panelRelacionado.find('.panel-body').show();
    		  panelRelacionado.find('.panel-heading > span').addClass('hidden');
    		  panelesSiguientes = panelRelacionado.nextAll('.panel');
    		}
    	}
        panelesSiguientes.removeClass('panelMovilStep').addClass('hidden');
    	panelesSiguientes.find('.panel-heading > span').addClass('hidden');
    	panelesSiguientes.find('.panel-body').show();
        //$(this).closest('.panel').find('.boxActive').removeClass('boxActive');
        //$(this).closest('.panel').nextAll('.panel').find('.boxActive').removeClass('boxActive');
        //resetAllTransferencias();
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
