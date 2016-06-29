/**
 * Created by ecook on 6/26/16.
 */
var _Metrics = {};

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
(function(){
    /* jshint ignore:start */

    var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.26';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\"
            +"\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return "
            +"y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;retur"
            +"n 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x)"
            +";for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.subs"
            +"tring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+',"
            +"'%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+"
            +"x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescap"
            +"e(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z"
            +"+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,"
            +"2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f"
            +");return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibi"
            +"litychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while("
            +"s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s"
            +".sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.link"
            +"Type=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,"
            +"n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.'"
            +",'c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?"
            +"c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60)"
            +";if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');"
            +"return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l"
            +"[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf="
            +"new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.w"
            +"d,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;r"
            +"eturn true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s."
            +"tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for("
            +"n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingS"
            +"erverBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLower"
            +"Case();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.versio"
            +"n+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!"
            +"s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r"
            +";return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[im"
            +"n];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if"
            +"(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s"
            +"._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<50"
            +"0)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){"
            +"if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&"
            +"&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf("
            +"\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp("
            +"q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.len"
            +"gth-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk "
            +"in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++"
            +")if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf="
            +"(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.con"
            +"textData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else "
            +"if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var "
            +"s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.p"
            +"e){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s."
            +"events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0"
            +")&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substr"
            +"ing(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServe"
            +"r'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()"
            +"=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvid"
            +"er')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c'"
            +";else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType'"
            +")q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],f"
            +"v,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='re"
            +"trieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q"
            +"='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){"
            +"t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLower"
            +"Case():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.w"
            +"d.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0"
            +"&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;"
            +"if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.b"
            +"ct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else "
            +"if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e."
            +"target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a"
            +".href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.w"
            +"d.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEven"
            +"t(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n"
            +",e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h="
            +"o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathna"
            +"me.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.sc"
            +"opeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();"
            +"else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('ja"
            +"vascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.inner"
            +"Text;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.subs"
            +"tring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this"
            +".un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1))"
            +";s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ="
            +"new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s"
            +".sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r="
            +"true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.ind"
            +"exOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s"
            +".b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListene"
            +"r('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''"
            +"),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>"
            +"=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){"
            +"var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m."
            +"toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun="
            +"un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];i"
            +"f(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r"
            +"','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m="
            +"s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_"
            +"\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x"
            +"(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_"
            +"nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){"
            +"if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o"
            +".l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i"
            +"(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementBy"
            +"Id(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDel"
            +"ay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id"
            +"=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Obj"
            +"ect;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,"
            +"v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l"
            +"=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo)"
            +"{if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(v"
            +"o){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='012"
            +"3456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random("
            +")*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.vis"
            +"itorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if"
            +"(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorI"
            +"D=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y="
            +"tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q=''"
            +",qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N"
            +"',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j="
            +"'1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';i"
            +"f(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh="
            +"s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;i"
            +"f(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct"
            +"=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps"
            +")<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo"
            +"){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s."
            +"pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s."
            +"eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s"
            +"_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkTyp"
            +"e.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceI"
            +"ndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if("
            +"s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.cha"
            +"rAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx"
            +"=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('o"
            +"bjectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs)"
            +"{s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles"
            +"=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s"
            +".wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss"
            +",i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l["
            +"i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.m"
            +"l)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];i"
            +"f(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.lo"
            +"cation.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns"
            +"6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer'"
            +");s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=pa"
            +"rseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUp"
            +"perCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationS"
            +"erverSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProf"
            +"iles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSec"
            +"onds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_"
            +"t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDept"
            +"h,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackin"
            +"gServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownlo"
            +"adLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_refer"
            +"rer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1"
            +").t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
        w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
            +"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
        w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
        w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
        w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
            +"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
            +"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
        w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
        w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
            +"a");
        w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
            +"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
            +"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
        c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
    function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
    /* jshint ignore:end */
    var s=s_gi("pwa");
    _Metrics.clickTrack = function(obj, page, module, trackStr){
        if(!obj || !trackStr || !page || !module){
            return;
        }
        trackStr = page + '_' + module + '_' + trackStr;
        s.linkTrackVars='prop35';s.linkTrackEvents='None';
        s.prop35 = trackStr;
        s.tl(obj, 'o', trackStr);
    };

    _Metrics.pageLoad = function(fromPage, toPage, pos){
        if(window['s'] === undefined){
            setTimeout(function(){
                s.linkTrackVars='eVar39,eVar60,prop44';s.linkTrackEvents='event2';
                s.eVar39 = JSON.stringify(_User);
                s.eVar60 = _Router.page;
                /*10day-forecast_inPageNav_5 Day_3 */
                s.prop44 = fromPage + '_inPageNav_' + toPage + '_' + pos;
                s.t();
            }, 500);
        } else {
            s.eVar39 = _User;
            s.eVar60 = _Router.page;
            s.t();
        }
    };
})();
// ===================================================================
// Author: Matt Kruse <matt@ajaxtoolbox.com>
// WWW: http://www.AjaxToolbox.com/
//
// NOTICE: You may use this code for any purpose, commercial or
// private, without any further permission from the author. You may
// remove this notice from your final code if you wish, however it is
// appreciated by the author if at least my web site address is kept.
//
// You may *NOT* re-distribute this code in any way except through its
// use. That means, you can include it in your product, or your web
// site, or any other form where the code is actually being used. You
// may not put the plain javascript up on your site for download or
// include it in your javascript libraries for download.
// If you wish to share this code with others, please just point them
// to the URL instead.
// Please DO NOT link directly to my .js files from your site. Copy
// the files to your server and use them there. Thank you.

/*
 LICENSE
 The MIT License (MIT)

 Copyright (c) 2015 Spencer Alger

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
// ===================================================================

/**
 * The AjaxRequest class is a wrapper for the XMLHttpRequest objects which
 * are available in most modern browsers. It simplifies the interfaces for
 * making Ajax requests, adds commonly-used convenience methods, and makes
 * the process of handling state changes more intuitive.
 * An object may be instantiated and used, or the Class methods may be used
 * which internally create an AjaxRequest object.
 */
