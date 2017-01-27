/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */

/**
 * SimpleModal is a lightweight jQuery plugin that provides a simple
 * interface to create a modal dialog.
 *
 * The goal of SimpleModal is to provide developers with a cross-browser
 * overlay and container that will be populated with data provided to
 * SimpleModal.
 *
 * There are two ways to call SimpleModal:
 * 1) As a chained function on a jQuery object, like $('#myDiv').modal();.
 * This call would place the DOM object, #myDiv, inside a modal dialog.
 * Chaining requires a jQuery object. An optional options object can be
 * passed as a parameter.
 *
 * @example $('<div>my data</div>').modal({options});
 * @example $('#myDiv').modal({options});
 * @example jQueryObject.modal({options});
 *
 * 2) As a stand-alone function, like $.modal(data). The data parameter
 * is required and an optional options object can be passed as a second
 * parameter. This method provides more flexibility in the types of data
 * that are allowed. The data could be a DOM object, a jQuery object, HTML
 * or a string.
 *
 * @example $.modal('<div>my data</div>', {options});
 * @example $.modal('my data', {options});
 * @example $.modal($('#myDiv'), {options});
 * @example $.modal(jQueryObject, {options});
 * @example $.modal(document.getElementById('myDiv'), {options});
 *
 * A SimpleModal call can contain multiple elements, but only one modal
 * dialog can be created at a time. Which means that all of the matched
 * elements will be displayed within the modal container.
 *
 * SimpleModal internally sets the CSS needed to display the modal dialog
 * properly in all browsers, yet provides the developer with the flexibility
 * to easily control the look and feel. The styling for SimpleModal can be
 * done through external stylesheets, or through SimpleModal, using the
 * overlayCss, containerCss, and dataCss options.
 *
 * SimpleModal has been tested in the following browsers:
 * - IE 6+
 * - Firefox 2+
 * - Opera 9+
 * - Safari 3+
 * - Chrome 1+
 *
 * @name SimpleModal
 * @type jQuery
 * @requires jQuery v1.3
 * @cat Plugins/Windows and Overlays
 * @author Eric Martin (http://ericmmartin.com)
 * @version 1.4.4
 */


