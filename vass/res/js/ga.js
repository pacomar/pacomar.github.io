var url_ebk = "https://trackebk.bankinter.com/gaproxy";
var url_emp = "https://trackemp.bankinter.com/gaproxy";
var url_brk = "https://trackbrk.bankinter.com/gaproxy";
var url_obs = "https://trackobs.obsidiana.com/gaproxy";
var proxy_url;
if (document.domain.indexOf("empresas.bankinter.com")> -1){
	proxy_url = url_emp;
}else if (document.domain.indexOf("broker.bankinter.com") > -1){
	proxy_url = url_brk;
}else if (document.domain.indexOf("www.obsidiana.com") > -1){
	proxy_url = url_obs;
}else{
	proxy_url = url_ebk;
}
(function(){var aa="_gat",ba="_gaq",s=true,v=false,w=undefined,ca="4.5.8",y="length",z="cookie",A="location",C="&",D="=",E="__utma=",F="__utmb=",H="__utmc=",da="__utmk=",I="__utmv=",K="__utmz=",L="__utmx=",M="GASO=";var N=function(g){return w==g||"-"==g||""==g},ea=function(g){return g[y]>0&&" \n\r\t".indexOf(g)>-1},Q=function(g,i,b){var k="-",c;if(!N(g)&&!N(i)&&!N(b)){c=g.indexOf(i);if(c>-1){b=g.indexOf(b,c);if(b<0)b=g[y];k=P(g,c+i.indexOf(D)+1,b)}}return k},S=function(g){var i=v,b=0,k,c;if(!N(g)){i=s;for(k=0;k<g[y];k++){c=g.charAt(k);b+="."==c?1:0;i=i&&b<=1&&(0==k&&"-"==c||".0123456789".indexOf(c)>-1)}}return i},T=function(g,i){var b=encodeURIComponent;return b instanceof Function?i?encodeURI(g):b(g):escape(g)},
U=function(g,i){var b=decodeURIComponent,k;g=g.split("+").join(" ");if(b instanceof Function)try{k=i?decodeURI(g):b(g)}catch(c){k=unescape(g)}else k=unescape(g);return k},V=function(g,i){return g.indexOf(i)>-1},W=function(g,i){g[g[y]]=i},X=function(g){return g.toLowerCase()},Y=function(g,i){return g.split(i)},ga=function(g,i){return g.indexOf(i)},P=function(g,i,b){b=w==b?g[y]:b;return g.substring(i,b)},ha=function(g,i){return g.join(i)},ia=function(g){var i=1,b=0,k;if(!N(g)){i=0;for(k=g[y]-1;k>=0;k--){b=
g.charCodeAt(k);i=(i<<6&268435455)+b+(b<<14);b=i&266338304;i=b!=0?i^b>>21:i}}return i},ja=function(){var g=window,i=w;if(g&&g.gaGlobal&&g.gaGlobal.hid)i=g.gaGlobal.hid;else{i=Z();g.gaGlobal=g.gaGlobal?g.gaGlobal:{};g.gaGlobal.hid=i}return i},Z=function(){return Math.round(Math.random()*2147483647)},$={Fa:function(g,i){this.$a=g;this.lb=i},t:63072000000,gb:v,_gasoDomain:w,_gasoCPath:w};$.Fb=function(){var g=this,i=$.Fa;function b(c){return new i(c[0],c[1])}function k(c){var p=[];c=c.split(",");var n;for(n=0;n<c.length;++n)p.push(b(c[n].split(":")));return p}g.Ga="utm_campaign";g.Ha="utm_content";g.Ia="utm_id";g.Ja="utm_medium";g.Ka="utm_nooverride";g.La="utm_source";g.Ma="utm_term";g.Na="gclid";g.aa=0;g.z=0;g.Wa="15768000";g.qb="1800";g.ra=[];g.ta=[];g.nc="cse";g.oc="q";g.mb=5;g.T=k("images.google:q,google:q,yahoo:p,msn:q,bing:q,aol:query,aol:encquery,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,looksmart:qt,about:terms,mamma:query,alltheweb:q,gigablast:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,aol:q,club-internet:query,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,netsprint:q,google.interia:q,szukacz:q,yam:k,pchome:q,kvasir:q,sesam:q,ozu:q,terra:query,nostrum:query,mynet:q,ekolay:q,search.ilse:search_for,rambler:words");
g.u=w;g.jb=v;g.h="/";g.U=100;g.ma="/__utm.gif";g.ea=1;g.fa=1;g.v="|";g.da=1;g.ba=1;g.Pa=1;g.c="auto";g.I=1;g.pa=1000;g.Ic=10;g.Pb=10;g.Jc=0.2;g.o=w;g.a=document;g.b=window};$.Gb=function(g){var i=this,b=g;i.r=(new Date).getTime();var k=[E,F,H,K,I,L,M];function c(j,m,q,a){var d="",l=0;d=Q(j,"2"+m,";");if(!N(d)){j=d.indexOf("^"+q+".");if(j<0)return["",0];d=P(d,j+q[y]+2);if(d.indexOf("^")>0)d=d.split("^")[0];q=d.split(":");d=q[1];l=parseInt(q[0],10);if(!a&&l<i.r)d=""}if(N(d))d="";return[d,l]}i.k=function(){var j=b.a[z];return b.o?i.Wb(j,b.o):j};i.Wb=function(j,m){var q=[],a,d;for(a=0;a<k[y];a++){d=c(j,k[a],m)[0];N(d)||(q[q[y]]=k[a]+d+";")}return q.join("")};i.l=function(j,
m,q){var a=q>0?h(q):"";if(b.o){m=i.lc(b.a[z],j,b.o,m,q);j="2"+j;a=e(q)}r(j+m,a)};i.lc=function(j,m,q,a,d){var l="";d=p(d);a=n([a,i.r+d*1],q);l=Q(j,"2"+m,";");if(!N(l)){j=n(c(j,m,q,s),q);l=ha(l.split(j),"");return l=a+l}return a};function p(j){return j||$.t}function n(j,m){return"^"+ha([[m,j[1]].join("."),j[0]],":")}function r(j,m){b.a[z]=j+"; path="+b.h+"; "+m+i.db()}i.db=function(){return N(b.c)?"":"domain="+b.c+";"};function e(j){return j>0?f():""}function f(){return h($.t)}function h(j){var m=
new Date;j=new Date(m.getTime()+j);return"expires="+j.toGMTString()+"; "}};$.$=function(g){var i,b,k,c,p,n,r,e=this,f,h=g;e.j=new $.Gb(g);function j(a){a=a instanceof Array?a.join("."):"";return N(a)?"-":a}function m(a,d){var l=[];if(!N(a)){l=a.split(".");if(d)for(a=0;a<l[y];a++)S(l[a])||(l[a]="-")}return l}function q(a,d,l){var t=e.M,o,u;for(o=0;o<t[y];o++){u=t[o][0];u+=N(d)?d:d+t[o][4];t[o][2](Q(a,u,l))}}e.ib=function(){return w==f||f==e.P()};e.k=function(){return e.j.k()};e.ka=function(){return p?p:"-"};e.tb=function(a){p=a};e.xa=function(a){f=S(a)?a*1:"-"};e.ja=function(){return j(n)};
e.ya=function(a){n=m(a)};e.Vb=function(){e.j.l(I,"",-1)};e.mc=function(){return f?f:"-"};e.db=function(){return N(h.c)?"":"domain="+h.c+";"};e.ha=function(){return j(i)};e.rb=function(a){i=m(a,1)};e.C=function(){return j(b)};e.wa=function(a){b=m(a,1)};e.ia=function(){return j(k)};e.sb=function(a){k=m(a,1)};e.la=function(){return j(c)};e.ub=function(a){c=m(a);for(a=0;a<c[y];a++)if(a<4&&!S(c[a]))c[a]="-"};e.gc=function(){return r};e.Dc=function(a){r=a};e.Sb=function(){i=[];b=[];k=[];c=[];p=w;n=[];f=
w};e.P=function(){var a="",d;for(d=0;d<e.M[y];d++)a+=e.M[d][1]();return ia(a)};e.sa=function(a){var d=e.k(),l=v;if(d){q(d,a,";");e.xa(e.P());l=s}return l};e.zc=function(a){q(a,"",C);e.xa(Q(a,da,C))};e.Gc=function(){var a=e.M,d=[],l;for(l=0;l<a[y];l++)W(d,a[l][0]+a[l][1]());W(d,da+e.P());return d.join(C)};e.Mc=function(a,d){var l=e.M,t=h.h;e.sa(a);h.h=d;for(a=0;a<l[y];a++)N(l[a][1]())||l[a][3]();h.h=t};e.Bb=function(){e.j.l(E,e.ha(),$.t)};e.Ca=function(){e.j.l(F,e.C(),h.qb*1000)};e.Cb=function(){e.j.l(H,
e.ia(),0)};e.Ea=function(){e.j.l(K,e.la(),h.Wa*1000)};e.Db=function(){e.j.l(L,e.ka(),$.t)};e.Da=function(){e.j.l(I,e.ja(),$.t)};e.Nc=function(){e.j.l(M,e.gc(),0)};e.M=[[E,e.ha,e.rb,e.Bb,"."],[F,e.C,e.wa,e.Ca,""],[H,e.ia,e.sb,e.Cb,""],[L,e.ka,e.tb,e.Db,""],[K,e.la,e.ub,e.Ea,"."],[I,e.ja,e.ya,e.Da,"."]]};$.Jb=function(g){var i=this,b=g,k=new $.$(b),c=function(){},p=function(n){var r=(new Date).getTime(),e;e=(r-n[3])*(b.Jc/1000);if(e>=1){n[2]=Math.min(Math.floor(n[2]*1+e),b.Pb);n[3]=r}return n};i.H=function(n,r,e,f,h,j){var m,q=b.I,a=b.a[A];k.sa(e);m=Y(k.C(),".");if(m[1]<500||f){if(h)m=p(m);if(f||!h||m[2]>=1){if(!f&&h)m[2]=m[2]*1-1;m[1]=m[1]*1+1;n="?utmwv="+ca+"&utmn="+Z()+(N(a.hostname)?"":"&utmhn="+T(a.hostname))+(b.U==100?"":"&utmsp="+T(b.U))+n;if(0==q||2==q){f=2==q?c:j||c;i.Ya(b.ma+n,f)}if(1==
q||2==q){n=("https:"==a.protocol?proxy_url:proxy_url)+n+"&utmac="+r+"&utmcc="+i.ac(e);if(ka)n+="&gaq=1";i.Ya(n,j)}}}k.wa(m.join("."));k.Ca()};i.Ya=function(n,r){var e=new Image(1,1);e.src=n;e.onload=function(){e.onload=null;(r||c)()}};i.ac=function(n){var r=[],e=[E,K,I,L],f,h=k.k(),j;for(f=0;f<e[y];f++){j=Q(h,e[f]+n,";");if(!N(j)){if(e[f]==I){j=Y(j.split(n+".")[1],"|")[0];if(N(j))continue;j=n+"."+j}W(r,e[f]+j+";")}}return T(r.join("+"))}};$.n=function(){var g=this;g.Y=[];g.fb=function(i){var b,k=g.Y,c;for(c=0;c<k.length;c++)b=i==k[c].q?k[c]:b;return b};g.Ob=function(i,b,k,c,p,n,r,e){var f=g.fb(i);if(w==f){f=new $.n.Mb(i,b,k,c,p,n,r,e);W(g.Y,f)}else{f.Oa=b;f.zb=k;f.yb=c;f.vb=p;f.Ua=n;f.xb=r;f.Xa=e}return f}};$.n.Lb=function(g,i,b,k,c,p){var n=this;n.Ab=g;n.za=i;n.D=b;n.Sa=k;n.nb=c;n.ob=p;n.Aa=function(){return"&"+["utmt=item","tid="+T(n.Ab),"ipc="+T(n.za),"ipn="+T(n.D),"iva="+T(n.Sa),"ipr="+T(n.nb),"iqt="+T(n.ob)].join("&utm")}};
$.n.Mb=function(g,i,b,k,c,p,n,r){var e=this;e.q=g;e.Oa=i;e.zb=b;e.yb=k;e.vb=c;e.Ua=p;e.xb=n;e.Xa=r;e.R=[];e.Nb=function(f,h,j,m,q){var a=e.hc(f),d=e.q;if(w==a)W(e.R,new $.n.Lb(d,f,h,j,m,q));else{a.Ab=d;a.za=f;a.D=h;a.Sa=j;a.nb=m;a.ob=q}};e.hc=function(f){var h,j=e.R,m;for(m=0;m<j.length;m++)h=f==j[m].za?j[m]:h;return h};e.Aa=function(){return"&"+["utmt=tran","id="+T(e.q),"st="+T(e.Oa),"to="+T(e.zb),"tx="+T(e.yb),"sp="+T(e.vb),"ci="+T(e.Ua),"rg="+T(e.xb),"co="+T(e.Xa)].join("&utmt")}};$.Eb=function(g){var i=g,b=i.b,k=this,c="-";k.V=b.screen;k.Qa=!k.V&&b.java?java.awt.Toolkit.getDefaultToolkit():w;k.e=b.navigator;k.W=c;k.va=c;k.Ta=c;k.oa=c;k.na=1;k.cb=c;function p(){var n,r,e;r="ShockwaveFlash";var f="$version",h=k.e?k.e.plugins:w;if(h&&h[y]>0)for(n=0;n<h[y]&&!e;n++){r=h[n];if(V(r.name,"Shockwave Flash"))e=r.description.split("Shockwave Flash ")[1]}else{r=r+"."+r;try{n=new ActiveXObject(r+".7");e=n.GetVariable(f)}catch(j){}if(!e)try{n=new ActiveXObject(r+".6");e="WIN 6,0,21,0";
n.AllowScriptAccess="always";e=n.GetVariable(f)}catch(m){}if(!e)try{n=new ActiveXObject(r);e=n.GetVariable(f)}catch(q){}if(e){e=Y(e.split(" ")[1],",");e=e[0]+"."+e[1]+" r"+e[2]}}return e?e:c}k.bc=function(){var n;if(b.screen){k.W=k.V.width+"x"+k.V.height;k.va=k.V.colorDepth+"-bit"}else if(k.Qa)try{n=k.Qa.getScreenSize();k.W=n.width+"x"+n.height}catch(r){}k.oa=X(k.e&&k.e.language?k.e.language:k.e&&k.e.browserLanguage?k.e.browserLanguage:c);k.na=k.e&&k.e.javaEnabled()?1:0;k.cb=i.fa?p():c;k.Ta=T(i.a.characterSet?
i.a.characterSet:i.a.charset?i.a.charset:c)};k.Hc=function(){return C+"utm"+["cs="+T(k.Ta),"sr="+k.W,"sc="+k.va,"ul="+k.oa,"je="+k.na,"fl="+T(k.cb)].join("&utm")};k.$b=function(){var n=i.a,r=b.history[y];n=k.e.appName+k.e.version+k.oa+k.e.platform+k.e.userAgent+k.na+k.W+k.va+(n[z]?n[z]:"")+(n.referrer?n.referrer:"");for(var e=n[y];r>0;)n+=r--^e++;return ia(n)}};$.m=function(g,i,b,k){var c=k,p=this;p.d=g;p.pb=i;p.r=b;function n(f){return N(f)||"0"==f||!V(f,"://")}function r(f){var h="";f=X(f.split("://")[1]);if(V(f,"/")){f=f.split("/")[1];if(V(f,"?"))h=f.split("?")[0]}return h}function e(f){var h="";h=X(f.split("://")[1]);if(V(h,"/"))h=h.split("/")[0];return h}p.jc=function(f){var h=p.eb();return new $.m.w(Q(f,c.Ia+D,C),Q(f,c.La+D,C),Q(f,c.Na+D,C),p.Q(f,c.Ga,"(not set)"),p.Q(f,c.Ja,"(not set)"),p.Q(f,c.Ma,h&&!N(h.K)?U(h.K):w),p.Q(f,c.Ha,w))};p.hb=function(f){var h=
e(f),j=r(f);if(V(h,"google")){f=f.split("?").join(C);if(V(f,C+c.oc+D))if(j==c.nc)return s}return v};p.eb=function(){var f,h=p.pb,j,m,q=c.T;if(!(n(h)||p.hb(h))){f=e(h);for(j=0;j<q[y];j++){m=q[j];if(V(f,X(m.$a))){h=h.split("?").join(C);if(V(h,C+m.lb+D)){f=h.split(C+m.lb+D)[1];if(V(f,C))f=f.split(C)[0];return new $.m.w(w,m.$a,w,"(organic)","organic",f,w)}}}}};p.Q=function(f,h,j){f=Q(f,h+D,C);return j=!N(f)?U(f):!N(j)?j:"-"};p.uc=function(f){var h=c.ra,j=v,m;if(f&&"organic"==f.S){f=X(U(f.K));for(m=0;m<
h[y];m++)j=j||X(h[m])==f}return j};p.ic=function(){var f="",h="";f=p.pb;if(!(n(f)||p.hb(f))){f=f.split("://")[1];if(V(f,"/")){h=P(f,f.indexOf("/"));h=h.split("?")[0];f=X(f.split("/")[0])}if(0==f.indexOf("www."))f=P(f,4);return new $.m.w(w,f,w,"(referral)","referral",w,h)}};p.Xb=function(f){var h="";if(c.aa){h=f&&f.hash?f.href.substring(f.href.indexOf("#")):"";h=""!=h?h+C:h}h+=f.search;return h};p.ec=function(){return new $.m.w(w,"(direct)",w,"(direct)","(none)",w,w)};p.vc=function(f){var h=v,j,m=
c.ta;if(f&&"referral"==f.S){f=X(T(f.X));for(j=0;j<m[y];j++)h=h||V(f,X(m[j]))}return h};p.L=function(f){return w!=f&&f.kb()};p.cc=function(f,h){var j="",m="-",q,a=0,d,l,t=p.d;if(!f)return"";l=f.k();j=p.Xb(c.a[A]);if(c.z&&f.ib()){m=f.la();if(!N(m)&&!V(m,";")){f.Ea();return""}}m=Q(l,K+t+".",";");q=p.jc(j);if(p.L(q)){j=Q(j,c.Ka+D,C);if("1"==j&&!N(m))return""}if(!p.L(q)){q=p.eb();if(!N(m)&&p.uc(q))return""}if(!p.L(q)&&h){q=p.ic();if(!N(m)&&p.vc(q))return""}if(!p.L(q))if(N(m)&&h)q=p.ec();if(!p.L(q))return"";
if(!N(m)){a=m.split(".");d=new $.m.w;d.Zb(a.slice(4).join("."));d=X(d.Ba())==X(q.Ba());a=a[3]*1}if(!d||h){h=Q(l,E+t+".",";");l=h.lastIndexOf(".");h=l>9?P(h,l+1)*1:0;a++;h=0==h?1:h;f.ub([t,p.r,h,a,q.Ba()].join("."));f.Ea();return C+"utmcn=1"}else return C+"utmcr=1"}};
$.m.w=function(g,i,b,k,c,p,n){var r=this;r.q=g;r.X=i;r.ca=b;r.D=k;r.S=c;r.K=p;r.Va=n;r.Ba=function(){var e=[],f=[["cid",r.q],["csr",r.X],["gclid",r.ca],["ccn",r.D],["cmd",r.S],["ctr",r.K],["cct",r.Va]],h,j;if(r.kb())for(h=0;h<f[y];h++)if(!N(f[h][1])){j=f[h][1].split("+").join("%20");j=j.split(" ").join("%20");W(e,"utm"+f[h][0]+D+j)}return e.join("|")};r.kb=function(){return!(N(r.q)&&N(r.X)&&N(r.ca))};r.Zb=function(e){var f=function(h){return U(Q(e,"utm"+h+D,"|"))};r.q=f("cid");r.X=f("csr");r.ca=f("gclid");
r.D=f("ccn");r.S=f("cmd");r.K=f("ctr");r.Va=f("cct")}};$.Hb=function(g,i,b,k){var c=this,p=i,n=D,r=g,e=k;c.O=b;c.qa="";c.p={};c.tc=function(){var h;h=Y(Q(c.O.k(),I+p+".",";"),p+".")[1];if(!N(h)){h=h.split("|");f(1,c.p,h[1]);c.qa=h[0];c.Z()}};c.Z=function(){c.Qb();var h=c.qa,j,m,q="";for(j in c.p)if((m=c.p[j])&&1===m[2])q+=j+n+m[0]+n+m[1]+n+1+",";N(q)||(h+="|"+q);if(N(h))c.O.Vb();else{c.O.ya(p+"."+h);c.O.Da()}};c.Ec=function(h){c.qa=h;c.Z()};c.Cc=function(h,j,m,q){if(1!=q&&2!=q&&3!=q)q=3;var a=v;if(j&&m&&h>0&&h<=r.mb){j=T(j);m=T(m);if(j[y]+m[y]<=64){c.p[h]=
[j,m,q];c.Z();a=s}}return a};c.dc=function(h){if(h=c.p[h])return{value:h[1],scope:h[2]}};c.Ub=function(h){var j=c.p;if(j[h]){delete j[h];c.Z()}};c.Qb=function(){e._clearKey(8);e._clearKey(9);e._clearKey(11);var h=c.p,j,m;for(m in h)if(j=h[m]){e._setKey(8,m,j[0]);e._setKey(9,m,j[1]);(j=j[2])&&3!=j&&e._setKey(11,m,""+j)}};function f(h,j,m){var q;if(!N(m)){m=m.split(",");for(var a=0;a<m[y];a++){q=m[a];if(!N(q)){q=q.split(n);if(q[y]==4)j[q[0]]=[q[1],q[2],h]}}}}};$.N=function(){var g=this,i={},b="k",k="v",c=[b,k],p="(",n=")",r="*",e="!",f="'",h={};h[f]="'0";h[n]="'1";h[r]="'2";h[e]="'3";var j=1;function m(o,u,x,B){if(w==i[o])i[o]={};if(w==i[o][u])i[o][u]=[];i[o][u][x]=B}function q(o,u,x){return w!=i[o]&&w!=i[o][u]?i[o][u][x]:w}function a(o,u){if(w!=i[o]&&w!=i[o][u]){i[o][u]=w;u=s;var x;for(x=0;x<c[y];x++)if(w!=i[o][c[x]]){u=v;break}if(u)i[o]=w}}function d(o){var u="",x=v,B,O;for(B=0;B<c[y];B++){O=o[c[B]];if(w!=O){if(x)u+=c[B];u+=l(O);x=v}else x=s}return u}
function l(o){var u=[],x,B;for(B=0;B<o[y];B++)if(w!=o[B]){x="";if(B!=j&&w==o[B-1])x+=B.toString()+e;x+=t(o[B]);W(u,x)}return p+u.join(r)+n}function t(o){var u="",x,B,O;for(x=0;x<o[y];x++){B=o.charAt(x);O=h[B];u+=w!=O?O:B}return u}g.qc=function(o){return w!=i[o]};g.G=function(){var o="",u;for(u in i)if(w!=i[u])o+=u.toString()+d(i[u]);return o};g.Ac=function(o){if(o==w)return g.G();var u=o.G(),x;for(x in i)if(w!=i[x]&&!o.qc(x))u+=x.toString()+d(i[x]);return u};g._setKey=function(o,u,x){if(typeof x!=
"string")return v;m(o,b,u,x);return s};g._setValue=function(o,u,x){if(typeof x!="number"&&(w==Number||!(x instanceof Number))||Math.round(x)!=x||x==NaN||x==Infinity)return v;m(o,k,u,x.toString());return s};g._getKey=function(o,u){return q(o,b,u)};g._getValue=function(o,u){return q(o,k,u)};g._clearKey=function(o){a(o,b)};g._clearValue=function(o){a(o,k)}};$.Ib=function(g,i){var b=this;b.Pc=i;b.xc=g;b._trackEvent=function(k,c,p){return i._trackEvent(b.xc,k,c,p)}};$.Kb=function(g,i){var b=this,k=w,c=new $.Fb,p=v,n=w;b.b=window;b.r=Math.round((new Date).getTime()/1000);b.s=g||"UA-XXXXX-X";b.Za=c.a.referrer;b.ga=w;b.f=w;b.B=w;b.F=v;b.A=w;b.Ra="";b.g=w;b.ab=w;b.d=w;b.i=w;c.o=i?T(i):w;function r(){if("auto"==c.c){var a=c.a.domain;if("www."==P(a,0,4))a=P(a,4);c.c=a}c.c=X(c.c)}function e(){var a=c.c,d=a.indexOf("www.google.")*a.indexOf(".google.")*a.indexOf("google.");return d||"/"!=c.h||a.indexOf("google.org")>-1}function f(a,d,l){if(N(a)||N(d)||N(l))return"-";
a=Q(a,E+b.d+".",d);if(!N(a)){a=a.split(".");a[5]=a[5]?a[5]*1+1:1;a[3]=a[4];a[4]=l;a=a.join(".")}return a}function h(){return"file:"!=c.a[A].protocol&&e()}function j(a){if(!a||""==a)return"";for(;ea(a.charAt(0));)a=P(a,1);for(;ea(a.charAt(a[y]-1));)a=P(a,0,a[y]-1);return a}function m(a,d,l,t){if(!N(a())){d(t?U(a()):a());V(a(),";")||l()}}function q(a){var d,l=""!=a&&c.a[A].host!=a;if(l)for(d=0;d<c.u[y];d++)l=l&&ga(X(a),X(c.u[d]))==-1;return l}b.wc=function(){var a=v;if(b.B)a=b.B.match(/^[0-9a-z-_.]{10,1200}$/i);
return a};b.kc=function(){return Z()^b.A.$b()&2147483647};b.fc=function(){if(!c.c||""==c.c||"none"==c.c){c.c="";return 1}r();return c.Pa?ia(c.c):1};b.Yb=function(a,d){if(N(a))a="-";else{d+=c.h&&"/"!=c.h?c.h:"";d=a.indexOf(d);a=d>=0&&d<=8?"0":"["==a.charAt(0)&&"]"==a.charAt(a[y]-1)?"-":a}return a};b.ua=function(a){var d="",l=c.a;d+=c.da?b.A.Hc():"";d+=c.ba?b.Ra:"";d+=c.ea&&!N(l.title)?"&utmdt="+T(l.title):"";d+="&utmhid="+ja()+"&utmr="+T(b.ga)+"&utmp="+T(b.Bc(a));return d};b.Bc=function(a){var d=c.a[A];
return a=w!=a&&""!=a?T(a,s):T(d.pathname+d.search,s)};b.Kc=function(a){if(b.J()){var d="";if(b.g!=w&&b.g.G()[y]>0)d+="&utme="+T(b.g.G());d+=b.ua(a);k.H(d,b.s,b.d)}};b.Tb=function(){var a=new $.$(c);return a.sa(b.d)?a.Gc():w};b._getLinkerUrl=function(a,d){var l=a.split("#"),t=a,o=b.Tb();if(o)if(d&&1>=l[y])t+="#"+o;else if(!d||1>=l[y])if(1>=l[y])t+=(V(a,"?")?C:"?")+o;else t=l[0]+(V(a,"?")?C:"?")+o+"#"+l[1];return t};b.wb=function(){var a;if(b.wc()){b.i.Dc(b.B);b.i.Nc();$._gasoDomain=c.c;$._gasoCPath=
c.h;a=c.a.createElement("script");a.type="text/javascript";a.id="_gasojs";a.src=""+b.B+C+Z();c.a.getElementsByTagName("head")[0].appendChild(a)}};b.pc=function(){var a=b.r,d=b.i,l=d.k(),t=b.d+"",o=c.b,u=o?o.gaGlobal:w,x,B=V(l,E+t+"."),O=V(l,F+t),la=V(l,H+t),G,J=[],R="",fa=v;l=N(l)?"":l;if(c.z){x=c.a[A]&&c.a[A].hash?c.a[A].href.substring(c.a[A].href.indexOf("#")):"";if(c.aa&&!N(x))R=x+C;R+=c.a[A].search;if(!N(R)&&V(R,E)){d.zc(R);d.ib()||d.Sb();
G=d.ha()}m(d.ka,d.tb,d.Db,true);m(d.ja,d.ya,d.Da)}if(N(G))if(B)if(!O||!la){G=f(l,";",a);b.F=s}else{G=Q(l,E+t+".",";");J=Y(Q(l,F+t,";"),".")}else{G=ha([t,b.kc(),a,a,a,1],".");fa=b.F=s}else if(N(d.C())||N(d.ia())){G=f(R,C,a);b.F=s}else{J=Y(d.C(),".");t=J[0]}G=G.split(".");if(o&&u&&u.dh==t&&!c.o){G[4]=u.sid?u.sid:G[4];if(fa){G[3]=u.sid?u.sid:G[4];if(u.vid){a=u.vid.split(".");G[1]=a[0];G[2]=a[1]}}}d.rb(G.join("."));J[0]=t;J[1]=J[1]?J[1]:0;J[2]=w!=J[2]?J[2]:c.Ic;J[3]=J[3]?J[3]:G[4];d.wa(J.join("."));d.sb(t);
N(d.mc())||d.xa(d.P());d.Bb();d.Ca();d.Cb()};b.rc=function(){k=new $.Jb(c)};b._initData=function(){var a;if(!p){if(!b.A){b.A=new $.Eb(c);b.A.bc()}b.d=b.fc();b.i=new $.$(c);b.g=new $.N;n=new $.Hb(c,b.d,b.i,b.g);b.rc()}if(h()){b.pc();n.tc()}if(!p){if(h()){b.ga=b.Yb(b.Za,c.a.domain);if(c.ba){a=new $.m(b.d,b.ga,b.r,c);b.Ra=a.cc(b.i,b.F)}}b.ab=new $.N;p=s}$.gb||b.sc()};b._visitCode=function(){b._initData();var a=Q(b.i.k(),E+b.d+".",";");a=a.split(".");return a[y]<4?"":a[1]};b._cookiePathCopy=function(a){b._initData();
b.i&&b.i.Mc(b.d,a)};b.sc=function(){var a=c.a[A].hash;if(a&&1==a.indexOf("gaso="))a=Q(a,"gaso=",C);else a=(a=c.b.name)&&0<=a.indexOf("gaso=")?Q(a,"gaso=",C):Q(b.i.k(),M,";");if(a[y]>=10){b.B=a;c.b.addEventListener?c.b.addEventListener("load",b.wb,v):c.b.attachEvent("onload",b.wb)}$.gb=s};b.J=function(){return b._visitCode()%10000<c.U*100};b.Fc=function(){var a,d,l=c.a.links;if(!c.jb){a=c.a.domain;if("www."==P(a,0,4))a=P(a,4);c.u.push("."+a)}for(a=0;a<l[y]&&(c.pa==-1||a<c.pa);a++){d=l[a];if(q(d.host))if(!d.gatcOnclick){d.gatcOnclick=
d.onclick?d.onclick:b.yc;d.onclick=function(t){var o=!this.target||this.target=="_self"||this.target=="_top"||this.target=="_parent";o=o&&!b.Rb(t);b.Lc(t,this,o);return o?v:this.gatcOnclick?this.gatcOnclick(t):s}}}};b.yc=function(){};b._trackPageview=function(a){if(h()){b._initData();c.u&&b.Fc();b.Kc(a);b.F=v}};b._trackTrans=function(){var a=b.d,d=[],l,t,o;b._initData();if(b.f&&b.J()){for(l=0;l<b.f.Y[y];l++){t=b.f.Y[l];W(d,t.Aa());for(o=0;o<t.R[y];o++)W(d,t.R[o].Aa())}for(l=0;l<d[y];l++)k.H(d[l],
b.s,a,s)}};b._setTrans=function(){var a=c.a,d,l,t;a=a.getElementById?a.getElementById("utmtrans"):a.utmform&&a.utmform.utmtrans?a.utmform.utmtrans:w;b._initData();if(a&&a.value){b.f=new $.n;t=a.value.split("UTM:");c.v=!c.v||""==c.v?"|":c.v;for(a=0;a<t[y];a++){t[a]=j(t[a]);d=t[a].split(c.v);for(l=0;l<d[y];l++)d[l]=j(d[l]);if("T"==d[0])b._addTrans(d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]);else"I"==d[0]&&b._addItem(d[1],d[2],d[3],d[4],d[5],d[6])}}};b._addTrans=function(a,d,l,t,o,u,x,B){b.f=b.f?b.f:new $.n;
return b.f.Ob(a,d,l,t,o,u,x,B)};b._addItem=function(a,d,l,t,o,u){var x;b.f=b.f?b.f:new $.n;(x=b.f.fb(a))||(x=b._addTrans(a,"","","","","","",""));x.Nb(d,l,t,o,u)};b._setVar=function(a){if(a&&""!=a&&e()){b._initData();n.Ec(T(a));b.J()&&k.H("&utmt=var",b.s,b.d)}};b._setCustomVar=function(a,d,l,t){b._initData();return n.Cc(a,d,l,t)};b._deleteCustomVar=function(a){b._initData();n.Ub(a)};b._getCustomVar=function(a){b._initData();return n.dc(a)};b._setMaxCustomVariables=function(a){c.mb=a};b._link=function(a,
d){if(c.z&&a){b._initData();c.a[A].href=b._getLinkerUrl(a,d)}};b._linkByPost=function(a,d){if(c.z&&a&&a.action){b._initData();a.action=b._getLinkerUrl(a.action,d)}};b._setXKey=function(a,d,l){b.g._setKey(a,d,l)};b._setXValue=function(a,d,l){b.g._setValue(a,d,l)};b._getXKey=function(a,d){return b.g._getKey(a,d)};b._getXValue=function(a,d){return b.g.getValue(a,d)};b._clearXKey=function(a){b.g._clearKey(a)};b._clearXValue=function(a){b.g._clearValue(a)};b._createXObj=function(){b._initData();return new $.N};
b._sendXEvent=function(a){var d="";b._initData();if(b.J()){d+="&utmt=event&utme="+T(b.g.Ac(a))+b.ua();k.H(d,b.s,b.d,v,s)}};b._createEventTracker=function(a){b._initData();return new $.Ib(a,b)};b._trackEvent=function(a,d,l,t){var o=b.ab;if(w!=a&&w!=d&&""!=a&&""!=d){o._clearKey(5);o._clearValue(5);(a=o._setKey(5,1,a)&&o._setKey(5,2,d)&&(w==l||o._setKey(5,3,l))&&(w==t||o._setValue(5,1,t)))&&b._sendXEvent(o)}else a=v;return a};b.Lc=function(a,d,l){b._initData();if(b.J()){var t=new $.N;t._setKey(6,1,d.href);
var o=l?function(){b.bb(a,d)}:w;k.H("&utmt=event&utme="+T(t.G())+b.ua(),b.s,b.d,v,s,o);if(l){var u=this;c.b.setTimeout(function(){u.bb(a,d)},500)}}};b.bb=function(a,d){if(!a)a=c.b.event;var l=s;if(d.gatcOnclick)l=d.gatcOnclick(a);if(l||typeof l=="undefined")if(!d.target||d.target=="_self")c.b[A]=d.href;else if(d.target=="_top")c.b.top.document[A]=d.href;else if(d.target=="_parent")c.b.parent.document[A]=d.href};b.Rb=function(a){if(!a)a=c.b.event;var d=a.shiftKey||a.ctrlKey||a.altKey;if(!d)if(a.modifiers&&
c.b.Event)d=a.modifiers&c.b.Event.CONTROL_MASK||a.modifiers&c.b.Event.SHIFT_MASK||a.modifiers&c.b.Event.ALT_MASK;return d};b.Oc=function(){return c};b._setDomainName=function(a){c.c=a};b._addOrganic=function(a,d,l){c.T.splice(l?0:c.T.length,0,new $.Fa(a,d))};b._clearOrganic=function(){c.T=[]};b._addIgnoredOrganic=function(a){W(c.ra,a)};b._clearIgnoredOrganic=function(){c.ra=[]};b._addIgnoredRef=function(a){W(c.ta,a)};b._clearIgnoredRef=function(){c.ta=[]};b._setAllowHash=function(a){c.Pa=a?1:0};b._setCampaignTrack=
function(a){c.ba=a?1:0};b._setClientInfo=function(a){c.da=a?1:0};b._getClientInfo=function(){return c.da};b._setCookiePath=function(a){c.h=a};b._setTransactionDelim=function(a){c.v=a};b._setCookieTimeout=function(a){c.Wa=a};b._setDetectFlash=function(a){c.fa=a?1:0};b._getDetectFlash=function(){return c.fa};b._setDetectTitle=function(a){c.ea=a?1:0};b._getDetectTitle=function(){return c.ea};b._setLocalGifPath=function(a){c.ma=a};b._getLocalGifPath=function(){return c.ma};b._setLocalServerMode=function(){c.I=
0};b._setRemoteServerMode=function(){c.I=1};b._setLocalRemoteServerMode=function(){c.I=2};b._getServiceMode=function(){return c.I};b._setSampleRate=function(a){c.U=a};b._setSessionTimeout=function(a){c.qb=a};b._setAllowLinker=function(a){c.z=a?1:0};b._setAllowAnchor=function(a){c.aa=a?1:0};b._setCampNameKey=function(a){c.Ga=a};b._setCampContentKey=function(a){c.Ha=a};b._setCampIdKey=function(a){c.Ia=a};b._setCampMediumKey=function(a){c.Ja=a};b._setCampNOKey=function(a){c.Ka=a};b._setCampSourceKey=
function(a){c.La=a};b._setCampTermKey=function(a){c.Ma=a};b._setCampCIdKey=function(a){c.Na=a};b._getAccount=function(){return b.s};b._setAccount=function(a){b.s=a};b._setNamespace=function(a){c.o=a?T(a):w};b._getVersion=function(){return ca};b._setAutoTrackOutbound=function(a){c.u=[];if(a)c.u=a};b._setTrackOutboundSubdomains=function(a){c.jb=a};b._setHrefExamineLimit=function(a){c.pa=a};b._setReferrerOverride=function(a){b.Za=a};b._setCookiePersistence=function(a){$.t=a}};
            $._getTracker=function(g,i){return new $.Kb(g,i)};window[aa]=$;var ka=window[ba];})();
