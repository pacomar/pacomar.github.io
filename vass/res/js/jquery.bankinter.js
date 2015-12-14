var documentReady = function(){ 
	if (window.createCalendars) { createCalendars(); }
	if (window.createOnOffRSCs) { createOnOffRSCs(); }
	if (window.createLightboxes) { createLightboxes(); }
}

var BK = {
	desplegable: function(){
		var iconos = {
	        'enterprises': {
	        	0: '/res/img/enterprises_up.gif',
	        	1: '/res/img/enterprises.gif'
	        },
	        'warnings': {
	        	0: '/res/img/close.gif',
	        	1: '/res/img/open.gif'
	        },
	        'most_used': {
	        	0: '/res/img/most_used_up.gif',
	        	1: '/res/img/most_used.gif'
	        },
	        'connection': {
	        	0: '/res/img/connection_off.gif',
	        	1: '/res/img/connection_on.gif'
	        },
	        'default': {
	        	0: '/res/img/hide.gif',
	        	1: '/res/img/show.gif'
			}
		};
		$('[data-toggle]').each(function(){
			var clase = '';
			if($(this).hasClass('enterprises')){
				clase = 'enterprises';				
			} else if($(this).hasClass('warnings')){
				clase = 'warnings';				
			} else if($(this).hasClass('most_used')){
				clase = 'most_used';				
			} else if($(this).hasClass('connection')){
				clase = 'connection';				
			} else {
				clase = 'default';					
			}
			var imgCerrar = iconos[clase][0];
			var imgAbrir = iconos[clase][1];
			if($(this).attr('data-open')){var o = ($(this).attr('data-open')=='true') ? true : false;} else {var o = false;}
			$(this).addClass('dropdown-header');
			var el = $(this).attr('data-toggle');
			$('#'+el).addClass('dropdown-panel');
			var cab = $(this);
			if(!o){
				$('#'+el).hide();
				cab.append('<a href="#'+el+'" class="dropdown-img-control"><img src="'+imgAbrir+'" alt="'+_('Mostrar')+'" /></a>');
			} else {
				cab.addClass('dropdown-header-open').append('<a href="#'+el+'" class="dropdown-img-control"><img src="'+imgCerrar+'" alt="'+_('Ocultar')+'" /></a>');				
			}
			cab.children('.dropdown-img-control').click(function(e){
				e.preventDefault();	
				if(clase=='connection'){
					$('#'+el).toggle();
				} else {
					$('#'+el).slideToggle();
				}
				cab.toggleClass('dropdown-header-open');	
				var img = $(this).children('img').eq(0);
				if(cab.hasClass('dropdown-header-open')){
					img.attr({src: imgCerrar,alt:_('Ocultar')});		
				} else {
					img.attr({src: imgAbrir,alt:_('Mostrar')});					
				}
			});
		});
	},
	acordeon: function(){
		$('.accordion').filter(':not([data-enhance="false"])').each(function(){ 
			if($(this).attr('data-close')){var cl = Boolean($(this).attr('data-close'));} else {var cl = true;}
			var ini = $(this).attr('data-initial') || false;
			$(this).children('dd').hide();
			$(this).children('dt').each(function(i){
				var c = $(this).html();
				$(this).addClass('accordion-header').append('<a href="#" class="accordion-img-control"><img src="/res/css/img/more.gif" alt="'+_('Mostrar')+'" width="11" height="11" /></a>');				
				$(this).children('.accordion-img-control').click(function(e){	
					e.preventDefault();
					if($(this).parent().hasClass('accordion-open')&&cl){							
						$(this).parent().removeClass('accordion-open');
						$(this).children('img').eq(0).attr({src: '/res/css/img/more.gif',alt:_('Mostrar')});
						$(this).parent().next().slideUp();
					} else {
						$(this).parent().addClass('accordion-open');
						$(this).children('img').eq(0).attr({src: '/res/css/img/less.gif',alt:_('Ocultar')});
						$(this).parent().next().slideDown();
						$(this).parent().siblings().filter('dd').not($(this).parent().next()).slideUp();
						$(this).parent().siblings().find('.accordion-img-control img').attr({src: '/res/css/img/more.gif',alt:_('Mostrar')});
						$(this).parent().siblings().removeClass('accordion-open');
					}
				});				
				if((ini)&&((ini-1)==i)){
					$(this).find('.accordion-img-control img').eq(0).attr({src: '/res/css/img/less.gif',alt:_('Ocultar')});
					$(this).addClass('accordion-open').next().slideDown();
				}
			});
		});
	}
}

