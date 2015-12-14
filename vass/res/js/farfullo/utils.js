if(!self.getRules||!self.compose){var compose=function(_1){var _2=_1.selectorText.substr(1).replace("-","=").replace(" ","")+"(";
if(_2.indexOf("=")!=-1){_2="var "+_2;}var _3=_1.style;var f=(typeof document.attachEvent=="object")?_3.quotes:_3.content;
if(f!=undefined&&f!=""){_2+=f.replace(/["']/g,"").replace(/__/g,"\"");}_2+=")";f=_3.widows;
if(f!=undefined){if(typeof (f)!="string"){f=""+f;}if(f!=""){_2+=("["+(f-1)+"]");
}}_2+=";";return _2;};var getRules=function(){var a,ss=document.getElementsByTagName("style");
for(var x=0;ss[x];x++){if(ss[x].title=="maincss"){a=ss[x];}}if(a==null){return;}
var s=a.styleSheet?a.styleSheet:a.sheet;var _8=s.imports?s.imports[0].rules:s.cssRules[0].styleSheet.cssRules;
var _9="";var _a=false;for(var b=0;b<_8.length;b++){if(_8[b].selectorText==".dna_tabbar_02"){
_a=false;}if(_a){_9+=compose(_8[b]);}if(_8[b].selectorText==".dna_tabbar_01"){_a=true;
}}eval(_9);};if(window.addEventListener){window.addEventListener("load",getRules,false);
}else{window.attachEvent("onload",getRules);}}