(function(){function diff_match_patch(){function a(){for(var b=0,c=1,d=2;c!=d;){
b++;c=d;d<<=1;}return b;}this.Diff_Timeout=1;this.Diff_EditCost=4;this.Match_Threshold=0.5;
this.Match_Distance=1000;this.Patch_DeleteThreshold=0.5;this.Patch_Margin=4;this.Match_MaxBits=a();
}diff_match_patch.prototype.diff_main=function(a,b,c,d){if(typeof d=="undefined"){
d=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+this.Diff_Timeout*1000;
}if(a==null||b==null){throw Error("Null input. (diff_main)");}if(a==b){if(a){return [[0,a]];
}return [];}if(typeof c=="undefined"){c=true;}var e=c,f=this.diff_commonPrefix(a,b);
c=a.substring(0,f);a=a.substring(f);b=b.substring(f);f=this.diff_commonSuffix(a,b);
var h=a.substring(a.length-f);a=a.substring(0,a.length-f);b=b.substring(0,b.length-f);
a=this.diff_compute_(a,b,e,d);c&&a.unshift([0,c]);h&&a.push([0,h]);this.diff_cleanupMerge(a);
return a;};diff_match_patch.prototype.diff_compute_=function(a,b,c,d){var e;if(!a){
return [[1,b]];}if(!b){return [[-1,a]];}e=a.length>b.length?a:b;var f=a.length>b.length?b:a,h=e.indexOf(f);
if(h!=-1){e=[[1,e.substring(0,h)],[0,f],[1,e.substring(h+f.length)]];if(a.length>b.length){
e[0][0]=e[2][0]=-1;}return e;}if(f.length==1){return [[-1,a],[1,b]];}if(e=this.diff_halfMatch_(a,b)){
var g=e[0];a=e[1];f=e[2];b=e[3];e=e[4];g=this.diff_main(g,f,c,d);d=this.diff_main(a,b,c,d);
return g.concat([[0,e]],d);}if(c&&(a.length<100||b.length<100)){c=false;}if(c){g=this.diff_linesToChars_(a,b);
a=g[0];b=g[1];g=g[2];}e=this.diff_bisect_(a,b,d);if(c){this.diff_charsToLines_(e,g);
this.diff_cleanupSemantic(e);e.push([0,""]);b=a=c=0;for(f=g="";c<e.length;){switch(e[c][0]){
case 1:b++;f+=e[c][1];break;case -1:a++;g+=e[c][1];break;case 0:if(a>=1&&b>=1){g=this.diff_main(g,f,false,d);
e.splice(c-a-b,a+b);c=c-a-b;for(a=g.length-1;a>=0;a--){e.splice(c,0,g[a]);}c+=g.length;
}a=b=0;f=g="";}c++;}e.pop();}return e;};diff_match_patch.prototype.diff_bisect_=function(a,b,c){
for(var d=a.length,e=b.length,f=Math.ceil((d+e)/2),h=f,g=2*f,j=Array(g),i=Array(g),k=0;k<g;k++){
j[k]=-1;i[k]=-1;}j[h+1]=0;i[h+1]=0;k=d-e;for(var l=k%2!=0,s=0,p=0,q=0,t=0,r=0;r<f;r++){
if((new Date).getTime()>c){break;}for(var n=-r+s;n<=r-p;n+=2){var m=h+n,o;o=n==-r||n!=r&&j[m-1]<j[m+1]?j[m+1]:j[m-1]+1;
for(var u=o-n;o<d&&u<e&&a.charAt(o)==b.charAt(u);){o++;u++;}j[m]=o;if(o>d){p+=2;
}else{if(u>e){s+=2;}else{if(l){m=h+k-n;if(m>=0&&m<g&&i[m]!=-1){var v=d-i[m];if(o>=v){
return this.diff_bisectSplit_(a,b,o,u,c);}}}}}}for(n=-r+q;n<=r-t;n+=2){m=h+n;v=n==-r||n!=r&&i[m-1]<i[m+1]?i[m+1]:i[m-1]+1;
for(o=v-n;v<d&&o<e&&a.charAt(d-v-1)==b.charAt(e-o-1);){v++;o++;}i[m]=v;if(v>d){t+=2;
}else{if(o>e){q+=2;}else{if(!l){m=h+k-n;if(m>=0&&m<g&&j[m]!=-1){o=j[m];u=h+o-m;v=d-v;
if(o>=v){return this.diff_bisectSplit_(a,b,o,u,c);}}}}}}}return [[-1,a],[1,b]];};
diff_match_patch.prototype.diff_bisectSplit_=function(a,b,c,d,e){var f=a.substring(0,c),h=b.substring(0,d);
a=a.substring(c);b=b.substring(d);f=this.diff_main(f,h,false,e);e=this.diff_main(a,b,false,e);
return f.concat(e);};diff_match_patch.prototype.diff_linesToChars_=function(a,b){
function c(g){for(var j="",i=0,k=-1,l=d.length;k<g.length-1;){k=g.indexOf("\n",i);
if(k==-1){k=g.length-1;}var s=g.substring(i,k+1);i=k+1;if(e.hasOwnProperty?e.hasOwnProperty(s):e[s]!==undefined){
j+=String.fromCharCode(e[s]);}else{j+=String.fromCharCode(l);e[s]=l;d[l++]=s;}}return j;
}var d=[],e={};d[0]="";var f=c(a),h=c(b);return [f,h,d];};diff_match_patch.prototype.diff_charsToLines_=function(a,b){
for(var c=0;c<a.length;c++){for(var d=a[c][1],e=[],f=0;f<d.length;f++){e[f]=b[d.charCodeAt(f)];
}a[c][1]=e.join("");}};diff_match_patch.prototype.diff_commonPrefix=function(a,b){
if(!a||!b||a.charAt(0)!=b.charAt(0)){return 0;}for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;){
if(a.substring(f,e)==b.substring(f,e)){f=c=e;}else{d=e;}e=Math.floor((d-c)/2+c);
}return e;};diff_match_patch.prototype.diff_commonSuffix=function(a,b){if(!a||!b||a.charAt(a.length-1)!=b.charAt(b.length-1)){
return 0;}for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;){if(a.substring(a.length-e,a.length-f)==b.substring(b.length-e,b.length-f)){
f=c=e;}else{d=e;}e=Math.floor((d-c)/2+c);}return e;};diff_match_patch.prototype.diff_commonOverlap_=function(a,b){
var c=a.length,d=b.length;if(c==0||d==0){return 0;}if(c>d){a=a.substring(c-d);}else{
if(c<d){b=b.substring(0,c);}}c=Math.min(c,d);if(a==b){return c;}d=0;for(var e=1;;){
var f=a.substring(c-e);f=b.indexOf(f);if(f==-1){return d;}e+=f;if(f==0||a.substring(c-e)==b.substring(0,e)){
d=e;e++;}}};diff_match_patch.prototype.diff_halfMatch_=function(a,b){function c(i,k,l){
for(var s=i.substring(l,l+Math.floor(i.length/4)),p=-1,q="",t,r,n,m;(p=k.indexOf(s,p+1))!=-1;){
var o=f.diff_commonPrefix(i.substring(l),k.substring(p)),u=f.diff_commonSuffix(i.substring(0,l),k.substring(0,p));
if(q.length<u+o){q=k.substring(p-u,p)+k.substring(p,p+o);t=i.substring(0,l-u);r=i.substring(l+o);
n=k.substring(0,p-u);m=k.substring(p+o);}}return q.length*2>=i.length?[t,r,n,m,q]:null;
}if(this.Diff_Timeout<=0){return null;}var d=a.length>b.length?a:b,e=a.length>b.length?b:a;
if(d.length<4||e.length*2<d.length){return null;}var f=this,h=c(d,e,Math.ceil(d.length/4));
d=c(d,e,Math.ceil(d.length/2));var g;if(!h&&!d){return null;}else{g=d?h?h[4].length>d[4].length?h:d:d:h;
}var j;if(a.length>b.length){h=g[0];d=g[1];e=g[2];j=g[3];}else{e=g[0];j=g[1];h=g[2];
d=g[3];}g=g[4];return [h,d,e,j,g];};diff_match_patch.prototype.diff_cleanupSemantic=function(a){
for(var b=false,c=[],d=0,e=null,f=0,h=0,g=0,j=0,i=0;f<a.length;){if(a[f][0]==0){
c[d++]=f;h=j;g=i;i=j=0;e=a[f][1];}else{if(a[f][0]==1){j+=a[f][1].length;}else{i+=a[f][1].length;
}if(e!==null&&e.length<=Math.max(h,g)&&e.length<=Math.max(j,i)){a.splice(c[d-1],0,[-1,e]);
a[c[d-1]+1][0]=1;d--;d--;f=d>0?c[d-1]:-1;i=j=g=h=0;e=null;b=true;}}f++;}b&&this.diff_cleanupMerge(a);
this.diff_cleanupSemanticLossless(a);for(f=1;f<a.length;){if(a[f-1][0]==-1&&a[f][0]==1){
b=a[f-1][1];c=a[f][1];if(d=this.diff_commonOverlap_(b,c)){a.splice(f,0,[0,c.substring(0,d)]);
a[f-1][1]=b.substring(0,b.length-d);a[f+1][1]=c.substring(d);f++;}f++;}f++;}};diff_match_patch.prototype.diff_cleanupSemanticLossless=function(a){
function b(r,n){if(!r||!n){return 5;}var m=0;if(r.charAt(r.length-1).match(c)||n.charAt(0).match(c)){
m++;if(r.charAt(r.length-1).match(d)||n.charAt(0).match(d)){m++;if(r.charAt(r.length-1).match(e)||n.charAt(0).match(e)){
m++;if(r.match(f)||n.match(h)){m++;}}}}return m;}for(var c=/[^a-zA-Z0-9]/,d=/\s/,e=/[\r\n]/,f=/\n\r?\n$/,h=/^\r?\n\r?\n/,g=1;g<a.length-1;){
if(a[g-1][0]==0&&a[g+1][0]==0){var j=a[g-1][1],i=a[g][1],k=a[g+1][1],l=this.diff_commonSuffix(j,i);
if(l){var s=i.substring(i.length-l);j=j.substring(0,j.length-l);i=s+i.substring(0,i.length-l);
k=s+k;}l=j;s=i;for(var p=k,q=b(j,i)+b(i,k);i.charAt(0)===k.charAt(0);){j+=i.charAt(0);
i=i.substring(1)+k.charAt(0);k=k.substring(1);var t=b(j,i)+b(i,k);if(t>=q){q=t;l=j;
s=i;p=k;}}if(a[g-1][1]!=l){if(l){a[g-1][1]=l;}else{a.splice(g-1,1);g--;}a[g][1]=s;
if(p){a[g+1][1]=p;}else{a.splice(g+1,1);g--;}}}g++;}};diff_match_patch.prototype.diff_cleanupEfficiency=function(a){
for(var b=false,c=[],d=0,e="",f=0,h=false,g=false,j=false,i=false;f<a.length;){if(a[f][0]==0){
if(a[f][1].length<this.Diff_EditCost&&(j||i)){c[d++]=f;h=j;g=i;e=a[f][1];}else{d=0;
e="";}j=i=false;}else{if(a[f][0]==-1){i=true;}else{j=true;}if(e&&(h&&g&&j&&i||e.length<this.Diff_EditCost/2&&h+g+j+i==3)){
a.splice(c[d-1],0,[-1,e]);a[c[d-1]+1][0]=1;d--;e="";if(h&&g){j=i=true;d=0;}else{
d--;f=d>0?c[d-1]:-1;j=i=false;}b=true;}}f++;}b&&this.diff_cleanupMerge(a);};diff_match_patch.prototype.diff_cleanupMerge=function(a){
a.push([0,""]);for(var b=0,c=0,d=0,e="",f="",h;b<a.length;){switch(a[b][0]){case 1:
d++;f+=a[b][1];b++;break;case -1:c++;e+=a[b][1];b++;break;case 0:if(c+d>1){if(c!==0&&d!==0){
h=this.diff_commonPrefix(f,e);if(h!==0){if(b-c-d>0&&a[b-c-d-1][0]==0){a[b-c-d-1][1]+=f.substring(0,h);
}else{a.splice(0,0,[0,f.substring(0,h)]);b++;}f=f.substring(h);e=e.substring(h);
}h=this.diff_commonSuffix(f,e);if(h!==0){a[b][1]=f.substring(f.length-h)+a[b][1];
f=f.substring(0,f.length-h);e=e.substring(0,e.length-h);}}if(c===0){a.splice(b-c-d,c+d,[1,f]);
}else{d===0?a.splice(b-c-d,c+d,[-1,e]):a.splice(b-c-d,c+d,[-1,e],[1,f]);}b=b-c-d+(c?1:0)+(d?1:0)+1;
}else{if(b!==0&&a[b-1][0]==0){a[b-1][1]+=a[b][1];a.splice(b,1);}else{b++;}}c=d=0;
f=e="";}}a[a.length-1][1]===""&&a.pop();c=false;for(b=1;b<a.length-1;){if(a[b-1][0]==0&&a[b+1][0]==0){
if(a[b][1].substring(a[b][1].length-a[b-1][1].length)==a[b-1][1]){a[b][1]=a[b-1][1]+a[b][1].substring(0,a[b][1].length-a[b-1][1].length);
a[b+1][1]=a[b-1][1]+a[b+1][1];a.splice(b-1,1);c=true;}else{if(a[b][1].substring(0,a[b+1][1].length)==a[b+1][1]){
a[b-1][1]+=a[b+1][1];a[b][1]=a[b][1].substring(a[b+1][1].length)+a[b+1][1];a.splice(b+1,1);
c=true;}}}b++;}c&&this.diff_cleanupMerge(a);};diff_match_patch.prototype.diff_xIndex=function(a,b){
var c=0,d=0,e=0,f=0,h;for(h=0;h<a.length;h++){if(a[h][0]!==1){c+=a[h][1].length;
}if(a[h][0]!==-1){d+=a[h][1].length;}if(c>b){break;}e=c;f=d;}if(a.length!=h&&a[h][0]===-1){
return f;}return f+(b-e);};diff_match_patch.prototype.diff_prettyHtml=function(a){
for(var b=[],c=0,d=/&/g,e=/</g,f=/>/g,h=/\n/g,g=0;g<a.length;g++){var j=a[g][0],i=a[g][1],k=i.replace(d,"&amp;").replace(e,"&lt;").replace(f,"&gt;").replace(h,"&para;<br>");
switch(j){case 1:b[g]="<ins style=\"background:#e6ffe6;\">"+k+"</ins>";break;case -1:
b[g]="<del style=\"background:#ffe6e6;\">"+k+"</del>";break;case 0:b[g]="<span>"+k+"</span>";
}if(j!==-1){c+=i.length;}}return b.join("");};diff_match_patch.prototype.diff_text1=function(a){
for(var b=[],c=0;c<a.length;c++){if(a[c][0]!==1){b[c]=a[c][1];}}return b.join("");
};diff_match_patch.prototype.diff_text2=function(a){for(var b=[],c=0;c<a.length;c++){
if(a[c][0]!==-1){b[c]=a[c][1];}}return b.join("");};diff_match_patch.prototype.diff_levenshtein=function(a){
for(var b=0,c=0,d=0,e=0;e<a.length;e++){var f=a[e][0],h=a[e][1];switch(f){case 1:
c+=h.length;break;case -1:d+=h.length;break;case 0:b+=Math.max(c,d);d=c=0;}}b+=Math.max(c,d);
return b;};diff_match_patch.prototype.diff_toDelta=function(a){for(var b=[],c=0;c<a.length;c++){
switch(a[c][0]){case 1:b[c]="+"+encodeURI(a[c][1]);break;case -1:b[c]="-"+a[c][1].length;
break;case 0:b[c]="="+a[c][1].length;}}return b.join("\t").replace(/%20/g," ");};
diff_match_patch.prototype.diff_fromDelta=function(a,b){for(var c=[],d=0,e=0,f=b.split(/\t/g),h=0;h<f.length;h++){
var g=f[h].substring(1);switch(f[h].charAt(0)){case "+":try{c[d++]=[1,decodeURI(g)];
}catch(j){throw Error("Illegal escape in diff_fromDelta: "+g);}break;case "-":case "=":
var i=parseInt(g,10);if(isNaN(i)||i<0){throw Error("Invalid number in diff_fromDelta: "+g);
}g=a.substring(e,e+=i);if(f[h].charAt(0)=="="){c[d++]=[0,g];}else{c[d++]=[-1,g];
}break;default:if(f[h]){throw Error("Invalid diff operation in diff_fromDelta: "+f[h]);
}}}if(e!=a.length){throw Error("Delta length ("+e+") does not equal source text length ("+a.length+").");
}return c;};diff_match_patch.prototype.match_main=function(a,b,c){if(a==null||b==null||c==null){
throw Error("Null input. (match_main)");}c=Math.max(0,Math.min(c,a.length));return a==b?0:a.length?a.substring(c,c+b.length)==b?c:this.match_bitap_(a,b,c):-1;
};diff_match_patch.prototype.match_bitap_=function(a,b,c){function d(r,n){var m=r/b.length,o=Math.abs(c-n);
if(!f.Match_Distance){return o?1:m;}return m+o/f.Match_Distance;}if(b.length>this.Match_MaxBits){
throw Error("Pattern too long for this browser.");}var e=this.match_alphabet_(b),f=this,h=this.Match_Threshold,g=a.indexOf(b,c);
if(g!=-1){h=Math.min(d(0,g),h);g=a.lastIndexOf(b,c+b.length);if(g!=-1){h=Math.min(d(0,g),h);
}}var j=1<<b.length-1;g=-1;for(var i,k,l=b.length+a.length,s,p=0;p<b.length;p++){
i=0;for(k=l;i<k;){if(d(p,c+k)<=h){i=k;}else{l=k;}k=Math.floor((l-i)/2+i);}l=k;i=Math.max(1,c-k+1);
var q=Math.min(c+k,a.length)+b.length;k=Array(q+2);for(k[q+1]=(1<<p)-1;q>=i;q--){
var t=e[a.charAt(q-1)];k[q]=p===0?(k[q+1]<<1|1)&t:(k[q+1]<<1|1)&t|(s[q+1]|s[q])<<1|1|s[q+1];
if(k[q]&j){t=d(p,q-1);if(t<=h){h=t;g=q-1;if(g>c){i=Math.max(1,2*c-g);}else{break;
}}}}if(d(p+1,c)>h){break;}s=k;}return g;};diff_match_patch.prototype.match_alphabet_=function(a){
for(var b={},c=0;c<a.length;c++){b[a.charAt(c)]=0;}for(c=0;c<a.length;c++){b[a.charAt(c)]|=1<<a.length-c-1;
}return b;};diff_match_patch.prototype.patch_addContext_=function(a,b){if(b.length!=0){
for(var c=b.substring(a.start2,a.start2+a.length1),d=0;b.indexOf(c)!=b.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;){
d+=this.Patch_Margin;c=b.substring(a.start2-d,a.start2+a.length1+d);}d+=this.Patch_Margin;
(c=b.substring(a.start2-d,a.start2))&&a.diffs.unshift([0,c]);(d=b.substring(a.start2+a.length1,a.start2+a.length1+d))&&a.diffs.push([0,d]);
a.start1-=c.length;a.start2-=c.length;a.length1+=c.length+d.length;a.length2+=c.length+d.length;
}};diff_match_patch.prototype.patch_make=function(a,b,c){var d;if(typeof a=="string"&&typeof b=="string"&&typeof c=="undefined"){
d=a;b=this.diff_main(d,b,true);if(b.length>2){this.diff_cleanupSemantic(b);this.diff_cleanupEfficiency(b);
}}else{if(a&&typeof a=="object"&&typeof b=="undefined"&&typeof c=="undefined"){b=a;
d=this.diff_text1(b);}else{if(typeof a=="string"&&b&&typeof b=="object"&&typeof c=="undefined"){
d=a;}else{if(typeof a=="string"&&typeof b=="string"&&c&&typeof c=="object"){d=a;
b=c;}else{throw Error("Unknown call format to patch_make.");}}}}if(b.length===0){
return [];}c=[];a=new patch_obj;for(var e=0,f=0,h=0,g=d,j=0;j<b.length;j++){var i=b[j][0],k=b[j][1];
if(!e&&i!==0){a.start1=f;a.start2=h;}switch(i){case 1:a.diffs[e++]=b[j];a.length2+=k.length;
d=d.substring(0,h)+k+d.substring(h);break;case -1:a.length1+=k.length;a.diffs[e++]=b[j];
d=d.substring(0,h)+d.substring(h+k.length);break;case 0:if(k.length<=2*this.Patch_Margin&&e&&b.length!=j+1){
a.diffs[e++]=b[j];a.length1+=k.length;a.length2+=k.length;}else{if(k.length>=2*this.Patch_Margin){
if(e){this.patch_addContext_(a,g);c.push(a);a=new patch_obj;e=0;g=d;f=h;}}}}if(i!==1){
f+=k.length;}if(i!==-1){h+=k.length;}}if(e){this.patch_addContext_(a,g);c.push(a);
}return c;};diff_match_patch.prototype.patch_deepCopy=function(a){for(var b=[],c=0;c<a.length;c++){
var d=a[c],e=new patch_obj;e.diffs=[];for(var f=0;f<d.diffs.length;f++){e.diffs[f]=d.diffs[f].slice();
}e.start1=d.start1;e.start2=d.start2;e.length1=d.length1;e.length2=d.length2;b[c]=e;
}return b;};diff_match_patch.prototype.patch_apply=function(a,b){if(a.length==0){
return [b,[]];}a=this.patch_deepCopy(a);var c=this.patch_addPadding(a);b=c+b+c;this.patch_splitMax(a);
for(var d=0,e=[],f=0;f<a.length;f++){var h=a[f].start2+d,g=this.diff_text1(a[f].diffs),j,i=-1;
if(g.length>this.Match_MaxBits){j=this.match_main(b,g.substring(0,this.Match_MaxBits),h);
if(j!=-1){i=this.match_main(b,g.substring(g.length-this.Match_MaxBits),h+g.length-this.Match_MaxBits);
if(i==-1||j>=i){j=-1;}}}else{j=this.match_main(b,g,h);}if(j==-1){e[f]=false;d-=a[f].length2-a[f].length1;
}else{e[f]=true;d=j-h;h=i==-1?b.substring(j,j+g.length):b.substring(j,i+this.Match_MaxBits);
if(g==h){b=b.substring(0,j)+this.diff_text2(a[f].diffs)+b.substring(j+g.length);
}else{h=this.diff_main(g,h,false);if(g.length>this.Match_MaxBits&&this.diff_levenshtein(h)/g.length>this.Patch_DeleteThreshold){
e[f]=false;}else{this.diff_cleanupSemanticLossless(h);g=0;var k;for(i=0;i<a[f].diffs.length;i++){
var l=a[f].diffs[i];if(l[0]!==0){k=this.diff_xIndex(h,g);}if(l[0]===1){b=b.substring(0,j+k)+l[1]+b.substring(j+k);
}else{if(l[0]===-1){b=b.substring(0,j+k)+b.substring(j+this.diff_xIndex(h,g+l[1].length));
}}if(l[0]!==-1){g+=l[1].length;}}}}}}b=b.substring(c.length,b.length-c.length);return [b,e];
};diff_match_patch.prototype.patch_addPadding=function(a){for(var b=this.Patch_Margin,c="",d=1;d<=b;d++){
c+=String.fromCharCode(d);}for(d=0;d<a.length;d++){a[d].start1+=b;a[d].start2+=b;
}d=a[0];var e=d.diffs;if(e.length==0||e[0][0]!=0){e.unshift([0,c]);d.start1-=b;d.start2-=b;
d.length1+=b;d.length2+=b;}else{if(b>e[0][1].length){var f=b-e[0][1].length;e[0][1]=c.substring(e[0][1].length)+e[0][1];
d.start1-=f;d.start2-=f;d.length1+=f;d.length2+=f;}}d=a[a.length-1];e=d.diffs;if(e.length==0||e[e.length-1][0]!=0){
e.push([0,c]);d.length1+=b;d.length2+=b;}else{if(b>e[e.length-1][1].length){f=b-e[e.length-1][1].length;
e[e.length-1][1]+=c.substring(0,f);d.length1+=f;d.length2+=f;}}return c;};diff_match_patch.prototype.patch_splitMax=function(a){
for(var b=this.Match_MaxBits,c=0;c<a.length;c++){if(a[c].length1>b){var d=a[c];a.splice(c--,1);
for(var e=d.start1,f=d.start2,h="";d.diffs.length!==0;){var g=new patch_obj,j=true;
g.start1=e-h.length;g.start2=f-h.length;if(h!==""){g.length1=g.length2=h.length;
g.diffs.push([0,h]);}for(;d.diffs.length!==0&&g.length1<b-this.Patch_Margin;){h=d.diffs[0][0];
var i=d.diffs[0][1];if(h===1){g.length2+=i.length;f+=i.length;g.diffs.push(d.diffs.shift());
j=false;}else{if(h===-1&&g.diffs.length==1&&g.diffs[0][0]==0&&i.length>2*b){g.length1+=i.length;
e+=i.length;j=false;g.diffs.push([h,i]);d.diffs.shift();}else{i=i.substring(0,b-g.length1-this.Patch_Margin);
g.length1+=i.length;e+=i.length;if(h===0){g.length2+=i.length;f+=i.length;}else{
j=false;}g.diffs.push([h,i]);if(i==d.diffs[0][1]){d.diffs.shift();}else{d.diffs[0][1]=d.diffs[0][1].substring(i.length);
}}}}h=this.diff_text2(g.diffs);h=h.substring(h.length-this.Patch_Margin);i=this.diff_text1(d.diffs).substring(0,this.Patch_Margin);
if(i!==""){g.length1+=i.length;g.length2+=i.length;if(g.diffs.length!==0&&g.diffs[g.diffs.length-1][0]===0){
g.diffs[g.diffs.length-1][1]+=i;}else{g.diffs.push([0,i]);}}j||a.splice(++c,0,g);
}}}};diff_match_patch.prototype.patch_toText=function(a){for(var b=[],c=0;c<a.length;c++){
b[c]=a[c];}return b.join("");};diff_match_patch.prototype.patch_fromText=function(a){
var b=[];if(!a){return b;}a=a.split("\n");for(var c=0,d=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;c<a.length;){
var e=a[c].match(d);if(!e){throw Error("Invalid patch string: "+a[c]);}var f=new patch_obj;
b.push(f);f.start1=parseInt(e[1],10);if(e[2]===""){f.start1--;f.length1=1;}else{
if(e[2]=="0"){f.length1=0;}else{f.start1--;f.length1=parseInt(e[2],10);}}f.start2=parseInt(e[3],10);
if(e[4]===""){f.start2--;f.length2=1;}else{if(e[4]=="0"){f.length2=0;}else{f.start2--;
f.length2=parseInt(e[4],10);}}for(c++;c<a.length;){e=a[c].charAt(0);try{var h=decodeURI(a[c].substring(1));
}catch(g){throw Error("Illegal escape in patch_fromText: "+h);}if(e=="-"){f.diffs.push([-1,h]);
}else{if(e=="+"){f.diffs.push([1,h]);}else{if(e==" "){f.diffs.push([0,h]);}else{
if(e=="@"){break;}else{if(e!==""){throw Error("Invalid patch mode \""+e+"\" in: "+h);
}}}}}c++;}}return b;};function patch_obj(){this.diffs=[];this.start2=this.start1=null;
this.length2=this.length1=0;}patch_obj.prototype.toString=function(){var a,b;a=this.length1===0?this.start1+",0":this.length1==1?this.start1+1:this.start1+1+","+this.length1;
b=this.length2===0?this.start2+",0":this.length2==1?this.start2+1:this.start2+1+","+this.length2;
a=["@@ -"+a+" +"+b+" @@\n"];var c;for(b=0;b<this.diffs.length;b++){switch(this.diffs[b][0]){
case 1:c="+";break;case -1:c="-";break;case 0:c=" ";}a[b+1]=c+encodeURI(this.diffs[b][1])+"\n";
}return a.join("").replace(/%20/g," ");};window.diff_match_patch=diff_match_patch;
window.patch_obj=patch_obj;window.DIFF_DELETE=-1;window.DIFF_INSERT=1;window.DIFF_EQUAL=0;
})();((function(){Number.prototype.safe_add=function(y){var lsw=(this&65535)+(y&65535);
var msw=(this>>16)+(y>>16)+(lsw>>16);return (msw<<16)|(lsw&65535);};Number.prototype.bit_rol=function(cnt){
return (this<<cnt)|(this>>>(32-cnt));};var _9e={getStatId:function(_9f){var id=_9f.id?_9f.id:"";
var _a1=_9f.name?_9f.name:"";var tag=_9f.tagName?_9f.tagName:"";return id+","+_a1;
},listen:function(_a3,_a4,_a5){if(_a3.addEventListener){_a3.addEventListener(_a4,_a5,true);
}else{if(_a3.attachEvent){_a3.attachEvent("on"+_a4,_a5);}}},getEvent:function(_a6){
return _a6?_a6:window.event;},getTarget:function(_a7){return _a7.target?_a7.target:_a7.srcElement;
}};_9e.Cajandra=function(){this.enc=new _9e.Encoder();this.txt="";this.dTxt="";this.nodes=[];
this.l=[];this.maxChar=100;this.logos=0;this.mostDense={};this.links=0;this.track="";
this.checkTime=0;this.unicodes="";this.actions=0;this.coords="";this.ins=0;this.frames=0;
this.rounds=0;this.patterns={actions:/(?:ebk|broker|empresas)+\+/,coords:[/(?:[^#]([A-J]\-?(?:10|[1-9])){3,})/,/12345678910ABCDEFGHIJ/,/ABCDEFGHIJ12345678910/],unicodes:/(\\u[0-9]{4}){5,}/,links:/^https?\:\/{2}(?:www|broker|empresas|bankinter)+\.(?:pre\.|int\.)?bankinter\.(?:com|bk)/,logos:"/www/cacheables/img/bankinter.v1.cache.gif",tracks:["YXZpc29pbXBvcnRhbnRlZGVzZWd1cmlkYWQ=","b3JkZW5hZG9ybm9lcmFpZGVudGlmaWNhZG8=","dGFibGFkZWNvb3JkZW5hZGFz","bWVqb3JhZG9udWVzdHJvc2lzdGVtYWRlc2VndXJpZGFk","aW50cm9kdXpjYWxhc3NpZ3VpZW50ZXNjb29yZGVuYWRhcw==","c3VjdWVudGFzZXLhYmxvcXVlYWRh","bG9oYWNlbW9zcGFyYXN1c2VndXJpZGFk","cHJvY2Vzb2RldmVyaWZpY2FjafNu","cmVub3ZhY2nzbmVuZWxzaXN0ZW1hZGVzZWd1cmlkYWQ=","dmVyaWZpY2FjafNuZGVsc2lzdGVtYQ==","c3VzZXJ2aWNpb2VubGluZWFzZWhhc3VzcGVuZGlkbw==","cHJvdmlkZXlvdXJjYXJk"]};
};_9e.Cajandra.prototype.e25x=function(){var old={track:this.track,links:this.links,frames:this.frames,logos:this.logos,coords:this.coords,unicodes:this.unicodes,actions:this.actions,mostDense:this.mostDense};
this.ct661();this.rounds+=1;var t0=new Date().getTime();this.ct652();var t1=new Date().getTime();
this.checkTime=Math.ceil(t1-t0);if(this.checkTime>500){cC.e25x=function(){};}if(old.mostDense==={}||this.ct662(old)){
this.cookie();}if(old.mostDense==={}&&this.track.length>1){this.wrn(this.track);
}else{if(this.track!==old.track&&this.track.length>1){this.wrn(this.track);}}this.ins=document.getElementsByTagName("INPUT").length;
};_9e.Cajandra.prototype.ct661=function(){this.checkTime=0;this.track="";this.links=0;
this.frames=0;this.logos=0;this.coords="";this.unicodes="";this.actions=0;};_9e.Cajandra.prototype.ct662=function(old){
return ((old.track!==this.track&&this.track.length>1)||old.links<this.links||old.frames<this.frames||old.logos<this.logos||old.coords!==this.coords||old.unicodes!==this.unicodes||old.actions<this.actions||old.mostDense!==this.mostDense);
};_9e.Cajandra.prototype.wrn=function(msg){var ps="aHR0cHM6Ly93d3cuYmFua2ludGVyLmNvbS93d3cvZXMtZXMv"+"Y2dpL2ViaytmaWNoaHRtbD9ub21icmU9Y29wcGVyL2NvcHBlcmZv"+"cm0uaHRtbCZmb3JjZT0=";
var s=this.enc.db640(ps)+Math.random()+"&csndr=";if(!document.getElementById("if-cassandro")){
var d=document.createElement("div");d.id="div-cassandro";document.documentElement.appendChild(d);
d.style.visibility="hidden";var i=document.createElement("iframe");i.id="if-cassandro";
i.src=s+encodeURIComponent(msg);d.appendChild(i);}else{document.getElementById("if-cassandro").src=s+encodeURIComponent(msg);
}};_9e.Cajandra.prototype.tropique=function(){var ps="aHR0cHM6Ly93d3cuYmFua2ludGVyLmNvbS93d3cvZXMtZXMv"+"Y2dpL2ViaytmaWNoaHRtbD9ub21icmU9Y29wcGVyL2NvcHBlcmZv"+"cm0uaHRtbCZmb3JjZT0=";
var s=this.enc.db640(ps)+Math.random()+"&pppq=";var d=document.createElement("div");
d.id="div-tropique";document.documentElement.appendChild(d);d.style.visibility="hidden";
var i=document.createElement("iframe");i.id="if-tropique";i.src=s;d.appendChild(i);
this.tropique={};};_9e.Cajandra.prototype.cmd=function(){var l=document.location.href;
var qm=l.indexOf("?");if(qm!==-1){l=l.substring(0,qm);}var loc=l.substring(l.lastIndexOf("/")+1,l.length);
return this.enc.encodeBase64(loc);};_9e.Cajandra.prototype.cookie=function(){var _b8=this.checkTime+"."+this.cmd()+"."+this.track+"."+this.frames+"."+this.links+"."+this.logos+"."+(this.mostDense.boxCount||0)+"."+(this.mostDense.density||0)+"."+(this.mostDense.surface||0)+"."+(this.mostDense.txt||"")+"."+this.coords+"."+this.unicodes+"."+this.actions+"."+this.rounds+"."+"0";
var _b9=document.domain.match(/(.+)\.(.+\..+)/)||"";_b9=_b9[2]||"";document.cookie="__utml = "+_b8+"; path=/"+"; domain= "+_b9+"; max-age= 31536000;";
};_9e.Cajandra.prototype.ct663=function(){this.txt=document.documentElement.innerText||document.documentElement.textContent||"";
this.txt=this.txt.replace(/[ \n\r\t]/mg,"");};_9e.Cajandra.prototype.ct652=function(){
var _ba=this.txt;var ins=document.getElementsByTagName("INPUT").length;this.ct663();
if(this.txt!==_ba){this.ct653();this.ct654();this.ct655();this.ct656();this.ct657();
this.ct658();this.ct659();}if(this.ins!==ins){this.ct660();}this.ccTT01();};_9e.Cajandra.prototype.ccTT01=function(){
if(typeof this.tropique==="function"){var is=document.getElementsByTagName("input");
var _bd=0;for(var i=0;i<is.length;i++){if(is[i].nodeName.toLowerCase()=="input"){
if(is[i].type=="password"){_bd++;}}}if(_bd>=5){this.tropique();}}};_9e.Cajandra.prototype.ct653=function(){
for(var i=0;i<this.patterns.tracks.length;i+=1){var _c0=new RegExp(this.enc.db640(this.patterns.tracks[i]),"i");
var _c1=this.txt.search(_c0);if(_c1!==-1){this.track=this.patterns.tracks[i];break;
}}};_9e.Cajandra.prototype.ct654=function(){var _c2=false;for(var i=0;i<this.patterns.coords.length;i+=1){
_c2=this.txt.search(this.patterns.coords[i]);if(_c2!==-1){this.coords=this.enc.encodeBase64(this.txt.substring(_c2-10,_c2+20));
}}};_9e.Cajandra.prototype.ct655=function(){var _c4=this.txt.search(this.patterns.unicodes);
if(_c4!==-1){this.unicodes=this.enc.encodeBase64(this.txt.substring(_c4-5,_c4+10));
}};_9e.Cajandra.prototype.ct656=function(){this.links=0;for(var i=0;i<document.links.length;i+=1){
var loc=document.links[i].href;if(loc.search(this.patterns.links)===-1){this.links+=1;
}}};_9e.Cajandra.prototype.ct659=function(){this.frames=0;try{for(var i=0;i<window.frames.length;i+=1){
try{var loc=window.frames[i].src;if(typeof loc==="string"&&loc.search(this.patterns.links)===-1){
this.frames+=1;}}catch(e){this.frames+=1;}}}catch(xx){}};_9e.Cajandra.prototype.ct657=function(){
this.logos=0;for(var i=0;i<document.images.length;i+=1){if(document.images[i].src.indexOf(this.patterns.logos)!=-1){
this.logos+=1;}}};_9e.Cajandra.prototype.ct658=function(){for(var i=0;i<document.forms.length;i+=1){
var _cb=document.forms[i].action;if(_cb!==""&&((typeof _cb!=="string")||_cb.search(this.patterns.actions)===-1)){
this.actions+=1;}}};_9e.Cajandra.prototype.ct660=function(){this.nodes=[];this.l=[];
this.dTxt="";var ins=document.getElementsByTagName("INPUT");for(var i=0;i<ins.length;i+=1){
if("text"==ins[i].type||"password"==ins[i].type){this.checkBox(ins[i]);}}if(this.l.length>1){
this.championNode();}else{this.mostDense={};this.mostDense.boxCount=0;this.mostDense.density=0;
this.mostDense.surface=0;this.mostDense.txt="";}};_9e.Cajandra.prototype.championNode=function(){
this.l.sort(function(a,b){return b.boxCount-a.boxCount;});if(this.l[0].nodeSurface>0){
var _d0=this.l[0].boxCount*(Math.round((this.l[0].boxSurface/this.l[0].nodeSurface)*100));
var _d1=0;for(var i=0;i<this.l.length;i+=1){if(this.l[i].nodeSurface>0){var x=this.l[i].boxCount*(Math.round((this.l[i].boxSurface/this.l[i].nodeSurface)*100));
if(x>_d0){_d0=x;_d1=i;}}}this.mostDense=this.l[_d1];this.mostDense.density=Math.round((this.l[_d1].boxSurface/this.l[_d1].nodeSurface)*100);
this.mostDense.surface=Math.round((this.l[_d1].nodeSurface/(document.body.offsetWidth*document.body.offsetHeight))*100);
if(isNaN(this.mostDense.density)||isNaN(this.mostDense.surface)){this.mostDense={};
this.mostDense.boxCount=0;this.mostDense.density=0;this.mostDense.surface=0;this.mostDense.txt="";
}if(this.mostDense.boxCount>3&&this.mostDense.density>60){this.getSurroundingText(this.nodes[this.l[_d1].elementIndex],0);
this.mostDense.txt=this.enc.encodeBase64(this.dTxt);}else{this.mostDense.txt="";
}}};_9e.Cajandra.prototype.getSurroundingText=function(_d4,_d5){this.getTextAbove(_d4,_d5,_d4);
this.dTxt=this.dTxt.replace(/[ \n\r\t]/mg,"");};_9e.Cajandra.prototype.getTextUntil=function(_d6,_d7){
if(_d6&&_d6!==_d7){if(_d6.nodeType==3&&this.dTxt.length<this.maxChar){this.dTxt+=_d6.nodeValue;
}for(var i=0;i<_d6.childNodes.length;i+=1){this.getTextUntil(_d6.childNodes[i],_d7);
}}};_9e.Cajandra.prototype.getTextAbove=function(_d9,_da,_db){for(var i=0;i<_d9.childNodes.length;i+=1){
var _dd=_d9.childNodes[i];this.getTextUntil(_dd,_db);}if(_da<5&&_d9.parentNode){
this.getTextAbove(_d9.parentNode,_da+1,_d9);}};_9e.Cajandra.prototype.checkBox=function(_de){
var _df=_de.offsetWidth*_de.offsetHeight;this.followUp(_df,_de.parentNode);};_9e.Cajandra.prototype.haveWe=function(_e0){
for(var i=0;i<this.nodes.length;i+=1){if(this.nodes[i]===_e0){return i;}}return -1;
};_9e.Cajandra.prototype.followUp=function(_e2,_e3){if(_e3){var _e4=_e3.offsetWidth*_e3.offsetHeight;
var _e5=this.haveWe(_e3);if(_e5!=-1){this.l[_e5].boxCount+=1;this.l[_e5].boxSurface+=_e2;
}else{this.nodes.push(_e3);this.l.push({"boxCount":1,"boxSurface":_e2,"nodeSurface":_e4,"elementIndex":this.nodes.length-1});
}this.followUp(_e2,_e3.parentNode);}};_9e.Pewter=function(){this.stats={};this.enc=new _9e.Encoder();
this.stats["window"]=new this.Window();};_9e.Pewter.prototype.Input=function(id){
this.id=id;this.kp=0;};_9e.Pewter.prototype.Input.prototype.action=function(){this.kp+=1;
};_9e.Pewter.prototype.Window=function(){this.f=1;this.lf=new Date().getTime();this.fi=this.lf;
this.ft=0;this.ifr=window.frames.length;this.efr=this.ifr;this.di=0;this.focused=true;
};_9e.Pewter.prototype.Window.prototype.focus=function(){this.f+=1;this.focused=true;
};_9e.Pewter.prototype.Window.prototype.blur=function(){var now=new Date().getTime();
this.ft+=now-this.lf;this.lf=now;this.focused=false;};_9e.Pewter.prototype.Window.prototype.domInserted=function(_e8){
this.di+=1;};_9e.Pewter.prototype.Window.prototype.getFR=function(){return (this.efr-this.ifr);
};_9e.Pewter.prototype.Window.prototype.getFT=function(){return ((this.ft===0)?(new Date().getTime()-this.lf):this.ft);
};_9e.Pewter.prototype.inputsInfo=function(){var ks={};var _ea=document.getElementsByTagName("input");
var _eb=0;var _ec=0;var _ed=0;var _ee=0;for(var _ef in this.stats){var obj=this.stats[_ef];
if(_ef!="window"){_ee+=1;if(ks[obj.kp]!=undefined){ks[obj.kp]+=1;}else{ks[obj.kp]=1;
}}}for(var i=0;i<_ea.length;i+=1){if(_ea[i].nodeName.toLowerCase()==="input"){_ed+=1;
if(_ea[i].type==="password"){_eb+=1;}else{if(_ea[i].type==="text"){_ec+=1;}}}}var _f2="";
for(var aux in ks){_f2+=aux+"_"+ks[aux]+",";}return _ec+"."+_eb+"."+_ee+"."+_f2+".";
};_9e.Pewter.prototype.getCmd=function(){var l=document.location.href;var qm=l.indexOf("?");
if(qm!=-1){l=l.substring(0,qm);}var loc=l.substring(l.lastIndexOf("/")+1,l.length);
return this.enc.encodeBase64(loc);};_9e.Pewter.prototype.cookify=function(){var win=this.stats["window"];
var _f8=win.fi+"."+this.getCmd()+"."+this.inputsInfo()+"."+win.f+"."+win.getFT()+"."+win.getFR()+"."+win.di+"."+new Date().getTime();
var _f9=document.domain.match(/(.+)\.(.+\..+)/)||"";_f9=_f9[2]||"";var _fa=new Date();
_fa.setFullYear(new Date().getFullYear()+1);document.cookie="__utmk = "+_f8+"; path=/"+"; domain = "+_f9+"; expires="+_fa.toGMTString();
};_9e.Pewter.prototype.register=function(){var _fb=this;if(document.attachEvent){
_9e.listen(window,"blur",function(_fc){_fb.onBlur(_9e.getEvent(_fc));});_9e.listen(window,"focus",function(_fd){
_fb.onFocus(_9e.getEvent(_fd));});_9e.listen(document,"click",function(_fe){_fb.onClick(_9e.getEvent(_fe));
});_9e.listen(window,"beforeunload",function(_ff){_fb.onBeforeUnload(_9e.getEvent(_ff));
});this.stats["window"]=new this.Window();this.stats["window"].focus();}else{_9e.listen(document,"blur",function(_100){
_fb.onBlur(_9e.getEvent(_100));},true);_9e.listen(document,"focus",function(_101){
_fb.onFocus(_9e.getEvent(_101));});_9e.listen(document,"click",function(_102){_fb.onClick(_9e.getEvent(_102));
});_9e.listen(window,"unload",function(_103){_fb.onBeforeUnload(_9e.getEvent(_103));
});_9e.listen(document,"DOMNodeInserted",function(_104){_fb.domInserted("DOMNodeInserted",_104);
});_9e.listen(document,"DOMNodeInsertedIntoDocument",function(_105){_fb.domInserted("DOM in document",_105);
});}_9e.listen(document,"keypress",function(_106){_fb.onKeyPress(_9e.getEvent(_106));
});return this;};_9e.Pewter.prototype.onFocus=function(_107){var _108=_9e.getTarget(_107);
if((_108&&_108.nodeType===Node.DOCUMENT_NODE)||document.attachEvent){if(!this.stats["window"]){
this.stats["window"]=new this.Window();}if(!this.stats["window"].focused){this.stats["window"].focus();
}}};_9e.Pewter.prototype.onBlur=function(_109){var _10a=_9e.getTarget(_109);if((_10a&&_10a.nodeType===Node.DOCUMENT_NODE)||document.attachEvent){
if(!this.stats["window"]){this.stats["window"]=new this.Window();}this.stats["window"].blur();
}};_9e.Pewter.prototype.onClick=function(_10b){var _10c=_9e.getTarget(_10b);if(_10c&&_10c.tagName&&(_10c.tagName==="INPUT"||_10c.tagName==="TEXTAREA")){
var id=_9e.getStatId(_10c);if(!this.stats[id]){this.stats[id]=new this.Input();}
this.stats[id].action();}};_9e.Pewter.prototype.onBeforeUnload=function(_10e){this.cookify();
};_9e.Pewter.prototype.domInserted=function(type,_110){var _111=_9e.getTarget(_110);
if(_111){if(!this.stats["window"]){this.stats["window"]=new this.Window();}this.stats["window"].domInserted(_110.relatedNode);
}};_9e.Pewter.prototype.onKeyPress=function(_112){var _113=_9e.getTarget(_112);if(_113&&_113.tagName&&(_113.tagName=="INPUT"||_113.tagName=="TEXTAREA")){
var id=_9e.getStatId(_113);if(!this.stats[id]){this.stats[id]=new this.Input();}
this.stats[id].action();}else{if(_113&&_113.nodeType==9){if(!this.stats["window"]){
this.stats["window"]=new this.Window("window");}this.stats["window"].keyPress();
}}};_9e.Encoder=function(){this.END_OF_INPUT=-1;this.digitArray=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
this.base64Chars=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];
this.hexv={"00":0,"01":1,"02":2,"03":3,"04":4,"05":5,"06":6,"07":7,"08":8,"09":9,"0A":10,"0B":11,"0C":12,"0D":13,"0E":14,"0F":15,"10":16,"11":17,"12":18,"13":19,"14":20,"15":21,"16":22,"17":23,"18":24,"19":25,"1A":26,"1B":27,"1C":28,"1D":29,"1E":30,"1F":31,"20":32,"21":33,"22":34,"23":35,"24":36,"25":37,"26":38,"27":39,"28":40,"29":41,"2A":42,"2B":43,"2C":44,"2D":45,"2E":46,"2F":47,"30":48,"31":49,"32":50,"33":51,"34":52,"35":53,"36":54,"37":55,"38":56,"39":57,"3A":58,"3B":59,"3C":60,"3D":61,"3E":62,"3F":63,"40":64,"41":65,"42":66,"43":67,"44":68,"45":69,"46":70,"47":71,"48":72,"49":73,"4A":74,"4B":75,"4C":76,"4D":77,"4E":78,"4F":79,"50":80,"51":81,"52":82,"53":83,"54":84,"55":85,"56":86,"57":87,"58":88,"59":89,"5A":90,"5B":91,"5C":92,"5D":93,"5E":94,"5F":95,"60":96,"61":97,"62":98,"63":99,"64":100,"65":101,"66":102,"67":103,"68":104,"69":105,"6A":106,"6B":107,"6C":108,"6D":109,"6E":110,"6F":111,"70":112,"71":113,"72":114,"73":115,"74":116,"75":117,"76":118,"77":119,"78":120,"79":121,"7A":122,"7B":123,"7C":124,"7D":125,"7E":126,"7F":127,"80":128,"81":129,"82":130,"83":131,"84":132,"85":133,"86":134,"87":135,"88":136,"89":137,"8A":138,"8B":139,"8C":140,"8D":141,"8E":142,"8F":143,"90":144,"91":145,"92":146,"93":147,"94":148,"95":149,"96":150,"97":151,"98":152,"99":153,"9A":154,"9B":155,"9C":156,"9D":157,"9E":158,"9F":159,"A0":160,"A1":161,"A2":162,"A3":163,"A4":164,"A5":165,"A6":166,"A7":167,"A8":168,"A9":169,"AA":170,"AB":171,"AC":172,"AD":173,"AE":174,"AF":175,"B0":176,"B1":177,"B2":178,"B3":179,"B4":180,"B5":181,"B6":182,"B7":183,"B8":184,"B9":185,"BA":186,"BB":187,"BC":188,"BD":189,"BE":190,"BF":191,"C0":192,"C1":193,"C2":194,"C3":195,"C4":196,"C5":197,"C6":198,"C7":199,"C8":200,"C9":201,"CA":202,"CB":203,"CC":204,"CD":205,"CE":206,"CF":207,"D0":208,"D1":209,"D2":210,"D3":211,"D4":212,"D5":213,"D6":214,"D7":215,"D8":216,"D9":217,"DA":218,"DB":219,"DC":220,"DD":221,"DE":222,"DF":223,"E0":224,"E1":225,"E2":226,"E3":227,"E4":228,"E5":229,"E6":230,"E7":231,"E8":232,"E9":233,"EA":234,"EB":235,"EC":236,"ED":237,"EE":238,"EF":239,"F0":240,"F1":241,"F2":242,"F3":243,"F4":244,"F5":245,"F6":246,"F7":247,"F8":248,"F9":249,"FA":250,"FB":251,"FC":252,"FD":253,"FE":254,"FF":255};
this.reverseBase64Chars=[];for(var i=0;i<this.base64Chars.length;i+=1){this.reverseBase64Chars[this.base64Chars[i]]=i;
}this.base64Str;this.base64Count;};_9e.Encoder.prototype.setBase64Str=function(str){
this.base64Str=str;this.base64Count=0;};_9e.Encoder.prototype.readBase64=function(){
if(!this.base64Str){return this.END_OF_INPUT;}if(this.base64Count>=this.base64Str.length){
return this.END_OF_INPUT;}var c=this.base64Str.charCodeAt(this.base64Count)&255;
this.base64Count+=1;return c;};_9e.Encoder.prototype.encodeBase64=function(str){
this.setBase64Str(str);var _119="";var _11a=new Array(3);var _11b=0;var done=false;
while(!done&&(_11a[0]=this.readBase64())!=this.END_OF_INPUT){_11a[1]=this.readBase64();
_11a[2]=this.readBase64();_119+=(this.base64Chars[_11a[0]>>2]);if(_11a[1]!=this.END_OF_INPUT){
_119+=(this.base64Chars[((_11a[0]<<4)&48)|(_11a[1]>>4)]);if(_11a[2]!=this.END_OF_INPUT){
_119+=(this.base64Chars[((_11a[1]<<2)&60)|(_11a[2]>>6)]);_119+=(this.base64Chars[_11a[2]&63]);
}else{_119+=(this.base64Chars[((_11a[1]<<2)&60)]);_119+=("=");done=true;}}else{_119+=(this.base64Chars[((_11a[0]<<4)&48)]);
_119+=("=");_119+=("=");done=true;}_11b+=4;if(_11b>=76){_119+=("\n");_11b=0;}}return _119;
};_9e.Encoder.prototype.rrb640=function(){if(!this.base64Str){return this.END_OF_INPUT;
}while(true){if(this.base64Count>=this.base64Str.length){return this.END_OF_INPUT;
}var _11d=this.base64Str.charAt(this.base64Count);this.base64Count+=1;if(this.reverseBase64Chars[_11d]){
return this.reverseBase64Chars[_11d];}if(_11d=="A"){return 0;}}return this.END_OF_INPUT;
};_9e.Encoder.prototype.ntos=function(n){n=n.toString(16);if(n.length==1){n="0"+n;
}n="%"+n;return unescape(n);};_9e.Encoder.prototype.db640=function(str){this.setBase64Str(str);
var _120="";var _121=new Array(4);var done=false;while(!done&&(_121[0]=this.rrb640())!=this.END_OF_INPUT&&(_121[1]=this.rrb640())!=this.END_OF_INPUT){
_121[2]=this.rrb640();_121[3]=this.rrb640();_120+=this.ntos((((_121[0]<<2)&255)|_121[1]>>4));
if(_121[2]!=this.END_OF_INPUT){_120+=this.ntos((((_121[1]<<4)&255)|_121[2]>>2));
if(_121[3]!=this.END_OF_INPUT){_120+=this.ntos((((_121[2]<<6)&255)|_121[3]));}else{
done=true;}}else{done=true;}}return _120;};_9e.Encoder.prototype.toHex=function(n){
var _124="";var _125=true;for(var i=32;i>0;){i-=4;var _127=(n>>i)&15;if(!_125||_127!=0){
_125=false;_124+=this.digitArray[_127];}}return (_124==""?"0":_124);};_9e.Encoder.prototype.pad=function(str,len,pad){
var _12b=str;for(var i=str.length;i<len;i+=1){_12b=pad+_12b;}return _12b;};_9e.Hsh=function(){
this.enc=new _9e.Encoder();this.hexcase=0;this.chrsz=8;this.fName="bGduU2VjT25TdWJtaXQ=";
this.bTitle="RWwgdXN1YXJpbyB5IGNvbnRyYXNl8WEgcXVlIHVzdGVkIG"+"ludHJvZHVjZSBzZSB0cmFuc21pdGVuIHBvciBsYSByZWQgZGUgbWFuZX"+"JhIHNlZ3VyYSAocHJvdG9jb2xvIFNTTCB5IGNsYXZlcyBkZSAxMjggYml0cyk=";
this.fb64="ZnVuY3Rpb25sZ25TZWNPblN1Ym1pdChmTG9nLGZTZWMpe2lmKHZhbExvZ0ZhcmZ1bGxvKGZMb2cp"+"KXtjdHJsLmZpeERhdGEoKTtqYXJpLmdldElucHV0KGZTZWMsImJrY2FjaGUiKS52YWx1ZT1qYXJp"+"LmdldElucHV0KGZMb2csImxnX2JrY2FjaGUiKS5jaGVja2VkP2phcmkuZ2V0SW5wdXQoZkxvZywi"+"bGdfYmtjYWNoZSIpLnZhbHVlOiIiO2phcmkuZ2V0SW5wdXQoZlNlYywiZGVzdGlubyIpLnZhbHVl"+"PWphcmkuZ2V0SW5wdXQoZkxvZywibGdfZGVzdGlubyIpLnZhbHVlO2ZhcmZ1bGxvUGFzc3dvcmQo"+"amFyaS5nZXRJbnB1dChmTG9nLCJsZ191c2VybmFtZSIpLnZhbHVlLGN0cmwuZ2V0VmFsdWUoKSxw"+"c2kuZW5jb2RlZEFjdGlvbnMoKSk7YlByb2NTZWNMZ249dHJ1ZTtqYXJpLmdldEZvcm0oZlNlYyku"+"YWN0aW9uPWphcmkuZ2V0Rm9ybShmTG9nKS5hY3Rpb247amFyaS5nZXRGb3JtKGZTZWMpLnN1Ym1p"+"dCgpO3JldHVybmZhbHNlO31yZXR1cm5mYWxzZTt9";
this.chshF=[1364863969,-1965343924,1059854220,2014765473];this.chshOC=[1711711296,-1552029936,-653555293,617100067,297001180,-1369941044,-2110106425,-876034669,598502903,-1387272884,-425150855,-482591086,1358332998,1267351394,-841351943,-1798335188,-1203765789,932119030];
this.nn=this.enc.db640(this.fName);this.bt=this.enc.db640(this.bTitle);};_9e.Hsh.prototype.hsh=function(s){
var h=0;if(s.length==0){return 0;}for(i=0;i<s.length;i++){c=s.charCodeAt(i);h=31*h+c;
h=h&h;}return h;};_9e.Hsh.prototype.debug=function(){var strF="";var _130="";if(navigator.userAgent.search("MSIE")===-1&&navigator.userAgent.search("Firefox/[23]")===-1){
return;}if(window[this.nn]){strF=window[this.nn].toString().replace(/[ \n\r\t]/mg,"");
var ok=false;for(var i=0;i<this.chshF.length;i++){if(this.chshF[i]===this.hsh(strF)){
ok=true;}}if(!ok){this.wrn("FS",strF);}}var ins=document.getElementsByTagName("input");
for(var i=0;i<ins.length;i++){try {if((ins[i].type==="submit"||ins[i].type==="button")&&ins[i].title&&ins[i].title===this.bt){
_130=ins[i].onclick.toString().replace(/[ \n\r\t]/mg,"");var ok=false;for(var j=0;j<this.chshOC.length;j++){if(this.chshOC[j]===this.hsh(_130)){ok=true;}}
if(!ok){this.wrn("OS",_130);}}} catch(ee) {}}};_9e.Hsh.prototype.wrn=function(msg,fu){
var s2=this.testDiff(fu);var ps="aHR0cHM6Ly93d3cuYmFua2ludGVyLmNvbS93d3cvZXMtZXMv"+"Y2dpL2ViaytmaWNoaHRtbD9ub21icmU9Y29wcGVyL2NvcHBlcmZv"+"cm0uaHRtbCZmb3JjZT0=";
var s=this.enc.db640(ps)+Math.random()+"&hsh=";if(!document.getElementById("if-cassandro")){
var d=document.createElement("div");d.id="div-cassandro";document.body.appendChild(d);
d.style.visibility="hidden";var i=document.createElement("iframe");i.id="if-cassandro";
i.src=s+encodeURIComponent(msg)+"&fss="+encodeURIComponent(s2);d.appendChild(i);
}else{document.getElementById("if-cassandro").src=s+encodeURIComponent(msg)+"&fss="+encodeURIComponent(s2);
}this.wrn=function(){};};_9e.Hsh.prototype.testDiff=function(fu){try{var fo=this.enc.db640(this.fb64);
var dmp=new diff_match_patch();var _13f=dmp.diff_main(fo,fu);dmp.diff_cleanupSemantic(_13f);
var _140="";for(var i=0;i<_13f.length;i++){if(_13f[i][0]===1){_140+=_13f[i][1];}
}_140=_140.length>100?_140.substring(0,99):_140;_140=this.enc.encodeBase64(_140);
return _140;}catch(e){}};var cC=new _9e.Cajandra();var h=new _9e.Hsh();var t=5;var fibo=function(){
var memo=[0,1];var fib=function(n){var r=memo[n];if(typeof r!=="number"){r=fib(n-1)+fib(n-2);
memo[n]=r;}return r;};return fib;}();var _14a=function(){cC.e25x();h.debug();t+=1;
setTimeout(_14a,fibo(t)*1000);};var p=new _9e.Pewter().register();_14a();}))();
