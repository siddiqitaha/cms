/* 警告:此文件由系统自动生成,请勿修改,因为可能导致您的更改丢失! */

function JR(){this.VERSION='3.5';this.WORKPATH='';this._Extend_PROTOTYPE=true;this._eventArray=["abort","blur","change","click","dblclick","error","focus","keydown","keypress","keyup","load","mousedown","mousemove","mouseout","mouseover","mouseenter","mouseup","touchstart","touchmove","touchend","touchcancel","reset","resize","select","submit","unload"];this.__init__=function(){var a=document.getElementsByTagName('SCRIPT');var s=a[a.length-1];var b=s.src;this.WORKPATH=b.replace(/(\/)[^/]+$/,'$1');if(this._Extend_PROTOTYPE){this.__extendingJsPrototype__()}this.dom.set(this);return this};this.__extendingJsPrototype__=function(){String.prototype.len=function(a){return this.replace(a?/[\u0391-\uFFE5]/g:/[^x00-xff]/g,"00").length};Array.prototype.remove=function(a,b){var c=this.slice((b||a)+1||this.length);this.length=a<0?this.length+a:a;return this.push.apply(this,c)};if(!Object.create){Object.create=function(o){function $(){}$.prototype=o;return new $()}}if(typeof(HTMLElement)!="undefined"){HTMLElement.prototype.contains=function(a){while(a!=null&&typeof(a.tagName)!="undefined"){if(a==this)return true;a=a.parentNode}return false};HTMLElement.prototype.computedStyle=function(){return this.currentStyle||document.defaultView.getComputedStyle(this,null)};HTMLElement.prototype.setStyle=function(a){var b={};for(var i in a){b[i]=this.style[i];this.style[i]=a[i]}return b};HTMLElement.prototype.restoreStyle=function(a){for(var i in a)this.style[i]=a[i]};HTMLElement.prototype.realEval=function(a){var b=this.setStyle({"display":"inherit","visibility":"hidden","position":"absolute","height":"auto",width:"auto"});var c=a(this);this.restoreStyle(b);return c}}Date.prototype.format=function(a){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"Ｈ+":this.getHours(),"h+":this.getHours()%12,"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds()};if(/(y+)/.test(a)){a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))}for(var k in o){if(new RegExp("("+k+")").test(a)){a=a.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)))}}return a};if(!window.JSON){window["JSON"]={parse:function(s){return eval('('+s+')')}}}}}JR.prototype={request:function(a,b){var c=new RegExp('(\\?|&)'+a+'=([^&]+)&*').exec(b?b:location.href);return c?c[2]:''},path:function(){var d=document.domain,uri=location.href;d=uri.substring(uri.indexOf(d)+d.length);return d.substring(d.indexOf("/"))},eval:function(a){if(!a)return a;if(window.execScript){window.execScript(a)}else{var b=document.createElement('SCRIPT');b.setAttribute('type','text/javascript');b.text=a;document.head.appendChild(b);document.head.removeChild(b)}return a},each:function(a,b){if(!a)return;for(var i=0;i<a.length;i++)b(i,a[i])},template:function(a,b){if(b instanceof Object){var c=new RegExp();for(var n in b){c.compile('%'+n+'%|\{'+n+'\}','g');a=a.replace(c,b[n])}}return a},extend:function(a){if(a&&a instanceof Object){for(var b in a){if(this[b]==undefined){this[b]=a[b]}}}return this},$fn:function(a){return this.fn.create(a,this)},selector:{getByClassName:function(a,e){if(!e.getElementsByClassName){var b=(e||document).getElementsByTagName('*');var c=new RegExp('\\s'+a+'\\s');var d=[];for(var i=0,j;j=b[i];i++){if(c.test(' '+j.className+' '))d.push(j)}return d}return e.getElementsByClassName(a)},finds:function(a,b){a=a.replace(/^\s|\s$/g,'').replace(/\s+/,' ');var c=b&&b.nodeName?[b]:(b||[document]);var d=a.split(' ');return this.walk(c,d,0)},findBy:function(a,b){var c=[];for(var i=0;i<a.length;i++){var d=b(a[i])||[];for(var j=0;j<d.length;j++){c.push(d[j])}}return c},walk:function(a,b,c){var d=[];var f=b[c];switch(f[0]){case"#":d=this.findBy(a,function(){var e=document.getElementById(f.substring(1));return e?[e]:[]});break;case".":d=this.findBy(a,(function(t){return function(p){return t.getByClassName(f.substring(1),p)}})(this));break;default:d=this.findBy(a,function(p){return p.getElementsByTagName(f)});break}if(c<b.length-1){return this.walk(d,b,c+1)}return d}},fn:{g:{},eleList:[],fnList:null,fnProps:{'check':['checked',true],'disabled':['disabled',true],'uncheck':['checked',false],},aniFn:["fadeIn","fadeOut","fadeTo","fadeToggle","slideUp","slideDown","slideToggle"],_fn:function(a){return this.create(a,this.g)},extend:function(a){return this.g.extend.apply(this,a)},create:function(a,g){return Object.create(this).init(a,g)},init:function(e,g){this.g=g;this.fnList=null;if(typeof(e)=="string"){this.eleList=this.g.selector.finds(e)}else if(e instanceof Array||e instanceof HTMLCollection){this.eleList=e}else if(e.nodeName){this.eleList=[e]}var f=this;this.g.each(this.g._eventArray,function(i,e){f[e]=(function(e){return function(a,b){return f.event(e,a,b!=false)}})(e)});for(var k in this.fnProps){this[k]=(function(k,a){return function(){return a._rawCaller(function(e){var p=a.fnProps[k];e[p[0]]=p[1]})}})(k,this)}this.g.each(this.aniFn,function(i,d){f[d]=(function(c,j){return function(a,b){return j._caller(function(e){j.g.animation[c](e,a,b)})}})(d,f)});return this},_single:function(){if(this.len()>0){return this.eleList[0]}return null},_chkFnList:function(){with(this){if(fnList)return;fnList=[];for(var i=0,j=len();i<j;i++){fnList.push(_fn([eleList[i]]))}}},_factFn:function(i,b){return(function(p){return function(a){b.apply(p,[a])}})(this.get(i))},each:function(a){this._chkFnList();this.g.each(this.fnList,a);return this},get:function(i){this._chkFnList();if(i>=0&&i<=this.fnList.length-1){return this.fnList[i]}return this._fn(null)},first:function(){return this.get(0)},last:function(){var l=this.len();return l==0?null:this.get(l-1)},_caller:function(c){for(var i=0,j=this.len();i<j;i++){c.call(this,this._fn(this.eleList[i]),i)}return this},_rawCaller:function(c){for(var i=0,j=this.len();i<j;i++){c.call(this,this.eleList[i],i)}return this},event:function(b,c,d){var f=this;return this._rawCaller(function(e,i){if(c){var a=f._factFn(i,c);if(d){this.g.event.add(e,b,a)}else{e["on"+b]=a}}else{e["on"+b]()}})},raw:function(){if(this.len()==1){return this.eleList[0]}return this.eleList},elem:function(){return this.raw()},len:function(){return this.eleList.length},find:function(a){var b=this.g.selector.finds(a,this.eleList);return this._fn(b)},parent:function(){var e=this._single();if(e){e=e.parentNode;return this._fn(e)}return null},prev:function(){var e=this._single().previousSibling;if(e)return this._fn(e);return null},next:function(){var e=this._single().nextSibling;if(e)return this._fn(e);return null},attr:function(a,v){if(v==null){if(a instanceof Object){for(var p in a){this._setAttr(p,a[p])}return this}var e=this._single();return e[a]||e.getAttribute(a)}this._setAttr(a,v);return this},_setAttr:function(a,v){var b=typeof(v)=="boolean"||a==="value"||a.indexOf("inner")==0||a.indexOf("scroll")==0||a.indexOf("offset")==0;return this._rawCaller(function(e){b?e[a]=v:e.setAttribute(a,v)})},removeAttr:function(a){return this._rawCaller(function(e){e.removeAttribute(a)})},css:function(a){if(!(a instanceof Object)){var e=this._single();return e.currentStyle||document.defaultView.getComputedStyle(e,null)}for(var s in a){var b=s.split("-");for(var i=1;i<b.length;i++){b[i]=b[i].replace(b[i].charAt(0),b[i].charAt(0).toUpperCase())}var c=b.join('');this._rawCaller(function(e){e.style[c]=a[s]})}return this},hasClass:function(c){var a=new RegExp('(\\s|^)'+c+'(\\s|$)');return this._single().className.match(a)?true:false},addClass:function(c){return this.each(function(i,e){if(!e.hasClass(c))e.raw().className+=' '+c})},removeClass:function(c){var a=new RegExp('(\\s|^)'+c+'((\\s)|$)');this._rawCaller(function(e){e.className=e.className.replace(a,"$3")});return this},position:function(){return this._single().getBoundingClientRect()},html:function(v){return this.attr("innerHTML",v)},text:function(v){return this.attr("innerText",v)},before:function(a){return this._rawCaller(function(e){e.parentNode&&e.parentNode.insertBefore(a,e)})},after:function(a){return this._rawCaller(function(e){e.parentNode&&e.parentNode.insertBefore(a,e.nextSibling)})},append:function(e){return this._rawCaller(function(p){if(e.raw)p.appendChild(e.raw());else if(e.nodeName)p.appendChild(e);else if(typeof(e)=="string")p.innerHTML+=e})},appendTo:function(e){e.append(this)},val:function(v){if(v==null)return this.attr("value");this.attr("value",v);return this},remove:function(){var a=this;this.fnList=null;return this._rawCaller(function(e,i){a.eleList.remove(i);try{e.parentNode.removeChild(e);e.outerHTML=""}catch(err){console.log(err)}})},animate:function(a,b,c){this._caller.apply(this,[function(e){this.g.animation.animate(e,a,b,c)}])}},animation:{speedSet:{"slow":10,"normal":6,"fast":3},_titAttr:function(a){var b=a.split("-");for(var i=1;i<b.length;i++){b[i]=a[i].replace(b[i].charAt(0),b[i].charAt(0).toUpperCase())}return b.join('')},_ani:function(d,e,f,g,h){if(typeof(e)!="integer"){e=this.speedSet[e||"normal"]}var i=0;var j=setInterval(function(){var a=f();var b=(d-a)/e;b=b>0?Math.floor(b):Math.ceil(b);var c=i>0&&i<Math.abs(b);if(Math.abs(b)==0||c){clearInterval(j);g(d);if(h instanceof Function)h()}else{g(a+b);i=Math.abs(b)}},20);return j},animate:function(d,f,g,h){var e=d.raw?d.raw():d;var i=e.computedStyle();var j={};var k=function(e,a,b){return function(){if(b==="opacity"){return e["filters"]?e["filters"]["opacity"]:parseFloat(a["opacity"])*100}return parseFloat(a[b])}};var l=function(e,a){return function(v){if(a==="opacity"){e["filters"]?e["filters"]["opacity"]=v:e.style[a]=v/100}else{e.style[a]=v+"px"}}};var m=(function(t,b,c){return function(){for(var a in j){if(k(e,i,a)()!=j[a])return}if(c&&c instanceof Function)c.apply(b,[])}})(this,d,h);for(var n in f){var o=this._titAttr(n);var p=k(e,f,o)();j[o]=p;this._ani(p,g,k(e,i,o),l(e,o),m)}},toggle:function(e,a,b){e=e.raw?e.raw():e;e.style["overflow"]="hidden";var c=e.realEval(function(e){return[e.clientWidth,e.clientHeight]});var d=c[0];var f=c[1];var g=1;if(f==e.offsetHeight){d=0;f=0;g=0}alert(d+"/"+f);this.animate(e,{"width":d+"px","height":f+"px","opacity":g,},a,b)},fadeTo:function(e,o,a,b){this.animate(e,{"opacity":o},a,b)},fadeIn:function(e,a,b){this.fadeTo(e,1,a,b)},fadeOut:function(e,a,b){this.fadeTo(e,0,a,b)},fadeToggle:function(e,a,b){var d=e.raw?e.raw():e;var c=d.computedStyle();var f=parseFloat(d.filters?d.filters["opacity"]:c["opacity"]);this.fadeTo(d,f<1?1:0,a,b)},slideDown:function(e,a,b){var c=e.raw?e.raw():e;var d=c.realEval(function(e){return e.clientHeight});this.animate(c,{"height":d+"px"},a,b)},slideUp:function(e,a,b){this.animate(e,{"height":"0"},a,b)},slideToggle:function(e,a,b){var c=e.raw?e.raw():e;var d=c.realEval(function(e){return e.clientHeight});var f=c.offsetHeight;this.animate(c,{"height":(f!=d?d:0)+"px"},a,b)}}};JR.prototype.dom={_b:{},set:function(a){this._b=a},fitHeight:function(e,a){var b=e.parentNode;var c=e.nextSibling;var d=/;(\s*)height:(.+);/ig;var f=(b==document.body?Math.max(document.body.clientHeight,document.documentElement.clientHeight):b.offsetHeight)-e.offsetTop;while(c){if(c.nodeName[0]!='#'){f-=c.offsetHeight}c=c.nextSibling}f-=a||0;if(d.test(e.style.cssText)){e.style.cssText=e.style.cssText.replace(d,'; height:'+f+'px;')}else{e.style.cssText+='height:'+f+'px;'}},$:function(a,b,c){var d="#"+a;if(b&&b!=""&&b!="*"){d+=" "+b}if(c instanceof Object){var s=c["className"];if(s==null){s=c["class"]}if(s){d+=" ."+s}}var e=this._b.selector.finds(d);var f=e.length;if(f>1){return e}else if(f==1){return e[0]}return null},getsByClass:function(a,b){return jr.selector.getByClassName(b,a)}};JR.prototype.cookie={write:function(a,b,c,d,e,f){var g=c?new Date((new Date()).getTime()+c):null;this.set(a,b,g,d,e,f)},set:function(a,b,c,d,e,f){document.cookie=a+"="+escape(b)+((c)?"; expires="+c.toGMTString():"")+((d)?"; path="+d:"")+((e)?"; domain="+e:"")+((f)?"; secure":"")},remove:function(a){this.write(a,"",-9)},read:function(a){var b="";var c=a+"=";if(document.cookie.length>0){var d=document.cookie.indexOf(c);if(d!==-1){d+=c.length;var e=document.cookie.indexOf(";",d);if(e===-1)e=document.cookie.length;b=unescape(document.cookie.substring(d,e))}}return b}};JR.prototype.event={add:function(a,b,c,d){if(!a.attachEvent&&!a.addEventListener){alert('event error! parameter:'+ele+',event:'+b);return}document.attachEvent?a.attachEvent('on'+b,c):a.addEventListener(b,c,d||true)},remove:function(a,b,c,d){document.detachEvent?a.detachEvent('on'+b,c):a.removeEventListener(b,c,d||true)},src:function(a){var e=a?a:window.event;return e.target||e.srcElement},getTarget:function(a){var e=a?a:window.event;return e.target||e.srcElement},getRelatedTarget:function(a){if(a.relatedTarget)return a.relatedTarget;if(a.toElement)return a.toElement;if(a.fromElement)return a.fromElement;return null},stopBubble:function(a){a=a||window.event;a.cancelBubble=true;if(a.stopPropagation){a.stopPropagation()}},preventDefault:function(a){a=a||window.event;if(a.preventDefault){a.preventDefault()}else{a.returnvalue=false}}};var paramsToString=function(a){if(a instanceof Object){var b='';var i=0;for(var c in a){if(i++!==0){b+='&'}b+=c+'='+encodeURIComponent(a[c])}return b}return a};JR.prototype.xhr={maxRequest:4,filter:function(a,b,c){if(a==2){var d=/<title>(.+)<\/title>/.exec(c);if(d&&d.length>0){alert(d[1]);return false}}return true},httpStack:null,procStack:[],init:function(){if(this.httpStack)return;this.httpStack=[];for(var i=0;i<this.maxRequest;i++){this.httpStack[i]={state:0,http:new XMLHttpRequest(),}}},getUrl:function(a,b,c){if(a==null||a=='')a=location.href;if(b=='GET'&&c!=false&&a.indexOf('#')==-1){a=this.urlJoin(a,'rd='+Math.random())}return a},_doRequest:function(f,g){this.init();var h=(f.method||"GET").toUpperCase();var i={body:"",uri:this.getUrl(f.uri,h,f.random),form:f.form,data:f.data||'',method:h,async:f.async===false?false:f.async||true,call:g};if(this.filter&&!this.filter(0,i)){return false}var j=function(c,d,e){c.state=1;c.http.open(e.method,e.uri,e.async);c.http.withCredentials=true;c.http.onreadystatechange=function(){if(c.http.readyState===4){if(c.http.status===200){c.state=0;d.procStack.pop();if(d.filter&&!d.filter(1,e,c.http.responseText)){return false}if(e.call.success){var a=c.http.responseText;if(a.startsWith("<?xml")){e.call.success(c.http.responseXML);return}var b=/^({(.*)}|\[(.*)\])(\s|\n)*$/g.test(a);e.call.success(b?JSON.parse(a):a)}}else if(e.call.error){c.state=0;d.procStack.pop();if(d.filter&&!d.filter(2,e,c.http.responseText)){return false}if(e.call.error)e.call.error(c.http.responseText)}}return true};if(["GET","HEAD"].indexOf(e.method)==-1){if(e.form){e.body=paramsToString(e.form);c.http.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}else{e.body=JSON.stringify(e.data);c.http.setRequestHeader("Content-Type","application/json")}}c.http.send(e.body)};this._processReq(i,j)},_processReq:function(a,b){var c=setInterval((function(t){return function(){if(t.procStack.length<t.maxRequest){t.procStack.push(0);for(var i=0;i<t.maxRequest;i++){if(t.httpStack[i].state===0){try{b(t.httpStack[i],t,a)}catch(exc){if(a.call.error)a.call.error('request may be blocked!')}break}}clearInterval(c)}}}(this)),20)},_callback:function(a,b){return{success:function(r){if(a&&a instanceof Function)a(r)},error:function(r){if(b&&a instanceof Function)b(r)}}},get:function(a,b,c){this._doRequest(a instanceof Object?this.getUrl(a):{uri:a},this._callback(b,c))},post:function(a,b,c,d){this._doRequest({uri:a,method:'POST',form:typeof(b)=='string'?b:null,data:b,},this._callback(c,d))},request:function(a,b,c){this._doRequest({uri:a,method:b.method,form:b.form,params:b.params,data:b.data,},this._callback(c.success,c.error))},urlJoin:function(a,b){return a+(a.indexOf('?')==-1?'?':'&')+b},jsonp:(function(j){return function(c,d,e){d=d||{};var s=document.createElement('SCRIPT');var h="$callback_"+(10000+parseInt(Math.random()*90000));d['callback']=h;j[h]=(function(g,t,s,f,b){return function(a){t._jsonpGC(g,f,s);b(a)}}(j,this,s,h,e));s.setAttribute('src',this.urlJoin(c,paramsToString(d)));var i=(function(g,t,s,f,a){return function(){t._jsonpGC(g,f,s);a('jsonp : Invalid JSON data returned!',1)}}(j,this,s,h,e));if(document.attachEvent){s.attachEvent('onerror',i)}else{s.addEventListener('error',i,true)}document.getElementsByTagName('head')[0].appendChild(s)}}(window)),_jsonpGC:function(a,b,e){try{delete a[b]}catch(ex){a[b]=null}e.parentNode.removeChild(e)}};JR.prototype.ldScript=function(a,b,c){var d=null;var e=document.documentElement.getElementsByTagName("HEAD");if(e.length!=0)d=e[0];else d=document.body;var f=d.getElementsByTagName('SCRIPT');var g=0;for(var i=0;i<f.length;i++){if(f[i].getAttribute('src')&&f[i].getAttribute('src').toLowerCase()==a.toLowerCase()){g=1}}if(!g){var h=document.createElement('SCRIPT');if(b)h.onreadystatechange=h.onload=b;if(c)h.onerror=c;h.setAttribute('type','text/javascript');h.setAttribute('src',a);d.appendChild(h)}};var $jr=new JR().__init__();if(window.module)module.exports=$jr;$jr.extend({$:function(a,b,c){return $jr.dom.$(a,b,c)},style:function(a,b){var e=a.nodeName?a:this.dom.id(a);if(b instanceof String){e.style.cssText=b;return true}return this.fn.init([e],this).css(b)},loadHTML:function(a,b){var c=/<body[^>]*>([\s\S]+)<\/body>/im;var d=/<script((.|\n)*?)>([\s\S]*?)<\/script>/gim;var f=b.match(c);if(f==null){f=['',b]}if(!a.nodeName)a=this.dom.$(a);if(a){try{a.innerHTML=f[1].replace(d,'').replace(/<style([^>]+)>/ig,'<span style="display:none" class=\"for-ie\">_</span><style$1>');this.$fn(a).find(".for-ie").each(function(i,e){e.remove()});if(window.navigator.userAgent.indexOf('Chrome')!=-1){this.each(a.getElementsByTagName('STYLE'),function(i,e){a.removeChild(e);document.getElementsByTagName('HEAD')[0].appendChild(e)})}}catch(ex){if(window.console){console.log(ex.message)}}}var g=/^[\n\s]+$/g;var h=/type=["']*text\/javascript["']*/i;var j;d.lastIndex=0;while((j=d.exec(b))!=null){if(j[1].indexOf(' type=')==-1||h.test(j[1])){if(!g.test(j[3])){this.eval(j[3])}}}},load:function(c,d,e,f){(function(b){b.xhr.get(d,function(a){b.loadHTML(c,a);if(e){e(a)}},f)}(this))},ld:function(c,d){(function(j,b){j.xhr.get({uri:b+c+'.js',async:false,random:false},function(a){j.eval(a)})}(this,d||this.WORKPATH))}});JR.prototype.plugin=JR.prototype.extend;JR.prototype.ie6=function(){return/MSIE\s*6\.0/.test(window.navigator.userAgent)};JR.prototype.lazyRun=function(a,b){if(a){setTimeout(a,b||120)}};$jr.extend({screen:{width:function(){return Math.max(document.body.clientWidth,document.documentElement.clientWidth)},height:function(){return Math.max(document.body.clientHeight,document.documentElement.clientHeight)},offsetWidth:function(){return Math.max(document.body.offsetWidth,document.documentElement.offsetWidth)},offsetHeight:function(){return Math.max(document.body.offsetHeight,document.documentElement.offsetHeight)}},supportHTML5:navigator.geolocation!=null,getPosition:function(e){return(e.nodeName?e:this.$(e)).getBoundingClientRect()}});(function(r){var o=$jr;if(r){r(function(){return o})}else{window.$b=o;window.jr=o}})(window.define);
$jr.xhr.jsonPost =  function(url, param, success, err) {
    $jr.xhr.request(url, {form: param, method: 'POST', data: 'json'}, this._callback(success, err));
};


if (!window.$b) var $b = $jr;

$jr.extend({ json: { prefix: 'field', _objreg: /(.+)\[([^\]]+)\]/, _dtReg: /^(\d{4}((\/|-)\d{2}){2})T(\d{2}(:\d{2}){2})((\.\d+)*)$/i, _each: function (a, b) { for (var i = 0; i < a.length; i++) { if (b) b(i, a[i]) } }, _getFields: function (b) { var c = this.prefix; var d = {}; var f; var g, subProName, proValue; if (!b.nodeName) b = document.getElementById(b); var h = this._objreg; this._each(b.getElementsByTagName('*'), function (i, e) { if (e.nodeName != '#text' && e.nodeName != '#comment') { g = e.getAttribute(c); if (g) { if (h.test(g)) { var a = h.exec(g); g = a[1]; subProName = a[2]; if (d[g] == null) { d[g] = {} } d[g][subProName] = e } else { d[g] = e } if (!e.name) e.setAttribute('name', c + '_' + g) } } }); return d }, _bindField: function (a, b) { if (this._dtReg.test(b)) { var c = this._dtReg.exec(b); if (c[4] == '00:00:00') { b = b.replace(this._dtReg, '$1') } else { b = b.replace(this._dtReg, '$1 $4') } } switch (a.nodeName) { case 'TEXTAREA': case 'INPUT': switch (a.type) { default: a.value = b; break; case "radio": var d = document.getElementsByName(a.name); for (var i = 0; i < d.length; i++) { d[i].checked = d[i].value == b } break; case 'checkbox': var e = false; if ((b == true && b.toString() != '1') || b == a.value) { e = true } else if (b instanceof Array) { for (var i in b) { if (b[i] == a.value) { e = true; break } } } a.checked = e; break }break; case 'IMG': a.src = b; break; case 'SELECT': a.value = b; break; default: a.innerHTML = b; break } }, _getFieldVal: function (a) { var b = ''; switch (a.nodeName) { case 'TEXTAREA': case 'INPUT': switch (a.type) { default: b = a.value; break; case 'radio': var c = document.getElementsByName(a.name); for (var i = 0; i < c.length; i++) { if (c[i].checked) { b = c[i].value; break } } break; case 'checkbox': b = a.checked ? a.value : ''; break }break; case 'IMG': b = a.src; break; case 'SELECT': b = a.selectedIndex == -1 ? '' : a.options[a.selectedIndex].value; break; default: b = a.innerHTML; break }return b }, bind: function (a, b, c) { var d; var e; var f; d = this._getFields(a); for (var g in d) { e = d[g]; if (c && c instanceof Function) { f = c(g, b[g]) } else { f = b[g] } if (f != null) { if (f instanceof Object) { if (f.length) { for (var i in e) { this._bindField(e[i], f) } } else { for (var i in f) { if (e[i]) { this._bindField(e[i], f[i]) } } } continue } this._bindField(e, f) } } }, __convert: function (a, b, c) { var d; var e; var f; var g = {}; var h = ''; d = this._getFields(a); for (var k in d) { e = d[k]; if (e.nodeName) { f = this._getFieldVal(e); if (c && c instanceof Function) { f = c(k, f) } g[k] = f; h += k + '=' + f + '&' } else { g[k] = {}; var j = 0; var l = false; for (var i in e) { if (j++ == 0 && /^\d+$/.test(i)) { g[k] = []; l = true } if (e[i]) { f = this._getFieldVal(e[i]); if (c && c instanceof Function) { f = c(k, f) } if (f && f != '') { if (l) { g[k].push(f) } else { g[k][i] = f } } h += k + '[' + i + ']=' + f + '&' } } } } return b == "object" ? g : h.replace(/&$/g, '') }, toObject: function (a) { return this.__convert(a, 'object') }, toQueryString: function (a) { return this.__convert(a, 'string') }, toString: function (a) { return this.__convert(a, 'string').replace(/&/g, ';').replace(/=/g, ':') }, string: function (o) { var a = this; var b = []; var c = function (s) { if (typeof s == 'object' && s != null) a.string(s); return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s }; for (var i in o) { if (o.hasOwnProperty(i)) { var d = c(o[i]); if (d.pop) { b.push("'" + i + "':[\'" + escape(d.join('\',\'')) + '\']') } else { b.push("'" + i + "':" + escape(d)) } } } return '{' + escape(b.join(',')) + '}' } } });

var DialogText={ALERT_MSG_TPL:'<div class="ui-alert-message">'+'<span class="alert-icon alert-icon-{icon}"></span>{msg}</div>',ALERT_BTN_TPL:'<input type="button" tag="{tag}" value="{text}"/>',ALERT_ALL_TITLE:'提示',ALERT_BTN_OK_TEXT:'确定',ALERT_BTN_CANCEL_TEXT:'取消'};function simpleDialog(a){this.window=window;this.opts={initialized:false,id:parseInt(1000+Math.random()*8999+(new Date()).valueOf()%1000),title:a.title||'窗口',drag:a.drag!=false,className:a.className||"gra-modal ui-dialog",setupFade:false,canNotClose:false,onclose:null,cross:a.cross!=false,textArr:DialogText,};this.eles={panel:null,con:null,box:null,};this.win=window;this.doc=null;if(this.opts.cross!=false){while(this.win.parent!=this.win){this.win=this.win.parent}}this.doc=this.win.document}simpleDialog.prototype={newElement:function(a,b){var e=document.createElement(a);for(i in b){e.setAttribute(i,b[i])}return e},_initialize:function(){with(this.opts){if(initialized){return false}var a=this.doc;var b='position:fixed;top:0;left:0;bottom:0;right:0;margin:auto';this.eles.panel=this.newElement('DIV',{"id":'panel_'+id,"class":className});a.body.appendChild(this.eles.panel);this.eles.panel.appendChild(this.newElement('DIV',{"class":'dialog-mask mask',"style":'z-index:99;'+b}));var c='z-index:100;'+b;this.eles.box=this.newElement('DIV',{"class":'modal box',"style":c});this.eles.panel.appendChild(this.eles.box);if(title){var e='<span class="left corner" style="position:absolute;left:0;top:0">&nbsp;</span><span class="txt">'+title+'</span>';if(!canNotClose){e+='<span class="close" style="position:absolute;right:5px;top:0;">'+'<i class="fa fa-times" aria-hidden="true"></i></span>'}e+='<span class="right corner" style="position:absolute;right:0;top:0">&nbsp;</span>';var f=this.newElement('DIV',{"class":'title',"style":'user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;'});f.innerHTML=e;this.eles.box.appendChild(f);f.getElementsByTagName('SPAN')[2].onclick=(function(d){return function(){d.close()}})(this);this.win['dialog_'+this.id]=this;if(drag){new dragObject(f,this.win).start(this.eles.box)}}this.eles.con=this.newElement('DIV',{"class":'content con'});this.eles.box.appendChild(this.eles.con);if(title){var g=a.createElement("div");g.className='bottom';g.style.cssText="position:relative;";g.innerHTML='<span class="left corner" style="position:absolute;left:0;">&nbsp;</span><span class="txt">&nbsp;</span><span class="right corner" style="position:absolute;right:0;">&nbsp;</span>';this.eles.box.appendChild(g)}initialized=true}},getPanel:function(){return this.eles.panel},hiddenBox:function(){with(this.eles.box){style.visibility='hidden';style.left='inherit';style.bottom='inherit'}},showBox:function(){with(this.eles.box){style.visibility='';style.width=offsetWidth+'px';style.height=scrollHeight+'px';style.left='0';style.bottom='0'}},getFrameWindow:function(){var a=this.eles.panel.getElementsByTagName('IFRAME');if(a.length>0){return a[0].contentWindow}return null},getTargetWindow:function(){return this.win},getWindow:function(){return this.window},callback:function(a,b){var f=this.getWindow()[a];if(f&&f instanceof Function){f(b)}},open:function(a,b,c,d){this._initialize();this.hiddenBox();if(a.length>0&&a[0]!='/'&&a.indexOf('//')!=0&&a.indexOf('https://')==-1&&a.indexOf('http://')==-1){var e=this.getWindow().location.pathname;a=e.substring(0,e.lastIndexOf('/')+1)+a}this.eles.con.innerHTML+="<iframe frameborder='0' scrolling='"+(d||'auto')+"' src='"+a+"' width='"+(b||'100%')+"' style='padding:0' height='"+(c||'100%')+"'></iframe>";this.showBox()},write:function(a){this._initialize();this.hiddenBox();var b=this.eles.con;if(!this.opts.title){b.innerHTML=a}else{b.innerHTML+=a}this.showBox()},async:function(a,b,c,d){return this.load(a,b,c,d)},load:function(a,b,c,e){this._initialize();this.hiddenBox();var f=$jr.xhr;var g=(function(d){return function(x){$jr.loadHTML(d.eles.con,x);d.showBox();if(e)e(x)}})(this);if(!b||b.toLowerCase()=="get"){f.get(a,g)}else{f.post(a,c,g)}},custom:function(p){this._initialize();this.hiddenBox();var d=this;d.write($jr.template(this.opts.textArr.ALERT_MSG_TPL,{msg:p.message,icon:p.icon}));var b='';for(var i=0;i<p.buttons.length;i++){var e=p.buttons[i];if(e&&e.tag){b+=$jr.template(this.opts.textArr.ALERT_BTN_TPL,{tag:e.tag,text:e.text})}}var c=Math.floor(Math.random()*10000);d.write('<div class="ui-alert-control" id="ui-alert-control-'+c+'">'+b+'</div>');this.showBox();var f=d.getTargetWindow().document.getElementById('ui-alert-control-'+c);var g=f.getElementsByTagName('INPUT');for(var i=0;i<g.length;i++){if(i===0){g[i].focus()}g[i].onclick=(function(d,p){return function(){var a=this.getAttribute('tag');if(p.click&&p.click instanceof Function){if(p.click(a,d)){d.close()}}else{d.close()}}})(d,p)}return d},closeDialog:function(){this.win.document.body.removeChild(this.eles.panel)},close:function(a){if(this.opts.onclose!=null&&this.opts.onclose()==false){return false}this.closeDialog();if(a)a();try{delete this.win['dialog_'+this.id]}catch(ex){this.win['dialog_'+this.id]=null}this.opts.initialized=false}};function dragObject(a,b){this.elem=a;this.win=b}dragObject.prototype.regist=function(a,b,c,d){var o=this.elem;a=a?a:o;var f,sy;var g=this.win==null?g:this.win.document;o.style.cursor=b||"move";var h=c||function(e){e=e||event;window.getSelection?window.getSelection().removeAllRanges():g.selection.empty();if(e.preventDefault)e.preventDefault();with(a.style){position="absolute";margin='inherit';left=e.clientX-f+"px";top=e.clientY-sy+"px"}};$jr.event.add(o,"mousedown",function(e){e=e||event;if(e.button==1||e.button==0){f=e.clientX-a.offsetLeft;sy=e.clientY-a.offsetTop;$jr.event.add(g,'mousemove',h,false);$jr.event.add(g,'mouseup',i,false)}},false);var i=function(){$jr.event.remove(g,'mousemove',h,false);$jr.event.remove(g,'mouseup',i,false);if(d&&d instanceof Function)d()}};dragObject.prototype.custom=function(a,b,c,d){return this.regist(a,b,c,d)};dragObject.prototype.start=function(a){this.regist(a,null,null,null)};var SimpleDialog={create:function(a){return new simpleDialog(a)},create2:function(a,b,c,d,e){return new simpleDialog({title:a,drag:b||false,cross:c||false,"className":e,onclose:d})},getDialog:function(){var b=null;var c=/^dialog_/i;var e=window;var f=function(a){var d=null;for(var i in a){if(c.test(i)&&a[i]!=null){d=a[i];break}}return d};do{b=f(e);if(b==null){e=e.parent;b=f(e)}if(b){break}}while(e.parent!=e);return b},close:function(){var d=this.getDialog();if(d)d.close()},customAlert:function(p){var a=DialogText.ALERT_ALL_TITLE+'-'+(p.title||'');a=a.replace(/^-|-$/g,'');var d=this.create({title:a,className:"ui-dialog custom-dialog",drag:p.drag||true,cross:p.cross||true,canClose:false});return d.custom(p)},alert:function(a,b,c,d){return this.customAlert({icon:c,message:a,buttons:[{tag:'ok',text:d||DialogText.ALERT_BTN_OK_TEXT}],click:function(){if(b instanceof Function)b();return true}})},confirm:function(b,c,d){var e=DialogText.ALERT_BTN_OK_TEXT;var f=DialogText.ALERT_BTN_CANCEL_TEXT;if(d instanceof Array&&d.length===2){e=d[0];f=d[1]}return this.customAlert({icon:'confirm',message:b,buttons:[{tag:'ok',text:e},{tag:'cancel',text:f}],click:function(a){if(c instanceof Function){c(a!='cancel')}return true}})}};(function(r){if(r){var c={dialog:window.SimpleDialog,drag:function(a,b){return new dragObject(a,b)}};r.extend(c)}})(window.$jr);
$jr.extend({ json: { prefix: 'field', _objReg: /(.+)\[([^\]]+)\]/, _dtReg: /^(\d{4}((\/|-)\d{2}){2})T(\d{2}(:\d{2}){2})((\.\d+)*)$/i, _each: function (a, b) { for (var i = 0; i < a.length; i++) { if (b) b(i, a[i]) } }, _getFields: function (b) { var c = this.prefix; var d = {}; var f; var g, subProName, proValue; if (!b.nodeName) b = document.getElementById(b); var h = this._objReg; this._each(b.getElementsByTagName('*'), function (i, e) { if (e.nodeName != '#text' && e.nodeName != '#comment') { g = e.getAttribute(c); if (g) { if (h.test(g)) { var a = h.exec(g); g = a[1]; subProName = a[2]; if (d[g] == null) { d[g] = {} } d[g][subProName] = e } else { d[g] = e } if (!e.name) e.setAttribute('name', c + '_' + g) } } }); return d }, _bindField: function (a, b) { if (this._dtReg.test(b)) { var c = this._dtReg.exec(b); if (c[4] == '00:00:00') { b = b.replace(this._dtReg, '$1') } else { b = b.replace(this._dtReg, '$1 $4') } } switch (a.nodeName) { case 'TEXTAREA': case 'INPUT': switch (a.type) { default: a.value = b; break; case "radio": var d = document.getElementsByName(a.name); for (var i = 0; i < d.length; i++) { if (d[i].value == b) { d[i].setAttribute('checked', 'checked'); break } } break; case 'checkbox': var e = false; if ((b == true && b.toString() != '1') || b == a.value) { e = true } else if (b.length) { for (var i in b) { if (b[i] == a.value) { e = true; break } } } if (e) { a.setAttribute('checked', 'checked') } else { a.removeAttribute('checked') } break } break; case 'IMG': a.src = b; break; case 'SELECT': a.value = b; break; default: a.innerHTML = b; break } }, _getFieldVal: function (a) { var b = ''; switch (a.nodeName) { case 'TEXTAREA': case 'INPUT': switch (a.type) { default: b = a.value; break; case 'radio': var c = document.getElementsByName(a.name); for (var i = 0; i < c.length; i++) { if (c[i].checked) { b = c[i].value; break } } break; case 'checkbox': b = a.checked ? a.value : ''; break } break; case 'IMG': b = a.src; break; case 'SELECT': b = a.selectedIndex == -1 ? '' : a.options[a.selectedIndex].value; break; default: b = a.innerHTML; break } return b }, bind: function (a, b, c) { var d; var e; var f; d = this._getFields(a); for (var g in d) { e = d[g]; if (c && c instanceof Function) { f = c(g, b[g]) } else { f = b[g] } if (f != null) { if (f instanceof Object) { if (f.length) { for (var i in e) { this._bindField(e[i], f) } } else { for (var i in f) { if (e[i]) { this._bindField(e[i], f[i]) } } } continue } this._bindField(e, f) } } }, __convert: function (a, b, c) { var d; var e; var f; var g = {}; var h = ''; d = this._getFields(a); for (var k in d) { e = d[k]; if (e.nodeName) { f = this._getFieldVal(e); if (c && c instanceof Function) { f = c(k, f) } g[k] = f; h += k + '=' + f + '&' } else { g[k] = {}; var j = 0; var l = false; for (var i in e) { if (j++ == 0 && /^\d+$/.test(i)) { g[k] = []; l = true } if (e[i]) { f = this._getFieldVal(e[i]); if (c && c instanceof Function) { f = c(k, f) } if (f && f != '') { if (l) { g[k].push(f) } else { g[k][i] = f } } h += k + '[' + i + ']=' + f + '&' } } } } return b == "object" ? g : h.replace(/&$/g, '') }, toObject: function (a) { return this.__convert(a, 'object') }, toQueryString: function (a) { return this.__convert(a, 'string') }, toString: function (a) { return this.__convert(a, 'string').replace(/&/g, ';').replace(/=/g, ':') }, string: function (o) { var a = this; var b = []; var c = function (s) { if (typeof s == 'object' && s != null) a.string(s); return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s }; for (var i in o) { if (o.hasOwnProperty(i)) { var d = c(o[i]); if (d.pop) { b.push("'" + i + "':[\'" + escape(d.join('\',\'')) + '\']') } else { b.push("'" + i + "':" + escape(d)) } } } return '{' + escape(b.join(',')) + '}' } } });
function HS_DateAdd(a, b, c) { b = parseInt(b); if (typeof (c) == "string") { var c = new Date(c.split("-")[0], c.split("-")[1], c.split("-")[2]) } if (typeof (c) == "object") { var c = c } switch (a) { case "y": return new Date(c.getFullYear() + b, c.getMonth(), c.getDate()); break; case "m": return new Date(c.getFullYear(), c.getMonth() + b, checkDate(c.getFullYear(), c.getMonth() + b, c.getDate())); break; case "d": return new Date(c.getFullYear(), c.getMonth(), c.getDate() + b); break; case "w": return new Date(c.getFullYear(), c.getMonth(), 7 * b + c.getDate()); break } } function checkDate(a, b, c) { var d = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]; var e = ""; if (a % 4 == 0) { d[1] = "29" } if (c > d[b]) { e = d[b] } else { e = c } return e } function WeekDay(a) { var b; if (typeof (a) == "string") { b = new Date(a.split("-")[0], a.split("-")[1], a.split("-")[2]) } if (typeof (a) == "object") { b = a } return b.getDay() } function HS_calender() { var a = ""; var b = ""; b += "<style type='text/css'>"; b += ".calender {width:170px; height:auto; font-size:12px; margin-right:14px; background:#fff; border:1px solid #6699cc; padding:1px}"; b += ".calender ul {list-style-type:none; margin:0; padding:0;}"; b += ".calender .day { background-color:#EDF5FF; height:20px;}"; b += ".calender .day li,.calender .date li{ float:left; width:14%; height:20px; line-height:20px; text-align:center}"; b += ".calender li a { text-decoration:none; font-family:Tahoma; font-size:11px; color:#333}"; b += ".calender li a:hover { color:#f30; text-decoration:underline}"; b += ".calender li a.hasArticle {font-weight:bold; color:#f60 !important}"; b += ".lastMonthDate, .nextMonthDate {color:#bbb;font-size:11px}"; b += ".selectThisYear a, .selectThisMonth a{text-decoration:none; margin:0 2px; color:#000; font-weight:bold}"; b += ".calender .LastMonth, .calender .NextMonth{ text-decoration:none; color:#000; font-size:18px; font-weight:bold; line-height:16px;}"; b += ".calender .LastMonth { float:left;}"; b += ".calender .NextMonth { float:right;}"; b += ".calenderBody {clear:both}"; b += ".calenderTitle {text-align:center;height:20px; line-height:20px; clear:both}"; b += ".today { background-color:#ffffaa;border:1px solid #f60; padding:2px}"; b += ".today a { color:#f30; }"; b += ".calenderBottom {clear:both; border-top:1px solid #ddd; padding: 3px 0; text-align:left}"; b += ".calenderBottom a {text-decoration:none; margin:2px !important; font-weight:bold; color:#000}"; b += ".calenderBottom a.closeCalender{float:right}"; b += ".closeCalenderBox {float:right; border:1px solid #000; background:#fff; font-size:9px; width:11px; height:11px; line-height:11px; text-align:center;overflow:hidden; font-weight:normal !important}"; b += "</style>"; var c; if (typeof (arguments[0]) == "string") { selectDate = arguments[0].split("-"); var d = selectDate[0]; var e = parseInt(selectDate[1]) - 1 + ""; var f = selectDate[2]; c = new Date(d, e, f) } else if (typeof (arguments[0]) == "object") { c = arguments[0] } var g = HS_DateAdd("d", "-1", c.getFullYear() + "-" + c.getMonth() + "-01").getDate(); var h = WeekDay(c.getFullYear() + "-" + c.getMonth() + "-01"); var k = HS_DateAdd("d", "-1", c.getFullYear() + "-" + (parseInt(c.getMonth()) + 1).toString() + "-01"); var l = k.getDate(); var n = k.getDay(); var o = c; today = o.getFullYear() + "-" + o.getMonth() + "-" + o.getDate(); var p = ''; for (i = 0; i < h; i++) { a = "<li class='lastMonthDate'>" + g + "</li>" + a; g-- } for (i = 1; i <= l; i++) { var m = parseInt(c.getMonth()) + 1; var q = c.getFullYear() + "-" + (m > 10 ? m : '0' + m) + "-" + (i < 10 ? '0' + i : i); if (today == c.getFullYear() + "-" + c.getMonth() + "-" + i) { p = c.getFullYear() + "-" + (parseInt(c.getMonth()) + 1).toString() + "-" + i; a += "<li><a href=javascript:void(0) class='today' onclick='_selectThisDay(this)' title='" + q + "'>" + i + "</a></li>" } else { a += "<li><a href=javascript:void(0) onclick='_selectThisDay(this)' title='" + q + "'>" + i + "</a></li>" } } var j = 1; for (i = n; i < 6; i++) { a += "<li class='nextMonthDate'>" + j + "</li>"; j++ } a += b; var r = "<a href='javascript:void(0)' class='NextMonth' onclick=HS_calender(HS_DateAdd('m',1,'" + c.getFullYear() + "-" + c.getMonth() + "-" + c.getDate() + "'),this) title='Next Month'>&raquo;</a>"; r += "<a href='javascript:void(0)' class='LastMonth' onclick=HS_calender(HS_DateAdd('m',-1,'" + c.getFullYear() + "-" + c.getMonth() + "-" + c.getDate() + "'),this) title='Previous Month'>&laquo;</a>"; r += "<span class='selectThisYear'><a href='javascript:void(0)' onclick='CalenderselectYear(this)' title='Click here to select other year' >" + c.getFullYear() + "</a></span>年<span class='selectThisMonth'><a href='javascript:void(0)' onclick='CalenderselectMonth(this)' title='Click here to select other month'>" + (parseInt(c.getMonth()) + 1).toString() + "</a></span>月"; if (arguments.length > 1) { arguments[1].parentNode.parentNode.getElementsByTagName("ul")[1].innerHTML = a; arguments[1].parentNode.innerHTML = r } else { var s = b + "<div class='calender'><div class='calenderTitle'>" + r + "</div><div class='calenderBody'><ul class='day'><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ul class='date' id='thisMonthDate'>" + a + "</ul></div><div class='calenderBottom'><a href='javascript:void(0)' class='closeCalender' onclick='closeCalender(this)'>&times;</a><span><span><a href=javascript:void(0) onclick='_selectThisDay(this)' title='" + p + "'>Today</a></span></span></div></div>"; return s } } function _selectThisDay(d) { var a = d.parentNode.parentNode.parentNode.parentNode.parentNode; a.targetObj.value = d.title; a.parentNode.removeChild(a) } function closeCalender(d) { var a = d.parentNode.parentNode.parentNode; a.parentNode.removeChild(a) } function CalenderselectYear(a) { var b = ""; var c = a.innerHTML; for (i = 1970; i <= 2020; i++) { if (i == c) { b += "<option value=" + i + " selected>" + i + "</option>" } else { b += "<option value=" + i + ">" + i + "</option>" } } b = "<select onblur='selectThisYear(this)' onchange='selectThisYear(this)' style='font-size:11px'>" + b + "</select>"; a.parentNode.innerHTML = b } function selectThisYear(a) { HS_calender(a.value + "-" + a.parentNode.parentNode.getElementsByTagName("span")[1].getElementsByTagName("a")[0].innerHTML + "-1", a.parentNode) } function CalenderselectMonth(a) { var b = ""; var c = a.innerHTML; for (i = 1; i <= 12; i++) { if (i == c) { b += "<option value=" + i + " selected>" + i + "</option>" } else { b += "<option value=" + i + ">" + i + "</option>" } } b = "<select onblur='selectThisMonth(this)' onchange='selectThisMonth(this)' style='font-size:11px'>" + b + "</select>"; a.parentNode.innerHTML = b } function selectThisMonth(a) { HS_calender(a.parentNode.parentNode.getElementsByTagName("span")[0].getElementsByTagName("a")[0].innerHTML + "-" + a.value + "-1", a.parentNode) } function setDate(a) { var b = new Date(); if (a.value != '') { b = new Date(a.value) } var c = document.createElement("span"); c.innerHTML = HS_calender(b); c.style.cssText += "position:absolute;z-index:996;"; c.targetObj = a; a.parentNode.insertBefore(c, a.nextSibling) } jr.extend({ calender: function (a) { if (!a.nodeName) a = document.getElementById(a); jr.event.add(a, 'focus', function () { setDate(this) }) }, setDate: function (a) { setDate(a) } });
var grids={};function datagrid(ele,config){this.panel=ele.nodeName?ele:$jr.$(ele);this.opts={idField:config.idField||"id",url:config.url,data:config.data||{},rows:config.size>0?config.size:10,page:1,pagination:config.pagination==true?true:false,paginationNum:config.paginationNum||5,columns:config.columns[0]instanceof Array?config.columns[0]:config.columns,afterLoad:config.afterLoad||config.loaded,beforeLoad:config.beforeLoad,};this.pgEle=null;this.loadbox=null;this.gridView=null;if(this.panel.id){grids[this.panel.id]=this}this.initLayout();this.load()}datagrid.prototype={options:function(obj){if(obj instanceof Object){for(var attr in obj){this.opts[attr]=obj[attr]}}return this.opts},loading:function(){if(this.gridView.offsetHeight===0){var headerHeight=this.gridView.previousSibling.offsetHeight;var gridviewHeight=this.panel.offsetHeight-headerHeight;this.gridView.style.cssText=this.gridView.style.cssText.replace(/(\s*)height:[^;]+;/ig,' height:'+(gridviewHeight>headerHeight?gridviewHeight+'px;':'auto'));var ldLft=Math.ceil((this.gridView.clientWidth-this.loadbox.offsetWidth)/2);var ldTop=Math.ceil((this.gridView.clientHeight-this.loadbox.offsetHeight)/2);this.loadbox.style.cssText=this.loadbox.style.cssText.replace(/(;\s*)*left:[^;]+;([\s\S]*)(\s)top:([^;]+)/ig,'$1left:'+ldLft+'px;$2 top:'+(ldTop<0?-ldTop:ldTop)+'px')}this.loadbox.style.display=''},initLayout:function(){var html='';var cols=this.opts.columns;if(cols&&cols.length!=0){html+='<div class="ui-datagrid-header"><table width="100%" cellspacing="0" cellpadding="0"><tr>';for(var i=0;i<cols.length;i++){html+='<td'+(i==0?' class="first"':'')+(cols[i].align?' align="'+cols[i].align+'"':'')+(cols[i].width?' width="'+cols[i].width+'"':'')+'><div class="ui-datagrid-header-title">'+cols[i].title+'</div></td>'}html+='</tr></table></div>';html+='<div class="ui-datagrid-msg" style="position: absolute; display: inline-block;min-width:60px;top:0;bottom:0;left:0;right:0;margin:auto;">加载中...</div>'+'<div class="ui-datagrid-view"></div>'}this.panel.innerHTML=html;if(this.opts.pagination){this.pgEle=document.createElement('DIV');this.pgEle.className='ui-pagination';this.panel.appendChild(this.pgEle)}this.gridView=(this.panel.getElementsByClassName?this.panel.getElementsByClassName('ui-datagrid-view'):$jr.dom.getsByClass(this.panel,'ui-datagrid-view'))[0];this.loadbox=this.gridView.previousSibling},fillRows:function(code,data){if(!data)return;var item;var col;var val;var html='';var rows=data['rows']||data;if(this.opts.pagination){$jr.pagination({ele:this.pgEle,total:data.total,size:this.opts.rows,curr:this.opts.page,num:this.opts.paginationNum,pageChanged:(function(t){return function(pn){t.opts.page=pn;t.load()}})(this),})}html+='<table width="100%" cellspacing="0" cellpadding="0">';for(var i=0;i<rows.length;i++){item=rows[i];html+='<tr'+(item[this.opts.idField]!=null?' data-indent="'+item[this.opts.idField]+'"':'')+'>';for(var j=0;j<this.opts.columns.length;j++){col=this.opts.columns[j];val=item[col.field];html+='<td'+(j==0?' class="first"':'')+(col.align?' align="'+col.align+'"':'')+(i==0&&col.width?' width="'+col.width+'"':'')+'><div class="field-value">'+(col.formatter&&col.formatter instanceof Function?col.formatter(val,item,i):val)+'</div></td>'}html+='</tr>'}html+="</table>";this.gridView.innerHTML=html;this.gridView.srcollTop=0;this.loadbox.style.display='none';if(this.opts.afterLoad&&this.opts.afterLoad instanceof Function)this.opts.afterLoad(data)},_fixPosition:function(){},_load_data:function(func){if(!this.opts.url)return;if(this.opts.beforeLoad&&this.opts.beforeLoad instanceof Function){this.opts.beforeLoad()}else{this.loading()}this.opts.data.rows=this.opts.rows;this.opts.data.page=this.opts.page;var t=this;$jr.xhr.request(this.opts.url,{form:this.opts.data,method:'POST'},{success:function(json){t.fillRows(1,json)},error:function(){t.fillRows(0,{})}})},resize:function(){this._fixPosition()},load:function(data){if(data&&data instanceof Object){this.fillRows(1,data);return}this._load_data()},reload:function(params,data){if(params){this.opts.data=params}this.load(data)}};(function(r){var obj={grid:function(ele,config){return new datagrid(ele,config)},dataGrid:function(ele,config){if(!config&&typeof(ele)=='string'){return grids[ele]}return new datagrid(ele,config)}};r.extend(obj)})(window.$jr);
$jr.extend({ form: { getData: function (a) { var b = ''; var c = document.forms[a || 0]; return $jr.json.toQueryString(c) }, asyncSubmit: function (a, b) { var c = document.forms[a || 0]; var d = document.getElementById('$async_ifr'); if (!d) { try { d = document.createElement('<iframe name="$async_ifr">') } catch (ex) { d = document.createElement('iframe'); d.setAttribute('name', '$async_ifr') } d.setAttribute('id', '$async_ifr'); if (!b) { d.style.cssText = 'display:none' } else { d.style.cssText = 'width:600px;height:400px' } document.body.insertBefore(d, document.body.firstChild) } if (c.getAttribute('target') != d.name) { c.setAttribute('target', d.getAttribute('name')) } c.submit() } } });
var JS_scrollbar = { $: window.$b, pnode: null, ele: null, startP: { x: 0, y: 0 }, moveP: { x: 0, y: 0, z: -1 }, slideBar: null, init: function (e) { this.ele = e.nodeName ? e : document.getElementById(e); this.pnode = document.createElement('DIV'); this.slideBar = null; this.timer = null; var a = this.ele.parentNode; a.insertBefore(this.pnode, this.ele); this.pnode.appendChild(this.ele); this.pnode.className = 'scrollbar'; this.pnode.style.cssText += 'height:' + this.ele.clientHeight + 'px;overflow:hidden;position:relative'; this.ele.style.height = 'auto'; this.ele.style.position = 'absolute'; this.showbar(); return this }, showbar: function () { var c = this.pnode.clientHeight / this.ele.scrollHeight; var d = document.createElement('DIV'); var f = 0; d.className = 'bar'; d.style.cssText = 'position:absolute;right:0;top:0;height:' + this.pnode.clientHeight + 'px'; this.pnode.appendChild(d); var g = document.createElement('DIV'); g.className = 'btn'; g.innerHTML = '<div class="top"></div><div class="center"></div><div class="bottom"></div>'; g.style.cssText = 'height:' + Math.round(c * d.clientHeight) + 'px;'; d.appendChild(g); if (this.$.style(g)['backgroundImage'] == 'none' && this.$.style(g)['backgroundColor'] == 'transparent') { g.style.backgroundColor = '#a0a0a0' } if (!/^(?!0)\d+px$/.test(this.$.style(d)['width'])) { d.style.width = '12px'; d.style.backgroundColor = '#f5f5f5' } this.pnode.style.width = (this.ele.offsetWidth + d.offsetWidth) + 'px'; this.sliderBar = g; var t = this; var h; var i = function (a) { t.$.event.remove(document.body, 'mousemove', h) }; this.$.event.add(g, 'mousedown', function () { var e = window.event || arguments[0]; var b = e.clientY - g.offsetTop; h = function () { var a = (window.event || arguments[0]).clientY - b; t.scroll(a); window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty() }; t.$.event.add(document.body, 'mousemove', h) }); document.body.onmouseup = i }, scroll: function (a) { var b = this.sliderBar.parentNode.offsetHeight - this.sliderBar.offsetHeight; if (a < 0) a = 0; if (a > b) a = b; var c = a / b; this.sliderBar.style.marginTop = a + 'px'; this.ele.style.top = -Math.round((this.ele.offsetHeight - this.pnode.offsetHeight) * c + 1) + 'px' } }; jr.extend({ scrollbar: function (e) { return JS_scrollbar.init(e) } }); jr.event.add(window, 'load', function () { jr.each(document.getElementsByClassName('ui-scrollbar'), function (i, e) { JS_scrollbar.init(e) }) });
$jr.extend({ table: { dynamic: function (f, g, h) { if (f && f.nodeName === "TABLE") { f.className += ' ui-table'; var j = f.getElementsByTagName('TH'); window.jr.each(j, function (i, e) { if (i != j.length - 1) { if ((e.getElementsByClassName ? e.getElementsByClassName('th-split') : document.getElementsByClassName('th-split', e)).length == 0) { var a = document.createElement("SPAN"); a.className = 'th-split'; e.appendChild(a) } } }); var k = f.getElementsByTagName("tr"); for (var i = 0; i < k.length; i++) { if (i % 2 == 1) if (!k[i].className) k[i].className = 'even'; k[i].onmouseover = function () { if (this.className.indexOf('selected') == -1) { this.className = this.className.indexOf('even') != -1 ? "hover even" : "hover" } }; k[i].onmouseout = function () { if (this.className.indexOf('selected') == -1) { this.className = this.className.indexOf("even") == -1 ? "" : "even" } }; k[i].onclick = (function (b, c, d) { return function () { var a = new Array(); window.jr.each(b, function (i, e) { if (!d) { if (e != c) { e.className = e.className.indexOf("even") == -1 ? "" : "even" } } if (e.className.indexOf('selected') != -1) { a.push(e) } }); if (c.className.indexOf('selected') == -1) { c.className = c.className.indexOf("even") == -1 ? "selected" : "selected even"; a.push(c) } if (h) { h(a) } } })(k, k[i], g) } } } } });
function Node(a, b, c, d, e, f, g, h, i, j) { this.id = a; this.pid = b; this.name = c; this.url = d; this.title = e; this.value = f; this.target = g; this.icon = h; this.iconOpen = i; this._io = j || false; this._is = false; this._ls = false; this._hc = false; this._ai = 0; this._p = 0 } function dTree(a, b) { this.config = { iconPath: b || '', target: null, folderLinks: true, useSelection: true, useCookies: !true, useLines: true, useIcons: true, useStatusText: false, closeSameLevel: false, inOrder: false }; var c = this.config.iconPath; this.icon = { root: c + 'img/base.gif', folder: c + 'img/folder.gif', folderOpen: c + 'img/folderopen.gif', node: c + 'img/page.gif', empty: c + 'img/empty.gif', line: c + 'img/line.gif', join: c + 'img/join.gif', joinBottom: c + 'img/joinbottom.gif', plus: c + 'img/plus.gif', plusBottom: c + 'img/plusbottom.gif', minus: c + 'img/minus.gif', minusBottom: c + 'img/minusbottom.gif', nlPlus: c + 'img/nolines_plus.gif', nlMinus: c + 'img/nolines_minus.gif' }; this.obj = a; this.aNodes = []; this.aIndent = []; this.root = new Node(-1); this.selectedNode = null; this.selectedFound = false; this.completed = false } dTree.prototype.add = function (a, b, c, d, e, f, g, h, i, j) { this.aNodes[this.aNodes.length] = new Node(a, b, c, d, e, f, g, h, i, j) }; dTree.prototype.bind = function (d, f) { this.add(0, -1, '<b class="title">' + d.text + '</b>', d.url, d.text, '', d.icon); var g = 0; var h = d; var k = this; var l = function (j, b) { var c = j.childs; jr.each(c, function (i, e) { var a = e.url || 'javascript:void(0);'; if (e.icon && e.icon != '' && e.icon.indexOf('/') == -1) { e.icon = k.config.iconPath + e.icon } k.add(++g, b, e.text, a, '', e.value, '', e.icon, null, e.open); l(e, g) }) }; l(d, 0); if (f && f instanceof Function) f() }; dTree.prototype.openAll = function () { this.oAll(true) }; dTree.prototype.closeAll = function () { this.oAll(false) }; dTree.prototype.toString = function () { var a = '<div class="ui-tree dtree">\n'; if (document.getElementById) { if (this.config.useCookies) this.selectedNode = this.getSelected(); a += this.addNode(this.root) } else a += 'Browser not supported.'; a += '</div>'; if (!this.selectedFound) this.selectedNode = null; this.completed = true; return a }; dTree.prototype.addNode = function (a) { var b = ''; var n = 0; if (this.config.inOrder) n = a._ai; for (n; n < this.aNodes.length; n++) { if (this.aNodes[n].pid == a.id) { var c = this.aNodes[n]; c._p = a; c._ai = n; this.setCS(c); if (!c.target && this.config.target) c.target = this.config.target; if (c._hc && !c._io && this.config.useCookies) c._io = this.isOpen(c.id); if (!this.config.folderLinks && c._hc) c.url = null; if (this.config.useSelection && c.id == this.selectedNode && !this.selectedFound) { c._is = true; this.selectedNode = n; this.selectedFound = true } b += this.node(c, n); if (c._ls) break } } return b }; dTree.prototype.node = function (a, b) { var c = '<div class="node">' + this.indent(a, b); if (this.config.useIcons) { if (!a.icon) a.icon = (this.root.id == a.pid) ? this.icon.root : ((a._hc) ? this.icon.folder : this.icon.node); if (!a.iconOpen) a.iconOpen = (a._hc) ? this.icon.folderOpen : this.icon.node; if (this.root.id == a.pid) { a.icon = this.icon.root; a.iconOpen = this.icon.root } c += '<img id="i' + this.obj + b + '" src="' + ((a._io) ? a.iconOpen : a.icon) + '" alt="" />' } if (a.url) { c += '<a id="s' + this.obj + b + '" class="' + ((this.config.useSelection) ? ((a._is ? 'nodeSel' : 'node')) : 'node') + '" href="' + a.url + '"'; if (a.title) c += ' title="' + a.title + '"'; if (a.target) c += ' target="' + a.target + '"'; if (this.config.useStatusText) c += ' onmouseover="window.status=\'' + a.name + '\';return true;" onmouseout="window.status=\'\';return true;" '; if (this.config.useSelection && ((a._hc && this.config.folderLinks) || !a._hc)) c += ' onclick="javascript: ' + this.obj + '.s(' + b + ');" node-value="' + a.value + '"'; c += '>' } else if ((!this.config.folderLinks || !a.url) && a._hc && a.pid != this.root.id) c += '<a href="javascript: ' + this.obj + '.o(' + b + ');" class="node" node-value="' + a.value + '">'; c += a.name; if (a.url || ((!this.config.folderLinks || !a.url) && a._hc)) c += '</a>'; c += '</div>'; if (a._hc) { c += '<div id="d' + this.obj + b + '" class="clip" style="display:' + ((this.root.id == a.pid || a._io) ? 'block' : 'none') + ';">'; c += this.addNode(a); c += '</div>' } this.aIndent.pop(); return c }; dTree.prototype.indent = function (a, b) { var c = ''; if (this.root.id != a.pid) { for (var n = 0; n < this.aIndent.length; n++) c += '<img src="' + ((this.aIndent[n] == 1 && this.config.useLines) ? this.icon.line : this.icon.empty) + '" alt="" />'; (a._ls) ? this.aIndent.push(0) : this.aIndent.push(1); if (a._hc) { c += '<a href="javascript: ' + this.obj + '.o(' + b + ');"><img id="j' + this.obj + b + '" src="'; if (!this.config.useLines) c += (a._io) ? this.icon.nlMinus : this.icon.nlPlus; else c += ((a._io) ? ((a._ls && this.config.useLines) ? this.icon.minusBottom : this.icon.minus) : ((a._ls && this.config.useLines) ? this.icon.plusBottom : this.icon.plus)); c += '" alt="" /></a>' } else c += '<img src="' + ((this.config.useLines) ? ((a._ls) ? this.icon.joinBottom : this.icon.join) : this.icon.empty) + '" alt="" />' } return c }; dTree.prototype.setCS = function (a) { var b; for (var n = 0; n < this.aNodes.length; n++) { if (this.aNodes[n].pid == a.id) a._hc = true; if (this.aNodes[n].pid == a.pid) b = this.aNodes[n].id } if (b == a.id) a._ls = true }; dTree.prototype.getSelected = function () { var a = this.getCookie('cs' + this.obj); return (a) ? a : null }; dTree.prototype.s = function (a) { if (!this.config.useSelection) return; var b = this.aNodes[a]; if (b._hc && !this.config.folderLinks) return; if (this.selectedNode != a) { if (this.selectedNode || this.selectedNode == 0) { var c = document.getElementById("s" + this.obj + this.selectedNode); c.className = "node" } var d = document.getElementById("s" + this.obj + a); d.className = "nodeSel"; this.selectedNode = a; if (this.config.useCookies) this.setCookie('cs' + this.obj, b.id) } }; dTree.prototype.o = function (a) { var b = this.aNodes[a]; this.nodeStatus(!b._io, a, b._ls); b._io = !b._io; if (this.config.closeSameLevel) this.closeLevel(b); if (this.config.useCookies) this.updateCookie() }; dTree.prototype.oAll = function (a) { for (var n = 0; n < this.aNodes.length; n++) { if (this.aNodes[n]._hc && this.aNodes[n].pid != this.root.id) { this.nodeStatus(a, n, this.aNodes[n]._ls); this.aNodes[n]._io = a } } if (this.config.useCookies) this.updateCookie() }; dTree.prototype.openTo = function (a, b, c) { if (!c) { for (var n = 0; n < this.aNodes.length; n++) { if (this.aNodes[n].id == a) { a = n; break } } } var d = this.aNodes[a]; if (d.pid == this.root.id || !d._p) return; d._io = true; d._is = b; if (this.completed && d._hc) this.nodeStatus(true, d._ai, d._ls); if (this.completed && b) this.s(d._ai); else if (b) this._sn = d._ai; this.openTo(d._p._ai, false, true) }; dTree.prototype.closeLevel = function (a) { for (var n = 0; n < this.aNodes.length; n++) { if (this.aNodes[n].pid == a.pid && this.aNodes[n].id != a.id && this.aNodes[n]._hc) { this.nodeStatus(false, n, this.aNodes[n]._ls); this.aNodes[n]._io = false; this.closeAllChildren(this.aNodes[n]) } } }; dTree.prototype.closeAllChildren = function (a) { for (var n = 0; n < this.aNodes.length; n++) { if (this.aNodes[n].pid == a.id && this.aNodes[n]._hc) { if (this.aNodes[n]._io) this.nodeStatus(false, n, this.aNodes[n]._ls); this.aNodes[n]._io = false; this.closeAllChildren(this.aNodes[n]) } } }; dTree.prototype.nodeStatus = function (a, b, c) { var d = document.getElementById('d' + this.obj + b); var e = document.getElementById('j' + this.obj + b); if (this.config.useIcons) { var f = document.getElementById('i' + this.obj + b); f.src = (a) ? this.aNodes[b].iconOpen : this.aNodes[b].icon } e.src = (this.config.useLines) ? ((a) ? ((c) ? this.icon.minusBottom : this.icon.minus) : ((c) ? this.icon.plusBottom : this.icon.plus)) : ((a) ? this.icon.nlMinus : this.icon.nlPlus); d.style.display = (a) ? 'block' : 'none' }; dTree.prototype.clearCookie = function () { var a = new Date(); var b = new Date(a.getTime() - 1000 * 60 * 60 * 24); this.setCookie('co' + this.obj, 'cookieValue', b); this.setCookie('cs' + this.obj, 'cookieValue', b) }; dTree.prototype.setCookie = function (a, b, c, d, e, f) { document.cookie = escape(a) + '=' + escape(b) + (c ? '; expires=' + c.toGMTString() : '') + (d ? '; path=' + d : '') + (e ? '; domain=' + e : '') + (f ? '; secure' : '') }; dTree.prototype.getCookie = function (a) { var b = ''; var c = document.cookie.indexOf(escape(a) + '='); if (c != -1) { var d = c + (escape(a) + '=').length; var e = document.cookie.indexOf(';', d); if (e != -1) b = unescape(document.cookie.substring(d, e)); else b = unescape(document.cookie.substring(d)) } return (b) }; dTree.prototype.updateCookie = function () { var a = ''; for (var n = 0; n < this.aNodes.length; n++) { if (this.aNodes[n]._io && this.aNodes[n].pid != this.root.id) { if (a) a += '.'; a += this.aNodes[n].id } } this.setCookie('co' + this.obj, a) }; dTree.prototype.isOpen = function (a) { var b = this.getCookie('co' + this.obj).split('.'); for (var n = 0; n < b.length; n++) if (b[n] == a) return true; return false }; if (!Array.prototype.push) { Array.prototype.push = function array_push() { for (var i = 0; i < arguments.length; i++) this[this.length] = arguments[i]; return this.length } }; if (!Array.prototype.pop) { Array.prototype.pop = function array_pop() { var a = this[this.length - 1]; this.length = Math.max(this.length - 1, 0); return a } };
$jr.extend({ tipbox: { id: 'ui-tipbox', size: { x: 0, y: 0, bx: 0, by: 0 }, show: function (a, b, c, d, e) { var f = document.getElementById(this.id); if (f) { document.body.removeChild(f) } e = e || 1; f = document.createElement('DIV'); f.setAttribute('id', this.id); f.className = this.id; f.style.cssText += 'position:fixed;width:auto;overflow:hidden;'; f.innerHTML = '<div class="ui-tipbox-container">' + a + '</div>'; document.body.appendChild(f); this.size.x = f.offsetWidth; this.size.y = f.offsetHeight; this.size.bx = document.documentElement.clientWidth; this.size.by = document.documentElement.clientHeight; f.getElementsByTagName("DIV")[0].style.width = this.size.x + 'px'; f.style.width = '1px'; f.style.height = '1px'; var g = 1, _y = 1, _opa = 0, _px = (this.size.x > this.size.y ? this.size.x : this.size.y) / 20 / 2; var h = this.size; var i = setInterval(function () { ++_px; if (g + _px > h.x) { g = h.x } else { g += _px } if (_y + _px > h.y) { _y = h.y } else { _y += _px } f.style.width = g + 'px'; f.style.height = _y + 'px'; f.style.left = ((h.bx - g) / 2) + 'px'; f.style.top = ((h.by - _y) / 2 - b) + 'px'; _opa += 5; if (f.style.filter) { f.style.filter = 'filter:alpha(opacity=' + _opa + ')' } else { f.style.opacity = _opa / 100 } if (f == null || (g == h.x && _y == h.y && _opa >= e * 100)) { clearInterval(i) } }, 10); if (c > 0) { var j = (function (t) { return function () { t.close() } })(this); setTimeout(j, c) } }, close: function (a) { var b = document.getElementById(this.id); var c = 100; var d = a != 'left'; var e = d ? b.offsetTop : b.offsetLeft; var f = -(d ? this.size.y : this.size.x) - 20; var g = e / 40; var h = setInterval(function () { ++g; e -= g; if (b == null || e < f) { if (b) { try { document.body.removeChild(b) } catch (exc) { } } clearInterval(h) } else { if (d) { b.style.top = e + 'px' } else { b.style.left = e + 'px' } c -= 5; if (b.style.filter) { b.style.filter = 'filter:alpha(opacity=' + c + ')' } else { b.style.opacity = c / 100 } } }, 10) } } }); jr.extend({ toPager: function (c, d) { this.size = d; this.pageIndex = 1; this.pages = 0; this.pager = null; this.list = null; var e = document.getElementById(c); this.list = e.getElementsByClassName ? document.getElementsByClassName('list', e) : e.getElementsByClassName('list'); this.pages = parseInt(this.list.length / this.size); if (this.list.length % this.size != 0) this.pages++; if (this.pager == null) { var f = e.getElementsByClassName ? document.getElementsByClassName('pager', e) : e.getElementsByClassName('pager'); if (f.length == 0) { var g = document.createElement('DIV'); g.className = 'pager'; e.appendChild(g); this.pager = g } else { this.pager = f[0] } } var t = this; var h; this.showPage = function (b) { t.pageIndex = b; for (var i = 0; i < t.list.length; i++) { t.list[i].style.display = i >= (t.pageIndex - 1) * t.size && i < t.pageIndex * t.size ? 'block' : 'none' } t.pager.innerHTML = '页码:'; for (var j = 0; j < t.pages; j++) { t.pager.innerHTML += '&nbsp;' + (t.pageIndex == j + 1 ? j + 1 : '<a href="javascript:;" page="' + (j + 1) + '">' + (j + 1) + '</a>') } h = t.pager.getElementsByTagName('A'); for (var k = 0; k < h.length; k++) { h[k].onclick = (function (a) { return function () { t.showPage(a) } })(h[k].getAttribute('page')) } }; this.showPage(1) } }); jr.extend({ contextmenu: { ele: null, currEle: null, inst: null, offset: 5, srcs: null, show: function () { this.ele.style.display = 'block' }, close: function () { this.ele.style.display = 'none' }, bind: function (e, k, l, m) { var j = $b; m = m || 'mouseup'; if (!this.ele) { this.srcs = new Array(); this.ele = document.createElement('DIV'); this.ele.className = 'ui-contextmenu'; this.ele.style.cssText = 'position:absolute;'; document.body.appendChild(this.ele); this.srcs.push(this.ele); j.event.add(document.body, 'click', (function (e) { return function () { e.close.apply(e) } }(this))); this.ele.oncontextmenu = function () { return false }; document.oncontextmenu = (function (d, f, e) { return function (a) { var b = j.event.src(a); var c = b; while (c) { for (var i = 0; i < f.length; i++) { if (f[i] === c) { return false } } c = c.parentNode } return true } }(this.ele, this.srcs, e)) } this.srcs.push(e); j.event.add(e, m, (function (h) { return function (a) { var b = a ? a : window.event; if (b.button != 2) { return false } if (h.currEle == null || h.currEle != e) { h.ele.innerHTML = k; if (l) { l(h.ele) } } h.show(); var c = h.ele; var d = Math.max(document.documentElement.scrollTop, document.body.scrollTop), domLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), eventX = b.clientX, eventY = b.clientY, menuWidth = c.offsetWidth, menuHeight = c.offsetHeight; var f = Math.max(document.documentElement.clientWidth, document.body.clientWidth) - eventX; var g = Math.max(document.documentElement.clientHeight, document.body.clientHeight) - eventY; if (f < menuWidth) { c.style.left = (domLeft + eventX - menuWidth) + 'px' } else { c.style.left = (domLeft + eventX) + 'px' } if (g < menuHeight) { c.style.top = (d + eventY - menuHeight) + 'px' } else { c.style.top = (d + eventY) + 'px' } j.event.stopBubble(b) } })(this)) } } });
function fileUpload(h) { this.id = h.id; this.infopanel = h.info ? document.getElementById(h.info) : null; this.processID = Math.random() * 100 + 100; this.debug = h.debug || false; this.uploadurl = h.url, this.processurl = h.processurl, this.fileName = null; this.file = null; this.repeatSelect = h.repeatSelect == undefined ? false : h.repeatSelect; this.btnText = ''; this.btnClicked = false; var i = document.getElementById(this.id); this.btnText = i.innerHTML || '选择文件'; i.innerHTML = ''; var j, __html_form, __html_up_btn, __html_process, __html_msg_panel; try { j = document.createElement('<IFRAME name="' + (this.id + '_iframe') + '">') } catch (ex) { j = document.createElement('IFRAME'); j.setAttribute('name', this.id + '_iframe') } i.appendChild(j); if (!this.debug) { j.style.display = 'none' } var k = (function (t, g) { return function () { var a = g.contentWindow.document; var b = ''; try { var c = a.getElementsByTagName('HEAD'); if (c.length != 0) { b = c[0].innerHTML } } catch (exc) { t.onUploadComplete.apply(t, [false, exc]); t.clear(); return } if (b) { var d = /<title>(.+?)<\/title>/.exec(b); if (d) { d = d[1]; t.onUploadComplete.apply(t, [false, d, a]); t.clear(); return } } var e = a.body.innerHTML; var f = e; if (e == '') return; e = /{[\s\S]*}/igm.exec(e); if (e) { f = JSON.parse(e) } t.onUploadComplete.apply(t, [true, f, a]); t.clear() } })(this, j); jr.event.add(j, 'load', k); __html_form = document.createElement('FORM'); __html_form.setAttribute('id', this.id + '_form'); __html_form.method = 'POST'; __html_form.style.cssText = 'display:inline'; __html_form.className = 'ui-uploadform'; __html_form.action = this.uploadurl; __html_form.enctype = 'multipart/form-data'; __html_form.encoding = 'multipart/form-data'; __html_form.target = j.getAttribute('name'); i.appendChild(__html_form); __html_up_btn = document.createElement("span"); __html_up_btn.className = 'upbtn'; __html_up_btn.innerHTML = this.btnText; __html_form.appendChild(__html_up_btn); this.file = document.createElement('INPUT'); this.file.setAttribute('type', 'file'); this.file.setAttribute('name', this.id); this.file.setAttribute('tabindex', '9999'); var l = __html_up_btn.offsetTop; var m = this.debug ? 50 : 0; this.file.style.cssText = 'opacity:' + (m / 100) + ';filter:alpha(opacity=' + m + ');cursor:normal;position:absolute;top:' + __html_up_btn.offsetTop + 'px;left:' + __html_up_btn.offsetLeft + 'px;z-index:101;width:' + __html_up_btn.offsetWidth + 'px;height:' + __html_up_btn.offsetHeight + 'px;'; __html_form.appendChild(this.file); __html_process = document.createElement('INPUT'); __html_process.setAttribute('name', 'upload_process'); __html_process.setAttribute('type', 'hidden'); __html_process.setAttribute('value', this.id + '|' + this.processID); __html_form.appendChild(__html_process); this.fileName = this.file.value; setInterval((function (t) { return function () { if (t.file.value != '' && t.fileName != t.file.value) { t.fileName = t.file.value; t.onFileChanged(t.file) } } })(this), 100) } fileUpload.prototype.printf = function (a) { if (this.infopanel) this.infopanel.innerHTML = a }; fileUpload.prototype.clear = function () { if (this.repeatSelect && this.file) { this.file.outerHTML = this.file.outerHTML } }; fileUpload.prototype.checkFileTypes = function (a) { var b = this.file.value; var c = b.substring(b.lastIndexOf('.')); return new RegExp('\\*' + c + ';*', 'i').test(a) }; fileUpload.prototype.onFileChanged = function (a) { }; fileUpload.prototype.onUploading = function (a) { }; fileUpload.prototype.onUploadComplete = function (a, b, c) { }; fileUpload.prototype.upload = function () { var a = document.forms[this.id + '_form']; if (a) { a.submit(); if (this.onUploading) this.onUploading() } }; function fileUploadObject(d, f) { var g = new fileUpload(d); var h = document.getElementById(g.id).getElementsByTagName('SPAN')[0]; g.onUploading = function (a) { g.file.setAttribute('disabled', 'disabled'); try { var b = '上传中...'; var c = jr.dom.getsByClass(h, 'button-txt'); if (c) { jr.each(c, function (i, e) { e.innerHTML = b }) } else { h.innerHTML = b } } catch (ex) { } }; g.onUploadComplete = function (a, b, c) { g.file.removeAttribute('disabled'); try { h.innerHTML = g.btnText } catch (ex) { } if (f) { f.call(g, a, b, c) } }; g.onFileChanged = function (a) { if (d.exts && !g.checkFileTypes(d.exts)) { alert('文件类型不允许上传,仅允许上传文件类型为：' + d.exts) } else { g.upload() } }; return g } jr.extend({ upload: function (a, b) { return fileUploadObject(a, b) } });
$jr.extend({ validator: { setTip: function (e, a, b, c) { var d = e.attr('validate_id'); if (b) { var f = e.attr('summary'); if (f) { f = JSON.parse(f.replace(/'/g, '"')); if (f[b]) { c = f[b] } } } if (e.attr('tipin')) { var g = jr.$fn("#" + e.attr('tipin')); if (g) { if (g.hasClass('validator')) { g.addClass("validator") } var h = g.attr('valid-src'); if (!a) { g.attr('valid-src', d); g.html('<span class="valid-error"><span class="msg">' + c + '</span></span>') } else if (h == tipId) { g.html('<span class="valid-right"><span class="msg">' + c + '</span></span>') } return false } } var i = jr.$fn("#" + d); if (i.len() == 0) { var j = document.createElement('DIV'); document.body.appendChild(j); var k = jr.getPosition(j); i = jr.$fn(j); i.css({ "position": "fixed", "left": (k.right + document.documentElement.scrollLeft) + "px", "top": (k.top + document.documentElement.scrollTop) + 'px' }); i.attr("id", d); i.attr("className", "validator") } i.html('<span class="' + (a ? 'valid-right' : 'valid-error') + '"><span class="msg">' + c + '</span></span>') }, removeTip: function (e) { if (e.attr('tipin')) { var a = jr.$fn("#" + e.attr('tipin')); if (a.len() > 0) { a.html(""); return false } } var b = jr.$fn("#" + e.attr('validate_id')); if (b.len() > 0) { document.body.removeChild(b.elem()) } }, result: function (b) { if (!b) { return jr.$fn(".valid-error").len() == 0 } var d = true; jr.$fn("#" + b + " .ui-validate").each(function (i, e) { if (!d) return; var a = e.attr("tipin"); if (a) { var c = e.find("#" + a); if (c.len() > 0 && c.html().indexOf("valid-error") != -1) { d = false } } else { var c = e.find("#" + e.attr("validate_id")); if (c.len() > 0 && c.find(".validate-error").len() > 0) { d = false } } }); return d }, init: function () { var j = jr; if (!jr) { alert("未引用核心库!"); return false } var t = this; jr.$fn(".ui-validate").each(function (i, e) { var f = e.attr("validate_id"); while (f == null) { f = e.attr("id"); if (f && f != '') { f = 'validate_item_' + f } else { f = 'validate_item_' + parseInt(Math.random() * 1000).toString() } if (document.getElementById(f) != null) { f = null } else { e.attr('validate_id', f) } } if (e.attr('isnumber') == "true") { e.css({ "ime-mode": "disabled" }); var g = (function (a, e) { return function () { if (/\D/.test(e.val())) { e.val(e.val().replace(/\D/g, '')) } e.val(e.val().replace(/^0([0-9])/, '$1')) } })(t, e); e.keyup(g); e.change(g) } if (e.attr('isfloat') == 'true') { e.css({ "ime-mode": "disabled" }); var g = (function (a, e) { return function () { if (/[^\d\.]/.test(e.val())) { e.val(e.val().replace(/[^\d\.]/g, '')) } e.val(e.val().replace(/^(0|\.)([0-9]+\.*[0-9]*)/, '$2')) } })(t, e); e.keyup(g); e.change(g) } if (e.attr('regex')) { var g = (function (b, e) { return function () { var a = new RegExp(); a.compile(e.attr('regex')); if (!a.test(e.value)) { b.setTip(e, false, 'regex', '输入不正确') } else { b.removeTip(e) } } })(t, eles[i]); e.blur(g); e.keyup(g) } else { if (e.attr("isrequired") == "true" || e.attr("required") == "true") { var h = (function (a, e) { return function () { if (e.val().replace(/\s/g, '') == '') { a.setTip(e, false, 'required', '该项不能为空') } else { a.removeTip(e) } } })(t, e); e.blur(h); e.keyup(h) } if (e.attr("nodeName") == "INPUT" && e.attr('length') != null) { var h = (function (d, e) { return function () { var a = e.attr('length'); var b = /\[(\d*),(\d*)\]/ig; var c = parseInt(a.replace(b, '$1')), l_e = parseInt(a.replace(b, '$2')); if (e.val().length < c) { d.setTip(e, false, 'length', l_e ? '长度必须为' + c + '-' + l_e + '位' : '长度至少' + (c) + '位') } else if (e.val().length > l_e) { d.setTip(e, false, 'length', c ? '长度必须为' + c + '-' + l_e + '位' : '长度超出' + (l_e) + '位') } else if (e.attr('required') == null || e.val().length > 0) { d.removeTip(e) } } })(t, e); e.blur(h); e.keyup(h) } } }) }, validate: function (a) { var b; if (a) { b = jr.$fn("#" + a + " .ui-validate") } else { b = jr.$fn(".ui-validate") } b.each(function (i, e) { if (e.attr("required") == "true" || e.attr("isrequired") == "true" || (e.attr("nodeName") == "INPUT" && e.attr("length")) || e.attr("regex")) { if (e.elem().onblur != null) { e.elem().onblur() } } }); return this.result(a) } } }); jr.event.add(window, 'load', function () { jr.validator.init() });
function autoCompletion(v, w, x, y, z, A) { var B; var C; this.charMinLen = A || 1; this.lastChar = ''; this.isOnFocus = false; this.timer = null; this.url = w; if (!v.nodeName) { v = jr.$(v) } var D = function () { B = v.previousNode; if (!B || B.nodeName != 'DIV' || B.className != 'ui-autocompletion-panel') { if (v.parentNode.offsetLeft > v.offsetLeft) { v.parentNode.style.cssText += 'position:relative' } B = document.createElement('DIV'); B.className = 'ui-autocompletion-panel'; B.style.cssText = 'curcor:default;z-index:102;position:absolute;left:' + v.offsetLeft + 'px;top:' + (v.offsetTop + v.offsetHeight) + 'px;width:' + v.offsetWidth + 'px;overflow:hidden;display:none'; v.parentNode.insertBefore(B, v); C = document.createElement('DIV'); C.className = 'inner'; C.style.cssText = 'background-color:#fff;'; B.appendChild(C) } else { C = B.getElementsByTagName('DIV')[0] } }; D(); var E = (function (e, p, q, r, s, u, t) { return function (l, m) { if (m) t.isOnFocus = true; var n = window.event || l; if (n.altKey || n.keyCode == 17) return; var o = e.value; if (/^\s*$/.test(o) && t.charMinLen != 0) return; o = o.replace(/^(\s*)(.+?)(\s*)$/, '$2'); if (o.length < t.charMinLen) return; if (t.lastChar != '' && t.lastChar == o) { return } else { t.lastChar = o } jr.xhr.request(t.url + (t.url.indexOf('?') == -1 ? "?" : '&') + 'key=' + encodeURIComponent(o),{params: {}, method: 'GET', data: 'json' }, { success: function (d) { if (r) r(d); if (d.length != 0) { p.style.display = ''; var f = new RegExp(o, 'i'); var g = '<b>' + o + '</b>'; var h = '<ul style="margin:0;padding:0;">'; for (var i = 0; i < d.length; i++) { h += '<li' + (i == 0 ? ' class="first"' : '') + (d[i].title ? ' title="' + d[i].title + '"' : '') + '>' + d[i].text.replace(f, g) + '</li>'; if (d[i].text == o && s) { if (e.onblur) e.onblur(); s(d[i]) } } h += '</ul>'; q.innerHTML = h; var k = q.getElementsByTagName('LI'); jr.each(k, function (i, c) { c.onmouseover = (function (a, b) { return function () { for (var j = 0; j < b.length; j++) { b[j].className = j == 0 ? 'first' : '' } this.className = this == k[0] ? 'first selected' : 'selected' } })(p, k); c.onclick = (function (j, a) { return function () { e.value = j.text; a.style.display = 'none'; if (e.onblur) e.onblur(); if (s) s(j) } })(d[i], p) }) } else { p.style.display = 'none' } setTimeout(function () { t.isOnFocus = false }, 500) }, error: function () { if (u && u instanceof Function) u() } }) } })(v, B, C, x, y, z, this); var F = (function (p, t) { return function (a) { if (!t.isOnFocus) { p.style.display = 'none' } } })(B, this); jr.event.add(v, 'focus', (function (t) { return function (a) { E(a, true) } })(this)); jr.event.add(v, 'keyup', E); jr.event.add(document, 'click', F); return this } jr.extend({ autoCompletion: function (a, b, c, d, e, f) { return new autoCompletion(a, b, c, d, e, f) } });
$jr.event.add(window, 'load', function () { $jr.each(document.getElementsByClassName('ui-exchange'), function (i, e) { var v = null; var d = null; var f = null; var g = 'exchange'; switch (e.nodeName) { case 'IMG': f = 'src'; break; default: f = 'innerHTML'; break } if (f == null) return; v = e[f]; d = e.getAttribute(g); if (d) { jr.event.add(e, 'mouseover', (function (a, b, c) { return function () { a[b] = c } })(e, f, d)); jr.event.add(e, 'mouseout', (function (a, b, c) { return function () { a[b] = c } })(e, f, v)) } }) });


// 日期扩展函数
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};



// 自定义代码开始
window.cms = $jr;
//库目录
$jr.libpath = '/public/assets/';


function unix2str(unix) {
    if (typeof (unix) == 'string') {
        unix = parseInt(unix);
    }
    return new Date(unix * 1000).format("yyyy-MM-dd HH:mm");
}

$jr.extend({
    tree: {
        load: function (id, data, resPath, handler, completeFunc) {
            var rdId = 'tree_' + Math.ceil(Math.random() * 100);
            var ele = $jr.$fn("#" + id);
            window[rdId] = new dTree(rdId, resPath);
            window[rdId].bind(data, completeFunc);
            ele.html(window[rdId].toString());
            if (handler && handler instanceof Function) {
                ele.find("A").each(function (i, e) {
                    if (e.hasClass("node")) {
                        var value = e.attr("node-value");
                        var txt = e.text();
                        e.click((function (_e, _v, _t) {
                            return function () {
                                handler(_e, _v, _t);
                            };
                        })(e, value, txt));
                    }
                });
            }
            return window[rdId];
        }
    }
});

/***  AJAX ***/
function showMsg(msg, callback, second, notMask) {
    var win = window.parent || window;
    if (!win.xhrMsg) {
        win.xhrMsg = document.createElement("DIV");
        win.xhrMsg.className = 'xhr-msg hidden';
        win.document.body.appendChild(win.xhrMsg);
    }

    var mw = msg.replace(/<[^>]+>/ig, '').length * 12 + 10;
    win.xhrMsg.innerHTML = msg;
    win.xhrMsg.style.width = mw + 'px';
    win.xhrMsg.className = 'xhr-msg';
    if (/MSIE\s*(5|6|7)\./.test(window.navigator.userAgent)) {
        win.xhrMsg.style.left = (document.documentElement.clientWidth - win.xhrMsg.offsetWidth) / 2 + 'px';
    }
    if (second) {
        setTimeout(function () {
            closeMsg();
            if (callback && callback instanceof Function) callback();
        }, second);
    }
}

function closeMsg() {
    var win = window.parent || window;
    win.xhrMsg.className = 'xhr-msg hidden';
}

function showErr(msg, second) {
    showMsg('<span class="error">' + msg + '</span>', null, second || 3000, true);
}
function showMsg2(msg, callback, second) {
    showMsg(msg, callback, second || 2000);
}

$jr.xhr.filter = function (s, method, c) {
    if (s === 0) {
        showMsg('<span class="load"></span>请求中', null, null, method === "GET");
    } else if (s === 2) {
        var title = /<title>(.+)<\/title>/.exec(c)[1];
        if (title) {
            closeMsg();
            alert(title);
        } else {
            showErr('请求出错');
        }
    } else {
        closeMsg();
    }
    return true;
};


//=============================================== AJAX Loader ======================================//



//加载地址到div中
$jr.loadurl = function (id, url, func) {
    var e = null;
    if (id.nodeName) {
        e = id;
    } else {
        e = $jr.$(id);
    }
    /*
    var loadTip = url.indexOf('#noload') == -1;
    var _tip = null;
    if (loadTip) {
        _tip = document.createElement('DIV');
        document.body.appendChild(_tip);
        _tip.innerHTML = '<div class="loading" style="position:absolute;left:' + (e.offsetLeft + 1) + 'px;top:' + (e.offsetTop + 1) + 'px;">加载中...</div>';
    }
    $jr.load(e, url, function (result) {
        if (_tip) { document.body.removeChild(_tip); }
        window.bindInit();
        if (func) {
            func(result);
        }
    }, function () {
        if (_tip) {
            document.body.removeChild(_tip);
        }
    });*/


    $jr.load(e, url, function (result) {
        window.bindInit();
        if (func) {
            func(result);
        }
    });
};

//按模块加载页面
$jr.load2 = function (id, module, action, query, func) {
    var url = '?ajax=1&module=' + module + '&action=' + action;
    if (query) {
        if (query.indexOf('?') === 0) {
            url += '&' + query.substring(1);
        } else {
            url += '&' + query;
        }
    }

    $jr.lazyRun(function () {
        $jr.loadurl(id, url, func);
    });
};

//加载分页数据
$jr.pagerLoad = function (id, pid, page, module, action, query, func) {
    var e = $jr.$(id), pe = jr.$(pid), eDis = e.style.display;
    var url = '?ajax=1&module=' + module + '&action=' + action + '&page=' + (page || 1);
    if (query) {
        if (query.indexOf('?') === 0) {
            url += '&' + query.substring(1);
        } else {
            url += '&' + query;
        }
    }
    //e.style.display = 'none';

    $jr.xhr.get(url,function (json) {
        //var json = JSON.parse(result);

        try {
            e.innerHTML = json.html;
        } catch (ex) {
            if (e.nodeName === 'TBODY') {
                jr.each(e.rows, function (i, _e) {
                    e.removeChild(_e);
                });

                var tempNode = document.createElement('DIV');
                tempNode.innerHTML = "<table>" + json.html + "</table>";

                var tempTable = tempNode.firstChild;
                var tbody = e;
                for (var i = 0;i<tempTable.rows.length ; i++) {
                    var tr = tempTable.rows[i];
                    tbody.appendChild(tr);
                }
            }
        }
        //e.style.display = eDis;
        if (pe) {
            pe.innerHTML = json.pager;
        }
        if (func) func();
    });
};



//=======================================================================================//
$jr.propertyUpload = function (id, id2) {
    window['pro_upload_' + id] = jr.upload({
        id: id,
        debug: !true,
        url: '?module=upload&action=uploadPropertyFile&upload.id=pro_upload_' + id,
        exts: '*.jpg;*.gif;*.png;*.jpeg;*.7z;*.rar;*.zip;*.pdf;*.xls;*.doc;*.docx;*.ppt;*.flv;*.wmv;*.mp3;*.mp4'
    }, function (result, data) {
        if (result) {
            $jr.$(id2).value = data.url;
        } else {
            alert('上传失败：' + data);
        }
    });
};




/* 将CodeMirror更改为CDR 
#964  循环有误
*/

function formatCode(editor){
    var range = { from: editor.getCursor(true), to: editor.getCursor(false) };
    editor.autoFormatRange(range.from, range.to);
}

$jr.coder = function (id, arg) {
    //暂不支持IE6和IE7
    if (/MSIE\s(6|7)/.test(window.navigator.userAgent)) {
        alert('您正在使用的浏览器不支持Code Editor,请升级到IE8及以上,或使用Firefox系列浏览器!');
        return null;
    }
    // var htmljs = new Array('//public/assets/coder/lib/codemirror.js', '//public/assets/coder/mode/xml/xml.js',
    //                   '//public/assets/coder/mode/javascript/javascript.js', '//public/assets/coder/mode/css/css.js',
    //                   '//public/assets/coder/mode/htmlmixed/htmlmixed.js');
    var editor = null;
    var mode = arg.mode || 'html';
    var _showLineNumber = arg.lineNumbers || true;
    var _e = document.getElementById(id);
    if (mode == 'html') {
        var mixedMode = {
            name: "htmlmixed",
            scriptTypes: [{
                matches: /\/x-handlebars-template|\/x-mustache/i,
                mode: null
            }]
        };
        editor = CodeMirror.fromTextArea(_e,
            {
                lineNumbers: _showLineNumber,
                mode: mixedMode,
                tabMode: "indent",
                indentUnit: 4,
                extraKeys: {
                    "Tab": 'emmetExpandAbbreviation',
                    "Enter": 'emmetInsertLineBreak',
                    "Ctrl-Space": "autocomplete",
                    //代码格式化
                    "Ctrl-Alt-L": function(e) {
                        formatCode(e)
                    },
                }
            });

    } else if (mode == 'css') {
        editor = CodeMirror.fromTextArea(_e, {
            lineNumbers: _showLineNumber,
            tabMode: "indent",
            indentUnit: 4,
            extraKeys: {
                "Tab": 'emmetExpandAbbreviation'
            }
        });
    } else if (mode == 'xml') {
        editor = CodeMirror.fromTextArea(_e, {
            lineNumbers: _showLineNumber,
            mode: { name: "xml", alignCDATA: true },
            tabMode: "indent",
            indentUnit: 4
        });
    }

    if (arg.height) {
        var cm = document.getElementsByClassName('CodeMirror');
        for (var i = 0; i < cm.length; i++) {
            cm[i].style.height = arg.height + 'px';
        }
    }
    return editor;
};



//==================================================================================//


//功能键组合
window.Fn = {
    ids: new Array()    //ID数组
};



window.bind_initKey = window.parent != window;

//事件初始化
window.bindInit = function () {
    //隐藏loading (IE下)
    //if(window.attachEvent && window.parent.tab){
    //	window.parent.tab.pageLoad();
    //}

    if (window.bind_initKey) {
        //屏蔽键
        document.onkeydown = function (event) {
            var e = window.event || event;
            var win = window.parent;
            // while (win.parent != undefined) {
            //     win = win.parent;
            // }
            if (win.parent !== win) {
                win = win.parent;
            }

            //CTRL+S保存
            if (e.ctrlKey && e.keyCode === 83) {
                if (window.saveData && window.saveData instanceof Function) {
                    window.saveData();
                    return $jr.event.preventDefault(e);
                }
                return true;
            }
            //按键ALT+F11,启用全屏
            else if (e.altKey && e.keyCode === 122) {
                win.M.setFullScreen();
                return $jr.event.preventDefault(event);
            } else if (e.keyCode === 122) {
                win.M.setFullScreen();
                return $jr.event.preventDefault(event);
            } else if (!e.ctrlKey && e.keyCode === 116) {
                var ifr = win.document.getElementsByClassName('currentframe')[0];
                if (ifr) {
                    var src = ifr.src;
                    ifr.src = '';
                    ifr.src = src;
                }
                return $jr.event.preventDefault(event);
            }
            return true;
        };
    }

    //自动设置样式
    var autoStyle = document.getElementsByClassName('autoStyle');
    var ele, autos;
    for (var j = 0; j < autoStyle.length; j++) {
        autos = autoStyle[j].getElementsByTagName('*');

        for (var i = 0; i < autos.length; i++) {
            ele = autos[i];

            switch (ele.nodeName) {
                case "INPUT":
                    if (ele.getAttribute('type') === 'text') {
                        ele.className += ' tb_normal';
                    }
                    break;

                case "SELECT":
                    ele.className += ' tb_normal';
                    break;

                case "TEXTAREA":
                    ele.className += ' tb_normal';
                    break;


                //包含div的TD设置为自动顶部               
                case "TD":
                    if (!ele.getAttribute('valign')) {
                        if (ele.getElementsByTagName('DIV').length !== 0) {
                            ele.setAttribute('valign', 'top');
                        }
                    }
                    break;
            }
        }
    }

    //自动设置高度

    var ahs = document.getElementsByClassName('autoHeight');
    var ahs_body_height = Math.max(document.documentElement.clientHeight, document.body.clientHeight);
    for (var i = 0; i < ahs.length; i++) {
        var height = 0;
        var ahs_arr = ahs[i].parentNode.childNodes;
        for (var j = 0; j < ahs_arr.length; j++) {
            if (ahs_arr[j].nodeName === 'DIV' && ahs_arr[j] !== ahs[i]) {
                height += ahs_arr[j].offsetHeight;
            }
        }

        ahs[i].style.height = (ahs_body_height - height) + 'px';

        ahs[i].style.height = (ahs[i].offsetHeight - document.documentElement.scrollHeight + ahs_body_height) + 'px';
    }

    //
    //绑定功能键
    //脚本：Fn.create=function(){};
    //元素：<a fn="create" class="fn">button</a>
    //
    var fns = document.getElementsByClassName('fn');
    var fnName, _fn;
    for (var i = 0; i < fns.length; i++) {
        fnName = fns[i].getAttribute('fn');
        if (fnName && window.Fn) {
            eval('_fn=window.Fn.' + fnName);
            if (_fn) {
                $jr.event.add(fns[i], 'click', _fn);
            }
        }
    }
};



//初始化
$jr.event.add(window, 'load', window.bindInit);


//扩展Tab
$jr.extend({
    tab: {
        check: function () {
            if (window.parent.FwTab) return true;

            alert('不支持此功能');
            return false;
        },
        open: function (title, url, closeable) {
            if (this.check()) {
                window.parent.FwTab.show(title, url, closeable);
            }
        },
        close: function (title) {
            if (this.check()) {
                window.parent.FwTab.close(title);
            }
        },
        closeAndRefresh: function (title) {
            if (this.check()) {
                var win = window.parent.FwTab.getWindow(title);
                if (win != null) {
                    if (win.refresh)
                        win.refresh();
                }
                window.parent.FwTab.close();
            }
        }
    }
});



