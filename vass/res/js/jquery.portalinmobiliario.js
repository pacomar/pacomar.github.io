var documentReady = function(){ 
	if (window.GRP) {
		GRP.mapaInmobiliario();
	}
	if (window.initSliders) {
		initSliders();
	}
}

var windowLoad = function(){ 
	if (window.createSliders) {
		createSliders();
	}
}
