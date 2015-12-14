(function(){
	window.lang = document.getElementsByTagName('html')[0].lang;
//	window.lang = navigator.language || navigator.userLanguage;
	window._ = function(x){

		if(window.lang!='es-ES'){
			if(i18n[lang]!=undefined){
				if(i18n[lang][x]!=undefined){
					x = i18n[lang][x];
				}
			}	
		}
		return x;
	}
})();
(function($) {
	$.fn.outerHTML = function(){
	    var oH = $(this).wrap('<div/>').parent().html();
	    $(this).unwrap();
	    return oH;
	}
})(jQuery);
var GetBoolean = function(data,defaultValue){
	if (data) {
		return data=='true'?true:false;
	}else{
		if (arguments.length>1) {
			return defaultValue;
		}
	}
}


/* -----
   json2
   -----
   Necesaria para convertir los datos a cadena de JSON en la función tablaCSV; 
   jQuery cuenta con el método $.parseJSON(), pero no una inversa equivalente a JSON.stringify()
 */
if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());


var GNE = {
	imprimir: function(){
		$('.print').filter(':not([data-enhance="false"])').each(function(){
			$(this).html('<a href="#">'+_('Imprimir')+'</a>');
			$(this).children().filter('a').click(function(e){ e.preventDefault();window.print(); });
		});
	}
	,
	ventanaNueva: function(){ 
		$('a[target="_blank"]').filter(':not([data-mode="modal"])').filter(':not([data-enhance="false"])').each(function(){ 
			if ($(this).find('img').length==0) {
				$(this).append('<img src="/res/css/img/newwin.gif" alt="'+_('Abre en ventana nueva')+'" />');
			}else{
				$(this).find('img').attr('alt',$(this).find('img').attr('alt') + ' ' + _('Abre en ventana nueva'));
			}
			var proporcion = function(x,d){
				var px = 0;
				switch (d) {
					case 'W':
					case 'L':
						px = screen.width * (x/100);
						break;
					case 'H':
					case 'T':
						px = screen.height * (x/100);
						break;
					default:
						px = null;
				}
				return px;
			}
			var cogePX = function(x,d,ref){
				if (x) {
					var medida = $.trim(x);
					var px = 0;
					if (medida=='center' || medida=='half') {
						px = proporcion('50',d);
						if (ref) { px = px - (ref/2); }
					} else if (medida.substring(medida.length-1)=='%'){
						px = proporcion(medida.substr(0,medida.length-1),d);
						if (ref) { px = px - (ref/2); }
					} else if (medida.substring(medida.length-2)=='px'){
						px = medida.substr(0,medida.length-2);
					}else{
						px = x;
					}
					return px;
				}
				return null;
			}
			var v = $(this).attr('href');
			var w = cogePX($(this).attr('data-width'),'W') || 800;
			var h = cogePX($(this).attr('data-height'),'H') || 600;
			var x = cogePX($(this).attr('data-left') || 'center','L',w);
			var y = cogePX($(this).attr('data-top') || 'center','T',h);
			var c = $(this).attr('data-chrome') || 'location=1,menubar=0,resizable=1,scrollbars=1,status=1,toolbar=0';
			
			$(this).click(function(e){
				e.preventDefault();
				var ven = window.open(v,'obsidiana','width='+w+',height='+h+',left='+x+',top='+y+','+c);
				ven.focus();
			});
		});
	}
	,
	avisoCapsLock: function(){
		$('input[type="password"]').filter(':not([data-enhance="false"])').keypress(function(e){
			var which = e.which?e.which:(e.keyCode?e.keyCode:-1);
			var shift_status = e.shiftKey?e.shiftKey:(e.modifiers?!!(e.modifiers & 4):false);
			if((which>=65 && which<=90 && !shift_status) || (which>=97 && which<=122 && shift_status)) {
				if(!($(this).next().hasClass('aviso-mayus'))) { 
					$(this).after('<span class="aviso-mayus">'+_('Bloq. May\u00FAs. activado')+'</span>');
				}
			}else if($(this).next().hasClass('aviso-mayus')) {
				$(this).next().remove();
			}
		});
	}
	,
	tooltip: function(){
		$('.tooltip').filter(':not([data-enhance="false"])').each(function(){
			if ($(this).find('.caja_tooltip').length==0) {
				var txt = $(this).attr('title');
				$(this).removeAttr('title');
				var el;
				if($(this).is('img')){
					$(this).wrap('<span class="icon-tooltip" />');
					el = $(this).parent();
				} else {
					el = $(this);				
				}
				el.append('<span class="txt-tooltip">'+txt+'</span>');
				el.children('.txt-tooltip').hide();
				el.mousemove(function(e){
					$(this).children('.txt-tooltip').fadeIn('fast').css({'position':'fixed','display':'block','top':(e.pageY-$(document).scrollTop())-30,'left':e.pageX+10});
				});
				el.mouseout(function(e){
					$(this).children('.txt-tooltip').fadeOut('fast').css({'position':'absolute','top':'-9999em'});
				});
			}
		});
	}
	,
	modal: function(){
		$('*[data-modal]').filter(':not([data-enhance="false"])').each(function(i){
			var contenidoVentana = $('#'+$(this).attr('data-modal'));
			var idVentana = 'bk_modal_'+i;
			contenidoVentana.wrap('<div id="'+idVentana+'" class="modal" />').addClass('modal-body');
			var ven = $('#'+idVentana);
			ven.append('<div class="modal-footer"><input class="modal-close" type="submit" value="Cerrar" /></div>').css({
				'position':'absolute',
				'left':'-9999em',
				'z-index':'777'
			}).find('.modal-close').eq(0).click(function(e){
				e.preventDefault();
				ven.css({'position':'absolute','left':'-9999em','z-index':'777'});
			});
			$(this).click(function(e){
				ven.css({'position':'fixed','display':'block','top':(e.pageY-$(document).scrollTop()-10),'left':e.pageX+20});
			});
		});
	}
	,
	notasDesplegables: function(){		
		$('.notes').filter(':not([data-enhance="false"])').each(function(){
		 	$(this).children(':not("h2")').wrapAll('<div class="desplegable"></div>');
			$(this).find('h3').each(function(){
				$(this).nextUntil('h3').wrapAll('<div class="desplegable"></div>');
				t = $(this).text(); 
				$(this).html('<a href="#">'+t+'</a>');
				$(this).children('a').click(function(e){
					e.preventDefault();
					$(this).parent().next('.desplegable').slideToggle('fast');
					$(this).toggleClass('desplegado');
				});
				$(this).filter(':last').children('a').addClass('desplegado');
			});
			$(this).find('h2').filter(':not([data-enhance="false"])').each(function(){
				$(this).filter('last').children('a').addClass('desplegado');
				t = $(this).text();
				$(this).html('<a href="#">'+t+'</a>');
				$(this).children('a').click(function(e){
					e.preventDefault();
					$(this).toggleClass('desplegado');
					$(this).parent().next().slideToggle('fast');
				});
				$(this).next().hide();
			});
		});
		$('.notes .desplegable').filter(':not([data-enhance="false"])').each(function(){
			$(this).css({'position':'relative','overflow':'hidden'});
			$(this).filter(':not(":last-child")').hide();
		});
	}
	,
	desplegable: function(){
		$('[data-toggle]').filter(':not([data-enhance="false"])').each(function(){
			var o = GetBoolean($(this).attr('data-open'),false);
			$(this).addClass('dropdown-header');
			var el = $(this).attr('data-toggle');
			$('#'+el).addClass('dropdown-panel');
			var cab = $(this);
			if(!o){
				$('#'+el).hide();
				cab.append('<a href="#'+el+'" class="dropdown-img-control"><img src="/res/css/img/more.gif" alt="'+_('Mostrar')+'" width="11" height="11" /></a>');
			} else {
				cab.addClass('dropdown-header-open').append('<a href="#'+el+'" class="dropdown-img-control"><img src="/res/css/img/less.gif" alt="'+_('Ocultar')+'" width="11" height="11" /></a>');				
			}
			cab.children('.dropdown-img-control').click(function(e){
				e.preventDefault();				
				$('#'+el).slideToggle();
				cab.toggleClass('dropdown-header-open');	
				var img = $(this).children('.dropdown-img-control img').eq(0);
				if(cab.hasClass('dropdown-header-open')){
					img.attr({src: '/res/css/img/less.gif',alt:_('Ocultar')});		
				} else {
					img.attr({src: '/res/css/img/more.gif',alt:_('Mostrar')});					
				}
			});
		});
	}
	,
	acordeon: function(){
		$('.accordion').filter(':not([data-enhance="false"])').each(function(){ 
			var cl = GetBoolean($(this).attr('data-close'),true);
			var ini = $(this).attr('data-initial') || 0;
			var imgMore = $(this).attr('data-imgMore') || 'more.gif';
			var imgLess = $(this).attr('data-imgLess') || 'less.gif';
			if (ini>$(this).children('dt').length) {ini=$(this).children('dt').length;} //si excede del número le asignamos el último
			if (!cl && ini==0) { ini=1; } //si tiene que haber uno abierto y no tiene uno asignado, le asignamos el primero
			
			$(this).children('dd').hide();
			$(this).children('dt').each(function(i){
				var c = $(this).html();
				$(this).addClass('accordion-header').append('<a href="#" class="accordion-img-control"><img src="/res/css/img/'+imgMore+'" alt="'+_('Mostrar')+'" /></a>');				
				$(this).children('.accordion-img-control').click(function(e){	
					e.preventDefault();
					if($(this).parent().hasClass('accordion-open')&&cl){							
						$(this).parent().removeClass('accordion-open');
						$(this).children('img').eq(0).attr({src: '/res/css/img/'+imgMore,alt:_('Mostrar')});
						$(this).parent().next().slideUp();
					} else {
						$(this).parent().addClass('accordion-open');
						$(this).children('img').eq(0).attr({src: '/res/css/img/'+imgLess,alt:_('Ocultar')});
						$(this).parent().next().slideDown();
						$(this).parent().siblings().filter('dd').not($(this).parent().next()).slideUp();
						$(this).parent().siblings().find('.accordion-img-control img').attr({src: '/res/css/img/'+imgMore,alt:_('Mostrar')});
						$(this).parent().siblings().removeClass('accordion-open');
					}
				});				
				if(ini-1==i){
					$(this).find('.accordion-img-control img').eq(0).attr({src: '/res/css/img/'+imgLess,alt:_('Ocultar')});
					$(this).addClass('accordion-open').next().slideDown();
//				}else{
//					$(this).removeClass('accordion-open');
				}
			});
		});
	}
	,
	ajaxMultimixta: function(url){
  		var ajaxReturn = function(divs){
  	  		var div = '';
  	  		var id = 'bk_ajaxMultimixta';
			$('body').append('<div id="'+id+'" style="display:none" />'); //insertar capa principal oculta
     		$('#'+id).html(divs); //añadir respuesta AJAX a la capa principal oculta
     		$('#'+id).children().each(function(i){ //recorrer divs
     			div = $(this).attr('id'); //guardamos ID del div
     			$(this).attr('id',id+'_'+div); //renombramos div para evitar duplicados 
	     		$("#"+div).replaceWith($(this).outerHTML()); //sustituir etiqueta por div (si existe)
	     		$(this).detach(); //eliminar div
     			$('#'+id+'_'+div).attr('id',div);  //recuperar id de etiqueta (si existe)
    		});
     		$('#'+id).detach(); //eliminar capa principal oculta
		}
  		$.get(url,ajaxReturn,"html"); 
	}
	,
	checkAll: function(){
  		var id = 'bk_chekAll';
		$('thead th.checkall').filter(':not([data-enhance="false"])').each(function(i){
			var checks = [];
			var posicion = $(this).index();
			$(this).parent().parent().next().find('tr').each(function(){
				$(this).find('td').eq(posicion).find('input[type="checkbox"]').each(function(){
					checks.push($(this));
				});
			});
			if (checks.length>0) {
				var label = '';
				$(this).contents().each(function(){
					if (this.nodeType==3) {
						label += $(this).outerHTML();
						$(this).remove();
					}
				});
				if (label.length>0) { label = '<label for="'+id+'_'+i+'">'+label+'</label>'; }
				$(this).prepend('<input type="checkbox" id="'+id+'_'+i+'">'+label);
				var check = $(this).children('input[type="checkbox"]');
				check.click(function(e){	
					for (var j=0; j<checks.length; j+=1) {
						checks[j].prop('checked',check.prop('checked'))
					}
				});
			}
		});
	}
	,
	multiAjax: function(){
		var llamadas = [];

		var getAjax = function(i){
			var ajaxReturn = function(respuesta){
				for (var j=1; j<llamadas[i].length; j+=1) {
					setAjax(i,j,respuesta);
				}
			}
			$.get(llamadas[i][0],ajaxReturn,"html"); 
		}
		var setAjax = function(i,j,respuesta){
			var obj = $(llamadas[i][j][0]);
			var pos = llamadas[i][j][1]; 
			if (pos!='') {
				var divTmp = $("<div />").html(respuesta);
				
				respuesta = divTmp.find('#'+pos).outerHTML();
			}	
			$(obj).before('<div class="multiAjax" id="bk_multiAJAX_'+(i+1)+'_'+j+'">'+respuesta+'</div>');
			$(obj).remove();
		}

		//cargar array
		$('a[target="_this"]').each(function(){
			var encontrado = false;
			var llamada = $(this).attr('href').split('#',2);
			llamada[1] = llamada[1] || '';
			for (var i=0; i<llamadas.length; i+=1) {
				if (llamadas[i][0] == llamada[0]) {
					llamadas[i].push(new Array($(this),llamada[1]));
					encontrado = true;
					break;
				}
			}
			if (!encontrado) {
				llamadas.push(new Array(llamada[0],new Array($(this),llamada[1])));												
			}
		});
		
		//llamar ajax
		for (var i=0; i<llamadas.length; i+=1) {
			getAjax(i);
		}
	}
	,	
	popupCloseButton: function(){
		var cuerpo = $('body.popup').filter(':not([data-enhance="false"])');
		cuerpo.find('article').append('<p class="print" />');
		cuerpo.find('article').append('<div class="center"><button onclick="var cf=function(){window.close();};var oamSF=function(){};return (cf.apply(this,[])==false)?false:oamSF.apply(this,[]);">'+_('Cerrar')+'</button>');
	}
	,	
	wizard: function(){
		var bkwId = 'bk_wizard_';
		var id = 0;
		var llamadas = [];
		var botones = [];
		var ONLOAD = 1; 	//Llama a la URL una sóla vez, al cargar la página
		var ONSHOW = 2; 	//Llama a la URL una sóla vez, en la primera petición
		var ONEVERY = 3;    //Llama a la URL en todas las peticiones
		var ONLOAD_ONSHOW = 4;
		var ONLOAD_ONEVERY = 5;
		var ONSHOW_ONEVERY = 6;
		var ONLOAD_ONSHOW_ONEVERY = 7;
		var NORMAL = 0;  //Tipo de plugin Normal, el TARGET del enlace/formulario comienza por "#" y no se corresponde con el id de su DIV contenedor
		var WIZARD = 1;  //Tipo de plugin Wizard, el TARGET del enlace/formulario comienza por "#" y es su DIV contenedor
		var LIGHTBOX = 2;	//Tipo de plugin LIGTHBOX, el TARGET del enlace es "_Window"
		var front = 0;  //para control de la actividad del ratón del Lightbox
		var abierto = false;  //para control de la apertura del Lightbox
	
		//añade un número de evento a número total de evento
		//ONLOAD = 1,  ONSHOW = 2,  ONEVERY = 3  
		//ONLOAD_ONSHOW = ONLOAD + ONSHOW + 1 = 4
		//ONLOAD_ONEVERY = ONLOAD + ONEVERY + 1 = 5
		//ONSHOW_ONEVERY = ONSHOW + ONEVERY + 1 = 6
		//ONLOAD_ONSHOW_ONEVERY = ONLOAD + ONSHOW + ONEVERY + 1 = 7
		var ponEvento = function(i,evento) {
			var ini = llamadas[i][3];
			var fin = 0;
			if (ini==0) { //si aún no hay evento añade el nuevo
				fin = evento;
			}else if (ini==evento) {  //si el total es como el evento no lo añade
				fin = ini;  
			}else if (ini<=ONEVERY) { //si el total es simple lo incrementa con el nuevo
				fin = ini + evento + 1; 
			}else if (ini+evento==ONLOAD_ONSHOW_ONEVERY) { //si el total y el nuevo suman el máximo es que aún no está añadido  
				fin = ONLOAD_ONSHOW_ONEVERY;
			}else{  //en cualquier otror caso no lo añade
				fin = ini;
			}
			llamadas[i][3] = fin;
		};
		//añade una llamada al array de llamadas
		//0=pagina, 1=metodo, 2=params, 3=sumaEventos, 4=respuesta, 5=(0=objeto, 1=seccion, 2=evento, 3=tipo)
		var cargarLlamadas = function(pagina,metodo,params,seccion,evento,tipo,objId) {
			var encontrado = false;
			var i = 0;
			var j = 5;
			//comprueba que para esa página, método y parámetros no xiste ya una entrada 
			for (i=0; i<llamadas.length; i+=1) {
				if (llamadas[i][0]==pagina && llamadas[i][1]==metodo && llamadas[i][2]==params) {
					j = llamadas[i].length;
					//si ya existe entrada, añade el objeto al elemento encontrado 
					ponEvento(i,evento);
					llamadas[i].push(new Array(objId,seccion,evento,tipo));
					encontrado = true;
					break;
				}
			}
			if (!encontrado) {
				//si no existe entrada, añade elemento nuevo 
				llamadas.push(new Array(pagina,metodo,params,evento,'',new Array(objId,seccion,evento,tipo)));												
			}
			return {X:i, Y:j};  //devuelve las posiciones de los arrays donde ha insertado los 2 grupos de datos 
		};
		
		//obtiene una cadena de serialización de un formulario
		var formSerialize = function(form) {
		    var params = [];
		    var elements = form.elements;
		    if (elements) {
			  	var feature = {};
			  	feature.fileapi = $("<input type='file'/>").get(0).files!==undefined;
			  	feature.formdata = window.FormData!==undefined;
			    var i, j, name, value, element, max, jmax;
			    for (i=0, max=elements.length; i<max; i++) {
			    	element = elements[i];
			        name = element.name;
			        if (!name || element.disabled) {
			            continue;
			        }
			        value = fieldValue(element, true);
			        if (value && value.constructor==Array) {
			            for (j=0, jmax=v.length; j<jmax; j++) {
			            	params.push({name:name, value:value[j]});
			            }
			        }else if (feature.fileapi && element.type=='file') {
			            var files = element.files;
			            if (files.length) {
			                for (j=0; j<files.length; j++) {
			                	params.push({name:name, value:files[j], type:element.type});
			                }
			            }else{
			            	params.push({name:name, value:'', type:element.type});
			            }
			        }else if (value!==null && typeof value!='undefined') {
			            params.push({name:name, value:value, type:element.type, required:element.required});
			        }
			    }
	
			    if (form.clk) {
			        // input type=='image' are not found in elements array! handle it here
			        var $input = $(form.clk);
			        var input = $input[0];
			        name = input.name;
			        if (name && !input.disabled && input.type=='image') {
			            params.push({name:name, value:$input.val()});
			            params.push({name:name+'.x', value:form.clk_x}, {name:name+'.y', value:form.clk_y});
			        }
			    }
		    }
		    return $.param(params);
		};
		
		//obtiene una cadena de serialización de un campo
		var fieldValue = function(element, successful) {
		    var name = element.name;
		    var type = element.type;
		    var tag = element.tagName.toLowerCase();
		    if (successful===undefined) {
		        successful = true;
		    }

		    if (successful && (!name || element.disabled || type=='reset' || type=='button' || (type=='checkbox' || type=='radio')
		    				   && !element.checked	|| (type=='submit' || type=='image')
		    				   && element.form && element.form.clk!=element || tag=='select' && element.selectedIndex==-1)) {
		    	return null;
		    }

		    if (tag=='select') {
		        var index = element.selectedIndex;
		        if (index < 0) {
		            return null;
		        }
		        var values = [];
		        var ops = element.options;
		        var one = (type=='select-one');
		        var max = (one?index+1:ops.length);
		        for (var i=(one?index:0); i<max; i++) {
		            var op = ops[i];
		            if (op.selected) {
		                var value = op.value;
		                if (!value) { // extra pain for IE...
		                    value = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
		                }
		                if (one) {
		                    return value;
		                }
		                values.push(value);
		            }
		        }
		        return values;
		    }
		    return $(element).val();
		};

		//Realiza a AJAX la llamada "i" del array de llamadas, siempre y cuando tenga algún objeto de tipo "ONLOAD"
		var getAjaxOnload = function(i) {
			var ajaxReturn = function(respuesta){
				llamadas[i][4] = respuesta;
				for (var j=5; j<llamadas[i].length; j+=1) {
					if (llamadas[i][j][2]==ONLOAD) { 
						//asigna a cada objeto de tipo ONLOAD el resultado de la llamada AJAX 
//console.log('getAjaxOnload('+i+') ajaxRetun '+llamadas[i][0]+' '+llamadas[i][j][0]) //
						setAjax(llamadas[i][j][0],llamadas[i][0],llamadas[i][j][1],llamadas[i][j][3],respuesta);
					}
				}
			}			
			var evento = llamadas[i][3];
			//realizará la llamada AJAX si la suma de eventos de sus objetos posee algun evento ONLOAD
			if (evento==ONLOAD || evento==ONLOAD_ONSHOW || evento==ONLOAD_ONEVERY || evento==ONLOAD_ONSHOW_ONEVERY) { 
//console.log('getAjaxOnload('+i+') '+llamadas[i][0]) //
				$.ajax({type: llamadas[i][1],
					url: llamadas[i][0], 
					data: llamadas[i][2],
					success: ajaxReturn ,
					dataType: "html"
				});
			}
		};
		
		//asigna a un objeto el resultado de una llamada AJAX, o en caso de ser pagina=='' el contenido de una seccion
		var setAjax = function(objeto,pagina,seccion,tipo,respuesta) {
//console.log('setAjax('+objeto+','+pagina+','+seccion+','+tipo+',<...>)')  //
			if (seccion!='') {
				if (pagina=='') { //sección de la propia página
					respuesta = $('#'+seccion).html();
				}else{  //sección de otra página
					var divTmp = $("<div />").html(respuesta);
					respuesta = divTmp.find('#'+seccion).outerHTML();
				}				  
			}

			if (tipo==LIGHTBOX) {
				objeto += '_content';
			}else if (tipo==WIZARD){
				var divTmp = $("<div />").html(respuesta);
				divTmp = parseWizardNormal(divTmp,true);
				respuesta = divTmp.html();		
			}

			$('#'+objeto).html(respuesta);
			
			if (tipo==WIZARD) {
					//una vez injectados los botones en el DOM les añadimos el evento click
					for (var i=0; i<botones.length; i+=1) {
						$('#'+botones[i]+'_btn').on("click", function() {getAjaxOnclick($(this));} );
					}
		 	}
		};
		//obtiene los parametros para la llamada a getAjaxOnevent a partir de las coordenadas de la posición que ocupa en el array de llamadas 
		var getAjaxOnclick = function(btn) {
			 var i = btn.attr('data-X');
			 var j = btn.attr('data-Y');
			//elementos del array: 0=pagina, 1=metodo, 2=params, 3=sumaEventos, 4=respuesta, 5=(0=objeto, 1=seccion, 2=evento, 3=tipo)
			getAjaxOnevent(llamadas[i][j][0],llamadas[i][1],llamadas[i][0],llamadas[i][j][1],llamadas[i][j][3],llamadas[i][2],llamadas[i][j][2]);
			//parametros de llamada; getAjaxOnevent(objId,metodo,pagina,seccion,tipo,params,evento)												
		};

		
		//Realiza una llamada AJAX, siempre y cuando sea pagina!=''.
		var getAjaxOnevent = function(objeto,metodo,pagina,seccion,tipo,params,evento) {
			var yaRespuesta = '';
			var llamada = -1;
			var ajaxReturn = function(respuesta){
				if (llamada>-1) {
					llamadas[llamada][4] = respuesta;				
				}
				setAjax(objeto,pagina,seccion,tipo,respuesta);
			}
			//si no tiene pagina se trata de una seccion de la pagina actual y no tiene que llamar
			if (pagina=='') {
				ajaxReturn('');
			}else{
				if (evento!=ONEVERY) { //ONEVERY siempre realiza la llamada
					//Comprueba que se haya realizado una llamada equivalente, para recoger su reasultado.
					for (var i=0; i<llamadas.length; i+=1) {
						if (pagina==llamadas[i][0] && metodo==llamadas[i][1] && params==llamadas[i][2]) {
							yaRespuesta = llamadas[i][4];
							llamada = i;
							break;
						}
					}
				}
//console.log('getAjaxOnevent('+objeto+','+metodo+','+pagina+','+seccion+','+tipo+','+params+','+evento+') '+(yaRespuesta==''?'':'yaRespuesta')); //
				//si ya se ha realizado la llamada, reutiliza la respuesta
				if (yaRespuesta!='') {
					ajaxReturn(yaRespuesta);
				}else{
					$.ajax({type: metodo ,
			  			url: pagina ,
		  				data: params ,
		  				success: ajaxReturn ,
		  				dataType: "html"
					});
				}			
			}
		};
				
		//muestra un panel Lightbox
		var abrirLightbox = function(x,pagina,seccion,evento) {
			if (!abierto) {
				getAjaxOnevent(x,'GET',pagina,seccion,LIGHTBOX,'',evento);
				$('#'+x+'_front').fadeIn('slow'); 
				$('#'+x+'_background').css('opacity', '0.6').fadeIn('"slow');
				abierto = true;
			}
		}
		//oculta un panel Lightbox
		var cerrarLightbox = function(x) {
			if (abierto) { 
				$('#'+x+'_front').fadeOut('normal');
				$('#'+x+'_background').fadeOut('normal');
				abierto = false; 
			}
		}		
		
		var parseWizardNormal = function(doc,recall) {
			var links = doc.find('a,form')
			if (!recall) {
				links = links.filter('[target^="#"]');
			}
			links.filter(':not([data-enhance="false"])').each(function() {
				var objId = bkwId + ++id;
				var llamada = '';
				var params = '';
				var metodo = 'GET';
				var texto = '';
				var tipo = 0;
				var evento = 0;
				if ($(this).prop('tagName')=='FORM') {
					metodo = ($(this).attr('method') || 'GET').toUpperCase()=='POST'?'POST':'GET';
					llamada = $(this).attr('action').split('#',2);
					params = formSerialize(this);
					texto = $(this).find('input[type="submit"]').attr('value');
				}else{
					llamada = $(this).attr('href').split('#',2);
					texto = $(this).text();
				}
				var pagina = llamada[0];
				var seccion = llamada[1] || '';

//				var idTmp = $(this).parent().attr('id') || '';
//				if (idTmp=='') {
//					$(this).parent().attr('id',objId);
//				}else{
//					objId = idTmp;
//				}
				
				if (recall) {
$(this).parent().css({'border':'1px solid green', 'heigth':'auto', 'min-height':'150px', 'width':'400px'});//////////////////
					evento = ONSHOW;
					tipo = WIZARD;
				}else{
					if ('#'+$(this).parent().attr('id')==$(this).attr('target')) {
$(this).parent().css({'border':'1px solid red', 'heigth':'auto', 'min-height':'150px', 'width':'400px'});//////////////////
						evento = ONSHOW;
						tipo = WIZARD;
					}else{
$(this).parent().css({'border':'1px solid blue', 'heigth':'auto%', 'min-height':'150px', 'width':'400px'});//////////////////
						evento = ONLOAD;
						tipo = NORMAL;
					}
				}
				
				//guardamos la llamada en el array de llamadas y recogemos las coordenadas de respuesta
				var coor = cargarLlamadas(pagina,metodo,params,seccion,evento,tipo,objId);
				$(this).wrap('<div id="'+objId+'" />');

				if (tipo==WIZARD) {
					//inyectamos botón
					if (recall) {
						$(this).after('<input id="'+objId+'_btn" type="button" value="'+texto+'" data-X="'+coor.X+'" data-Y="'+coor.Y+'" />');
						botones.push(objId);												
					}else{
						$(this).after('<input id="'+objId+'_btn" type="button" value="'+texto+'" />');
						$('#'+objId+'_btn').click(function(e){getAjaxOnevent(objId,metodo,pagina,seccion,tipo,params,evento);});
					}
				}

				if ($(this).prop('tagName')=='FORM') {
					$(this).find('input[type="submit"]').unwrap().remove();
				}else{
					$(this).remove();
				}
			});
			return doc;	
		}
		
		//WIZARD/NORMAL----------------------------------------------------------------------------ini
		//buscar "DIV"s con "A"s y "FORM"s cuyos "TARGET"s comienzan por "#" 
		parseWizardNormal($(document),false);
		//WIZARD/NORMAL----------------------------------------------------------------------------fin

		//LIGHTBOX---------------------------------------------------------------------------------ini
		//buscar "A"s cuyos "TARGET"s sean "_window" 
		$('a[target="_window"]').filter(':not([data-enhance="false"])').each(function(i){
			var el = $(this);
			var objId = bkwId + ++id;
			var llamada = $(el).attr('href').split('#',2);
			var pagina = llamada[0] || '';
			var seccion = llamada[1] || '';
			var evento = 0;
			var opciones = {
					show:  '', //click, mouseover 
					hide:  '', //click, clickanywhere, mouseout, none
					closeicon: '', //true, false
					cache: '' //onload, onshow, nocache
			};
			//recogemos configuración del Ligthbox del HTML
			var ops = {
					show:  $(el).attr('data-show'), 
					hide:  $(el).attr('data-hide'),
					closeicon: $(el).attr('data-closeicon'),
					cache: $(el).attr('data-cache')
			};
			//aplicamos la configuración del HTML sobre la de por defecto y la guardamos en "opciones"
			$.extend(opciones,GNE.wizardOptions,ops);
			//comprobamos configuración
			opciones.show = opciones.show.toLowerCase();
			if (opciones.show!='mouseover') {
				opciones.show = 'click';
			}	
			opciones.hide = opciones.hide.toLowerCase();
			if (opciones.hide!='click' && opciones.hide!='clickanywhere' && opciones.hide!='mouseout' && opciones.hide!='none') {
				opciones.hide = '';
			}
			if (opciones.hide=='') {
				opciones.hide = (opciones.show=='mouseover'?'mouseout':'click');
			}
			opciones.closeicon = opciones.closeicon.toLowerCase();
			if (opciones.closeicon!='true' && opciones.closeicon!='false') {
				opciones.closeicon = '';
			}
			if (opciones.closeicon=='') {
				opciones.closeicon = (opciones.show=='click'?'true':'false');
			}
			if (opciones.hide=='none') {
				opciones.closeicon = 'true';
			}
			opciones.cache = opciones.cache.toLowerCase();
			if (opciones.cache!='onload' && opciones.cache!='onshow' && opciones.cache!='nocache') {
				opciones.cache = '';
			}
			if (opciones.cache=='') {
				 opciones.cache = (opciones.show=='mouseover'?'onshow':'nocache');
			}
						
			$(el).attr('href','');
			$(el).attr('target','');
			$('body').append(
				'<div id="'+objId+'_front" class="lightbox_front">' +
				'<div id="'+objId+'_content" class="lightbox_content"><div class="lightbox_loader"></div></div></div>' +
				'<div id="'+objId+'_background" class="lightbox_background"></div>'
			);
				
			//icono cerrar
			if (opciones.closeicon=='true') {
					$('#'+objId+'_front').append(
						'<div class="lightbox_close"></div>' +
						'<span class="lightbox_tooltip">' + _('Presione Esc para cerrar') +
						'<span class="lightbox_arrow"></span></span>'
					);
					$('#'+objId+'_front').children('div.lightbox_close').hover(
						function() {
							$('#'+objId+'_front').children('span.lightbox_tooltip').show();
						},
						function() {
							$('#'+objId+'_front').children('span.lightbox_tooltip').hide();
						}
					);
					$('#'+objId+'_front').children('div.lightbox_close').click(function() {
						cerrarLightbox(objId);
					});
					$('body').bind('keyup.lightbox', function(event) {
						if (event.which == 27) { // ESC key
							cerrarLightbox(objId);
						}
					});
				}
				//caché
				switch (opciones.cache) {
					case 'onload': 	//Llama a la URL una sóla vez, al cargar la página
						evento = ONLOAD;
						break;
					case 'onshow': 	//Llama a la URL una sóla vez, en la primera petición
						evento = ONSHOW;
						break;
					case 'nocache':	//Llama a la URL en todas las peticiones
						evento = ONEVERY;
						break;				
				}
				//abrir
				$(el).bind(opciones.show+'.lightbox', function() {
					abrirLightbox(objId,pagina,seccion,evento);
					return false;
				});
				//cerrar
				switch (opciones.hide) {
					case 'click': 	//Click en Background
						$('#'+objId+'_background').bind('click.lightbox', function() {
							cerrarLightbox(objId);
						});
						break;
					case 'clickanywhere':  //Click en Background o en Front
						$('#'+objId+'_background').bind('click.lightbox', function() {
							cerrarLightbox(objId);
						});
						$('#'+objId+'_front').bind('click.lightbox', function() {
							cerrarLightbox(objId);
						});
						break;
					case 'mouseout': //Mouseout en Front
						$('#'+objId+'_background').bind('mouseover.lightbox', function() {
							if (front>0) {
								front = 0;
								cerrarLightbox(objId);
							}
						});
						$('#'+objId+'_front').bind('mouseout.lightbox', function() {
							front++;
						});
						break;
					case 'none':
						break;
				}
				cargarLlamadas(pagina,'GET','',seccion,evento,LIGHTBOX,objId);
			});
		//LIGHTBOX---------------------------------------------------------------------------------fin

//
//var traza = function() { 
//	for (var i=0; i<llamadas.length; i+=1) {
//		console.log (i+' pagina=('+llamadas[i][0]+') metodo=('+llamadas[i][1]+') params=('+llamadas[i][2]+') evento=('+llamadas[i][3]+') resultado=('+(llamadas[i][4]!=''?'SI':'NO')+')');
//		for (var j=5; j<llamadas[i].length; j+=1) {
//			console.log('     objeto=('+llamadas[i][j][0]+') seccion=('+llamadas[i][j][1]+') evento=('+llamadas[i][j][2]+') tipo=('+llamadas[i][j][3]+')');
//		}
//	}
//}
//traza();
//
		
		//llamar ajax de "onload"
		for (var i=0; i<llamadas.length; i+=1) {
			getAjaxOnload(i);
		}
	}
	,
	createAll: function(){
		GNE.ventanaNueva();
		GNE.avisoCapsLock();
		GNE.tooltip();
		GNE.modal();
		GNE.notasDesplegables();
		GNE.desplegable();
		GNE.acordeon();
		GNE.checkAll();
		GNE.imprimir();
		GNE.bubbleTable();
		GNE.barTable();
	}
	,
	setImgAccordion: function(){
		$('.accordion').filter(':not([data-enhance="false"])').each(function(){ 
			$(this).attr('data-imgMore','desplegar.gif');
			$(this).attr('data-imgLess','plegar.gif');
		});		
	}
	,
	wizardOptions: {show:'click', hide:'clickanywhere', closeicon:'false', cache:'onshow'}
	,
	setWizardOptions: function() {
	  if (typeof show != 'undefined') {GNE.wizardOptions.show = show;}
	  if (typeof hide != 'undefined') {GNE.wizardOptions.hide = hide;}
	  if (typeof closeicon != 'undefined') {GNE.wizardOptions.closeicon = closeicon;}
	  if (typeof cache != 'undefined') {GNE.wizardOptions.cache = cache;}
	}
	,
	formatNumber: function(value) {
		var percent = '%';
		var splitLength = value.length - percent.length;
		var divisor = 1;
		if (value.indexOf(percent, splitLength) !== -1) {
			value = value.substring(0, splitLength);
			divisor = 100;
		}
		return Number(value) / divisor;
	},
	bubbleTable: function() {
		var maxSize = 28;
		var minSize = 8;
		var minOpacity = 0.1;
		$('table[class="bubbles"]').filter(':not([data-enhance="false"])').each(function() {
			var table = $(this);
			var firstValue = GNE.formatNumber(table.find("> tbody > tr:first > td:last").text().trim());
			if (firstValue <= 0) {
				firstValue = 1;
			}
			var nElements = table.find("> tbody > tr").length;
			if (nElements == 1) {
				table.addClass('single');
				maxSize = maxSize * 2;
			}
			table.find('> tbody > tr').each(function(i) {
				var value = GNE.formatNumber($(this).find("> td:last").text().trim());
				var size = Math.ceil(maxSize * value / firstValue);
				if (size < minSize) {
					size = minSize;
				}
				var opacity = 1 - 0.9 * i / nElements;
				if (opacity < minOpacity) {
					opacity = minOpacity;
				}
				var bubble = $('<td class="bubble"><div style="opacity:' + opacity + ';width:' + size + 'px;height:' + size + 'px;"></div></td>');
				$(this).prepend(bubble);
			});
		});
	},
	barTable: function() {
		var maxSize = 100;
		$('table[class="bars"]').filter(':not([data-enhance="false"])').each(function() {
			var table = $(this);
			var nElements = table.find("> tbody > tr").length;
			if (nElements == 1) {
				table.addClass('single');
			}
			var nCols = table.find("> tbody > tr:first > *").length;
			table.find('> tbody > tr').each(function(i) {
				var width = maxSize * GNE.formatNumber($(this).find("> td:last").text().trim());
				if (nElements == 1) {
					width = 100;
				}
				var bar = $('<tr class="bar"><td colspan="' + nCols + '"><div style="width:' + width + '%;"></div></td></tr>');
				$(this).after(bar);
			});
		});
	}
};

$(document).ready(function() {
	var ifDocumentReady = function() {
		if (typeof documentReady != 'undefined') { documentReady(); }
	}

	var processJsfAjaxEvent = function(data) { 
		//FIXME - make generic part of architecture
	    if (data.status==='begin') {
			$("input.date").filter(':not([data-enhance="false"])').each(function(i){
				if($(this).datepicker) {
					$(this).datepicker('destroy');
				}
				$(this).removeData('calendar');
			});
	    }
	    if (data.status==='success') {
	    	$(document).trigger('domchange'); 
	    } 
	}
	if (window.jsf) { 
	    if (window.jsf.ajax) { 
	        jsf.ajax.addOnEvent(processJsfAjaxEvent);
	        //FIXME - make generic part of architecture
	        jsf.ajax.addOnError(function(){if (window.createCalendars) { createCalendars(); }});
	    }
	}

	$(document).ajaxSuccess(function() {
	    $(document).trigger('domchange'); 
	}); 
	$(document).on("domchange", function() {
		ifDocumentReady();
	}); 
    GNE.multiAjax();
	ifDocumentReady();
});

$(window).load(function() {
	if (typeof windowLoad != 'undefined') { windowLoad(); }
});

