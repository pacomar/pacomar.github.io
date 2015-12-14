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
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
						$('.footer .footerLinks li .classicVersion').closest('li').show();
					} else {
						$('.footer .footerLinks li .classicVersion').closest('li').hide();
					}
					
					// //////// Poner > y mayúsculas la primera letra en input type submit y type button para los componentes jsf
					if($('input[type="submit"]').length || $('input[type="button"]').length){
						$('input[type="submit"]').each(function(){
							var valueInput = $(this).attr('value').toLowerCase();
							valueInput = valueInput.substring(0,1).toUpperCase() + valueInput.substring(1);
							if($(this).hasClass('btnArrowPrev')){
								valueInput = '‹ ' + valueInput;
							}else if($(this).hasClass('btnArrowNext')){
								valueInput = valueInput + ' ›';
							}
							$(this).attr('value',valueInput);
						});
						$('input[type="button"]').each(function(){
							var valueInput = $(this).attr('value').toLowerCase();
							valueInput = valueInput.substring(0,1).toUpperCase() + valueInput.substring(1);
							if($(this).hasClass('btnArrowPrev')){
								valueInput = '‹ ' + valueInput;
							}else if($(this).hasClass('btnArrowNext')){
								valueInput = valueInput + ' ›';
							}
							$(this).attr('value',valueInput);
						});
					}
					
					// //////// Accordion FAQ
					$('.row.collapse').on('shown.bs.collapse', function () {
						contentSize();
					});		
					// /////////////////////////////////////////////////////
					
					
					
					// /////////////////////////////////////////////////////

														
					// funcines para llamar al traker de ga. el
					// id del mensaje se extrae de la url

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
					
					
					// //////// Enlaces Buttons
