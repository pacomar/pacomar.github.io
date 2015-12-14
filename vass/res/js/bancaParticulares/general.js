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
	
	// //////// Poner mayúsculas la primera letra en texto de error
	if($('.errorText').length){
		$('.errorText').each(function(){
			var errorText = $(this).html();
			if(errorText.indexOf('.') > 0){
				var cadenasTexto = errorText.split('.');
				var cadenaTotal = "";
				for(i=0;i<cadenasTexto.length;i++){
					cadenasTexto[i] = cadenasTexto[i].toLowerCase();
					if(i == 0){
						cadenasTexto[i] = cadenasTexto[i].substring(0,1).toUpperCase() + cadenasTexto[i].substring(1);
						cadenaTotal = cadenaTotal + cadenasTexto[i];
					}else{
						cadenasTexto[i] = cadenasTexto[i].substring(0,2).toUpperCase() + cadenasTexto[i].substring(2);
						cadenaTotal = cadenaTotal + '. ' + cadenasTexto[i];
					}
				}
				errorText = cadenaTotal;
			}else{
				errorText = errorText.toLowerCase();
				errorText = errorText.substring(0,1).toUpperCase() + errorText.substring(1);
			}
			$(this).html(errorText);
		});
	}
	
	// //////// Poner > y mayúsculas la primera letra en input type submit y type button para los componentes jsf
	if($('input[type="submit"]').length || $('input[type="button"]').length){
		$('input[type="submit"]').each(function(){
			var valueInput = $(this).attr('value');
			if(typeof valueInput != 'undefined'){
				if(!$(this).hasClass('noMayusc')){
					valueInput = valueInput.toLowerCase();
					valueInput = valueInput.substring(0,1).toUpperCase() + valueInput.substring(1);
				}
				if($(this).hasClass('btnArrowPrev')){
					valueInput = '‹ ' + valueInput;
				}else if($(this).hasClass('btnArrowNext')){
					valueInput = valueInput + ' ›';
				}
				$(this).attr('value',valueInput);
			}
		});
		$('input[type="button"]').each(function(){
			var valueInput = $(this).attr('value');
			if(typeof valueInput != 'undefined'){
				if(!$(this).hasClass('noMayusc')){
					valueInput = valueInput.toLowerCase();
					valueInput = valueInput.substring(0,1).toUpperCase() + valueInput.substring(1);
				}
				if($(this).hasClass('btnArrowPrev')){
					valueInput = '‹ ' + valueInput;
				}else if($(this).hasClass('btnArrowNext')){
					valueInput = valueInput + ' ›';
				}
				$(this).attr('value',valueInput);
			}
		});
	}
	
	// //////// Formato cuenta interna para número de cuenta
	$('.formatoInterno').each(function(){
		var contenidoNum = $(this).html();
		if(contenidoNum.indexOf('/') >= 0 || contenidoNum.indexOf(' ') >= 0 || contenidoNum.indexOf('.') >= 0){
			contenidoNum = contenidoNum.replace('/','');
			contenidoNum = contenidoNum.replace(' ','');
			contenidoNum = contenidoNum.replace('.','');
		}
		var sliceNum01 = contenidoNum.substring(0,4);
		var sliceNum02 = contenidoNum.substring(4,8);
		var sliceNum03 = contenidoNum.substring(8,10);
		var sliceNum04 = contenidoNum.substring(10,17);
		$(this).html(sliceNum01+'/'+sliceNum02+'/'+sliceNum03+'.'+sliceNum04);
	});
	
	// //////// Capitalizado para los datos del aside
	$('.text-capitalize').each(function(){
		var allCapsText = $(this).html();
		allCapsText = allCapsText.toLowerCase();
		$(this).html(allCapsText).css('text-transform','capitalize');
	});
	
	
// ************************************
	
