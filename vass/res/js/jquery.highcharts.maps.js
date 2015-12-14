//Map Widget------------------------------------------ini
var mapDestacarRegion = function(mp,pr,nPr,gr){
	var mapa = $('#'+mp);
	var provincia = $('#'+mp+'_prov_'+pr);
	var contenido = mapa.find('tr[data-prov="'+pr+'"] td').eq(0).html();
	var regiones = [];
	if(!$('#etiqueta_'+mp).length){
		$('body').eq(0).append('<div id="etiqueta_'+mp+'" class="realstate-map-tooltip"><div class="realstate-map-tooltip-header"></div><div class="realstate-map-tooltip-body"></div></div>');
		$('#etiqueta_'+mp).css({
			'position':'absolute',
			'left':'-9999em',
			'display':'none'
		});
	}		
	$('#etiqueta_'+mp+' .realstate-map-tooltip-header').text(nPr);
	if(contenido!='0'){
		$('#etiqueta_'+mp+' .realstate-map-tooltip-body').html(contenido);
	} else {
		$('#etiqueta_'+mp+' .realstate-map-tooltip-body').html('');			
	}
	if(!gr){
		regiones[0] = provincia;		
	} else {
		regiones = provincia.children('path');
	}		
	$.each(regiones,function(){
		$(this).removeAttr('title').children('title').remove();
		if($(this).attr('data-activa')==1){
			$(this).attr('data-activa','0').unbind('mousemove');
			$('#etiqueta_'+mp).css({
				'left': '-9999em',
				'display':'none'
			});
		} else {
			$(this).attr('data-activa','1').bind('mousemove',function(e){
				$('#etiqueta_'+mp).css({
					'left': (e.pageX+10)+'px',
					'top': (e.pageY-10)+'px',						
					'display':'block'
				});
			});				
		}
		if(($(this).attr('data-activa')=='0')&&($(this).attr('fill')=='#FFBF80')){
			$(this).attr('fill','#F56600');
		} else if(($(this).attr('data-activa')=='1')&&($(this).attr('fill')=='#F56600')){
			$(this).attr('fill','#FFBF80');
		}
	});
}

function mapDestino(valor){
	window.location.href = valor;
}
function mapSubmite(form, valor) {
	eval('var formulario = document.forms[\''+form+'\'];'); 
    var provincia = formulario.elements['provincia'];
    if (!provincia) {
    	provincia = document.createElement('input');
    	provincia.type = 'hidden';
    	provincia.name = 'provincia';
        formulario.appendChild(provincia);
    }
    provincia.value = valor;
	formulario.submit();
}

