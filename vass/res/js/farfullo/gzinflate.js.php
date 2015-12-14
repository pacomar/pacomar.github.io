/* 
 Esta función descomprime una cadena de caracteres. El código es una 
 adaptación simplificada y compatible sólo para algunos casos particulares
 de la misma función existente en PHP, de ahí la extravagancia en el 
 nombre del fichero.
*/ 
function gzinflate(ps) {

  var rlebits = 4;
  var width = 6;
  var rlemin = rlebits + 2 + 1;
  var rlemask = (1 << rlebits) - 1;
  var i = 0, l, j = 0, k, p = 0, pc = 0, us = [];
  var load = function() {p |= ps[j] << pc; pc += width; j++;};
  var ensure = function(n) {while (pc < n && j < ps.length) load();};
  var push = function(u) {us.push(u); i++;};
  var got = function(n) {p>>>=n; pc-=n;};

  ensure(16);
  l = p & 0xFFFF;
  got(16);
  while (i < l) {
    ensure(4);
    if ((p & 1) == 0) {
      got(1); push([0]);
    } else if ((p & 3) == 1) {
      got(2); ensure(rlebits); k = (p & rlemask) + rlemin; got(4);
      while (k > 0) {push([0]); k--;}
    } else if ((p & 7) == 3) {
      got(3); ensure(8); push([3, p & 0xFF]); got(8);
    } else if ((p & 15) == 7) {
      got(4); push([1]);
    } else {
      got(4); push([2]);
    }
  }

  var prec = 0;
  var c, ctxt = [];
  var d, ds = [];
  for (var i = 0; i < us.length; i++) {
    c = ctxt[prec];
    if (c == null) c = 3038309;
    var e = us[i];
    var e0 = e[0];
    if (e0 == 0) {
      d = c & 0xFF;
    } else if (e0 == 1) {
      d = (c >>> 8) & 0xFF;
      c = (c & 0xFF0000) | ((c & 0xFF) << 8) | d;
    } else if (e0 == 2) {
      d = (c >>> 16) & 0xFF;
      c = ((c & 0xFFFF) << 8) | d;
    } else {
      d = e[1];
      c = ((c & 0xFFFF) << 8) | d;
    }
    ds.push(d);
    ctxt[prec] = c;
    prec = ((prec << 6) | (d & 0x3F)) & 0x3FFFF;
  }

  var str = "";
  for (var i = 0; i < ds.length; i++) str += String.fromCharCode(ds[i]);
  return str;
}

/*
 Esta función decodifica una cadena codificada en base 64;
*/
function base64_decode(encoded) {
    var bs = [];
    for (var i = 0; i < encoded.length; i++) {
        var c = encoded.charCodeAt(i);
        bs[i] = (c < 60) ? (c+4) : (c < 91) ? (c-65) : (c-71);
    }
    return bs;
}

/*
 Esta función comprueba que el algoritmo de descompresión funciona 
 correctamente para una cadena consistente en unos cuantos caracteres comunes.
 Nótese que la cadena comprimida es de mayor tamaño que el texto plano. Esto
 se debe a la naturaleza del texto, y no al propio algoritmo.
 Si todo va bien, debería ejecutarse el siguiente código Javascript:
 alert('ABCDEFGHIJKLMNOPQRSTUVWXYZ01233456789.,;:)($@!><?#{}_-[]');

 //Este otro ejemplo 
 eval(gzinflate(base64_decode("rVJhTxpBEP3Or9heTdgLypWTQAKNtCqxjfYsiqFFzGV3b7g7XG6vNwMtEP67R0VNCFET3S+bmZ157+XtAxUZZn3+2Fos/b3rm6LdHCSDhDlOGwmYocwwGME41SbvwlRoHs7jZKgFAZcCoVb1A1AmAD6wekd/jyT2Z17t5LR+O0T3V6bpkMJe58xUaiLy/rm/RxiMz890NPs++jHH7sTbN7KynvHWd90Njqf9r9Rxf84Tb1bt16m0FStHCNyOTL2KK0ZUcZWcetWeEg/F49QzPHr/CezTw6JcT2ynLZUAu71T+c15Afs1St/g1nv5/ah4u2vv8psDy7ZX2cqTFYCETKxipSYkMiY0ZMSL5d1mw+Y7Xz60DqxmIR7yGBGI7/gX7c5V+7J7XQyLN7bNFgWWn/9RHMYa/BDIVyYhSAi5FRGl2HAcJEFYliK5jfOnrKzM+L7n/JmYXEuzsGSgEdg2onSTaMUxFmGs/HybAP0wVdxuIWVxilpgBLi539ioc8LCHQ==")));
 //debería ejecutar alert('.,;:)($@!?>#<{}_-[]abcdefghijklmnopqrstuvwxyz
                           012345678901234567890123456789012345678901234
			   ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRS
			   abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrs
			   ACEGIKMOQSUWYBDFHJLNQRTVXZACEGIKMOQSUWYBDFHJL
			   024681357902468135790246813579024681357902468
			   kjfdnqinwqltlkhfuqnljfpqoiwflshfnwrwiorqwhrhe
			   fashfuweskfhuwahfkfaiuwfflkshfowawifhafkwufwf');

*/
function test_gzinflate() {
    eval(gzinflate(base64_decode("CBwCbsZyN6GK7kF0EaDNiWRzod0QaJNl2Sjp10caPNoWUTqN1oaVNr2VDrl10awsYmMbmNzoZ1Mb2NDnlzPW2OTnlyQZkMgWIznxz:Zjs9Wf7r1y2adtTWKbH")));
}