// /////////////////////////////////////////////////////
	
	//funcines para llamar al traker de ga. el id del mensaje se extrae de la url
	
	$.urlParam = function (name) {
	    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    if (results != null)
	     return results[1] || 0;
	    else
	     return results;
	    //return results != null ? results[1] || 0 : results;
	   }
	

	var callGA = function() {

		var idGA =   $.urlParam('idMensaje');

		if(idGA == null || typeof idGA == "undefined" || idGA == ''){
				idGA ='CONFIRMADO';
			}
				
			try{
			    ga('create', 'UA-9003287-21', 'auto');
				v_url=idGA;
				v_url = v_url + "?url=" + document.referrer;
				
			 	ga('send', 'pageview', {'page': v_url});
						
				var id_attr = null;
				if (window.location.hash) {
			  		id_attr = window.location.hash.match(/ID=([^&]+)&attr=([^&]+)/);
			 	}
			 	if(!id_attr && window.location.search){
			  	  id_attr = window.location.search.match(/ID=([^&]+)&attr=([^&]+)/);
			 	}	             
				if(id_attr){
					ga('send', 'event', 'promociones internas', id_attr[1], id_attr[2]);
				}
			  } catch(err) {
				  
			  }
	};
	
	
	// ////// Animación bk_barrita de alerta y cambio de colores para pestaña
	if($('.alertHeader').length){
		$('.alertHeader').hide().delay(500).slideDown(125, callGA());
		
		var alertaTransferencias=$(".alertHeader").css("display");
		
		if(alertaTransferencias=="block"){
			$(".backgroundActive").addClass("backgroundActiveBrown");
		}else{
			$(".mainMenu li").removeClass("backgroundActiveBrown");
			
		}
		
		$(".alertHeaderClose, .alertHeader .text-center .btn-primary").click(function(){
			$(".mainMenu li").removeClass("backgroundActiveBrown");
			$(".alertHeader").hide();
		});
	}
	// /////////////////////////////////////////////////////
	
	// ////// Scroll Más operaciones 
	$(".scrollMoreoperations").click(function() {
		var position = ($(".Operations").offset().top)-75;
		$('html,body').animate({scrollTop: position});
	});
	
	// /////////////////////////////////////////////////////
	
	
	// //////// botones debajo de primer panel en móvil con igual altura
	function equalHeightBtn(btns) {
		if($(window).width() < 769){
			btnTallest = 0;
			btns.each(function(){
				thisBtnHeight = $(this).outerHeight();
				if(thisBtnHeight > btnTallest) {
					btnTallest = thisBtnHeight;
				}
			});
			btns.outerHeight(btnTallest);
		}
	}
	equalHeightBtn($("section > .panel:first-child + ul.hidden-lg.hidden-md button"));
	equalHeightBtn($("section > .panel:first-child + .alert-info + ul.hidden-lg.hidden-md button"));
	$(window).resize(function() {
		equalHeightBtn($("section > .panel:first-child + ul.hidden-lg.hidden-md button"));
		equalHeightBtn($("section > .panel:first-child + .alert-info + ul.hidden-lg.hidden-md button"));
		});
	// /////////////////////////////////////////////////////
	
	// //////// boxModelBanner con igual altura
	// los elementos se agrupan mediante la clase equalHeight a la capa row que los contiene
	function equalHeight(parent, group) {
		parent.each(function(){
			tallest = 0;
			$(this).find(group).each(function() {
				thisHeight = $(this).height();
				if(thisHeight > tallest) {
					tallest = thisHeight;
				}
			});
			$(this).find(group).height(tallest);
		});
	}
	if($(".equalHeight").length){
		equalHeight($(".equalHeight"), $(".boxEqualHeight"));
		$(window).resize(function() {
			equalHeight($(".equalHeight"), $(".boxEqualHeight"));
			});
	}
	// /////////////////////////////////////////////////////

	
	// //////// Mostrar/Ocultar sombra en header menú móvil
	$(window).scroll(function() {
		var heightScroll = $(window).scrollTop();
		if (heightScroll > 0) {
			$(".headContainer").addClass("headerShadow");						
		} else if (heightScroll == 0) {
			$(".headContainer").removeClass("headerShadow");
		}
	});
	// /////////////////////////////////////////////////////
	
	if($('.btnUser').length || $('.btnUserName').length){
    	$('.btnUser, .btnUserName').each(function(){
    		var literal = $(this).html().toLowerCase();
			var literalArray = literal.split(' ');
			var cadenaTotal = "";
			for(i=0;i<literalArray.length;i++){
				literalArray[i] = literalArray[i].substring(0,1).toUpperCase() + literalArray[i].substring(1);
				cadenaTotal = cadenaTotal + ' ' + literalArray[i]; 
			}
			literal = cadenaTotal;
			$(this).html(literal);
    	});
    }
	
	// //////// Sidr - Menu lateral - http://www.berriart.com/sidr/
    if($('body').hasClass('home')){
        $('.responsive-menu-button').sidr({
                name: 'sidr',
                source : '.navigation, .footerOfficesAndTel',
                onOpen: function(){
                        $('html,body').css('overflow','hidden');
                        $('html,body').css('width','100%');
                },
                onClose: function(){
                        $('html,body').css('overflow','auto');
                }
        });
    }else {
     
      if(!$('.userControls').hasClass('public')){
                    $('.responsive-menu-button').sidr({
                            name: 'sidr',
                            source: '.navigation, .dropdown-menu, .footerOfficesAndTel, .btnDisconnect',
                            onOpen: function(){
                                    $('html,body').css('overflow','hidden');
                                    $('html,body').css('width','100%');
                            },
                            onClose: function(){
                                    $('html,body').css('overflow','auto');
                            }
                    });
                    $('body').on('touchend', function(){
                            var altoBodySidr = $('body').css('height');
                            $('.sidr').css('height',altoBodySidr);
                    });
                    $('.sidr-class-btnUserName').click(function(){
                            $('.sidr-class-menuUser').slideToggle();
                            var heightUser = $('.sidr-class-user').outerHeight();
                            if(heightUser > 55){
                                    $('.sidr-class-user').animate({height: "48px"}, 400);
                            }else{
                                    $('.sidr-class-user').animate({height: "175px"}, 400);
                            }
                            $('.sidr-class-animatedArrow').toggleClass('turned');
                           
                    });
            }else{
            	if($('.userControls li.dropdown-toggle:first-child').length){
            		$('.responsive-menu-button').sidr({
                        name: 'sidr',
                        source : '.userControls li.dropdown-toggle:first-child, .navigation, .footerOfficesAndTel',
                        onOpen: function(){
                                $('html,body').css('overflow','hidden');
                                $('html,body').css('width','100%');
                        },
                        onClose: function(){
                                $('html,body').css('overflow','auto');
                        }
                    });
                    $('body').on('touchend', function(){
                        var altoBodySidr = $('body').css('height');
                        $('.sidr').css('height',altoBodySidr);
                    });
                    $('.publicWhite .sidr-inner:first-child .sidr-class-arrowDownMenu').click(function(){
                            $(this).toggleClass('turned');
                    });
                    $('.sidr-class-arrowDownMenu').click(function(){
                            $('.sidr-class-dropdown-menu').slideToggle();
                            $(this).css('z-index','100000');
                            $('.sidr-class-animatedArrow').toggleClass('turned');
                    });
            	}else{
            		$('.responsive-menu-button').sidr({
                        name: 'sidr',
                        source : '.navigation, .footerOfficesAndTel',
                        onOpen: function(){
                                $('html,body').css('overflow','hidden');
                                $('html,body').css('width','100%');
                        },
                        onClose: function(){
                                $('html,body').css('overflow','auto');
                        }
                    });
                    $('body').on('touchend', function(){
                        var altoBodySidr = $('body').css('height');
                        $('.sidr').css('height',altoBodySidr);
                    });
                    $('.sidr ul li').css('padding-top',0);
            	}
                    
            }
    }
	// /////////////////////////////////////////////////////
	
	
	// //////// Añadir estado hover y toogle del abrir/cerrar
	$(".responsive-menu-button").mouseover(function() {
		   $(this).addClass("hover");
	}).mouseout(function() {
		   $(this).removeClass("hover");
	}).click(function() {
		   $.sidr('toggle', 'sidr');
		   $(this).removeClass("hover").toggleClass("activo");
		   //$('.sidr-class-menuUser').css('height','0');
		   $('.sidr-class-animatedArrow').removeClass('turned');
	});
	
	// //////// Añadir estado hover para móvil
	$('.responsive-menu-button').bind('touchstart', function() {
		$(this).addClass("hover");
	});
	
	$('.responsive-menu-button').bind('touchend', function() {
		$(this).removeClass("hover");
	});

	// //////// Esconde menú al pulsar fuera
	$('.container, footer.footer').click(function() {
		if ($('#sidr').css('display') == 'block') {
			$.sidr('close');
		}
		$(".responsive-menu-button").removeClass("activo");
	});
	// //////////////////////////////////////////////////////////
	

	// //////// Nuevo menú header - Productos Bankinter
	$(".openHeaderDropDownMenu").click(function() {
		if($('.alertHeader').length){
			$(".alertHeader").hide();
		}
		$(".headerDropDownMenu").slideToggle(function(){
			$(".backgroundActive").toggleClass("backgroundActiveWhite");
			$(".mainMenu li").removeClass("backgroundActiveBrown");
		});
	});
	// //////////////////////////////////////////////////////////
	
	
	// /////// Menú desplegable móvil - Más Productos 
	$(".sidr-class-openHeaderDropDownMenu").click(function() {
		var url = $('.menuProductosBankinterSidr a').attr('href');
		location.href = url;
	});
	// //////////////////////////////////////////////////////////
	
	
	// ////// Scroll Cabecera Móvil y Tablet
	$(".breadcrumbMobile").click(function() {
		$('html,body').animate({scrollTop:"0px"}, 300);
	});
	// //////////////////////////////////////////////////////////
	
	
	// //////// Collapse Más Operaciones
	$(".showMoreOperations").hide();
	$(".showMoreOperationsLink").click(function() {
		$('.showMoreOperationsLink > .arrowUp').toggleClass('turned');
		$(".showMoreOperations").slideToggle();			
	});
	$(window).resize(function(){
		if ($(window).width() >= 990) {
			$(".showMoreOperations").hide();
		}
	});
	// /////////////////////////////////////////////////////////////////
	
	// //////// dropdown menú multidato /////////////////////////////////
	if($('.selectpicker').length){
		$('.selectpicker').selectpicker({
    		showSubtext: true
    	});
	}
	// /////////////////////////////////////////////////////////////////
	
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
	function swipeSlideLeft(queCarrusel){
		$(queCarrusel).carousel('next').carousel('pause');
	}
	function swipeSlideRight(queCarrusel){
		$(queCarrusel).carousel('prev').carousel('pause');
	}
	if($(".carousel").length){
		$(".carousel").on('swipeleft',function(){
			swipeSlideLeft(this);
		}).on('swiperight',function(){
			swipeSlideRight(this);
		});
	}

	// ////////////////////////////////////////////////////////////////
	
	// /////////// mostrar/ocultar el siguiente elemento .toggle /////////////////////
	$('input.toggleNext').click(function(){
		$(this).closest('label').next('.toggle').slideToggle();
	});
	$('a.toggleNext').click(function(){
		$(this).closest('div').next('.toggle').slideToggle();
	});
	
	// ////////////////////////////////////////////////////////////////
	
	// /////////// Quitar el padding-top al panel que tenga boxes dentro /////////////////////
	$(".boxTransfer").closest('.panel-body').css('padding-top',0);
	
	// //////////______________________________DATOS CARGANDO - SPINNER______________________________________________________
	var opts = { lines: 9, // The number of lines to draw 
		length: 5, // The length of each line 
		width: 3, // The line thickness 
		radius: 4, // The radius of the inner circle 
		corners: 1, // Corner roundness (0..1) 
		rotate: 0, // The rotation offset 
		direction: 1, // 1: clockwise, -1: counterclockwise 
		color: '#4C4C4C', // #rgb or #rrggbb or array of colors 
		speed: 1, // Rounds per second 
		trail: 50, // Afterglow percentage 
		shadow: false, // Whether to render a shadow 
		hwaccel: true, // Whether to use hardware acceleration 
		className: 'spinner', // The CSS class to assign to the spinner 
		zIndex: 2e9, // The z-index (defaults to 2000000000) 
		top: '42px', // Top position relative to parent in px 
		left: '45px' // Left position relative to parent in px 
	};
			
	if($('.spin').length) {
		var spinElement = new Array();
		spinElement = document.getElementsByClassName("spin");
		for(i=0; i<spinElement.length; i++){
			new Spinner(opts).spin(spinElement[i]);
		}
	}	
	
	// ////////////////////////////////////////////////////////////////
	
	// //////////_____________________________BUG IPHONE / IPAD______________________________________________________							
	function fixBugIOS(){
		if(navigator.platform == 'iPhone' || navigator.platform == 'iPad' || navigator.platform == 'android') {
			if($(window).width() < 990){
				$( document ).ready(function() {    	
					$('input, select, textarea').on('focus',function() {
						$(".headContainer").css({"position":"absolute","top":"0","left":"0"});
					});
					$('input, select, textarea').on('blur',function() {
						$(".headContainer").css({"position":"fixed"});
					});    	   	
				});    	
		   }	
		}
	}
	fixBugIOS();
	$(window).resize(fixBugIOS);
	// ////////////////////////////////////////////////////////////////
		
	
	// //////////______________________________ATTE CLIENTE______________________________________________________
	// ////////// ________________ MOSTRAR/OCULTAR TELÉFONOS SELECT ________________________
	if($(".llamarDesde").length){
		$(".llamarDesde").change(function() {									
			if ($('.int').is(':hidden')){
					$('.int').show();
					$('.nac').hide();						
			}else{
					$('.int').hide();
					$('.nac').show();	
				}	
		});
	};	
	// ////////////////////////////////////////////////////////////////
	
	// //////// Accordion FAQ
	$('.row.collapse').on('shown.bs.collapse', function () {
		contentSize();
	});
	$('.row.collapse').on('hidden.bs.collapse', function () {
		contentSize();
	});
	// /////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////
	
	
	// //////////______________________________DEPÓSITOS Y DETALLE PRODUCTO______________________________________________________
	
	// //////// Cambio Select efecto Tab en Móvil
	$('.seleccionTabDetalleProducto').change(function() {
		$(".tab-pane").removeClass("active").removeClass("in");
		if ($(this).val() == "solapa1") {
			   $(".solapa1").addClass("active").addClass("in");
		}
		if ($(this).val() == "solapa2") {
			   $(".solapa2").addClass("active").addClass("in");
		}
		if ($(this).val() == "solapa3") {
			   $(".solapa3").addClass("active").addClass("in");
		}
		if ($(this).val() == "solapa4") {
			   $(".solapa4").addClass("active").addClass("in");
		}
		if ($(this).val() == "solapa5") {
			   $(".solapa5").addClass("active").addClass("in");
		}
	});
	
	if($(".tab-pane").length){
		$(window).resize(function() {
			var optionActive = $(".tab-pane.active").attr("id");
			$(".tabPublic li").removeClass("active");
			if (optionActive == "solapa1") {
				$(".seleccionTabDetalleProducto").val("solapa1");
				$(".solapa1").addClass("active").addClass("in");
				$(".tabPublic li:nth-of-type(1)").addClass("active");
			}
			if (optionActive == "solapa2") {
				$(".seleccionTabDetalleProducto").val("solapa2");
				$(".solapa2").addClass("active").addClass("in");
				$(".tabPublic li:nth-of-type(2)").addClass("active");
			}
			if (optionActive == "solapa3") {
				$(".seleccionTabDetalleProducto").val("solapa3");
				$(".solapa3").addClass("active").addClass("in");
				$(".tabPublic li:nth-of-type(3)").addClass("active");
			}
			if (optionActive == "solapa4") {
				$(".seleccionTabDetalleProducto").val("solapa4");
				$(".solapa4").addClass("active").addClass("in");
				$(".tabPublic li:nth-of-type(4)").addClass("active");
			}
			if (optionActive == "solapa5") {
				$(".seleccionTabDetalleProducto").val("solapa5");
				$(".solapa5").addClass("active").addClass("in");
				$(".tabPublic li:nth-of-type(5)").addClass("active");
			}
		});
	}

	// scroll a texto de la pregunta
	$('.tableOfContent .linkQuestionAtt').click(function(){
		numQuestion = ($(this).closest('.questionsAtt').index());
		elemAnswer = $('.preguntas').find('.bannerBasic').eq(numQuestion);
		posAnswer = (elemAnswer.offset().top)-15;
		$("html,body").animate({scrollTop: posAnswer});
	});

	// subir scroll a tabla de contenidos
	$(".backToTableOfContent").click(function(){
		var position;
		if($(window).width() < 768){
			position = ($(".preguntas").offset().top)-150;
		}else{
			position = ($(".tabPublic").offset().top)-75;
		}
		$("html,body").animate({scrollTop: position});
	});


	//simulador con plazo a medida + datepicker
	if($('.customize'.length)){
		if($('.plazo').val() != 'A medida'){
			$('.customize').hide();
		}else{
			$('.customize').show();
		}
		$('.plazo').change(function(){
			var valueSelect = this.value;
			if(valueSelect == 'A medida'){
				$('.customize').slideDown(400);
			}else{
				$('.customize').slideUp(400);
			}
		});
		$('.customize').datepicker({
	    	language: 'es',
	        format: "dd/mm/yyyy",
	        weekStart: 1,
	        startDate: "0d",
	        /*endDate: "40m",*/
	        autoclose: true,
	        todayHighlight: true
	    });
	}
	
	if($('.periodicAdd'.length)){
		$('.periodicAdd').hide();
		$('.periodicContribution').change(function(){
			var valueSelect = this.value;
			if(valueSelect == 'Al vencimiento'){
				$('.periodicAdd').slideDown(400);
			}else{
				$('.periodicAdd').slideUp(400);
			}
		});
	}
	
	
	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////
	
	// //////////______________________________INICIO/EXTRACTO______________________________________________________
	
	// /////////// Rensponsive - ancho de la caja boxes en móvil - Inicio					
	function anchoBoxesSortables(panel){
		if ($(window).width() < 751) {
			$(panel).each(function(){
				var elementos=new Array();
				elementos=$(this).find('.boxSortables > li').length;
				var anchuraUnidad=$(this).find('.boxSortables > li').outerWidth(true)
				var anchuraTotal=anchuraUnidad*elementos;
				$(this).find('.boxSortables').css("width",anchuraTotal);
			});
		} else {
			$( ".boxSortables" ).css("width", "auto");
		}  
	}
	
	if($(".accounts").length){anchoBoxesSortables(".accounts");}
	if($(".accountsDetails").length){anchoBoxesSortables(".accountsDetails");}
	if($(".cards").length){anchoBoxesSortables(".cards");}
	if($(".loansSortables").length){anchoBoxesSortables(".loansSortables");}
	if($(".hedgesSortables").length){anchoBoxesSortables(".hedgesSortables");}
	if($(".savingSortables").length){anchoBoxesSortables(".savingSortables");}
	if($(".otherSortables").length){anchoBoxesSortables(".otherSortables");}
	if($(".insurances").length){anchoBoxesSortables(".insurances");}
	if($(".mobiles").length){anchoBoxesSortables(".mobiles");}
	
	$(window).resize(function() {
		if($(".accounts").length){anchoBoxesSortables(".accounts");}
		if($(".accountsDetails").length){anchoBoxesSortables(".accountsDetails");}
		if($(".cards").length){anchoBoxesSortables(".cards");}
		if($(".loansSortables").length){anchoBoxesSortables(".loansSortables");}
		if($(".hedgesSortables").length){anchoBoxesSortables(".hedgesSortables");}
		if($(".savingSortables").length){anchoBoxesSortables(".savingSortables");}
		if($(".otherSortables").length){anchoBoxesSortables(".otherSortables");}
		if($(".insurances").length){anchoBoxesSortables(".insurances");}
		if($(".mobiles").length){anchoBoxesSortables(".mobiles");}
	});


	/*if ($(window).width() >= 977) {
			if($(".panelsSortables").length){
				$( ".panelsSortables").sortable({
					 placeholder: "ui-state-highlight panelSortable",
					 handle: ".zoneSortablePanel"
				});
			}
			if($(".boxSortables").length){
				$( ".boxSortables" ).sortable({
					placeholder: "ui-state-highlight boxSortableDefault",
					items: "> li:not(.ui-state-disabled)",
					handle: ".zoneSortableBox",
					change: function() {
						$(".boxSortableDefault").off( "click" );
						}  
					 });
				}
		
			if($(".panelsSortables").length){
				$( ".boxSortables, .panelsSortables" ).disableSelection();
			}
								
	}*/	    


	// /////////// Progressbar - Inicio 		
	function loadColorProgress(){  		     		
		for(i=1;i<=6;i++){
			var nombre = ".progressbar0"+i;
			var valor = $(nombre).find(".progress-bar").attr("aria-valuenow");
			if (valor < 25){
				$(nombre).find("div").css('background-color', '#e00000');
			}else if (valor < 65){
				$(nombre).find("div").css('background-color', '#ffc703');
			} else{
				$(nombre).find("div").css('background-color', '#2ecc50');
			}
		}
	}
	if($(".progress-bar").length){
		loadColorProgress();    	
	}
	
	// /////////// Flecha indicador de interactividad en móvil - Inicio
    function iniciarFlechasExtracto(){
		$('.boxSortables').each(function(){
    		if($(this).outerWidth(true) > $(window).width()){
    			$(this).closest('.panelSortable').find('.panel-body > .boxAfter').animate({opacity: 1},750);
    			$(this).closest('.panelSubsection').find('> .boxAfter').animate({opacity: 1},750);
    		}else{
    			$(this).closest('.panelSortable').find('.panel-body > .boxAfter').animate({opacity: 0},1);
    			$(this).closest('.panelSubsection').find('> .boxAfter').animate({opacity: 0},1);
    		}
    	});
	}
    if($(window).width() < 768){
    	iniciarFlechasExtracto();
    	$(window).resize(function(){
    		iniciarFlechasExtracto();
    	});
	    $('.panelSortable .maskBoxes').on('scroll',function(){
	    	var anchoBoxSortables, posLeftMask, posRightMask
	    	anchoBoxSortables = $(this).find('.boxSortables').outerWidth(true);
		    posLeftMask = $(this).find('.boxSortables').offset().left;
		    posRightMask = $(window).width() - anchoBoxSortables;
		    if(posLeftMask <= posRightMask){
		    	$(this).closest('.panelSortable').find('.panel-body > .boxBefore').animate({opacity: 1},750);
		    	$(this).closest('.panelSubsection').find('> .boxBefore').animate({opacity: 1},750);
		    	$(this).closest('.panelSortable').find('.panel-body > .boxAfter').animate({opacity: 0},1);
		    	$(this).closest('.panelSubsection').find('> .boxAfter').animate({opacity: 0},1);
		    }else if(posLeftMask >= 0){
		    	$(this).closest('.panelSortable').find('.panel-body > .boxBefore').animate({opacity: 0},1);
		    	$(this).closest('.panelSubsection').find('> .boxBefore').animate({opacity: 0},1);
		    	$(this).closest('.panelSortable').find('.panel-body > .boxAfter').animate({opacity: 1},750);
		    	$(this).closest('.panelSubsection').find('> .boxAfter').animate({opacity: 1},750);
		    }else{
		    	$(this).closest('.panelSortable').find('.panel-body > .boxBefore').animate({opacity: 0},1);
		    	$(this).closest('.panelSubsection').find('> .boxBefore').animate({opacity: 0},1);
		    	$(this).closest('.panelSortable').find('.panel-body > .boxAfter').animate({opacity: 0},1);
		    	$(this).closest('.panelSubsection').find('> .boxAfter').animate({opacity: 0},1);
		    }
    	});
    	
    }

    // ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////

 // //////////______________________________HOME______________________________________________________
	    
	////////// Ver texto legal HOME /////////////////////////////////
	$(".boxLegalContent a").click(function() {
		$(this).closest("p").toggleClass("opened");
		$(this).closest("p").find("br").toggle();
	});
	
	$(".boxLegalContent a").click(function() {
		$(this).closest("ul li").toggleClass("opened");
		$(this).closest("ul li").find("br").toggle();
	});

	////////// scrollTop pestaña HOME /////////////////////////////////
	$(".scroll").click(function() {
		var posicionScrollBody = parseInt($('body').scrollTop());
		if(posicionScrollBody>=400){
			$('html,body').animate({scrollTop:"0px"}, 400);
		}else{
			$('html,body').animate({scrollTop:"400px"}, 400);
		}
		return false;
	});

	////////// desaparición de cookies ///////////////////////////
	/*$("body").click(function(){
		$(".cookies").hide();
	});*/
						

