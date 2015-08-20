var personaje = [0,0];
var enemigo = [Math.floor((Math.random() * 9+1)),Math.floor((Math.random() * 9)+1)];
var puntos = 0;

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
} 

function comprueba_enemigos () {
	if (personaje.equals(enemigo)) {
		puntos = puntos + 1;
		$("#puntos").html(puntos);
		$("div.fila-"+enemigo[0]+".columna-"+enemigo[1]).html("");
		enemigo = [Math.floor((Math.random() * 9)),Math.floor((Math.random() * 9))];
		while(personaje.equals(enemigo)){
			enemigo = [Math.floor((Math.random() * 9)),Math.floor((Math.random() * 9))];
		}
		$("div.fila-"+enemigo[0]+".columna-"+enemigo[1]).append("<div id='enemigo'></div>");
	};
}

$(document).ready(function() {
	$("div.fila-"+enemigo[0]+".columna-"+enemigo[1]).append("<div id='enemigo'></div>");
	$("#boton_arriba").click(function(event) {
		if (personaje[0]!=0){
			var div_personaje = $("#personaje");
			var antigua_casilla = div_personaje.parent();
			antigua_casilla.html("");
			personaje[0]=personaje[0]-1;
			comprueba_enemigos ();
			var nueva_casilla = $("div.fila-"+personaje[0]+".columna-"+personaje[1]);
			nueva_casilla.append("<div id='personaje'></div>");
		};
	});
	$("#boton_abajo").click(function(event) {
		if (personaje[0]!=8){
			var div_personaje = $("#personaje");
			var antigua_casilla = div_personaje.parent();
			antigua_casilla.html("");
			personaje[0] = personaje[0]+1;
			comprueba_enemigos ();
			var nueva_casilla = $("div.fila-"+personaje[0]+".columna-"+personaje[1]);
			nueva_casilla.append("<div id='personaje'></div>");
		};
	});
	$("#boton_izquierda").click(function(event) {
		if (personaje[1]!=0){
			var div_personaje = $("#personaje");
			var antigua_casilla = div_personaje.parent();
			antigua_casilla.html("");
			personaje[1] = personaje[1]-1;
			comprueba_enemigos ();
			var nueva_casilla = $("div.fila-"+personaje[0]+".columna-"+personaje[1]);
			nueva_casilla.append("<div id='personaje'></div>");
		};
	});
	$("#boton_derecha").click(function(event) {
		if (personaje[1]!=8){
			var div_personaje = $("#personaje");
			var antigua_casilla = div_personaje.parent();
			antigua_casilla.html("");
			personaje[1] = personaje[1]+1;
			comprueba_enemigos ();
			var nueva_casilla = $("div.fila-"+personaje[0]+".columna-"+personaje[1]);
			nueva_casilla.append("<div id='personaje'></div>");
		};
	});
});

$(document).keydown(function(e){
	if (e.keyCode == 38) {
		if (personaje[0]!=0){
			var div_personaje = $("#personaje");
			var antigua_casilla = div_personaje.parent();
			antigua_casilla.html("");
			personaje[0]=personaje[0]-1;
			comprueba_enemigos ();
			var nueva_casilla = $("div.fila-"+personaje[0]+".columna-"+personaje[1]);
			nueva_casilla.append("<div id='personaje'></div>");
		};
	}else if (e.keyCode == 40) {
		if (personaje[0]!=8){
			var div_personaje = $("#personaje");
			var antigua_casilla = div_personaje.parent();
			antigua_casilla.html("");
			personaje[0] = personaje[0]+1;
			comprueba_enemigos ();
			var nueva_casilla = $("div.fila-"+personaje[0]+".columna-"+personaje[1]);
			nueva_casilla.append("<div id='personaje'></div>");
		};
	}else if (e.keyCode == 37) {
		if (personaje[1]!=0){
			var div_personaje = $("#personaje");
			var antigua_casilla = div_personaje.parent();
			antigua_casilla.html("");
			personaje[1] = personaje[1]-1;
			comprueba_enemigos ();
			var nueva_casilla = $("div.fila-"+personaje[0]+".columna-"+personaje[1]);
			nueva_casilla.append("<div id='personaje'></div>");
		};
	}else if (e.keyCode == 39) {
		if (personaje[1]!=8){
			var div_personaje = $("#personaje");
			var antigua_casilla = div_personaje.parent();
			antigua_casilla.html("");
			personaje[1] = personaje[1]+1;
			comprueba_enemigos ();
			var nueva_casilla = $("div.fila-"+personaje[0]+".columna-"+personaje[1]);
			nueva_casilla.append("<div id='personaje'></div>");
		};
	};
});

/*arriba 38
abajo 40
izq 37
der 39*/