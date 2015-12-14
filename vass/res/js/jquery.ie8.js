var IE8 = {
	pijamaTablas: function(){
		$('table:not(.sortable) tbody tr:nth-child(even)').addClass('even');		
	}
}

$(document).ready(function(){
	IE8.pijamaTablas();
});