function AjaxRequest() {
    var req = new Object();

    // -------------------
    // Instance properties
    // -------------------

    /**
     * Timeout period (in ms) until an async request will be aborted, and
     * the onTimeout function will be called
     */
    req.timeout = null;

    /**
     *  Since some browsers cache GET requests via XMLHttpRequest, an
     * additional parameter called AjaxRequestUniqueId will be added to
     * the request URI with a unique numeric value appended so that the requested
     * URL will not be cached.
     */
    req.generateUniqueUrl = true;

    /**
     * The url that the request will be made to, which defaults to the current
     * url of the window
     */
    req.url = window.location.href;

    /**
     * The method of the request, either GET (default), POST, or HEAD
     */
    req.method = "GET";

    /**
     * Whether or not the request will be asynchronous. In general, synchronous
     * requests should not be used so this should rarely be changed from true
     */
    req.async = true;

    /**
     * The username used to access the URL
     */
    req.username = null;

    /**
     * The password used to access the URL
     */
    req.password = null;

    /**
     * The parameters is an object holding name/value pairs which will be
     * added to the url for a GET request or the request content for a POST request
     */
    req.parameters = new Object();

    /**
     * The sequential index number of this request, updated internally
     */
    req.requestIndex = AjaxRequest.numAjaxRequests++;

    /**
     * Indicates whether a response has been received yet from the server
     */
    req.responseReceived = false;

    /**
     * The name of the group that this request belongs to, for activity
     * monitoring purposes
     */
    req.groupName = null;

    /**
     * The query string to be added to the end of a GET request, in proper
     * URIEncoded format
     */
    req.queryString = "";

    /**
     * After a response has been received, this will hold the text contents of
     * the response - even in case of error
     */
    req.responseText = null;

    /**
     * After a response has been received, this will hold the XML content
     */
    req.responseXML = null;

    /**
     * After a response has been received, this will hold the status code of
     * the response as returned by the server.
     */
    req.status = null;

    /**
     * After a response has been received, this will hold the text description
     * of the response code
     */
    req.statusText = null;

    /**
     * An internal flag to indicate whether the request has been aborted
     */
    req.aborted = false;

    /**
     * The XMLHttpRequest object used internally
     */
    req.xmlHttpRequest = null;

    // --------------
    // Event handlers
    // --------------

    /**
     * If a timeout period is set, and it is reached before a response is
     * received, a function reference assigned to onTimeout will be called
     */
    req.onTimeout = null;

    /**
     * A function reference assigned will be called when readyState=1
     */
    req.onLoading = null;

    /**
     * A function reference assigned will be called when readyState=2
     */
    req.onLoaded = null;

    /**
     * A function reference assigned will be called when readyState=3
     */
    req.onInteractive = null;

    /**
     * A function reference assigned will be called when readyState=4
     */
    req.onComplete = null;

    /**
     * A function reference assigned will be called after onComplete, if
     * the statusCode=200
     */
    req.onSuccess = null;

    /**
     * A function reference assigned will be called after onComplete, if
     * the statusCode != 200
     */
    req.onError = null;

    /**
     * If this request has a group name, this function reference will be called
     * and passed the group name if this is the first request in the group to
     * become active
     */
    req.onGroupBegin = null;

    /**
     * If this request has a group name, and this request is the last request
     * in the group to complete, this function reference will be called
     */
    req.onGroupEnd = null;

    // Get the XMLHttpRequest object itself
    req.xmlHttpRequest = AjaxRequest.getXmlHttpRequest();
    if (req.xmlHttpRequest==null) { return null; }

    // -------------------------------------------------------
    // Attach the event handlers for the XMLHttpRequest object
    // -------------------------------------------------------
    req.xmlHttpRequest.onreadystatechange =
        function() {
            if (req==null || req.xmlHttpRequest==null) { return; }
            if (req.xmlHttpRequest.readyState==1) { req.onLoadingInternal(req); }
            if (req.xmlHttpRequest.readyState==2) { req.onLoadedInternal(req); }
            if (req.xmlHttpRequest.readyState==3) { req.onInteractiveInternal(req); }
            if (req.xmlHttpRequest.readyState==4) { req.onCompleteInternal(req); }
        };

    // ---------------------------------------------------------------------------
    // Internal event handlers that fire, and in turn fire the user event handlers
    // ---------------------------------------------------------------------------
    // Flags to keep track if each event has been handled, in case of
    // multiple calls (some browsers may call the onreadystatechange
    // multiple times for the same state)
    req.onLoadingInternalHandled = false;
    req.onLoadedInternalHandled = false;
    req.onInteractiveInternalHandled = false;
    req.onCompleteInternalHandled = false;
    req.onLoadingInternal =
        function() {
            if (req.onLoadingInternalHandled) { return; }
            AjaxRequest.numActiveAjaxRequests++;
            if (AjaxRequest.numActiveAjaxRequests==1 && typeof(window['AjaxRequestBegin'])=="function") {
                AjaxRequestBegin();
            }
            if (req.groupName!=null) {
                if (typeof(AjaxRequest.numActiveAjaxGroupRequests[req.groupName])=="undefined") {
                    AjaxRequest.numActiveAjaxGroupRequests[req.groupName] = 0;
                }
                AjaxRequest.numActiveAjaxGroupRequests[req.groupName]++;
                if (AjaxRequest.numActiveAjaxGroupRequests[req.groupName]==1 && typeof(req.onGroupBegin)=="function") {
                    req.onGroupBegin(req.groupName);
                }
            }
            if (typeof(req.onLoading)=="function") {
                req.onLoading(req);
            }
            req.onLoadingInternalHandled = true;
        };
    req.onLoadedInternal =
        function() {
            if (req.onLoadedInternalHandled) { return; }
            if (typeof(req.onLoaded)=="function") {
                req.onLoaded(req);
            }
            req.onLoadedInternalHandled = true;
        };
    req.onInteractiveInternal =
        function() {
            if (req.onInteractiveInternalHandled) { return; }
            if (typeof(req.onInteractive)=="function") {
                req.onInteractive(req);
            }
            req.onInteractiveInternalHandled = true;
        };
    req.onCompleteInternal =
        function() {
            if (req.onCompleteInternalHandled || req.aborted) { return; }
            req.onCompleteInternalHandled = true;
            AjaxRequest.numActiveAjaxRequests--;
            if (AjaxRequest.numActiveAjaxRequests==0 && typeof(window['AjaxRequestEnd'])=="function") {
                AjaxRequestEnd(req.groupName);
            }
            if (req.groupName!=null) {
                AjaxRequest.numActiveAjaxGroupRequests[req.groupName]--;
                if (AjaxRequest.numActiveAjaxGroupRequests[req.groupName]==0 && typeof(req.onGroupEnd)=="function") {
                    req.onGroupEnd(req.groupName);
                }
            }
            req.responseReceived = true;
            req.status = req.xmlHttpRequest.status;
            req.statusText = req.xmlHttpRequest.statusText;
            req.responseText = req.xmlHttpRequest.responseText;
            req.responseXML = req.xmlHttpRequest.responseXML;
            if (typeof(req.onComplete)=="function") {
                req.onComplete(req);
            }
            if (req.xmlHttpRequest.status==200 && typeof(req.onSuccess)=="function") {
                req.onSuccess(req);
            }
            else if (typeof(req.onError)=="function") {
                req.onError(req);
            }

            // Clean up so IE doesn't leak memory
            delete req.xmlHttpRequest['onreadystatechange'];
            req.xmlHttpRequest = null;
        };
    req.onTimeoutInternal =
        function() {
            if (req!=null && req.xmlHttpRequest!=null && !req.onCompleteInternalHandled) {
                req.aborted = true;
                req.xmlHttpRequest.abort();
                AjaxRequest.numActiveAjaxRequests--;
                if (AjaxRequest.numActiveAjaxRequests==0 && typeof(window['AjaxRequestEnd'])=="function") {
                    AjaxRequestEnd(req.groupName);
                }
                if (req.groupName!=null) {
                    AjaxRequest.numActiveAjaxGroupRequests[req.groupName]--;
                    if (AjaxRequest.numActiveAjaxGroupRequests[req.groupName]==0 && typeof(req.onGroupEnd)=="function") {
                        req.onGroupEnd(req.groupName);
                    }
                }
                if (typeof(req.onTimeout)=="function") {
                    req.onTimeout(req);
                }
                // Opera won't fire onreadystatechange after abort, but other browsers do.
                // So we can't rely on the onreadystate function getting called. Clean up here!
                delete req.xmlHttpRequest['onreadystatechange'];
                req.xmlHttpRequest = null;
            }
        };

    // ----------------
    // Instance methods
    // ----------------
    /**
     * The process method is called to actually make the request. It builds the
     * querystring for GET requests (the content for POST requests), sets the
     * appropriate headers if necessary, and calls the
     * XMLHttpRequest.send() method
     */
    req.process =
        function() {
            if (req.xmlHttpRequest!=null) {
                // Some logic to get the real request URL
                if (req.generateUniqueUrl && req.method=="GET") {
                    req.parameters["AjaxRequestUniqueId"] = new Date().getTime() + "" + req.requestIndex;
                }
                var content = null; // For POST requests, to hold query string
                for (var i in req.parameters) {
                    if (req.queryString.length>0) { req.queryString += "&"; }
                    req.queryString += encodeURIComponent(i) + "=" + encodeURIComponent(req.parameters[i]);
                }
                if (req.method=="GET") {
                    if (req.queryString.length>0) {
                        req.url += ((req.url.indexOf("?")>-1)?"&":"?") + req.queryString;
                    }
                }
                req.xmlHttpRequest.open(req.method,req.url,req.async,req.username,req.password);
                if (req.method=="POST") {
                    if (typeof(req.xmlHttpRequest.setRequestHeader)!="undefined") {
                        req.xmlHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    }
                    content = req.queryString;
                }
                if (req.timeout>0) {
                    setTimeout(req.onTimeoutInternal,req.timeout);
                }
                req.xmlHttpRequest.send(content);
            }
        };

    /**
     * An internal function to handle an Object argument, which may contain
     * either AjaxRequest field values or parameter name/values
     */
    req.handleArguments =
        function(args) {
            for (var i in args) {
                // If the AjaxRequest object doesn't have a property which was passed, treat it as a url parameter
                if (typeof(req[i])=="undefined") {
                    req.parameters[i] = args[i];
                }
                else {
                    req[i] = args[i];
                }
            }
        };

    /**
     * Returns the results of XMLHttpRequest.getAllResponseHeaders().
     * Only available after a response has been returned
     */
    req.getAllResponseHeaders =
        function() {
            if (req.xmlHttpRequest!=null) {
                if (req.responseReceived) {
                    return req.xmlHttpRequest.getAllResponseHeaders();
                }
                alert("Cannot getAllResponseHeaders because a response has not yet been received");
            }
        };

    /**
     * Returns the the value of a response header as returned by
     * XMLHttpRequest,getResponseHeader().
     * Only available after a response has been returned
     */
    req.getResponseHeader =
        function(headerName) {
            if (req.xmlHttpRequest!=null) {
                if (req.responseReceived) {
                    return req.xmlHttpRequest.getResponseHeader(headerName);
                }
                alert("Cannot getResponseHeader because a response has not yet been received");
            }
        };

    return req;
}

