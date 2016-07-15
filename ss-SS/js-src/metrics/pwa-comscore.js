/**
 *
 */
(function(helper, cfg, ns_) {
  function udm_(a){var b="comScore=",c=document,d=c.cookie,e="",f="indexOf",g="substring",h="length",i=2048,j,k="&ns_",l="&",m,n,o,p,q=window,r=q.encodeURIComponent||escape;if(d[f](b)+1)for(o=0,n=d.split(";"),p=n[h];o<p;o++)m=n[o][f](b),m+1&&(e=l+unescape(n[o][g](m+b[h])));a+=k+"_t="+ +(new Date)+k+"c="+(c.characterSet||c.defaultCharset||"")+"&c8="+r(c.title)+e+"&c7="+r(c.URL)+"&c9="+r(c.referrer),a[h]>i&&a[f](l)>0&&(j=a[g](0,i-8).lastIndexOf(l),a=(a[g](0,j)+k+"cut="+r(a[g](j+1)))[g](0,i)),c.images?(m=new Image,q.ns_p||(ns_p=m),m.src=a):c.write("<","p","><",'img src="',a,'" height="1" width="1" alt="*"',"><","/p",">")}
  ns_.batch=function(a){var b,c,d=document,e=d.location;a=a+"&ns__t="+(new Date).getTime(),a=a+"&ns_c="+(d.characterSet?d.characterSet:d.defaultCharset?d.defaultCharset:"")+"&ns_ti="+escape(d.title)+"&ns_jspageurl="+escape(e&&e.href?e.href:d.URL)+"&ns_referrer="+escape(d.referrer);var f=2040,g=a.lastIndexOf("&");if(a.length>f&&g!=-1){while(g>f)a=a.substring(0,g),g=a.lastIndexOf("&");a=a.substring(0,g+1)+"ns_cut="+a.substr(g+1,f-g-1)}var h='img height="1" width="1"  style="position:absolute;top:0;left:0;"';if(d.layers)d.images?(new Image).src=a:d.write("<"+h+' src="'+a+'">');else{var i=function(a){var b=document.all(a);b&&b.length&&(b=b[0]);return b},j=function(a){c.onload=c.onerror=null;if(ns_.pipe.length>0){var e=ns_.pipe.join(""),f=e.indexOf("src"),g=e.indexOf('"',f),h=e.indexOf('"',g+1),k=e.substring(g+1,h),e=e.substring(0,f)+'id="ns_1"'+e.substring(h+1);ns_.pipe=[],b.innerHTML=e,c=d.getElementById?d.getElementById("ns_1"):i("ns_1"),c.onload=j,c.src=k}};rs=d.readyState,ns_=typeof ns_!="undefined"?ns_:{},ns_.pipe=typeof ns_.pipe!="undefined"?ns_.pipe:[],b=d.getElementById?d.getElementById("ns_"):i("ns_");if(!b){var k=["<",'div id="ns_" style="position:absolute;top:0;left:0;z-index:32766;background-color:transparent !important"><',h,' id="ns_1"></',"div>"].join("");rs=="complete"?d.body.innerHTML+=k:d.write(k)}c=d.getElementById?d.getElementById("ns_1"):i("ns_1");if(c&&c.onload)ns_.pipe[ns_.pipe.length]="<"+h+' src="'+a+'">';else if(b||c)b&&(b.innerHTML="<"+h+' id="ns_1">'),b=d.getElementById?d.getElementById("ns_"):i("ns_"),c=d.getElementById?d.getElementById("ns_1"):i("ns_1"),c.onload=c.onerror=j,c.src=a}},ns_.order_sent=ns_.order_sent||{}
  document.getElementById('event-anchor').addEventListener('pager', function(){
    udm_("http" + (document.location.href.charAt(4) === "s" ? "s://sb" : "://b") + ".scorecardresearch.com/b?" + cfg.g.join("&"));
  });
  helper.loadScript("http" + (document.location.href.charAt(4) === "s" ? "s://sb" : "://b") + ".scorecardresearch.com/c2/" + cfg.cid + "/cs.js", null, true);
}(helper, {cid: "9576127", g: ["c1=2","c2=9576127"]}, (window.ns_=window.ns_||{})));




