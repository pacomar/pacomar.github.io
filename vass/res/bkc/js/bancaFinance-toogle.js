$( document ).ready(function() {
	
	//plegar/desplegar las filas de movimientos js-toogleSlide
	$('.js-toogleSlide').on('click', function() {
        $(this).next('.bkc-detalle').slideToggle();
    });
	
	$('.js-toogleSlide-tarjeta').on('click', function() {
        $('.bkc-detalle').slideToggle();
    });	
	
	$(".js-toogleUmbind").unbind(); 
	

	  $('.js-saberMas').on('click', function(){
	    $('.bkc-saberMas').slideDown();
	    $('.js-saberMas').hide();
	  });


}); 