// ---------------------------------------
// Static methods of the AjaxRequest class
// ---------------------------------------

/**
 * Returns an XMLHttpRequest object, either as a core object or an ActiveX
 * implementation. If an object cannot be instantiated, it will return null;
 */
AjaxRequest.getXmlHttpRequest = function() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        // Based on http://jibbering.com/2002/4/httprequest.html
        /*@cc_on @*/
        /*@if (@_jscript_version >= 5)
         try {
         return new ActiveXObject("Msxml2.XMLHTTP");
         } catch (e) {
         try {
         return new ActiveXObject("Microsoft.XMLHTTP");
         } catch (E) {
         return null;
         }
         }
         @end @*/
    }
    else {
        return null;
    }
};

/**
 * See if any request is active in the background
 */
AjaxRequest.isActive = function() {
    return (AjaxRequest.numActiveAjaxRequests>0);
};

/**
 * Make a GET request. Pass an object containing parameters and arguments as
 * the second argument.
 * These areguments may be either AjaxRequest properties to set on the request
 * object or name/values to set in the request querystring.
 */
AjaxRequest.get = function(args) {
    AjaxRequest.doRequest("GET",args);
};

/**
 * Make a POST request. Pass an object containing parameters and arguments as
 * the second argument.
 * These areguments may be either AjaxRequest properties to set on the request
 * object or name/values to set in the request querystring.
 */
AjaxRequest.post = function(args) {
    AjaxRequest.doRequest("POST",args);
};

/**
 * The internal method used by the .get() and .post() methods
 */
AjaxRequest.doRequest = function(method,args) {
    if (typeof(args)!="undefined" && args!=null) {
        var myRequest = new AjaxRequest();
        myRequest.method = method;
        myRequest.handleArguments(args);
        myRequest.process();
    }
}  ;

/**
 * Submit a form. The requested URL will be the form's ACTION, and the request
 * method will be the form's METHOD.
 * Returns true if the submittal was handled successfully, else false so it
 * can easily be used with an onSubmit event for a form, and fallback to
 * submitting the form normally.
 */
AjaxRequest.submit = function(theform, args) {
    var myRequest = new AjaxRequest();
    if (myRequest==null) { return false; }
    var serializedForm = AjaxRequest.serializeForm(theform);
    myRequest.method = theform.method.toUpperCase();
    myRequest.url = theform.action;
    myRequest.handleArguments(args);
    myRequest.queryString = serializedForm;
    myRequest.process();
    return true;
};

/**
 * Serialize a form into a format which can be sent as a GET string or a POST
 * content.It correctly ignores disabled fields, maintains order of the fields
 * as in the elements[] array. The 'file' input type is not supported, as
 * its content is not available to javascript. This method is used internally
 * by the submit class method.
 */
AjaxRequest.serializeForm = function(theform) {
    var els = theform.elements;
    var len = els.length;
    var queryString = "";
    this.addField =
        function(name,value) {
            if (queryString.length>0) {
                queryString += "&";
            }
            queryString += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        };
    for (var i=0; i<len; i++) {
        var el = els[i];
        if (!el.disabled) {
            switch(el.type) {
                case 'text': case 'password': case 'hidden': case 'textarea':
                this.addField(el.name,el.value);
                break;
                case 'select-one':
                    if (el.selectedIndex>=0) {
                        this.addField(el.name,el.options[el.selectedIndex].value);
                    }
                    break;
                case 'select-multiple':
                    for (var j=0; j<el.options.length; j++) {
                        if (el.options[j].selected) {
                            this.addField(el.name,el.options[j].value);
                        }
                    }
                    break;
                case 'checkbox': case 'radio':
                if (el.checked) {
                    this.addField(el.name,el.value);
                }
                break;
            }
        }
    }
    return queryString;
};

// -----------------------
// Static Class variables
// -----------------------

/**
 * The number of total AjaxRequest objects currently active and running
 */
AjaxRequest.numActiveAjaxRequests = 0;

/**
 * An object holding the number of active requests for each group
 */
AjaxRequest.numActiveAjaxGroupRequests = new Object();

/**
 * The total number of AjaxRequest objects instantiated
 */
