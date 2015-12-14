//sliderListener____________________________________
//LISTENER DE PRUEBA
var doEventListener = function(i,event){
	if (!(typeof console === "undefined" || typeof console.log === "undefined")) {
		console.log('listener'+i+'.doEvent',event.type,event.slide);
	}else{
		alert('listener'+i+'.doEvent '+event.type+'  '+event.slide);
	}	
}
var listener1 = {
	doEvent: function(event) { doEventListener(1,event); }
};
var listener2 = {
	doEvent: function(event) { doEventListener(2,event); }
};
var listener3 = {
	doEvent: function(event) { doEventListener(3,event); }
};
var listener4 = {
	doEvent: function(event) { doEventListener(4,event); }
};
var listener5 = {
	doEvent: function(event) { doEventListener(5,event); }
};
//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

var urlCurrent = window.location.href;
if (urlCurrent.indexOf("/timeout") == -1) {
  window.setTimeout(redirectPageForInactivityLA, 1740000); 
}

function redirectPageForInactivityLA(){
  window.location.href='/gestion/services/auth/existsOvertakenInactivity?logout_back=/www2/obsidiana/es/nav/sesion/timeout';
}


var documentReady = function(){ 
	if (window.createCalendars) { createCalendars(); }
	if (window.createOnOffRSCs) { createOnOffRSCs(); }
	if (window.createLightboxes) { createLightboxes(); }
	if (window.initSliders) {
		initSliders();
		/*
		//sliderListener____________________________________
		$('.slider').filter(':not([data-enhance="false"])').each(function(i){ 
			eval('$(this).data("slider").addListener(listener'+(i+1)+');');
		});
		//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
		*/
		//sliderSetOptions____________________________________
		var opcionesSliders = {
				imgSelect: 'obsi_carrou_punto_gris.png',
				imgUnselect: 'obsi_carrou_punto_negro.png' 	  			
			}
		setOptionsSliders(opcionesSliders);
		//sliderSetOptions¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	}
//	if (window.createDynamicTables) { createDynamicTables(); }
	
	/* Lanzamiento de funciones iniciales */
	if (window.GNE) {
		GNE.setImgAccordion();
		GNE.popupCloseButton();
		GNE.createAll();
	}
/**/
	if (window.TBL) {
		TBL.tablaCSV();
		// Función de prueba para la agregación de filas a una tabla; 
		// sólo DESARROLLO, en teoría el funcionamiento real será cargar datos por Ajax	
		$('.sortable tbody th a').click(TBL.agregarTR);	
	}
/**/
	if (window.GRP) {
		GRP.tablaGrafica();
		GRP.velocimetro();
	}
	
}


var windowLoad = function(){ 
	if (window.createSliders) {	createSliders(); }
}


/* Definición del tema para Highcharts */
if (window.Highcharts) {
	Highcharts.theme = {
		colors: ['#DD37AA'],
		chart: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0, '#FFF'],
					[1, '#FFF']
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
				color: '#800080',
				font: 'bold 12px Verdana, Arial, Helvetica, sans-serif'
			}
		},
		subtitle: {
			style: {
				color: '#717171',
				font: '12px Verdana, Arial, Helvetica, sans-serif'
			}
		},
		xAxis: {
			gridLineWidth: 0,
			lineColor: '#AAA',
			tickColor: '#AAA',
			tickWidth: 0,
			labels: {
				style: {
					color: '#000',
					fontWeight: 'normal'
				}
			},
			title: {
				style: {
					color: '#800080',
					font: 'bold 12px Verdana, Arial, Helvetica, sans-serif'
				}
			}
		},
		yAxis: {
			alternateGridColor: null,
			minorTickInterval: null,
			lineColor: '#AAA',
			gridLineColor: '#DDD',
			minorGridLineColor: '#EEE',
			lineWidth: 0,
			tickWidth: 0,
			labels: {
				style: {
					color: '#000',
					fontWeight: 'normal'
				}
			},
			title: {
				style: {
					color: '#800080',
					font: 'bold 12px Verdana, Arial, Helvetica, sans-serif'
				}
			}
		},
		legend: {
			enabled: false
		},
		labels: {
			style: {
				color: '#CCC'
			}
		},
		tooltip: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0, 'rgba(255,255,255,.95)'],
					[1, 'rgba(255,255,255,.95)']
				]
			},
			borderWidth: 0,
			style: {
				color: '#000'
			}/*,
			headerFormat: '<span style="font-size:12px">{point.key}</span><br />',
			pointFormat: '<b>{point.y}</b>'*/
		},
		plotOptions: {
			series: {
				shadow: false,
				borderColor: '#FFF' 
			},
			line: {
				dataLabels: {
					color: '#333'
				},
				marker: {
					lineColor: '#CCC'
				}
			},
			spline: {
				marker: {
					lineColor: '#CCC'
				}
			},
			scatter: {
				marker: {
					lineColor: '#CCC'
				}
			},
			candlestick: {
				lineColor: '#DD37AA'
			}
		},
		toolbar: {
			itemStyle: {
				color: '#333'
			}
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		navigation: {
			menuStyle: {
				border: '1px solid #AAA',
				boxShadow: 'none'
			},
            menuItemStyle: {
                fontWeight: 'normal',
                background: 'none'
            },
            menuItemHoverStyle: {
                background: '#F0F0F0',
                color: 'black'
            },
            buttonOptions: {
                theme: {
                    'stroke-width': 0,
                    stroke: '#AAA',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#F0F0F0'
                        },
                        select: {
                            fill: '#F0F0F0'
                        }
                    }
                }
            }
        }
	};
	var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
}