//////////cambio de imágenes del carrusel según dispositivo
	function cambiarImgCarruselHome(){
		var nombreImg = $('.designImg.active > div').css('background-image');
		var posDevice;
		var urlImg;
		if(nombreImg.indexOf('pc')>0){
			posDevice = nombreImg.indexOf('pc');
		}else if(nombreImg.indexOf('tablet')>0){
			posDevice = nombreImg.indexOf('tablet');
		}else if(nombreImg.indexOf('movil')>0){
			posDevice = nombreImg.indexOf('movil');
		}
		
		var nombreImgInicio = nombreImg.slice(0,posDevice);
		var extensionImg = nombreImg.indexOf('.jpg');
		var nombreImgFin = nombreImg.slice(extensionImg);
		var proporcion = $(window).width()/$(window).height();
		
		if ( ($(window).width() < 768) && ($(window).width() <= $(window).height()) ){
			urlImg = nombreImgInicio + 'movil_vertical' + nombreImgFin;
		}else if( ($(window).width() < 768) && ($(window).width() > $(window).height()) ){
			urlImg = nombreImgInicio + 'movil_horizontal' + nombreImgFin;
		}else if( ($(window).width() < 992) && ($(window).width() <= $(window).height()) ){
			urlImg = nombreImgInicio + 'tablet_vertical' + nombreImgFin;
		}else if( ($(window).width() < 992) && ($(window).width() > $(window).height()) ){
			urlImg = nombreImgInicio + 'tablet_horizontal' + nombreImgFin;
		}else if( ($(window).width() >= 1200) && (proporcion <= 1.6) ){
			urlImg = nombreImgInicio + 'pc_grande_4_3' + nombreImgFin;
		}else if( ($(window).width() >= 1200) && (proporcion > 1.6) ){
			urlImg = nombreImgInicio + 'pc_grande_16_9' + nombreImgFin;
		}
		$('.designImg.active > div').css('background-image',urlImg);
		extensionImg = proporcion = nombreImgFin = nombreImgInicio = nombreImg = urlImg = posDevice = "";
	}
	
	// cambio del color de los enlaces del menú superior y el logo según la diapositiva
	function cambioColorCabeceraHome(){
		var classSlide = $('.home .carousel .carousel-inner article.designImg.active > div').attr('class');
		//alert(classSlide)
		switch (classSlide){
			case 'blanco':
				$('.home .topHeader > header').attr('class','blanco');
				$('.home .carousel-control').removeClass('naranja').removeClass('negro').addClass('blanco');
			break;
			case 'naranja':
				$('.home .topHeader > header').attr('class','naranja');
				$('.home .carousel-control').removeClass('blanco').removeClass('negro').addClass('naranja');
    		break;
			case 'negro':
				$('.home .topHeader > header').attr('class','negro');
				$('.home .carousel-control').removeClass('naranja').removeClass('blanco').addClass('negro');
    		break;
		}
	}
	
	if($('.home .designImg').length){
		//cargar las imágenes de inicio
		if($('.typeA').length){
			if($(window).width() < 768){
				$('.home .carousel .carousel-inner .row.designImg.typeA > div').css('background-image','url(/res/img/bancaParticulares/typeA_movil_vertical.jpg)');
			}else if($(window).width() < 992){
				$('.home .carousel .carousel-inner .row.designImg.typeA > div').css('background-image','url(/res/img/bancaParticulares/typeA_tablet_horizontal.jpg)');
    		}else{
    			$('.home .carousel .carousel-inner .row.designImg.typeA > div').css('background-image','url(/res/img/bancaParticulares/typeA_pc_grande_16_9.jpg)');
    		}
		}
		if($('.typeB').length){
			if($(window).width() < 768){
				$('.home .carousel .carousel-inner .row.designImg.typeB > div').css('background-image','url(/res/img/bancaParticulares/typeB_movil_vertical.jpg)');
			}else if($(window).width() < 992){
				$('.home .carousel .carousel-inner .row.designImg.typeB > div').css('background-image','url(/res/img/bancaParticulares/typeB_tablet_horizontal.jpg)');
    		}else{
    			$('.home .carousel .carousel-inner .row.designImg.typeB > div').css('background-image','url(/res/img/bancaParticulares/typeB_pc_grande_16_9.jpg)');
    		}
		}
		if($('.typeC').length){
			if($(window).width() < 768){
				$('.home .carousel .carousel-inner .row.designImg.typeC > div').css('background-image','url(/res/img/bancaParticulares/typeC_movil_vertical.jpg)');
			}else if($(window).width() < 992){
				$('.home .carousel .carousel-inner .row.designImg.typeC > div').css('background-image','url(/res/img/bancaParticulares/typeC_tablet_horizontal.jpg)');
    		}else{
    			$('.home .carousel .carousel-inner .row.designImg.typeC > div').css('background-image','url(/res/img/bancaParticulares/typeC_pc_grande_16_9.jpg)');
    		}
		}
		if($('.typeD').length){
			if($(window).width() < 768){
				$('.home .carousel .carousel-inner .row.designImg.typeD > div').css('background-image','url(/res/img/bancaParticulares/typeD_movil_vertical.jpg)');
			}else if($(window).width() < 992){
				$('.home .carousel .carousel-inner .row.designImg.typeD > div').css('background-image','url(/res/img/bancaParticulares/typeD_tablet_horizontal.jpg)');
    		}else{
    			$('.home .carousel .carousel-inner .row.designImg.typeD > div').css('background-image','url(/res/img/bancaParticulares/typeD_pc_grande_16_9.jpg)');
    		}
		}
		
		
		
		cambiarImgCarruselHome();
		$(window).resize(cambiarImgCarruselHome);
		cambioColorCabeceraHome();
		$('.home .carousel').on('slid.bs.carousel', function(){
			cambiarImgCarruselHome();
			cambioColorCabeceraHome();
		});
		
	}
	
	
	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////


	// //////////______________________________BUSCADOR DE OFICINAS Y CAJEROS______________________________________________________

	$(window).resize(function(){
		if ($(window).width() < 768) {
			$(".subFilters").hide();
			$(".googleMap").not(".opened").hide();
			$(".searchResults").not(".opened").hide();
			$(".menuSearchBack.opened").show();
			$(".panelHeadingBold fieldset").not(".opened").hide();
		}else{
			$(".subFiltersXS").hide();
			$(".menuSearchBack").hide();
			$(".googleMap").show();
			$(".searchResults").show();
			$(".panelHeadingBold fieldset").show();
		}
	});
	$(".selectFilter").change(function(){
		var valueSelected=$( this ).val();
		var subFilters;
		if ($(window).width() < 768) {
			switch (valueSelected){
				case "cajeros":
					$(".subFiltersXS").hide();
				break;
				case "oficinas":
					$(".subFiltersXS, .subFiltersXS *").show();
					$(".subFilter01").next("span").html("Con caja de efectivo");
					$(".subFilter02").next("span").html("Accesible para discapacitados");
					break;
				default:
					$(".subFiltersXS").show();
					$(".subFilter01").next("span").html("Accesible para discapacitados");
					$(".subFilter02").closest("label").hide();
					break;
			}
		}else{
			switch (valueSelected){
				case "cajeros":
					$(".subFilters").hide();
					$(".searchResults").css("height","625px");
				break;
				case "oficinas":
					$(".subFilters, .subFilters *").show();
					$(".subFilter01").next("span").html("Con caja de efectivo");
					$(".subFilter02").next("span").html("Accesible para discapacitados");
					$(".searchResults").css("height","550px");
					break;
				default:
					$(".subFilters").show();
					$(".subFilter01").next("span").html("Accesible para discapacitados");
					$(".subFilter02").closest("label").hide();
					$(".searchResults").css("height","578px");
					break;
			}
		}
		
	});

	/* botón buscar oficinas */
	$(".btSearchOffices").click(function(){
		$(".googleMap").addClass("opened").show();
		$(".searchResults").removeClass("opened").hide();
		$(".panelHeadingBold fieldset").removeClass("opened").hide();
		$(".menuSearchBack").addClass("opened").show();
		$(".menuSearchBack .viewList").show();
		$(".menuSearchBack .viewMap").hide();	        			
	});
	/* botón volver a buscar */
	$(".searchAgain").click(function(){
		$(".googleMap").removeClass("opened").hide();
		$(".searchResults").removeClass("opened").hide();
		$(".panelHeadingBold fieldset").addClass("opened").show();
		$(".menuSearchBack").removeClass("opened").hide();
	});
	/* botón ver mapa */
	$(".viewMap").click(function(){
		$(".googleMap").addClass("opened").show();
		$(".searchResults").removeClass("opened").hide();
		$(".panelHeadingBold fieldset").removeClass("opened").hide();
		$(".menuSearchBack").addClass("opened").show();
		$(".menuSearchBack .viewList").show();
		$(".menuSearchBack .viewMap").hide();	        			
	});
	/* botón ver listado */
	$(".viewList").click(function(){
		$(".googleMap").removeClass("opened").hide();
		$(".searchResults").addClass("opened").show();
		$(".panelHeadingBold fieldset").removeClass("opened").hide();
		$(".menuSearchBack").addClass("opened").show();
		$(".menuSearchBack .viewList").hide();
		$(".menuSearchBack .viewMap").show();
	});

	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////

	// //////////______________________________MOVIMIENTOS______________________________________________________
	
	// //////// mensajes de error - Movimientos
	$('.form-control').click(function(){
		/*$(this).prevAll(".errorPanel").toggle();
		$(this).removeClass("errorInput");
		$(".showSearchSecond").removeClass("errorInput");*/
	});

	$(".search").focus(function() {
	  $(this).next().addClass("focusInput");
	});

	$(".search").focusout(function(){
		$(this).next().removeClass("focusInput");
	});

	// //////// Collapse Exportar - Movimientos
	$(".showExportFirst").click(function() {
		$(".boxSearchFirst").css("display", "none");
		$(".boxExportFirst").slideToggle(0);
		$(this).toggleClass("activeButton");
		$(".showSearchFirst").removeClass("activeButton");
	});
	// //////////////////////////////////////////////////////////

	// //////// Collapse Buscar - Movimientos
	$(".showSearchFirst").click(function() {
		$(".boxExportFirst").css("display", "none");
		$(".showExportFirst").removeClass("activeButton");
		$(".boxSearchFirstFieldset").show();
		if ($('.boxSearchMadeAmount').is(':visible')) {
			$(".boxSearchFirstButton").show();
			$(".boxSearchSecondButton").show();
			$(".boxSearchFirstLi").show().removeClass("hidden-lg").addClass("boxSearchFirstLiRetract");
			$(".boxSearchMadeAmount").slideToggle();
			$(".boxSearchTypeMovements").slideToggle();
			$(".boxSearchFirstInput").addClass("col-lg-8").removeClass("col-lg-12").addClass("col-md-8").removeClass("col-md-12");
			$(".boxSearchFirstLabel").addClass("col-lg-8").removeClass("col-lg-12");
		} else {
			$(".boxSearchTypeMovements").hide();
			$(".boxSearchMadeAmount").hide();
			$(".boxEditSearch").hide();
		}
		$(".boxSearchFirst").slideToggle();
		$(this).toggleClass("activeButton");
	});

	$(".showSearchSecond").click(function() {
		if ($('.boxSearchMadeAmount').is(':visible')) {
			$(".boxSearchFirstButton").show();
			$(".boxSearchSecondButton").show();
			$(".boxSearchFirstLi").show().removeClass("hidden-lg");
			$(".boxSearchFirstInput").addClass("col-lg-8").removeClass("col-lg-12").addClass("col-md-8").removeClass("col-md-12");
			$(".boxSearchFirstLabel").addClass("col-lg-8").removeClass("col-lg-12");
		} else {
			$(".boxSearchFirstButton").hide();
			$(".boxSearchSecondButton").hide();
			$(".boxSearchFirstLi").hide().addClass("hidden-lg");
			$(".boxSearchFirstInput").removeClass("col-lg-8").addClass("col-lg-12").removeClass("col-md-8").addClass("col-md-12");
			$(".boxSearchFirstLabel").removeClass("col-lg-8").addClass("col-lg-12").removeClass("col-md-8").addClass("col-md-12");
		}								
		$(".boxSearchTypeMovements").slideToggle();
		$(".boxSearchMadeAmount").slideToggle();
		$(".addonBackground").toggleClass("addonBackgroundFinish");
	});

	$(".boxSearchFirstButton").click(function() {
		$(".boxSearchFirstFieldset").hide();
		$(".boxEditSearch").slideToggle();
	});

	$(".btnEditSearchButtonChange").click(function() {
		$(".boxEditSearch").hide();
		$(".boxSearchFirstFieldset").slideToggle();
		$(".boxSearchFirstButton").show();
		$(".boxSearchFirstInput").addClass("col-lg-8").removeClass("col-lg-12").addClass("col-md-8").removeClass("col-md-12");
		$(".boxSearchFirstLabel").addClass("col-lg-8").removeClass("col-lg-12").addClass("col-md-8").removeClass("col-md-12");						
		$(".boxSearchFirstLi").show().removeClass("hidden-lg");													
	});

	$(".btnEditSearchButtonCancel").click(function() {
		$(".boxSearchFirst").hide();
		$(".showSearchFirst").removeClass("activeButton");
	});

	$(".boxSearchSecondButton").click(function() {
		$(".boxSearchFirstFieldset").hide();
		$(".boxEditSearch").slideToggle();
	});

	$(".btSearchc").click(function() {
		$(".boxSearchFirstFieldset").hide();
		$(".boxSearchMadeAmount").hide();
		$(".boxSearchTypeMovements").hide();
		$(".boxEditSearch").slideToggle();
	});

	// //////// Autocompletar - Movimientos
	/*$(function() {
		var categories= [
		"varios",
		"seguros",
		"agua",
		"electricidad",
		"telefono",
		"gas",
		"grandes almacenes",
		"tarjeta",
		"recibos",
		"reembolsos",
		"rendimientos valores",
		"seguros",
		"transf a cajero",
		"transferencias",
		"traspasos",
		"valores",
		"ventas valores",
		"nomina",
		"adeudos",
		"anulaciones",
		"cajero",
		"cargos",
		"comunidad",
		"prestamo",
		"disposicion prestamo",
		"efectivo",
		"el_corte_ingles",
		"impuestos",
		"ipf tasa fija",
		"linea directa aseguradora",
		"liquidaciones"
		];
		if($("input.newCategory").length){
			$("input.newCategory").autocomplete({
				  source: categories
				});
		}
		
	  });*/

	// /////////// Datapicker Bootstrap - Movimientos
	if($('.input-daterange').length){
		$('.input-daterange').datepicker({
			language: 'es',
			format: "dd/mm/yyyy",
			weekStart: 1,
			startDate: "-14m",
			endDate: "0d",
			autoclose: true,
			todayHighlight: true
		});
	}
	// /////////////////////////////////////////////////////////


	$(".editTableCategory").click(function( event ) {
		event.stopPropagation();
		$(this).hide();
		$(this).siblings(".editTableCategoryCancel").show();
		$(this).siblings(".editInput").show();

	});
	$(".editTableCategoryCancel").click(function( event ) {
		event.stopPropagation();
		$(this).hide();
		$(this).siblings(".editTableCategory").show();
		$(this).siblings(".editInput").hide();
	});
	$(".editInput").click(function( event ) {
		event.stopPropagation();
	});
	// /////////////////////////////////////////////////////////


	// /////////// Efecto fondo fila del último movimiento /////
	$('.lastMovement').removeClass("lastMovementActived");
	setTimeout(function() {
		$('.rowSummary').removeClass("lastMovement");
	}, 2000);
	// /////////////////////////////////////////////////////////


	// //////// Cell collapse filas - Movimientos // /////////////////////
	/* con retardo al abrir fila (se pone gris mientras tanto) */
	$(".rowSummary").not('.noOpened .rowSummary').click(function(event) {
		var targetElement= $(event.target.nodeName);
		var target=$(event.target);
		if(targetElement.is("span, div, p, strong, ul, li")){
			if(target.closest(".rowSummary").hasClass("openedDetails")){
				target.closest(".rowSummary").removeClass("openedDetails").removeClass("grayFirst");
				$('.saldo').css('display','none');	
			}else{
				$('.saldo').css('display','none');
				target.closest(".rowSummary").addClass("grayFirst");	
				if($(window).width() < 990){/* delay sólo para dispositivos móviles */
					setTimeout(function() {		
						target.closest(".rowSummary").addClass("openedDetails");
						target.closest(".rowSummary").siblings(".rowSummary").removeClass("openedDetails").removeClass("grayFirst");
						$(".editInput").hide();
						$(".editTableCategoryCancel").hide();
						$(".editTableCategory").show();
						$('.grayFirst .saldo').css('display','block');										
					},500);
				}else{
					target.closest(".rowSummary").addClass("openedDetails");
					target.closest(".rowSummary").siblings(".rowSummary").removeClass("openedDetails").removeClass("grayFirst");
					$(".editInput").hide();
					$(".editTableCategoryCancel").hide();
					$(".editTableCategory").show();
					$('.grayFirst .saldo').css('display','block');
				}
			}
		}
		
	});


	// /////////////////////////////////////////////////////////
	// /////////////////////////////////////////////////////////

	// //////////______________________________PLANES DE PENSIONES______________________________________________________
	
	// //////// Botón Simular otras Operaciones							
	$(".btnSimularOperaciones").click(function(){
		var altoHeightPlansPensions = $(".heightPlansPensions").outerHeight(true) + ($(".heightPlansPensions hr").outerHeight(true))/2;
		var altoSliderPlansPensions = $(".sliderPlansPensions").outerHeight();
		if(altoSliderPlansPensions <= 0){
			$(".sliderPlansPensions").animate({
				height: altoHeightPlansPensions+"px"
			});
		}else{
			$(".sliderPlansPensions").animate({
				height: 0
			});
		}
		
	});
	
	// //////// Slider	
	if($(".cantidadMes").length){
		$(".cantidadMes").slider();
		$(".cantidadMes").on('slide', function(slideEvt) {
			var cantidadMes = slideEvt.value;
			var cantidadAno = cantidadMes * 12;
			$(".textCantidadMes > span").text(slideEvt.value);
			$(".textAcumuladoAnual > span").text(cantidadAno);
		});
	}							
	
	if($(".edadJubilacion").length){
		$(".edadJubilacion").slider();
		$(".edadJubilacion").on('slide', function(slideEvt) {
			$(".textEdadJubilacion > span").text(slideEvt.value);
		});
	}							
	
	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////

	// //////////______________________________TARJETAS_____________________________________________________
	// ////////// financiar paso uno

	$(".panelFirstStep input[type='checkbox']").click(function(){
		$(this).toggleClass("checked");
		$(this).nextAll("div").toggleClass("checkFirstStepDivs");
		$(this).nextAll("div:last-child").toggleClass("strongStep");
		//cogemos el valor numérico de la compra a financiar
		var amountCheck=parseInt($(this).nextAll("div.pull-right").html());//enteros
		var amountSmall=$(this).nextAll("div.pull-right").find(".small").html();//decimales
		amountSmall=parseInt(amountSmall.slice(1,3));//evitamos más de 2 decimales
		var amountCheckTotal = parseFloat(amountCheck+"."+amountSmall);//unimos enteros y decimales
		//cogemos el total existente (entero y decimales)
		var amountTotalInteger=parseInt($(".panelFooterStep").find("strong").html());//enteros
		var amountTotalSmall=$(".panelFooterStep").find("strong").find(".small").html();//decimales
		amountTotalSmall=parseInt(amountTotalSmall.slice(1,3));//evitamos más de 2 decimales
		var amountTotal=parseFloat(amountTotalInteger+"."+amountTotalSmall);//unimos enteros y decimales
		
		if($(this).hasClass("checked")){//sumamos al total el valor a financiar 
			amountTotal += amountCheckTotal;
		}else{//restamos del total el valor a financiar 
			amountTotal -= amountCheckTotal;
		}
		//separamos el resultado en 2 partes: el entero y los decimales, según la posición del carácter "."
		var amountPartOne=parseInt(amountTotal);
		var posComma=(amountTotal+"").indexOf(".");
		var amountPartTwo=(amountTotal+"").slice(posComma+1,posComma+3);//evitamos más de 2 decimales
		//escribimos el resultado con el formato small para decimales
		$(".panelFooterStep").find("strong").replaceWith("<strong>"+amountPartOne+"<span class='small'>,"+amountPartTwo+" €</span></strong>");
		
	});

	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////
	
	// //////////______________________________VÍDEOS______________________________________________________
	
	// //////// Función para interrumpir los vídeos cuando se cierra el modal
	function onYouTubePlayerAPIReady() {
		$('iframe').each(function(){
			var identificator = $(this).attr('id');
			var player = new YT.Player(identificator);
			$(this).closest('.modal').find('.btnCloseModal').on("click", function() {
			    player.pauseVideo();
			  });
			$(this).closest('.modal').find('.close').on("click", function() {
			    player.pauseVideo();
			  });
		});
	}
	if($('iframe').length){
		onYouTubePlayerAPIReady();
	}
	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////

	if (window.GRP) {
		GRP.tablaGrafica();
	}
	if (window.GNE) {
		GNE.bubbleTable();
		GNE.barTable();
	}
	 //arregla error responsive en buscador de fondos
    var arreglaBuscaFondos = function(){
            if ($(window).width() <= 768) {
                    $('.buscadorFondos .scrollable .responsive  tr.rowSummary td[colspan="6"]').css('display','table-cell');
            };
    };
    $(window).resize(arreglaBuscaFondos);
    $(window).load(arreglaBuscaFondos);
    // fin arregla error responsive en buscador de fondos	
    
	//evitamos desplegar filas funcionalidad
	$('.js-unbind .rowSummary').unbind('click');    

});

//	// //////// Función popUp
	//function tb_popUpLink(objLnk, strFeatures){
	//if(strFeatures == undefined) strFeatures = 'left=0,top=0,width=500,height=450,directories,location,menubar,resizable,scrollbars,status,titlebar,toolbar';
	//window.open(objLnk.href, objLnk.target, strFeatures).focus();
	//return false;
	//}
function popUpLink(objLnk, strFeatures, width, height){
	if(strFeatures == undefined) strFeatures = 'left=0,top=0,width=500,height=450,directories,location,menubar,resizable,scrollbars,status,titlebar,toolbar';
	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);
	window.open(objLnk.href, objLnk.target, strFeatures + ',width=' + width + ",height=" + height + ',left=' + left + ',top=' + top).focus();
	return false;
}
//// //////// end