AjaxRequest.numAjaxRequests = 0;
var getWxIcon = function(skyCode){
    var config = {
        basePath: '/assets/wxicon/',
        pngPath: 'png/',
        svgPath: 'svg/',
        svgzPath: 'svgz/',
        allowSVG: true,
        useSVGz : false
    };

// document.implementation Method
    if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
        config.allowSVG = true;
    } else {
        config.allowSVG = false;
    }

    var iconCodeMap = {
        'tornado': ['0', '00'],
        'tropical-storm': ['1', '01', '2', '02'],
        'thunderstorm': ['3', '03', '4', '04'],
        'rain-snow': ['5', '05', '7', '07'],
        'rain-hail': ['6', '06', '10', '35'],
        'freezing-drizzle': ['8', '08'],
        'scattered-showers': ['9', '09', '11', '39'],
        'rain': ['12'],
        'flurries': ['13'],
        'snow': ['14', '16'],
        'blowing-snow': ['15', '25'],
        'hail': ['17', '18'],
        'fog': ['19', '20', '21', '22'],
        'wind': ['23', '24'],
        'cloudy': ['26'],
        'mostly-cloudy-night': ['27'],
        'mostly-cloudy': ['28'],
        'partly-cloudy-night': ['29'],
        'partly-cloudy': ['30'],
        'clear-night': ['31'],
        'sunny': ['32', '36'],
        'mostly-clear-night': ['33'],
        'mostly-sunny': ['34'],
        'isolated-thunderstorms': ['37'],
        'scattered-thunderstorms': ['38'],
        'heavy-rain': ['40'],
        'scattered-snow': ['41'],
        'heavy-snow': ['42', '43'],
        'na': ['-', '44', 'na'],
        'scattered-showers-night': ['45'],
        'scattered-snow-night': ['46'],
        'scattered-thunderstorms-night': ['47']
    };
    function getImageType(forcePNG) {
        return !forcePNG ? (config.useSVGz ? '.svgz' : '.svg') : '.png';
    };
    function getImagePath(forcePNG) {
        var iconPath = !forcePNG ? (config.useSVGz ? config.svgzPath : config.svgPath) : config.pngPath;
        return config.basePath + iconPath;
    };
    function getIconName() {
        var iconName;
        if (helper.isNumeric(skyCode) && skyCode >= 0 && skyCode <= 47) {
            for(var key in iconCodeMap){
                if(iconCodeMap[key].indexOf(skyCode.toString()) !== -1){
                    iconName = key;
                }
            }
        } else {
            iconName = 'na';
        }

        // iconName += '-optimized';
        return iconName;
    };
    function getIconUrl() {
        var forcePNG = !config.allowSVG;
        return getImagePath(forcePNG) + getIconName(skyCode, (!forcePNG)) + getImageType(forcePNG) + '?1';
    };

    var markup = '<div class="svg-icon">';
    markup += '<img src="' + getIconUrl() + '" />';
    markup += '</div>';
    return markup;
}


var helper = {};

helper.loadTemplate = function(elementId, type, name){
    var path = '/templates/' + type + '/' + name + '/' + name + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
    //Then load the js

    var body = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/templates/' + type + '/' + name + '/' + name + '.js';

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = name + 'Run';
    script.onload = name + 'Run';

    // Fire the loading
    body.appendChild(script);
};

helper.setContent = function(content){
    var assignToDOM = function(arr){
        document.getElementById(arr[0]).innerHTML = arr[1];
    };
    if(typeof content === 'object'){
        for(var x=0; x < content.length; x++){
            assignToDOM(content[x]);
        }
    }
};

helper.empty = function(divId){
    document.getElementById(divId).innerHTML = '';
};

// helper.ngRepeat('vertical-wx-row', 'components', 'vertical-wx-row', ngRepeatMap, _Data.hourly, 6);
helper.ngRepeat = function(divId, componentName, dataMap, data, multiplier){
    multiplier = multiplier === 'all' ? dataMap.length : multiplier;
    var path = 'https://' + window.location.hostname + '/templates/components/' + componentName + '/' + componentName + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var classXes = '', x = 0, i = 0, j = 0 ;
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var rawTemplate = xhr.responseText;
            //put the template in x times.
            for(x=0; x < multiplier; x++){
                document.getElementById(divId).innerHTML += rawTemplate;
            }
            //for each item in the map, get all the elements with that class.
            for(i=0; i < dataMap.length; i++){
                classXes = document.getElementsByClassName(dataMap[i][0]);
                //for each element, place its piece of data in it.
                for(j=0; j < classXes.length; j++){

                    if(dataMap[i][1] === 'icon'){
                        classXes[j].innerHTML = getWxIcon(data[dataMap[i][1]][j]);
                    } else {
                        classXes[j].innerHTML = data[dataMap[i][1]][j];
                    }
                }
            }

        }
    };
    xhr.send();


};

helper.ngRepeatReverse = function(divId, componentName, dataMap, data, multiplier){
    multiplier = multiplier === 'all' ? dataMap.length : multiplier;
    var path = 'templates/components/' + componentName + '/' + componentName + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var classXes = '', x = 0, i = 0, j = 0 ;
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var rawTemplate = xhr.responseText;
            //put the template in x times.
            for(x=0; x < multiplier; x++){
                document.getElementById(divId).innerHTML += rawTemplate;
            }
            //for each item in the map, get all the elements with that class.
            for(i=0; i < dataMap.length; i++){
                classXes = document.getElementsByClassName(dataMap[i][0]);
                //for each element, place its piece of data in it.
                for(j=0; j < classXes.length; j++){
                    classXes[j].innerHTML = data[j][dataMap[i][1]];
                }
            }

        }
    };
    xhr.send();
};

helper.isNumeric = function(num){
    return typeof num === 'number' && num !== 'NaN';
};

// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = helper;
}
/**
 * Created by omkard on 6/5/16.
 */