;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}
(function ($) {
  var d = [],
    doc = $(document),
    ua = navigator.userAgent.toLowerCase(),
    wndw = $(window),
    w = [];

  var browser = {
    ieQuirks: null,
    msie: /msie/.test(ua) && !/opera/.test(ua),
    opera: /opera/.test(ua)
  };
  browser.ie6 = browser.msie && /msie 6./.test(ua) && typeof window['XMLHttpRequest'] !== 'object';
  browser.ie7 = browser.msie && /msie 7.0/.test(ua);

  /*
   * Create and display a modal dialog.
   *
   * @param {string, object} data A string, jQuery object or DOM object
   * @param {object} [options] An optional object containing options overrides
   */
  $.modal = function (data, options) {
    return $.modal.impl.init(data, options);
  };

  /*
   * Close the modal dialog.
   */
  $.modal.close = function () {
    $.modal.impl.close();
  };

  /*
   * Set focus on first or last visible input in the modal dialog. To focus on the last
   * element, call $.modal.focus('last'). If no input elements are found, focus is placed
   * on the data wrapper element.
   */
  $.modal.focus = function (pos) {
    $.modal.impl.focus(pos);
  };

  /*
   * Determine and set the dimensions of the modal dialog container.
   * setPosition() is called if the autoPosition option is true.
   */
  $.modal.setContainerDimensions = function () {
    $.modal.impl.setContainerDimensions();
  };

  /*
   * Re-position the modal dialog.
   */
  $.modal.setPosition = function () {
    $.modal.impl.setPosition();
  };

  /*
   * Update the modal dialog. If new dimensions are passed, they will be used to determine
   * the dimensions of the container.
   *
   * setContainerDimensions() is called, which in turn calls setPosition(), if enabled.
   * Lastly, focus() is called is the focus option is true.
   */
  $.modal.update = function (height, width) {
    $.modal.impl.update(height, width);
  };

  /*
   * Chained function to create a modal dialog.
   *
   * @param {object} [options] An optional object containing options overrides
   */
  $.fn.modal = function (options) {
    return $.modal.impl.init(this, options);
  };

  /*
   * SimpleModal default options
   *
   * appendTo:    (String:'body') The jQuery selector to append the elements to. For .NET, use 'form'.
   * focus:     (Boolean:true) Focus in the first visible, enabled element?
   * opacity:     (Number:50) The opacity value for the overlay div, from 0 - 100
   * overlayId:   (String:'simplemodal-overlay') The DOM element id for the overlay div
   * overlayCss:    (Object:{}) The CSS styling for the overlay div
   * containerId:   (String:'simplemodal-container') The DOM element id for the container div
   * containerCss:  (Object:{}) The CSS styling for the container div
   * dataId:      (String:'simplemodal-data') The DOM element id for the data div
   * dataCss:     (Object:{}) The CSS styling for the data div
   * minHeight:   (Number:null) The minimum height for the container
   * minWidth:    (Number:null) The minimum width for the container
   * maxHeight:   (Number:null) The maximum height for the container. If not specified, the window height is used.
   * maxWidth:    (Number:null) The maximum width for the container. If not specified, the window width is used.
   * autoResize:    (Boolean:false) Automatically resize the container if it exceeds the browser window dimensions?
   * autoPosition:  (Boolean:true) Automatically position the container upon creation and on window resize?
   * zIndex:      (Number: 1000) Starting z-index value
   * close:     (Boolean:true) If true, closeHTML, escClose and overClose will be used if set.
                If false, none of them will be used.
   * closeHTML:   (String:'<a class="modalCloseImg" title="Close"></a>') The HTML for the default close link.
                SimpleModal will automatically add the closeClass to this element.
   * closeClass:    (String:'simplemodal-close') The CSS class used to bind to the close event
   * escClose:    (Boolean:true) Allow Esc keypress to close the dialog?
   * overlayClose:  (Boolean:false) Allow click on overlay to close the dialog?
   * fixed:     (Boolean:true) If true, the container will use a fixed position. If false, it will use a
                absolute position (the dialog will scroll with the page)
   * position:    (Array:null) Position of container [top, left]. Can be number of pixels or percentage
   * persist:     (Boolean:false) Persist the data across modal calls? Only used for existing
                DOM elements. If true, the data will be maintained across modal calls, if false,
                the data will be reverted to its original state.
   * modal:     (Boolean:true) User will be unable to interact with the page below the modal or tab away from the dialog.
                If false, the overlay, iframe, and certain events will be disabled allowing the user to interact
                with the page below the dialog.
   * onOpen:      (Function:null) The callback function used in place of SimpleModal's open
   * onShow:      (Function:null) The callback function used after the modal dialog has opened
   * onClose:     (Function:null) The callback function used in place of SimpleModal's close
   */
  $.modal.defaults = {
    appendTo: 'body',
    focus: true,
    opacity: 50,
    overlayId: 'simplemodal-overlay',
    overlayCss: {},
    containerId: 'simplemodal-container',
    containerCss: {},
    dataId: 'simplemodal-data',
    dataCss: {},
    minHeight: null,
    minWidth: null,
    maxHeight: null,
    maxWidth: null,
    autoResize: false,
    autoPosition: true,
    zIndex: 1000,
    close: true,
    closeHTML: '<a class="modalCloseImg" title="Close"></a>',
    closeClass: 'simplemodal-close',
    escClose: true,
    overlayClose: false,
    fixed: true,
    position: null,
    persist: false,
    modal: true,
    onOpen: null,
    onShow: null,
    onClose: null
  };

  /*
   * Main modal object
   * o = options
   */
  $.modal.impl = {
    /*
     * Contains the modal dialog elements and is the object passed
     * back to the callback (onOpen, onShow, onClose) functions
     */
    d: {},
    /*
     * Initialize the modal dialog
     */
    init: function (data, options) {
      var s = this;

      // don't allow multiple calls
      if (s.d.data) {
        return false;
      }

      // $.support.boxModel is undefined if checked earlier
      //browser.ieQuirks = browser.msie && !$.support.boxModel;
      browser.ieQuirks = browser.msie && (document.compatMode === "BackCompat");

      // merge defaults and user options
      s.o = $.extend({}, $.modal.defaults, options);

      // keep track of z-index
      s.zIndex = s.o.zIndex;

      // set the onClose callback flag
      s.occb = false;

      // determine how to handle the data based on its type
      if (typeof data === 'object') {
        // convert DOM object to a jQuery object
        data = data instanceof $ ? data : $(data);
        s.d.placeholder = false;

        // if the object came from the DOM, keep track of its parent
        if (data.parent().parent().size() > 0) {
          data.before($('<span></span>')
            .attr('id', 'simplemodal-placeholder')
            .css({display: 'none'}));

          s.d.placeholder = true;
          s.display = data.css('display');

          // persist changes? if not, make a clone of the element
          if (!s.o.persist) {
            s.d.orig = data.clone(true);
          }
        }
      }
      else if (typeof data === 'string' || typeof data === 'number') {
        // just insert the data as innerHTML
        data = $('<div></div>').html(data);
      }
      else {
        // unsupported data type!
        alert('SimpleModal Error: Unsupported data type: ' + typeof data);
        return s;
      }

      // create the modal overlay, container and, if necessary, iframe
      s.create(data);
      data = null;

      // display the modal dialog
      s.open();

      // useful for adding events/manipulating data in the modal dialog
      if ($.isFunction(s.o.onShow)) {
        s.o.onShow.apply(s, [s.d]);
      }

      // don't break the chain =)
      return s;
    },
    /*
     * Create and add the modal overlay and container to the page
     */
    create: function (data) {
      var s = this;

      // get the window properties
      s.getDimensions();

      // add an iframe to prevent select options from bleeding through
      if (s.o.modal && browser.ie6) {
        s.d.iframe = $('<iframe src="javascript:false;"></iframe>')
          .css($.extend(s.o.iframeCss, {
            display: 'none',
            opacity: 0,
            position: 'fixed',
            height: w[0],
            width: w[1],
            zIndex: s.o.zIndex,
            top: 0,
            left: 0
          }))
          .appendTo(s.o.appendTo);
      }

      // create the overlay
      s.d.overlay = $('<div></div>')
        .attr('id', s.o.overlayId)
        .addClass('simplemodal-overlay')
        .css($.extend(s.o.overlayCss, {
          display: 'none',
          opacity: s.o.opacity / 100,
          height: s.o.modal ? d[0] : 0,
          width: s.o.modal ? d[1] : 0,
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: s.o.zIndex + 1
        }))
        .appendTo(s.o.appendTo);

      // create the container
      s.d.container = $('<div></div>')
        .attr('id', s.o.containerId)
        .addClass('simplemodal-container')
        .css($.extend(
          {position: s.o.fixed ? 'fixed' : 'absolute'},
          s.o.containerCss,
          {display: 'none', zIndex: s.o.zIndex + 2}
        ))
        .append(s.o.close && s.o.closeHTML
          ? $(s.o.closeHTML).addClass(s.o.closeClass)
          : '')
        .appendTo(s.o.appendTo);

      s.d.wrap = $('<div></div>')
        .attr('tabIndex', -1)
        .addClass('simplemodal-wrap')
        .css({height: '100%', outline: 0, width: '100%'})
        .appendTo(s.d.container);

      // add styling and attributes to the data
      // append to body to get correct dimensions, then move to wrap
      s.d.data = data
        .attr('id', data.attr('id') || s.o.dataId)
        .addClass('simplemodal-data')
        .css($.extend(s.o.dataCss, {
            display: 'none'
        }))
        .appendTo('body');
      data = null;

      s.setContainerDimensions();
      s.d.data.appendTo(s.d.wrap);

      // fix issues with IE
      if (browser.ie6 || browser.ieQuirks) {
        s.fixIE();
      }
    },
    /*
     * Bind events
     */
    bindEvents: function () {
      var s = this;

      // bind the close event to any element with the closeClass class
      $('.' + s.o.closeClass).bind('click.simplemodal', function (e) {
        e.preventDefault();
        s.close();
      });

      // bind the overlay click to the close function, if enabled
      if (s.o.modal && s.o.close && s.o.overlayClose) {
        s.d.overlay.bind('click.simplemodal', function (e) {
          e.preventDefault();
          s.close();
        });
      }

      // bind keydown events
      doc.bind('keydown.simplemodal', function (e) {
        if (s.o.modal && e.keyCode === 9) { // TAB
          s.watchTab(e);
        }
        else if ((s.o.close && s.o.escClose) && e.keyCode === 27) { // ESC
          e.preventDefault();
          s.close();
        }
      });

      // update window size
      wndw.bind('resize.simplemodal orientationchange.simplemodal', function () {
        // redetermine the window width/height
        s.getDimensions();

        // reposition the dialog
        s.o.autoResize ? s.setContainerDimensions() : s.o.autoPosition && s.setPosition();

        if (browser.ie6 || browser.ieQuirks) {
          s.fixIE();
        }
        else if (s.o.modal) {
          // update the iframe & overlay
          s.d.iframe && s.d.iframe.css({height: w[0], width: w[1]});
          s.d.overlay.css({height: d[0], width: d[1]});
        }
      });
    },
    /*
     * Unbind events
     */
    unbindEvents: function () {
      $('.' + this.o.closeClass).unbind('click.simplemodal');
      doc.unbind('keydown.simplemodal');
      wndw.unbind('.simplemodal');
      this.d.overlay.unbind('click.simplemodal');
    },
    /*
     * Fix issues in IE6 and IE7 in quirks mode
     */
    fixIE: function () {
      var s = this, p = s.o.position;

      // simulate fixed position - adapted from BlockUI
      $.each([s.d.iframe || null, !s.o.modal ? null : s.d.overlay, s.d.container.css('position') === 'fixed' ? s.d.container : null], function (i, el) {
        if (el) {
          var bch = 'document.body.clientHeight', bcw = 'document.body.clientWidth',
            bsh = 'document.body.scrollHeight', bsl = 'document.body.scrollLeft',
            bst = 'document.body.scrollTop', bsw = 'document.body.scrollWidth',
            ch = 'document.documentElement.clientHeight', cw = 'document.documentElement.clientWidth',
            sl = 'document.documentElement.scrollLeft', st = 'document.documentElement.scrollTop',
            s = el[0].style;

          s.position = 'absolute';
          if (i < 2) {
            s.removeExpression('height');
            s.removeExpression('width');
            s.setExpression('height','' + bsh + ' > ' + bch + ' ? ' + bsh + ' : ' + bch + ' + "px"');
            s.setExpression('width','' + bsw + ' > ' + bcw + ' ? ' + bsw + ' : ' + bcw + ' + "px"');
          }
          else {
            var te, le;
            if (p && p.constructor === Array) {
              var top = p[0]
                ? typeof p[0] === 'number' ? p[0].toString() : p[0].replace(/px/, '')
                : el.css('top').replace(/px/, '');
              te = top.indexOf('%') === -1
                ? top + ' + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"'
                : parseInt(top.replace(/%/, '')) + ' * ((' + ch + ' || ' + bch + ') / 100) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';

              if (p[1]) {
                var left = typeof p[1] === 'number' ? p[1].toString() : p[1].replace(/px/, '');
                le = left.indexOf('%') === -1
                  ? left + ' + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"'
                  : parseInt(left.replace(/%/, '')) + ' * ((' + cw + ' || ' + bcw + ') / 100) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
              }
            }
            else {
              te = '(' + ch + ' || ' + bch + ') / 2 - (this.offsetHeight / 2) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
              le = '(' + cw + ' || ' + bcw + ') / 2 - (this.offsetWidth / 2) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
            }
            s.removeExpression('top');
            s.removeExpression('left');
            s.setExpression('top', te);
            s.setExpression('left', le);
          }
        }
      });
    },
    /*
     * Place focus on the first or last visible input
     */
    focus: function (pos) {
      var s = this, p = pos && $.inArray(pos, ['first', 'last']) !== -1 ? pos : 'first';

      // focus on dialog or the first visible/enabled input element
      var input = $(':input:enabled:visible:' + p, s.d.wrap);
      setTimeout(function () {
        input.length > 0 ? input.focus() : s.d.wrap.focus();
      }, 10);
    },
    getDimensions: function () {
      // fix a jQuery bug with determining the window height - use innerHeight if available
      var s = this,
        h = typeof window.innerHeight === 'undefined' ? wndw.height() : window.innerHeight;

      d = [doc.height(), doc.width()];
      w = [h, wndw.width()];
    },
    getVal: function (v, d) {
      return v ? (typeof v === 'number' ? v
          : v === 'auto' ? 0
          : v.indexOf('%') > 0 ? ((parseInt(v.replace(/%/, '')) / 100) * (d === 'h' ? w[0] : w[1]))
          : parseInt(v.replace(/px/, '')))
        : null;
    },
    /*
     * Update the container. Set new dimensions, if provided.
     * Focus, if enabled. Re-bind events.
     */
    update: function (height, width) {
      var s = this;

      // prevent update if dialog does not exist
      if (!s.d.data) {
        return false;
      }

      // reset orig values
      s.d.origHeight = s.getVal(height, 'h');
      s.d.origWidth = s.getVal(width, 'w');

      // hide data to prevent screen flicker
      s.d.data.hide();
      height && s.d.container.css('height', height);
      width && s.d.container.css('width', width);
      s.setContainerDimensions();
      s.d.data.show();
      s.o.focus && s.focus();

      // rebind events
      s.unbindEvents();
      s.bindEvents();
    },
    setContainerDimensions: function () {
      var s = this,
        badIE = browser.ie6 || browser.ie7;

      // get the dimensions for the container and data
      var ch = s.d.origHeight ? s.d.origHeight : browser.opera ? s.d.container.height() : s.getVal(badIE ? s.d.container[0].currentStyle['height'] : s.d.container.css('height'), 'h'),
        cw = s.d.origWidth ? s.d.origWidth : browser.opera ? s.d.container.width() : s.getVal(badIE ? s.d.container[0].currentStyle['width'] : s.d.container.css('width'), 'w'),
        dh = s.d.data.outerHeight(true), dw = s.d.data.outerWidth(true);

      s.d.origHeight = s.d.origHeight || ch;
      s.d.origWidth = s.d.origWidth || cw;

      // mxoh = max option height, mxow = max option width
      var mxoh = s.o.maxHeight ? s.getVal(s.o.maxHeight, 'h') : null,
        mxow = s.o.maxWidth ? s.getVal(s.o.maxWidth, 'w') : null,
        mh = mxoh && mxoh < w[0] ? mxoh : w[0],
        mw = mxow && mxow < w[1] ? mxow : w[1];

      // moh = min option height
      var moh = s.o.minHeight ? s.getVal(s.o.minHeight, 'h') : 'auto';
      if (!ch) {
        if (!dh) {ch = moh;}
        else {
          if (dh > mh) {ch = mh;}
          else if (s.o.minHeight && moh !== 'auto' && dh < moh) {ch = moh;}
          else {ch = dh;}
        }
      }
      else {
        ch = s.o.autoResize && ch > mh ? mh : ch < moh ? moh : ch;
      }

      // mow = min option width
      var mow = s.o.minWidth ? s.getVal(s.o.minWidth, 'w') : 'auto';
      if (!cw) {
        if (!dw) {cw = mow;}
        else {
          if (dw > mw) {cw = mw;}
          else if (s.o.minWidth && mow !== 'auto' && dw < mow) {cw = mow;}
          else {cw = dw;}
        }
      }
      else {
        cw = s.o.autoResize && cw > mw ? mw : cw < mow ? mow : cw;
      }

      s.d.container.css({height: ch, width: cw});
      s.d.wrap.css({overflow: (dh > ch || dw > cw) ? 'auto' : 'visible'});
      s.o.autoPosition && s.setPosition();
    },
    setPosition: function () {
      var s = this, top, left,
        hc = (w[0]/2) - (s.d.container.outerHeight(true)/2),
        vc = (w[1]/2) - (s.d.container.outerWidth(true)/2),
        st = s.d.container.css('position') !== 'fixed' ? wndw.scrollTop() : 0;

      if (s.o.position && Object.prototype.toString.call(s.o.position) === '[object Array]') {
        top = st + (s.o.position[0] || hc);
        left = s.o.position[1] || vc;
      } else {
        top = st + hc;
        left = vc;
      }
      s.d.container.css({left: left, top: top});
    },
    watchTab: function (e) {
      var s = this;

      if ($(e.target).parents('.simplemodal-container').length > 0) {
        // save the list of inputs
        s.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last', s.d.data[0]);

        // if it's the first or last tabbable element, refocus
        if ((!e.shiftKey && e.target === s.inputs[s.inputs.length -1]) ||
            (e.shiftKey && e.target === s.inputs[0]) ||
            s.inputs.length === 0) {
          e.preventDefault();
          var pos = e.shiftKey ? 'last' : 'first';
          s.focus(pos);
        }
      }
      else {
        // might be necessary when custom onShow callback is used
        e.preventDefault();
        s.focus();
      }
    },
    /*
     * Open the modal dialog elements
     * - Note: If you use the onOpen callback, you must "show" the
     *         overlay and container elements manually
     *         (the iframe will be handled by SimpleModal)
     */
    open: function () {
      var s = this;
      // display the iframe
      s.d.iframe && s.d.iframe.show();

      if ($.isFunction(s.o.onOpen)) {
        // execute the onOpen callback
        s.o.onOpen.apply(s, [s.d]);
      }
      else {
        // display the remaining elements
        s.d.overlay.show();
        s.d.container.show();
        s.d.data.show();
      }

      s.o.focus && s.focus();

      // bind default events
      s.bindEvents();
    },
    /*
     * Close the modal dialog
     * - Note: If you use an onClose callback, you must remove the
     *         overlay, container and iframe elements manually
     *
     * @param {boolean} external Indicates whether the call to this
     *     function was internal or external. If it was external, the
     *     onClose callback will be ignored
     */
    close: function () {
      var s = this;

      // prevent close when dialog does not exist
      if (!s.d.data) {
        return false;
      }

      // remove the default events
      s.unbindEvents();

      if ($.isFunction(s.o.onClose) && !s.occb) {
        // set the onClose callback flag
        s.occb = true;

        // execute the onClose callback
        s.o.onClose.apply(s, [s.d]);
      }
      else {
        // if the data came from the DOM, put it back
        if (s.d.placeholder) {
          var ph = $('#simplemodal-placeholder');
          // save changes to the data?
          if (s.o.persist) {
            // insert the (possibly) modified data back into the DOM
            ph.replaceWith(s.d.data.removeClass('simplemodal-data').css('display', s.display));
          }
          else {
            // remove the current and insert the original,
            // unmodified data back into the DOM
            s.d.data.hide().remove();
            ph.replaceWith(s.d.orig);
          }
        }
        else {
          // otherwise, remove it
          s.d.data.hide().remove();
        }

        // remove the remaining elements
        s.d.container.hide().remove();
        s.d.overlay.hide();
        s.d.iframe && s.d.iframe.hide().remove();
        s.d.overlay.remove();

        // reset the dialog object
        s.d = {};
      }
    }
  };
}));
/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function(){function t(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(!window.addEventListener)return;var e=window.StyleFix={link:function(t){try{if(t.rel!=="stylesheet"||t.hasAttribute("data-noprefix"))return}catch(n){return}var r=t.href||t.getAttribute("data-href"),i=r.replace(/[^\/]+$/,""),s=(/^[a-z]{3,10}:/.exec(i)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],u=/^([^?]*)\??/.exec(r)[1],a=t.parentNode,f=new XMLHttpRequest,l;f.onreadystatechange=function(){f.readyState===4&&l()};l=function(){var n=f.responseText;if(n&&t.parentNode&&(!f.status||f.status<400||f.status>600)){n=e.fix(n,!0,t);if(i){n=n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,n){return/^([a-z]{3,10}:|#)/i.test(n)?e:/^\/\//.test(n)?'url("'+s+n+'")':/^\//.test(n)?'url("'+o+n+'")':/^\?/.test(n)?'url("'+u+n+'")':'url("'+i+n+'")'});var r=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");n=n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+r,"gi"),"$1")}var l=document.createElement("style");l.textContent=n;l.media=t.media;l.disabled=t.disabled;l.setAttribute("data-href",t.getAttribute("href"));a.insertBefore(l,t);a.removeChild(t);l.media=t.media}};try{f.open("GET",r);f.send(null)}catch(n){if(typeof XDomainRequest!="undefined"){f=new XDomainRequest;f.onerror=f.onprogress=function(){};f.onload=l;f.open("GET",r);f.send(null)}}t.setAttribute("data-inprogress","")},styleElement:function(t){if(t.hasAttribute("data-noprefix"))return;var n=t.disabled;t.textContent=e.fix(t.textContent,!0,t);t.disabled=n},styleAttribute:function(t){var n=t.getAttribute("style");n=e.fix(n,!1,t);t.setAttribute("style",n)},process:function(){t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);t("style").forEach(StyleFix.styleElement);t("[style]").forEach(StyleFix.styleAttribute)},register:function(t,n){(e.fixers=e.fixers||[]).splice(n===undefined?e.fixers.length:n,0,t)},fix:function(t,n,r){for(var i=0;i<e.fixers.length;i++)t=e.fixers[i](t,n,r)||t;return t},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};(function(){setTimeout(function(){t('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()})();(function(e){function t(e,t,r,i,s){e=n[e];if(e.length){var o=RegExp(t+"("+e.join("|")+")"+r,"gi");s=s.replace(o,i)}return s}if(!window.StyleFix||!window.getComputedStyle)return;var n=window.PrefixFree={prefixCSS:function(e,r,i){var s=n.prefix;n.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(e,t,n,r){return t+(n||"")+"linear-gradient("+(90-r)+"deg"}));e=t("functions","(\\s|:|,)","\\s*\\(","$1"+s+"$2(",e);e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+s+"$2$3",e);e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+s+"$2:",e);if(n.properties.length){var o=RegExp("\\b("+n.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(o,s+"$1")},e)}if(r){e=t("selectors","","\\b",n.prefixSelector,e);e=t("atrules","@","\\b","@"+s+"$1",e)}e=e.replace(RegExp("-"+s,"g"),"-");e=e.replace(/-\*-(?=[a-z]+)/gi,n.prefix);return e},property:function(e){return(n.properties.indexOf(e)?n.prefix:"")+e},value:function(e,r){e=t("functions","(^|\\s|,)","\\s*\\(","$1"+n.prefix+"$2(",e);e=t("keywords","(^|\\s)","(\\s|$)","$1"+n.prefix+"$2$3",e);return e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+n.prefix})},prefixProperty:function(e,t){var r=n.prefix+e;return t?StyleFix.camelCase(r):r}};(function(){var e={},t=[],r={},i=getComputedStyle(document.documentElement,null),s=document.createElement("div").style,o=function(n){if(n.charAt(0)==="-"){t.push(n);var r=n.split("-"),i=r[1];e[i]=++e[i]||1;while(r.length>3){r.pop();var s=r.join("-");u(s)&&t.indexOf(s)===-1&&t.push(s)}}},u=function(e){return StyleFix.camelCase(e)in s};if(i.length>0)for(var a=0;a<i.length;a++)o(i[a]);else for(var f in i)o(StyleFix.deCamelCase(f));var l={uses:0};for(var c in e){var h=e[c];l.uses<h&&(l={prefix:c,uses:h})}n.prefix="-"+l.prefix+"-";n.Prefix=StyleFix.camelCase(n.prefix);n.properties=[];for(var a=0;a<t.length;a++){var f=t[a];if(f.indexOf(n.prefix)===0){var p=f.slice(n.prefix.length);u(p)||n.properties.push(p)}}n.Prefix=="Ms"&&!("transform"in s)&&!("MsTransform"in s)&&"msTransform"in s&&n.properties.push("transform","transform-origin");n.properties.sort()})();(function(){function i(e,t){r[t]="";r[t]=e;return!!r[t]}var e={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};e["repeating-linear-gradient"]=e["repeating-radial-gradient"]=e["radial-gradient"]=e["linear-gradient"];var t={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"};n.functions=[];n.keywords=[];var r=document.createElement("div").style;for(var s in e){var o=e[s],u=o.property,a=s+"("+o.params+")";!i(a,u)&&i(n.prefix+a,u)&&n.functions.push(s)}for(var f in t){var u=t[f];!i(f,u)&&i(n.prefix+f,u)&&n.keywords.push(f)}})();(function(){function s(e){i.textContent=e+"{}";return!!i.sheet.cssRules.length}var t={":read-only":null,":read-write":null,":any-link":null,"::selection":null},r={keyframes:"name",viewport:null,document:'regexp(".")'};n.selectors=[];n.atrules=[];var i=e.appendChild(document.createElement("style"));for(var o in t){var u=o+(t[o]?"("+t[o]+")":"");!s(u)&&s(n.prefixSelector(u))&&n.selectors.push(o)}for(var a in r){var u=a+" "+(r[a]||"");!s("@"+u)&&s("@"+n.prefix+u)&&n.atrules.push(a)}e.removeChild(i)})();n.valueProperties=["transition","transition-property"];e.className+=" "+n.prefix;StyleFix.register(n.prefixCSS)})(document.documentElement);
function FastClick(e){"use strict";var t,n=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=e;if(!e||!e.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)};if(FastClick.notNeeded(e)){return}if(this.deviceIsAndroid){e.addEventListener("mouseover",this.onMouse,true);e.addEventListener("mousedown",this.onMouse,true);e.addEventListener("mouseup",this.onMouse,true)}e.addEventListener("click",this.onClick,true);e.addEventListener("touchstart",this.onTouchStart,false);e.addEventListener("touchend",this.onTouchEnd,false);e.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;if(t==="click"){i.call(e,t,n.hijacked||n,r)}else{i.call(e,t,n,r)}};e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;if(t==="click"){i.call(e,t,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(e,t,n,r)}}}if(typeof e.onclick==="function"){t=e.onclick;e.addEventListener("click",function(e){t(e)},false);e.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(this.deviceIsIOS&&e.type==="file"||e.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(e.className)};FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":case"select":return true;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};FastClick.prototype.sendClick=function(e,t){"use strict";var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent("click",true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};FastClick.prototype.focus=function(e){"use strict";var t;if(this.deviceIsIOS&&e.setSelectionRange){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,r;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(this.deviceIsIOS){r=window.getSelection();if(r.rangeCount&&!r.isCollapsed){return true}if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<200){e.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};FastClick.prototype.findControl=function(e){"use strict";if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,r,i,s,o=this.targetElement;if(this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<200){this.cancelNextClick=true;return true}this.lastClickTime=e.timeStamp;n=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){s=e.changedTouches[0];o=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)}r=o.tagName.toLowerCase();if(r==="label"){t=this.findControl(o);if(t){this.focus(o);if(this.deviceIsAndroid){return false}o=t}}else if(this.needsFocus(o)){if(e.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&r==="input"){this.targetElement=null;return false}this.focus(o);if(!this.deviceIsIOS4||r!=="select"){this.targetElement=null;e.preventDefault()}return false}if(this.deviceIsIOS&&!this.deviceIsIOS4){i=o.fastClickScrollParent;if(i&&i.fastClickLastScrollTop!==i.scrollTop){return true}}if(!this.needsClick(o)){e.preventDefault();this.sendClick(o,e)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(e){"use strict";if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};FastClick.prototype.onClick=function(e){"use strict";var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};FastClick.prototype.destroy=function(){"use strict";var e=this.layer;if(this.deviceIsAndroid){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(e){"use strict";var t;if(typeof window.ontouchstart==="undefined"){return true}if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(FastClick.prototype.deviceIsAndroid){t=document.querySelector("meta[name=viewport]");if(t&&t.content.indexOf("user-scalable=no")!==-1){return true}}else{return true}}if(e.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(e){"use strict";return new FastClick(e)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}
;
(function () {
	'use strict';

	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;
		var valLength;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// new WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0, valLength = val.length; i < valLength; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return !!document[fn.fullscreenElement];
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return !!document[fn.fullscreenEnabled];
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();
//SPIN.js
(function(a,b,c){function O(a){H(arguments,function(b,d){a[b]===c&&(a[b]=d)});return a}function N(a){H(arguments,function(b,c){a[m][M(a,b)||b]=c});return a}function M(a,b){var d=a[m],f,g;if(d[b]!==c){return b}b=b.charAt(0).toUpperCase()+b.slice(1);for(g=0;g<E[e];g++){f=E[g]+b;if(d[f]!==c){return f}}}function L(a,b){var c=[j,b,~~(a*100)].join("-"),d="{"+j+":"+a+"}",f;if(!F[c]){for(f=0;f<E[e];f++){try{K.insertRule("@"+(E[f]&&"-"+E[f].toLowerCase()+"-"||"")+"keyframes "+c+"{0%{"+j+":1}"+b+"%"+d+"to"+d+"}",K.cssRules[e])}catch(g){}}F[c]=1}return c}function J(a,b,c){c&&!c[t]&&J(a,c),a.insertBefore(b,c||null);return a}function I(a){var c=b.createElement(a||"div");H(arguments,function(a,b){c[a]=b});return c}function H(a,b){var c=~~((a[e]-1)/2);for(var d=1;d<=c;d++){b(a[d*2-1],a[d*2])}}var d="width",e="length",f="radius",g="lines",h="trail",i="color",j="opacity",k="speed",l="shadow",m="style",n="height",o="left",p="top",q="px",r="childNodes",s="firstChild",t="parentNode",u="position",v="relative",w="absolute",x="animation",y="transform",z="Origin",A="Timeout",B="coord",C="#000",D=m+"Sheets",E="webkit0Moz0ms0O".split(0),F={},G;J(b.getElementsByTagName("head")[0],I(m));var K=b[D][b[D][e]-1],P=function(a){this.opts=O(a||{},g,12,h,100,e,7,d,5,f,10,i,C,j,0.25,k,1)},Q=P.prototype={spin:function(b){var c=this,d=c.el=c[g](c.opts);b&&J(b,N(d,o,~~(b.offsetWidth/2)+q,p,~~(b.offsetHeight/2)+q),b[s]);if(!G){var e=c.opts,f=0,i=20/e[k],l=(1-e[j])/(i*e[h]/100),m=i/e[g];(function n(){f++;for(var b=e[g];b;b--){var h=Math.max(1-(f+b*m)%i*l,e[j]);c[j](d,e[g]-b,h,e)}c[A]=c.el&&a["set"+A](n,50)})()}return c},stop:function(){var b=this,d=b.el;a["clear"+A](b[A]),d&&d[t]&&d[t].removeChild(d),b.el=c;return b}};Q[g]=function(a){function s(b,c){return N(I(),u,w,d,a[e]+a[d]+q,n,a[d]+q,"background",b,"boxShadow",c,y+z,o,y,"rotate("+~~(360/a[g]*m)+"deg) translate("+a[f]+q+",0)","borderRadius","100em")}var b=N(I(),u,v),c=L(a[j],a[h]),m=0,r;for(;m<a[g];m++){r=N(I(),u,w,p,1+~(a[d]/2)+q,y,"translate3d(0,0,0)",x,c+" "+1/a[k]+"s linear infinite "+(1/a[g]/a[k]*m-1/a[k])+"s"),a[l]&&J(r,N(s(C,"0 0 4px "+C),p,2+q)),J(b,J(r,s(a[i],"0 0 1px rgba(0,0,0,.1)")))}return b},Q[j]=function(a,b,c){a[r][b][m][j]=c};var R="behavior",S="url(#default#VML)",T="group0roundrect0fill0stroke".split(0);(function(){var a=N(I(T[0]),R,S),b;if(!M(a,y)&&a.adj){for(b=0;b<T[e];b++){K.addRule(T[b],R+":"+S)}Q[g]=function(){function s(c,e,l){J(k,J(N(h(),"rotation",360/a[g]*c+"deg",o,~~e),J(N(I(T[1],"arcsize",1),d,b,n,a[d],o,a[f],p,-a[d]/2,"filter",l),I(T[2],i,a[i],j,a[j]),I(T[3],j,0))))}function h(){return N(I(T[0],B+"size",c+" "+c,B+z,-b+" "+-b),d,c,n,c)}var a=this.opts,b=a[e]+a[d],c=2*b,k=h(),m=~(a[e]+a[f]+a[d])+q,r;if(a[l]){for(r=1;r<=a[g];r++){s(r,-2,"progid:DXImage"+y+".Microsoft.Blur(pixel"+f+"=2,make"+l+"=1,"+l+j+"=.3)")}}for(r=1;r<=a[g];r++){s(r)}return J(N(I(),"margin",m+" 0 0 "+m,u,v),k)},Q[j]=function(a,b,c,d){d=d[l]&&d[g]||0,a[s][r][b+d][s][s][j]=c}}else{G=M(a,x)}})(),a.Spinner=P})(window,document);
$.fn.spin = function(opts) {
	this.each(function() {
		var $this = $(this),
				spinner = $this.data('spinner');

		if (spinner) spinner.stop();
		if (opts !== false) {
			opts = $.extend({color: $this.css('color')}, opts);
			spinner = new Spinner(opts).spin(this);
			$this.data('spinner', spinner);
		}
	});
	return this;
};

/* to use

 spinner = $('#middle-area .explorer-full').first().spin(main.spinner_opts);
 or to stop
 spinner.spin(false)
*/
;
// jquery.event.move
//
// 1.3.6
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:   Page coordinates of pointer.
// startX:
// startY:  Page coordinates of pointer at movestart.
// distX:
// distY:  Distance the pointer has moved since movestart.
// deltaX:
// deltaY:  Distance the finger has moved since last event.
// velocityX:
// velocityY:  Average velocity over last few events.


(function (module) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], module);
	} else {
		// Browser globals
		module(jQuery);
	}
})(function(jQuery, undefined){

	var // Number of pixels a pressed pointer travels before movestart
	    // event is fired.
	    threshold = 6,
	
	    add = jQuery.event.add,
	
	    remove = jQuery.event.remove,

	    // Just sugar, so we can have arguments in the same order as
	    // add and remove.
	    trigger = function(node, type, data) {
	    	jQuery.event.trigger(type, data, node);
	    },

	    // Shim for requestAnimationFrame, falling back to timer. See:
	    // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    requestFrame = (function(){
	    	return (
	    		window.requestAnimationFrame ||
	    		window.webkitRequestAnimationFrame ||
	    		window.mozRequestAnimationFrame ||
	    		window.oRequestAnimationFrame ||
	    		window.msRequestAnimationFrame ||
	    		function(fn, element){
	    			return window.setTimeout(function(){
	    				fn();
	    			}, 25);
	    		}
	    	);
	    })(),
	    
	    ignoreTags = {
	    	textarea: true,
	    	input: true,
	    	select: true,
	    	button: true
	    },
	    
	    mouseevents = {
	    	move: 'mousemove',
	    	cancel: 'mouseup dragstart',
	    	end: 'mouseup'
	    },
	    
	    touchevents = {
	    	move: 'touchmove',
	    	cancel: 'touchend',
	    	end: 'touchend'
	    };


	// Constructors
	
	function Timer(fn){
		var callback = fn,
		    active = false,
		    running = false;
		
		function trigger(time) {
			if (active){
				callback();
				requestFrame(trigger);
				running = true;
				active = false;
			}
			else {
				running = false;
			}
		}
		
		this.kick = function(fn) {
			active = true;
			if (!running) { trigger(); }
		};
		
		this.end = function(fn) {
			var cb = callback;
			
			if (!fn) { return; }
			
			// If the timer is not running, simply call the end callback.
			if (!running) {
				fn();
			}
			// If the timer is running, and has been kicked lately, then
			// queue up the current callback and the end callback, otherwise
			// just the end callback.
			else {
				callback = active ?
					function(){ cb(); fn(); } : 
					fn ;
				
				active = true;
			}
		};
	}


	// Functions
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function preventDefault(e) {
		e.preventDefault();
	}
	
	function preventIgnoreTags(e) {
		// Don't prevent interaction with form elements.
		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }
		
		e.preventDefault();
	}

	function isLeftButton(e) {
		// Ignore mousedowns on any button other than the left (or primary)
		// mouse button, or when a modifier key is pressed.
		return (e.which === 1 && !e.ctrlKey && !e.altKey);
	}

	function identifiedTouch(touchList, id) {
		var i, l;

		if (touchList.identifiedTouch) {
			return touchList.identifiedTouch(id);
		}
		
		// touchList.identifiedTouch() does not exist in
		// webkit yet… we must do the search ourselves...
		
		i = -1;
		l = touchList.length;
		
		while (++i < l) {
			if (touchList[i].identifier === id) {
				return touchList[i];
			}
		}
	}

	function changedTouch(e, event) {
		var touch = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		// Chrome Android (at least) includes touches that have not
		// changed in e.changedTouches. That's a bit annoying. Check
		// that this touch has changed.
		if (touch.pageX === event.pageX && touch.pageY === event.pageY) { return; }

		return touch;
	}


	// Handlers that decide when the first movestart is triggered
	
	function mousedown(e){
		var data;

		if (!isLeftButton(e)) { return; }

		data = {
			target: e.target,
			startX: e.pageX,
			startY: e.pageY,
			timeStamp: e.timeStamp
		};

		add(document, mouseevents.move, mousemove, data);
		add(document, mouseevents.cancel, mouseend, data);
	}

	function mousemove(e){
		var data = e.data;

		checkThreshold(e, data, e, removeMouse);
	}

	function mouseend(e) {
		removeMouse();
	}

	function removeMouse() {
		remove(document, mouseevents.move, mousemove);
		remove(document, mouseevents.cancel, mouseend);
	}

	function touchstart(e) {
		var touch, template;

		// Don't get in the way of interaction with form elements.
		if (ignoreTags[ e.target.tagName.toLowerCase() ]) { return; }

		touch = e.changedTouches[0];
		
		// iOS live updates the touch objects whereas Android gives us copies.
		// That means we can't trust the touchstart object to stay the same,
		// so we must copy the data. This object acts as a template for
		// movestart, move and moveend event objects.
		template = {
			target: touch.target,
			startX: touch.pageX,
			startY: touch.pageY,
			timeStamp: e.timeStamp,
			identifier: touch.identifier
		};

		// Use the touch identifier as a namespace, so that we can later
		// remove handlers pertaining only to this touch.
		add(document, touchevents.move + '.' + touch.identifier, touchmove, template);
		add(document, touchevents.cancel + '.' + touch.identifier, touchend, template);
	}

	function touchmove(e){
		var data = e.data,
		    touch = changedTouch(e, data);

		if (!touch) { return; }

		checkThreshold(e, data, touch, removeTouch);
	}

	function touchend(e) {
		var template = e.data,
		    touch = identifiedTouch(e.changedTouches, template.identifier);

		if (!touch) { return; }

		removeTouch(template.identifier);
	}

	function removeTouch(identifier) {
		remove(document, '.' + identifier, touchmove);
		remove(document, '.' + identifier, touchend);
	}


	// Logic for deciding when to trigger a movestart.

	function checkThreshold(e, template, touch, fn) {
		var distX = touch.pageX - template.startX,
		    distY = touch.pageY - template.startY;

		// Do nothing if the threshold has not been crossed.
		if ((distX * distX) + (distY * distY) < (threshold * threshold)) { return; }

		triggerStart(e, template, touch, distX, distY, fn);
	}

	function handled() {
		// this._handled should return false once, and after return true.
		this._handled = returnTrue;
		return false;
	}

	function flagAsHandled(e) {
		e._handled();
	}

	function triggerStart(e, template, touch, distX, distY, fn) {
		var node = template.target,
		    touches, time;

		touches = e.targetTouches;
		time = e.timeStamp - template.timeStamp;

		// Create a movestart object with some special properties that
		// are passed only to the movestart handlers.
		template.type = 'movestart';
		template.distX = distX;
		template.distY = distY;
		template.deltaX = distX;
		template.deltaY = distY;
		template.pageX = touch.pageX;
		template.pageY = touch.pageY;
		template.velocityX = distX / time;
		template.velocityY = distY / time;
		template.targetTouches = touches;
		template.finger = touches ?
			touches.length :
			1 ;

		// The _handled method is fired to tell the default movestart
		// handler that one of the move events is bound.
		template._handled = handled;
			
		// Pass the touchmove event so it can be prevented if or when
		// movestart is handled.
		template._preventTouchmoveDefault = function() {
			e.preventDefault();
		};

		// Trigger the movestart event.
		trigger(template.target, template);

		// Unbind handlers that tracked the touch or mouse up till now.
		fn(template.identifier);
	}


	// Handlers that control what happens following a movestart

	function activeMousemove(e) {
		var timer = e.data.timer;

		e.data.touch = e;
		e.data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeMouseend(e) {
		var event = e.data.event,
		    timer = e.data.timer;
		
		removeActiveMouse();

		endEvent(event, timer, function() {
			// Unbind the click suppressor, waiting until after mouseup
			// has been handled.
			setTimeout(function(){
				remove(event.target, 'click', returnFalse);
			}, 0);
		});
	}

	function removeActiveMouse(event) {
		remove(document, mouseevents.move, activeMousemove);
		remove(document, mouseevents.end, activeMouseend);
	}

	function activeTouchmove(e) {
		var event = e.data.event,
		    timer = e.data.timer,
		    touch = changedTouch(e, event);

		if (!touch) { return; }

		// Stop the interface from gesturing
		e.preventDefault();

		event.targetTouches = e.targetTouches;
		e.data.touch = touch;
		e.data.timeStamp = e.timeStamp;
		timer.kick();
	}

	function activeTouchend(e) {
		var event = e.data.event,
		    timer = e.data.timer,
		    touch = identifiedTouch(e.changedTouches, event.identifier);

		// This isn't the touch you're looking for.
		if (!touch) { return; }

		removeActiveTouch(event);
		endEvent(event, timer);
	}

	function removeActiveTouch(event) {
		remove(document, '.' + event.identifier, activeTouchmove);
		remove(document, '.' + event.identifier, activeTouchend);
	}


	// Logic for triggering move and moveend events

	function updateEvent(event, touch, timeStamp, timer) {
		var time = timeStamp - event.timeStamp;

		event.type = 'move';
		event.distX =  touch.pageX - event.startX;
		event.distY =  touch.pageY - event.startY;
		event.deltaX = touch.pageX - event.pageX;
		event.deltaY = touch.pageY - event.pageY;
		
		// Average the velocity of the last few events using a decay
		// curve to even out spurious jumps in values.
		event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
		event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
		event.pageX =  touch.pageX;
		event.pageY =  touch.pageY;
	}

	function endEvent(event, timer, fn) {
		timer.end(function(){
			event.type = 'moveend';

			trigger(event.target, event);
			
			return fn && fn();
		});
	}


	// jQuery special event definition

	function setup(data, namespaces, eventHandle) {
		// Stop the node from being dragged
		//add(this, 'dragstart.move drag.move', preventDefault);
		
		// Prevent text selection and touch interface scrolling
		//add(this, 'mousedown.move', preventIgnoreTags);
		
		// Tell movestart default handler that we've handled this
		add(this, 'movestart.move', flagAsHandled);

		// Don't bind to the DOM. For speed.
		return true;
	}
	
	function teardown(namespaces) {
		remove(this, 'dragstart drag', preventDefault);
		remove(this, 'mousedown touchstart', preventIgnoreTags);
		remove(this, 'movestart', flagAsHandled);
		
		// Don't bind to the DOM. For speed.
		return true;
	}
	
	function addMethod(handleObj) {
		// We're not interested in preventing defaults for handlers that
		// come from internal move or moveend bindings
		if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
			return;
		}
		
		// Stop the node from being dragged
		add(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid, preventDefault, undefined, handleObj.selector);
		
		// Prevent text selection and touch interface scrolling
		add(this, 'mousedown.' + handleObj.guid, preventIgnoreTags, undefined, handleObj.selector);
	}
	
	function removeMethod(handleObj) {
		if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
			return;
		}
		
		remove(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid);
		remove(this, 'mousedown.' + handleObj.guid);
	}
	
	jQuery.event.special.movestart = {
		setup: setup,
		teardown: teardown,
		add: addMethod,
		remove: removeMethod,

		_default: function(e) {
			var event, data;
			
			// If no move events were bound to any ancestors of this
			// target, high tail it out of here.
			if (!e._handled()) { return; }

			function update(time) {
				updateEvent(event, data.touch, data.timeStamp);
				trigger(e.target, event);
			}

			event = {
				target: e.target,
				startX: e.startX,
				startY: e.startY,
				pageX: e.pageX,
				pageY: e.pageY,
				distX: e.distX,
				distY: e.distY,
				deltaX: e.deltaX,
				deltaY: e.deltaY,
				velocityX: e.velocityX,
				velocityY: e.velocityY,
				timeStamp: e.timeStamp,
				identifier: e.identifier,
				targetTouches: e.targetTouches,
				finger: e.finger
			};

			data = {
				event: event,
				timer: new Timer(update),
				touch: undefined,
				timeStamp: undefined
			};
			
			if (e.identifier === undefined) {
				// We're dealing with a mouse
				// Stop clicks from propagating during a move
				add(e.target, 'click', returnFalse);
				add(document, mouseevents.move, activeMousemove, data);
				add(document, mouseevents.end, activeMouseend, data);
			}
			else {
				// We're dealing with a touch. Stop touchmove doing
				// anything defaulty.
				e._preventTouchmoveDefault();
				add(document, touchevents.move + '.' + e.identifier, activeTouchmove, data);
				add(document, touchevents.end + '.' + e.identifier, activeTouchend, data);
			}
		}
	};

	jQuery.event.special.move = {
		setup: function() {
			// Bind a noop to movestart. Why? It's the movestart
			// setup that decides whether other move events are fired.
			add(this, 'movestart.move', jQuery.noop);
		},
		
		teardown: function() {
			remove(this, 'movestart.move', jQuery.noop);
		}
	};
	
	jQuery.event.special.moveend = {
		setup: function() {
			// Bind a noop to movestart. Why? It's the movestart
			// setup that decides whether other move events are fired.
			add(this, 'movestart.moveend', jQuery.noop);
		},
		
		teardown: function() {
			remove(this, 'movestart.moveend', jQuery.noop);
		}
	};

	add(document, 'mousedown.move', mousedown);
	add(document, 'touchstart.move', touchstart);

	// Make jQuery copy touch event properties over to the jQuery event
	// object, if they are not already listed. But only do the ones we
	// really need. IE7/8 do not have Array#indexOf(), but nor do they
	// have touch events, so let's assume we can ignore them.
	if (typeof Array.prototype.indexOf === 'function') {
		(function(jQuery, undefined){
			var props = ["changedTouches", "targetTouches"],
			    l = props.length;
			
			while (l--) {
				if (jQuery.event.props.indexOf(props[l]) === -1) {
					jQuery.event.props.push(props[l]);
				}
			}
		})(jQuery);
	};
});
//tweaked to add slide in event
(function($){

  $.fn.twentytwenty = function(options) {
    var options = $.extend({default_offset_pct: 0.5, orientation: 'horizontal'}, options);
    return this.each(function() {

      var sliderPct = options.default_offset_pct;
      var container = $(this);
      var sliderOrientation = options.orientation;
      var beforeDirection = (sliderOrientation === 'vertical') ? 'down' : 'left';
      var afterDirection = (sliderOrientation === 'vertical') ? 'up' : 'right';
      
      
      container.wrap("<div class='twentytwenty-wrapper twentytwenty-" + sliderOrientation + "'></div>");
      container.append("<div class='twentytwenty-overlay'></div>");
      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");
      container.append("<div class='twentytwenty-handle'></div>");
      var slider = container.find(".twentytwenty-handle");
      slider.append("<span class='twentytwenty-" + beforeDirection + "-arrow'></span>");
      slider.append("<span class='twentytwenty-" + afterDirection + "-arrow'></span>");
      container.addClass("twentytwenty-container");
      beforeImg.addClass("twentytwenty-before");
      afterImg.addClass("twentytwenty-after");
      
      var overlay = container.find(".twentytwenty-overlay");
      overlay.append("<div class='twentytwenty-before-label'></div>");
      overlay.append("<div class='twentytwenty-after-label'></div>");

      var calcOffset = function(dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w+"px",
          h: h+"px",
          cw: (dimensionPct*w)+"px",
          ch: (dimensionPct*h)+"px"
        };
      };

      var adjustContainer = function(offset) {
      	if (sliderOrientation === 'vertical') {
      	  beforeImg.css("clip", "rect(0,"+offset.w+","+offset.ch+",0)");
      	}
      	else {
          beforeImg.css("clip", "rect(0,"+offset.cw+","+offset.h+",0)");
    	}
        container.css("height", offset.h);
      };

      var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        slider.css((sliderOrientation==="vertical") ? "top" : "left", (sliderOrientation==="vertical") ? offset.ch : offset.cw);
        adjustContainer(offset);
      }

      $(window).on("resize.twentytwenty", function(e) {
        adjustSlider(sliderPct);
      });

      var offsetX = 0;
      var imgWidth = 0;
      
      slider.on("movestart", function(e) {
        if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) && sliderOrientation !== 'vertical') {
          e.preventDefault();
        }
        else if (((e.distX < e.distY && e.distX < -e.distY) || (e.distX > e.distY && e.distX > -e.distY)) && sliderOrientation === 'vertical') {
          e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = beforeImg.width(); 
        imgHeight = beforeImg.height();          
      });

      slider.on("moveend", function(e) {
        container.removeClass("active");
      });

      slider.on("move", function(e) {
        if (container.hasClass("active")) {
          sliderPct = (sliderOrientation === 'vertical') ? (e.pageY-offsetY)/imgHeight : (e.pageX-offsetX)/imgWidth;
          if (sliderPct < 0) {
            sliderPct = 0;
          }
          if (sliderPct > 1) {
            sliderPct = 1;
          }
          adjustSlider(sliderPct);
        }
      });

			$(window).on("slidein", function(e,pct){
				$({slide:0}).animate({slide:pct}, {
					duration: 1000,
					step: function(val){
						adjustSlider(val/100)
					},
					done: function(){
						sliderPct = 0.5;
					}
				})
			});

      container.find("img").on("mousedown", function(event) {
        event.preventDefault();
      });

      $(window).trigger("resize.twentytwenty");
    });
  };

})(jQuery);
/**
 * @license jquery.panzoom.js v2.0.5
 * Updated: Thu Jul 03 2014
 * Add pan and zoom functionality to any element
 * Copyright (c) 2014 timmy willison
 * Released under the MIT license
 * https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a,b){for(var c=a.length;--c;)if(+a[c]!==+b[c])return!1;return!0}function d(a){var c={range:!0,animate:!0};return"boolean"==typeof a?c.animate=a:b.extend(c,a),c}function e(a,c,d,e,f,g,h,i,j){this.elements="array"===b.type(a)?[+a[0],+a[2],+a[4],+a[1],+a[3],+a[5],0,0,1]:[a,c,d,e,f,g,h||0,i||0,j||1]}function f(a,b,c){this.elements=[a,b,c]}function g(a,c){if(!(this instanceof g))return new g(a,c);1!==a.nodeType&&b.error("Panzoom called on non-Element node"),b.contains(l,a)||b.error("Panzoom element must be attached to the document");var d=b.data(a,m);if(d)return d;this.options=c=b.extend({},g.defaults,c),this.elem=a;var e=this.$elem=b(a);this.$set=c.$set&&c.$set.length?c.$set:e,this.$doc=b(a.ownerDocument||l),this.$parent=e.parent(),this.isSVG=r.test(a.namespaceURI)&&"svg"!==a.nodeName.toLowerCase(),this.panning=!1,this._buildTransform(),this._transform=!this.isSVG&&b.cssProps.transform.replace(q,"-$1").toLowerCase(),this._buildTransition(),this.resetDimensions();var f=b(),h=this;b.each(["$zoomIn","$zoomOut","$zoomRange","$reset"],function(a,b){h[b]=c[b]||f}),this.enable(),b.data(a,m,this)}var h="over out down up move enter leave cancel".split(" "),i=b.extend({},b.event.mouseHooks),j={};if(a.PointerEvent)b.each(h,function(a,c){b.event.fixHooks[j[c]="pointer"+c]=i});else{var k=i.props;i.props=k.concat(["touches","changedTouches","targetTouches","altKey","ctrlKey","metaKey","shiftKey"]),i.filter=function(a,b){var c,d=k.length;if(!b.pageX&&b.touches&&(c=b.touches[0]))for(;d--;)a[k[d]]=c[k[d]];return a},b.each(h,function(a,c){if(2>a)j[c]="mouse"+c;else{var d="touch"+("down"===c?"start":"up"===c?"end":c);b.event.fixHooks[d]=i,j[c]=d+" mouse"+c}})}b.pointertouch=j;var l=a.document,m="__pz__",n=Array.prototype.slice,o=!!a.PointerEvent,p=function(){var a=l.createElement("input");return a.setAttribute("oninput","return"),"function"==typeof a.oninput}(),q=/([A-Z])/g,r=/^http:[\w\.\/]+svg$/,s=/^inline/,t="(\\-?[\\d\\.e]+)",u="\\,?\\s*",v=new RegExp("^matrix\\("+t+u+t+u+t+u+t+u+t+u+t+"\\)$");return e.prototype={x:function(a){var b=a instanceof f,c=this.elements,d=a.elements;return b&&3===d.length?new f(c[0]*d[0]+c[1]*d[1]+c[2]*d[2],c[3]*d[0]+c[4]*d[1]+c[5]*d[2],c[6]*d[0]+c[7]*d[1]+c[8]*d[2]):d.length===c.length?new e(c[0]*d[0]+c[1]*d[3]+c[2]*d[6],c[0]*d[1]+c[1]*d[4]+c[2]*d[7],c[0]*d[2]+c[1]*d[5]+c[2]*d[8],c[3]*d[0]+c[4]*d[3]+c[5]*d[6],c[3]*d[1]+c[4]*d[4]+c[5]*d[7],c[3]*d[2]+c[4]*d[5]+c[5]*d[8],c[6]*d[0]+c[7]*d[3]+c[8]*d[6],c[6]*d[1]+c[7]*d[4]+c[8]*d[7],c[6]*d[2]+c[7]*d[5]+c[8]*d[8]):!1},inverse:function(){var a=1/this.determinant(),b=this.elements;return new e(a*(b[8]*b[4]-b[7]*b[5]),a*-(b[8]*b[1]-b[7]*b[2]),a*(b[5]*b[1]-b[4]*b[2]),a*-(b[8]*b[3]-b[6]*b[5]),a*(b[8]*b[0]-b[6]*b[2]),a*-(b[5]*b[0]-b[3]*b[2]),a*(b[7]*b[3]-b[6]*b[4]),a*-(b[7]*b[0]-b[6]*b[1]),a*(b[4]*b[0]-b[3]*b[1]))},determinant:function(){var a=this.elements;return a[0]*(a[8]*a[4]-a[7]*a[5])-a[3]*(a[8]*a[1]-a[7]*a[2])+a[6]*(a[5]*a[1]-a[4]*a[2])}},f.prototype.e=e.prototype.e=function(a){return this.elements[a]},g.rmatrix=v,g.events=b.pointertouch,g.defaults={eventNamespace:".panzoom",transition:!0,cursor:"move",disablePan:!1,disableZoom:!1,increment:.3,minScale:.4,maxScale:5,rangeStep:.05,duration:200,easing:"ease-in-out",contain:!1},g.prototype={constructor:g,instance:function(){return this},enable:function(){this._initStyle(),this._bind(),this.disabled=!1},disable:function(){this.disabled=!0,this._resetStyle(),this._unbind()},isDisabled:function(){return this.disabled},destroy:function(){this.disable(),b.removeData(this.elem,m)},resetDimensions:function(){var a=this.$parent;this.container={width:a.innerWidth(),height:a.innerHeight()};var c,d=a.offset(),e=this.elem,f=this.$elem;this.isSVG?(c=e.getBoundingClientRect(),c={left:c.left-d.left,top:c.top-d.top,width:c.width,height:c.height,margin:{left:0,top:0}}):c={left:b.css(e,"left",!0)||0,top:b.css(e,"top",!0)||0,width:f.innerWidth(),height:f.innerHeight(),margin:{top:b.css(e,"marginTop",!0)||0,left:b.css(e,"marginLeft",!0)||0}},c.widthBorder=b.css(e,"borderLeftWidth",!0)+b.css(e,"borderRightWidth",!0)||0,c.heightBorder=b.css(e,"borderTopWidth",!0)+b.css(e,"borderBottomWidth",!0)||0,this.dimensions=c},reset:function(a){a=d(a);var b=this.setMatrix(this._origTransform,a);a.silent||this._trigger("reset",b)},resetZoom:function(a){a=d(a);var b=this.getMatrix(this._origTransform);a.dValue=b[3],this.zoom(b[0],a)},resetPan:function(a){var b=this.getMatrix(this._origTransform);this.pan(b[4],b[5],d(a))},setTransform:function(a){for(var c=this.isSVG?"attr":"style",d=this.$set,e=d.length;e--;)b[c](d[e],"transform",a)},getTransform:function(a){var c=this.$set,d=c[0];return a?this.setTransform(a):a=b[this.isSVG?"attr":"style"](d,"transform"),"none"===a||v.test(a)||this.setTransform(a=b.css(d,"transform")),a||"none"},getMatrix:function(a){var b=v.exec(a||this.getTransform());return b&&b.shift(),b||[1,0,0,1,0,0]},setMatrix:function(a,c){if(!this.disabled){c||(c={}),"string"==typeof a&&(a=this.getMatrix(a));var d,e,f,g,h,i,j,k,l,m,n=+a[0],o=this.$parent,p="undefined"!=typeof c.contain?c.contain:this.options.contain;return p&&(d=this._checkDims(),e=this.container,l=d.width+d.widthBorder,m=d.height+d.heightBorder,f=(l*Math.abs(n)-e.width)/2,g=(m*Math.abs(n)-e.height)/2,j=d.left+d.margin.left,k=d.top+d.margin.top,"invert"===p?(h=l>e.width?l-e.width:0,i=m>e.height?m-e.height:0,f+=(e.width-l)/2,g+=(e.height-m)/2,a[4]=Math.max(Math.min(a[4],f-j),-f-j-h),a[5]=Math.max(Math.min(a[5],g-k),-g-k-i+d.heightBorder)):(g+=d.heightBorder/2,h=e.width>l?e.width-l:0,i=e.height>m?e.height-m:0,"center"===o.css("textAlign")&&s.test(b.css(this.elem,"display"))?h=0:f=g=0,a[4]=Math.min(Math.max(a[4],f-j),-f-j+h),a[5]=Math.min(Math.max(a[5],g-k),-g-k+i))),"skip"!==c.animate&&this.transition(!c.animate),c.range&&this.$zoomRange.val(n),this.setTransform("matrix("+a.join(",")+")"),c.silent||this._trigger("change",a),a}},isPanning:function(){return this.panning},transition:function(a){if(this._transition)for(var c=a||!this.options.transition?"none":this._transition,d=this.$set,e=d.length;e--;)b.style(d[e],"transition")!==c&&b.style(d[e],"transition",c)},pan:function(a,b,c){if(!this.options.disablePan){c||(c={});var d=c.matrix;d||(d=this.getMatrix()),c.relative&&(a+=+d[4],b+=+d[5]),d[4]=a,d[5]=b,this.setMatrix(d,c),c.silent||this._trigger("pan",d[4],d[5])}},zoom:function(a,c){"object"==typeof a?(c=a,a=null):c||(c={});var d=b.extend({},this.options,c);if(!d.disableZoom){var g=!1,h=d.matrix||this.getMatrix();"number"!=typeof a&&(a=+h[0]+d.increment*(a?-1:1),g=!0),a>d.maxScale?a=d.maxScale:a<d.minScale&&(a=d.minScale);var i=d.focal;if(i&&!d.disablePan){var j=this._checkDims(),k=i.clientX,l=i.clientY;this.isSVG||(k-=(j.width+j.widthBorder)/2,l-=(j.height+j.heightBorder)/2);var m=new f(k,l,1),n=new e(h),o=this.parentOffset||this.$parent.offset(),p=new e(1,0,o.left-this.$doc.scrollLeft(),0,1,o.top-this.$doc.scrollTop()),q=n.inverse().x(p.inverse().x(m)),r=a/h[0];n=n.x(new e([r,0,0,r,0,0])),m=p.x(n.x(q)),h[4]=+h[4]+(k-m.e(0)),h[5]=+h[5]+(l-m.e(1))}h[0]=a,h[3]="number"==typeof d.dValue?d.dValue:a,this.setMatrix(h,{animate:"boolean"==typeof d.animate?d.animate:g,range:!d.noSetRange}),d.silent||this._trigger("zoom",h[0],d)}},option:function(a,c){var d;if(!a)return b.extend({},this.options);if("string"==typeof a){if(1===arguments.length)return void 0!==this.options[a]?this.options[a]:null;d={},d[a]=c}else d=a;this._setOptions(d)},_setOptions:function(a){b.each(a,b.proxy(function(a,c){switch(a){case"disablePan":this._resetStyle();case"$zoomIn":case"$zoomOut":case"$zoomRange":case"$reset":case"disableZoom":case"onStart":case"onChange":case"onZoom":case"onPan":case"onEnd":case"onReset":case"eventNamespace":this._unbind()}switch(this.options[a]=c,a){case"disablePan":this._initStyle();case"$zoomIn":case"$zoomOut":case"$zoomRange":case"$reset":this[a]=c;case"disableZoom":case"onStart":case"onChange":case"onZoom":case"onPan":case"onEnd":case"onReset":case"eventNamespace":this._bind();break;case"cursor":b.style(this.elem,"cursor",c);break;case"minScale":this.$zoomRange.attr("min",c);break;case"maxScale":this.$zoomRange.attr("max",c);break;case"rangeStep":this.$zoomRange.attr("step",c);break;case"startTransform":this._buildTransform();break;case"duration":case"easing":this._buildTransition();case"transition":this.transition();break;case"$set":c instanceof b&&c.length&&(this.$set=c,this._initStyle(),this._buildTransform())}},this))},_initStyle:function(){var a={"backface-visibility":"hidden","transform-origin":this.isSVG?"0 0":"50% 50%"};this.options.disablePan||(a.cursor=this.options.cursor),this.$set.css(a);var c=this.$parent;c.length&&!b.nodeName(c[0],"body")&&(a={overflow:"hidden"},"static"===c.css("position")&&(a.position="relative"),c.css(a))},_resetStyle:function(){this.$elem.css({cursor:"",transition:""}),this.$parent.css({overflow:"",position:""})},_bind:function(){var a=this,c=this.options,d=c.eventNamespace,e=o?"pointerdown"+d:"touchstart"+d+" mousedown"+d,f=o?"pointerup"+d:"touchend"+d+" click"+d,h={},i=this.$reset,j=this.$zoomRange;if(b.each(["Start","Change","Zoom","Pan","End","Reset"],function(){var a=c["on"+this];b.isFunction(a)&&(h["panzoom"+this.toLowerCase()+d]=a)}),c.disablePan&&c.disableZoom||(h[e]=function(b){var d;("touchstart"===b.type?!(d=b.touches)||(1!==d.length||c.disablePan)&&2!==d.length:c.disablePan||1!==b.which)||(b.preventDefault(),b.stopPropagation(),a._startMove(b,d))}),this.$elem.on(h),i.length&&i.on(f,function(b){b.preventDefault(),a.reset()}),j.length&&j.attr({step:c.rangeStep===g.defaults.rangeStep&&j.attr("step")||c.rangeStep,min:c.minScale,max:c.maxScale}).prop({value:this.getMatrix()[0]}),!c.disableZoom){var k=this.$zoomIn,l=this.$zoomOut;k.length&&l.length&&(k.on(f,function(b){b.preventDefault(),a.zoom()}),l.on(f,function(b){b.preventDefault(),a.zoom(!0)})),j.length&&(h={},h[(o?"pointerdown":"mousedown")+d]=function(){a.transition(!0)},h[(p?"input":"change")+d]=function(){a.zoom(+this.value,{noSetRange:!0})},j.on(h))}},_unbind:function(){this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)},_buildTransform:function(){return this._origTransform=this.getTransform(this.options.startTransform)},_buildTransition:function(){if(this._transform){var a=this.options;this._transition=this._transform+" "+a.duration+"ms "+a.easing}},_checkDims:function(){var a=this.dimensions;return a.width&&a.height||this.resetDimensions(),this.dimensions},_getDistance:function(a){var b=a[0],c=a[1];return Math.sqrt(Math.pow(Math.abs(c.clientX-b.clientX),2)+Math.pow(Math.abs(c.clientY-b.clientY),2))},_getMiddle:function(a){var b=a[0],c=a[1];return{clientX:(c.clientX-b.clientX)/2+b.clientX,clientY:(c.clientY-b.clientY)/2+b.clientY}},_trigger:function(a){"string"==typeof a&&(a="panzoom"+a),this.$elem.triggerHandler(a,[this].concat(n.call(arguments,1)))},_startMove:function(a,d){var e,f,g,h,i,j,k,m,n=this,p=this.options,q=p.eventNamespace,r=this.getMatrix(),s=r.slice(0),t=+s[4],u=+s[5],v={matrix:r,animate:"skip"};o?(f="pointermove",g="pointerup"):"touchstart"===a.type?(f="touchmove",g="touchend"):(f="mousemove",g="mouseup"),f+=q,g+=q,this.transition(!0),this.panning=!0,this._trigger("start",a,d),d&&2===d.length?(h=this._getDistance(d),i=+r[0],j=this._getMiddle(d),e=function(a){a.preventDefault();var b=n._getMiddle(d=a.touches),c=n._getDistance(d)-h;n.zoom(c*(p.increment/100)+i,{focal:b,matrix:r,animate:!1}),n.pan(+r[4]+b.clientX-j.clientX,+r[5]+b.clientY-j.clientY,v),j=b}):(k=a.pageX,m=a.pageY,e=function(a){a.preventDefault(),n.pan(t+a.pageX-k,u+a.pageY-m,v)}),b(l).off(q).on(f,e).on(g,function(a){a.preventDefault(),b(this).off(q),n.panning=!1,a.type="panzoomend",n._trigger(a,r,!c(r,s))})}},b.Panzoom=g,b.fn.panzoom=function(a){var c,d,e,f;return"string"==typeof a?(f=[],d=n.call(arguments,1),this.each(function(){c=b.data(this,m),c?"_"!==a.charAt(0)&&"function"==typeof(e=c[a])&&void 0!==(e=e.apply(c,d))&&f.push(e):f.push(void 0)}),f.length?1===f.length?f[0]:f:this):this.each(function(){new g(this,a)})},g});
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-canvas-cookies-cssanimations-csstransforms-csstransforms3d-csstransitions-flash-flexbox-flexboxlegacy-flexboxtweener-fullscreen-geolocation-hiddenscroll-picture-preserve3d-srcdoc-svg-touchevents-video-webgl !*/

