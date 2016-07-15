var helper={};!function(e,t){function n(n,a){function r(o){t.removeEventListener("DOMContentLoaded",r),n.call(a||e,o)}function o(r){"complete"===t.readyState&&(t.detachEvent("onreadystatechange",o),n.call(a||e,r))}t.addEventListener&&t.addEventListener("DOMContentLoaded",r)||t.attachEvent&&t.attachEvent("onreadystatechange",o)}e.domReady=n}(window,document),helper.isInViewport=function(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)},helper.registerListener=function(e,t){window.addEventListener?window.addEventListener(e,t):window.attachEvent("on"+e,t)},helper.removeListener=function(e,t){window.addEventListener?window.removeEventListener(e,t):window.detachEvent("on"+e,t)};var getRtlCss=function(e){var t=["ar-AE","fa-IR","he-IL","ur-PK"];return t.indexOf(_User.lang)>-1&&(e=e.replace(".css","-rtl.css")),e};helper.loadTemplateWithClass=function(e,t,n){var a="/ss-SS/templates/"+t+"/"+n+"/"+n+".html",r="undefined"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");r.open("get",a,!0),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){helper.addClass(document.getElementById(e),"slide-out"),document.getElementById(e).innerHTML=getRtlCss(r.responseText);var a=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.src="/ss-SS/templates/"+t+"/"+n+"/"+n+".js",o.onreadystatechange=n+"Run",o.onload=n+"Run",a.appendChild(o),setTimeout(function(){helper.removeClass(document.getElementById(e),"slide-out")},300)}},r.send()},helper.loadTemplate=function(e,t,n){var a="/ss-SS/templates/"+t+"/"+n+"/"+n+".html",r="undefined"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");r.open("get",a,!0),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){document.getElementById(e).innerHTML=getRtlCss(r.responseText);var a=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.src="/ss-SS/templates/"+t+"/"+n+"/"+n+".js",o.onreadystatechange=n+"Run",o.onload=n+"Run",a.appendChild(o)}},r.send()},helper.loadScript=function(e,t){var n=document.getElementsByTagName(n&&"body"||"head")[0],a=document.createElement("script");a.type="text/javascript",a.src=e,t&&(a.onreadystatechange=t),t&&(a.onload=t),n.appendChild(a)},helper.setContent=function(e){var t=function(e){void 0!==e[1]&&e[1]||(e[1]="--"),document.getElementById(e[0]).innerHTML=e[1]};if("object"==typeof e)for(var n=0;n<e.length;n++)t(e[n])},helper.empty=function(e){document.getElementById(e).innerHTML=""},helper.ngRepeat=function(e,t,n,a,r){r="all"===r?a[n[0][1]].length:r;var o,s="/ss-SS/templates/components/"+t+"/"+t+".html",c="undefined"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),l="",i=0,d=0,p=0;c.open("get",s,!0),c.onreadystatechange=function(){if(4===c.readyState&&200===c.status){var t=c.responseText;for(i=0;i<r;i++)o=document.getElementById(e),o&&(o.innerHTML+=t);for(d=0;d<n.length;d++)for(l=document.getElementsByClassName(n[d][0]),p=0;p<l.length;p++)a[n[d][1]]&&("icon"===n[d][1]?l[p].innerHTML=getWxIcon(a[n[d][1]][p]):n[d][1].indexOf("Class")!==-1?helper.addClass(l[p],a[n[d][1]][p]):(l[p].innerHTML=a[n[d][1]][p],n[d][2]&&(l[p].innerHTML+=" "+n[d][2])))}},c.send()},helper.ngRepeatReverse=function(e,t,n,a,r){r="all"===r?n.length:r;var o="templates/components/"+t+"/"+t+".html",s="undefined"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),c="",l=0,i=0,d=0;s.open("get",o,!0),s.onreadystatechange=function(){if(4===s.readyState&&200===s.status){var t=s.responseText;for(l=0;l<r;l++)document.getElementById(e).innerHTML+=t;for(i=0;i<n.length;i++)for(c=document.getElementsByClassName(n[i][0]),d=0;d<c.length;d++)c[d].innerHTML=a[d][n[i][1]]}},s.send()},helper.isNumeric=function(e){return"number"==typeof e&&"NaN"!==e},helper.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},helper.hasClass=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},helper.addClass=function(e,t){helper.hasClass(e,t)||(e.className+=" "+t)},helper.removeClass=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(helper.hasClass(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},helper.toggleClass=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(hasClass(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}else e.className+=" "+t},"undefined"!=typeof module&&module.hasOwnProperty("exports")&&(module.exports=helper),helper.getJSON=function(e){return new Promise(function(t){var n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",e,!0),n.onreadystatechange=function(){4===n.readyState&&"200"===n.status&&t(JSON.parse(n.responseText))},n.send(null)})},helper.parseQueryString=function(){var e=window.location.search,t={};return e.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(e,n,a,r){t[n]=r}),t},String.prototype.replaceAll=function(e,t){var n=this;return n.split(e).join(t)},helper.setCanonical=function(){var e="https://weather.com/",t=window.location.href.replace(/.+\.weather\.com/,e),n=function(){var e="/ss-SS/js-src/hreflangs/hreflang_"+_Router.page+"_page.json";return helper.getJSON(e).then(function(e){return e[_User.lang]})},a=function(){var a,o=document.createElement("link"),s=document.getElementsByTagName("head")[0];o.setAttribute("rel","canonical"),n().then(function(n){var c=r();a=c?e+n+c:t,o.setAttribute("href",a),s.appendChild(o)})["catch"](function(){a=t,o.setAttribute("href",a),s.appendChild(o)})},r=function(){var e=_User.activeLocation,t=e.cityNm&&e.cityNm.replace(/\s/g,"+"),n=e.stCd,a="";if(!e||!t||!n)return null;if(e.zipCd)a=e.zipCd+":4:"+e.cntryCd;else{if(!e.locId)return null;a=e.locId+":1:"+e.cntryCd}return t+"+"+n+"+"+a};a()},helper.pdTranslate=function(e){return _Lang[e]?_Lang[e]:e},helper.getActiveLocID=function(){var e=_User.activeLocation;return e.locId?e.locId+":"+e.locType+":"+e.cntryCd:""},helper.safeDisplay=function(e,t){return 0===e||e?e:t||"--"};