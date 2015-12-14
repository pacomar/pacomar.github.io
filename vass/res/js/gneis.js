var i18n = {
	'en': {
		'.': ',',
		',': '.',
		';': ',', 
		'a': 'to',
		'Abre en ventana nueva': 'Opens in new window',
		'Abr': 'Apr',
		'Abril': 'April',
		'Ago': 'Aug',
		'Agosto': 'August',
		'Anterior': 'Previous',
		'Ascendente': 'Ascending',
		'Bloq. May&uacute;s. activado': 'Cap Locks on',
		'Cerrar': 'Close',
		'Cerrar ventana': 'Close window',
		'de': 'of',
		'dd/mm/yy': 'dd/mm/yy',
		'Descargar JPEG': 'Download JPEG',
		'Descargar PDF': 'Download PDF',
		'Descargar PNG': 'Download PNG',
		'Descargar SVG': 'Download SVG',
		'Descendente': 'Descending',
		'Diapositiva': 'Slide',
		'Dic': 'December',
		'Diciembre': 'Dec',
		'Do': 'Su',
		'Dom': 'Sun',
		'Domingo': 'Sunday',
		'Ene': 'Jan',
		'Enero': 'January',
		'Exportar a Excel': 'Export to Excel',
		'Exportar gr&aacute;fica': 'Export chart',
		'Feb': 'Feb',
		'Febrero': 'February',
		'filas': 'rows',
		'Filtrar': 'Filter',
		'Hoy': 'Today',
		'Imprimir': 'Print',
		'Ju':'Th',
		'Jue':'Thu',
		'Jueves':'Thursday',
		'Jun': 'Jun',
		'Junio': 'June',
		'Jul': 'Jul',
		'Julio': 'July',
		'Lu': 'Mo',
		'Lun': 'Mon',
		'Lunes': 'Monday',
		'Ma': 'Tu',
		'Mar': 'Tue',
		'Martes': 'Tuesday',
		'Marzo': 'March',
		'May': 'May',
		'Mayo': 'May',
		'Mi':'We',
		'Mi&eacute;':'Wed',
		'Mi&eacute;rcoles':'Wednesday',
		'Mostrando': 'Showing',
		'Mostrar': 'Show',
		'No hay resultados': 'No results',
		'Nov': 'Nov',
		'Noviembre': 'November',
		'Octubre': 'October',
		'Oct': 'Oct',
		'Ocultar': 'Hide',
		'Ordenar': 'Sort',
		'P&aacute;gina anterior': 'Previous page',
		'P&aacute;gina siguiente': 'Next page',
		'Pausar': 'Pause',
		'Presione Esc para cerrar': 'Press Esc to close', 
		'Reproducir': 'Play',
		'Restablecer': 'Reset',
		'resultados': 'results',
		'S&aacute;': 'Sa',
		'S&aacute;b': 'Sat',
		'S&aacute;bado': 'Saturday',
		'Sep': 'Sep',
		'Septiembre': 'September',
		'Siguiente': 'Next',
		'Sm': 'Wk',
		'Ver calendario': 'Show calendar',
		'Vi': 'Fr',
		'Vie': 'Fri',
		'Viernes': 'Friday'
	}
}

var params = ["navigator.appCodeName","nc","navigator.appMinorVersion","nam","navigator.appName","nan","navigator.appVersion","nav","navigator.browserLanguage","bnl","navigator.language","nl","navigator.cookieEnabled","nce","navigator.cpuClass","ncc","navigator.oscpu","osc","navigator.onLine","nol","navigator.platform","npl","navigator.userAgent","nua","navigator.javaEnabled()","nje","navigator.taintEnabled()","nte","location.href","lhr","screen.availHeight","sah","screen.availWidth","saw","screen.height","sh","screen.width","sw","document.referrer","r","document.URL","du","document.lastModified","dl","error.name","ena","error.message","em","error","err","error.description","ed","error.number","enu","error.url","eu","error.linenumber","el","new Date().toGMTString()","ce"];

var debug = false;

function logError(errorMsg, url, lineNumber) {
	if(debug) {
		alert("error handler");
	}
	var get = "?line=" + encodeURI(lineNumber) + "&url=" + encodeURI(url) + "&errorMsg=" + encodeURI(errorMsg);
	for ( var i = 0; i < params.length; i += 2) {
		try {
			get += "&" + params[i+1] + "=" + encodeURI(eval(params[i]));
		}
		catch(err) {
			if(debug) {
				alert("eval() failed for: " + params[i]);
			}			
		}
	}
	if(debug) {
		alert("Final get: " + get);
	}

	var img = document.createElement("img");
	img.src = getBase() + '/clienterror' + get;
	img.height = "1";
	img.width = "1";
	if(debug) {
		alert(img.src);
	}
	document.body.appendChild(img);
	
	if(debug) {
		alert("logError end");
	}
}

function getBase() {
    var base = document.getElementsByTagName('base')[0];
    if (base && base.href && (base.href.length > 0)) {
        base = base.href;
    } else {
        base = document.URL;
    }
    return base.substr(0,
        base.indexOf("/", base.indexOf("/", base.indexOf("//") + 2) + 1));
};

window.onerror = logError;