!function(e,n,t){function o(e){var n=T.className,t=Modernizr._config.classPrefix||"";if(C&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),C?T.className.baseVal=n:T.className=n)}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):C?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(e,n){return typeof e===n}function s(){var e,n,t,o,r,s,a;for(var l in w){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=i(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),x.push((o?"":"no-")+a.join("-"))}}function a(){var e=n.body;return e||(e=r(C?"svg":"body"),e.fake=!0),e}function l(e,n){if("object"==typeof e)for(var t in e)P(e,t)&&l(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),o([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,t,o,i){var s,l,c,f,d="modernizr",u=r("div"),p=a();if(parseInt(o,10))for(;o--;)c=r("div"),c.id=i?i[o]:d+(o+1),u.appendChild(c);return s=r("style"),s.type="text/css",s.id="s"+d,(p.fake?p:u).appendChild(s),p.appendChild(u),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),u.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),l=t(u,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=f,T.offsetHeight):u.parentNode.removeChild(u),!!l}function d(e,n){return!!~(""+e).indexOf(n)}function u(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var r in e)if(e[r]in n)return t===!1?e[r]:(o=n[e[r]],i(o,"function")?u(o,t||n):o);return!1}function v(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(v(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+v(n[r])+":"+o+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,o,s){function a(){f&&(delete O.style,delete O.modElem)}if(s=i(s,"undefined")?!1:s,!i(o,"undefined")){var l=h(e,o);if(!i(l,"undefined"))return l}for(var f,u,p,v,m,g=["modernizr","tspan"];!O.style;)f=!0,O.modElem=r(g.shift()),O.style=O.modElem.style;for(p=e.length,u=0;p>u;u++)if(v=e[u],m=O.style[v],d(v,"-")&&(v=c(v)),O.style[v]!==t){if(s||i(o,"undefined"))return a(),"pfx"==n?v:!0;try{O.style[v]=o}catch(y){}if(O.style[v]!=m)return a(),"pfx"==n?v:!0}return a(),!1}function g(e,n,t,o,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(s+" ")+s).split(" ");return i(n,"string")||i(n,"undefined")?m(a,n,o,r):(a=(e+" "+A.join(s+" ")+s).split(" "),p(a,n,t))}function y(e,n,o){return g(e,t,t,n,o)}var x=[],w=[],b={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{n.cookie="cookietest=1";var e=-1!=n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("picture","HTMLPictureElement"in e);var T=n.documentElement,C="svg"===T.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=r("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=r("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("webgl",function(){var n=r("canvas"),t="probablySupportsContext"in n?"probablySupportsContext":"supportsContext";return t in n?n[t]("webgl")||n[t]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("srcdoc","srcdoc"in r("iframe"));var S=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];b._prefixes=S;var _="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;Modernizr.addTest("supports",_||k);var P;!function(){var e={}.hasOwnProperty;P=i(e,"undefined")||i(e.call,"undefined")?function(e,n){return n in e&&i(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),b._l={},b.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=l}),Modernizr.addAsyncTest(function(){var t,o,i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},s=function(e,n){var t=!!e;if(t&&(t=new Boolean(t),t.blocked="blocked"===e),l("flash",function(){return t}),n&&p.contains(n)){for(;n.parentNode!==p;)n=n.parentNode;p.removeChild(n)}};try{o="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(c){}if(t=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||o),t||C)s(!1);else{var f,d,u=r("embed"),p=a();if(u.type="application/x-shockwave-flash",p.appendChild(u),T.appendChild(p),!("Pan"in u||o))return s("blocked",u),void i(p);f=function(){return T.contains(p)?(T.contains(u)?(d=u.style.cssText,""!==d?s("blocked",u):s(!0,u)):s("blocked"),void i(p)):(p=n.body||p,u=r("embed"),u.type="application/x-shockwave-flash",p.appendChild(u),setTimeout(f,1e3))},setTimeout(f,10)}});var E=b.testStyles=f;Modernizr.addTest("hiddenscroll",function(){return E("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(o,function(e){t=9===e.offsetTop})}return t});var N="Moz O ms Webkit",z=b._config.usePrefixes?N.split(" "):[];b._cssomPrefixes=z;var j=function(n){var o,r=S.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),o=n.replace(/-/g,"_").toUpperCase()+"_RULE",o in i)return"@"+n;for(var s=0;r>s;s++){var a=S[s],l=a.toUpperCase()+"_"+o;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};b.atRule=j;var A=b._config.usePrefixes?N.toLowerCase().split(" "):[];b._domPrefixes=A;var L={elem:r("modernizr")};Modernizr._q.push(function(){delete L.elem});var O={style:L.elem.style};Modernizr._q.unshift(function(){delete O.style}),b.testAllProps=g;var R=b.prefixed=function(e,n,t){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=c(e)),n?g(e,n,t):g(e,"pfx"))};Modernizr.addTest("fullscreen",!(!R("exitFullscreen",n,!1)&&!R("cancelFullScreen",n,!1))),b.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in T.style)){var t;Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",E(t,function(n){e=9===n.offsetLeft&&5===n.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("preserve3d",y("transformStyle","preserve-3d")),s(),o(x),delete b.addTest,delete b.addAsyncTest;for(var $=0;$<Modernizr._q.length;$++)Modernizr._q[$]();e.Modernizr=Modernizr}(window,document);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['events'] = function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<li>\n  <hr>\n  <div class='list_content'>\n    <div class='list_text'>\n      <div class='date'>");
      $o.push("        " + $e($c(this.start_date)));
      if (this.end_date !== this.start_date) {
        $o.push("        " + $e($c(" - " + this.end_date)));
      }
      $o.push("      </div>\n      <h3 class='list_title'>\n        <a href='/events/" + ($c(this.item.id)) + "' target='_self'>");
      $o.push("          " + $e($c(this.item.title)));
      $o.push("        </a>\n      </h3>\n      <div class='list_description'>");
      if (!(this.location === void 0)) {
        $o.push("        <div class='location'>\n          Location: " + this.location + "\n        </div>");
      }
      $o.push("      </div>\n      <a class='list_link' href='/events/" + ($c(this.item.id)) + "' target='_self'>›› view details</a>\n    </div>\n  </div>\n</li>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['images_of_change'] = function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<!-- only visible in chromeless toggle view, inline style for fouc -->\n<div class='chromeless_toggle mini_view_container' style='display: none;'>\n  <a class='mini_view'>\n    <div class='mini_before'>\n      <div class='image_thumb'>\n        <img src='" + ($c(this.image_mobile_1_url)) + "'>\n      </div>\n    </div>\n    <div class='inactive mini_after'>\n      <div class='image_thumb'>\n        <img src='" + ($c(this.image_mobile_2_url)) + "'>\n      </div>\n    </div>\n  </a>\n</div>\n<div class='image_height_wrapper'>\n  <div class='image_tools zoom'></div>\n  <div class='curtain_view image_container'>\n    <div class='loading'></div>\n    <div class='before_and_after twentytwenty-container'>\n      <img id='before_image' src='" + ($c(this.image_mobile_1_url)) + "'>\n      <img id='after_image' src='" + ($c(this.image_mobile_2_url)) + "'>\n    </div>\n  </div>\n</div>\n<div id='info_panel'>\n  <div class='grid_layout'>\n    <div class='left_section'>\n      <a class='info_toggle'>\n        <div class='title_container'>\n          <h1 class='image_title'>");
      $o.push("            " + $e($c(this.item.image_title)));
      $o.push("          </h1>\n          <div class='caret'></div>\n        </div>\n        <h3 class='date'>");
      $o.push("          " + $e($c(this.item.image_date1 + " - " + this.item.image_date2)));
      $o.push("        </h3>\n      </a>\n      <div class='full_info'>\n        <p>");
      $o.push("          " + $c(this.item.image_caption));
      $o.push("        </p>\n        <div class='credits'>\n          <p>");
      $o.push("            " + $c(this.item.image_credit));
      $o.push("          </p>\n        </div>\n        <!-- /- if @item.image_download_file_name or @item.image_download_full_file_name -->\n        <p>\n          <strong>Download images:</strong>\n          <span class='download_links'>\n            <a href='" + ($c(this.image_mobile_1_url)) + "' target='_blank'>\n              image 1\n            </a>\n            •\n            <a href='" + ($c(this.image_mobile_2_url)) + "' target='_blank'>\n              image 2\n            </a>\n          </span>\n        </p>\n        <div class='addthis_toolbox addthis_default_style addthis_32x32_style div'>\n          <a class='addthis_button_facebook'></a>\n          <a class='addthis_button_twitter'></a>\n          <a class='addthis_button_compact'></a>\n        </div>\n      </div>\n    </div>\n    <div class='right_section'>\n      <ul class='view_options'>\n        <li class='active ui_button' id='curtain_view'>\n          <div class='icon'>\n            Curtain\n          </div>\n        </li>\n        <li class='ui_button' id='toggle_view'>\n          <div class='icon'>\n            Toggle\n          </div>\n        </li>\n        <li class='ui_button' id='two_up_view'>\n          <div class='icon'>\n            2-Up\n          </div>\n        </li>\n        <li class='ui_button' id='fullscreen'>\n          <div class='icon'></div>\n        </li>\n      </ul>\n      <div class='mini_view_container'>\n        <!-- %a.minimize_btn -->\n        <a class='mini_view'>\n          <div class='mini_before'>\n            <div class='image_thumb'>\n              <img src='" + ($c(this.image_mobile_1_url)) + "'>\n            </div>\n          </div>\n          <div class='inactive mini_after'>\n            <div class='image_thumb'>\n              <img src='" + ($c(this.image_mobile_2_url)) + "'>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class='minimap_container'>\n        <div class='minimap' id='minimap_canvas'></div>\n      </div>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['ioc_grid_item'] = function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<li class='" + (['slide', "" + ($c(this.item_categories))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "' style='display: " + ($c(this.display)) + "'>\n  <a href='javascript:void(0)' onclick='main.changeIoCById(" + ($c(this.id)) + ");'>\n    <div class='image_and_description_container'>\n      <div class='img'>\n        <img class='thumb' src='" + ($c(this.thumbnail)) + "'>\n      </div>\n      <div class='list_text_content'>\n        <div class='content_title'>");
      $o.push("          " + $e($c(this.title)));
      $o.push("        </div>\n        <div class='subtitle'>");
      $o.push("          " + $e($c(this.subtitle)));
      $o.push("        </div>\n      </div>\n    </div>\n  </a>\n</li>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "").replace(/[\s\n]*\u0091/mg, '').replace(/\u0092[\s\n]*/mg, '');
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['map_marker'] = function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='marker'>\n  <a href='javascript:void(0)' onclick='main.changeIoCById(" + ($c(this.id)) + ");'>\n    <img src='" + ($c(this.thumbnail)) + "'>\n    <div class='title'>");
      $o.push("      " + $e($c(this.title)));
      $o.push("    </div>\n    <div class='subtitle'>");
      $o.push("      " + $e($c(this.subtitle)));
      $o.push("    </div>\n  </a>\n</div>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['missions'] = function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<li class='slide'>\n  <a href='" + ($c(this.url)) + "' target='" + ($c(this.target)) + "'>\n    <div class='image_and_description_container'>\n      <div class='rollover_description'>\n        <div class='rollover_description_inner'>");
      $o.push("          " + $e($c(this.long_desc_rollover)));
      $o.push("        </div>\n        <div class='overlay_arrow'>\n          <img src='/assets/overlay-arrow.png' alt='More'>\n        </div>\n      </div>\n      <div class='img'>\n        <img class='thumb' src='" + ($c(this.list_image_url)) + "' alt='" + ($c(this.item.title)) + "'>\n      </div>\n      <div class='bottom_gradient'>\n        <div>\n          <h3>");
      $o.push("            " + $e($c(this.item.title)));
      $o.push("          </h3>\n        </div>\n      </div>\n      <div class='list_text_content'>\n        <div class='content_title'>");
      $o.push("          " + $e($c(this.item.title)));
      $o.push("        </div>\n        <div class='article_teaser_body'>");
      $o.push("          " + $c(this.long_desc));
      $o.push("        </div>\n      </div>\n    </div>\n  </a>\n</li>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['news'] = function(context) {
    return (function() {
      var $c, $e, $o, alt;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      alt = this.item.main_image_alt.replace(/<(?:.|\n)*?>/gm, '');
      $o.push("<li class='slide'>\n  <a href='" + ($c(this.url)) + "' target='" + ($c(this.target)) + "'>\n    <div class='image_and_description_container'>\n      <div class='rollover_description'>\n        <div class='rollover_description_inner'>");
      $o.push("          " + $e($c(this.long_desc_rollover)));
      $o.push("        </div>\n        <div class='overlay_arrow'>\n          <img src='/assets/overlay-arrow.png' alt='More'>\n        </div>\n      </div>\n      <div class='img'>\n        <img class='thumb' src='" + ($c(this.list_image_url)) + "' alt='" + ($c(alt)) + "'>\n      </div>\n      <div class='bottom_gradient'>\n        <div>\n          <h3>");
      $o.push("            " + $e($c(this.item.title)));
      $o.push("          </h3>\n        </div>\n      </div>\n      <div class='list_text_content'>\n        <div class='list_date'>");
      $o.push("          " + $e($c(this.publish_date)));
      $o.push("        </div>\n        <div class='content_title'>");
      $o.push("          " + $e($c(this.item.title)));
      $o.push("        </div>\n        <div class='article_teaser_body'>");
      $o.push("          " + $e($c(this.long_desc)));
      $o.push("        </div>\n      </div>\n    </div>\n  </a>\n</li>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['resources'] = function(context) {
    return (function() {
      var $c, $e, $o, alt;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      alt = this.item.alt_text.replace(/<(?:.|\n)*?>/gm, '');
      $o.push("<li class='slide'>\n  <a class='" + ($c(this.html_options["class"])) + "' href='" + ($c(this.href)) + "' data-fancybox-group='" + ($c(this.html_options["fancybox-group"])) + "' data-fancybox-type='" + ($c(this.html_options["fancybox-type"])) + "' data-fancybox-href='" + ($c(this.html_options["fancybox-href"])) + "' data-title='" + ($c(this.html_options["title"])) + "' data-description='" + ($c(this.html_options["description"])) + "' data-credit='" + ($c(this.html_options["credit"])) + "' data-link='" + ($c(this.html_options["link"])) + "'>\n    <div class='image_and_description_container'>\n      <div class='rollover_description'>\n        <div class='rollover_description_inner'>");
      $o.push("          " + $c(this.short_desc));
      $o.push("        </div>\n        <div class='overlay_arrow'>\n          <img src='/assets/overlay-arrow.png' alt='More'>\n        </div>\n      </div>\n      <div class='img'>\n        <img class='thumb' src='" + ($c(this.list_image_src)) + "' alt='" + ($c(alt)) + "'>\n      </div>\n      <div class='bottom_gradient'>\n        <div>\n          <h3>");
      $o.push("            " + $c(this.item.title));
      $o.push("          </h3>\n        </div>\n      </div>\n    </div>\n    <div class='list_text'>\n      <div class='content_title'>");
      $o.push("        " + $e($c(this.item.title)));
      $o.push("      </div>\n      <div class='article_teaser_body'>");
      $o.push("        " + $c(this.short_desc));
      $o.push("      </div>\n    </div>\n  </a>\n</li>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  var slice = [].slice;

  window.HAML = (function() {
    function HAML() {}

    HAML.escape = function(text) {
      return ("" + text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#47;");
    };

    HAML.cleanValue = function(text) {
      switch (text) {
        case null:
        case void 0:
          return '';
        case true:
        case false:
          return '\u0093' + text;
        default:
          return text;
      }
    };

    HAML.extend = function() {
      var i, key, len, obj, source, sources, val;
      obj = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      for (i = 0, len = sources.length; i < len; i++) {
        source = sources[i];
        for (key in source) {
          val = source[key];
          obj[key] = val;
        }
      }
      return obj;
    };

    HAML.globals = function() {
      return {};
    };

    HAML.context = function(locals) {
      return this.extend({}, HAML.globals(), locals);
    };

    HAML.preserve = function(text) {
      return text.replace(/\n/g, '&#x000A;');
    };

    HAML.findAndPreserve = function(text) {
      var tags;
      tags = 'textarea,pre'.split(',').join('|');
      return text = text.replace(/\r/g, '').replace(RegExp("<(" + tags + ")>([\\s\\S]*?)<\\/\\1>", "g"), function(str, tag, content) {
        return "<" + tag + ">" + (window.HAML.preserve(content)) + "</" + tag + ">";
      });
    };

    HAML.surround = function(start, end, fn) {
      var ref;
      return start + ((ref = fn.call(this)) != null ? ref.replace(/^\s+|\s+$/g, '') : void 0) + end;
    };

    HAML.succeed = function(end, fn) {
      var ref;
      return ((ref = fn.call(this)) != null ? ref.replace(/\s+$/g, '') : void 0) + end;
    };

    HAML.precede = function(start, fn) {
      var ref;
      return start + ((ref = fn.call(this)) != null ? ref.replace(/^\s+/g, '') : void 0);
    };

    HAML.reference = function(object, prefix) {
      var id, name, ref, result;
      name = prefix ? prefix + '_' : '';
      if (typeof object.hamlObjectRef === 'function') {
        name += object.hamlObjectRef();
      } else {
        name += (((ref = object.constructor) != null ? ref.name : void 0) || 'object').replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
      }
      id = typeof object.to_key === 'function' ? object.to_key() : typeof object.id === 'function' ? object.id() : object.id ? object.id : object;
      result = "class='" + name + "'";
      if (id) {
        return result += " id='" + name + "_" + id + "'";
      }
    };

    return HAML;

  })();

}).call(this);
(function(){var h=[].slice;String.prototype.autoLink=function(){var b,f,d,a,e,g;a=1<=arguments.length?h.call(arguments,0):[];e=/(^|[\s\n]|<br\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;if(!(0<a.length))return this.replace(e,"$1<a href='$2'>$2</a>");d=a[0];f=function(){var c;c=[];for(b in d)g=d[b],"callback"!==b&&c.push(" "+b+"='"+g+"'");return c}().join("");return this.replace(e,function(c,b,a){c=("function"===typeof d.callback?d.callback(a):void 0)||"<a href='"+
a+"'"+f+">"+a+"</a>";return""+b+c})}}).call(this);
(function() {


}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/carousel'] = function(context) {
    return (function() {
      var $c, $e, $o, i, item, len, ref;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<section class='giv_carousel'>\n  <div class='slides'>");
      ref = this.giv_data.interactive_carousel_items;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        $o.push("    <div class='slide'>\n      <div class='image_container' data-overlay='overlay_" + ($c(item.id)) + "'>\n        <img class='img-lazy' src='/assets/loading_320x240.png' data-lazy='" + ($c(item.image_left_url)) + "' alt='" + ($c(item.image_left_title)) + "'>\n        <div class='image_title'>");
        $o.push("          " + $e($c(item.image_left_title)));
        $o.push("        </div>");
        if (item.image_right_url !== giv.missing) {
          $o.push("        <img class='img-lazy' src='/assets/loading_320x240.png' data-lazy='" + ($c(item.image_right_url)) + "' alt='" + ($c(item.image_right_title)) + "'>\n        <div class='image_title'>");
          $o.push("          " + $e($c(item.image_right_title)));
          $o.push("        </div>");
        }
        $o.push("      </div>\n      <div class='slide_description' style='display: none;'>\n        <h1 class='topic_title'>");
        $o.push("          " + $e($c(this.giv_data.title + ", " + item.title)));
        $o.push("        </h1>\n        <p>");
        $o.push("          " + $e($c(item.description)));
        $o.push("        </p>\n      </div>\n    </div>\n    <div class='overlay_container' id='overlay_" + item.id + "' style='display: none;'>\n      <div class='close_btn'></div>\n      <div class='panzoom_container'>\n        <div class='images'>\n          <div class='image left_image'>\n            <div class='image_title'>");
        $o.push("              " + $e($c(item.image_left_title)));
        $o.push("            </div>\n            <img class='img-lazy' src='/assets/loading_320x240.png' data-lazy='" + ($c(item.image_left_url)) + "' alt='" + ($c(item.image_left_title)) + "'>\n          </div>");
        if (item.image_right_url !== giv.missing) {
          $o.push("          <div class='image image_right'>\n            <div class='image_title'>");
          $o.push("              " + $e($c(item.image_right_title)));
          $o.push("            </div>\n            <img class='img-lazy' src='/assets/loading_320x240.png' data-lazy='" + ($c(item.image_right_url)) + "' alt='" + ($c(item.image_right_title)) + "'>\n          </div>");
        }
        $o.push("        </div>\n      </div>\n    </div>");
      }
      $o.push("  </div>");
      $o.push("  " + $c(window.JST['global_ice_viewer/topic_info'](this)));
      $o.push("</section>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/image'] = function(context) {
    return (function() {
      var $c, $o;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<section class='giv_image'>\n  <img src='" + ($c(this.giv_data.image_url)) + "' alt=''>");
      $o.push("  " + $c(window.JST['global_ice_viewer/topic_info'](this)));
      $o.push("</section>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/intro'] = function(context) {
    return (function() {
      var $c, $e, $o;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='intro_container'>\n  <div class='title'>");
      $o.push("    " + $e($c(this.giv_data.title)));
      $o.push("  </div>\n  <h1 class='subtitle'>");
      $o.push("    " + $e($c(this.giv_data.subtitle)));
      $o.push("  </h1>\n  <div class='description'>");
      $o.push("    " + $c(this.giv_data.description));
      $o.push("  </div>\n  <header>\n    <h3>SELECT A TOPIC</h3>\n  </header>\n  <nav class='interface_nav'></nav>\n</div>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/nav'] = function(context) {
    return (function() {
      var $c, $e, $o, i, id, len, title, topic, topics;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      topics = this.giv_data.topics;
      $o.push("<ul>");
      for (i = 0, len = topics.length; i < len; i++) {
        topic = topics[i];
        title = topic.title.toLowerCase();
        id = topic.id;
        $o.push("  <li>\n    <a class='" + (['topic_link', "topic_" + ($c(id))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "' href='#' data-topic='" + ($c(id)) + "'>\n      <div class='img_text_container'>\n        <div class='img'></div>\n        <div class='text_container'>\n          <div class='nav_item_title'>");
        $o.push("            " + $e($c(topic.title)));
        $o.push("          </div>\n        </div>\n      </div>\n    </a>\n  </li>");
      }
      $o.push("</ul>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/sources'] = function(context) {
    return (function() {
      var $c, $o;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<div class='sources'>");
      $o.push("  " + $c(this.giv_data));
      $o.push("</div>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/time_series'] = function(context) {
    return (function() {
      var $c, $o;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<section class='giv_time_series'>\n  <div id='time_series_container'></div>");
      $o.push("  " + $c(window.JST['global_ice_viewer/topic_info'](this)));
      $o.push("</section>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/time_series_inner'] = function(context) {
    return (function() {
      var $c, $e, $o, current, date, ed, end_year, i, j, months, num_images, ref, sd, start_year, ts_image;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      sd = new Date(this.time_series.time_series_images[0].date);
      ed = new Date(this.time_series.time_series_images[this.time_series.time_series_images.length - 1].date);
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      start_year = sd.getFullYear();
      end_year = ed.getFullYear();
      if (this.time_series) {
        if (this.time_series.time_series_images && this.time_series.time_series_images.length > 0) {
          $o.push("<div class='spinner'>\n  <img src='/assets/loader-gif-300-spinner-white.gif'>\n</div>\n<section class='chart_container time_series' id='time_series_" + this.time_series.id + "'>\n  <header class='clearfix'>\n    <h2 class='chart_article_title'>");
          $o.push("      " + $e($c(this.time_series.title)));
          $o.push("    </h2>\n    <div class='article_subtitle'>\n      <div>");
          $o.push("        " + $c(this.time_series.credit));
          $o.push("      </div>\n    </div>\n    <div class='readout'>\n      <div class='title'>\n        <div class='monthValue'>");
          $o.push("          " + $e($c(months[sd.getMonth()] + ' ' + sd.getDate() + ', ' + sd.getFullYear())));
          $o.push("        </div>\n      </div>\n      <div class='date_of_change'>\n        <div class='change_number lastValue' style='display: none;'></div>\n      </div>\n      <div class='hint init'>\n        Drag\n      </div>\n    </div>\n  </header>\n  <article class='images'>");
          num_images = this.time_series.time_series_images.length;
          for (i = j = 0, ref = num_images; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            ts_image = this.time_series.time_series_images[i];
            date = new Date(ts_image.date);
            if (i === 0) {
              current = "current";
            } else {
              current = "";
            }
            $o.push("    <div class='" + (['image', "" + ($c(current))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "' id='time_series_" + this.time_series.id + "_image_" + i + "' data-date='" + ($c(ts_image.date)) + "'>\n      <img data-src='/system/time_series_images/" + ($c(ts_image.id)) + "_" + ($c(ts_image.image_file_name)) + "' src='/assets/interactives/shim_722x405.gif' alt='" + ($c(this.time_series.title)) + ", image #" + ($c(i)) + "'>\n    </div>\n    <div class='loading_text'>loading time series images...</div>");
          }
          $o.push("  </article>\n  <div class='start_year' style='display:none;'>");
          $o.push("    " + $e($c(start_year)));
          $o.push("  </div>\n  <div class='end_year' style='display:none;'>");
          $o.push("    " + $e($c(end_year)));
          $o.push("  </div>\n  <footer>\n    <div class='controllers_container'>\n      <div class='play_pause'>\n        <div class='fi-play play_button'></div>\n        <div class='fi-pause pause_button'></div>\n        <div class='fi-refresh reset_button'></div>\n      </div>\n      <div class='beginning_date'>");
          $o.push("        " + $e($c(start_year)));
          $o.push("      </div>\n      <input class='trackbar_controller' aria-disabled='false' style='display: none;' type='text' value='" + ($c(0)) + "'>\n      <div class='ending_date'>");
          $o.push("        " + $e($c(end_year)));
          $o.push("      </div>\n    </div>\n  </footer>\n</section>");
        } else {
          $o.push("<p class='error'>\n  No images associated with that time series.\n</p>");
        }
      } else {
        $o.push("<p class='error'>\n  Unknown time series\n</p>");
      }
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "").replace(/[\s\n]*\u0091/mg, '').replace(/\u0092[\s\n]*/mg, '');
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/topic'] = function(context) {
    return (function() {
      var $c, $e, $o, button_class, i, interactive, j, len, len1, ref, ref1, topic;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      topic = this.giv_data.title.toLowerCase();
      $o.push("<div class='topic_container' data-topic='" + ($c(this.giv_data.id)) + "'>");
      if (this.default_interactive.interactive_type === 'image') {
        $o.push("  <div class='ice_viewer_map'>\n    <img class='map_image' src='" + ($c(this.default_interactive.image_url)) + "'>");
        ref = this.giv_data.interactive_items;
        for (i = 0, len = ref.length; i < len; i++) {
          interactive = ref[i];
          if (interactive.map_top && interactive.map_left) {
            $o.push("    <a class='detail_link hotspot' href='javascript:void(0)' style='top: " + ($c(interactive.map_top)) + "%; left: " + ($c(interactive.map_left)) + "%;' data-popover='hotspot-" + ($c(interactive.id)) + "' data-topic='" + ($c(this.giv_data.id)) + "' data-subtopic='" + ($c(interactive.id)) + "'>\n      <div class='hotspot_inner'>\n        <div></div>\n      </div>\n      <![if gt IE 9]>\n      <div class=\"pulsate\"></div>\n      <![endif]>\n    </a>\n    <div class='popover' id='hotspot-" + interactive.id + "'>\n      <img src='" + ($c(interactive.map_thumb_url)) + "' style='width: 100%'>\n      <div class='location_info'>\n        <h2>");
            $o.push("          " + $e($c(interactive.title)));
            $o.push("        </h2>\n      </div>\n    </div>");
          }
        }
        $o.push("  </div>");
      } else if (this.default_interactive.interactive_type === 'video') {
        $o.push("  <div class='giv_video'>\n    <div class='video_wrapper'>\n      <div class='spinner'>\n        <img src='/assets/loader-gif-300-spinner-white.gif'>\n      </div>\n      <div id='video_" + this.default_interactive.id + "'></div>\n    </div>\n  </div>");
      }
      $o.push("  <footer class='article_footer'>");
      ref1 = this.giv_data.interactive_items;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        interactive = ref1[j];
        if (interactive["default"] === false && !(interactive.map_top || interactive.map_left)) {
          if (interactive.interactive_type === "video") {
            button_class = "video_button button";
          } else {
            button_class = "button";
          }
          $o.push("  <a class='" + (['detail_link', "" + ($c(button_class))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "' href='javascript:void(0)' data-topic='" + ($c(this.giv_data.id)) + "' data-subtopic='" + ($c(interactive.id)) + "'>\n  <div class='" + (['icon', "" + ($c(interactive.interactive_type))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "'></div>\n  <div class='button_text'>");
          $o.push("  " + $e($c(interactive.title)));
          $o.push("  </div>\n  </a>");
        }
      }
      $o.push("  </footer>\n  <header class='article_header'>");
      if (this.giv_data.vital_sign) {
        $o.push("    <div class='rate_of_change'>\n      <div class='unit_container'>\n        <div class='" + (['value', "" + ($c(parseFloat(this.giv_data.vital_sign.value) > 0 ? "up" : void 0))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "'>\n          <svg id='Layer_1' height='100%' space='preserve' version='1.1' viewbox='0 0 641.3 742' x='0px' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' y='0px'>\n            <line stroke-miterlimit='10' stroke-width='44' x1='321' x2='321' y1='0' y2='698'></line>\n            <line stroke-miterlimit='10' stroke-width='44' x1='308' x2='627' y1='725' y2='450'></line>\n            <line stroke-miterlimit='10' stroke-width='44' x1='334' x2='15' y1='727' y2='452'></line>\n          </svg>\n        </div>\n        <h2 class='unit_value'>");
        $o.push("          " + $e($c(Math.abs(parseFloat(this.giv_data.vital_sign.value)))));
        $o.push("        </h2>\n        <div class='unit_type'>");
        $o.push("          " + $e($c(this.giv_data.vital_sign.units)));
        $o.push("        </div>\n        <div class='unit_description_container'>\n          <a class='unit_description' href='javascript:void(0)'>");
        $o.push("            " + $c(this.giv_data.vital_sign.giv_description));
        $o.push("          </a>\n        </div>\n      </div>\n    </div>");
      }
      $o.push("    <div class='about_link'>\n      <a class='about' href='javascript:void(0)' data-topic='" + ($c(this.giv_data.id)) + "' data-aboutid='" + ($c(this.giv_data.about_id)) + "'>\n        <span>");
      $o.push("          " + $e($c(this.giv_data.about_link_text)));
      $o.push("        </span>\n      </a>\n    </div>\n  </header>\n</div>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "").replace(/[\s\n]*\u0091/mg, '').replace(/\u0092[\s\n]*/mg, '');
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/topic_info'] = function(context) {
    return (function() {
      var $c, $e, $o, info_class;
      $e = window.HAML.escape;
      $c = window.HAML.cleanValue;
      $o = [];
      if (this.giv_data.map_top && this.giv_data.interactive_type !== "video") {
        info_class = "map_layout";
      } else {
        info_class = "full_width";
      }
      $o.push("<div class='" + (['topic_info', "" + ($c(info_class))].sort().join(' ').replace(/^\s+|\s+$/g, '')) + "'>\n  <div class='grid_layout'>\n    <div class='primary_column'>\n      <div class='description'>\n        <h1 class='topic_title'>");
      $o.push("          " + $e($c(this.giv_data.title)));
      $o.push("        </h1>");
      $o.push("        " + $c(this.giv_data.description));
      $o.push("      </div>\n      <a class='topic_link' href='javascript:void(0)' data-topic='" + ($c(this.topic)) + "'>\n        ‹ BACK TO MAP \n      </a>\n    </div>");
      if (this.giv_data.minimap_image_url !== giv.missing) {
        $o.push("    <div class='secondary_column'>\n      <a class='minimap' href='javascript:void(0)' data-topic='" + ($c(this.topic)) + "'>\n        <img src='" + ($c(this.giv_data.minimap_image_url)) + "'>");
        if (this.giv_data.map_top) {
          $o.push("        <div class='location_dot' style='top: " + ($c(this.giv_data.map_top)) + "%; left: " + ($c(this.giv_data.map_left)) + "%;'></div>");
        }
        $o.push("      </a>\n    </div>");
      }
      $o.push("  </div>\n  <footer>\n    <a class='topic_link' href='javascript:void(0)' data-topic='" + ($c(this.topic)) + "'>\n      ‹ BACK TO MAP  \n    </a>\n  </footer>\n</div>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  if (window.JST == null) {
    window.JST = {};
  }

  window.JST['global_ice_viewer/video'] = function(context) {
    return (function() {
      var $c, $o;
      $c = window.HAML.cleanValue;
      $o = [];
      $o.push("<section class='giv_video'>\n  <div class='video_wrapper'>\n    <div class='spinner'>\n      <img src='/assets/loader-gif-300-spinner-white.gif'>\n    </div>\n    <div class='video_container'>\n      <div id='video_" + this.giv_data.id + "'></div>\n    </div>\n  </div>");
      $o.push("  " + $c(window.JST['global_ice_viewer/topic_info'](this)));
      $o.push("</section>");
      return $o.join("\n").replace(/\s([\w-]+)='true'/mg, ' $1').replace(/\s([\w-]+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(window.HAML.context(context));
  };

}).call(this);
/* ---------------------- NIGHT SKY NETWORK - mb_utils.js  ------------------------------ */

/* ----- mb_utils ----- */


var mb_utils = {

  init: function() { 
      this._extendJquery();
      this._extendJavascript();
    },
    
  _extendJquery: function () {
    // exists function returns a boolean ... use example: $('body').exists();
    jQuery.fn.exists = function () { return this.length>0; };
  },

  _extendJavascript: function () {
    if (!String.prototype.trim) {
      String.prototype.trim=function() { return this.replace(/^\s+|\s+$/g, ''); };
    }
  },
  /* 
   * SlideToggle is jquery's expander. 
   * .. allows a click to cause an element to expand
   * .. this allows an extra callback function and speed vars
   */
  addSlideToggleListener: function( toClick, toSlide, andDoFn, speed ) {
    toClick.click(function(){
      andDoFn();
      toSlide.slideToggle(speed);
    });
  },
  
  // Handle touch vs. click events
  touchclick: function (sel, fnc) {
    $(sel).on('touchstart click', function(event) {
      event.stopPropagation();
      event.preventDefault();
      if(event.handled !== true) {
        fnc($(this), event);
        event.handled = true;
      } else {
        return false;
      }
    });
  },

  /*
   * Positioning of Elements
   * BERGEN: Currently this is only being used by the nav, why not put this in mb_nav?
   */

  /* Distance from top of document */
  distanceFromTop: function ( element ) { 
    return $(element).offset().top;
  },
  
  /* Distance from top of closest positioned parent */
  distanceFromTopOfContainer: function ( element ) { 
    return $(element).position().top;
  },

  /*
   * Query String retrieval 
   */
  getParam: function(p){
    var queryParams = mb_utils._getQueryParams();
    return queryParams[p];
  },

  _getQueryParams: function() {
    var qs = document.location.search;
    qs = qs.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1]).toString()] = decodeURIComponent(tokens[2]);
    }

    return params;
  },
  
	//allows for a condensed block of text to expand and contract

	/*
	HTML structured
	 .description.condensed
	 	.short
	 		= condensed_text
	 			- if item.short_description.length > truncate_length
	 				%a.more_or_less{href: "#"} more
		.long
	 		= item.short_description
			%a.more_or_less{href: "#"} less
	*/
	//options: speed (int)
	toggleText: function(e,a,options){
		e.preventDefault();
		var $self = $(a);
		var $description_div = $self.parents('.description');
		var $long = $description_div.find('.long');
		var $short = $description_div.find('.short');
		var options = options === undefined ? {} : options;
		var speed = options.speed ? options.speed : 400;

		if($description_div.hasClass("condensed")){
			console.log("expand text");
			var min_h = $short.height();
			$short.hide();
			$long.css("min-height", min_h);
			$long.slideDown(speed)

		} else {
			console.log("condense text");
			$long.slideUp(speed, function(){
				$short.show();
			})
		}
		$description_div.toggleClass("condensed");
	},
	
	initExpandableElement: function () {
	  
	  /*  
	  *   To use:
	  *     The button:
	  *     <a href="javascript:void(0)" class="expandable_element_btn" data-expand-index="0">+ more</a>
	  *
	  *   The target:
	  *     <ul class="expandable_element" data-expand-index="0"> (Can be any type of html element)
	  *   
	  *   • Note that data-expand-index must be the same on both the button and the target element.
	  *   • This method allows for any number of independent expandable elements on a page.
	  *   • The button/link can have any text, but will only toggle if '+ more' or '- less' are used
	  *   
	  *   -JM
	  */  
	  
	  $('.expandable_element_link').click(function(){
	    var expandIndex = $(this).attr("data-expand-index");
	    var $el = $('.expandable_element[data-expand-index="' + expandIndex + '"]');
      var expandText = $(this).attr("data-expand-text");
      var contractText = $(this).attr("data-contract-text");
      if (expandText && contractText){
        var txt = $el.is(':visible') ? expandText : contractText;
        $(this).text(txt);
      } else {
  	    var doToggleText = $(this).text().indexOf('+ more') >= 0 || $(this).text().indexOf('- less') >= 0
  	    if (doToggleText) { 
    	    var txt = $el.is(':visible') ? '+ more' : '- less';
    	    $(this).text(txt);
  	    }
      }
	    $el.slideToggle();
	  })
	},

	writeToFancybox: function (html_content)
	{
		//console.log('attempting to write to fancybox: ' + html_content);
    $.fancybox({
        type: "html", // not an image but html
        content: html_content, // overrides fancybox content
        openEffect  : 'none',
        closeEffect : 'none',
        margin: 0,
        padding: 0
    });
	},


	simpleFormat: function(str,wrap) {
		str = str.replace(/\r\n?/, "\n");
		str = $.trim(str);
		if (str.length > 0) {
			str = str.replace(/\n\n+/g, '</p><p>');
			str = str.replace(/\n/g, '<br />');
			if(wrap){
				str = '<p>' + str + '</p>';
			}
		}
		return str;
	},
	
	getIEVersion: function () {
      var agent = navigator.userAgent;
      var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
      var matches = agent.match(reg);
      if (matches != null) {
          return { major: matches[1], minor: matches[2] };
      }
      return { major: "-1", minor: "-1" };
  },

  // Using JS, match citation <sup> to footnote <li>
  // usage: <sup>1</sup> will auto-link to <ol class="footnotes"><li>First footnote</li></ol>
  
  // I had to refactor this because it was breaking old footnotes by wrapping multiple <a> tags and 
  // then also making all footnotes links, thereby obscuring the real links. 
  // basically this is now wrapping divs with id's rather than <a> with name -JM
  
  linkCitationsToFootnotes: function() {
    var footnotes = $('.wysiwyg_content ol.footnotes li');
    if (footnotes.exists()) {    
      var citations = $('.wysiwyg_content sup').not('.math');  // exclude <sup> tags that have "math" class

      $.each(citations, function() {
        // if there is a footnote in the DOM with the same index 
        // add an <a href> and <a name> to link them up
        // (i.e. the third footnote would match <sup>3</sup>)
        var citation_num = parseInt($(this).text());
        var footnoteElement = footnotes.get(citation_num - 1);
        var footnote = null;
        if (footnoteElement) footnote = $(footnoteElement);
        
        if (citation_num && footnote) {
          // citation: change <sup>1</sup> to <a class="citation" href="#footnote_1"></a>
          $(this).wrap('<a class="citation" href="#footnote_' + citation_num + '"></a>');
          
          // footnote: change <li>Ibid.</li> to <li class="footnote" id="footnote_3">Ibid.</li>
          if (footnote.hasClass("footnote") == false) {
            footnote.addClass("footnote");
            footnote.wrapInner(function() {
              // This used to add an <a> tag with name value, but that was causing bugs,
              // so changed to a div with an id -JM
              return "<div id='footnote_" + citation_num + "'></div>";
            });
          }
        }    
      });
    }  

		$('a.citation').click(function(e){
			console.log('citation click');
      e.preventDefault();
			var href = $(this).attr("href");
      console.log('href: ' + href);
			var name = href.replace("#", "");
			//var $anchor = $('a[name='+ name +']');
			var $anchor = $('div[id='+ name +']');
			mb_utils.slideToElement($anchor, 105);
		});
	},


  // Brought from previous climate version to handle quizzes - bm
  launch_sized_popup_window: function (desktopURL, w, h, layout, scrollbars ) 
  {
    var layout_param = "";
    var scrollbars_param = "0";
    if (layout != undefined) {
      layout_param = "?layout=" + layout;
    } 
    if (scrollbars != undefined) {
      scrollbars_param = scrollbars;
    }
    //console.log('utils.launch_sized_popup_window.scrollbars_param: ' + scrollbars_param );
    var desktop = window.open(desktopURL + layout_param, "_blank","toolbar=0, titlebar=0, menubar=0, scrollbars=" + scrollbars_param + ", resizable=yes, width=" + w + ", height=" + h);
    self.name = "main";
  },

	// Animates to an element by ID (with offset to allow flexible positioning)
	// RK - changed to allow pass in either id, or jquery selector
	slideToElement: function(target, offset) {
		console.log('slideToElement.offset: ' + offset);
		if(typeof(offset)==='undefined') offset = 0;
		var $target;
		if(typeof(target) === 'string'){
			$target = $(target);
		} else {
			$target = target;
		}
		$("html, body").animate({ scrollTop: $target.offset().top - offset}, 800);
	},

	// Just handles the situation where a desktop browser states that it is a touch device **cough** firefox **cough**
	mouseCheck: function(){
		if (!isMobile.any()){
			console.log('mouseCheck');
			if($('html.touchevents').length > 0){
				//console.log("html has touch class, but not mobile. Check if mouse cookie set");
				var has_mouse = mb_utils.readCookie("has_mouse");
				if(has_mouse == 'yes'){
					$('html').removeClass("touchevents").addClass("no-touchevents");
				} else {
					//console.log("mouse cookie not set, create listener for mouse move.");
					$(window).one('mousemove', function(e){
						mb_utils.createCookie("has_mouse", "yes", (365 * 5));
						$('html').removeClass("touchevents").addClass("no-touchevents");
					})
				}
			}
		}
	},

  checkSubscribeForm: function(list_id, form_id){
    var email = $("#" + form_id + "_email").val();

    $("#" + form_id + "_status").html('loading...');
    $.ajax({
      type: "GET",
      url: '/subscribe_submit', 
      data: {"email": email, "list": list_id, "form_id": form_id}, 

      fail: function(){
        $("#" + form_id + "_status").html("Could not subscribe. Please try again.");
      }
    });
  },

	mobileCheck: function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
  },

  mobileAndTabletCheck: function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  },

	humanize: function(property){
		return property.replace(/_/g, ' ').replace(/(\w+)/g, function(match) {
			return match.charAt(0).toUpperCase() + match.slice(1);
		});
	},
	// from https://davidwalsh.name/javascript-debounce-function
	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.
	/* usage:
	 var myEfficientFn = mb_utils.debounce(function() {
	 // All the taxing stuff you do
	 }, 250);

	 window.addEventListener('resize', myEfficientFn);
	 */

	debounce: function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

};

/* ----- end mb_utils ----- */

/* ----- Check for Mobile ----- */

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  iPad: function() {
    return navigator.userAgent.match(/iPad/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    //console.log("w:" +screen.width + "ua:" + navigator.userAgent + ", isIpad:" + isMobile.iPad());
    return (screen.width <= 500) || ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }

};

/* ----- end Check for Mobile ----- */

;
/* ----- Cookie Management Library: extending mb_utils ----- */


$.extend(mb_utils, {
  createCookie: function(name,value,days) {
    console.log ("mb_utils.createCookie: " + name, value, days);
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+'='+value+expires+'; path=/';
  },

  readCookie: function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        console.log ("mb_utils.readCookie: " + name, c.substring(nameEQ.length,c.length));
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  },

  eraseCookie: function(name) {
    mb_utils.createCookie(name,"",-1);
  }

});



/*
 * ----- Base64 for encoding----- 
 *
 * Usage: 
 *    mb_utils.createCookie("city", Base64.encode(locationString), 30);
 */

var Base64 = {
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
          Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
          Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);

    }

    return output;
  },

  // public method for decoding
  decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

      enc1 = Base64._keyStr.indexOf(input.charAt(i++));
      enc2 = Base64._keyStr.indexOf(input.charAt(i++));
      enc3 = Base64._keyStr.indexOf(input.charAt(i++));
      enc4 = Base64._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }

    }

    output = Base64._utf8_decode(output);

    return output;

  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
      else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }

    return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      }
      else if((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i+1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = utftext.charCodeAt(i+1);
        c3 = utftext.charCodeAt(i+2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    }
    return string;
  }
}
/* ----- Base64 for encoding----- */
;
addthis_loader = {
	initted: false,
	floater: false,
	follow: false,
	script_src: null,
	is_admin: null,
	share_url: null,
	layer_opts: {
		'theme' : 'transparent',
		'share' : {
			'position' : 'left',
			'services': "twitter,facebook,email,more",
			'offset': {'top': '60%'}
		},
		'responsive': {
			'maxWidth': '479px'
		}
	},

	init: function(script_src, opts){
		this.is_admin = window.location.href.search('mbcms') >= 0;
		if(opts.floater){
			this.floater = opts.floater;
		}

		if (opts.follow){
			this.follow = opts.follow;
		}

		if(opts.top){
			addthis_loader.layer_opts.share.offset.top = opts.top
		}

		if(opts.addthis_url){
			addthis_loader.share_url = opts.addthis_url;
		}

		this.script_src = script_src;
		if(typeof(opts.lazy_load) == 'undefined' || opts.lazy_load == false){
			addthis_loader.initted = true;
		}
	},

	scriptLoaded: function(data, textStatus, jqxhr){
		if(typeof(addthis) != "undefined"){   //somehow this is occasionally still undefined even though script just loaded
			console.log("addthis script loaded");
			if(addthis_loader.floater){
				addthis.layers(addthis_loader.layer_opts);
				addthis_loader.initListeners();
			}

			if(addthis_loader.share_url){
				addthis.update('share', 'url', addthis_loader.share_url);
			}
		} else {
			window.setTimeout(function(){ addthis_loader.scriptLoaded() }, 500)
		}

	},

	initListeners: function(){
		addthis.addEventListener('addthis.ready', addthis_loader.addthisReady);
	},

	addthisReady: function(evt) {
		var h = $(window).height() *.5;
		$(window).scroll(function(){
			var s = $(window).scrollTop();
			if(s > h && !( $('.addthis-smartlayers').hasClass("done"))){
				console.log("show addthis float")
				$('.addthis-smartlayers').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
				$('.addthis-smartlayers').addClass("done");
			}
		});
	}
}

$(document).ready(function(){
	if(addthis_loader.initted && !addthis_loader.is_admin){
		addthis_config = {"data_track_addressbar":false, services_compact: 'facebook,twitter,reddit,print,email,gmail,stumbleupon'};
		$.getScript(addthis_loader.script_src, addthis_loader.scriptLoaded);
	}
})
;
/* 
 * Instantiation of a google map
 * Could maybe pull some functions into a map_utils library
 *   Search
 *   Resize
 *   Wait and Retry
 */

var marker_style = {
	IN_LOCATION: 0,
	ID: 1,
	GENERIC: 2
};

var google_map = {
	the_map: null,
	minimap: null,
	locations: null,
	last_opened_info_window: null,
	marker_array: [],
	minimap_marker_array: [],
	region_zoom: 6,
	minimap_zoom: 8,
	params: null,
	map_type: null,
	marker_on: null,
	marker_off: null,
	marker_init_z: null,
	last_opened_marker: null,

	regions : {
		'africa': { bounds: [[-37.5341571, -26.586899899999935], [37.9615, 60.5566]] },
		'asia': { bounds: [[-12, 25], [70, 175]] },
		'australia': { bounds: [[-46.526369, 103.67267100000004], [-9.315742, 162.82306100000005]] },
		'europe': { bounds: [[34, -11], [65, 55]] },
		'north_america': { bounds: [[5, -170], [70, -50]] },
		'south_america': { bounds: [[-56.5474001, -93.97710000000001], [13.0771915, -32.58539989999997]] },
		'middle_east': { bounds: [[11.7975, 24.696775000000002], [42.3666999, 63.33333659999994]]},
		'all_regions': { bounds: [[-70, -175],[73, 160]] }
	},


		init: function(locations, params){
		this.locations = locations;
		this.params = params;
		this.map_type = google.maps.MapTypeId.HYBRID;
		google_map.marker_off = '/assets/images_of_change/map-marker-off.png';
		google_map.marker_on = '/assets/images_of_change/map-marker-on.png';
		this.loadMap();
		this.loadMiniMap(this.locations[0]);
	},

	getCenterFromLocation: function(loc){
		return new google.maps.LatLng(loc[main.lat],loc[main.lon])
	},
	
	constructGoogleBounds: function(bounds){
		var se = new google.maps.LatLng(bounds[0][0], bounds[0][1]);
		var nw = new google.maps.LatLng(bounds[1][0], bounds[1][1]);
		return new google.maps.LatLngBounds(se,nw);
	},

	centerMapByAddress: function(address){
		geocoder = new google.maps.Geocoder();
		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (google_map.the_map != null){
					console.log("recenter map! bounds: " + results[0].geometry.viewport);
					//google_map.the_map.setCenter(results[0].geometry.location);
					if (results[0].geometry.viewport){
						google_map.the_map.fitBounds(results[0].geometry.viewport);
					}
				}
			} else if(status == google.maps.GeocoderStatus.ZERO_RESULTS) {
				console.log("no results.")
				$(main.google_search_error).text("No locations found");
				$(main.google_search_error).show();
				$(main.google_search_error).fadeOut(3000);
			} else{
				console.log("Error geocoding: " + address + ", error: " + status);
			}
		});
	},

	minimapTriggerResize: function(){
		window.setTimeout(function(){
			var center = google_map.minimap.getCenter();
			google.maps.event.trigger(google_map.minimap, "resize");
			google_map.minimap.setCenter(center);
		}, 300);
	},

	loadMap: function() {
		var region = google_map.regions['all_regions'];
		var minzoom = $(window).width() < 1300 ? 2 : 3;
		var mapOptions = {
			backgroundColor: '#000000',
			draggable: true,
			scrollwheel: true,
			streetViewControl: false,
			minZoom: minzoom,
			mapTypeId: google_map.map_type
		};
		google_map.the_map = new google.maps.Map($(main.map_canvas)[0], mapOptions);
		google_map.the_map.fitBounds(google_map.constructGoogleBounds(region['bounds']));
		// Resize stuff...
		google.maps.event.addDomListener(window, "resize", function() {
			var center = google_map.the_map.getCenter();
			google.maps.event.trigger(google_map.the_map, "resize");
			google_map.the_map.setCenter(center);
		});

		google_map.createMarkers(google_map.locations, google_map.the_map, true, google_map.marker_array);
		if(main.mobileAndTabletcheck()){
			google_map.the_map.addListener('click', function(e){
				console.log("clicked map")
				if(google_map.last_opened_marker != null){
					google_map.closeMarker(google_map.last_opened_marker)
				}
			})
		}
	},

	loadMiniMap: function(loc){
		var center = google_map.getCenterFromLocation(loc);
		var mapOptions = {
			backgroundColor: '#000000',
			draggable: false,
			scrollwheel: false,
			streetViewControl: false,
			zoomControl: false,
			mapTypeControl: false,
			center: center,
			zoom: google_map.minimap_zoom,
			mapTypeId: google_map.map_type
		};
		google_map.minimap = new google.maps.Map($(main.minimap_canvas)[0], mapOptions);
		google_map.createMarker(loc, google_map.minimap, false, google_map.minimap_marker_array)
	},
	setMinimapParams: function(loc){
		google_map.minimap.setCenter(google_map.getCenterFromLocation(loc))
		google_map.clearOverlays(google_map.minimap_marker_array);
		google_map.createMarker(loc, google_map.minimap, false, google_map.minimap_marker_array);
	},

	resetMainMap: function(center,zoom){
		$(main.region_select).val('all_regions');
		if(!center){
//			var center = new google.maps.LatLng(google_map.regions['all_regions'].lat,google_map.regions['all_regions'].lon);
			var center = google_map.the_map.getCenter();
		}

		if(!zoom){
//			var zoom = google_map.regions['all_regions'].zoom
			var zoom = google_map.the_map.getZoom();
		}
		if(google_map.last_opened_info_window != null){
			google_map.last_opened_info_window.close();
		}
		window.setTimeout(function(){
			google.maps.event.trigger(google_map.the_map, "resize");
			google_map.the_map.setZoom(zoom);
			google_map.the_map.setCenter(center);
		}, 300);
	},
	
	zoomToRegion: function(region){
		var r = google_map.regions[region];
		if(r){
			google_map.the_map.fitBounds(google_map.constructGoogleBounds(r['bounds']));
		} else {
			console.error("Unknown region: " + region);
		}
	},

	createMarker: function(loc, map, show_info, marker_array){
		var point = new google.maps.LatLng(loc[main.lat],loc[main.lon])
		var icon = show_info ? google_map.marker_off : google_map.marker_on;
		var marker = new google.maps.Marker({
			position: point,
			map: map,
			icon: icon,
			categories: loc.image_category,
			loc_id: loc.id
		});
		marker_array.push(marker);
		if(show_info){
			var infowindow  = this.createInfoWindow(loc);
		 if(main.mobileAndTabletcheck()){
			 google.maps.event.addListener(marker, 'click', function() {
				 google_map.openMarker(marker, infowindow);
			 });

		 } else {
			 google.maps.event.addListener(marker, 'mouseover', function() {
				 google_map.openMarker(marker, infowindow);
			 });
			 google.maps.event.addListener(marker, 'mouseout', function() {
				 google_map.closeMarker(marker);
			 });

			 google.maps.event.addListener(infowindow,'closeclick',function(){
				 google_map.closeMarker(marker);
			 });

			 google.maps.event.addListener(marker, 'click', function() {
				 main.changeIoCById(loc.id)
			 });
		 }



			google.maps.event.addListener(infowindow, 'domready', function() {
				var $mb_window = $('.marker').parent().parent().parent().parent();
				$mb_window.addClass('mb_infowindow');
				$mb_window.children('div:eq(2)').addClass("mb_close");
			});

		}
	},

	openMarker: function(marker,infowindow){
		google_map.marker_init_z = marker.setZIndex();
		marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
		if(google_map.last_opened_info_window != null && google_map.last_opened_marker != null){
			google_map.closeMarker(google_map.last_opened_marker)
		}
		infowindow.open(google_map.the_map,marker);
		google_map.last_opened_info_window = infowindow;
		google_map.last_opened_marker = marker;

		marker.setIcon(google_map.marker_on);
	},

	setCurrentMarker: function(loc_id){
		$.each(google_map.marker_array, function(k,v){
			if(loc_id == v.loc_id){
				v.setIcon(google_map.marker_on);
			} else {
				v.setIcon(google_map.marker_off);
			}
		})
	},

	closeMarker: function(marker){
		if(marker.loc_id == main.current_ioc_id){
			marker.setIcon(google_map.marker_on);
		} else {
			marker.setIcon(google_map.marker_off);
		}
		marker.setZIndex(google_map.marker_init_z);
		google_map.last_opened_info_window.close();
		google_map.last_opened_marker = null;
	},

	createInfoWindow : function(loc){
		var strVar = JST['map_marker']({
			id: loc.id,
			thumbnail: loc.image_thumb,
			title: loc.thumbnail_title,
			subtitle: loc.thumbnail_subtitle
		});

		return new google.maps.InfoWindow({
			content: strVar,
			maxWidth: 150
		});

	},

	createMarkers: function(locations, map, show_info, marker_array){
		for(var i = 0; i < locations.length; i++){
			if(locations[i][main.lat] && locations[i][main.lon]){
				this.createMarker(locations[i], map, show_info, marker_array)
			}
		}
	},
	clearOverlays: function(marker_array) {
		for (var i = 0; i < marker_array.length; i++ ) {
			marker_array[i].setMap(null);
		}
		marker_array = [];
	},

	filterMarkers: function(category){
		if(category == ""){
			$(google_map.marker_array).each(function(k,v){
				v.setMap(google_map.the_map);
			});
		} else {
			$(google_map.marker_array).each(function(k,v){
				if(v.categories.search(category) != -1 ){
					v.setMap(google_map.the_map);
				}	else {
					v.setMap(null);
				}
			});
		}
	}
}


;
var main = {

	//Detail view
	image_detail: '#image_detail_view',
	before_img: '#before_image',
	after_img: '#after_image',
	curtain: '.curtain',
	orginal_b_left: 0,
	scale: 1,
	before_and_after_images: '.before_and_after',
	lastTouchDown: null,
	spinner: null,
	spin_selector: '.loading',
	$panzoom_el: null,

	// Panels
  panels: '#panels',
  panel: '.panel',
  overlay: '.overlay',
  modal: '#about_panel.modal',
  layer_module: '.layer_module',
  panel_close_button: '.close_btn',
	map_canvas: '#map_canvas',
	minimap_canvas: '#minimap_canvas',
	minimap_mover: '#minimap_mover',
	minimap_container: '.minimap_container',
	grid_view_ul: '#grid_view ul.articles',
	grid_view_gallery: '#grid_view .grid_gallery',
	grid_categories: '#grid_view ul.categories li',

  // Control Bars
	detail_view_controlbar: '',
	view_selector: '.view_selector',
	map_view_button: '.view_selector[data-show=map_view]',
	grid_view_button: '.view_selector[data-show=grid_view]',
	info_panel: '#info_panel',
  info_panel_close_button: '.panel_close_button',
  image_container: '.image_container',
	curtain_display_button: '#curtain_view',
	toggle_display_button: '#toggle_view',
	two_up_display_button: '#two_up_view',
	fullscreen_button: '#fullscreen .icon',
  mini_view_container: '.mini_view_container',
  mini_view: '.mini_view, .minimize_btn',
  prev_button: '.prev_item',
  next_button: '.next_item',
  nav_arrows: '.nav_arrows',

	//map filter/search
	category_select: '#map_view #category_select',
	region_select: '#map_view #region_select',
	map_search: '#map_view input.search_field',
	map_search_form: '#map_view form.search_binder',
	google_search_error: '#map_view .search_error',

  // Static vars
  panel_fade_speed: 400,
	filtered_prev_next: "",
	og_filter: "",
	images_of_change: null,
  current_ioc_index: 0,
	current_ioc_id: null,
	url_for_ioc_json: "/api/v1/gallery_images",
	lat: "image_map_latitude",
	lon: "image_map_longitude",

	//grid infinite scroll
	num_grid_items: 300,
	next_grid_start: 0,
	delta_scroll_y: 100,
	loading_grid: false,
	grid_done: false,
	grid_category_select: 'select.categories',

	spinner_opts: {
		lines: 8, // The number of lines to draw
		length: 5, // The length of each line
		width: 3, // The line thickness
		radius: 6, // The radius of the inner circle
		color: '#FFF', // #rbg or #rrggbb
		speed: 1, // Rounds per second
		trail: 100, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		className: 'spinner',
		top: "20px",
		left: "50%"
	},

	slidin: false,

  // Functions
  init: function() {
    this.initListeners();
		this.getLocations();
  },
  
  initListeners: function () {
		$(main.map_view_button).click(function(e){
			main.og_filter = main.filtered_prev_next;
			google_map.setCurrentMarker(main.current_ioc_id);
			panels_controller.openPanel(this, google_map.resetMainMap())
		});

		$(main.grid_view_button).click(function(e){
			main.og_filter = main.filtered_prev_next;
			panels_controller.openPanel(this, main.checkAndLoadGridImages())
		});

    // Panel button listeners
    $(main.panel_close_button).click(function() {
			if(main.filtered_prev_next != main.og_filter){
				main.resetFilters();
			}
      panels_controller.closePanels(this);
    });

		mb_utils.mouseCheck();

		$(main.map_search_form).submit(main.mapSearchFormSubmit);

    // $(main.info_panel_close_button).click(function(){
    //   main.toggleInfoPanel($(main.info_panel).hasClass('open'));
    // });
//		if(main.mobileAndTabletcheck()) {
//			$(window).resize(function () {
//				$(main.before_and_after_images).panzoom("resetDimensions");
//				$(main.before_and_after_images).panzoom("zoom", true);
//			})
//		}

    // Activate modal
    $('a.about').click(function(){
      $.modal($(main.modal).html(), {
        opacity:80,
        overlayCss: {backgroundColor:"#000"},
        overlayClose:true,
        close: true,
        //closeHTML: "<div class='close_btn'><div class='icon'></div></div>",
        closeClass: 'close_btn',
        position: ["50%","50%"],
        onShow: function(dialog){
          $(dialog.container).css('width','auto');
          $(dialog.container).css('height','auto');
        }
      });
    });

    // Only use this if we are hiding on mobile portrait orientation
		// if(main.mobileAndTabletcheck()) {
		// 	$(window).on('orientationchange', main.checkOrientation).trigger('orientationchange');
		// }

		$(main.region_select).change(function(e){
		 	google_map.zoomToRegion(this.value)
		});

		$(main.category_select).change(function(e){
			var category_str = this.value;
			google_map.filterMarkers(category_str);
			main.setFilteredView(category_str);
			panels_controller.filterGridBy(category_str);
		});

		$(main.grid_categories).click(function(){
			var category_str = $(this).data("filter");
			panels_controller.filterGridBy(category_str);
			main.setFilteredView(category_str);
			$(main.category_select).val(category_str);
			google_map.filterMarkers(category_str)
		});

		$(main.grid_category_select).change(function(e){
			var category_str = $(this).val();
			panels_controller.filterGridBy(category_str);
			main.setFilteredView(category_str);
			$(main.category_select).val(category_str);
			google_map.filterMarkers(category_str)
		})
  },

	mapSearchFormSubmit: function(e){
		e.preventDefault();
		var search = $(main.map_search).val();
		if(search != ""){
			document.activeElement.blur();
			google_map.centerMapByAddress(search);
		}
	},

	checkOrientation: function(){
		if(screen.height > screen.width){
			$('.rotate_warning').show(); //if portrait
		}
	},

	setFilteredView: function(category_str) {
		main.filtered_prev_next = category_str;
	},

	resetFilters: function(){
		main.setFilteredView(main.og_filter);
		$(main.category_select).val(main.og_filter);
		google_map.filterMarkers(main.og_filter)
		panels_controller.activateGridCategory(main.og_filter);
		panels_controller.filterGridBy(main.og_filter);
	},

  checkAndResetAddthisLayers: function(url,description, title){
    if (typeof(addthis) != "undefined"){
			// console.log("reset addthis");
			addthis.toolbox('.addthis_toolbox');

			if(url){
				addthis.update('share', 'url', url);
			}
			if (title){
				addthis.update('share', 'title', title);
			}
			if(description){
				addthis.update('share', 'description', description);
			}

		}
	},

  findImageFromHash: function(){
    if (window.location.hash != "") {
      if (window.location.hash.search(/(\.jpg|\.png|\.gif)$/) >= 0){   // Handle finding an item from a legacy link to "image file"
				console.log("legacy lookup...")
        var results = $.grep(main.images_of_change, function(e){ return e.image_main_file_name == window.location.hash.substring(1); });
				if(results.length > 0){
					console.log("match found ", results);
					main.changeIoCById(results[0].id);
				} else {
					main.loadLegacyLookupFail();
					main.loadDetail(0);
				}
      } else {
        var id = window.location.hash.substring(1).match(/^\d+/g)[0];
				if(id){
					id = parseInt(id);
					main.changeIoCById(id);
				} else {
					console.log("ID missing from hash and not image name");
					main.loadDetail(0);
				}
      }
    } else {
      main.loadDetail(0);
    }
  },

	loadLegacyLookupFail: function(){
		$.modal($('#lookup_failed').html(), {
			opacity:80,
			overlayCss: {backgroundColor:"#000"},
			overlayClose:true,
			close: true,
			//closeHTML: "<div class='close_btn'><div class='icon'></div></div>",
			closeClass: 'close_btn',
			position: ["50%","50%"],
			onShow: function(dialog){
				$(dialog.container).css('width','auto');
				$(dialog.container).css('height','auto');
			}
		});
	},

  switchViewMode: function(mode){
    //console.log("Switching view to " + mode);
    $(main.image_container).removeClass("two_up_view toggle_view curtain_view").addClass(mode);

    $('#curtain_view, #toggle_view, #two_up_view').removeClass('active');
    $('#' + mode).addClass('active');
  },

  toggleInfoPanel: function(is_open){
		if(is_open){
			$('.minimap_container').hide();
      //$('.right_section ul, ' + main.nav_arrows).show();

      $('.full_info').slideUp(400, function () {
        $(main.info_panel).removeClass('open');
        // $('.right_section ul').fadeIn();
        $('.right_section ul').slideDown(200);
      });
		} else {
			$(main.info_panel).addClass('open');
      $('.full_info').slideDown(400, function () {
        //$('.minimap_container').delay(200).fadeIn();
        $(main.info_panel_close_button).click(function(){
          main.toggleInfoPanel(true);
        });
        google_map.minimapTriggerResize();
      });
			//$('.right_section ul, ' + main.nav_arrows).hide();
      $('.right_section ul').hide();
      $('.minimap_container').slideDown(400);
		}

  },

	getLocations: function(){
		$.getJSON(main.url_for_ioc_json, {"order": "image_date desc, created_at desc", per_page: 500}, function(data){
			main.images_of_change = data.items;
      main.findImageFromHash(); //loads up the default image or item selected by passing in a hash
			$.getScript(addthis_loader.script_src, addthis_loader.scriptLoaded); //load up addthis after built
      google_map.init(main.images_of_change);
		} );
	},

	escapeHtml: function(string) {
		var entityMap = {
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		};

		return String(string).replace(/[<>"'\/]/g, function (s) {
			return entityMap[s];
		});
	},

  loadDetail: function(idx){
    main.current_ioc_index = idx;
    var item = main.images_of_change[idx];
		main.current_ioc_id = item.id;
		main.$panzoom_el = null;

		//move minimap if it exists so it isn't destroyed
		if($(main.minimap_canvas).length > 0){
			main.toggleInfoPanel(true); //make sure infopanel is closed before moving
			var map = google_map.minimap.getDiv();
			$(main.minimap_mover).append(map);
		}
    var html = JST['images_of_change']({
      item: item,
      image_mobile_1_url: item.image_mobile_1_url,
      image_mobile_2_url: item.image_mobile_2_url
    });
    var $prev_btn = $(main.prev_button),
        $next_btn = $(main.next_button);

    $(main.image_detail).html(html);

		//set location url
		var id = item.id.toString();
    var url_string = "?id=" + id +  "#" + item.id.toString() + "-";
    url_string += item.image_title.toLowerCase().trim().replace(/\s/g, "-").replace(/[^(a-z|\-)]/, "");
    //window.location.hash = url_string;
    window.history.replaceState(null, item.image_title, url_string)
    // console.log("URL String: " + url_string);
    //for IE
    if (!window.location.origin) {
		  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
		}

		//change share info
		var base_url = window.location.origin;

		try {
			$('meta[name=description]').remove();
			$("meta[property='og:description']").remove();
			$("meta[property='og:title']").remove();
			$("meta[property='og:image']").remove();
			var desc = main.escapeHtml(item.og_description);
			$('head').append( '<meta name="description" content="'+ desc  + '">' );
			$('head').append( '<meta property="og:description" content="'+ desc + '">' );
			$('head').append( '<meta property="og:title" content="Climate Change: Images of Change: '+ item.image_title + '">' );
			$('head').append( '<meta property="og:image" content="'+ base_url + item.image_thumb + '">' );

			main.checkAndResetAddthisLayers(window.location.href + url_string, desc, item.image_title, item.image_thumb);
		} catch(e){
			console.log("Error setting meta tags for item", item, e.message)
		}

    // Previous/next buttons
    $prev_btn.off("click");
    $next_btn.off("click");

    var prev = main.has_previous(idx);
		if (prev < 0){
      $prev_btn.addClass("disabled");
    } else {
      $prev_btn.removeClass("disabled").on("click", function(e){
				e.stopPropagation();
        main.loadDetail(prev);
      });
    }
		var next = main.has_next(idx);
    if (next < 0){
      $next_btn.addClass("disabled");
    } else {
      $next_btn.removeClass("disabled").on("click", function(e){
				e.stopPropagation();
        main.loadDetail(next);
      });
    }

		//move minimap back
		if($(main.minimap_mover).children().length > 0){
			var moved_map = google_map.minimap.getDiv();
			$(main.image_detail).find(main.minimap_canvas).replaceWith(moved_map);
			google_map.setMinimapParams(item);
		}

    main.initDetail();

  },

	has_previous: function(idx){
		if(idx == 0){
			return -1
		}	else if(main.filtered_prev_next == ""){
			return(idx - 1)
		} else {
			//loop through and see if the item is in category x
			for(var i = idx - 1; i >= 0; i--){
				var item =  main.images_of_change[i];
				if(item.image_category.search(main.filtered_prev_next) != -1){
					return i;
				}
			}
			return -1; //prev items of category x not found
		}
	},

	has_next: function(idx){
		var ioc_len = main.images_of_change.length;
		if(idx >= ioc_len - 1){
			return -1
		}	else if(main.filtered_prev_next == ""){
			return(idx + 1)
		} else {
			//loop through and see if the item is in category x
			for(var i = idx + 1; i < ioc_len; i++){
				var item =  main.images_of_change[i];
				if(item.image_category.search(main.filtered_prev_next) != -1){
					return i;
				}
			}
			return -1; //next items of category x not found
		}
	},
	slideIn: function(){
		console.log("slide in");
		$(window).trigger('slidein', 50)
		main.slidin = true;
	},

  initDetail: function(){
    // Control bar button variables
    var $fullscreen_btn = $(main.fullscreen_button);

    var $curtain_btn = $(main.curtain_display_button);
    var $toggle_btn = $(main.toggle_display_button);
    var $two_up_btn = $(main.two_up_display_button);

		main.spinner = $('.loading').first().spin(main.spinner_opts);
		//curtain
		$(main.before_and_after_images).imagesLoaded(function(){
			var offset = main.slidin ? 0.5 : 0;
			main.slider = $(main.before_and_after_images).twentytwenty({default_offset_pct: offset});
			if(!main.slidin){
				window.setTimeout(main.slideIn,300);
			}

			main.spinner.spin(false);
			if(main.mobileAndTabletcheck()){
				main.initDetailPinchListeners();
			}
		});

    //Control bars
    $fullscreen_btn.click(function () {
      control_bar_controller.toggleFullscreen();
    });
    
    // View mode switching
    $curtain_btn.click(function(){ 
      if (!$(this).hasClass('active')){
        main.switchViewMode("curtain_view"); 
        $(main.mini_view_container).hide(); 
        //$(main.curtain).css('left', '50%');
        $(main.before_img).show();
        $(main.after_img).show();

      }
    });
    $toggle_btn.click(function(){ 
      if (!$(this).hasClass('active')){
        main.switchViewMode("toggle_view");
        $(main.info_panel).find(main.mini_view_container).show();
        $(main.before_img).show();
        $(main.after_img).hide();
      }
    });
    $two_up_btn.click(function(){ 
      if (!$(this).hasClass('active')){
        main.switchViewMode("two_up_view");
        $(main.mini_view_container).hide(); 
        $(main.before_img).show();
        $(main.after_img).show();
        //$(main.before_and_after_images).css("height","auto");
      }
    });

    // $('a.minimize_btn').click(function(){
    //   $('.mini_view').toggle();
    //   $(this).toggleClass('minimized');
    // });

    $('a.mini_view').click(function(){
      $(main.after_img).toggle();
      $(main.before_img).toggle();
      $('.mini_before, .mini_after').toggleClass('inactive');
    });  
    // $('a.mini_before').click(function(){
    //   $(main.after_img).hide();
    //   $(main.before_img).show();
    // });
    // $('a.mini_after').click(function(){
    //   $(main.before_img).hide();
    //   $(main.after_img).show();
    // });

    // Info panel toggle
    $('.info_toggle').click(function(){ main.toggleInfoPanel($(main.info_panel).hasClass("open")); });

		$(main.minimap_container).click(function(){
			panels_controller.minimapOnClick();
		});

		if(main.mobileAndTabletcheck()){
			$(main.before_and_after_images).click(main.toggleChrome)
		}


		if (screenfull && screenfull.enabled) {
			document.addEventListener(screenfull.raw.fullscreenchange, function () {

				$('body').toggleClass('fullscreen', screenfull.isFullscreen);
				//safari not handling the fs well. trigger a resize to freshen it up
				if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 &&  navigator.userAgent.indexOf('Android') == -1){
					//refresh slider
					$(window).trigger("resize.twentytwenty");
				}
			});
		} else if (main.mobileAndTabletcheck()) { //ios in all probability
			$('body').addClass('motanf'); // mobile or tablet and not fullscreen-able
		} else {  //ie9 and 10 and possibly others
			$('#fullscreen').hide();
		}
  },

	toggleChrome: function(e){
		$('body').toggleClass("chromeless");
		main.toggleChromelessMiniviewToggle();
	},

	toggleChromelessMiniviewToggle: function(){
		if($('body').hasClass('chromeless') && $(main.image_container).hasClass('toggle_view')){
			$('.mini_view_container.chromeless_toggle').show();
		} else {
			$('.mini_view_container.chromeless_toggle').hide();
		}
	},

	initDetailPinchListeners: function(){
		$('.image_tools').click(function(e){
		 	if($(this).hasClass('zoom')){
				$(this).removeClass('zoom');
				$('body').addClass('chromeless zoomable');
				if(main.$panzoom_el){
					main.$panzoom_el.panzoom("enable");
				} else {
					main.$panzoom_el = $(main.before_and_after_images).panzoom({
						increment: 1.5
					});
				}
				$('.twentytwenty-handle').addClass('vanish');
			} else {
				$(this).addClass('zoom');
				main.$panzoom_el.panzoom("setMatrix", [ 1, 0, 0, 1, 0, 0 ]);
				main.$panzoom_el.panzoom("disable");
				$('body').removeClass('chromeless zoomable');
				$('.twentytwenty-handle').removeClass('vanish');
			}
			main.toggleChromelessMiniviewToggle();
		})
	},

	centerMapAfterShow: function(){
		var current = main.images_of_change[main.current_ioc_index];
		var center = [current[main.lat], current[main.lon]];
		google_map.centerMap(center);
	},

	changeIoCById: function(id){
		console.log("find ioc and load it up", id);
		var index = main.findIndexById(id);
		if(index >= 0){
			main.loadDetail(index);
		} else {
			console.error("index not found:", id);
			main.loadDetail(0);
		}
		panels_controller.closePanels();
		return false;
	},

	findIndexById: function(id){
		var end = main.images_of_change.length;
		found = -1;
		for(var i=0; i < end; i++){
			if(main.images_of_change[i].id == id){
				found = i;
				break;
			}
		}
		return found;
	},

	checkAndLoadGridImages: function(){
		if($(main.grid_view_ul).is(':empty')){
			panels_controller.loadGridImages(main.next_grid_start, main.num_grid_items + main.next_grid_start);
		}

		$(main.grid_view_gallery).scroll(function(){
			if(main.shouldLoadMoreGridItems($(this))){
				console.log("load new images!")
				panels_controller.loadGridImages(main.next_grid_start, main.num_grid_items + main.next_grid_start);
			}
		})
	},
	shouldLoadMoreGridItems: function($el){
		var distance_from_bottom = $el[0].scrollHeight - $el.innerHeight() - $el.scrollTop();
//		console.log("distance from bottom: " +  distance_from_bottom + " = ( height: " + $el.innerHeight() + " + scrollTop: " + $el.scrollTop() + " + scrollHeight: " + $el[0].scrollHeight + ")");
		return ((distance_from_bottom < main.delta_scroll_y) && !main.loading_grid && !main.grid_done);
	},

	mobileAndTabletcheck: function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}


}


$(document).ready(function(){
	main.init();
});
var panels_controller = {

	openPanel: function(clicked, after_fade){
		var view = $(clicked).data('show');
		$('#' + view).fadeIn(main.panel_fade_speed, after_fade);
	},
  
  closePanels: function (close_button) {
		$(main.panel).fadeOut(main.panel_fade_speed);
  },

	loadGridImages: function(start, end){
		var real_end = Math.min(end, main.images_of_change.length);
		main.grid_loading = true;
		//get category selected to see if should display
		var category_selected = $(main.grid_categories + ".active").data("filter");
		for(var i=start; i < real_end; i++) {
			var loc = main.images_of_change[i];
			//for class convert "c1, c 2, c3" -> "c1 c_2 c3"
			var item_categories = loc.image_category ? loc.image_category.replace(/([a-z])\s(?=[a-z])/g, '$1_').replace(/,/g, ' ') : '';
			var display = panels_controller.shouldDisplay(loc.image_category, category_selected);
			var grid_item = JST['ioc_grid_item']({
				id: loc.id,
				display: display,
				item_categories: item_categories,
				thumbnail: loc.image_thumb,
				title: loc.thumbnail_title,
				subtitle: loc.thumbnail_subtitle
			});

			$(main.grid_view_ul).append(grid_item);
		}
		main.next_grid_start = real_end;
		console.log("done loading");
		if(main.next_grid_start == main.images_of_change.length){
			main.grid_done = true;
		}
		main.grid_loading = false;
	},
	filterGridBy: function(category){
		panels_controller.activateGridCategory(category);
		category = category.replace(/([a-z])\s(?=[a-z])/g, '$1_')
		if(category == ""){
			$(main.grid_view_ul).find('li').show();
		} else {
			$(main.grid_view_ul).find('li').hide();
			$(main.grid_view_ul).find('li.' + category).show();
			if(main.shouldLoadMoreGridItems($(main.grid_view_gallery))){
				panels_controller.loadGridImages(main.next_grid_start, main.num_grid_items + main.next_grid_start)
			}
		}
	},

	activateGridCategory: function(category_str){
		$(main.grid_categories).removeClass('active');
		$(main.grid_categories + "[data-filter='" + category_str + "']").addClass("active")
		$(main.grid_category_select).val(category_str);
	},

	shouldDisplay: function(categories, category_selected){
		if(category_selected == ""){
			return "inline-block";
		} else if(categories == null) {
			return "none"
		} else if(categories.search(category_selected) != -1){
			return "inline-block"
		} else {
			return "none";
		}
	},
	minimapOnClick: function(){
		//get current item
		var item = main.images_of_change[main.current_ioc_index];
		//load map panel
		$(main.map_view_button).click();
		//center, zoom and resize
		google_map.resetMainMap(google_map.getCenterFromLocation(item), google_map.region_zoom)
	}

}
;
var control_bar_controller = {
	changeDisplay: function(display){
		//change to show/hide elements
	},

	toggleFullscreen: function(btn){
		if (screenfull.enabled) {
			$(btn).toggleClass('active');
			screenfull.toggle(btn);
		} else{
			$(btn).toggleClass('active');
			$('body').toggleClass('fullscreen');
		}
	}

}
;