var downArrayClicked = false;
var categories = [{"catName":"Americas","countryName":[
                                                    // {"name":"USA","code":"EN"},
                                                    // {"name":"USA (Spanish)","code":"ES"},
                                                    {"name":"Antigua and Barbuda","code":""},
                                                    {"name":"Argentina","code":""},
                                                    {"name":"Bahamas","code":""},
                                                    {"name":"Barbados","code":""},
                                                    {"name":"Belize","code":""},
                                                    {"name":"Bolivia","code":""},
                                                    {"name":"Brazil","code":""},
                                                    {"name":"Canada","code":"EN"},
                                                    {"name":"Canada","code":"FR"},
                                                    {"name":"Chile","code":""},
                                                    {"name":"Colombia","code":""},
                                                    {"name":"Costa Rica","code":""},
                                                    {"name":"Dominica","code":""},
                                                    {"name":"Dominican Republic","code":""},
                                                    {"name":"Ecuador","code":""},
                                                    {"name":"El Salvador","code":""},
                                                    {"name":"Grenada","code":""},
                                                    {"name":"Guatemala","code":""},
                                                    {"name":"Guyana","code":""},
                                                    {"name":"Haiti","code":""},
                                                    {"name":"Honduras","code":""},
                                                    {"name":"Jamaica","code":""},
                                                    {"name":"Mexico","code":""},
                                                    {"name":"Nicaragua","code":""},
                                                    {"name":"Panama","code":""},
                                                    {"name":"Panama","code":""},
                                                    {"name":"Paraguay","code":""},
                                                    {"name":"Peru","code":""},
                                                    {"name":"St. Kitts and Nevis","code":""},
                                                    {"name":"St. Lucia","code":""},
                                                    {"name":"St. Vincent and the Grenadines","code":""},
                                                    {"name":"Suriname","code":""},
                                                    {"name":"Trinidad and Tobago","code":""},
                                                    {"name":"Uruguay","code":""},
                                                    {"name":"Venezuela","code":""}]},
                {"catName":"Africa","countryName":[{"name":"Algeria","code":""},
                                                    {"name":"Algeria","code":""},
                                                    {"name":"Benin","code":""},
                                                    {"name":"Burkina Faso", "code":""},
                                                    {"name":"Burundi", "code":""},
                                                    {"name":"Cameroon", "code":""},
                                                    {"name":"Cameroon", "code":""},
                                                    {"name":"Cape Verde", "code":""},
                                                    {"name":"Central African Republic", "code":""},
                                                    {"name":"Chad","code":""},
                                                    {"name":"Chad", "code":""},
                                                    {"name":"Chile", "code":""},
                                                    {"name":"Comoros", "code":""},
                                                    {"name":"Comoros", "code":""},
                                                    {"name":"Congo, Democratic Republic of the", "code":""},
                                                    {"name":"Congo, Republic of", "code":""},
                                                    {"name":"Costa Rica", "code":""},
                                                    {"name":"Côte d'Ivoire", "code":""},
                                                    {"name":"Djibouti","code":""},
                                                    {"name":"Djibouti", "code":""},
                                                    {"name":"Egypt", "code":""},
                                                    {"name":"Equatorial Guinea", "code":""},
                                                    {"name":"Eritrea", "code":""},
                                                    {"name":"Gabon", "code":""},
                                                    {"name":"Gambia", "code":""},
                                                    {"name":"Ghana","code":""},
                                                    {"name":"Guinea", "code":""},
                                                    {"name":"Guinea-Bissau", "code":""},
                                                    {"name":"Kenya", "code":""},
                                                    {"name":"Lesotho", "code":""},
                                                    {"name":"Liberia", "code":""},
                                                    {"name":"Libya", "code":""},
                                                    {"name":"Madagascar", "code":""},
                                                    {"name":"Mali","code":""},
                                                    {"name":"Mauritania", "code":""},
                                                    {"name":"Mauritius", "code":""},
                                                    {"name":"Mauritius", "code":""},
                                                    {"name":"Morocco", "code":""},
                                                    {"name":"Morocco", "code":""},
                                                    {"name":"Mozambique", "code":""},
                                                    {"name":"Namibia","code":""},
                                                    {"name":"Niger", "code":""},
                                                    {"name":"Nigeria", "code":""},
                                                    {"name":"Rwanda", "code":""},
                                                    {"name":"Rwanda", "code":""},
                                                    {"name":"São Tomé and Príncipe", "code":""},
                                                    {"name":"Senegal", "code":""},
                                                    {"name":"Sierra Leone","code":""},
                                                    {"name":"Somalia", "code":""},
                                                    {"name":"South Africa", "code":""},
                                                    {"name":"South Sudan", "code":""},
                                                    {"name":"Sudan", "code":""},
                                                    {"name":"Swaziland", "code":""},
                                                    {"name":"Tanzania", "code":""},
                                                    {"name":"Tunisia","code":""},
                                                    {"name":"Uganda", "code":""}]},
                {"catName":"Asia Pacific","countryName":[{"name":"Australia","code":""},
                                                    {"name":"Bangladesh","code":""},
                                                    {"name":"Brunei","code":""},
                                                    {"name":"China", "code":""},
                                                    {"name":"China", "code":""},
                                                    {"name":"East Timor", "code":""},
                                                    {"name":"Fiji", "code":""},
                                                    {"name":"India (English)", "code":""},
                                                    {"name":"India (Hindi)", "code":""},
                                                    {"name":"Indonesia", "code":""},
                                                    {"name":"Japan", "code":""},
                                                    {"name":"Kiribati", "code":""},
                                                    {"name":"Korea, North", "code":""},
                                                    {"name":"Korea", "code":""},
                                                    {"name":"Kyrgyzstan", "code":""},
                                                    {"name":"Laos", "code":""},
                                                    {"name":"Malaysia", "code":""},
                                                    {"name":"Marshall Islands", "code":""},
                                                    {"name":"Micronesia", "code":""},
                                                    {"name":"New Zealand", "code":""},
                                                    {"name":"Palau", "code":""},
                                                    {"name":"Philippines", "code":""},
                                                    {"name":"Philippines", "code":""},
                                                    {"name":"Samoa", "code":""},
                                                    {"name":"Singapore", "code":""},
                                                    {"name":"Singapore", "code":""},
                                                    {"name":"Solomon Islands", "code":""},
                                                    {"name":"Taiwan", "code":""},
                                                    {"name":"Thailand", "code":""},
                                                    {"name":"Tonga", "code":""},
                                                    {"name":"Tuvalu", "code":""},
                                                    {"name":"Vanuatu", "code":""},
                                                    {"name":"Vanuatu", "code":""},
                                                    {"name":"Vietnam", "code":""}]},
                  {"catName":"Europe","countryName":[{"name":"Andorra","code":""},
                                                      {"name":"Andorra","code":""},
                                                      {"name":"Angola","code":""},
                                                      {"name":"Austria","code":""},
                                                      {"name":"Belarus","code":""},
                                                      {"name":"Belgium","code":""},
                                                      {"name":"Belgium","code":""},
                                                      {"name":"Bosnia and Herzegovina","code":""},
                                                      {"name":"Croatia","code":""},
                                                      {"name":"Cyprus","code":""},
                                                      {"name":"Czech Republic","code":""},
                                                      {"name":"Denmark","code":""},
                                                      {"name":"Estonia","code":""},
                                                      {"name":"Finland","code":""},
                                                      {"name":"France","code":""},
                                                      // {"name":"Germany","code":""},
                                                      {"name":"Greece","code":""},
                                                      {"name":"Hungary","code":""},
                                                      {"name":"Iceland","code":""},
                                                      {"name":"Iceland","code":""},
                                                      {"name":"Ireland","code":""},
                                                      {"name":"Italy","code":""},
                                                      {"name":"Latvia","code":""},
                                                      {"name":"Liechtenstein","code":""},
                                                      {"name":"Luxembourg","code":""},
                                                      {"name":"Malta","code":""},
                                                      {"name":"Monaco","code":""},
                                                      {"name":"Netherlands","code":""},
                                                      {"name":"Norway","code":""},
                                                      {"name":"Poland","code":""},
                                                      {"name":"Portugal","code":""},
                                                      {"name":"Romania","code":""},
                                                      {"name":"Russia","code":""},
                                                      {"name":"San Marino","code":""},
                                                      {"name":"Slovakia","code":""},
                                                      {"name":"Spain (Spanish)","code":""},
                                                      {"name":"Spain (Catalan)","code":""},
                                                      {"name":"Sweden","code":""},
                                                      {"name":"Switzerland","code":""},
                                                      {"name":"Turkey","code":""},
                                                      {"name":"Ukraine","code":""},
                                                      // {"name":"United Kingdom","code":""},
                                                      {"name":"Vatican City (Holy See)","code":""}]},
                  {"catName":"Middle East","countryName":[{"name":"Bahrain","code":""},
                                                      {"name":"Iran","code":""},
                                                      {"name":"Iraq","code":""},
                                                      {"name":"Israel","code":""},
                                                      {"name":"Jordan","code":""},
                                                      {"name":"Kazakhstan","code":""},
                                                      {"name":"Kuwait","code":""},
                                                      {"name":"Lebanon","code":""},
                                                      {"name":"Oman","code":""},
                                                      {"name":"Pakistan","code":""},
                                                      {"name":"Pakistan","code":""},
                                                      {"name":"Qatar","code":""},
                                                      {"name":"Saudi Arabia","code":""},
                                                      {"name":"Syria","code":""},
                                                      {"name":"United Arab Emirates","code":""}]}];

