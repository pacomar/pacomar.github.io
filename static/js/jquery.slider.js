  //Slider Widget------------------------------------------ini
(function($){
	var SLD = function(element){
		//PARTE PRIVADA
		var el = $(element);
	    var obj = this;
		var objId = '';
		var diapoActual = -1;
		var reproduccion = Boolean(false);
		var totalDiapos = 0;
		var enProceso = Boolean(false);
		var enReproduccion = Boolean(false);
		var enPaginacion = Boolean(false);
		var enfocado = 0;
		var parentSinAlto = false;
		var parentAlto = 0;
		var galleryAlto = 0;
		var diapoAncho = 0;
	    var opciones = {
			auto: Boolean(false),
			efecto: 'slide',
			controles: Boolean(false),
			duracion: 1000,
			espera: 5000,
			modo: 'none',
			textos: Boolean(true),
			contador: Boolean(false),
			imgSelect: 'obsi_carrou_punto_negro.png',
			imgUnselect: 'obsi_carrou_punto_gris.png',
			imgControlPrev: 'cornestoneSlidePrev.png',
			imgControlNext: 'cornestoneSlideNext.png',
			imgControlPlay: 'cornestoneSlidePlay.png',
			imgControlPause: 'cornestoneSlideStop.png',
			imgBotonPlayPeq: 'obsi_carrou_pause_peq.png',
			imgBotonPausePeq: 'obsi_carrou_play_peq.png',
			imgPagePrev: 'obsi_carrou_prev.png',
			imgPageNext: 'obsi_carrou_next.png'
		};
		var cancel = Boolean(false);
		var created = false;
		var destroyHtml = '';

		//sliderListener____________________________________
		var events = ['onBeginShow','onEndShow','onBeginHide','onEndHide','onBeginPlay','onEndPlay','onBeginPause','onEndPause','onBeginCreate','onEndCreate','onBeginDestroy','onEndDestroy'];
		var listeners = [];
		function anyadeListener(listener,event) {
			if (!listeners[event]) {
				listeners[event] = [];
			}
			if ($.inArray(listener, listeners[event]) === -1) { 
				listeners[event].push(listener);
			}
		}
		function quitaListener(listener,event) {
			if (listeners[event]) {
				if ($.inArray(listener, listeners[event]) > -1) { 
					listeners[event].splice( $.inArray(listener, listeners[event]), 1);
				}
			}
		}
		function doEvent(eventType,slide) {
			var eListeners = listeners[eventType];
			if (eListeners) {
				var listener;
				var event = new Object();
				event.type = eventType;
				event.slide = slide;
				for (key in eListeners) {
					listener = eListeners[key];
					if (listener.doEvent) {
						listener.doEvent(event);
					}
				}
			}
		}
		//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

		var verControles = function() {
			var altoIni = $('#'+objId).outerHeight();
			var alto = ajustarAlto();
			//centrar horizontalmente botón Play si existe
			if ($('#'+objId+' a.fix_slider_control_play').length>0) {
				var izq = parseInt((parseInt($('#'+objId+' div.slider_controls').css('width')) - parseInt($('#'+objId+' a.fix_slider_control_play').css('width'))) / 2);
				$('#'+objId+' a.fix_slider_control_play').css('left',izq+'px');
			}
			//centrar verticalmente todos los botones y hacerlos visibles
			$('#'+objId+' div.slider_controls').find('a').each(function(){
				var top = parseInt((alto - $('#'+objId+' div.slider_bar').outerHeight() - $(this).outerHeight()) / 2);
				$(this).find('img').removeClass('hidden'); //IE 8
				$(this).removeClass('hidden');
				if (alto==altoIni) {
					$(this).css('top',top+'px');
				}else{
					$(this).animate({top:top+'px'}, opciones.duracion/2);
				}
			});
		}
		var getImagen = function(imagen) {
			return imagen;
		}
		var ocultarControles = function() {
			//ocultar todos los botones
			$('#'+objId+' div.slider_controls').find('a').each(function(){
				$(this).addClass('hidden');
				$(this).find('img').addClass('hidden'); //IE 8
			});
		}
		var ajustarAlto = function() {
			//Ajustar alto del Slider en caso de no tener alto definido
			if (parentSinAlto) {
				//obtenemos el mayor de los altos de las imagenes 
				var oculto = false;
				parentAlto = 0; 
				var inicio = $(el).hasClass('none');//en el inicio el objeto está oculto, hay que hacerlo visible un momento para calcular sus medidas
				if (inicio) {$(el).removeClass('none');}
				$(el).find('li.slider').each(function(){	
					oculto = $(this).hasClass('fix_slider_unselect') //si la imagen está oculta sus dimensiones son 0
					if (oculto) {$(this).removeClass('fix_slider_unselect').addClass('fix_slider_select');} //la hacemos visible
					if (parseInt($(this).find('img').css('height')) > parentAlto) { parentAlto=parseInt($(this).find('img').css('height')); }
					if (oculto) {$(this).removeClass('fix_slider_select').addClass('fix_slider_unselect');}  //la ocultamos
				});
				if (inicio) {$(el).addClass('none');}
				if (parentAlto>0) {
					var altoAux = 0;					
					if (opciones.modo=='gallery') {
						if (galleryAlto==0) {
							diapoAncho =  parseInt($(el).parent().parent().find('div.fix_slider_gallery > ul > li').outerWidth(true));
							var margenCarrusel = getMargenCarrusel();
							galleryAlto = parseInt(diapoAncho * parentAlto / getAnchoPagina()) + (4*margenCarrusel);
							$(el).parent().parent().find('div.slider_bar').css('bottom',galleryAlto);
							$(el).parent().parent().find('div.slider_gallery').css({'height':galleryAlto,'width':getAnchoCarrusel(margenCarrusel)+$(window).width()});
							$(el).parent().parent().find('div.slider_gallery_previous').css('height',galleryAlto);
							$(el).parent().parent().find('div.slider_gallery_next').css('height',galleryAlto);
							var altoBoton = parseInt($(el).parent().parent().find('div.slider_gallery_previous img').css('height'));
							altoBoton = (galleryAlto-altoBoton)/2;
							$(el).parent().parent().find('div.slider_gallery_previous img').css('top', altoBoton);
							$(el).parent().parent().find('div.slider_gallery_next img').css('top', altoBoton);
						}
						altoAux = parentAlto + galleryAlto;
					}else{
						altoAux = parentAlto;
					}
					$(el).parent().parent().parent().animate({height:altoAux+'px'}, 0);
					
				}else{
					//es texto, no tiene imágenes
					$(el).parent().parent().parent().addClass('slider_text fix_slider_text');
				}
			}else{
				parentAlto = $('#'+objId).outerHeight();
				if (opciones.modo=='gallery') {
					var altoGallery = parentAlto/5;
					altoAux -= altoGallery;
					$('#'+objId).css('height',altoAux);
					$(el).parent().parent().find('.slider_bar').css('bottom',altoGallery);
					$(el).parent().parent().find('.slider_gallery').css('height',altoGallery);
				}
			}
			controlPagina(getLimitePaginar());
			return parentAlto;
		}
		function diapoAnterior(e){
			verDiapo(e,diapoActual-1);
		}
		function diapoSiguiente(e){
			verDiapo(e,diapoActual+1);
		}
  		function verDiapo(e,diapo){
 			if(e){
				e.preventDefault();					
				e.stopPropagation();
				if(enProceso){
					$(e.target).parent().blur();
				}
				if (arguments.length==1) {
					var href = $(e.target).attr('href') || $(e.target).parent().attr('href');
					diapo = parseInt(href.split('#diapo')[1]) ;
				}
  			}
  			if(!enProceso && diapo!=diapoActual){
				enProceso = Boolean(true);
				
				//validar número de Diapo
				if (diapo<0) {
					diapo = totalDiapos - 1;
				}else if(diapo>=totalDiapos){
					diapo = 0;
				}
				//sliderListener____________________________________
				doEvent('onBeginShow',diapo+1);
				doEvent('onBeginHide',diapoActual+1);
				//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
				//obtener tamaño del contenedor
				var menor = 0;
				var mayor = 0;
				var ancho = parseInt($('#'+objId+' div').css('width'));
				var actual = diapoActual;
				
				if (opciones.efecto=='slide') {
					//recolocar la diapo actual en el contenedor (por si este ha cambiado de tamaño))
					if (diapoActual>0) { 
						$(el).css({'left':-(diapoActual*ancho)})
					}
  
				}else if (opciones.efecto=='fade') {
					$(el).find('> li').each(function(i){
						if (i!=diapoActual) {
							$(this).css({opacity:0});
						}
					});					
 
				}
				//modificar los estilos de la lista para que se muestre horizontalmente
				$(el).removeClass('fix_slider_stop').addClass('fix_slider_play');
				//obtener nuevo ancho del contenedor
				ancho = parseInt($('#'+objId+' div' ).css('width'));
				//calculamos rango de imagenes en el desplazamiento
				if (diapo>diapoActual) {
					menor = diapoActual;
					mayor = diapo;
				}else{
					menor = diapo;
					mayor = diapoActual;
				}
				//Asignar nuevo tamaño y posiciones a los LI
				$(el).find('li.slider').each(function(i){
					if (i<(mayor+1) && i>(menor-1)) {
						$(this).removeClass('fix_slider_unselect').addClass('fix_slider_select');
					}
					if (opciones.efecto=='slide') {
						$(this).css({'left':(i)*ancho,'width':ancho});
					}else{
						$(this).css({'left':0,'width':ancho});
					}
				});

				ajustarAlto();

				//cambiar de diapositiva
				if (opciones.efecto!='fade' && opciones.efecto!='slide') {
					opciones.duracion = 0;					
				}
				if(opciones.textos) {
					$(el).parent().parent().find('span.slider_text').animate({opacity:0}, opciones.duracion/2, function(){finAnimarTexto(diapo);});
				}else{
					$(el).find('figcaption').remove();
				}
				switch(opciones.efecto){
					case 'fade':
						if (diapoActual>=0) { 
							$(el).find('> li').eq(diapoActual).css({'z-index':0}).animate({opacity:0},opciones.duracion);
						}else{
							diapoActual = diapo;
						}
						actual = diapoActual;
						$(el).find('> li').eq(diapo).css({'z-index':1}).animate({opacity:1},opciones.duracion,function(){finAnimarSlider(diapo,actual);});							
						break;
					case 'slide':
						var desplazamiento = -(diapo*ancho);
						actual = diapoActual;
						$(el).animate({left:desplazamiento+'px'}, opciones.duracion, function(){finAnimarSlider(diapo,actual);});
						break;
					default: //'none'
						$(el).find('.slide'+diapoActual).css({'z-index':0, 'opacity':0});
						$(el).find('.slide'+diapo).css({'z-index':1, 'opacity':1});
						finAnimarSlider(diapo,diapoActual);
						break;
				}		

				//actualizar controles
  				if (diapoActual>=0) {
  					$(el).parent().parent().find('ul.slider_circles > li img:eq('+diapoActual+')').attr('src',getImagen(opciones.imgUnselect));
					if (opciones.modo=='tabs') {
						$(el).parent().parent().find('li.slider_tabs:eq('+diapoActual+')').removeClass('slider_tabs_select fix_slider_tabs_select');
						$(el).parent().parent().find('a.slider_tabs:eq('+diapoActual+')').removeClass('slider_tabs_select fix_slider_tabs_select');
					}
  				}
							
				if (opciones.modo=='tabs') {
					$(el).parent().parent().find('li.slider_tabs:eq('+diapo+')').addClass('slider_tabs_select fix_slider_tabs_select');
					$(el).parent().parent().find('a.slider_tabs:eq('+diapo+')').addClass('slider_tabs_select fix_slider_tabs_select');
				}else if(opciones.modo=='gallery') {
					if (opciones.contador) {
						$(el).parent().parent().find('span.slider_counter').html((diapo+1)+'&nbsp;/&nbsp;'+totalDiapos);
					}
					
					if (diapoActual>=0) {
						$(el).parent().parent().find('div.slider_gallery > ul > li a').eq(diapoActual).removeClass('slider_gallery_select');
					}

					repaginar(diapo);
					$(el).parent().parent().find('div.slider_gallery a').eq(diapo).addClass('slider_gallery_select');
				}else{
					$(el).parent().parent().find('ul.slider_circles > li img:eq('+diapo+')').attr('src',getImagen(opciones.imgSelect));			
				}
				diapoActual = diapo;
			}
  		}
		function onClickDiapo(e,diapo){
			if(e){
				e.preventDefault();
				e.stopPropagation();
			}
			verDiapo(e,diapo)
		}
		function onFocusDiapo(e,diapo){
			if(e){ 
				e.preventDefault();					
				e.stopPropagation();
				if(enPaginacion){
					if(enfocado!=diapo){
						$(el).parent().find('a[href="#diapo'+enfocado+'"]').focus();
					}
				}
			}
			if(enfocado!=diapo){ 
				repaginar(diapo);
			}
		}
		

		function getAnchoPagina() {
			return parseInt($(el).parent().parent().outerWidth(true));
		}
		function getNumDiaposPagina(anchoPagina) {
			if (typeof anchoPagina == "undefined") {
				anchoPagina = getAnchoPagina();
			}
			return anchoPagina/diapoAncho;
		}
		function getMargenCarrusel() {
			var margen = parseInt($(el).parent().parent().find('div.slider_gallery > ul > li').eq(0).css('padding-left'));
			return isNaN(margen)?0:margen;
		}
		function getAnchoCarrusel(margenCarrusel) {
			if (typeof margenCarrusel == "undefined") {
				margenCarrusel = getMargenCarrusel();
			}
			return (totalDiapos * diapoAncho) + margenCarrusel;
		}
		function getLimitePaginar(anchoPagina,margenCarrusel) {
			if (typeof anchoPagina == "undefined") {
				anchoPagina = getAnchoPagina();
			}
			return getAnchoCarrusel(margenCarrusel) - anchoPagina;
		}
		
		function paginaSiguiente(e){
			if (e) {
				e.preventDefault();
				e.stopPropagation();
			}			
			if (!enPaginacion) {
				var posicion = parseInt($(el).parent().parent().find('div.slider_gallery').css('left'));
				var anchoPagina = getAnchoPagina();
				var limitePaginar = getLimitePaginar(anchoPagina);
				if (posicion>-limitePaginar) {
					posicion -= parseInt(getNumDiaposPagina(anchoPagina)*diapoAncho);
					if (posicion<-limitePaginar) {
						posicion = -limitePaginar;
					}
					paginar(posicion);
				}
			}
		}
		function paginaAnterior(e){
			if (e) {
				e.preventDefault();
				e.stopPropagation();
			}
			if (!enPaginacion) {
				var posicion = parseInt($(el).parent().parent().find('div.slider_gallery').css('left'));
				if (posicion<0) {
					posicion += parseInt(getNumDiaposPagina()*diapoAncho);
					if (posicion>0) {
						posicion = 0;
					}
					paginar(posicion);
				}
			}
		}
		function paginar(posicion){
			enPaginacion = Boolean(true);
			$(el).parent().parent().find('div.slider_gallery').animate({
				left: posicion+'px'
			},opciones.duracion,function(){finPaginar();});
		}
		function repaginar(diapo){
			if (!enPaginacion) {
				var anchoPagina = getAnchoPagina();
				if (totalDiapos>getNumDiaposPagina(anchoPagina)) {
					enPaginacion = Boolean(true);
					var margenCarrusel = getMargenCarrusel();
					var limitePaginar = getLimitePaginar(anchoPagina,margenCarrusel);
					var posX = parseInt((diapo * diapoAncho) - (anchoPagina/2) + (diapoAncho/2) + margenCarrusel);
					if (posX<0) {
						posX = 0;
					}else{
						if (posX>limitePaginar) {
							posX = limitePaginar;
						}
					}
					controlPagina(limitePaginar);
					$(el).parent().parent().find('div.slider_gallery').animate({
						left: -posX+'px'
					},opciones.duracion,function(){finRepaginar(diapo,limitePaginar);});				
				}
			}	
		}
		function controlBotonPagina(boton,limite){
			var btn = $(el).parent().parent().find('div.slider_gallery_'+boton);
			if (parseInt($(el).parent().parent().find('div.slider_gallery').css('left'))==-limite) {
				btn.removeClass('slider_gallery_hover').addClass('slider_gallery_disabled');
				btn.find('a').css('cursor','default');
			}else{
				btn.removeClass('slider_gallery_disabled');
				btn.find('a').css('cursor','pointer');
			}
		}
		function overBotonPagina(boton){
			var btn = $(el).parent().parent().find('div.slider_gallery_'+boton);
			if (!btn.hasClass('slider_gallery_disabled')) {
				btn.addClass('slider_gallery_hover');
			}
		}
		function outBotonPagina(boton){
			$(el).parent().parent().find('div.slider_gallery_'+boton).removeClass('slider_gallery_hover');
		}
		function controlPagina(limitePaginar){
			//ajusta el carrusel en caso de cambio de las proporcoiones de su contenedor
			if (parseInt($(el).parent().parent().find('div.slider_gallery').css('left'))<-limitePaginar) {
				$(el).parent().parent().find('div.slider_gallery').animate({
					left: -limitePaginar+'px'
				},opciones.duracion,function(){finRepaginar(diapoActual,limitePaginar);});
			}
			controlBotonPagina('previous',0);
			controlBotonPagina('next',limitePaginar);
		}
		function finPaginar(){
			enPaginacion = Boolean(false);
			controlPagina(getLimitePaginar());	
		}
		function finRepaginar(diapo,limitePaginar){
			enPaginacion = Boolean(false);
			enfocado = diapo;
			if(!$(el).parent().parent().find('a[href="#diapo'+enfocado+'"]').is(':focus')){
				$(el).parent().parent().find('a[href="#diapo'+enfocado+'"]').focus();
			}
			controlPagina(limitePaginar);
		}
		function finAnimarTexto(actual){/* Jose: cambio text(... por html(... para que coja etiquetas dentro del figcaption */
			$(el).parent().parent().find('span.slider_text').html($(el).find('figcaption.slider').eq(actual).html()).animate({opacity:1}, opciones.duracion/2);
		}
		function finAnimarSlider(actual,anterior){
			//restaurar estilos de la lista para que se muestre verticalmente
			$(el).removeClass('fix_slider_play').addClass('fix_slider_stop');
			$(el).find('> li:not(:eq('+actual+'))').removeClass('fix_slider_select').addClass('fix_slider_unselect');
			$(el).find('> li').css('width','').addClass('fix_slider_stop');

			enProceso = Boolean(false);
			if (enReproduccion) {
				cuentaAtras(Boolean(true));
			}
			//sliderListener____________________________________
			doEvent('onEndHide', anterior+1);
			doEvent('onEndShow', actual+1);
			//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
		}
		function cuentaAtras(reproduce){
			reproduccion = clearTimeout(reproduccion);
			if (reproduce) {
				reproduccion = setTimeout(diapoSiguiente,opciones.espera);
			} 
		}
		function reproducir(e){
			if(e){
				e.preventDefault();
				e.stopPropagation();
			}
			reproducirPausar(!enReproduccion);
		}
		function reproducirPausar(rep){
			var alt = rep?'Pausar':'Reproducir';
			var img = '';
			var obj = '#'+objId+' a.';
			if (opciones.modo=='tabs'){
				img = getImagen(rep?opciones.imgBotonPlayPeq:opciones.imgBotonPausePeq);
				obj += 'slider_tabs_buttons';
			}else{
				img = getImagen(rep?opciones.imgControlPause:opciones.imgControlPlay);
				obj += 'fix_slider_control_play';
			}
			if($(".fix_slider_control_play img").length > 0){
				if(img.indexOf("play") > -1){
					$(".fix_slider_control_play img").attr("src",$(".fix_slider_control_play img").attr("src").replace(opciones.imgControlPause,opciones.imgControlPlay));
				}else{
					$(".fix_slider_control_play img").attr("src",$(".fix_slider_control_play img").attr("src").replace(opciones.imgControlPlay,opciones.imgControlPause));
				}
			}
			$(obj).attr('href','#'+alt.toLowerCase());
			$(obj+' img').attr({'src':img,'alt':_(alt)});			
			cuentaAtras(Boolean(rep));
			enReproduccion = Boolean(rep);
			//sliderListener____________________________________
			doEvent('onEnd'+(rep?'Pause':'Play'), diapoActual+1);
			doEvent('onBegin'+(rep?'Play':'Pause'), diapoActual+1);
			//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
		}
		//PARTE PÚBLICA
		this.id = function(){
			return objId;
		}
        this.sliders = function(){
			return totalDiapos;
		}
		this.currentSlide = function(){
			return diapoActual+1;
		}
		this.isPlaying = function(){
			return enReproduccion;
		}
		this.cancelCurrentEvent = function(){
			if(arguments.length>0){
				cancel = arguments[0];
				return obj;
			}else{
				return cancel;
			}
		}
		this.init = function(id){
			$(el).addClass('none');
			objId = id;

			//recogemos configuración del Slider del HTML
			var ops = {
				auto: GetBoolean($(el).attr('data-auto')), 
				efecto: $(el).attr('data-effect'),
				controles: GetBoolean($(el).attr('data-controls')),
				duracion: $(el).attr('data-duration'),
				espera: $(el).attr('data-wait'),
				modo: $(el).attr('data-mode'),
				textos: GetBoolean($(el).attr('data-figcaption')),
				contador: GetBoolean($(el).attr('data-counter')),
				imgSelect: $(el).attr('data-imgSelect'),
				imgUnselect: $(el).attr('data-imgUnselect'),
				imgControlPrev: $(el).attr('data-imgControlPrev'),
				imgControlNext: $(el).attr('data-imgControlNext'),
				imgControlPlay: $(el).attr('data-imgControlPlay'),
				imgControlPause: $(el).attr('data-imgControlPause'),
				imgBotonPlayPeq: $(el).attr('data-imgBotonPlayPeq'),
				imgBotonPausePeq: $(el).attr('data-imgBotonPausePeq'),
				titleTabs: $(el).attr('data-titleTabs')
			};
			$.extend(opciones,ops);
			
			return obj;
		}
		this.setOptions = function(ops) {
			$.extend(opciones,ops);
			return obj;;
		}
		this.create = function(){
			if (!created) {
				created = true;
				destroyHtml = $(el).outerHTML();
				//sliderListener____________________________________
				doEvent('onBeginCreate', 1);
				//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
				//inyectamos capas y estilos
				switch(opciones.modo){
				case 'tabs':
					$(el).wrap('<div class="slidertabs fix_slidertabs" />');
					break;
				default:	
					$(el).wrap('<div class="slider fix_slider" />');
					break;
				}
				$(el).parent().wrap('<div id="'+objId+'" class="slider_parent fix_slider_parent" />');
				$(el).find('img').addClass('slider');
				
				totalDiapos = $(el).children('li').length;
	
				switch(opciones.modo){
				case 'tabs':
				//compruebo si hay valores fijados, sino los fijo
					(opciones.controles)?opciones.controles = Boolean(true):opciones.controles = Boolean(false);
					(opciones.textos)?opciones.textos = Boolean(true):opciones.textos = Boolean(false);
					(opciones.contador)?opciones.contador = Boolean(true):opciones.contador = Boolean(false);
					(opciones.titleTabs)?opciones.titleTabs:opciones.titleTabs='';

					var altoTab = 0;
					var altoBoton = 0;
					if(opciones.auto){
						altoBoton = 100/((2*totalDiapos)+1);
						altoTab = 2 * altoBoton;
					}else{
						altoTab = 100/totalDiapos;					
					}

					$(el).parent().parent().append('<div class="slider_tabs fix_slider_tabs">'+opciones.titleTabs+'<ul class="slider_tabs fix_slider_tabs" /></div>');
					$(el).find('> li').each(function(i){
						var select = i==0?'select':'unselect';
						$(this).addClass('slider fix_slider fix_slider_'+select);
						$(el).parent().parent().find('ul.slider_tabs').append('<li class="slider_tabs fix_slider_tabs" style="height:'+altoTab+'%;"><a class="slider_tabs fix_slider_tabs" href="#diapo'+i+'">'+($(this).find('figcaption').html())+'</a></li>');
						$(el).parent().parent().find('a.slider_tabs[href="#diapo'+i+'"]').bind('mouseover focus',function(e){verDiapo(e,i);});
						$(el).parent().parent().find('li.slider_tabs:eq('+i+')').bind('mouseover focus',function(e){verDiapo(e,i);});
					});
					if(opciones.auto){
						$(el).parent().parent().find('ul.slider_tabs').append('<li class="slider_tabs_buttons fix_slider_tabs_buttons" style="height:'+altoBoton+'%;"><a class="slider_tabs_buttons fix_slider_tabs_buttons" href="#pausar"><img class="slider_tabs_button_play" src="'+getImagen(opciones.imgBotonPlayPeq)+'" alt="'+_('Pausar')+'" /></a></li>');
						$(el).parent().parent().find('ul.slider_tabs a.slider_tabs_buttons').click(function(e){reproducir(e);});
						enReproduccion = Boolean(true);
						reproducirPausar(enReproduccion);
					}
					break;
	
				case 'gallery':
					opciones.auto = Boolean(false);
					$(el).parent().parent().parent().css('overflow','hidden');
					$(el).find('figcaption').addClass('slider fix_slider');
					if (opciones.textos || opciones.contador) {
						$(el).parent().parent().append('<div class="slider_bar fix_slider_bar" />');
						if (opciones.contador) {
							$(el).parent().parent().find('div.slider_bar').append('<span class="slider_counter fix_slider_counter">1&nbsp;/&nbsp;'+totalDiapos+'</span>');	
						}
						if (opciones.textos) {
							$(el).parent().parent().find('div.slider_bar').append('<span class="slider_text fix_slider_text" />');
						}
					}
					var diapos = '';
					$(el).find('> li').each(function(i){
						$(this).addClass('slider fix_slider fix_slider_'+(i==0?'select':'unselect'));
						diapos += '<li><a href="#diapo'+i+'"><img src="'+$(this).find('img').attr('src')+'" /></a></li>';
					});
					$(el).parent().parent().append('<div class="slider_gallery fix_slider_gallery"><ul>'+ diapos +'</ul></div>');
					$(el).parent().parent().find('div.slider_gallery > ul > li').each(function(i){
						$(this).find('img').click(function(e){onClickDiapo(e,i);});
						$(this).find('a').focus(function(e){onFocusDiapo(e,i);});
					});					
					//botones paginación
					$(el).parent().parent().find('div.slider_gallery').parent().append('<div class="slider_gallery_previous fix_slider_gallery_previous"><a href="#paginaAnterior"><img src="'+getImagen(opciones.imgPagePrev)+'" alt="'+_('Página anterior')+'" /></a></div>');
					$(el).parent().parent().find('div.slider_gallery').parent().append('<div class="slider_gallery_next fix_slider_gallery_next"><a href="#paginaSiguiente"><img src="'+getImagen(opciones.imgPageNext)+'" alt="'+_('Página siguiente')+'" /></a></div>');
					$(el).parent().parent().find('div.slider_gallery_previous').click(function(e){paginaAnterior(e);}).mouseover(function(e){overBotonPagina('previous');}).mouseout(function(e){outBotonPagina('previous');});
					$(el).parent().parent().find('div.slider_gallery_next').click(function(e){paginaSiguiente(e);}).mouseover(function(e){overBotonPagina('next')}).mouseout(function(e){outBotonPagina('next');});
					break;
	
				default:
					opciones.modo = 'none';
					opciones.contador = Boolean(false);
				
					$(el).find('figcaption').addClass('slider fix_slider');
					$(el).parent().parent().append('<div class="slider_bar fix_slider_bar"><ul class="slider_circles fix_slider_circles" /></div>');
					if (opciones.textos) {
						$(el).parent().parent().find('div.slider_bar').prepend('<span class="slider_text fix_slider_text" />');
					}
					$(el).find('> li').each(function(i){
						var select = i==0?'select':'unselect';
						var img = getImagen(i==0?opciones.imgSelect:opciones.imgUnselect);
						$(this).addClass('slider fix_slider fix_slider_'+select);
						$(el).parent().parent().find('ul.slider_circles').append('<li class="slider_circles fix_slider_circles"><a href="#diapo'+i+'"><img src="'+img+'" alt="'+_('Diapositiva')+' '+(i+1)+'" /></a></li>');
					});
					$(el).parent().parent().find('ul.slider_circles > li a').each(function(i){
						$(this).click(function(e){verDiapo(e,i);});
					});
					break;
				}
				
				//inyectar capa principal de controles
				if (opciones.controles) {
					$(el).parent().append('<div class="slider_controls fix_slider_controls"></div>');				
					$(el).parent().mouseover(function(){verControles();});
					$(el).parent().mouseout(function(){ocultarControles();});
					//inyectar controles de avance y retroceso de diapositiva
					$(el).parent().find('div.slider_controls').append('<a href="#anterior" class="slider_control_prev fix_slider_control_prev hidden"><img class="hidden" src="'+getImagen(opciones.imgControlPrev)+'" alt="'+_('Anterior')+'" /></a>');
					$(el).parent().find('div.slider_controls').append('<a href="#siguiente" class="slider_control_next fix_slider_control_next hidden"><img class="hidden" src="'+getImagen(opciones.imgControlNext)+'" alt="'+_('Siguiente')+'" /></a>');
					$(el).parent().find('a.slider_control_prev').click(function(e){diapoAnterior(e);});
					$(el).parent().find('a.slider_control_next').click(function(e){diapoSiguiente(e);});
					//inyectar control de reproducir/pausar
					if (opciones.auto) {
						$(el).parent().find('div.slider_controls').append('<a href="#pausar" class="slider_control_play fix_slider_control_play hidden"><img class="hidden" src="'+getImagen(opciones.imgControlPause)+'" alt="'+_('Pausar')+'" /></a>');
						$(el).parent().find('a.slider_control_play').click(function(e){reproducir(e);});
	
						enReproduccion = Boolean(true);
						reproducirPausar(enReproduccion);
					}else{
						opciones.espera = 0;
					}
				}
				//asignar id al contenedor si no tiene
				var p = $(el).parent().parent().parent()
				var id = p.attr('id') || '';
				if (id=='') {
					id = objId + '_cont';
					p.attr('id',id)
				}
				p = document.getElementById(id);
				var alto = parseInt(p.style.height||'0');
				//guardamos en una variable en caso de no tener alto definido el contenedor padre  
				if (alto<=0) { //if (parseInt($(el).parent().parent().parent().css('height'))<100) {
					parentSinAlto = true;
				}else{
					parentAlto = parseInt($(el).parent().parent().parent().innerHeight());
				}
				
	
				if (opciones.efecto=='fade'){
					$(el).find('> li').each(function(i){
						if (i>0) { $(this).css({opacity:0}); }
					});
				}
	
				if(!opciones.textos){
					$(el).find('figcaption').remove();
				}
				verDiapo(false,0);
				//sliderListener____________________________________
				doEvent('onEndCreate', 1);
				doEvent('onBeginShow', 1);
				doEvent('onEndShow', 1);
				//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
			}
			$(el).removeClass('none');
			return obj;
		}
		this.destroy = function (){
			if (created) {
				//sliderListener____________________________________
				doEvent('onBeginDestroy',diapoActual+1);
				//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
				$('#'+objId).html(destroyHtml);
				$('#'+objId+' ul').first().unwrap('<div/>');
				destroyHtml = '';
				created = false;
				//sliderListener____________________________________
				doEvent('onEndDestroy',diapoActual+1);
				//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
			}
		}
		this.previous = function(e) {
			if(!cancel){
				diapoAnterior(e);
			}
			return obj;
		}
		this.next = function(e) {
			if(!cancel){
				diapoSiguiente(e);
			}
			return obj;
		}
		this.show = function(slide) {
			if(!cancel){
				verDiapo(false,slide-1);
			}
			return obj;
		}
		this.pause = function() {
			if(!cancel){
				if(enReproduccion){
					reproducirPausar(Boolean(false));
				}
			}
			return obj;
		}
		this.play = function() {
			if(!cancel){
				if(!enReproduccion){
					reproducirPausar(Boolean(true));
				}
			}
			return obj;
		}
		//sliderListener____________________________________
		this.addListener = function(listener,event) {
			event = event || 'NONE';
			if (event === 'NONE') {
				for (var i = 0; i < events.length; i += 1) {
					anyadeListener(listener,events[i]);
				}	
			}else{
				anyadeListener(listener,event);
			}	
			return obj;
		}	
		this.removeListener = function(listener,event) {
			event = event || 'NONE';
			if (event === 'NONE') {
				for (var i = 0; i < events.length; i += 1) {
					quitaListener(listener,events[i]);
				}
			}else{
				quitaListener(listener,event);
			}
			return obj;
		}
		//sliderListener¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	};
	$.fn.slider = function(id){
		return this.each(function(){
			var element = $(this);   
			if (element.data('slider')){
				return;
			}else{
				var slider = new SLD(this);
				slider.init(id);
				element.data('slider', slider);
			}
		});
	};
})(jQuery);

var initSliders = function(id){ 
	id = id || 'bk_slider_';
	$('.slider').filter(':not([data-enhance="false"])').each(function(i){ 
		$(this).slider(id+(i+1));
	});
}

var setOptionsSliders = function(opciones){ 
	$('.slider').filter(':not([data-enhance="false"])').each(function(){ 
		if ($(this).data('slider') != null) { 
			$(this).data('slider').setOptions(opciones); 
		}
	});
}

var createSliders = function(){ 
	$('.slider').filter(':not([data-enhance="false"])').each(function(){ 
		if ($(this).data('slider') != null) { $(this).data('slider').create(); }
	});
	if($("figcaption").length > 0){
		$("figcaption").show('0');
	}
}
//Slider Widget------------------------------------------end
