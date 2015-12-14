$(document).ready(function() {

	// colocaciÃƒÆ’Ã‚Â³n del footer absolute o static dependiendo de la altura de los contenidos
	function contentSize(){
		var bodyHeight = $("body").outerHeight(true);
		var footerHeight = $("footer.footer").outerHeight(true);
		var totalHeight = footerHeight;
		if($("body").hasClass("home")){
			//para acceso clientes y home
			if($(".carousel").length){//altura del carrusel
						var carouselHeight = bodyHeight - 90;
						$(".carousel").css("height",carouselHeight+"px");
					}3

			if($(".login").length){
				var loginHeight = $(".login").outerHeight(true);
				totalHeight += loginHeight;
			}
			var articleHeight = $(".article").outerHeight(true);
			totalHeight += articleHeight;

		}else{
			//para todas las pÃƒÆ’Ã‚Â¡ginas excepto acceso clientes y home
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

	// //////// VersiÃƒÆ’Ã‚Â³n clÃƒÆ’Ã‚Â¡sica sÃƒÆ’Ã‚Â³lo para tablet y mÃƒÆ’Ã‚Â³vil
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('.footer .footerLinks li .classicVersion').closest('li').show();
	} else {
		$('.footer .footerLinks li .classicVersion').closest('li').hide();
	}

	// //////// Poner mayÃƒÆ’Ã‚Âºsculas la primera letra en texto de error
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

	// //////// Poner > y mayÃƒÆ’Ã‚Âºsculas la primera letra en input type submit y type button para los componentes jsf
	if($('input[type="submit"]').length || $('input[type="button"]').length){
		$('input[type="submit"]').each(function(){
			var valueInput = $(this).attr('value');
			if(typeof valueInput != 'undefined'){
				if(!$(this).hasClass('noMayusc')){
					valueInput = valueInput.toLowerCase();
					valueInput = valueInput.substring(0,1).toUpperCase() + valueInput.substring(1);
				}
				if($(this).hasClass('btnArrowPrev')){
					valueInput = 'ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¹ ' + valueInput;
				}else if($(this).hasClass('btnArrowNext')){
					valueInput = valueInput + ' ÃƒÂ¢Ã¢â€šÂ¬Ã‚Âº';
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
					valueInput = 'ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¹ ' + valueInput;
				}else if($(this).hasClass('btnArrowNext')){
					valueInput = valueInput + ' ÃƒÂ¢Ã¢â€šÂ¬Ã‚Âº';
				}
				$(this).attr('value',valueInput);
			}
		});
	}

	// //////// Formato cuenta interna para nÃƒÆ’Ã‚Âºmero de cuenta
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


	// //////// Accordion FAQ
	$('.row.collapse').on('shown.bs.collapse', function () {
		contentSize();
	});
	$('.row.collapse').on('hidden.bs.collapse', function () {
		contentSize();
	});
	// /////////////////////////////////////////////////////


	// ************************************
	// /////////////////////////////////////////////////////

	//funcines para llamar al traker de ga. el id del mensaje se extrae de la url


$.urlParam = function(name) {
		var results = new RegExp('[\\?&]' + name + '=([^&#]*)')
				.exec(window.location.href);
		if (results != null)
			return results[1] || 0;
		else
			return results;
		// return results != null ? results[1] || 0 : results;
}



var callGA = function() {

	var idGA =   $.urlParam('idMensaje');

	if(idGA == null || typeof idGA || "undefined" || idGA == ''){
			idGA ='CONFIRMADO';
	}

		try{
				var pageTracker = _gat._getTracker("UA-9003287-21");
				pageTracker._setDomainName(".bankinter.com");
				pageTracker._setCookieTimeout("2592000");
				pageTracker._setAllowAnchor(true);
				v_url=idGA;
				v_url = v_url + "?url=" + document.referrer;
				pageTracker._trackPageview(v_url);
				var id_attr = null;
				if (window.location.hash) {
					id_attr = window.location.hash.match(/ID=([^&]+)&attr=([^&]+)/);
				}
				if(!id_attr && window.location.search){
					id_attr = window.location.search.match(/ID=([^&]+)&attr=([^&]+)/);
				}
				if(id_attr){
					pageTracker._trackEvent('promociones internas',id_attr[1],id_attr[2]);
				}
			} catch(err) {

			}


};

	// /////////////////////////////////////////////////////

	// ////// AnimaciÃƒÆ’Ã‚Â³n bk_barrita de alerta y cambio de colores para pestaÃƒÆ’Ã‚Â±a
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

	// ////// Scroll MÃƒÆ’Ã‚Â¡s operaciones
	$(".scrollMoreoperations").click(function() {
		var position = ($(".Operations").offset().top)-75;
		$('html,body').animate({scrollTop: position});
	});

	// /////////////////////////////////////////////////////


	// //////// botones debajo de primer panel en mÃƒÆ’Ã‚Â³vil con igual altura
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


	// //////// Enlaces Buttons
	$(".linkContratoBanca").click(function(){
							location.href = 'contrato_banca_distancia.html';
				});
				$(".linkCambioClaveUno").click(function(){
							location.href = 'cambio_clave_paso_uno.html';
				});
				$(".linkCambioNombreCuenta").click(function(){
							location.href = 'movimientos_cambio_nombre_cuenta.html';
				});
				$(".linkTransfPeriodicas").click(function(){
							location.href = 'transferencias_periodicas.html ';
				});
				$(".linkTransferencias").click(function(){
							location.href = 'transferencias.html';
				});
				$(".linkTransfCancel").click(function(){
							location.href = 'transferencias_cancelacion.html';
				});
				$(".linkFinanciarpasouno").click(function(){
							location.href = 'tarjetas_financiar_paso_uno.html';
				});
//                $(".linkFinanciarpasodos").click(function(){
//                      location.href = 'tarjetas_financiar_paso_dos.html';
//                });
				$(".linkCardsActive").click(function(){
							location.href = 'tarjetas_activar.html';
				});
				$(".linkCardsPIN").click(function(){
							location.href = 'tarjetas_solicitar.html';
				});
				$(".linkCardsPINConfirm").click(function(){
							location.href = 'tarjetas_solicitar_confirmacion.html';
				});
				$(".signOnDeposit").click(function(){
							location.href = 'depositos_contratacion_dos.html';
				});
				$(".goSimulateDeposit").click(function(){
							location.href = 'public_depositos_simulador.html';
				});
				$(".goHelpDeposit").click(function(){
							location.href = 'public_depositos_ayuda.html';
				});
				$(".btnClientAccess, .btnLogin").click(function(){
							location.href = 'public_acceso_clientes.html';
				});
				$(".goCards").click(function(){
							location.href = 'tarjetas_ficha.html';
				});
				$(".goDeposit").click(function(){
							location.href = 'depositos.html';
				});
				 $(".goTransferContinue").click(function(){
							location.href = 'transferencias_nacional_confirmacion.html';
				});
				$(".linkNuevaNotificacion").click(function(){
							location.href = 'notificaciones_nueva.html';
				});
				$(".linkCambioClaveDos").click(function(){
							location.href = 'cambio_clave_paso_dos.html';
				});
				$(".linkAltaCoord").click(function(){
							location.href = 'avisos_alta_coord.html';
				});
				$(".linkAddProductSaving").click(function(){
							location.href = 'public_ahorro_e_inversion.html';
				});
				$(".goAccounts, .goMovements").click(function(){
							location.href = 'movimientos.html';
				});
				$(".goRentaVariable").click(function(){
							location.href = 'valores_renta_variable.html';
				});
				$(".goRentaFija").click(function(){
							location.href = 'valores_renta_fija.html';
				});
				$(".goInsurance").click(function(){
							location.href = 'seguros.html';
				});
				$(".goLoan").click(function(){
							location.href = 'prestamo.html';
				});
				$(".goCreditAccount").click(function(){
							location.href = 'prestamo_bck.html';
				});
				$(".goReturnReceipt").click(function(){
							location.href = 'devolucion_recibo.html';
				});
				$(".goOfficesAndCashiers").click(function(){
							location.href = 'public_buscador_oficinas_cajeros.html';
				});
				$(".goAtteFAQ").click(function(){
							location.href = 'public_att_cliente_preguntas.html';
				});
				$(".acceptContract").click(function(){
							location.href = 'inicio_3x.html';
				});
				$(".goPlanesPensiones").click(function(){
							location.href = 'planes_pensiones.html';
				});
				$(".goFondosInversion").click(function(){
							location.href = 'fondos_inversiones.html';
				});
				$(".goNotificacionCancelar").click(function(){
							location.href = 'notificaciones_cancelacion.html';
				});
				$(".goNotificacionModificar").click(function(){
							location.href = 'notificaciones_modificacion.html';
				});
				$(".linkTraspaso").click(function(){
			location.href = 'traspaso_fondos.html';
			});
				$(".linkSuscripcion").click(function(){
			location.href = 'traspaso_fondos_suscripcion_adicional.html';
			});
				$(".linkReembolso").click(function(){
				location.href = 'traspaso_fondos_reembolso.html';
			});
				$(".linkTarjetasDatos").click(function(){
				location.href = 'tarjetas_modificarcondiciones_datos.html';
			});
				$(".linkTarjetasModificar").click(function(){
				location.href = 'Tarjetas_modificar_condiciones_confirmacion.html';
			});
				$(".linkTarjetasCoordenada").click(function(){
				location.href = 'tarjetas_modificar_condiciones_coordenada.html';
			});
			// /////////////////////////////////////////////////////


	// //////// Mostrar/Ocultar sombra en header menÃƒÆ’Ã‚Âº mÃƒÆ’Ã‚Â³vil
				$(window).scroll(function() {
		var heightScroll = $(window).scrollTop()
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



	// //////// AÃƒÆ’Ã‚Â±adir estado hover y toogle del abrir/cerrar
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

	// //////// AÃƒÆ’Ã‚Â±adir estado hover para mÃƒÆ’Ã‚Â³vil
	$('.responsive-menu-button').bind('touchstart', function() {
		$(this).addClass("hover");
	});

	$('.responsive-menu-button').bind('touchend', function() {
		$(this).removeClass("hover");
	});

	// //////// Esconde menÃƒÆ’Ã‚Âº al pulsar fuera
	$('.container, footer.footer').click(function() {
		if ($('#sidr').css('display') == 'block') {
			$.sidr('close');
		}
		$(".responsive-menu-button").removeClass("activo");
	});
	// //////////////////////////////////////////////////////////


	// //////// Nuevo menÃƒÆ’Ã‚Âº header - Productos Bankinter
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


	// /////// MenÃƒÆ’Ã‚Âº desplegable mÃƒÆ’Ã‚Â³vil - MÃƒÆ’Ã‚Â¡s Productos
	$(".sidr-class-openHeaderDropDownMenu").click(function() {
		location.href = 'productos_bankinter.html';
	});
	// //////////////////////////////////////////////////////////

	// ////// Scroll Cabecera MÃƒÆ’Ã‚Â³vil y Tablet
	$(".breadcrumbMobile").click(function() {
		$('html,body').animate({scrollTop:"0px"}, 300);
	});
	// //////////////////////////////////////////////////////////


	// //////// Collapse MÃƒÆ’Ã‚Â¡s Operaciones
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


	// //////// dropdown menÃƒÆ’Ã‚Âº /////////////////////////////////
	var widthDropdown=parseInt($(".dropdown-menu").css("width"));
			var widthParent=parseInt($(".dropdown-menu").parent("li.dropdown-toggle").css("width"));
			var widthPestana=parseInt($(".arrowSup").css("width"));
			var leftResult=-widthDropdown/2+widthParent/2;
			var leftResultPestana=widthDropdown/2-widthPestana/2;
			$(".dropdown-menu").not(".multiselect-container").css("left",leftResult+"px");
			$(".arrowSup").css("left",leftResultPestana+"px");
			// /////////////////////////////////////////////////////////////////

			// //////// dropdown menÃƒÆ’Ã‚Âº multidato /////////////////////////////////
			if($('.selectpicker').length){
				$('.selectpicker').selectpicker({
							showSubtext: true
						});
			}
			// /////////////////////////////////////////////////////////////////

			// //////// Ocultar/Mostrar Numeros de las coordenadas
	$(".codeCoordinate").click(function() {
		$(".textCode").slideToggle();
	});
	// ////////////////////////////////////////////////////////////////

	// //////// Borrar campo Codigo Coordenadas
	$(".deleteCodeCoordenate").click(function() {
		$('.codeCoordinate').val('');
	});
	// ////////////////////////////////////////////////////////

	// //////// interacciÃƒÆ’Ã‚Â³n swipe del carrusel  ///////////////////////////////
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

	// /////////// Quitar el padding-top al panel que tenga boxes dentro /////////////////////
	$(".boxTransfer").closest('.panel-body').css('padding-top',0);

	// ////////////////////////////////////////////////////////////////

	// /////////// mostrar/ocultar el siguiente elemento .toggle /////////////////////
	$('input.toggleNext').click(function(){
		$(this).closest('label').next('.toggle').slideToggle();
	});
	$('a.toggleNext').click(function(){
		$(this).closest('div').next('.toggle').slideToggle();
	});

	// ////////////////////////////////////////////////////////////////

	// //////////______________________________MOVIMIENTOS______________________________________________________

	// //////// mensajes de error - Movimientos
	$('.form-control').click(function(){
		$(this).prevAll(".errorPanel").toggle();
		$(this).removeClass("errorInput");
		$(".showSearchSecond").removeClass("errorInput");
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
	$(function() {
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

		});

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


	// /////////// Efecto fondo fila del ÃƒÆ’Ã‚Âºltimo movimiento /////
	$('.lastMovement').removeClass("lastMovementActived");
	setTimeout(function() {
		$('.rowSummary').removeClass("lastMovement");
	}, 2000);
	// /////////////////////////////////////////////////////////


	// //////// Cell collapse filas - Movimientos // /////////////////////
	/* con retardo al abrir fila (se pone gris mientras tanto) */
	$(".rowSummary").not('.noOpened .rowSummary, .rowSummary.notOpenYellow ').click(function(event) {
		var targetElement= $(event.target.nodeName);
		var target=$(event.target)
		if(targetElement.is("span, div, p, strong, ul, li")){
			if(target.closest(".rowSummary").hasClass("openedDetails")){
				target.closest(".rowSummary").removeClass("openedDetails").removeClass("grayFirst");
				$('.saldo').css('display','none');
			}else{
				$('.saldo').css('display','none');
				target.closest(".rowSummary").addClass("grayFirst");
				if($(window).width() < 990){/* delay sÃƒÆ’Ã‚Â³lo para dispositivos mÃƒÆ’Ã‚Â³viles */
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

	// //////////______________________________TRASPASO FONDOS______________________________________________________
	function resetAllFunds(){
		$('.asociateNewFund, .clasesFunds, .panelAmountTransfer, .panelAmountTransfer2, .panelSimilarFunds, .panelFusionFunds, .panelFormFunds, .panelFormResultFunds, .alert-info, .backNextPanel').addClass('hidden');
		$('.panelAmountTransfer, .panelAmountTransfer2, .panelFormFunds').find('input[type="text"]').val('');
		$('.panelAmountTransfer, .panelAmountTransfer2, .panelFormFunds, .panelFormResultFunds').find('input[type="checkbox"]').attr('checked', false);
		$('.panelSimilarFunds, .panelFusionFunds, .panelFormFunds').find('input[type="radio"]').attr('checked', false);
		$('.panelFormFunds').find('select option:first-child').prop('selected', true);
	}

	/*if($(".boxSearchSecondFunds").length){
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
	});*/

	$('.boxSearchFirstButtonFunds').click(function(){
		$('.boxSearchFirstFieldsetFunds').hide();
		$('.boxEditSearchFunds').slideToggle();
	});

	$(".btSearchFundsBottom").click(function() {
		$(".boxSearchFirstFieldsetFunds").hide();
		$(".boxSearchSecondFunds").hide();
		$(".boxEditSearchFunds").slideToggle();
	});

	//fondos_primera_suscripcion_firma.html  - Panel InformaciÃƒÂ³n periodica por correo electronico/ordinario
	$('input.fusionFund').change(function(){
		if($('input.fusionFund:checked').val() == 'fusionResult'){
			$('div.fusionFundOrdinary').addClass('hidden');
			$('div.fusionFundEmail').addClass('hidden');
		}
		if($('input.fusionFundEmail:checked').val() == 'continueThisFund'){
			$('div.fusionFundEmail').removeClass('hidden');
			$('div.fusionFundOrdinary').addClass('hidden');
		}
		if($('input.fusionFundOrdinary:checked').val() == 'fusionResult'){
			$('div.fusionFundOrdinary').removeClass('hidden');
			$('div.fusionFundEmail').addClass('hidden');
		}
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
				$('.rowDetailsFunds').hide().find('.rowSummary.openedDetails').removeClass('openedDetails');

				//ocultamos .pinned .text-right al hacer click en otro nombre
				$('.pinned .text-right').css('display','none');

				$('.rowSummary.openedDetails').removeClass('openedDetails');
				$(this).addClass('openedDetails').find('.rowDetailsFunds').show();

					//mostramos .pinned .text-right al hacer click
					$('.rowSummary.openedDetails').find('td table td:first-child').addClass('pinnedDetail');
					var nombredetail = $(".pinnedDetail").text();
					var contenido = $('.rowSummary.openedDetails').find('td table td:first-child').css('background','#ff0000').replaceWith('<tr class="pinnedName"><td>'+(nombredetail)+'</td></tr>');
					$('.rowSummary.openedDetails').find('.text-right').css({ display: "block", float: "left"});
					$('.thName').removeClass('thNameOcultar');
					$('.thName').css({ display: "block", color: "#63412a"}).css("font-weight", "bold");;


			}else{
				$('.tableFunds .rowSummary').not('.subTable').removeClass('openedDetails').find('.rowDetailsFunds').hide();
				$(this).find('tr.groupFundsHead').nextAll().removeClass('openedDetails').show();
				$('.scrollable').find('.rowSummary:nth-child(' + (numRow + 1) + ')').find('.groupFundsHead td').css('display','table-cell').css('text-indent','-9999px').css('background-color','#ededed');
				$('.scrollable').find('.rowSummary:nth-child(' + (numRow + 1) + ')').find('.subRowSummary').css('display','table-row').find('td').css('display','table-cell');
				$('.scrollable').find('.rowSummary:nth-child(' + (numRow + 1) + ')').find('.subRowSummary').css('display','table-row').find('td table td:first-child').css('display','none');
				$(this).addClass('openedDetails');
			}
		}else{
			//ocultamos .pinned .text-right al hacer click
			$('.pinned .text-right').css('display','none');
			$('.thName').addClass('thNameOcultar');
			$('.thNameOcultar').css('display','none');

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
				$('.tableFunds .rowDetailsFunds').hide(); // al hacer click en padre-familia ocÃƒÆ’Ã‚Âºltame todos los rowDetailsFunds
				$('.tableFunds .rowSummary').not('.subTable').removeClass('openedDetails');
				//$('.tableFunds .rowSummary').not('.subTable').removeClass('openedDetails'); // al hacer click en padre-familia , quita,  a los que no tienen la clase subTable, la clase openedDetails
				$(this).addClass('openedDetails').find('tr.groupFundsHead').nextAll().removeClass('openedDetails').toggle();
				//al hacer click en padre-familia aÃƒÆ’Ã‚Â±ade la clase openedDetails. Busca su tr.groupFundsHead y a todos sus hijos quÃƒÆ’Ã‚Â­tale la clase openedDetails pero muÃƒÆ’Ã‚Â©stra-oculta con toggle
			}else{
				$('.tableFunds .rowDetailsFunds').hide(); //al hacer click ocÃƒÆ’Ã‚Âºltame los detalles de los que no son padre-familia

				//si la familia estÃƒÆ’Ã‚Â¡ desplegada se mantiene visible al hacer click en un fondo de fuera
				$('.tableFunds .rowSummary').not('.subTable').removeClass('openedDetails').find('tr.groupFundsHead').nextAll().hide();

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

	//btnAceptarAmmountTransfer2 con Boton Aceptar para mostrar panelSimilarFunds en fondos_primera_suscripcion.html
	$('.btnAceptarAmmountTransfer2').click(function(){
		if($(this).closest('.primaryPanel').hasClass('panelAmountTransfer')){
			if($('.amountTransferFirstFund').val()){
				if ($(window).width() <= 751) {
					$(".panelAmountTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
					$(".panelAmountTransfer .panel-body").hide();
					$(".panelAmountTransfer2").addClass('hidden');
					$('.panelSimilarFunds').removeClass('hidden').removeClass('hidden-xs');

				}
				if ($(window).width() >= 751) {
					$('.panelSimilarFunds').removeClass('hidden').removeClass('hidden-xs');
				}
				scrollNextPanel(this);
			}else{
				alert('Debe indicar un importe');
			}
			$('.amountTransferFirstFund').keyup(function(){
				if($(this).val()){
				}else{
					$('.panelSimilarFunds, .panelForTransfer.clasesFunds, .panelFusionFunds, .panelFormFunds, .panelFormResultFunds.primaryPanel, .backNextPanel').addClass('hidden');
				}
			});

		}
		if($(this).closest('.primaryPanel').hasClass('panelAmountTransfer2')){
			if($('.amountTransfer').val()){
				if ($(window).width() <= 751) {
					$(".panelAmountTransfer2").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
					$(".panelAmountTransfer2 .panel-body").hide();
					//$(".panelAmountTransfer").hide();
					$(".panelAmountTransfer").addClass('hidden').addClass('hidden-xs');
					$('.panelSimilarFunds').removeClass('hidden').removeClass('hidden-xs');
				}
				if ($(window).width() >= 751) {
					$('.panelSimilarFunds').removeClass('hidden');
				}
				scrollNextPanel(this);
			}else{
				alert('Debe indicar un importe');
			}
			$('.amountTransfer').keyup(function(){
				if($(this).val()){

				}else{
					$('.panelSimilarFunds').addClass('hidden');
				}

			});

		}
		/////Clase noReset
		if (!$('.panelForTransfer .boxTransfer').hasClass('noReset')){
			resetAllTransferencias();
		}
		//////////////////
	});


/*	$('input.similarFunds').change(function(){
		$('.panelForTransfer, .panelFusionFunds').addClass('hidden');
	});*/
	$('.btnAceptarSimilarFunds').click(function(){
		if($('input.similarFunds:checked').val() == 'otherClases'){
			$('.panelForTransfer:not(.asociateNewFund)').removeClass('hidden');
			$('.panelFusionFunds').addClass('hidden');
			if ($(window).width() <= 751) {
				$(".clasesFunds .panel-body").show();
				$(".clasesFunds").removeClass("panelMovilStep").find('.panel-heading > span').addClass('hidden');

				$(".panelSimilarFunds").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".panelSimilarFunds .panel-body").hide();
			}
		}else if($('input.similarFunds:checked').val() == 'thisFund'){
			$('.panelFusionFunds').removeClass('hidden');
			$('.panelForTransfer:not(.asociateNewFund').addClass('hidden');
		}
		addBorderToBox(this);
		if ($(window).width() > 751) {
			scrollNextPanel(this);
		}
		scrollNextPanel(this);
	});

	$('input.fusionFund').change(function(){
		$('.panelFormFunds').addClass('hidden');
	});
	$('.btnAceptarFusionFunds').click(function(){

		if($('input.fusionFund:checked').val() == 'continueThisFund'){

			$('.panelFormFunds').removeClass('hidden');
			if ($(window).width() <= 751) {
				
				$(".panelFusionFunds").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".panelFusionFunds .panel-body").hide();
			}
		}else if($('input.fusionFund:checked').val() == 'fusionResult'){
			
			window.location.reload();
		}
		addBorderToBox(this);
		if ($(window).width() > 751) {
			scrollNextPanel(this);
		}
		scrollNextPanel(this);
	});

	$('.btnAceptarFormFunds').click(function(){
		$('.panelFormResultFunds').removeClass('hidden');
		if ($(window).width() <= 751) {
			$(".panelFormFunds").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
			$(".panelFormFunds .panel-body").hide();
		}
		addBorderToBox(this);
		if ($(window).width() > 751) {
			scrollNextPanel(this);
		}
		scrollNextPanel(this);
	});

	$('.btnContinueBuy').click(function(){
		$('.panelFormResultFunds').find('hr').removeClass('hidden');
		$('.panelFormResultFunds').find('.checkbox').removeClass('hidden');
		$('.panelFormResultFunds').find('.textoConfirm').removeClass('hidden');
		$('.alert-info, .backNextPanel').removeClass('hidden');
		addBorderToBox(this);
		if ($(window).width() > 751) {
			scrollNextPanel(this);
		}
	});

	$('.btnAceptarOtroFondo').click(function(){
		$(".asociateNewFund .boxTransfer").removeClass("boxActive");
		if ($(window).width() <= 751) {
			$(".panelFromTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
			$(".panelFromTransfer .panel-body").hide();
			$('.fromOtherFund').addClass('hidden');
			resetAllTransferencias();
			scrollNextPanel(this);
		}
	});

	//ocultar panelFormResultFunds cuando se modifique algún valor check de panelFormFunds
	$('input.formFunds').change(function(){
		$('.panelFormResultFunds, .backNextPanel').addClass('hidden');
	});

	//ocultar panelFormResultFunds cuando se modifique algÃƒÆ’Ã‚Âºn valor option del select .form-control
	$('select.form-control').change(function(){
		$('.panelFormResultFunds').addClass('hidden');
	});

	var participaciones;
	$('.amountTransfer').keyup(function(){
		if($(this).val()){
			$('.mensaje1, .mensaje2, .plusvalia').removeClass('hidden');
			participaciones = 200;
			$('.participaciones').html(participaciones + ' participaciones');
			/*if($(this).closest('.panel').hasClass('panelAmountTransfer2')){
				$('.panelSimilarFunds').removeClass('hidden');
				if ($(window).width() <= 751) {
					$('.panelSimilarFunds').addClass('hidden');
				}
			}else{
				$('.backNextPanel').removeClass('hidden');
			}*/
		}else{
			$('.mensaje1, .mensaje2, .plusvalia').addClass('hidden');
			participaciones = 0;
			$('.participaciones').html(participaciones + ' participaciones');
			if($(this).closest('.panel').hasClass('panelAmountTransfer2')){
				$('.panelSimilarFunds, .panelForTransfer.clasesFunds, .panelFusionFunds, .panelFormFunds, .panelFormResultFunds, .backNextPanel').addClass('hidden');

			}else{
				$('.backNextPanel').addClass('hidden');
			}
		}
		contentSize();
	});

	$('.transferAll').change(function(){
		if($(this).is(':checked')){
			$('.amountTransfer').prop( "disabled", true );
			//$('.amountTransfer').val('1000');
			participaciones = '';
			$('.participaciones').html(participaciones + ' participaciones');
			$('.mensaje2 span').html(0);
			$('.mensaje2').removeClass('hidden');
			if($(this).closest('.panel').hasClass('panelAmountTransfer2')){
				$('.panelSimilarFunds').removeClass('hidden');
			}else{
				$('.backNextPanel').removeClass('hidden');
			}
		}else{
			//$('.mensaje2 span').html(200);
			$('.mensaje2').addClass('hidden');
			$('.amountTransfer').prop( "disabled", false );
			if($(this).closest('.panel').hasClass('panelAmountTransfer2')){
				$('.panelSimilarFunds').addClass('hidden');
			}else{
				$('.backNextPanel').addClass('hidden');
			}
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
		$(carrusel).find('.carousel-indicators li').remove();//se eliminan los indicadores inferiores iniciales(botones de navegaciÃƒÆ’Ã‚Â³n)
		var fundsBoxes = new Array();
		fundsBoxes = $(carrusel).find('div.boxFunds:not(.hidden)');//se contabiliza el nÃƒÆ’Ã‚Âºmero de fondos
		var numBoxesPerItem;
		if($(window).width() < 768){//el nÃƒÆ’Ã‚Âºmero de fondos que se quiera meter en cada slide segÃƒÆ’Ã‚Âºn dispositivo
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

		//cambiamos la distribucion del carrusel para el carrusel que tenga la clase .carouselFondos
		if ($('.carousel').hasClass("carouselFondos")){
			if($(window).width() < 972){
				numBoxesPerItem = 4;
			}
			if ($('.carousel').hasClass("carouselFondos")){
				if($(window).width() < 768){
					numBoxesPerItem = 2;
				}
			}
		}

		var numItems = Math.ceil(fundsBoxes.length/numBoxesPerItem);//se calcula en nÃƒÆ’Ã‚Âºmero de diapositivas necesarias

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

		if(numItems < 2){//evitamos que sólo haya un ÃƒÆ’Ã‚Âºnico indicador inferior
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

	// /////////// Buscador Fondos - Busca Nombre, Alias e ISIN/////////////////////
	$('.searchFundsFrom').keyup(function(){//detecta el cambio en el campo de búsqueda y lo compara con el título del fondo
		var searchContent = $(this).val().toLowerCase();
		$(this).closest('.panel').find('.carousel div.boxFunds').each(function(){
			var titleContent = $(this).find('h5').html().toLowerCase(); //detecta el nombre
			var aliasContent = $(this).find('.description').html().toLowerCase(); //detecta el alias + ISIN
			if(titleContent.indexOf(searchContent) >= 0 || aliasContent.indexOf(searchContent) >= 0){
				$(this).removeClass('hidden');
			}else{
				$(this).addClass('hidden');
			}
		});
		organizarCarrusel('.myCarouselTransferFrom');
		organizarCarrusel('.myCarouselTransferTo');
		contentSize();
	});
	// /////////////////////////////////////////////////////////

	// /////////////// Click en cabeceras de panel en móvil - Fondos
	$(".panel-heading").click(function(){
		if('.panelFromTransfer'){//lo hacemos independiente del script de notificaciones
			if ($(window).width() < 751 && $(this).closest('.panel').is('.panelMovilStep')) {
				$('.fusionAlert').addClass('hidden').addClass('hidden-xs');
				$(this).closest('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show();
				$(this).find('> span').addClass('hidden');

				$(this).closest('.panel').nextAll('.panel').removeClass('panelMovilStep').addClass('hidden');
				$(this).closest('.panel').nextAll('.panel').find('.panel-heading > span').addClass('hidden');
				$(this).closest('.panel').nextAll('.panel').find('.panel-body').show();
				$(this).closest('.panel').find('.boxActive').removeClass('boxActive');
				$(this).closest('.panel').nextAll('.panel').find('.boxActive').removeClass('boxActive');
				contentSize();
			}
		}
	});

	// ////////////////////////////////////////////////////////////////

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

	// /////////////// Truncar texto - Traspaso Fondos
	$('.boxTransfer .nameCCC').each(function(){
		var string = $(this).html();
		var trespuntos = ' ... ';
		var centerPc = string.substring(10, string.length-10);
		var reemplazarPc = string.replace(centerPc,trespuntos)
		var centerTablet = string.substring(8, string.length-8);;
		var reemplazarTablet = string.replace(centerTablet,trespuntos);
		if($(window).width() > 991){
			if(string.length > 24){
				$(this).html(reemplazarPc);
			}else{
				$(this).html(string);
			}
		}
		if($(window).width() < 990){
			if(string.length > 20){
				$(this).html(reemplazarTablet);
			}else{
				$(this).html(string);
			}
		}
		if($(window).width() < 751){
			$(this).html(string);
		}
	});


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
	}

	function addBorderToBox(element){
		if(!$(element).hasClass('boxDesactive')){
			$(element).addClass("boxActive");
		}
	}


/*	$(".panelFromTransfer .boxTransfer").click(function(){*/
		$(".panelFromTransfer .boxTransfer").click(function(){

		$('.detailsNewBeneficiary, .panelDetailsBeneficiary, .panelDetailsDelivery, .detailsContacts, .panelAmountTransfer, .panelObservationsTransfer, .backNextPanel').addClass('hidden');
		//resetAllTransferencias();
		scrollNextPanel(this);
		if ($(window).width() <= 751) {

			$('.clasesFunds, .fromAccount, .fromFund, .panelAmountTransfer2').addClass('hidden');
			resetAllTransferencias();
		}

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
			$(".fromFund .boxTransfer").removeClass("boxActive");
			$(".panelForTransfer.clasesFunds .boxTransfer").removeClass("boxActive");
			$(".buyFirstFund .boxTransfer").removeClass("boxActive");
			$('.fromAccount').addClass('hidden');
			$('.fromFund').addClass('hidden');
			$('.fromOtherFund').addClass('hidden');
			resetAllFunds();
//              if($(this).hasClass('yourAccounts')||('yourFunds')||('otherFunds')){
			if($(this).hasClass('yourAccounts')){
				$('.fromAccount').removeClass('hidden');
			}else if($(this).hasClass('yourFunds')){
				$('.fromFund').removeClass('hidden');
			}else if($(this).hasClass('otherFunds')){
				$(".fromOtherFund .boxTransfer").removeClass("boxActive");
				$('.fromOtherFund').removeClass('hidden');
				if ($(window).width() <= 751) {
					/*$(".fromOtherFund").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
					$(".fromOtherFund .panel-body").hide();*/
				}
			}

		}else if($(this).closest('.panelFromTransfer').hasClass('fromAccount')){
			//$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
			$('.panelAmountTransfer').removeClass('hidden');
			//eliminamos la clase .boxActive de boxTransfer al hacer click en otra boxTransfer
			$(".fromAccount .boxTransfer").removeClass("boxActive");
			if ($(window).width() <= 751) {
				$(".buyFirstFund").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".buyFirstFund .panel-body").hide();
				scrollNextPanel(this);
				$('.panelAmountTransfer').removeClass('hidden-xs');
			}

		}else if($(this).closest('.panelFromTransfer').hasClass('fromFund')){
			//$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
			$('.panelAmountTransfer2').removeClass('hidden');
			//eliminamos la clase .boxActive de boxTransfer al hacer click en otra boxTransfer
			$(".fromAccount .boxTransfer").removeClass("boxActive");
			$(".fromFund .boxTransfer").removeClass("boxActive");
			if ($(window).width() <= 751) {
				$(".buyFirstFund").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
				$(".buyFirstFund .panel-body").hide();
				scrollNextPanel(this);
				$('.panelAmountTransfer2').removeClass('hidden-xs');
			}

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
		//contenSize para trasnferencias
		contentSize();
	});

	var destinatarioHalCash;
	$(".panelForTransfer .boxTransfer").click(function(){
		if (!$(this).hasClass('boxDesactive')){
			console.log(".hasClass('boxDesactive')");
			$('.detailsNewBeneficiary, .panelDetailsBeneficiary, .panelDetailsDelivery, .detailsContacts, .panelAmountTransfer, .panelObservationsTransfer, .backNextPanel').addClass('hidden');
			//resetAllTransferencias();

			/////Clase noReset
			if (!$(this).hasClass('noReset')){
				resetAllTransferencias();
			}
			/////

			if($(this).hasClass("newBeneficiary")){
				$('.detailsNewBeneficiary').removeClass('hidden').removeClass('hidden-xs');
			}else if($(this).hasClass("Contacts")){
				$('.detailsContacts').removeClass('hidden').removeClass('hidden-xs');
			}else if($(this).hasClass("Cajero")){
				if($(this).hasClass('aMiMismo')){
					destinatarioHalCash = 'A mÃƒÆ’Ã‚Â­ mismo';
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
					//panel importe visible-oculto
					$(".panelForTransfer.clasesFunds").click(function(){
						if ($('.yourFunds').hasClass('boxActive')){
							$('.panelAmountTransfer.primaryPanel').addClass('hidden').addClass('hidden-xs');
						}
						if ($('.otherFunds').hasClass('boxActive')){
							$('.panelAmountTransfer.primaryPanel').addClass('hidden').addClass('hidden-xs');
						}
					});

				if ($('.panelAmountTransfer2').hasClass('panelMovilStep')){
						$('.panelAmountTransfer').addClass('hidden').addClass('hidden-xs');
					}
				if ($(window).width() <= 751) {
					$(".panelForTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
					$(".panelForTransfer .panel-body").hide();
					$(".panelAmountTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
					$(".panelAmountTransfer .panel-body").hide();
				}
				addBorderToBox(this);
				if ($(window).width() > 751) {
					scrollNextPanel(this);
				}
				scrollNextPanel(this);
			}else if($(this).closest('.panelForTransfer').hasClass('asociateNewFund')){
				$('.panelAmountTransfer2').removeClass('hidden').removeClass('hidden-xs');
				if ($(window).width() <= 751) {
					$(".panelForTransfer .panel-body").hide();
					$(".panelForTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
					if($('.panelForTransfer').hasClass('clasesFunds')){
						$(".clasesFunds .panel-body").show();
						$(".clasesFunds").removeClass("panelMovilStep").find('.panel-heading > span').addClass('hidden');
					}
				}
			}else{
				$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');

				// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias
				if ($(window).width() <= 751) {
					alert('entro');
					$(".panelForTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
					$(".panelForTransfer .panel-body").hide();
					$('.fusionAlert').removeClass('hidden').removeClass('hidden-xs');
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
		validateOnBlur(this,'Debe introducir el cÃƒÆ’Ã‚Â³digo IBAN');
	});
	$('.inputSwift').on('blur',function(){
		validateOnBlur(this,'Debe introducir el cÃƒÆ’Ã‚Â³digo SWIFT');
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
			alert('Debe introducir el cÃƒÆ’Ã‚Â³digo IBAN');
		}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional') && (!$('.inputIban').val())){
			alert('Debe introducir el cÃƒÆ’Ã‚Â³digo IBAN');
		}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional') && (!$('.inputSwift').val())){
			alert('Debe introducir la direcciÃƒÆ’Ã‚Â³n SWIFT/BIC');
		}else if(!$('.inputNameBeneficiary').val()){
			alert('Debe introducir el nombre del beneficiario');
		}else {
			$('.panelAmountTransfer').removeClass('hidden').removeClass('hidden-xs');
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en mÃƒÆ’Ã‚Â³vil - Transferencias
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
			alert('Debe indicar una perioricidad y una duraciÃƒÆ’Ã‚Â³n');
		}else if($('.convertTransfer').is(':checked') && ($('input[name="duracion"]:checked').val() == 'hasta') && !$('.datepickericon').val()){
			alert('Debe indicar una fecha de finalizaciÃƒÆ’Ã‚Â³n');
		}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional' && $('.opcionesAvanzadas').is(':checked')) && (!$('input[name="tipocambio"]:checked').val())){
			alert('Debe seleccionar el tipo de cambio');
		}else if(($('input[name="tipocambio"]:checked').val() == 'seguroCambios') && !$('.codigoSeguro').val()){
			alert('Debe indicar el cÃƒÆ’Ã‚Â³digo del seguro');
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
			$('.panelObservationsTransfer2').removeClass('hidden').removeClass('hidden-xs');
			if ($(window).width() > 751) {
				scrollNextPanel(this);
			}
		}

	}

	function acceptBeneficiary(){
			$('.panelDetailsDelivery').removeClass('hidden').removeClass('hidden-xs');
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en mÃƒÆ’Ã‚Â³vil - Transferencias
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
			$('.panelObservationsTransfer').find('.help-block').html('PodrÃƒÆ’Ã‚Â¡ indicar si quiere que le informemos por mail o sms de la situaciÃƒÆ’Ã‚Â³n del envÃƒÆ’Ã‚Â­o al terminar el proceso de transferencia.');
			if(destinatarioHalCash == 'A mÃƒÆ’Ã‚Â­ mismo'){
				$('.panelObservationsTransfer').find('input.observations').val(destinatarioHalCash);
			}else{
				$('.panelObservationsTransfer').find('input.observations').val('');
			}
			$('.panelObservationsTransfer').removeClass('hidden').removeClass('hidden-xs');
			$('.backNextPanel').removeClass('hidden');
			// /////////// Rensponsive - Efecto por pasos al pusar boxes en mÃƒÆ’Ã‚Â³vil - Transferencias
			if ($(window).width() <= 751) {
				$(".panelDetailsDelivery").addClass("panelMovilStep").find('.panel-heading > span').html($('.panelDetailsDelivery input[name="cantidad"]').val()+'ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬' ).removeClass('hidden');
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

	// /////////// Click en cabeceras de panel en móvil - Transferencias
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
		if($('.panelProductNotification').length){//lo hacemos independiente del script de transferencias
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
		if($('.panelProductNotification').length){//lo hacemos independiente del script de notificaciones
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
				//$('.panelProductNotification .panel-heading > span').removeClass('hidden');
			}
		}
	});
	// ////////////////////////////////////////////////////////////////

	// /////////// scroll a paso siguiente fondos
	function scrollNextPanelImport(elementClick){
		/*var posBottomPanel = $(elementClick).closest('.panel').offset().top();*/
		var posBottomPanel = $(elementClick).closest('.panel').offset().top - 150;
		var posNextPanel = posBottomPanel + $(elementClick).closest('.panel').outerHeight();
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
						var selected = 'DÃƒÆ’Ã‚Â­as de la semana';
						options.each(function () {
							selected += $(this).text() + ', ';
						});
						return selected.substr(0, selected.length - 2);
					},
			buttonText: function(options, select) {
						if (options.length == 0) {
							return 'DÃƒÆ’Ã‚Â­as de la semana <b class="caret"></b>';
						}
						else {
							if (options.length > this.numberDisplayed) {
								return options.length + ' dÃƒÆ’Ã‚Â­as de la semana  <b class="caret"></b>';
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
						var selected = 'DÃƒÆ’Ã‚Â­as del mes';
						options.each(function () {
							selected += $(this).text() + ', ';
						});
						return selected.substr(0, selected.length - 2);
					},
			buttonText: function(options, select) {
						if (options.length == 0) {
							return 'DÃƒÆ’Ã‚Â­as del mes <b class="caret"></b>';
						}
						else {
							if (options.length > this.numberDisplayed) {
								return options.length + ' dÃƒÆ’Ã‚Â­as del mes  <b class="caret"></b>';
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
			alert('Debe seleccionar una opciÃƒÆ’Ã‚Â³n primero');
		}else{

			if($("input[name='dias_saldo']:checked").val()=="dias_semana_saldo"){

				var resultSelectSemana= $(".multiselectSemana").val();

				if(resultSelectSemana == null){
					alert('Debe seleccionar uno o varios dÃƒÆ’Ã‚Â­as');
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
					alert('Debe seleccionar uno o varios dÃƒÆ’Ã‚Â­as del mes.');
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
			alert('Debe seleccionar una opciÃƒÆ’Ã‚Â³n primero');
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


	// //////////______________________________HOME______________________________________________________

	////////// Ver texto legal HOME /////////////////////////////////
	$(".boxLegalContent a").click(function() {
		$(this).closest("p").toggleClass("opened");
	});
	
	////////// Ver texto legal HOME con la nueva estructura (li) /////////////////////////////////
	$(".boxLegalContent a").click(function() {
		$(this).closest("li").toggleClass("opened");
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
			$("body").click(function(){
				$(".cookies").hide();
			});


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
				}else if( ($(window).width() <= 1024) && ($(window).width() > $(window).height()) ){
					urlImg = nombreImgInicio + 'tablet_horizontal' + nombreImgFin;
				}else if( ($(window).width() > 1024) && (proporcion <= 1.6) ){
					urlImg = nombreImgInicio + 'pc_grande_4_3' + nombreImgFin;
				}else if( ($(window).width() > 1024) && (proporcion > 1.6) ){
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
				cambiarImgCarruselHome();
				cambioColorCabeceraHome();
				$(window).resize(cambiarImgCarruselHome);
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
							$(".searchResults").css("height","625px")
						break;
						case "oficinas":
							$(".subFilters, .subFilters *").show();
							$(".subFilter01").next("span").html("Con caja de efectivo");
							$(".subFilter02").next("span").html("Accesible para discapacitados");
							$(".searchResults").css("height","550px")
							break;
						default:
							$(".subFilters").show();
							$(".subFilter01").next("span").html("Accesible para discapacitados");
							$(".subFilter02").closest("label").hide();
							$(".searchResults").css("height","578px")
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



			// //////////______________________________TARJETAS_____________________________________________________
			// ////////// financiar paso uno

			$(".panelFirstStep input[type='checkbox']").click(function(){
				$(this).toggleClass("checked");
				$(this).nextAll("div").toggleClass("checkFirstStepDivs");
				$(this).nextAll("div:last-child").toggleClass("strongStep");
				//cogemos el valor numÃƒÆ’Ã‚Â©rico de la compra a financiar
				var amountCheck=parseInt($(this).nextAll("div.pull-right").html());//enteros
				var amountSmall=$(this).nextAll("div.pull-right").find(".small").html();//decimales
				amountSmall=parseInt(amountSmall.slice(1,3));//evitamos mÃƒÆ’Ã‚Â¡s de 2 decimales
				var amountCheckTotal = parseFloat(amountCheck+"."+amountSmall);//unimos enteros y decimales
				//cogemos el total existente (entero y decimales)
				var amountTotalInteger=parseInt($(".panelFooterStep").find("strong").html());//enteros
				var amountTotalSmall=$(".panelFooterStep").find("strong").find(".small").html();//decimales
				amountTotalSmall=parseInt(amountTotalSmall.slice(1,3));//evitamos mÃƒÆ’Ã‚Â¡s de 2 decimales
				var amountTotal=parseFloat(amountTotalInteger+"."+amountTotalSmall);//unimos enteros y decimales

				if($(this).hasClass("checked")){//sumamos al total el valor a financiar
					amountTotal += amountCheckTotal;
				}else{//restamos del total el valor a financiar
					amountTotal -= amountCheckTotal;
				}
				//separamos el resultado en 2 partes: el entero y los decimales, segÃƒÆ’Ã‚Âºn la posiciÃƒÆ’Ã‚Â³n del carÃƒÆ’Ã‚Â¡cter "."
				var amountPartOne=parseInt(amountTotal);
				var posComma=(amountTotal+"").indexOf(".");
				var amountPartTwo=(amountTotal+"").slice(posComma+1,posComma+3);//evitamos mÃƒÆ’Ã‚Â¡s de 2 decimales
				//escribimos el resultado con el formato small para decimales
				$(".panelFooterStep").find("strong").replaceWith("<strong>"+amountPartOne+"<span class='small'>,"+amountPartTwo+" ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬</span></strong>");

			});

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


	if ($(window).width() >= 977) {
		if($(".panelsSortables").length){
			$( ".panelsSortables").sortable({
					 placeholder: "ui-state-highlight panelSortable",
					 handle: ".zoneSortablePanel"
				});
		}
		if($(".boxSortables").length){
			$( ".boxSortableDefault" ).mousedown(function(){
				$(".boxSortableDefault").on( "click", function(){
					/* aquí se pondran las mismas funciones escritas en la parte superior
					 * de este documento (las rutas para los click de los button según su clase) */
					if($(this).hasClass("goAccounts")){
						location.href = 'movimientos.html';
					}else if($(this).hasClass("goCards")){
						location.href = 'tarjetas_ficha.html';
					}else if($(this).hasClass("goLoan")){
						location.href = 'prestamo.html';
					}else if($(this).hasClass("goCreditAccount")){
						location.href = 'prestamo_bck.html';
					}else if($(this).hasClass("goDeposit")){
						location.href = 'depositos.html';
					}else if($(this).hasClass("goRentaVariable")){
						location.href = 'valores_renta_variable.html';
					}else if($(this).hasClass("goRentaFija")){
						location.href = 'valores_renta_fija.html';
					}else if($(this).hasClass("goFondosInversion")){
						location.href = 'fondos_inversiones.html';
					}else if($(this).hasClass("goPlanesPensiones")){
						location.href = 'planes_pensiones.html';
					}else if($(this).hasClass("goInsurance")){
						location.href = 'seguros.html';
					}
				});
			});
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

	}


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


	// //////////______________________________DEPÓSITOS Y DETALLE PRODUCTO______________________________________________________

		// //////// Cambio Select efecto Tab en MÃƒÆ’Ã‚Â³vil
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
		var position
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
			var valueSelect = this.value
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
			var valueSelect = this.value
			if(valueSelect == 'Al vencimiento'){
				$('.periodicAdd').slideDown(400);
			}else{
				$('.periodicAdd').slideUp(400);
			}
		});
	}


	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////



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

	// //////////______________________________CONVERSACIÓN/MURO______________________________________________________
	if($(".conversation").length){
		$(".conversation .rowSummary").not(".readed").one("click", function(){
			$(this).addClass("readed");
		});

		$('.writeManagerBottom, .writeManagerTop').hide();
		$('.goManager').click(function(){
			if($(window).width() < 990){
				$('.writeManagerBottom').slideDown(400);
				var posWriteManagerBottom = $('.writeManagerBottom').offset().top;
				posWriteManagerBottom = (posWriteManagerBottom-50) + 'px';
				$("html,body").animate({scrollTop: posWriteManagerBottom});
			}else{
				$('.writeManagerTop').slideDown(400);
				$("html,body").animate({scrollTop: 0});
			}
		});
	}

	$(window).resize(function(){
		$('.writeManagerBottom, .writeManagerTop').slideUp();
	});

	/* aparecen siempre desplegadas en conversatio_gestor.html */
	$(".tablePanel.manager").find(".rowSummary").off("click");

	$("textarea.queryManager").focus(function(){
		$(this).css("height","100px");
		$(".primaryPanel .tableManager button").removeClass("hidden")
	});

	$("textarea.queryManager").blur(function(){
		if(!$(this).val()){
			$(this).css("height","40px")
			$(".primaryPanel .tableManager button").addClass("hidden");
		}
	});

	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////

	// //////////______________________________VÍDEOS______________________________________________________

	// //////// FunciÃƒÆ’Ã‚Â³n para interrumpir los vÃƒÆ’Ã‚Â­deos cuando se cierra el modal
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


	// //////////_____________________________MOSTRAR/OCULTAR TELÉFONOS SELECT______________________________________________________
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
	}
	// ////////////////////////////////////////////////////////////////

	// //////////_____________________________CORREO WEB______________________________________________________
	$('.showCheckCorreoWeb').click(function(){
		$('.checkCorreoWeb').toggle();
	});
	$('.showSearchCorreoWeb').click(function(){
		$('.checkCorreoWeb').hide().find('input').prop('checked',false);
		$('.checkAllCorreoWeb').prop('checked',false);
	});
	$('.checkAllCorreoWeb').change(function(){
		if($(this).is(':checked')){
			$('.checkCorreoWeb').find('input').prop('checked',true);
		}else{
			$('.checkCorreoWeb').find('input').prop('checked',false);
		}
	});
	// ////////////////////////////////////////////////////////////////

	// //////////_____________________________ALTA CLIENTE______________________________________________________
	function scanDoc(){
		$('.scanModule, .scanTitle, .attachDocBlock').show();
		$('.attachModule, .attachTitle, .scanDocBlock').hide();
	}
	function attachDoc(){
		$('.scanModule, .scanTitle, .attachDocBlock').hide();
		$('.attachModule, .attachTitle, .scanDocBlock').show();
	}
	if($('.attachModule').length){
		if($(window).width() < 992){
			$('.scanModule, .scanTitle, .attachDocBlock').show();
			$('.attachModule, .attachTitle, .scanDocBlock').hide();
		}else{
			$('.scanModule, .scanTitle, .attachDocBlock').hide();
			$('.attachModule, .attachTitle, .scanDocBlock').show();
		}
	}

	$('.scanDoc').click(function(){
		scanDoc();
		contentSize();
	});
	$('.attachDoc').click(function(){
		attachDoc();
		contentSize();
	});
	$('.nextStepProcess').click(function(){
		$('.processBlock, .help-block').hide();
		$('.waitingMessage').removeClass('hidden');
		window.setTimeout(greetingsStep, 2000);
		contentSize();
	});
	function greetingsStep(){
		window.location.href = 'cc_confirm_identif.html';
	}

	$('.nextStepProcessClave').click(function(){
		$('.processBlock, .help-block').hide();
		$('.waitingMessage').removeClass('hidden');
		window.setTimeout(greetingsStepClave, 2000);
		contentSize();
	});
	function greetingsStepClave(){
		window.location.href = 'confirm_claves.html';
	}

	$('.nextStepProcessConfirmClave').click(function(){
		$('.processBlock, .help-block').hide();
		$('.waitingMessage').removeClass('hidden');
		window.setTimeout(greetingsStepConfirmClave, 2000);
		contentSize();
	});
	function greetingsStepConfirmClave(){
		window.location.href = 'cc_confirm_claves.html';
	}


	$('.acceptPassword').click(function(){
		$(this).closest('.panel').next('.panel').removeClass('hidden');
		$(this).closest('.row').find('.pull-right').find('.btnArrowNext').removeClass('hidden');
	});

	$('.trabajo').change(function(){
		if($(this).val() == 'cuentaAjena'){
			$('.cuentaAjena').removeClass('hidden');
			$('.cuentaPropia').addClass('hidden');
		}else if($(this).val() == 'cuentaPropia'){
			$('.cuentaAjena').addClass('hidden');
			$('.cuentaPropia').removeClass('hidden');
		}else if($(this).val() == 'cuentaAjenaPropia'){
			$('.cuentaAjena').removeClass('hidden');
			$('.cuentaPropia').removeClass('hidden');
		}else{
			$('.cuentaAjena').addClass('hidden');
			$('.cuentaPropia').addClass('hidden');
		}
	});

	$('.seguro').change(function(){
		var valor = $('.seguro:checked').val();
		if(valor == 'yes'){
			$('.assurance').addClass('hidden');
		}else{
			$('.assurance').removeClass('hidden');
		}
	});
	$('.upload input[type="file"]').change(function(){
		var fileName = $(this).val();
		$(this).closest('.upload').addClass('hidden').next('.fileBlock').removeClass('hidden').find('.fileName').html(fileName);
	});
	$('.fileBlock button').click(function(){
		$(this).closest('.fileBlock').addClass('hidden').prev('.upload').removeClass('hidden').find('.input').val('');
	});

	var contadorPais = 0;
	$('.anotherCountry').click(function(){
		contadorPais++;
		if(contadorPais < 5){
			$(this).prev('.pais').addClass('paisUltimo');
			$(this).prev('.pais').clone().insertAfter('.paisUltimo');
			$('.pais').removeClass('paisUltimo');
			$(this).prev('.pais').addClass('paisUltimo').find('.deleteCountry').on( "click", function() {
				contadorPais--;
				if(contadorPais >= 0){
					$(this).closest('.pais').remove();
					$('.anotherCountry').prev('.pais').addClass('paisUltimo');
				}
			});
			$('.deleteCountry').removeClass('hidden');
		}
	});
	$('.deleteCountry').click(function(){
		contadorPais--;
		if(contadorPais >= 0){
			$(this).closest('.pais').remove();
			$('.anotherCountry').prev('.pais').addClass('paisUltimo');
		}
	});

	// ////////////////////////////////////////////////////////////////

	// //////////_____________________________DATOS CLIENTE______________________________________________________
	$('.btnAceptarTelMovil').click(function(){
		if($('.noMovil').is(':checked')){
			$('.backNextPanel').removeClass('hidden');
		}else{
			$('.backNextPanel, .alert-warning').removeClass('hidden');
		}
	});
	$('.btnAceptarCoord').click(function(){
		$('.backNextPanel').removeClass('hidden');
		$(this).closest('.panel').next('.panel').removeClass('hidden');
	});
	if($('.noMovil').length){
		$('.noMovil').click(function(){
			if($(this).is(':checked')){
				$('.prefijoPais, .telefono').attr('disabled', true);
				$(this).closest('form').attr('action','../Primera_fase/inicio_3x_clave.html');
			}else{
				$('.prefijoPais, .telefono').attr('disabled', false);
				$(this).closest('form').attr('action','contrasena_otp.html');
			}
			$('.backNextPanel, .alert-warning').addClass('hidden');
		});
	}


	// //////////_____________________________CONTRATACION CUENTA NOMINA______________________________________________________

			// /////////// scroll a paso siguiente CONTRATACION CUENTA NOMINA
			function scrollFindPayrollAccount(elementClick){
				if($('.panelFromTransfer').length || $('.funds').length){//lo hacemos independiente del script de notificaciones
					var posBottomPanel = $(elementClick).closest('.panel').offset().top;
					var posNextPanel = posBottomPanel + $(elementClick).closest('.panel').outerHeight() + 450;
					$("html,body").animate({scrollTop: posNextPanel});
				}
			}

			//////////////////////////////////////////////////////////////////

	$('.btnPayrollAmount').click(function(){
		if($(this).hasClass('btnPayrollAmount')){
			$(".alert-warning").removeClass("hidden");
			$(".secondaryPanel").removeClass("hidden");

			$(".boxModuleSecondary").removeClass("hidden");
			$(".backNextPanel").removeClass("hidden");

			addBorderToBox(this);
			if ($(window).width() > 751) {
				scrollFindPayrollAccount(this);
			}
			contentSize();
		}
	});

	// ////////////////////////////////////////////////////////////////



	// ////////////////////////////////////////////////////////////////

//              // //////////_____________________________FINANCIAR PASO 1 - MOSTRAR VENTANA DE ERROR SI NO SE SELECCIONA NINGÚN CHECK______________________________________________________
//              if($(".btnMostrarError").length){
//                $(".btnMostrarError").click(function() {
//                      if($("#check1").is(':checked') || $("#check2").is(':checked') || $("#check3").is(':checked') || $("#radio1").is(':checked') || $("#radio2").is(':checked')) {
//                          $(".btnMostrarError").removeAttr("data-toggle");
//                      }
//                  });
//                };
//              // ////////////////////////////////////////////////////////////////

	// ////////// BUSCADOR FONDOS - Desactivamos la opción para que se despliegue la tabla .scrollable en móvil
	$('.responsive .rowSummary').on('click',function(){
		if ($(window).width() <= 751) {
			$('.scrollable').find('.rowDetailsFunds').css("display", "none");

		}
	});
	// ////////////////////////////////////////////////////////////////

	//  (vmn) marcar y semarcar check al pulsar <label>
	 $('.acc label.light').on('click', function(){
		var n = $(this).parent('div').parent('div').find('div.indice').find('input:checked').length;
		if(n==0){
			$(this).parent('div').parent('div').find('div.indice').find('input[type="checkbox"]').prop( "checked", true );
		}else{
			 $(this).parent('div').parent('div').find('div.indice').find('input[type="checkbox"]').prop( "checked", false );
		}
	 });

	// fin marcar y semarcar check al pulsar <label>
	//borra contenido importe
	$('article.fondosPrimeraSus .boxTransfer').click(function(){

		$('.form-control.amountTransferFirstFund, .form-control.amountTransfer').val('');
		$('.panelSimilarFunds').addClass('hidden');
	})
	// fin borra contenido importe

	//arregla error responsive en buscador de fondos
	var arreglaBuscaFondos = function(){
		if ($(window).width() <= 768) {
			$('.buscadorFondos .scrollable .responsive  tr.rowSummary td[colspan="6"]').css('display','table-cell');
		};
	};
	$(window).resize(arreglaBuscaFondos);
	$(window).load(arreglaBuscaFondos);

//-----------------------------------------------
	//planes_contratacion/planes_traspaso_bk.html
	var planesTraspaso = function(){
		var pt_ini = function(){
			$('article.planes_traspaso .p1 .mostrarEntidad, article.planes_traspaso .p2 .mostrarEntidad').addClass('hidden');
			$('article.planes_traspaso .p2, article.planes_traspaso .p3, article.planes_traspaso .p4, article.planes_traspaso .p5, article.planes_traspaso .p6').addClass('hidden');
		};
		pt_ini();

		var ancho = $(window).width();

		var tamanioDisp = ['480','768','1024'];



//aplica resize si no es android
		if( !navigator.userAgent.match( /Android/i ) ) {
			$(window).resize(function(){

				ancho = $(window).width();

				if(ancho <= tamanioDisp[1]){
				//sm,xs
					$('article.planes_traspaso .p1 .panel-body').addClass('hidden');
					$('article.planes_traspaso .p1 .panel-heading span').removeClass('hidden');
					$('article.planes_traspaso .p1').addClass('panelMovilStep');
					$('article.planes_traspaso .p2 .panel-body').addClass('hidden');
					$('article.planes_traspaso .p2 .panel-heading span').removeClass('hidden');
					$('article.planes_traspaso .p2').addClass('panelMovilStep');
					$('article.planes_traspaso .p3 .panel-body').addClass('hidden');
					$('article.planes_traspaso .p3 .panel-heading span').removeClass('hidden');
					$('article.planes_traspaso .p3').addClass('panelMovilStep');
					//$('article.planes_traspaso .p3 .panel-body').hide();
				} else {
				// md, lg
					$('article.planes_traspaso .p1 .panel-body').removeClass('hidden');
					$('article.planes_traspaso .p1 .panel-heading span').addClass('hidden');
					$('article.planes_traspaso .p1').removeClass('panelMovilStep');
					$('article.planes_traspaso .p2 .panel-body').removeClass('hidden');
					$('article.planes_traspaso .p2 .panel-heading span').addClass('hidden');
					$('article.planes_traspaso .p2').removeClass('panelMovilStep');
					$('article.planes_traspaso .p3 .panel-body').removeClass('hidden');
					$('article.planes_traspaso .p3 .panel-heading span').addClass('hidden');
					$('article.planes_traspaso .p3').removeClass('panelMovilStep');
					$('article.planes_traspaso .p3 .panel-body').show();
				}
			}); //fin window.resize
		} else{

			//$("footer.footer").addClass("absoluteFooter");
		}
		$('.panel-heading').unbind('click');

		var headExt = function(elem) {
			console.log(elem);
				$(elem + ' ' + '.panel-body').removeClass('hidden');
				$(elem).removeClass('panelMovilStep');
				$(elem + ' ' + '.panel-heading span').addClass('hidden');
				if(elem == '.p3'){
					console.log('elem p3');
					$(elem + ' ' + '.panel-body').css('display', 'block');
					}
		};
		$('.p1 .panel-heading').on('click', function(){
			headExt('.p1');
		});
		$('.p2 .panel-heading').on('click', function(){
			headExt('.p2');
		});
		$('.p3 .panel-heading').on('click', function(){
			headExt('.p3');
		});

		var miScroll = function(este){
			var ancho = $(window).width();
			if(ancho >= tamanioDisp[1]){
				var posBottomPanel = $(este).closest('.panel').offset().top;
				var posNextPanel = posBottomPanel + $(este).closest('.panel').outerHeight() - 30;
				$("html,body").animate({scrollTop: posNextPanel});
			} else{
				$("html,body").animate({scrollTop: 0});
			}
		};

		$('article.planes_traspaso .p1 button.pt_buscar').on('click', function(){
			$('article.planes_traspaso .p1 .mostrarEntidad').removeClass('hidden');
		});

		$('article.planes_traspaso .p1 .mostrarEntidad').on('click', function(){

			//al hacer click en otra caja, si hay una caja seleccionada,
			//elimina seleccion y oculta bloques para nueva seleccion
			if($('article.planes_traspaso .p1 .panel-heading').closest('.panel').find('.boxActive').length){

				$('article.planes_traspaso .p1 .panel-heading').closest('.panel').find('.boxActive').removeClass('boxActive');
				$('article.planes_traspaso .p2 .panel-heading').closest('.panel').find('.boxActive').removeClass('boxActive');
	
				$('article.planes_traspaso .p2').removeClass('panelMovilStep');
				$('article.planes_traspaso .p2 .panel-heading span').addClass('hidden');
				$('article.planes_traspaso .p2 .panel-body').removeClass('hidden');
				$('article.planes_traspaso .p2 .mostrarEntidad').addClass('hidden');

				$('article.planes_traspaso .p3 .panel-heading').closest('.panel').find('.boxActive').removeClass('boxActive');
				$('article.planes_traspaso .p3').addClass('hidden');
				$('article.planes_traspaso .p4').addClass('hidden');
				$('article.planes_traspaso .p5').addClass('hidden');
				$('article.planes_traspaso .p6').addClass('hidden');
			}
			var este=this;
			$(este).addClass('boxActive');
			$('article.planes_traspaso .p2').removeClass('hidden');

			miScroll(este);
			var ancho = $(window).width();
			if(ancho <= tamanioDisp[1]){
				$('article.planes_traspaso .p1').addClass('panelMovilStep');
				$('article.planes_traspaso .p1 .panel-heading span').removeClass('hidden');
				$('article.planes_traspaso .p1 .panel-body').addClass('hidden');
			}

		});
//---
		$('article.planes_traspaso .p2  button.pt_buscar2').on('click', function(){

			$('article.planes_traspaso .p2 .mostrarEntidad').removeClass('hidden');
		});

		$('article.planes_traspaso .p2 .mostrarEntidad').on('click', function(){
			if($('article.planes_traspaso .p2 .panel-heading').closest('.panel').find('.boxActive').length){
				$('article.planes_traspaso .p2 .panel-heading').closest('.panel').find('.boxActive').removeClass('boxActive');
				$('article.planes_traspaso .p3 .panel-heading').closest('.panel').find('.boxActive').removeClass('boxActive');
				$('article.planes_traspaso .p3').removeClass('panelMovilStep');
				$('article.planes_traspaso .p3 .panel-heading span').addClass('hidden');
				$('article.planes_traspaso .p3').removeClass('hidden');
				$('article.planes_traspaso .p3 .panel-body').css('display', 'block').removeClass('hidden');
				$('article.planes_traspaso .p4').addClass('hidden');
				$('article.planes_traspaso .p5').addClass('hidden');
				$('article.planes_traspaso .p6').addClass('hidden');
			}
			$(this).addClass('boxActive');
			$('article.planes_traspaso .p3').removeClass('hidden');

			var este=this;
			miScroll(este);

			if(ancho <= tamanioDisp[1]){
				// formato movil para click de cabecera
				$('article.planes_traspaso .p2').addClass('panelMovilStep');
				$('article.planes_traspaso .p2 .panel-heading span').removeClass('hidden');
				$('article.planes_traspaso .p2 .panel-body').addClass('hidden');
				//fin formato movil para click de cabecera
			}
		});


		//muestra paneles p4,p5,p6 al hacer click en boxTransfer de p3
		$('article.planes_traspaso .myCarouselTransferFrom .boxTransfer').on('click', function(){
			$('article.planes_traspaso .p4, article.planes_traspaso .p5, article.planes_traspaso .p6').removeClass('hidden');
			$('article.planes_traspaso .p6').show();
			var este=this;
			miScroll(este);
		});


	}
// fin planesTraspaso
// ----------------
planesTraspaso();

    $('.siguiente').on('click', function(){
        $('.abreSiguiente').removeClass('hidden');
    })
    
    

    
    
 // //////////_______________________________________________wizard traspaso fondos primera suscripción



  //jsAceptar con Boton Aceptar para mostrar panelFondosSimilares en fondos_primera_suscripcion.html
  $('.jsAceptar').click(function(){
  	
  	if($(this).closest('.primaryPanel').hasClass('panelImporteFondo')){							
  		if($('.amountTransferFirstFund').val()){								
  			if ($(window).width() <= 751) {
  				$(".panelImporteFondo").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  				$(".panelImporteFondo .panel-body").hide();
  				$(".panelAmountTransfer2").addClass('hidden');
  				$('.panelFondosSimilares').removeClass('hidden').removeClass('hidden-xs');
  			}
  			if ($(window).width() >= 751) {
  				$('.panelFondosSimilares').removeClass('hidden').removeClass('hidden-xs');
  			}
  			scrollNextPanel(this);
  		}else{
  			alert('Debe indicar un importe');
  		}					
  		$('.amountTransferFirstFund').keyup(function(){								
  			if($(this).val()){
  			}else{
  				$('.panelFondosSimilares, .panelParaTransfer.panelClasesFondos, .panelFondoFusion, .panelFormFunds, .panelFormResultFunds.primaryPanel, .backNextPanel').addClass('hidden');									
  			}								
  		});							

  	}
  	if($(this).closest('.primaryPanel').hasClass('panelImporteFondoTransfer')){
  		if($('.amountTransfer').val()){
  			if ($(window).width() <= 751) {
  				$(".panelImporteFondoTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  				$(".panelImporteFondoTransfer .panel-body").hide();
  				//$(".panelImporteFondo").hide();									
  				$(".panelImporteFondo").addClass('hidden').addClass('hidden-xs');
  				$('.panelFondosSimilares').removeClass('hidden').removeClass('hidden-xs');									
  			}
  			if ($(window).width() >= 751) {
  				$('.panelFondosSimilares').removeClass('hidden');
  			}
  			scrollNextPanel(this);
  		}else{
  			alert('Debe indicar un importe');
  		}					
  		$('.amountTransfer').keyup(function(){
  			if($(this).val()){

  			}else{
  				$('.panelFondosSimilares').addClass('hidden');									
  			}
  			
  		});
  		
  	}
  	/////Clase noReset
  	if (!$('.panelParaTransfer .boxTransfer').hasClass('noReset')){	
  		resetAllTransferencias();
  	}
  	//////////////////						
  });


  $('input.similarFunds').change(function(){
  	$('.panelParaTransfer, .panelFondoFusion').addClass('hidden');
  });
  $('.btnAceptarSimilarFunds').click(function(){
  	
  	if($('input.similarFunds:checked').val() == 'otherClases'){
  		$('.panelParaTransfer:not(.asociateNewFund)').removeClass('hidden');
  		$('.panelFondoFusion').addClass('hidden');
  		
  		if ($(window).width() <= 751) {
  			$(".panelClasesFondos .panel-body").show();
  			$(".panelClasesFondos").removeClass("panelMovilStep").find('.panel-heading > span').addClass('hidden');
  			
  			$(".panelFondosSimilares").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  			$(".panelFondosSimilares .panel-body").hide();
  		}							
  	}else if($('input.similarFunds:checked').val() == 'thisFund'){
  		$('.panelFondoFusion').removeClass('hidden');
  		$('.panelParaTransfer:not(.asociateNewFund').addClass('hidden');
  		
  		if ($(window).width() <= 751) {			
  			$(".panelFondosSimilares").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  			$(".panelFondosSimilares .panel-body").hide();
  		}
  		
  	}
  	addBorderToBox(this);
  	if ($(window).width() > 751) {
  		scrollNextPanel(this);
  	}
  	scrollNextPanel(this);					
  });

  $('input.fusionFund').change(function(){
  	$('.panelFormFunds').addClass('hidden');
  });
  $('.btnAceptarFusionFunds').click(function(){
  	if($('input.fusionFund:checked').val() == 'continueThisFund'){
  		$('.panelFormFunds').removeClass('hidden');
  		if ($(window).width() <= 751) {
  			$(".panelFondoFusion").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  			$(".panelFondoFusion .panel-body").hide();
  		}							
  	}else if($('input.fusionFund:checked').val() == 'fusionResult'){
  		window.location.reload();
  	}
  	addBorderToBox(this);
  	if ($(window).width() > 751) {
  		scrollNextPanel(this);
  	}
  	scrollNextPanel(this);						
  });

  $('.btnAceptarFormFunds').click(function(){
  	$('.panelFormResultFunds').removeClass('hidden');
  	if ($(window).width() <= 751) {
  		$(".panelFormFunds").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  		$(".panelFormFunds .panel-body").hide();
  	}
  	addBorderToBox(this);
  	if ($(window).width() > 751) {
  		scrollNextPanel(this);
  	}
  	scrollNextPanel(this);							
  });

  $('.btnContinueBuy').click(function(){
  	$('.panelFormResultFunds').find('hr').removeClass('hidden');
  	$('.panelFormResultFunds').find('.checkbox').removeClass('hidden');
  	$('.panelFormResultFunds').find('.textoConfirm').removeClass('hidden');
  	$('.alert-info, .backNextPanel').removeClass('hidden');
  	addBorderToBox(this);						
  	if ($(window).width() > 751) {							
  		scrollNextPanel(this);							
  	}
  });

  $('.btnAceptarOtroFondo').click(function(){
  	$(".asociateNewFund .boxTransfer").removeClass("boxActive");
  	if ($(window).width() <= 751) {
  		$(".panelWizard").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');								
  		$(".panelWizard .panel-body").hide();
  		$('.fromOtherFund').addClass('hidden');
  		resetAllTransferencias();
  		scrollNextPanel(this);
  	}
  });

  //ocultar panelFormResultFunds cuando se modifique algún valor check de panelFormFunds 
  $('input.formFunds').change(function(){
  	$('.panelFormResultFunds, .backNextPanel').addClass('hidden');
  });

  //ocultar panelFormResultFunds cuando se modifique algún valor option del select .form-control
  $('select.form-control').change(function(){
  	$('.panelFormResultFunds').addClass('hidden');
  });



  $('.transferAll').change(function(){
  	if($(this).is(':checked')){
  		$('.amountTransfer').prop( "disabled", true );
  		//$('.amountTransfer').val('1000');
  		participaciones = '';
  		$('.participaciones').html(participaciones + ' participaciones');
  		$('.mensaje2 span').html(0);
  		$('.mensaje2').removeClass('hidden');
  		if($(this).closest('.panel').hasClass('panelImporteFondoTransfer')){
  			$('.panelFondosSimilares').removeClass('hidden');
  		}else{
  			$('.backNextPanel').removeClass('hidden');
  		}
  	}else{
  		//$('.mensaje2 span').html(200);
  		$('.mensaje2').addClass('hidden');
  		$('.amountTransfer').prop( "disabled", false );
  		if($(this).closest('.panel').hasClass('panelImporteFondoTransfer')){
  			$('.panelFondosSimilares').addClass('hidden');
  		}else{
  			$('.backNextPanel').addClass('hidden');
  		}
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

  			



  // /////////////// Click en cabeceras de panel en móvil - Fondos					
  $(".panel-heading").click(function(){

  	if('.panelWizard'){//lo hacemos independiente del script de notificaciones							
  		if ($(window).width() < 751 && $(this).closest('.panel').is('.panelMovilStep')) {
  			$('.fusionAlert').addClass('hidden').addClass('hidden-xs');								
  			$(this).closest('.panelMovilStep').removeClass('panelMovilStep').find('.panel-body').show();
  			$(this).find('> span').addClass('hidden');

  			$(this).closest('.panel').nextAll('.panel').removeClass('panelMovilStep').addClass('hidden');
  			$(this).closest('.panel').nextAll('.panel').find('.panel-heading > span').addClass('hidden');
  			$(this).closest('.panel').nextAll('.panel').find('.panel-body').show();
  			$(this).closest('.panel').find('.boxActive').removeClass('boxActive');
  			$(this).closest('.panel').nextAll('.panel').find('.boxActive').removeClass('boxActive');								
  			contentSize();								
  		}
  	}
  });

  // ////////////////////////////////////////////////////////////////					




  // //////////______________________________TRANSFERENCIAS______________________________________________________


  // /////////// Boxes - Transferencias /////////////////////
  function resetAllTransferencias(){
  	
  	$('.panelImporteFondo, .detailsNewBeneficiary, .panelObservationsTransfer').find('input[type="text"]').val('');
  	$('.panelImporteFondo, .detailsNewBeneficiary').find('input[type="checkbox"]').attr('checked', false);
  	$('.panelImporteFondo').find('select option:first-child').prop('selected', true);
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


  $(".panelWizard .boxTransfer").click(function(){	
  			
  	$('.detailsNewBeneficiary, .panelDetailsBeneficiary, .panelDetailsDelivery, .detailsContacts, .panelImporteFondo, .panelObservationsTransfer, .backNextPanel').addClass('hidden');
  	resetAllTransferencias();
  	

  	/////////////////////////////////////////
  	
  	
  						
  	if ($(window).width() <= 751) {
  		$(".panelDesde").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  		$(".panelDesde .panel-body").hide();
  		$(".panelImporteFondoTransfer").addClass('hidden');

  	}

  	/////////////////////////////////////////
  	
  	
  	if ($(window).width() <= 751) {
  		$('.panelClasesFondos, .fromFund, .panelImporteFondoTransfer').addClass('hidden');
  		resetAllTransferencias();
  	}						
  	
  	if ($(this).hasClass("Visa")){
  		$(".forTransfer .boxTransfer").addClass("boxDesactive");
  		$("span.Selected").remove();
  		$(".secondaryBoxes").hide();
  		// /////////// Rensponsive - Efecto por pasos al pusar boxes en mÃ³vil - Transferencias 
  		if ($(window).width() <= 751) {
  			$(".panelWizard").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  			$(".panelWizard .panel-body").hide();
  			$(".panelParaTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  			$(".panelParaTransfer .panel-body").hide();
  		}
  		$(".boxTransfer").removeClass("boxActive");
  		$('.panelImporteFondo').removeClass('hidden').removeClass('hidden-xs');
  		$(".panelParaTransfer .boxTransfer.boxSharedAccount").removeClass('boxDesactive').addClass("boxActive");
  		
  		$('.panelParaTransfer').removeClass('hidden').removeClass('hidden-xs');
  	}else if($(this).closest('.panelWizard').hasClass('buyFirstFund')){
  		$(".fromFund .boxTransfer").removeClass("boxActive");
  		$(".panelParaTransfer.panelClasesFondos .boxTransfer").removeClass("boxActive");
  		$(".buyFirstFund .boxTransfer").removeClass("boxActive");
  		$('.panelDesde').addClass('hidden');
  		$('.fromFund').addClass('hidden');
  		$('.fromOtherFund').addClass('hidden');
  		resetAllFunds();
//  		if($(this).hasClass('yourAccounts')||('yourFunds')||('otherFunds')){
  		if($(this).hasClass('yourAccounts')){
  			$('.panelDesde').removeClass('hidden');
  		}else if($(this).hasClass('yourFunds')){
  			$('.fromFund').removeClass('hidden');
  		}else if($(this).hasClass('otherFunds')){
  			$(".fromOtherFund .boxTransfer").removeClass("boxActive");
  			$('.fromOtherFund').removeClass('hidden');
  			if ($(window).width() <= 751) {	
  				/*$(".fromOtherFund").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');								
  				$(".fromOtherFund .panel-body").hide();*/									
  			}
  		}
  		
  	}else if($(this).closest('.panelWizard').hasClass('panelDesde')){
  		//$('.panelImporteFondo').removeClass('hidden').removeClass('hidden-xs');
  		$('.panelImporteFondo').removeClass('hidden');
  		//eliminamos la clase .boxActive de boxTransfer al hacer click en otra boxTransfer
  		$(".panelDesde .boxTransfer").removeClass("boxActive");
  		if ($(window).width() <= 751) {								
  			$(".buyFirstFund").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');								
  			$(".buyFirstFund .panel-body").hide();
  			scrollNextPanel(this);
  			$('.panelImporteFondo').removeClass('hidden-xs');
  		}
  		
  	}else if($(this).closest('.panelWizard').hasClass('fromFund')){
  		//$('.panelImporteFondo').removeClass('hidden').removeClass('hidden-xs');
  		$('.panelImporteFondoTransfer').removeClass('hidden');
  		//eliminamos la clase .boxActive de boxTransfer al hacer click en otra boxTransfer
  		$(".panelDesde .boxTransfer").removeClass("boxActive");
  		$(".fromFund .boxTransfer").removeClass("boxActive");
  		if ($(window).width() <= 751) {								
  			$(".buyFirstFund").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');								
  			$(".buyFirstFund .panel-body").hide();
  			scrollNextPanel(this);
  			$('.panelImporteFondoTransfer').removeClass('hidden-xs');								
  		}
  		
  	}else if($(this).hasClass('mostrarEntidad')){							
  		$('.entidad').removeClass('hidden');
  		addBorderToBox(this);
  		return false;
  	}else{
  		if(!$(this).closest('.boxFunds').length){								
  			$(".forTransfer .boxTransfer").removeClass("boxDesactive");
  		}
  		// /////////// Rensponsive - Efecto por pasos al pusar boxes en mÃ³vil - Transferencias 
  		if ($(window).width() <= 751) {
  			$(".panelWizard").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  			$(".panelWizard .panel-body").hide();
  		}
  		$(".boxTransfer").removeClass("boxActive");
  		
  		$('.panelParaTransfer').removeClass('hidden').removeClass('hidden-xs');
  		
  	}
  	addBorderToBox(this);
  	if ($(window).width() > 751) {
  		scrollNextPanel(this);
  	}
  	//contenSize para trasnferencias
  	contentSize();		
  });

  var destinatarioHalCash;
  $(".panelParaTransfer .boxTransfer").click(function(){
  	if (!$(this).hasClass('boxDesactive')){
  		$('.detailsNewBeneficiary, .panelDetailsBeneficiary, .panelDetailsDelivery, .detailsContacts, .panelImporteFondo, .panelObservationsTransfer, .backNextPanel').addClass('hidden');
  		//resetAllTransferencias();
  		
  		/////Clase noReset						
  		if (!$(this).hasClass('noReset')){	
  			resetAllTransferencias();
  		}							
  		/////
  		
  		if($(this).hasClass("newBeneficiary")){
  			$('.detailsNewBeneficiary').removeClass('hidden').removeClass('hidden-xs');
  		}else if($(this).hasClass("Contacts")){
  			$('.detailsContacts').removeClass('hidden').removeClass('hidden-xs');
  		}else if($(this).hasClass("Cajero")){
  			if($(this).hasClass('aMiMismo')){
  				destinatarioHalCash = 'A mÃ­ mismo';
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
  			$('.panelFondoFusion').removeClass('hidden');								
  			$('.panelImporteFondo').removeClass('hidden').removeClass('hidden-xs');
  				//panel importe visible-oculto
  				$(".panelParaTransfer.panelClasesFondos").click(function(){										
  					if ($('.yourFunds').hasClass('boxActive')){											
  						$('.panelImporteFondo.primaryPanel').addClass('hidden').addClass('hidden-xs');
  					}
  					if ($('.otherFunds').hasClass('boxActive')){										
  						$('.panelImporteFondo.primaryPanel').addClass('hidden').addClass('hidden-xs');
  					}
  				});
  			
  			if ($('.panelImporteFondoTransfer').hasClass('panelMovilStep')){
  					$('.panelImporteFondo').addClass('hidden').addClass('hidden-xs');										
  				}
  			if ($(window).width() <= 751) {
  				$(".panelParaTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  				$(".panelParaTransfer .panel-body").hide();
  				$(".panelImporteFondo").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  				$(".panelImporteFondo .panel-body").hide();
  			}
  			addBorderToBox(this);
  			if ($(window).width() > 751) {
  				scrollNextPanel(this);
  			}
  			scrollNextPanel(this);									
  		}else if($(this).closest('.panelParaTransfer').hasClass('asociateNewFund')){
  			$('.panelImporteFondoTransfer').removeClass('hidden').removeClass('hidden-xs');
  			if ($(window).width() <= 751) {
  				$(".panelParaTransfer .panel-body").hide();
  				$(".panelParaTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  				if($('.panelParaTransfer').hasClass('panelClasesFondos')){										
  					$(".panelClasesFondos .panel-body").show();
  					$(".panelClasesFondos").removeClass("panelMovilStep").find('.panel-heading > span').addClass('hidden');
  				}
  			}
  		}else{
  			$('.panelImporteFondo').removeClass('hidden').removeClass('hidden-xs');
  			
  			// /////////// Rensponsive - Efecto por pasos al pusar boxes en mÃ³vil - Transferencias 
  			if ($(window).width() <= 751) {
  				$(".panelParaTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
  				$(".panelParaTransfer .panel-body").hide();									
  				$('.fusionAlert').removeClass('hidden').removeClass('hidden-xs');
  			}
  		}
  		
  		$(".panelParaTransfer .boxTransfer").removeClass("boxActive");
  		
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




  // /////////// scroll a paso siguiente
  function scrollNextPanel(elementClick){
  	if($('.panelWizard').length || $('.funds').length){//lo hacemos independiente del script de notificaciones
  		var posBottomPanel = $(elementClick).closest('.panel').offset().top;
  		var posNextPanel = posBottomPanel + $(elementClick).closest('.panel').outerHeight() - 30;
  		$("html,body").animate({scrollTop: posNextPanel});
  	}
  }

  //////////////////////////////////////////////////////////////////

  // /////////// Click en cabeceras de panel en móvil - Transferencias
  $(".panel-heading").click(function(){
  	if($('.panelWizard').length){//lo hacemos independiente del script de notificaciones
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
  	if($('.panelWizard').length){//lo hacemos independiente del script de notificaciones
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
  
  
  
  
  $('.btnArrowFirma').click(function(){
	  	location.href = 'fondos_primera_suscripcion_firma.html';
	  });
  // ////////////////////////////////////////////////////////////////end wizard traspaso fondos primera suscripción  

	//evitamos desplegar filas funcionalidad
	$('.js-unbind .rowSummary').unbind('click');


});

//// //////// Función popUp
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