/**
 * showMainMenu() shows the hamburger menu when clicked
 */

function showMainMenu() {
    var pwaHeader = document.getElementById('pwa-header');
    if(pwaHeader.className.match('.pwa-header-active')){
        pwaHeader.className = 'header';
        showHide('main-search', 0);
    }
    //Displays the main menu page which was hidden
    showHide('main-nav', 1);
    //Displays only the current-location div and hides all other layouts
    showHide('loc-layout',1);
    showHide('category-layout',0);
    showHide('areas-layout',0);

}
/**
 * showMainSearch() shows the Search layout
 */
function showMainSearch() {
    var pwaHeader = document.getElementById('pwa-header');
    if(pwaHeader.className.match('.pwa-header-active')){
        pwaHeader.className = 'header';
        showHide('main-search', 0);
    }else{
        pwaHeader.className += ' pwa-header-active';
        showHide('main-search', 1);
        showHide('saved-results', 1);
        document.getElementById('search').value = '';
        showHide('search-results', 0);
    }

    helper.empty('recently-searched');
    var container = document.getElementById('recently-searched');
    for(var i in _User.locations){
        container.innerHTML += '<li class="results"><a onclick="javascript:searchResultsClicked(this, ' + _User.locations[i].lat + ', ' + _User.locations[i].long + ', false)" class="dropdown-name">' + _User.locations[i].prsntNm + '</a></li>';
    }
}

/**
 * searchResults() shows the search results layout
 */

function searchResults() {
    var currentValue = document.getElementById('search').value;
    if(currentValue === '' || currentValue.length <= 3 ) {
        showHide('saved-results', 1);
        showHide('search-results', 0);
    } else {
        showHide('saved-results', 0);
        showHide('search-results', 1);
        var searchResults = lookupLocations(currentValue);
        if(_Locations.results !== undefined) {
            var cityList = '';
            for (i=0; i<_Locations.results.length; i++ ) {
                var latLongArray = _Locations.results[i].geocode.split(',');
                cityList += '<li class="results"><a class="name" onclick="searchResultsClicked(this, ' +latLongArray[0] + ',' + latLongArray[1] + ', true)"> '+_Locations.results[i].cityNm+', '+_Locations.results[i].stCd+'  </a></li>';
            }
            document.getElementById('search-results-list').innerHTML = cityList;
        }
    }

}



function searchResultsClicked(ele, lat, long, updateList) {
    var pwaHeader = document.getElementById('pwa-header');
    if(pwaHeader.className.match('.pwa-header-active')){
        pwaHeader.className = 'header';
        showHide('main-search', 0);
    }
    document.getElementById('activeLocName').innerHTML = ele.innerHTML;
    _User.newActiveLocation({
        lat     : lat,
        long    : long,
        prsntNm : ele.innerHTML
    }, updateList);
    hideMainSearch();
}

/**
 * clearSearch() clears the text entered in the search box
 */

function clearSearch() {
    showHide('saved-results', 1);
    document.getElementById('search').value = '';
    showHide('search-results', 0);
}

/**
 * hideMainMenu() hides the main menu and display the home page
 */

function hideMainMenu() {
    showHide('main-nav', 0);
}

/**
 * hideMainSearch() hides the search box and displays the home page
 */
function hideMainSearch() {
    showHide('main-search', 0);
}

/**
 * showTemperature(ele) is used to change the temperature units
 * @param ele
 */

function showTemperature(ele) {
    if(!ele.className.match('active')) {
        var tempElements = document.getElementsByClassName('temp-red');
        for(i=0;i<tempElements.length;i++) {
            tempElements[i].className = "temp-red";
        }
        ele.className += ' active';
        if(ele.innerHTML === '°C'){
            _User.setUnitPreference('m');
            _Metrics.clickTrack(ele, _Router.page, 'menu', 'celsius');
        } else {
            _User.setUnitPreference('e');
            _Metrics.clickTrack(ele, _Router.page, 'menu', 'fahrenheit');
        }
    }

}


function pwaNavClicked(e) {
    var windowWidth = window.innerWidth;
    var clientWidth = e.clientX;
    var pwaUlwidth = document.getElementsByClassName('menubar')[0].clientWidth;
    var thirtyPercentVal = 0.3 * windowWidth;
    var seventyPercentVal = 0.7 * windowWidth;
    if(clientWidth < thirtyPercentVal){
        document.getElementsByClassName('nav-suite')[0].scrollLeft =  '0';
    }else if(clientWidth > seventyPercentVal) {
        document.getElementsByClassName('nav-suite')[0].scrollLeft = pwaUlwidth - windowWidth;
    }
}

/**
 * changeNav(ele) is used to changes the nav pages
 * @param ele
 */
function changeNav(ele) {
    document.getElementById('main-search').style.display = "none";
    if(!ele.className.match('active')) {
        var tempElements = document.getElementsByClassName('page-nav-li');
        for(i=0;i<tempElements.length;i++) {
            tempElements[i].className = "page-nav-li";
        }
        ele.className += ' active';
    }
    _Router.changePage(ele.textContent);
}

/**
 * showLocations() shows the location selected layout
 */
function showLocations() {
    showHide('loc-layout',1);
    showHide('category-layout',0);
    showHide('areas-layout',0);
}

/**
 * showCategories() shows the categories of languages
 */

function showCategories() {
    var categoryHTML = '';
    for(c = 0; c < categories.length; c++){
        categoryHTML += '<li ><a href="#" onclick="showAreas(this,'+ c +')"><span >'+categories[c].catName+'</span> <span class="wx-iconfont-global wx-icon-arrow-right wx-icon-small"></span></a></li>';
    }
    document.getElementById('lang-categories').innerHTML = categoryHTML;
    showHide('loc-layout',0);
    showHide('category-layout',1);
    showHide('areas-layout',0);
}

/**
 * showAreas(ele) selects the language
 * @param ele
 */
function showAreas(ele,rowId ) {
    var languageHTML = '';
    for(l=0; l< categories[rowId].countryName.length; l++){
        languageHTML += '<li><a href="#"><span> '+categories[rowId].countryName[l].name+' </span> <span>'+categories[rowId].countryName[l].code+'</span> </a></li>';
    }
    document.getElementById('country-languages').innerHTML = languageHTML;
    document.getElementById('area-value').innerHTML = ele.innerHTML;
    showHide('loc-layout',0);
    showHide('category-layout',0);
    showHide('areas-layout',1);
}

/**
 * showHide() takes the element and shows it or hides it based on the value
 * 0 - hide
 * 1 - display
 * @param element
 * @param show
 */
function showHide(element, show) {
    if(show === 0) {
        document.getElementById(element).style.display = 'none';
    } else {
        document.getElementById(element).style.display = 'block';
    }
}

function lookupLocations(term){
    if(term && term.length && term.length > 3){
        _Locations.searchLocs(term);
    }
}

/*  This is triggered when we have location results from the term in the above function */
/*
document.getElementById('event-anchor').addEventListener('builder-locations', function(){
    console.log(_Locations.results);
});
*/
function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
/*
function showPosition(position){
    console.log(position);
} */
/**
 * showRecentlySearched() shows and hides the drop down recent search list
 * and fills in the drop down with recently searched items.
 */

var recentLocsMap = [
    ['dropdown-name', 'prsntNm']
];

