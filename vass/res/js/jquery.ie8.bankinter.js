$(document).ready(function() {
	if ($.fn.corner) {
		$('.header .nav > ul.level1 > li.open, .header .nav > ul.level1 > li.current').corner('top 7px').css('top', '10px').css('padding-top', '7px').css('padding-bottom', '10px').css('line-height', '1em');
		$('.header .nav > ul.level1 > li').css('margin-top', '-5px');
		$('.header .nav > ul.level1 > li div.jquery-corner').css('right', '-8px');
	}
});
