function callRTIA(rtiaData, successFunction, errorFunction){
	$.ajax({
		url: "/gestion/services/rtia/getOfertas",
	    type: "POST",
	    data: rtiaData, 
	    dataType: "json",
	    contentType: "application/json; charset=utf-8",
	    success: function(data){
	    	successFunction(data);
	    },
	    error : function() {
	    	errorFunction();
	    }
	});
}