function showRecentlySearched(){
    //Show the dropdown to recently searched locations.
    if(downArrayClicked === false) {
        showHide('drop-down-array-list', 1);
        downArrayClicked = true;
    }else{
        showHide('drop-down-array-list', 0);
        downArrayClicked=false;
    }
}

document.getElementById('event-anchor').addEventListener('builder', function(){
    var dataAssignment = [
        ['activeLocTemp',        _Data.obs.temperature],
        ['activeLocName',  _User.activeLocation.prsntNm]
    ];
    helper.setContent(dataAssignment);
});






/*
  Properties and Defaults
 */

var _User = {
    loggedIn : false,
    unitPref : 'e',
    lang : 'en-US',
    locations: [],
    activeLocation : {
        lat : '',
        long : '',
        prsntNm : ''
    }
};

/*
  Saved Values
*/

var savedPco = window.localStorage.jStorage ? JSON.parse(window.localStorage.jStorage) : {};

_User.loggedIn = savedPco.profile && savedPco.profile.userid ? true : false;
_User.webPush = savedPco.products && savedPco.products.WebPushNotifications ? savedPco.products.WebPushNotifications : {};
/*
{
    PushStatus : "NoPushNotification"
    timeStamp : "2016-06-10T22:33:29.140Z"
 }
 */
_User.locations = savedPco.user && savedPco.user.recentSearchLocations ? savedPco.user.recentSearchLocations : [];
_User.lang = savedPco.user && savedPco.user.locale ? savedPco.user.locale.replace('_', '-') : 'en-US';
_User.unitPref = savedPco.user && savedPco.user.unit ? savedPco.user.unit : 'e';

if(window.localStorage._Stored_User){
    _User = JSON.parse(window.localStorage._Stored_User);
} else {
    window.localStorage._Stored_User = JSON.stringify(_User);
}


if(!_User.activeLocation.prsntNm && _User.locations.length > 0){
    _User.activeLocation = _User.locations[0];
}

/*
  Internal Functions
 */

var saveUser = function(){
    window.localStorage._Stored_User = JSON.stringify(_User);
    savedPco.products = savedPco.products ? savedPco.products : {};
    savedPco.products.WebPushNotifications = _User.webPush;
    window.localStorage.jStorage = JSON.stringify(savedPco);
    _Data.collectNew();
};

/*
  Class Methods
*/


_User.setLanguage = function(language){
    _User.lang = language;
    saveUser();
};

_User.setUnitPreference = function(unit){
    _User.unitPref = unit;
    saveUser();
};

_User.addLocation = function(locationObj){
    _User.locations.push(locationObj);
    saveUser();
};

_User.newActiveLocation = function(locationObj, updateRecents){
    if(_User.activeLocation.prsntNm && updateRecents) {
        _User.locations.push(_User.activeLocation);
    }
    _User.activeLocation = locationObj;

    saveUser();
};

_User.updatePushNotifications = function(answer){
    if(answer){
        _User.webPush = {
            PushStatus : "confirmNotification",
            timeStamp : new Date().toISOString()
        };
    } else {
        _User.webPush = {
            PushStatus : "noPushNotification",
            timeStamp : new Date().toISOString()
        };
    }
    saveUser();
};


var _Locations = {};
(function(){

var eventLocations = document.createEvent('Event');
eventLocations.initEvent('builder-locations', true, true);

_Locations.searchLocs = function(term){
    var getLocUrl = 'https://dsx.weather.com/x/v2/web/loc/en_US/1/4/5/9/11/13/19/21/1000/1001/1003//us%5E/(' +
        term + ')?api=7bb1c920-7027-4289-9c96-ae5e263980bc';
    AjaxRequest.get(
        {
            'url' : getLocUrl,
            'generateUniqueUrl' : false,
            'onSuccess':function(req){
                var data = JSON.parse(req.responseText);
                _Locations.results =  data[0].doc ? data[0].doc : [];
                document.getElementById('event-anchor').dispatchEvent(eventLocations);
            }
        }
    );
};

_Locations.getGeoCoordinates = function(position){
    if(position && position.coords) {
        var coords = position.coords;
        var lat = coords.latitude.toFixed(2);
        var long = coords.longitude.toFixed(2);

        var locUrl = 'https://dsx.weather.com/wxd/loc/' +
            lat + ',' +
            long + '?format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

        AjaxRequest.get(
            {
                'url' : locUrl,
                'generateUniqueUrl' : false,
                'onSuccess':function(req){
                    console.log(req);
                    _User.newActiveLocation(JSON.parse(req.responseText));
                }
            }
        );

    }
};

_Locations.callGeoLocation = function(){  console.log('called');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(_Locations.getGeoCoordinates);
    }
};

//   If a user does not have a default location, let's try to geolocate them
setTimeout(function(){
    if (!_User.activeLocation.prsntNm) {
       _Locations.callGeoLocation();
    }
}, 100);

})();

var _Router = {};
(function(){
    _Router = {
        page : ''
    };

    var pageAssignment = {
        'today'   : {
            name       : 'today',
            metricName : 'today-forecast',
            title      : 'Your Current Conditions',
            pos        : '1'
        },
        'hourly'  : {
            name       : 'hourly',
            metricName : 'hourly-forecast',
            title      : 'Your Hourly Forecast',
            pos        : '2'
        },
        'fiveday'   : {
            name       : 'fiveday',
            metricName : '5day-forecast',
            title      : 'Your Five Day Forecast',
            pos        : '3'
        },
        'tenday'   : {
            name       : 'tenday',
            metricName : '10day-forecast',
            title      : 'Your Ten Day Forecast',
            pos        : '4'
        },
        'weekend' : {
            name       : 'weekend',
            metricName : 'weekend-forecast',
            title      : 'Your Weekend Forecast',
            pos        : '5'
        },
        'map' : {
            name        : 'map',
            metricName  : 'map',
            title       : 'Your Radar Map',
            pos         : '6'
        }
    };
    var urlParams = '', loc, urlPush;
    var changeTo = '', lis;
    _Router.changePage = function(page){
        lis = document.getElementsByClassName('page-nav-li');
        for(var i=0; i < lis.length; i++){
            lis[i].className = lis[i].className.replace('active', '');
        }
        document.getElementsByClassName('page-nav-li ' + page)[0].className += ' active';
        changeTo = page;
        if(_Router.page !== changeTo){
            if(!_Router.page){
                _Router.page = 'today';
            }
            _Metrics.pageLoad(pageAssignment[_Router.page].metricName, pageAssignment[changeTo].metricName, pageAssignment[page].pos);
            _Router.page = changeTo;

            helper.loadTemplate('page-content', 'pages', changeTo);
            document.title = pageAssignment[page].title;
            loc = _User.activeLocation.lat ? _User.activeLocation.lat + ','+  _User.activeLocation.long : '';
            urlPush = '/weather/' + changeTo + '/l/' + loc;
            if(urlParams){
                urlPush += urlParams;
            }
            history.pushState({changeTo:page}, page, urlPush);
        }
    };


    var pathArr = [];
    var handlePath = function(){
        if(window.location.search){
            urlParams = window.location.search;
        } else {
            urlParams = '';
        }
        if(history.state && history.state.changeTo){
            _Router.changePage(history.state.changeTo);
        } else {
            if(window.location.pathname === '/'){
                _Router.changePage('today');
            } else {
                pathArr = window.location.pathname.split('/');
                if(pageAssignment[pathArr[2]]){
                    _Router.changePage(pathArr[2]);
                } else {
                    _Router.changePage('today');
                }
            }
            //Else, its not a valid URL.  We should probably 404 on this.
        }
    };
    //Handles Onload checking.
    handlePath();

    window.onpopstate = function(){
       handlePath();
    };

})();