$(document).ready(function(){
			
/* Definición del tema para Highcharts */
if (window.Highcharts) {
	Highcharts.theme = {
		colors: [
			'#0E6699',
			'#496371',
			'#4FA3CC',
			'#616060',
			'#7099AE',
			'#096666',
			'#0E3D1E',
			'#2F6726',
			'#6FA631',
			'#A39F1E',
			'#66671E',
			'#798779',
			'#284E61',
			'#CD6667',
			'#CB3033',
			'#CD6634',
			'#98141B',
			'#CB081C',
			'#996733',
			'#612E13'
		],
		chart: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0, 'rgb(255, 255, 255)'],
					[1, 'rgb(255, 255, 255)']
				]
			},
			borderWidth: 0,
			borderRadius: 0,
			plotBackgroundColor: null,
			plotShadow: false,
			plotBorderWidth: 0
		},
		title: {
			style: {
				color: '#000',
				font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		},
		subtitle: {
			style: {
				color: '#333',
				font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		},
		xAxis: {
			gridLineWidth: 0,
			lineColor: '#717171',
			tickColor: '#717171',
			labels: {
				style: {
					color: '#717171',
					fontWeight: 'bold'
				}
			},
			title: {
				style: {
					color: '#777',
					font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
				}
			}
		},
		yAxis: {
			alternateGridColor: null,
			minorTickInterval: null,
			gridLineColor: 'rgba(0, 0, 0, .1)',
			minorGridLineColor: 'rgba(0,0,0,0.07)',
			lineWidth: 0,
			tickWidth: 0,
			labels: {
				style: {
					color: '#333',
					fontWeight: 'bold'
				}
			},
			title: {
				style: {
					color: '#222',
					font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
				}
			}
		},
		legend: {
			itemStyle: {
				color: '#333'
			},
			itemHoverStyle: {
				color: '#000'
			},
			itemHiddenStyle: {
				color: '#AAA'
			}
		},
		labels: {
			style: {
				color: '#333'
			}
		},
		tooltip: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0, 'rgba(255, 255, 255, .8)'],
					[1, 'rgba(255, 255, 255, .8)']
				]
			},
			borderWidth: 0,
			style: {
				color: '#000'
			}
		},

		plotOptions: {
			series: {
				shadow: false
			},
			line: {
				dataLabels: {
					color: '#CCC'
				},
				marker: {
					lineColor: '#333'
				}
			},
			spline: {
				marker: {
					lineColor: '#333'
				}
			},
			scatter: {
				marker: {
					lineColor: '#333'
				}
			},
			candlestick: {
				lineColor: 'white'
			}
		},

		toolbar: {
			itemStyle: {
				color: '#CCC'
			}
		},

		navigation: {
			buttonOptions: {
				symbolStroke: '#DDDDDD',
				hoverSymbolStroke: '#FFFFFF',
				theme: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.4, '#606060'],
							[0.6, '#333333']
						]
					},
					stroke: '#000000'
				}
			}
		},

		// scroll charts
		rangeSelector: {
			buttonTheme: {
				fill: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0.4, '#888'],
						[0.6, '#555']
					]
				},
				stroke: '#000000',
				style: {
					color: '#CCC',
					fontWeight: 'bold'
				},
				states: {
					hover: {
						fill: {
							linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
							stops: [
								[0.4, '#BBB'],
								[0.6, '#888']
							]
						},
						stroke: '#000000',
						style: {
							color: 'white'
						}
					},
					select: {
						fill: {
							linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
							stops: [
								[0.1, '#000'],
								[0.3, '#333']
							]
						},
						stroke: '#000000',
						style: {
							color: 'yellow'
						}
					}
				}
			},
			inputStyle: {
				backgroundColor: '#333',
				color: 'silver'
			},
			labelStyle: {
				color: 'silver'
			}
		},

		navigator: {
			handles: {
				backgroundColor: '#666',
				borderColor: '#AAA'
			},
			outlineColor: '#CCC',
			maskFill: 'rgba(16, 16, 16, 0.5)',
			series: {
				color: '#7798BF',
				lineColor: '#A6C7ED'
			}
		},

		scrollbar: {
			barBackgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0.4, '#888'],
						[0.6, '#555']
					]
				},
			barBorderColor: '#CCC',
			buttonArrowColor: '#CCC',
			buttonBackgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0.4, '#888'],
						[0.6, '#555']
					]
				},
			buttonBorderColor: '#CCC',
			rifleColor: '#FFF',
			trackBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0, '#000'],
					[1, '#333']
				]
			},
			trackBorderColor: '#666'
		},
		credits: {
			enabled: false
		}
	};
	var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
}
/* Lanzamiento de funciones iniciales */
if (window.GNE) {
	GNE.ventanaNueva = function(){
		$('a[target]').filter(':not([target="_self"],[target="_parent"],[target="_top"],[onclick],[href^="javascript:"])').filter(':not([data-mode="modal"])').filter(':not([data-enhance="false"])').each(function(){ 
			//TODO Move to jquery.gneis.js
			//TODO Ignore if there is a frame/iframe with that name
			if ($(this).find('img.img_ventananueva_01').length==0 &&
					$(this).next('img.img_ventananueva_01').length == 0 &&
					$(this).next('a img.img_ventananueva_01').length == 0) {
				if ($(this).find('img').length==0) {
					$(this).append('<img src="/res/css/img/newwin.gif" class="inline" alt="'+_('Abre en ventana nueva')+'" />');
				}else{
					$(this).find('img').attr('alt',$(this).find('img').attr('alt') + ' ' + _('Abre en ventana nueva'));
				}
				var v = $(this).attr('href');
				var c = 'width=800,height=600,top=0,left=0,location=1,menubar=1,resizable=1,scrollbars=1,status=1,toolbar=1';
				var t = $(this).attr('target');
				if (t == '_blank') {
					t = '';
					c = 'width=600,height=480,top=0,left=0,location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0';
				}
				
				$(this).click(function(e){
					e.preventDefault();
					var ven = window.open(v,t,c);
					ven.focus();
				});
			}
		});
	};
	GNE.createAll();
}
if (window.TBL) {
	TBL.tablaCSV();
}
if (window.GRP) {
	GRP.tablaGrafica();
	GRP.velocimetro();
}
if (window.createMaps) { createMaps(); }
BK.desplegable();
BK.acordeon();
	
if (window.initSliders) {
	initSliders();
}

/* Check HighContrast Cookie */
try {
	var c_value = getCookie('highContrast');
	if (c_value = 1 && c_value != null){
		$.a_highContrast();
	}
} catch(err){}
});

var windowLoad = function(){ 
	if (window.createSliders) {	createSliders(); }
}

/* Activate HighContrast and create cookie */
$.a_highContrast = function(){
	if (!$('#highContrast').length){
		$('head').append( $('<link rel="stylesheet" type="text/css" id="highContrast" />').attr('href', '/res/css/highContrast.particulares.css') );
		setCookie('highContrast','1',null);
	}
}
/* Deactivate HighContrast and delete cookie */
$.d_highContrast = function(){
	if ($('#highContrast').length){
		$("#highContrast").remove();
		setCookie('highContrast','0',-1);
	}
}

