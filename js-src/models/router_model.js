
var _Router = {
    page : ''
};

(function(){
    var pageAssignment;
    var pagerEvent = document.createEvent('Event');
    pagerEvent.initEvent('pager', true, true);
    var getHREFLANG = function(key){
        helper.getJSON('/js-src/hreflangs/hreflang_' + pageAssignment[key].href + '_page.json').then(function(data){
            pageAssignment[key].hreflang = data;
            if(key === 'maps'){
                //Handles Onload checking.
                 handlePath();
            }
        });
    };

    helper.getJSON('/js-src/page-config.json').then(function(data){
        pageAssignment = data;
        for(var pager in pageAssignment) {
             getHREFLANG(pager);
        }
    });

    var pathArr = [], queryArr = [];
    var handlePath = function() {
        var urlInfo = {
            lang : 'en-US',
            page : 'weather/today/l/',
            loc : ''
        };
        //page=/weather/radar/interactive&locid=USDC0001:1:US
        queryArr = helper.parseQueryString();
        if(queryArr.page){
            var paramsArr = queryArr.page.split('/');
            urlInfo.lang = paramsArr[1].indexOf("-") === 2 ? paramsArr[1] : 'en-US';
            urlInfo.page = queryArr.page.substr(1, queryArr.page.length -1) + '/l/';
            urlInfo.loc = queryArr.locid ? queryArr.locid : '';
        } else {
            var path = window.location.pathname !== '/' ? window.location.pathname : '/weather/today/l';
            pathArr = path.split('/');
            pathArr.shift();
            //get language
            if (pathArr[0].indexOf('-') === 2) {
                urlInfo.lang = pathArr[0];
                if(pathArr.length < 2){
                    pathArr.shift();
                }
            }
            //get page
            urlInfo.page = '';
            for(pathItem in pathArr){
                if(pathArr[pathItem] === 'l'){
                    urlInfo.page += 'l/';
                    break;
                } else {
                    urlInfo.page += pathArr[pathItem] + '/';
                }
            }
            //get location
            var lastItem = pathArr.length > 1 ? pathArr[pathArr.length -1] : '';
            if(lastItem.indexOf(',') > -1 || lastItem.indexOf(':') > -1 || (lastItem.length === 5 && helper.isNumeric(Number(lastItem)))){
                urlInfo.loc = lastItem;
            }
        }
        updateTranslations(urlInfo);
    };
    var updateTranslations = function(pathArr){
        _User.lang = pathArr.lang;
        _Language.updateTranslations().then(function(){
            getDefaultLoc(pathArr);
        });
    };
    var RTLs = ['ar-AE', 'fa-IR', 'he-IL', 'ur-PK'];
    var setRTL = function(){
        if(RTLs.indexOf(_User.lang) > -1){
            document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
        } else {
            document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
        }
    };
    var getDefaultLoc = function(pathArr){
        setRTL();
        if(pathArr.loc){
            _Locations.supplementLoc(pathArr.loc).then(function(data){
                _User.activeLocation = data;
                _Data.collectNew();
                _Alert.getAlertData();
                 checkPage(pathArr);
            });
        } else if (!_User.activeLocation.lat){
            _Locations.getDefaultLocation().then(function(data){
                _User.activeLocation = data;
                _Data.collectNew();
                _Alert.getAlertData();
                checkPage(pathArr);
            });
        } else {
            _Data.collectNew();
            checkPage(pathArr);
        }
        //Load alert-bar module
        helper.loadTemplate('alert-bar', 'modules', 'alert-bar');
    };
     var checkPage = function(pathArr){
            if(history.state && history.state.changeTo){
                _Router.changePage(history.state.changeTo);
            } else {
                if(!pathArr.page || pathArr.page === _User.lang + '//'){
                    _Router.changePage('today');
                } else {
                    if(pathArr.page === '404/'){
                        goto404();
                    }
                    for(var page in pageAssignment){
                        if(page !== '404' && pathArr.page === pageAssignment[page].hreflang[pathArr.lang]){
                            _Router.changePage(page);
                            return;
                        }
                    }
                    goto404();
                }
            }
    };
    var lis = document.getElementsByClassName('page-nav-li');
    var goto404 = function(){
        //Make NO nav items active.
        for(var i=0; i < lis.length; i++){
            lis[i].className = lis[i].className.replace('active', '');
        }
        if(!_Router.page){
            _Router.page = 'today';
        }
        _Metrics.pageLoad(pageAssignment[_Router.page].metricName, pageAssignment['404'].metricName, pageAssignment['404'].pos);
        _Router.page = '404';
        helper.loadTemplateWithClass('page-content', 'pages', "404");
    };
    _Router.changePage = function(page){
        /*   Page Nav, decactivate all, the activate the right one. */
        for(var i=0; i < lis.length; i++){
            lis[i].className = lis[i].className.replace('active', '');
        }
        document.getElementsByClassName('page-nav-li ' + page)[0].className += ' active';

        if(!_Router.page){
            _Router.page = 'today';
        }
        _Metrics.pageLoad(pageAssignment[_Router.page].metricName, pageAssignment[page].metricName, pageAssignment[page].pos);
        _Router.page = page;
        helper.loadTemplateWithClass('page-content', 'pages', page);
        var activeLoc = _User.activeLocation;
        var loc = activeLoc.locId ? activeLoc.locId + ':' + activeLoc.locType + ':' + activeLoc.cntryCd : '';
        history.pushState({changeTo:page}, page, '/' + pageAssignment[page].hreflang[_User.lang] + loc);
        updateMetadata(page);
        helper.setCanonical();
        console.log('HERE');
        document.getElementById('event-anchor').dispatchEvent(pagerEvent);
    };
    var updateMetadata = function(page){
        document.getElementsByTagName("html")[0].setAttribute("lang", _User.lang);
        var meta = _Locales.metadata[page];
        document.title = meta.page_title.replaceAll('{dynamicLocName}', _User.activeLocation.prsntNm);
        var metaArr = document.getElementsByTagName("META");
        for(tag in metaArr){
            if(metaArr[tag].name === "Description"){
                metaArr[tag].content = meta.page_desc.replaceAll('{dynamicLocName}', _User.activeLocation.prsntNm);
                metaArr[tag].content = meta.page_desc.replaceAll('{pageLocName}', _User.activeLocation.prsntNm);
            }
            if(metaArr[tag].name === 'Keywords'){
                metaArr[tag].content = meta.page_keywords.replaceAll('{dynamicLocName}', _User.activeLocation.prsntNm);
                metaArr[tag].content = meta.page_keywords.replaceAll('{pageLocName}', _User.activeLocation.prsntNm);
            }
        }
    };
    _Router.updateURL = function(){
        var activeLoc = _User.activeLocation;
        var loc = activeLoc.locId ? activeLoc.locId + ':' + activeLoc.locType + ':' + activeLoc.cntryCd : '';
        if(!_Router.page){
            _Router.page = 'today';
        }
        var urlInfo = {
            lang : _User.lang,
            page : pageAssignment[_Router.page].hreflang[_User.lang],
            loc : loc
        };
        checkPage(urlInfo);
    };


    _Router.dispatchAds = function(){
            if (window.AdsMetricsCtrl && AdsMetricsCtrl.Promises && AdsMetricsCtrl.Promises.loadAds) {
                document.dispatchEvent(AdsMetricsCtrl.Promises.loadAds);
            }
    };
    //helper.registerListener('DOMContentLoaded', _Router.dispatchAds);
})();