/**
 * Created by ecook on 6/14/16.
 */
var _WXICON = {
    '00' : 'tornado',
    '01' : 'tropical-storm',
    '02' : 'tropical-storm',
    '03' : 'thunderstorm',
    '04' : 'thunderstorm',
    '05' : 'rain-snow',
    '06' : 'precip-wintry-mix',
    '07' : 'precip-wintry-mix',
    '08' : 'freezing-drizzle',
    '09' : 'light-rain',
    '10' : 'freezing-drizzle',
    '11' : 'rain',
    '12' : 'rain',
    '13' : 'flurries',
    '14' : 'snow',
    '15' : 'blowing-snow',
    '16' : 'snow',
    '17' : 'hail',
    '18' : 'precip-wintry-mix',
    '19' : 'fog',
    '20' : 'fog',
    '21' : 'fog',
    '22' : 'fog',
    '23' : 'wind',
    '24' : 'wind',
    '25' : 'sunny',
    '26' : 'cloudy',
    '27' : 'mostly-cloudy',
    '28' : 'mostly-cloudy',
    '29' : 'partly-cloudy',
    '30' : 'partly-cloudy',
    '31' : 'sunny',
    '32' : 'sunny',
    '33' : 'sunny',
    '34' : 'sunny',
    '35' : 'rain-hail',
    '36' : 'sunny',
    '37' : 'thunderstorm',
    '38' : 'thunderstorm',
    '39' : 'rain',
    '40' : 'rain',
    '41' : 'snow',
    '42' : 'snow',
    '43' : 'blowing-snow',
    '44' : 'na',
    '45' : 'rain',
    '46' : 'snow',
    '47' : 'thunderstorm'
};
var _Data = {}, app = {};
(function() {
    var dataUrl = "https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1pollenforecast;vt1dailyForecast;vt1observation;vt1alerts?units=" +
        _User.unitPref +
        '&language=' + _User.lang +
        '&geocode=' +
        _User.activeLocation.lat + ',' + _User.activeLocation.long +
        '&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';
    var dataAstroUrl = '';
    var eventData = document.createEvent('Event');
    var eventAstroData = document.createEvent('Event');
    eventAstroData.initEvent('astro-builder', true, true);
    eventData.initEvent('builder', true, true);


    _Data.collectNew = function () {
        app.hasRequestPending = true;
        if ('caches' in window) {
            console.log(caches);
            caches.match(dataUrl).then(function (response) {
                if (response) {
                    response.json().then(function (json) {
                        console.log(json);
                        // Only update if the XHR is still pending, otherwise the XHR
                        // has already returned and provided the latest data.
                        if (app.hasRequestPending) {
                            console.log('updated from cache');
                            json.key = key;
                            json.label = label;
                            //app.updateForecastCard(json);
                        }
                    });
                }
            });
        }

        AjaxRequest.get({
                'url': dataUrl,
                'generateUniqueUrl': false,
                'onSuccess': function (req) {

                    var data = JSON.parse(req.responseText);
                    _Data.obs = data.vt1observation;
                    _Data.datetime = data.vt1currentdatetime;
                    _Data.dailyForecast = data.vt1dailyForecast;
                    _Data.pollenforecast = data.vt1pollenforecast;
                    _Data.precipitation = data.vt1precipitation;
                    _Data.fifteen = data.vt1fifteenminute;
                    _Data.hourly = data.vt1hourlyForecast;
                    massageData();
                    document.getElementById('event-anchor').dispatchEvent(eventData);
                    app.hasRequestPending = false;
        }, 'onError' : function(err) {
                console.log(err);
            }
        });
    };
    if (_User.activeLocation.prsntNm) {
        _Data.collectNew();
    }

    var formatTime = function (fullDate) {
        var dateBase = new Date(fullDate);
        var hours = dateBase.getHours();
        var minutes = dateBase.getMinutes();
        if (minutes === 0) {
            minutes = '00';
        }
        var meridian = 'AM';
        if (hours === 12) {
            meridian = 'PM';
        }
        if (hours > 12) {
            hours -= 12;
            meridian = 'PM';
        }
        if (hours === 0) {
            hours = 12;
        }

        return hours + ':' + minutes + ' ' + meridian;
    };
    var formatDate = function (fullDate) {
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        var monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var dateBase = new Date(fullDate);
        return daysOfWeek[dateBase.getDay()] + ', ' + monthsOfYear[dateBase.getMonth()] + ' ' + dateBase.getDate();
    };
    /*
     Any after retrieval data massaging.
     */
    var massageData = function () {
        _Data.hourly.time = [];
        _Data.hourly.date = [];
        _Data.lookingAhead = getLookingAhead();
        for (var i in _Data.hourly.processTime) {
            _Data.hourly.time[i] = formatTime(_Data.hourly.processTime[i]);
            _Data.hourly.date[i] = formatDate(_Data.hourly.processTime[i]);
        }
    };

    var getLookingAhead = function () {
        var daily = _Data.dailyForecast, retData = [];
        if (daily.day.dayPartName[0] === null) {
            //its nighttime.
            retData = [{
                daypartName: daily.night.dayPartName[0],
                highLow: 'Low',
                phrase: daily.night.phrase[0],
                wxicon: getWxIcon(daily.night.icon[0]),
                temperature: daily.night.temperature[0],
                narrative: daily.night.narrative[0],
                precip: daily.night.precipPct[0]
            }, {
                daypartName: daily.day.dayPartName[1],
                highLow: 'High',
                phrase: daily.day.phrase[1],
                wxicon: getWxIcon(daily.day.icon[1]),
                temperature: daily.day.temperature[1],
                narrative: daily.day.narrative[1],
                precip: daily.day.precipPct[1]
            }, {
                daypartName: daily.night.dayPartName[1],
                highLow: 'Low',
                phrase: daily.night.phrase[1],
                wxicon: getWxIcon(daily.night.icon[1]),
                temperature: daily.night.temperature[1],
                narrative: daily.night.narrative[1],
                precip: daily.night.precipPct[1]
            }];
        } else {
            retData = [{
                daypartName: daily.day.dayPartName[0],
                highLow: 'High',
                phrase: daily.day.phrase[0],
                wxicon: getWxIcon(daily.day.icon[0]),
                temperature: daily.day.temperature[0],
                narrative: daily.day.narrative[0],
                precip: daily.day.precipPct[0]
            }, {
                daypartName: daily.night.dayPartName[0],
                highLow: 'Low',
                phrase: daily.night.phrase[0],
                wxicon: getWxIcon(daily.night.icon[0]),
                temperature: daily.night.temperature[0],
                narrative: daily.night.narrative[0],
                precip: daily.night.precipPct[0]
            }, {
                daypartName: daily.day.dayPartName[1],
                highLow: 'High',
                phrase: daily.day.phrase[1],
                wxicon: getWxIcon(daily.day.icon[1]),
                temperature: daily.day.temperature[1],
                narrative: daily.day.narrative[1],
                precip: daily.day.precipPct[1]
            }];
        }
        return retData;
    };
})();

