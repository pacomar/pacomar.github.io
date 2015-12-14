$( document ).ready(function() {

	//____________________________________________________________gráfico tarjeta
    $(function() {
        Highcharts.setOptions({
            colors: ['#e30881', '', '', '', '', '', '', '', '']
        });



        $('#container').highcharts({
            chart: {
                type: 'pie'
            },

            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        });
    });

    $(function() {
        $('#container').highcharts({
            chart: {
                zoomType: 'xy'
            },
            // title: {
            //   text: 'Average Monthly Temperature and Rainfall in Tokyo'
            //},
            // subtitle: {
            //   text: 'Source: WorldClimate.com'
            //},
            xAxis: [{
                categories: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
                    'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DEC'
                ],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}€',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: '',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: '',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true,
                enabled: false
            },
            legend: {
                layout: 'vertical',
                enabled: false,
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: '',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: '€'
                }

            }, {
                name: 'Euros',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: '°C'
                }
            }]
        });
    });

    $(function() {
        $('#container').highcharts({
        	credits:{
        		enabled: false
        	},
        	title: false,
            chart: {
                type: 'column',
                style: {
                    fontFamily: 'bankinter_regular'
                }
                
            },
            xAxis: {
                categories: ['JAN', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DEC']
            },

            plotOptions: {
                series: {
                    pointWidth: 10
                }
            },

            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }],
            exporting:{enabled:false}
            
            
        });
    });
	//________________________________________________________end gráfico tarjeta	
    
    
    
    
    
}); //end ready