//					$(".linkContratoBanca").click(function(){
//        		    			location.href = 'contrato_banca_distancia.html';
//        		    });
//        		    $(".linkCambioClaveUno").click(function(){
//        		    			location.href = 'cambio_clave_paso_uno.html';
//        		    });
//        		    $(".linkCambioNombreCuenta").click(function(){
//        		    			location.href = 'movimientos_cambio_nombre_cuenta.html';
//        		    });
//        		    $(".linkTransfPeriodicas").click(function(){
//        		    			location.href = 'transferencias.html ';
//        		    });
//        		    $(".linkTransferencias").click(function(){
//        		    			location.href = 'transferencias.html';
//        		    });
//        		    $(".linkTransfCancel").click(function(){
//        		    			location.href = 'transferencias_cancelacion.html';
//        		    });
//        		    $(".linkFinanciarpasouno").click(function(){
//        		    			location.href = 'tarjetas_financiar_paso_uno.html';
//        		    });
//        		    $(".linkCardsActive").click(function(){
//        		    			location.href = 'tarjetas_activar.html';
//        		    });
//        		    $(".linkCardsPIN").click(function(){
//        		    			location.href = 'tarjetas_solicitar.html';
//        		    });
//        		    $(".linkCardsPINConfirm").click(function(){
//        		    			location.href = 'tarjetas_solicitar_confirmacion.html';
//        		    });
//        		    $(".signOnDeposit").click(function(){
//        		    			location.href = 'depositos_contratacion_dos.html';
//        		    });
//        		    $(".goSimulateDeposit").click(function(){
//        		    			location.href = 'public_depositos_simulador.html';
//        		    });
//        		    $(".goHelpDeposit").click(function(){
//        		    			location.href = 'public_depositos_ayuda.html';
//        		    });
//        		    $(".btnClientAccess, .btnLogin").click(function(){
//        		    			location.href = 'public_acceso_clientes.html';
//        		    });
//        		    $(".goCards").click(function(){
//        		    			location.href = 'tarjetas_ficha.html';
//        		    });
//        		    $(".goDeposit").click(function(){
//        		    			location.href = 'depositos.html';
//        		    });
//        		     $(".goTransferContinue").click(function(){
//        		    			location.href = 'transferencias_nacional_confirmacion.html';
//        		    });
//        		    $(".linkNuevaNotificacion").click(function(){
//        		    			location.href = 'notificaciones_nueva.html';
//        		    });
//        		    $(".linkCambioClaveDos").click(function(){
//        		    			location.href = 'cambio_clave_paso_dos.html';
//        		    });
//        		    $(".linkAltaCoord").click(function(){
//        		    			location.href = 'avisos_alta_coord.html';
//        		    });
//        		    $(".linkAddProductSaving").click(function(){
//        		    			location.href = 'public_ahorro_e_inversion.html';
//        		    });
//        		    $(".goAccounts, .goMovements").click(function(){
//        		    			location.href = 'movimientos.html';
//        		    });
//        		    $(".goRentaVariable").click(function(){
//        		    			location.href = 'valores_renta_variable.html';
//        		    });
//        		    $(".goRentaFija").click(function(){
//        		    			location.href = 'valores_renta_fija.html';
//        		    });
//        		    $(".goInsurance").click(function(){
//        		    			location.href = 'seguros.html';
//        		    });
//        		    $(".goLoan").click(function(){
//        		    			location.href = 'prestamo.html';
//        		    });
//        		    $(".goCreditAccount").click(function(){
//        		    			location.href = 'prestamo_bck.html';
//        		    });
//        		    $(".goReturnReceipt").click(function(){
//        		    			location.href = 'devolucion_recibo.html';
//        		    });
//        		    $(".goOfficesAndCashiers").click(function(){
//        		    			location.href = 'public_buscador_oficinas_cajeros.html';
//        		    });
//        		    $(".goAtteFAQ").click(function(){
//        		    			location.href = 'public_att_cliente_preguntas.html';
//        		    });
//        		    $(".acceptContract").click(function(){
//        		    			location.href = 'inicio_3x.html';
//        		    });
//        		    $(".goPlanesPensiones").click(function(){
//        		    			location.href = 'planes_pensiones.html';
//        		    });
//        		    $(".goFondosInversion").click(function(){
//        		    			location.href = 'fondos_inversiones.html';
//        		    });
//        		    $(".goNotificacionCancelar").click(function(){
//        		    			location.href = 'notificaciones_cancelacion.html';
//        		    });
//        		    $(".goNotificacionModificar").click(function(){
//        		    			location.href = 'notificaciones_modificacion.html';
//        		    });
        		  
        			// /////////////////////////////////////////////////////
					
        		    
					// //////// Mostrar/Ocultar sombra en header menú móvil
        		    $(window).scroll(function() {
						var heightScroll = $(window).scrollTop()
						if (heightScroll > 0) {
							$(".headContainer").addClass("headerShadow");						
						} else if (heightScroll == 0) {
							$(".headContainer").removeClass("headerShadow");
						}
					});
					// /////////////////////////////////////////////////////

					
					// //////// Sidr - Menu lateral - http://www.berriart.com/sidr/
					if($('body').hasClass('private')){
						$('.responsive-menu-button').sidr({
							name: 'sidr',
							source : '.navigation, .dropdown-menu, .footerOfficesAndTel, .btnDisconnect'
							
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
					}else if($('body').hasClass('home')){
						$('.responsive-menu-button').sidr({
							name: 'sidr',
							source : '.navigation, .footerOfficesAndTel'
						});
					}else{
						$('.responsive-menu-button').sidr({
							name: 'sidr',
							source : '.userControls li.dropdown-toggle:first-child, .navigation, .footerOfficesAndTel'
						});
						$('.publicWhite .sidr-inner:first-child .sidr-class-arrowDownMenu').click(function(){
							$(this).toggleClass('turned');
						});
						$('.sidr-class-arrowDownMenu').click(function(){
							$('.sidr-class-dropdown-menu').slideToggle();
							/*var heightUser = $('.sidr-class-user').outerHeight(); 
							if(heightUser > 55){
								$('.sidr-class-user').animate({height: "48px"}, 400);
							}else{
								$('.sidr-class-user').animate({height: "175px"}, 400);
							}*/
							$('.sidr-class-animatedArrow').toggleClass('turned');
							
						});
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
						location.href = 'productos_bankinter.html';
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
					
					
					// //////// dropdown menu /////////////////////////////////
					var widthDropdown=parseInt($(".dropdown-menu").css("width"));
	        		var widthParent=parseInt($(".dropdown-menu").parent("li.dropdown-toggle").css("width"));
	        		var widthPestana=parseInt($(".arrowSup").css("width"));
	        		var leftResult=-widthDropdown/2+widthParent/2;
	        		var leftResultPestana=widthDropdown/2-widthPestana/2;
	        		$(".dropdown-menu").not(".multiselect-container").css("left",leftResult+"px");
	        		$(".arrowSup").css("left",leftResultPestana+"px");
	        		// /////////////////////////////////////////////////////////////////
					
	        		// //////// Ocultar/Mostrar Números de las coordenadas
					$(".codeCoordinate").click(function() {
						$(".textCode").slideToggle();
					});
					// ////////////////////////////////////////////////////////////////

					// //////// Borrar campo Código Coordenadas
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
					
					// /////////// Quitar el padding-top al panel que tenga boxes dentro /////////////////////
					$(".boxTransfer").closest('.panel-body').css('padding-top',0);
					
					// //////////______________________________MOVIMIENTOS______________________________________________________
					
					// //////// mensajes de error - Movimientos
					$('.form-control').click(function(){
						//$(this).prevAll(".errorPanel").toggle();
						//$(this).removeClass("errorInput");
						//$(".showSearchSecond").removeClass("errorInput");
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
						var target=$(event.target)
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
					
					$(".panelFromTransfer .boxTransfer").click(function(){
						$('.detailsNewBeneficiary, .detailsContacts, .panelAmountTransfer, .panelObservationsTransfer, .panelBackNextTransfer').addClass('hidden');
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
						}else{
							$(".forTransfer .boxTransfer").removeClass("boxDesactive");
							// /////////// Rensponsive - Efecto por pasos al pusar boxes en móvil - Transferencias 
							if ($(window).width() <= 751) {
								$(".panelFromTransfer").addClass("panelMovilStep").find('.panel-heading > span').removeClass('hidden');
								$(".panelFromTransfer .panel-body").hide();
							}
							$(".boxTransfer").removeClass("boxActive");
						}
						
						$('.panelForTransfer').removeClass('hidden').removeClass('hidden-xs');
						
						addBorderToBox(this);
						if ($(window).width() > 751) {
							scrollNextPanel(this);
						}
						contentSize();
						
					});
					
					$(".panelForTransfer .boxTransfer").click(function(){
						if (!$(this).hasClass('boxDesactive')){
							$('.detailsNewBeneficiary, .detailsContacts, .panelAmountTransfer, .panelObservationsTransfer, .panelBackNextTransfer').addClass('hidden');
							resetAllTransferencias();
							
							if($(this).hasClass("newBeneficiary")){
								$('.detailsNewBeneficiary').removeClass('hidden').removeClass('hidden-xs');
							}else if($(this).hasClass("Contacts")){
								$('.detailsContacts').removeClass('hidden').removeClass('hidden-xs');
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
							if ($(window).width() > 751) {
								scrollNextPanel(this);
							}
							contentSize();
						}
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
					$('.datepickericon').on('blur',function(){
						validateOnBlur(this,'Debe indicar una fecha de finalización');
					});
					$('.claveTextArbitraje').on('blur',function(){
						validateOnBlur(this,'Debe indicar la clave de arbitraje');
					});
					
					// //////// botones aceptar
					function acceptNewBeneficiary(){
						if(!$('.inputNameBeneficiary').val()){
							alert('Debe introducir el nombre del beneficiario');
						}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_nacional') && !$('.inputIban').val()){
							alert('Debe introducir el código IBAN');
						}else if(($('input[name="transferencia_nac_internac"]:checked').val() == 'transferencia_iternacional') && (!$('.inputSwift').val() && !$('.inputSwift').val())){
							alert('Debe introducir el código IBAN y el código SWIFT');
						}else{
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
							$('.panelObservationsTransfer, .panelBackNextTransfer').removeClass('hidden').removeClass('hidden-xs');
							if ($(window).width() > 751) {
								scrollNextPanel(this);
							}
						}
						
					}
					
					$(".btnAceptarNewBeneficiary").click(acceptNewBeneficiary);
					$(".btnAceptarAmmount").click(acceptAmmount);
					
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
					
					// //////// iniciar sólo moneda euro hasta que se cambie a transferencia internacional
					if($('.moneda').length){
						$('.moneda').find('option').not('option[value="eur"]').hide();
						$('.convertTransferPeriodic').show();
					}
					
					// //////// Ocultar/Mostrar Transferencia Internacional - Transferencias					
					$('.transferencia_nac_internac').change(function() {
						$('.formTransferInternacional').slideToggle(500);
						$('.btn_whatIsIban').toggle();
						$('.panelAmountTransfer').addClass('hidden');
						$('.addressBeneficiary').slideToggle(250);
						
						if($('.transferencia_nac_internac:checked').val() == 'transferencia_nacional'){
							$('.moneda').find('option').not('option[value="eur"]').hide();
							$('.moneda').find('option[value="eur"]').show();
							$('.moneda').val('eur');
							$(".optionTransferInter").hide();
							$('.convertTransferPeriodic').show();
							$('.opcionesAvanzadas').prop('checked',false);
							$('.opcionesAvanzadas').prop('checked',false);
							$('.formTypeChange input[type="radio"]').prop('checked',false);
							$(".formTypeChange").hide();
						}else if($('.transferencia_nac_internac:checked').val() == 'transferencia_iternacional'){
							$('.moneda').find('option').not('option[value="eur"]').show();
							var otherCurrency = $('.moneda').find('option[value="eur"]').next('option').val();
							$('.moneda').find('option[value="eur"]').hide();
							$('.moneda').val(otherCurrency);
							$(".optionTransferInter").show();
							$('.convertTransferPeriodic').hide();
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
					$('.opcionesAvanzadas').change(function() {
						$(".formTypeChange").slideToggle(500);
					});
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
					// ////////////////////////////////////////////////////////////////
					
					// /////////// scroll a paso siguiente
					function scrollNextPanel(elementClick){
						if($('.panelFromTransfer').length){//lo hacemos independiente del script de notificaciones
							var posBottomPanel = $(elementClick).closest('.panel').offset().top;
							var posNextPanel = posBottomPanel + $(elementClick).closest('.panel').outerHeight();
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
								$('.panelProductNotification .panel-heading > span').removeClass('hidden');
							}
						}
					});
					// ////////////////////////////////////////////////////////////////
					
					// /////////// scroll a paso siguiente
					function scrollNextPanel(elementClick){
						var posBottomPanel = $(elementClick).closest('.panel').offset().top;
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
					
					
					// //////////______________________________HOME______________________________________________________
					
					////////// Ver texto legal HOME /////////////////////////////////
					$(".boxLegalContent a").click(function() {
						$(this).closest("p").toggleClass("opened");
						$(this).closest("p").find("br").toggle();
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
	        			var posRes = nombreImg.indexOf('/res/');
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
		        		// código antiguo
		        		// var nombreImgInicio = nombreImg.slice(posRes,posDevice);
		        		var proporcion = $(window).width()/$(window).height();
		        		
		        		if ( ($(window).width() < 768) && ($(window).width() <= $(window).height()) ){
		        			urlImg = nombreImgInicio + 'movil_vertical.jpg)';
		        		}else if( ($(window).width() < 768) && ($(window).width() > $(window).height()) ){
		        			urlImg = nombreImgInicio + 'movil_horizontal.jpg)';
		        		}else if( ($(window).width() < 992) && ($(window).width() <= $(window).height()) ){
		        			urlImg = nombreImgInicio + 'tablet_vertical.jpg)'; 
		        		}else if( ($(window).width() < 992) && ($(window).width() > $(window).height()) ){
		        			urlImg = nombreImgInicio + 'tablet_horizontal.jpg)'; 
		        		}else if( ($(window).width() >= 1200) && (proporcion <= 1.6) ){
		        			urlImg = nombreImgInicio + 'pc_grande_4_3.jpg)'; 
		        		}else if( ($(window).width() >= 1200) && (proporcion > 1.6) ){
		        			urlImg = nombreImgInicio + 'pc_grande_16_9.jpg)'; 
		        		}
		        		$('.designImg.active > div').css('background-image',urlImg);
		        		
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
	        		
	     		
	        		// //////////______________________________INICIO/EXTRACTO______________________________________________________
	        		
	        		// /////////// Rensponsive - ancho de la caja boxes en móvil - Inicio					
	        		function anchoBoxesSortables(elements,elementsParent){
	        			if ($(window).width() <= 750) {
	        				var elementos=new Array();
	        				elementos=$( elements ).length;
	        				var anchuraUnidad=$( elements ).outerWidth(true)
	        				var anchuraTotal=anchuraUnidad*elementos;
	        				$( elementsParent ).css("width",anchuraTotal);
	        			} else {
		        			$( ".boxSortables" ).css("width", "auto");
	        			}  
	        		}
	        		function anchoBoxesSortablesSpecial(elements,elementsParent){
	        			if ($(window).width() <= 750) {
	        				var elementos=new Array();
	        				elementos=$( elements ).length;
	        				var anchuraUnidad=$( elements ).outerWidth(true)
	        				var anchuraTotal=anchuraUnidad*elementos;
	        				$( elementsParent ).css("width",anchuraTotal);
	        			}  
	        		}
	        		
	        		if($(".accounts").length){anchoBoxesSortables(".accounts .boxSortables > li", ".accounts .boxSortables");}
	        		if($(".accountsDetails").length){anchoBoxesSortables(".accountsDetails .boxSortables > li", ".accountsDetails .boxSortables");}
					if($(".cards").length){anchoBoxesSortablesSpecial(".cards .boxSortables > li",".cards .boxSortables");}
					if($(".loansSortables").length){anchoBoxesSortablesSpecial(".loansSortables .boxSortables > li", ".loansSortables .boxSortables");}
					if($(".hedgesSortables").length){anchoBoxesSortablesSpecial(".hedgesSortables .boxSortables > li", ".hedgesSortables .boxSortables");}
					if($(".savingSortables").length){anchoBoxesSortablesSpecial(".savingSortables .boxSortables > li", ".savingSortables .boxSortables");}
					if($(".otherSortables").length){anchoBoxesSortablesSpecial(".otherSortables .boxSortables > li", ".otherSortables .boxSortables");}
					if($(".insurances").length){anchoBoxesSortablesSpecial(".insurances .boxSortables > li", ".insurances .boxSortables");}
					if($(".mobiles").length){anchoBoxesSortablesSpecial(".mobiles .boxSortables > li", ".mobiles .boxSortables");}
	        		
	        		$(window).resize(function() {
	        			if($(".accounts").length){anchoBoxesSortables(".accounts .boxSortables > li", ".accounts .boxSortables");}
		        		if($(".accountsDetails").length){anchoBoxesSortables(".accountsDetails .boxSortables > li", ".accountsDetails .boxSortables");}
						if($(".cards").length){anchoBoxesSortablesSpecial(".cards .boxSortables > li",".cards .boxSortables");}
						if($(".loansSortables").length){anchoBoxesSortablesSpecial(".loansSortables .boxSortables > li", ".loansSortables .boxSortables");}
						if($(".hedgesSortables").length){anchoBoxesSortablesSpecial(".hedgesSortables .boxSortables > li", ".hedgesSortables .boxSortables");}
						if($(".savingSortables").length){anchoBoxesSortablesSpecial(".savingSortables .boxSortables > li", ".savingSortables .boxSortables");}
						if($(".otherSortables").length){anchoBoxesSortablesSpecial(".otherSortables .boxSortables > li", ".otherSortables .boxSortables");}
						if($(".insurances").length){anchoBoxesSortablesSpecial(".insurances .boxSortables > li", ".insurances .boxSortables");}
						if($(".mobiles").length){anchoBoxesSortablesSpecial(".mobiles .boxSortables > li", ".mobiles .boxSortables");}
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
	        							/* aquí se pondrían las mismas funciones escritas en la parte superior 
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
        		
        		    // ////////////////////////////////////////////////////////////////
	        		// ////////////////////////////////////////////////////////////////
        		    
        		    
		        		    
        		    // //////////______________________________DETALLE PRODUCTO______________________________________________________	    
        		    		
		    		// //////// Cambio Select efecto Tab en Móvil
					$('.seleccionTabDetalleProducto').change(function() {
						$(".tab-pane").removeClass("active").removeClass("in");
						if ($(this).val() == "descripcion") {
							   $(".descripcion").addClass("active").addClass("in");
						}
						if ($(this).val() == "condiciones_generales") {
							   $(".condiciones_generales").addClass("active").addClass("in");
						}
						if ($(this).val() == "mas_ventajas") {
							   $(".mas_ventajas").addClass("active").addClass("in");
						}
					});
					if($(".productDetail").length){
						$(window).resize(function() {
							var optionActive = $(".tab-pane.active").attr("id");
							$(".tabPublic li").removeClass("active");
							if (optionActive == "descripcion") {
								$(".seleccionTabDetalleProducto").val("descripcion");
								$(".descripcion").addClass("active").addClass("in");
								$(".tabPublic li:nth-of-type(1)").addClass("active");
							}
							if (optionActive == "condiciones_generales") {
								$(".seleccionTabDetalleProducto").val("condiciones_generales");
								$(".condiciones_generales").addClass("active").addClass("in");
								$(".tabPublic li:nth-of-type(2)").addClass("active");
							}
							if (optionActive == "mas_ventajas") {
								$(".seleccionTabDetalleProducto").val("mas_ventajas");
								$(".mas_ventajas").addClass("active").addClass("in");
								$(".tabPublic li:nth-of-type(3)").addClass("active");
							}
						});
					}
					// ////////////////////////////////////////////////////////////////
					// ////////////////////////////////////////////////////////////////
					
							
					// //////////______________________________DEPÓSITOS______________________________________________________
					
		    		// //////// Cambio Select efecto Tab en Móvil
					$('.seleccionTabAyuda').change(function() {
						$(".tab-pane").removeClass("active").removeClass("in");
						if ($(this).val() == "caracteristicas") {
							   $(".caracteristicas").addClass("active").addClass("in");
						}
						if ($(this).val() == "comisiones") {
							   $(".comisiones").addClass("active").addClass("in");
						}
						if ($(this).val() == "fiscalidad") {
							   $(".fiscalidad").addClass("active").addClass("in");
						}
						if ($(this).val() == "preguntas") {
							   $(".preguntas").addClass("active").addClass("in");
						}
					});
					
					if($(".deposit").length){
						$(window).resize(function() {
							var optionActive = $(".tab-pane.active").attr("id");
							$(".tabPublic li").removeClass("active");
							if (optionActive == "caracteristicas") {
								$(".seleccionTabAyuda").val("caracteristicas");
								$(".caracteristicas").addClass("active").addClass("in");
								$(".tabPublic li:nth-of-type(1)").addClass("active");
							}
							if (optionActive == "comisiones") {
								$(".seleccionTabAyuda").val("comisiones");
								$(".comisiones").addClass("active").addClass("in");
								$(".tabPublic li:nth-of-type(2)").addClass("active");
							}
							if (optionActive == "fiscalidad") {
								$(".seleccionTabAyuda").val("fiscalidad");
								$(".fiscalidad").addClass("active").addClass("in");
								$(".tabPublic li:nth-of-type(3)").addClass("active");
							}
							if (optionActive == "preguntas") {
								$(".seleccionTabAyuda").val("preguntas");
								$(".preguntas").addClass("active").addClass("in");
								$(".tabPublic li:nth-of-type(4)").addClass("active");
							}
						});
					}
					
					// scroll a texto de la pregunta
					$('.tableOfContent .linkQuestionAtt').click(function(){
						numQuestion = ($(this).closest('.questionsAtt').index());
						elemAnswer = $('#preguntas').find('.bannerBasic').eq(numQuestion);
						posAnswer = (elemAnswer.offset().top)-15;
						$("html,body").animate({scrollTop: posAnswer});
					});
					
					// subir scroll a tabla de contenidos
					$(".backToTableOfContent").click(function(){
						var position
						if($(window).width() < 768){
							position = ($(".seleccionTabAyuda").offset().top)-75;
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
						
						$('.writeManager').hide();
						$('.goManager').click(function(){
							$("html,body").animate({scrollTop: 0});
							$('.writeManager').slideDown(400);
						});
						
					}
					
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
					
					
});



