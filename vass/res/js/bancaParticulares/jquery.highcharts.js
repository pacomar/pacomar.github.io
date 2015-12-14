/* Definición del tema para Highcharts */
if (window.Highcharts) {
	Highcharts.theme = {
		colors: [
			'#fce2d3',
			'#f5a170', 
			'#e5d87b',
			'#b1a9a4',
			'#a8ccd2',
			'#fbd8c4'		
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
			lineColor: 'rgba(252, 226, 211, 0.3)',
			tickColor: '#FFFFFF',
			labels: {
				style: {
					color: '#CCCCCC',
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
			minorTickPosition:'inside',
			tickPosition:'inside',
			x: -200,
			labels: {
				style: {
					color: '#9E9D9D',
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
			},
			useHTML: true,
			verticalAlign: 'top'
		},
		labels: {
			useHTML: true,
			style: {
				color: '#333'
			}
		},
		tooltip: {
			 shadow: false, 
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0, 'rgba(255, 255, 255, 0)'],
					[1, 'rgba(255, 255, 255,0)']
				]
			},
			borderWidth: 0,
			style: {
				color: '#000'
			},
			 crosshairs: [{
	                width: 2,
	                color: '#5b432f'
	            }],
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
				lineColor: '#FFF'
			}
		},

		toolbar: {
			itemStyle: {
				color: '#CCC'
			}
		},

		navigation: {
			buttonOptions: {
				enabled: false
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