var GRP = {
	formatDate: function(value){
		var valor = value + '';
		//FIXME Proper date parsing
		var splitStr = valor.split('/');
		if (splitStr.length == 3) {
			value = splitStr[1] + '-' + splitStr[0] + '-' + splitStr[2];
		}
		var valorD = new Date(value);
		if(!isNaN(valorD)) {
			//FIXME Proper date formatting
			valor = valorD.getDate() + '/' + (valorD.getMonth() + 1) + '/' + valorD.getFullYear();
		}
		return valor;
	}
	,
	formatValue: function(value,units){
		var valor = value + '';
		units = units || '';
		if (!isNaN(Number(valor))){
			var splitStr = valor.split('.');
			var splitLeft = splitStr[0];
			var splitRight = '';
			if (splitStr.length > 1) {
				splitRight = _(',') + splitStr[1] + '00'; 
				splitRight = splitRight.substr(0,3);
			}
			var regx = /(\d+)(\d{3})/;
			while (regx.test(splitLeft)) {
				splitLeft = splitLeft.replace(regx, '$1' + _('.') + '$2');
			}
			valor = splitLeft + splitRight;			
		}
		return valor + units;
	}
	,
	updateGraph: function(table, form, graph, tipoGrafica){
		//TODO Calculate universal URL from form, return data for only certain components (because we can have more than one AJAX component per form)
		var uri = table.attr('data-url');
		var method = table.attr('data-method');
		if (!method) {
			form.attr('method');
		}
		if (!method) {
			method = 'GET';
		}
		var allEscapedColons = new RegExp('%3A', 'g');
		$.ajax({
			url: uri,
			method: method,
			//FIXME Need more elegant solution to colons
			data: form.serialize().replace(allEscapedColons, ':'),
			dataType: 'json'
		}).done(function(restData) {
			var series = [];
			//TODO Assumes MultipleSeries; need to support Series, Graph and MultipleGraph as well (convert all to MultipleGraph)
			for (var i = 0; i < restData.key.length; i++) {
				var yValues = [];
				var serie = {'name':restData.key[i],'data':yValues};
				for (var j = 0; j < restData.value.length; j++) {
					yValues.push(restData.value[j].y[i]);
				}
				if (tipoGrafica == 'stack') {
					series.unshift(serie);
				} else {
					series.push(serie);
				}
			}
			var xValues = [];
			for (var i = 0; i < restData.value.length; i++) {
				xValues.push(restData.value[i].x);
			}
			for (var i = graph.series.length - 1; i >= 0 ; i--) {
				graph.series[i].remove();
			}
			graph.xAxis[0].update({
				categories: xValues,
				tickInterval: GRP.tickIntervalForTicks(table, series)
			});
			if (graph.legend) {
				if (graph.legend.group) {
					if (series.length > 1) {
						graph.legend.group.show();
					} else {
						graph.legend.group.hide();
					}
				}
			}
			for (var i = 0; i < series.length; i++) {
				graph.addSeries(series[i]);
			}
		});
	}
	,
	tickIntervalForTicks: function(table, series){
		var ti = 1;
		var nTicks = parseInt(table.find('> thead tr[data-nTicks], > thead tr th[data-nTicks]').attr('data-nTicks'), 10);
		if (nTicks > 0 && series.length > 0) {
			ti = parseInt((series[0].data.length - parseInt((nTicks - 1) / 2, 10))/(nTicks - 1), 10);
		}
		if (ti < 1) {
			ti = 1;
		}
		return ti;
	}
	,
	tablaGrafica: function(){
		$('table[class="chart"]').filter(':not([data-enhance="false"])').each(function(i){
			var idGrafica = 'graph_bk_'+(i+1);
			var tipoGrafica = $(this).attr('data-type');
			var unidadGrafica = ($(this).attr('data-unit')) ? $(this).attr('data-unit') : '';
			$(this).before('<div id="'+idGrafica+'"></div>');				
			$('#'+idGrafica).css({'width':$(this).attr('data-width'),'height':$(this).attr('data-height')});
			if($(this).attr('data-invertedAxes')){var iA = Boolean($(this).attr('data-invertedAxes'));} else {var iA = false;}
			if($(this).attr('data-legend')){var l = Boolean($(this).attr('data-legend'));} else {var l = false;}
			var categorias = []; 
			var filas = [];
			var titulo = $(this).children('caption').eq(0).html();
			var tituloAlign = $(this).children('caption').eq(0).attr('data-valign');
			var menuExportacion = {
				contextButtonTitle: _('Exportar gráfica'),
				downloadJPEG: _('Descargar JPEG'),
				downloadPDF: _('Descargar PDF'),
				downloadPNG: _('Descargar PNG'),
				downloadSVG: _('Descargar SVG'),
				printChart: _('Imprimir')
			};

			$(this).find('thead th').each(function(i){
				//TODO Refactor
				if(tipoGrafica!='columns' && tipoGrafica!='stack'){
					categorias.push($(this).text());	
				}
			});	
			switch(tipoGrafica){
			case 'columns':					
				var series = [];
				var serie = '';
				$(this).find('thead th').each(function(i){
					var serie = {'name':$(this).text(),'data':[]};			
					series.push(serie);
				});	
				
				var abreviaturas = [];				
				var abreviatura = '';
				$(this).find('tbody tr').each(function(i){
					abreviatura = $(this).find('th abbr').eq(0);
					if(abreviatura.length==0){
						abreviatura = $(this).find('th').eq(0);
						abreviaturas[abreviatura.text()] = abreviatura.text();
					}else{
						abreviaturas[abreviatura.text()] = abreviatura.attr('title');
					}
					categorias.push(abreviatura.text());

					$(this).find('td').each(function(i){
						series[i].data.push(($(this).text()/1));
					});
				});	
				$(this).addClass('hidden');
				break;
			case 'stack':					
				l = true;
				var series = [];
				var serie = '';
				$(this).find('> thead > tr > th:not([colspan]):not(:first)').each(function(i){
					var serie = {'name':$(this).text(),'data':[]};			
					series.unshift(serie);
				});	
				
				var abreviaturas = [];				
				var abreviatura = '';
				$(this).find('> tbody > tr').each(function(i){
					abreviatura = $(this).find('> th abbr').eq(0);
					if(abreviatura.length==0){
						abreviatura = $(this).find('> th').eq(0);
						abreviaturas[abreviatura.text()] = abreviatura.text();
					}else{
						abreviaturas[abreviatura.text()] = abreviatura.attr('title');
					}
					categorias.push(abreviatura.text());

					$(this).find('> td:not([colspan])').each(function(j){
						//FIXME Use formatters
						var toParse = $(this).text();
						toParse = toParse.replace(/[^\d\,\-]/g, "").replace(/,/g, ".");
						series[series.length - j - 1].data.push((toParse/1));
					});	
				});	
				$(this).addClass('hidden');
				break;
			case 'pie':					
			case 'donut':					
				$(this).find('tbody tr').each(function(i){
					//FIXME Use formatters
					var toParse = $(this).children('td').eq(0).text();
					toParse = toParse.replace(/[^\d\,\-]/g, "").replace(/,/g, ".");
					var fila = [($(this).children('th').eq(0).text()),(toParse/1)];
					filas.push(fila);
				});				
				$(this).addClass('hidden');
				break;
			case 'bubbles':
				$(this).find('tbody tr').each(function(i){
					var fila = {'name':'','data':[]};
					fila.name = $(this).find('th').eq(0).text();
					var punto = [];
					$(this).find('td').each(function(){
						//FIXME Use formatters
						var toParse = $(this).text();
						toParse = toParse.replace(/[^\d\,\-]/g, "").replace(/,/g, ".");
						punto.push((toParse/1));		
					});
					fila.data.push(punto);
					filas.push(fila);
				});
				$(this).addClass('hidden');
				break;

			case 'mixed': //Permite series con mezcla de tipos de gráficas
				var contador =0;
				$(this).find('tbody tr').each(function(i){
					
					//El atributo data-type de /table/tbody/tr indica el tipo de grafica de esta serie de datos, por ejemplo 'spline', 'area', 'scatter' o 'column'. Si se omite, por efecto es spline (lineas)  
					
					//Si se indica atributo 'data-stacked' se apilan entre si aquellos con el mismo valor de ese atributo
					//Si no se indica 'data-stacked' entonces, se agrupan entre si aquellos que son de tipo de grafico 'column', el resto no se apilan.
					//
					var type = $(this).attr('data-type'); 
					var typeUsed = (type)?type:'spline';
					var stacked = $(this).attr('data-stacked');
					var stackUsed = (stacked)?stacked: (typeUsed=='column')?'stacked_column':'unstacked_'+((contador)++);	//con el contador son todas diferentes
					var fila = {'name':'','data':[], 'type': typeUsed , 'stack' : stackUsed  };
					fila.name = $(this).children('th').eq(0).text();
					$(this).children('td').each(function(){
						var toParse = $(this).text();
						toParse = toParse.replace(/[^\d\,\-]/g, "").replace(/,/g, ".");
						fila.data.push((toParse/1));	
					});
					filas.push(fila);
				});		
				$(this).addClass('hidden');
				break;
				
			default:
				$(this).find('tbody tr').each(function(i){
					var fila = {'name':'','data':[]};
					fila.name = $(this).children('th').eq(0).text();
					$(this).children('td').each(function(){
						//FIXME Use formatters
						var toParse = $(this).text();
						toParse = toParse.replace(/[^\d\,\-]/g, "").replace(/,/g, ".");
						fila.data.push((toParse/1));		
					});
					filas.push(fila);
				});	
				$(this).addClass('hidden');
			}
			var titulo2 = '';
			if ($(this).attr('data-url') && !Highcharts.theme.navigation.buttonOptions.enabled) {
				titulo2 = titulo;
				titulo = '';
			}
			switch(tipoGrafica){
				case 'areas':					
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,
			            chart: {
			                type: 'area',
			                inverted: iA
			            },
			            title: {
							verticalAlign: tituloAlign ? tituloAlign : undefined,
			                text: titulo
			            },
			            legend: {
			            	enabled: l,
			            	borderWidth: 0			            	
			            },
			            xAxis: {
			                categories: categorias,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value);
				                }		                	
			                }
			            },
			            yAxis: {
			                min: 0,
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value,unidadGrafica);
				                }		                	
			                }
			            },
			            tooltip: {
			                formatter: function() {
			                    return this.x+'<br/><span style="color:'+this.series.color+'">'+this.series.name+'</span>: <b>'+GRP.formatValue(this.y,unidadGrafica)+'</b>';
			                }
			            },
			            series: filas
					});
					break;
				case 'stack':					
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,
			            chart: {
			                type: 'area',
			                inverted: iA
			            },
			            title: {
							verticalAlign: tituloAlign ? tituloAlign : undefined,
			                text: titulo
			            },
			            legend: {
			            	enabled: 1,
			            	borderWidth: 0			            	
			            },
			            xAxis: {
							tickInterval: GRP.tickIntervalForTicks($(this), series),
			                categories: categorias,
			                labels: {
			                	formatter: function() {
			                		//FIXME Make more generic
			                		return GRP.formatDate(this.value);
				                }		                	
			                }
			            },
			            yAxis: {
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value,unidadGrafica);
				                }		                	
			                }
			            },
			            tooltip: {
			            	useHTML:true,
			                			                	
			                formatter: function() {
			                   // return GRP.formatDate(this.x)+'<br/><span style="color:'+this.series.color+'">'+this.series.name+'</span>: <b>'+GRP.formatValue(this.y,unidadGrafica)+'</b>';
			                    return  '<div style="width:100%;text-align:right"><span style="font-size: 1.2rem; color:#6e6e6e">'+
			                    GRP.formatValue(this.y,unidadGrafica)+
			                    '</span><span style="font-size: .8rem"> €</span><br/><span style="color:#CCCCCC ; font-size: .9rem">'+
			                    GRP.formatDate(this.x)+
			                    '</span></div>';
			                }
			            },
						plotOptions: {
							area: {
								stacking: 'normal'
							}
						},
			            series: series
					});
					break;
				case 'columns':	
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,
			            chart: {
			                type: 'column',
			                inverted: iA
			            },
			            title: {
							verticalAlign: tituloAlign ? tituloAlign : undefined,
			                text: titulo
			            },
			            legend: {
			            	enabled: l,
			            	borderWidth: 0
			            },
			            xAxis: {
			                categories: categorias,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value);
				                }		                	
			                }
			            },
			            yAxis: {
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value,unidadGrafica);
				                }		                	
			                }
			            },
			            tooltip: {
			                formatter: function() {
			                    return abreviaturas[this.x]+'<br/><span style="color:'+this.series.color+'">'+this.series.name+'</span>: <b>'+GRP.formatValue(this.y,unidadGrafica)+'</b>';
			                }
			            },
			            series: series
					});
					break;
				case 'pie':					
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,	
			            title: {
							verticalAlign: tituloAlign ? tituloAlign : undefined,
			                text: titulo
			            },
			            tooltip: false,
			            series: [{
			                type: 'pie',
			                name: categorias[0],
			                data: filas,
			                dataLabels: {
			                    formatter: function() {
			                        return this.y > 0 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
			                    }
			                }
			            }] 
					});
					break;
				case 'donut':					
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,	
						colors: [
						         '#FDE9DE',
						         '#FDAE82',
						         '#FC823F'
						         ],
			            title: {
			            	verticalAlign: 'middle',
			                y: -10,
			                text: titulo
			            },
			            tooltip: false,
			            series: [{
			                type: 'pie',
			                name: categorias[0],
			                data: filas,
			                innerSize: '90%',
			                dataLabels: {
			                    formatter: function() {
			                        return this.y > 0 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
			                    }
			                }
			            }]
					});
					break;
				case 'points':					
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,
			            title: {
							verticalAlign: tituloAlign ? tituloAlign : undefined,
			                text: titulo
			            },
			            legend: {
			            	enabled: l,
			            	borderWidth: 0			            	
			            },
			            chart: {
			                inverted: iA
			            },
			            xAxis: {
			                categories: categorias,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value);
				                }		                	
			                }
			            },
			            yAxis: {
			                min: 0,
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value,unidadGrafica);
				                }		                	
			                }
			            },
			            tooltip: {
			                formatter: function() {
			                    return this.x+'<br/><span style="color:'+this.series.color+'">'+this.series.name+'</span>: <b>'+GRP.formatValue(this.y,unidadGrafica)+'</b>';
			                }
			            },
			            plotOptions: {
			                series: {
			                    lineWidth: 0
			                }
			            },
			            series: filas
					});
					break;
				case 'bubbles':					
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,
			            chart: {
			                type: 'bubble',
			                inverted: iA
			            },
			            title: {
							verticalAlign: tituloAlign ? tituloAlign : undefined,
			                text: titulo
			            },
			            legend: {
			            	enabled: l,
			            	borderWidth: 0			            	
			            },
			            xAxis: {
			            	min: 0,
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value);
				                }		                	
			                }
			            },
			            yAxis: {
			            	min: 0,
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value,unidadGrafica);
				                }		                	
			                }
			            },
			            tooltip: {
			                formatter: function() {
			                    return '('+GRP.formatValue(this.x)+' , '+GRP.formatValue(this.y,unidadGrafica)+')<br/><span style="color:'+this.series.color+'">'+this.series.name+'</span>: <b>'+GRP.formatValue(this.point.z)+'</b>';
			                }
			            },
			            series: filas
					});
					break;
				case 'bar':		
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,
						chart: {
							type: 'bar',
			                inverted: iA
						},
			            title: {
			                text: titulo
			            },
			            xAxis: {
			                categories: categorias,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value);
				                }		                	
			                }
			            },
			            yAxis: {
			                min: 0,
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value,unidadGrafica);
				                }		                	
			                }
			            },
			            legend: {
			            	enabled: l,
			            	borderWidth: 1,			            	
			                backgroundColor: '#FFFFFF',
			                reversed: true
			            },
			            plotOptions: {
			                series: {
			                    stacking: 'normal'
			                }
			            },
			            tooltip: {
			                formatter: function() {
			                    return this.x+'<br/><span style="color:'+this.series.color+'">'+this.series.name+'</span>: <b>'+GRP.formatValue(this.y,unidadGrafica)+'</b>';
			                }
			            },
			            series: filas 
					});
					break;				
					
					
					
				case 'mixed':
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,
			            title: {
			                text: titulo 
			            },
			            chart: {
			                inverted: iA,
			            	borderWidth: 0
			            },
			            xAxis: {
			                categories: categorias,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value);
				                },
				                style: {"fontSize": "8px"}
			                }
			            },
			            yAxis: {
			                min: 0,
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value,unidadGrafica);
				                }		                	
			                }
			            },
			            tooltip: {
			            	useHTML:true,
			                formatter: function() {
//			                    return this.x+'<br><b>'+GRP.formatValue(this.y,unidadGrafica)+'</b>';
			                	return '<div style="width:100%;text-align:right"><span style="font-size: 1.2rem; color:#6e6e6e">'+
			                	GRP.formatValue(this.y,unidadGrafica)+
			                	'</span><span style="font-size: .8rem"> €</span><br/><span style="color:#CCCCCC ; font-size: .9rem;text-align:right">'+
			                	GRP.formatDate(this.x)+
			                	'</span></div>';
			                }
			            },
			            
			            plotOptions: {
			                series: {
			                    stacking: 'normal'
			                }
			            },
			            
			            
			            legend: {
			            	borderWidth: 0,
			            	itemMarginBottom:40,
			            	enabled: l
			            	/* ,width: 500 */
			            },
			            
			            series: filas
					});
					break;
					
					
				default:
					alert ('default');
					$('#'+idGrafica).highcharts({
						lang: menuExportacion,
			            title: {
							verticalAlign: tituloAlign ? tituloAlign : undefined,
			                text: titulo
			            },
			            chart: {
			                inverted: iA,
			            	borderWidth: 0
			            },
			            legend: {
			            	enabled: l			            	
			            },
			            xAxis: {
			                categories: categorias,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value);
				                }		                	
			                }
			            },
			            yAxis: {
			                min: 0,
			                title: false,
			                labels: {
			                	formatter: function() {
			                		return GRP.formatValue(this.value,unidadGrafica);
				                }		                	
			                }
			            },
			            tooltip: {
			                formatter: function() {
			                    return this.x+'<br/><span style="color:'+this.series.color+'">'+this.series.name+'</span>: <b>'+GRP.formatValue(this.y,unidadGrafica)+'</b>';
			                }
			            },
			            series: filas
					});
					break;
			}
			if ($(this).attr('data-url')) {
				var table = $(this);
				var form = table.closest('form');
				var graph = $('#'+idGrafica).highcharts();
				var hasData = false;
				var update = function(){GRP.updateGraph(table, form, graph, tipoGrafica)};
				if (graph.series.length > 0) {
					if (graph.series[0].data.length > 0) {
						hasData = true;
					}
				}
				if (!hasData) {
					update();
				} else if (graph.legend) {
					if (graph.legend.group) {
						if (series.length > 1) {
							graph.legend.group.show();
						} else {
							graph.legend.group.hide();
						}
					}
				}
				form.submit(function(event) {
					event.preventDefault();
					update();
				});
				$(this).find('input.autoupdate, select.autoupdate, textarea.autoupdate').each(function(i){
					$(this).on('change', update);
				});
				//FIXME Annoying primefaces layout
				$(this).find('div.autoupdate input').each(function(i){
					$(this).on('change', update);
				});
				var controlsHolder = $('<div />');
				if (!graph.options.navigation.buttonOptions.enabled) {
					var titleDiv = $('<div class="title"></div>');
					titleDiv.append(titulo2);
					controlsHolder.append(titleDiv);
					var buttons = $('<div class="buttons"></div>');
					var exportButton = $('<a href="#" class="export">Exportar</a>');
					exportButton.click(function(event) {
						event.preventDefault();
						//TODO Export as CSV
						alert(graph.getCSV()); //graph.exportChart({type: 'text/csv', filename: 'graph'}, {subtitle: {text:''}});
					});
					buttons.append(exportButton);
					controlsHolder.append(buttons);
					$(this).find('> thead > tr > td[colspan]').each(function(){
						var controls = $('<div />');
						controls.append($(this).children());
						if ($(this).parent().attr('data-graphControlToggle') == 'true') {
							controls.attr('data-graphControlToggle', 'true');
							controls.addClass('hidden');
							var toggleButton = $('<a href="#" class="edit">Editar</a>');
							toggleButton.click(function(event) {
								event.preventDefault();
								controls.toggleClass('hidden');
							});
							controls.find('input[type="submit"]').click(function(event) {
								controls.toggleClass('hidden');
							});
							buttons.append(toggleButton);
						} else {
							controls.find('input[type="submit"]').addClass('hidden');
						}
						controlsHolder.append(controls);
					});
				}
				$('#'+idGrafica).prepend(controlsHolder.children());
			}
		});	
	},
	velocimetro: function(){
		$('.speedmeter').filter(':not([data-enhance="false"])').each(function(){
			var id = 'spdmt_bk_'+($(this).prevAll('.speedmeter').length+1);
			var valor = [];
			valor.push(parseFloat($(this).html().replace(/\s<ab.*br>/g,'')));
			var mn = $(this).attr('data-min');
			var mx = $(this).attr('data-max');
			$(this).before('<div id="'+id+'"></div>').addClass('reader');
			$('#'+id).css({'width':$(this).attr('data-width'),'height':$(this).attr('data-height')}).highcharts({
				lang: {
					contextButtonTitle: _('Exportar gráfica'),
					downloadJPEG: _('Descargar JPEG'),
					downloadPDF: _('Descargar PDF'),
					downloadPNG: _('Descargar PNG'),
					downloadSVG: _('Descargar SVG'),
					printChart: _('Imprimir')
				},
	            title: {
	                text: false
	            }, 
	            tooltip: {
	                enabled: false
	            }, 
	            chart: {
	                type: 'gauge'
	            },   
	            pane: {
	    	        startAngle: -150,
	    	        endAngle: 150
	    	    },
	    	    yAxis: {
	    	        min: parseFloat(mn),
	    	        max: parseFloat(mx),	    	        
	    	        minorTickInterval: 'auto',
	    	        minorTickWidth: 1,
	    	        minorTickLength: 10,
	    	        minorTickPosition: 'inside',    	
	    	        tickPixelInterval: 30,
	    	        tickWidth: 1,
	    	        tickPosition: 'inside',
	    	        tickLength: 5,
	    	        labels: {
	    	            step: 2,
	    	            rotation: 'auto'
	    	        },
	    	        title: {
	    	            text: $(this).children('abbr').eq(0).text()
	    	        }      
	    	    },
	    	    series: [{
	    	        data: valor
	    	    }]
			});
		});
	}	
}