(function($){
	var MAP = function(element){
		//PARTE PRIVADA
		var el = $(element);
	    var obj = this;
	    var objId = '';
		var created = false;
		var destroyHtml = '';
		var provincias = [];
		var baleares,palmas,tenerife;
		var grupos = [];

		//PARTE PÚBLICA
		this.id = function(){
			return objId;
		}
		this.init = function (id){
			objId = id;
			provincias['01'] = ['Álava',['M',367,40,'L',362,48,363,54,358,53,356,55,357,58,360,61,357,63,356,61,351,61,348,58,346,58,343,53,350,55,354,54,350,48,345,48,342,53,338,51,335,52,333,49,336,48,334,46,330,46,332,42,336,44,338,42,332,36,334,34,335,32,338,32,340,38,347,38,349,34,354,38,355,39,367,40]];
			provincias['02'] = ['Albacete',['M',417,231,'L',415,233,415,235,417,238,415,241,411,238,411,235,407,234,404,238,402,236,398,236,399,240,396,242,396,248,399,249,395,254,388,253,390,252,388,250,382,255,378,254,366,268,357,266,359,262,359,255,358,252,352,246,347,246,347,242,351,240,352,234,348,234,348,230,346,229,343,228,343,227,344,227,346,223,343,220,345,219,346,212,348,209,351,208,351,208,353,210,356,209,359,210,360,212,362,212,364,210,366,212,368,212,370,210,373,210,375,208,381,210,395,200,396,201,404,206,408,213,406,217,406,223,407,224,415,224,417,226,417,231]];
			provincias['03'] = ['Alicante',['M',446,226,'L',450,225,458,231,458,233,456,237,454,238,452,237,450,239,448,244,444,244,432,254,433,258,430,258,428,261,429,266,426,273,423,273,418,268,416,262,419,256,417,250,413,248,416,245,415,241,417,238,415,235,415,233,417,231,422,233,426,232,428,236,432,234,428,231,430,229,437,228,439,226,446,226]];
			provincias['04'] = ['Almeria',['M',393,297,'L',388,300,389,302,384,307,383,318,380,318,378,321,380,323,372,329,366,325,362,324,358,324,356,325,353,330,346,331,343,328,336,328,337,326,342,323,339,321,344,308,348,308,356,298,355,296,364,291,365,288,366,276,369,273,375,275,377,277,376,280,383,290,382,292,387,295,391,294,393,297]];
			provincias['05'] = ['Ávila',['M',295,146,'L',297,149,290,152,291,156,289,158,287,157,282,164,282,167,277,168,276,166,272,166,268,169,267,172,263,171,260,174,252,174,250,166,248,166,246,169,238,164,238,160,242,156,246,158,249,154,245,152,248,150,258,140,261,140,260,136,262,134,260,132,259,129,262,128,261,126,266,122,271,127,274,124,277,124,278,127,275,128,278,130,282,132,280,136,285,140,287,144,285,146,286,149,293,145,295,146]];
			provincias['06'] = ['Badajoz',['M',262,236,'L',257,236,251,244,248,246,245,245,240,254,245,260,237,266,235,261,229,264,228,272,224,272,223,271,211,272,208,269,202,269,199,266,194,264,194,261,188,262,188,258,184,252,180,247,181,240,183,240,182,235,186,235,192,226,192,220,189,219,189,216,184,211,189,204,188,202,193,202,199,207,196,210,201,214,206,214,210,213,214,215,217,220,221,220,226,218,229,220,232,216,238,219,244,214,246,215,250,210,253,210,258,205,265,205,276,202,275,210,278,214,276,215,270,215,266,222,268,225,262,236]];
			provincias['08'] = ['Barcelona',['M',507,63,'L',517,61,517,64,514,65,517,70,522,70,524,72,529,70,533,74,530,77,530,78,526,80,530,84,541,88,543,90,536,92,530,100,526,100,524,105,522,105,519,110,514,110,511,114,505,114,502,106,497,102,497,98,494,97,497,93,494,88,496,86,500,88,504,84,501,82,504,78,502,75,506,70,503,67,507,63]];
			provincias['09'] = ['Burgos',['M',346,56,'L',340,57,334,62,338,64,338,67,335,67,336,80,340,82,339,85,339,88,335,88,337,90,332,93,330,92,327,92,328,97,320,104,322,108,318,108,316,106,312,106,312,110,307,108,304,108,302,103,296,94,299,93,302,93,304,90,306,89,306,87,302,87,302,85,298,82,303,78,298,77,296,82,295,79,293,76,291,74,291,68,294,61,289,57,294,56,296,56,296,53,301,51,304,48,309,48,309,46,306,40,307,37,311,35,326,26,327,30,334,34,332,36,338,42,336,44,332,42,330,46,334,46,336,48,333,49,335,52,338,51,342,53,345,48,350,48,354,54,350,55,343,53,346,56]];
			provincias['10'] = ['Cáceres',['M',265,205,'L',258,205,253,210,250,210,246,215,244,214,238,219,232,216,229,220,226,218,221,220,217,220,214,215,210,213,206,214,201,214,196,210,199,207,193,202,188,202,189,204,182,204,176,193,187,194,192,189,198,189,195,186,195,183,197,182,196,172,200,166,206,166,212,162,211,159,217,155,223,156,226,158,223,160,231,166,235,163,238,164,246,169,248,166,250,166,252,174,250,178,252,181,249,181,252,184,254,183,254,189,257,189,259,190,258,193,256,195,265,205]];
			provincias['11'] = ['Cádiz',['M',251,352,'L',248,356,247,357,246,354,244,355,244,361,242,361,239,364,236,363,237,362,236,360,224,354,221,356,219,354,220,352,216,347,214,347,211,344,213,337,209,334,206,329,207,323,210,321,217,322,221,325,234,320,235,318,238,320,243,320,250,316,252,321,259,318,258,322,255,326,252,324,250,327,249,330,248,331,249,332,243,339,245,342,244,346,248,345,250,346,249,348,251,352]];
			provincias['12'] = ['Castellón',['M',465,148,'L',459,163,453,166,451,172,448,174,442,186,437,184,426,188,425,184,419,180,418,176,424,173,427,170,427,164,429,163,430,165,434,162,433,160,437,159,437,151,437,148,434,144,440,138,448,141,455,138,465,148]];
			provincias['13'] = ['Ciudad Real',['M',347,246,'L',344,250,341,249,338,251,336,251,336,250,332,249,331,250,328,249,328,248,325,248,325,250,319,252,317,249,313,253,309,251,306,254,303,254,301,251,291,253,286,253,271,242,268,242,267,239,262,236,268,225,266,222,270,215,276,215,278,214,275,210,276,202,283,200,288,202,289,200,294,200,296,196,300,197,295,204,296,208,300,206,304,211,310,211,314,208,317,209,321,205,323,206,328,201,336,204,339,202,344,204,348,209,346,212,345,219,343,220,346,223,344,227,343,227,343,228,346,229,348,230,348,234,352,234,351,240,347,242,347,246]];
			provincias['14'] = ['Córdoba',['M',292,308,'L',286,304,285,305,283,304,280,308,275,305,274,302,271,304,267,302,268,298,264,295,267,287,260,283,260,287,257,285,253,287,249,289,248,286,250,284,248,276,245,274,244,268,240,264,245,260,240,254,245,245,248,246,251,244,257,236,262,236,267,239,268,242,271,242,286,253,291,253,292,258,296,262,293,265,295,268,290,268,293,287,296,290,300,296,304,299,300,300,297,298,293,303,295,306,292,308]];
			provincias['15'] = ['La Coruña',['M',129,48,'L',115,35,123,24,131,23,131,19,135,17,138,19,150,16,153,17,157,18,155,13,156,10,164,4,167,2,172,1,172,3,175,0,177,8,175,13,171,15,168,20,167,38,164,43,159,42,149,46,142,47,139,50,129,48]];
			provincias['16'] = ['Cuenca',['M',395,200,'L',381,210,375,208,373,210,370,210,368,212,366,212,364,210,362,212,360,212,359,210,356,209,353,210,351,208,348,209,344,204,339,202,340,196,338,193,338,188,332,181,335,180,331,174,338,168,340,169,342,167,341,164,342,162,341,158,344,157,344,156,347,158,351,155,355,157,355,150,360,151,362,149,361,147,365,146,378,150,377,152,380,157,382,157,384,160,394,166,395,169,396,172,402,174,405,174,406,174,406,176,404,182,405,185,402,189,398,190,398,195,395,195,395,200]];
			provincias['17'] = ['Gerona',['M',517,61,'L',523,58,529,61,537,59,538,57,542,57,544,54,552,54,555,59,553,67,557,67,559,70,557,71,560,73,558,75,558,78,553,81,551,85,550,87,548,85,545,87,545,89,543,90,541,88,530,84,526,80,530,78,530,77,533,74,529,70,524,72,522,70,517,70,514,65,517,64,517,61]];
			provincias['18'] = ['Granada',['M',369,273,'L',366,276,365,288,364,291,355,296,356,298,348,308,344,308,339,321,342,323,337,326,334,326,333,329,326,329,321,332,319,329,312,330,309,328,312,326,297,318,291,318,290,310,295,306,293,303,297,298,300,300,304,299,307,302,308,297,310,295,312,296,321,292,320,289,323,289,325,291,330,288,337,288,340,287,343,287,343,281,346,281,346,278,346,274,349,272,357,266,366,268,369,273]];
			provincias['19'] = ['Guadajara',['M',382,157,'L',380,157,377,152,378,150,365,146,361,147,362,149,360,151,355,150,355,157,351,155,347,158,344,156,344,157,341,158,342,162,341,164,342,167,340,169,338,168,335,168,335,163,332,165,331,163,333,162,333,157,321,143,321,137,324,135,323,131,317,125,327,121,328,118,333,117,336,120,343,115,346,119,351,119,355,122,355,126,372,125,376,122,377,124,381,127,383,130,388,132,392,132,388,136,390,138,390,150,387,147,384,150,386,153,386,156,382,157]];
			provincias['20'] = ['Guipuzcoa',['M',357,26,'L',364,24,377,22,377,28,371,34,367,40,355,39,354,38,355,32,355,30,357,26]];
			provincias['21'] = ['Huelva',['M',210,321,'L',207,323,203,319,188,309,188,306,185,304,182,307,175,306,170,304,168,298,167,289,170,282,177,275,180,270,183,266,187,266,188,267,190,266,188,262,194,261,194,264,199,266,202,269,208,269,211,272,215,272,219,277,216,281,208,281,204,283,202,287,209,290,210,295,209,300,210,321]];
			provincias['22'] = ['Huesca',['M',411,46,'L',414,44,420,46,421,49,434,48,439,52,444,52,446,50,469,50,472,56,470,63,472,64,471,71,468,74,466,78,466,84,463,89,459,92,460,95,456,96,460,99,461,103,454,108,445,110,442,110,439,106,439,102,432,97,428,97,426,94,425,88,420,84,415,84,414,78,417,78,416,74,419,68,416,66,413,71,411,67,410,57,405,52,408,48,411,46 ]];
			provincias['23'] = ['Jaén',['M',357,266,'L',349,272,346,274,346,278,346,281,343,281,343,287,340,287,337,288,330,288,325,291,323,289,320,289,321,292,312,296,310,295,308,297,307,302,304,299,300,296,296,290,293,287,290,268,295,268,293,265,296,262,292,258,291,253,301,251,303,254,306,254,309,251,313,253,317,249,319,252,325,250,325,248,328,248,328,249,331,250,332,249,336,250,336,251,338,251,341,249,344,250,347,246,352,246,358,252,359,255,359,262,357,266]];
			provincias['24'] = ['León',['M',276,39,'L',274,44,270,46,272,50,268,52,270,58,266,60,272,64,266,71,266,74,262,75,262,72,257,74,255,76,252,76,251,79,253,84,250,86,244,79,241,77,237,80,235,77,232,78,228,75,224,78,219,74,213,76,205,72,204,69,204,66,204,63,200,62,198,61,196,58,200,49,203,42,206,40,208,40,211,43,215,40,221,38,222,35,222,36,228,36,230,35,228,37,239,39,245,35,248,36,252,38,264,31,267,29,272,29,275,34,276,39]];
			provincias['25'] = ['Lérida',['M',469,50,'L',467,44,476,47,478,49,488,49,490,52,504,52,498,57,506,60,507,63,503,67,506,70,502,75,504,78,501,82,504,84,500,88,496,86,494,88,497,93,494,97,488,96,485,98,488,100,482,102,482,108,476,112,474,110,470,112,466,109,460,114,457,112,460,108,457,106,461,103,460,99,456,96,460,95,459,92,463,89,466,84,466,78,468,74,471,71,472,64,470,63,472,56,469,50]];
			provincias['26'] = ['La Rioja',['M',357,63,'L',366,64,372,67,382,76,382,79,377,81,379,84,376,86,368,85,368,81,364,78,359,78,354,81,353,84,347,87,349,80,344,80,342,86,339,85,340,82,336,80,335,67,338,67,338,64,334,62,340,57,346,56,346,58,348,58,351,61,356,61,357,63]];
			provincias['27'] = ['Lugo',['M',175,0,'L',180,1,188,6,192,10,195,13,195,19,197,29,199,31,203,31,203,33,201,34,198,35,198,38,200,39,203,39,203,42,200,49,196,58,198,61,197,64,194,66,186,64,179,64,170,59,164,57,156,57,161,55,165,52,164,43,167,38,168,20,171,15,175,13,177,8,175,0]];
			provincias['28'] = ['Madrid',['M',338,168,'L',331,174,326,176,321,175,314,181,310,181,311,178,313,177,316,174,315,170,303,169,301,165,294,164,290,168,288,167,282,169,277,168,282,167,282,164,287,157,289,158,291,156,290,152,297,149,295,146,304,137,308,130,314,122,317,125,323,131,324,135,321,137,321,143,333,157,333,162,331,163,332,165,335,163,335,168,338,168]];
			provincias['29'] = ['Málaga',['M',309,328,'L',309,330,302,330,301,328,299,328,294,331,291,330,284,331,282,332,277,338,276,338,272,343,270,341,266,342,265,341,261,341,251,352,249,348,250,346,248,345,244,346,245,342,243,339,249,332,248,331,249,330,250,327,252,324,255,326,258,322,259,318,266,309,275,305,280,308,283,304,285,305,286,304,292,308,290,310,291,318,297,318,312,326,309,328]];
			provincias['30'] = ['Murcia',['M',426,273,'L',421,283,423,284,424,283,426,280,427,287,425,287,425,286,423,285,423,286,418,290,416,287,413,289,411,290,404,289,402,292,398,292,398,295,393,297,391,294,387,295,382,292,383,290,376,280,377,277,375,275,369,273,366,268,378,254,382,255,388,250,390,252,388,253,395,254,399,249,396,248,396,242,399,240,398,236,402,236,404,238,407,234,411,235,411,238,415,241,416,245,413,248,417,250,419,256,416,262,418,268,423,273,426,273]];
			provincias['31'] = ['Navarra',['M',377,22,'L',385,28,392,24,392,32,398,32,396,37,406,40,410,39,413,39,411,46,408,48,405,52,395,62,393,78,398,81,393,86,388,87,382,83,379,84,377,81,382,79,382,76,372,67,366,64,357,63,360,61,357,58,356,55,358,53,363,54,362,48,367,40,371,34,377,28,377,22]];
			provincias['32'] = ['Orense',['M',198,61,'L',200,62,204,63,204,66,204,69,205,72,203,76,201,77,197,78,194,82,194,83,193,84,188,85 ,190,90 ,184,92 ,180,90 ,173,90 ,172,87 ,165,89 ,163,86 ,157,91 ,153,88 ,154,82,149,82,151,76,153,74,153,70,153,66,152,63,153,58,156,57,164,57,170,59,179,64,186,64,194,66,197,64,198,61]];
			provincias['33'] = ['Asturias',['M',195,13,'L',196,11,198,11,205,11,208,13,213,11,216,13,218,12,220,12,224,13,228,11,232,14,238,12,238,9,240,10,246,11,249,11,256,13,263,16,272,17,276,18,280,20,285,21,283,24,276,26,272,29,267,29,264,31,252,38,248,36,245,35,239,39,228,37,230,35,228,36,222,36,222,35,221,38,215,40,211,43,208,40,206,40,203,42,203,39,200,39,198,38,198,35,201,34,203,33,203,31,199,31,197,29,195,19,195,13]];
			provincias['34'] = ['Palencia',['M',276,39,'L',278,39,284,39,287,36,291,43,293,43,296,49,297,49,299,48,300,50,301,51,296,53,296,56,294,56,289,57,294,61,291,68,291,74,293,76,295,79,296,82,298,77,303,78,298,82,302,85,302,87,306,87,306,89,304,90,302,93,299,93,296,94,292,90,288,90,284,90,283,87,279,86,278,88,273,82,270,83,266,80,269,76,266,74,266,71,272,64,266,60,270,58,268,52,272,50,270,46,274,44,276,39]];
			provincias['36'] = ['Pontevedra',['M',164,43,'L',165,52,161,55,156,57,153,58,152,63,153,66,153,70,153,74,154,75,149,76,144,78,140,78,136,79,130,85,128,79,128,76,131,73,133,70,137,68,132,67,129,67,128,66,130,56,139,50,142,47,149,46,159,42,164,43]];
			provincias['37'] = ['Salamanca',['M',238,164,'L',235,163,231,166,223,160,226,158,223,156,217,155,211,159,207,160,204,162,201,162,203,144,201,142,204,138,204,133,206,130,206,124,210,123,213,120,230,119,232,114,240,118,244,114,247,119,251,119,254,120,254,123,258,123,261,126,262,128,259,129,260,132,262,134,260,136,261,140,258,140,248,150,245,152,249,154,246,158,242,156,238,160,238,164]];
			provincias['39'] = ['Cantabria',['M',313,17,'L',290,22,285,21,283,24,276,26,272,29,275,34,276,39,278,39,284,39,287,36,291,43,293,43,296,49,297,49,299,48,300,50,301,51,304,48,309,48,309,46,306,40,307,37,311,35, 326,26,332,26,329,22,325,20,322,19,319,16,316,15,313,17]];
			provincias['40'] = ['Segovia',['M',328,118,'L',327,121,317,125,314,122,308,130,304,137,295,146,293,145,286,149,285,146,287,144,285,140,280,136,282,132,278,130,275,128,278,127,277,124,280,122,282,112,289,110,296,112,300,108,304,108,307,108,312,110,312,106,316,106,318,108,322,108,323,115,328,115,328,118]];
			provincias['41'] = ['Sevilla',['M',259,318,'L',252,321,250,316,243,320,238,320,235,318,234,320,221,325,217,322,210,321,209,300,210,295,209,290,202,287,204,283,208,281,216,281,219,277,215,272,223,271,224,272,228,272,229,264,235,261,237,266,240,264,244,268,245,274,248,276,250,284,248,286,249,289,253,287,257,285,260,287,260,283,267,287,264,295,268,298,267,302,271,304,274,302,275,305,266,309,259,318]];
			provincias['42'] = ['Soria',['M',339,85,'L',342,86,344,80,349,80,347,87,353,84,354,81,359,78,364,78,368,81,368,85,376,86,379,84,380,90,378,94,382,96,377,101,373,101,372,106,376,110,372,113,369,110,368,113,368,121,372,125,355,126,355,122,351,119,346,119,343,115,336,120,333,117,328,118,328,115,323,115,322,108,320,104,328,97,327,92,330,92,332,93,337,90,335,88,339,88,339,85]];
			provincias['43'] = ['Tarragona',['M',505,114,'L',504,117,499,117,496,118,496,121,490,120,484,122,481,126,480,129,475,131,475,135,472,138,474,137,477,138,477,141,475,142,476,145,473,147,472,144,470,143,465,148,455,138,456,129,456,126,454,124,453,121,458,120,460,114,466,109,470,112,474,110,476,112,482,108,482,102,488,100,485,98,488,96,494,97,497,98,497,102,502,106,505,114]];
			provincias['44'] = ['Teruel',['M',455,138,'L',448,141,440,138,434,144,437,148,437,151,437,159,433,160,434,162,430,165,429,163,427,164,427,170,424,173,418,176,419,180,415,182,413,176,407,176,409,173,409,170,403,170,400,166,398,169,395,169,394,166,384,160,382,157,386,156,386,153,384,150,387,147,390,150,390,138,388,136,392,132,394,132,392,128,396,127,402,127,402,122,408,123,411,125,416,122,421,122,423,120,423,115,426,114,427,112,432,116,438,116,439,118,437,119,440,121,444,120,446,125,450,123,454,124,456,126,456,129,455,138]];
			provincias['45'] = ['Toledo',['M',331,174,'L',335,180,332,181,338,188,338,193,340,196,339,202,336,204,328,201,323,206,321,205,317,209,314,208,310,211,304,211,300,206,296,208,295,204,300,197,296,196,294,200,289,200,288,202,283,200,276,202,265,205,256,195,258,193,259,190,257,189,254,189,254,183,252,184,249,181,252,181,250,178,252,174,260,174,263,171,267,172,268,169,272,166,276,166,277,168,282,169,288,167,290,168,294,164,301,165,303,169,315,170,316,174,313,177,311,178,310,181,314,181,321,175,326,176,331,174]];
			provincias['46'] = ['Valencia',['M',442,186,'L',436,199,439,204,435,207,438,210,440,209,441,210,440,212,445,219,443,221,448,224,446,226,439,226,437,228,430,229,428,231,432,234,428,236,426,232,422,233,417,231,417,226,415,224,407,224,406,223,406,217,408,213,404,206,396,201,395,200,395,195,398,195,398,190,402,189,405,185,404,182,406,176,406,174,405,174,402,174,396,172,395,169,398,169,400,166,403,170,409,170,409,173,407,176,413,176,415,182,419,180,425,184,426,188,437,184,442,186]];
			provincias['47'] = ['Valladolid',['M',296,94,'L',302,103,304,108,300,108,296,112,289,110,282,112,280,122,277,124,274,124,271,127,266,122,261,126,258,123,254,123,254,120,256,118,252,116,252,110,255,108,254,104,252,99,252,96,255,96,255,94,254,91,256,88,253,84,251,79,252,76,255,76,257,74,262,72,262,75,266,74,269,76,266,80,270,83,273,82,278,88,279,86,283,87,284,90,288,90,292,90,296,94]];
			provincias['48'] = ['Vizcaya',['M',340,20,'L',349,23,356,22,357,26,355,30,355,32,354,38,349,34,347,38,340,38,338,32,335,32,334,34,327,30,326,26,332,26,337,28,336,22,340,20]];
			provincias['49'] = ['Zamora',['M',205,72,'L',213,76,219,74,224,78,228,75,232,78,235,77,237,80,241,77,244,79,250,86,253,84,256,88,254,91,255,94,255,96,252,96,252,99,254,104,255,108,252,110,252,116,256,118,254,120,251,119,247,119,244,114,240,118,232,114,228,113,225,114,218,114,225,110,224,106,219,102,214,101,212,92,204,87,202,88,196,87,193,84,194,83,194,82,197,78,201,77,203,76,205,72]];
			provincias['50'] = ['Zaragoza',['M',458,105,'L',457,106,460,108,457,112,460,114,458,120,453,121,454,124,450,123,446,125,444,120,440,121,437,119,439,118,438,116,432,116,427,112,426,114,423,115,423,120,421,122,416,122,411,125,408,123,402,122,402,127,396,127,392,128,394,132,388,132,383,130,381,127,377,124,376,122,372,125,368,121,368,113,369,110,372,113,376,110,372,106,373,101,377,101,382,96,378,94,380,90,379,84,382,83,388,87,393,86,398,81,393,78,395,62,405,52,410,57,411,67,413,71,416,66,419,68,416,74,417,78,414,78,415,84,420,84,425,88,426,94,428,97,432,97,439,102,439,106,442,110,445,110,454,108,458,105]];
			provincias['51'] = ['Ceuta',['M',242,382,'L',242,389,235,389,235,382,242,382]];
			provincias['52'] = ['Melilla',['M',305,399,'L',305,406,298,406,298,399,305,399]];
			grupos['07'] = ['Islas Baleares',baleares,[['M',562,180,'L',564,182,562,184,555,185,552,184,556,180,562,180],['M',535,194,'L',536,193,539,196,536,199,536,204,533,208,528,209,528,208,524,208,521,204,514,206,513,203,513,200,521,193,525,190,532,190,534,191,532,192,530,194,532,195,535,194],['M',494,215,'L',494,218,492,221,488,220,492,214,494,215]]];
			grupos['35'] = ['Las Palmas',palmas,[['M',164,344,'L',167,345,162,351,156,353,160,345,161,346,164,344],['M',154,359,'L',156,359,159,363,156,374,152,378,149,380,144,388,139,388,136,387,138,384,142,384,142,382,146,380,146,377,151,366,151,362,154,359],['M',116,370,'L',121,374,120,382,119,384,114,384,110,381,106,377,110,370,116,370]]];
			grupos['38'] = ['Santa Cruz de Tenerife',tenerife,[['M',79,362,'L',86,362,81,367,79,370,78,377,73,381,68,381,69,376,67,376,64,369,66,368,72,368,79,362],['M',56,378,'L',52,374,49,375,49,378,51,380,56,378],['M',38,364,'L',33,359,34,355,36,355,39,360,39,362,38,364],['M',36,389,'L',36,391,32,394,29,392,30,391,31,392,33,389,36,389]]];
			return obj;
		}
		this.create = function (){
			if (!created) {
				created = true;
				destroyHtml = $(el).closest('form').html();
				$(el).wrap('<div id="'+objId+'" />');
				var renderer = new Highcharts.Renderer($('#'+objId)[0],600,416);
				$(el).find('tr').each(function(i){
					var enlace = $(this).find('th a').eq(0).attr('href');
					var idProv = $(this).attr('data-prov');
				    var accionEnlace = '';	
					if (typeof enlace != 'undefined'){
						accionEnlace='mapDestino(\''+enlace+'\')';
					}else{
						enlace = '#'+idProv; 
						var form = $(this).closest('form').attr('name') || $(this).closest('form').attr('id');	
						var valor = $(this).find('input').attr('value');
						accionEnlace='mapSubmite(\''+form+'\',\''+valor+'\')';
					}

					var contenido = $(this).find('td').eq(0).html();
					if((idProv=='07')||(idProv=='35')||(idProv=='38')){
						if(contenido!='0'){
							var titulo = grupos[idProv][0]+' '+(contenido.replace(/<[^>]*>?/g,' '));
							grupos[idProv][1] = renderer.g()
								.attr({
									id: objId+'_prov_'+idProv,
									onclick: accionEnlace,
									onmouseover: 'mapDestacarRegion(\''+objId+'\',\''+idProv+'\',\''+grupos[idProv][0]+'\',true)',
									onmouseout: 'mapDestacarRegion(\''+objId+'\',\''+idProv+'\',\''+grupos[idProv][0]+'\',true)'
								})
								.add();
							$.each(grupos[idProv][2],function(i){
								renderer.path(this)
								.attr({
									'stroke-width': 1,
									stroke: '#FFF',
									fill: '#F56600',
									cursor: 'pointer',
									title: titulo, //IE8
									href: enlace //IE8
								})
								.add(grupos[idProv][1]);
							});								
						} else {
							var titulo = grupos[idProv][0];
							grupos[idProv][1] = renderer.g()
								.attr({
									id: objId+'_prov_'+idProv,
									onmouseover: 'mapDestacarRegion(\''+objId+'\',\''+idProv+'\',\''+grupos[idProv][0]+'\',true)',
									onmouseout: 'mapDestacarRegion(\''+objId+'\',\''+idProv+'\',\''+grupos[idProv][0]+'\',true)'
								}).add();
							$.each(grupos[idProv][2],function(i){
								renderer.path(this)
								.attr({
									'stroke-width': 1,
									stroke: '#FFF',
									fill: '#DDD',
									title: titulo //IE8
								})
								.add(grupos[idProv][1]);
							});	
						}
					} else {
						if(contenido!='0'){
							var titulo = provincias[idProv][0]+' '+(contenido.replace(/<[^>]*>?/g,' '));
							renderer.path(provincias[idProv][1])
								.attr({
									id: objId+'_prov_'+idProv,
									'stroke-width': 1,
									stroke: '#FFF',
									fill: '#F56600',
									cursor: 'pointer',
									onclick: accionEnlace, 	//onclick: 'destino(\''+enlace+'\')',
									onmouseover: 'mapDestacarRegion(\''+objId+'\',\''+idProv+'\',\''+provincias[idProv][0]+'\')',
									onmouseout: 'mapDestacarRegion(\''+objId+'\',\''+idProv+'\',\''+provincias[idProv][0]+'\')',
									title: titulo, //IE8
									href: enlace //IE8
								})
								.add();
						} else {
							var titulo = provincias[idProv][0];
							renderer.path(provincias[idProv][1])
								.attr({
									id: objId+'_prov_'+idProv,
									'stroke-width': 1,
									stroke: '#FFF',
									fill: '#DDD',
									onmouseover: 'mapDestacarRegion(\''+objId+'\',\''+idProv+'\',\''+provincias[idProv][0]+'\')',
									onmouseout: 'mapDestacarRegion(\''+objId+'\',\''+idProv+'\',\''+provincias[idProv][0]+'\')',
									title: titulo //IE8
								})
								.add();
						}
					}
				});	
				$(el).addClass('reader');				
			}
			return obj;
		}
		this.destroy = function (){
			if (created) {
				$(el).closest('form').html(destroyHtml);
				destroyHtml = '';
				created = false;
			}
		}
		this.prueba = function(x){
			alert('prueba '+x);
		}
	};
	
	$.fn.mapa = function(id){
		return this.each(function(){
			var element = $(this);   
			if (element.data('mapaInmobiliario')){
				return;
			}else{
				var map = new MAP(this);
				map.init(id);
				element.data('mapaInmobiliario', map);
			}
		});
	};
	
})(jQuery);

var createMaps = function(id){ 
	id = id || 'bk_mapaInmobiliario_';
	$('.realstate-map').filter(':not([data-enhance="false"])').each(function(i){
		if(typeof $(this).data('mapaInmobiliario') === "undefined") {
			$(this).mapa(id+(i+1));
			$(this).data('mapaInmobiliario').create();
		}
	});
}
//Map Widget------------------------------------------end