var ENG = {
	desplegable: function(){
		$('[data-toggle]').each(function(){
			if($(this).attr('data-open')){var o = Boolean($(this).attr('data-open'));} else {var o = false;}
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
	
	if (window.GNE) {
		GNE.createAll();
	}

	
});
