$(document).ready(function() {

	// //////////______________________________CONVERSACIÓN/MURO______________________________________________________
	if($(".conversation").length){
		$(".conversation .rowSummary").not(".readed").one("click", function(){
			$(this).addClass("readed");
		});
		
		$('.writeManagerBottom, .writeManagerTop').hide();
		$('.goManager').click(function(){
			if($(window).width() < 990){
				$('.writeManagerBottom').slideDown(400);
				var posWriteManagerBottom = $('.writeManagerBottom').offset().top;
				posWriteManagerBottom = (posWriteManagerBottom-50) + 'px';
				$("html,body").animate({scrollTop: posWriteManagerBottom});
			}else{
				$('.writeManagerTop').slideDown(400);
				$("html,body").animate({scrollTop: 0});
			}
			
		});
		
	}

	/* aparecen siempre desplegadas en conversatio_gestor.html */
	$(".tablePanel.manager").find(".rowSummary").off("click"); 

	$("textarea.queryManager").focus(function(){
		$(this).css("height","100px");
		$(".primaryPanel .tableManager button").removeClass("hidden");
	});

	$("textarea.queryManager").blur(function(){
		if(!$(this).val()){
			$(this).css("height","40px");
			$(".primaryPanel .tableManager button").addClass("hidden");
		}
	});

	// ////////////////////////////////////////////////////////////////
	// ////////////////////////////////////////////////////////////////

});