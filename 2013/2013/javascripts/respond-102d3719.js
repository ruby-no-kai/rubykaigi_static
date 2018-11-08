/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||function(e){"use strict";var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,i=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,a),t=42===r.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(document),function(e){"use strict";function t(){w(!0)}var n={};if(e.respond=n,n.update=function(){},n.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var a,i,r,s=e.document,o=s.documentElement,l=[],d=[],m=[],h={},u=30,c=s.getElementsByTagName("head")[0]||o,p=s.getElementsByTagName("base")[0],f=c.getElementsByTagName("link"),y=[],v=function(){for(var t=0;t<f.length;t++){var n=f[t],a=n.href,i=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase();a&&r&&!h[a]&&(n.styleSheet&&n.styleSheet.rawCssText?(x(n.styleSheet.rawCssText,a,i),h[a]=!0):(!/^([a-zA-Z:]*\/\/)/.test(a)&&!p||a.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&y.push({href:a,media:i}))}g()},g=function(){if(y.length){var t=y.shift();T(t.href,function(n){x(n,t.href,t.media),h[t.href]=!0,e.setTimeout(function(){g()},0)})}},x=function(e,t,n){var a=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),i=a&&a.length||0;t=t.substring(0,t.lastIndexOf("/"));var r=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},s=!i&&n;t.length&&(t+="/"),s&&(i=1);for(var o=0;i>o;o++){var m,h,u,c;s?(m=n,d.push(r(e))):(m=a[o].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,d.push(RegExp.$2&&r(RegExp.$2))),u=m.split(","),c=u.length;for(var p=0;c>p;p++)h=u[p],l.push({media:h.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:d.length-1,hasquery:h.indexOf("(")>-1,minw:h.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:h.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},E=function(){var e,t=s.createElement("div"),n=s.body,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=s.createElement("body"),n.style.background="none"),n.appendChild(t),o.insertBefore(n,o.firstChild),e=t.offsetWidth,a?o.removeChild(n):n.removeChild(t),e=r=parseFloat(e)},w=function(t){var n="clientWidth",h=o[n],p="CSS1Compat"===s.compatMode&&h||s.body[n]||h,y={},v=f[f.length-1],g=(new Date).getTime();if(t&&a&&u>g-a)return e.clearTimeout(i),i=e.setTimeout(w,u),void 0;a=g;for(var x in l)if(l.hasOwnProperty(x)){var T=l[x],C=T.minw,S=T.maxw,$=null===C,b=null===S,R="em";C&&(C=parseFloat(C)*(C.indexOf(R)>-1?r||E():1)),S&&(S=parseFloat(S)*(S.indexOf(R)>-1?r||E():1)),T.hasquery&&($&&b||!($||p>=C)||!(b||S>=p))||(y[T.media]||(y[T.media]=[]),y[T.media].push(d[T.rules]))}for(var M in m)m.hasOwnProperty(M)&&m[M]&&m[M].parentNode===c&&c.removeChild(m[M]);for(var O in y)if(y.hasOwnProperty(O)){var B=s.createElement("style"),L=y[O].join("\n");B.type="text/css",B.media=O,c.insertBefore(B,v.nextSibling),B.styleSheet?B.styleSheet.cssText=L:B.appendChild(s.createTextNode(L)),m.push(B)}},T=function(e,t){var n=C();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},C=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();v(),n.update=v,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);