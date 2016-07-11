
var _Router = {
    page : ''
};
(function(){
    var pageAssignment;
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
        for(var pager in pageAssignment){
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
            if (pathArr[0].indexOf('-') === 2) {
                urlInfo.lang = pathArr[0];
                if(pathArr.length < 2){
                    pathArr.shift();
                }
            }
            urlInfo.page = '';
            for(pathItem in pathArr){
                if(pathArr[pathItem] === 'l'){
                    urlInfo.page += 'l/';
                    break;
                } else {
                    urlInfo.page += pathArr[pathItem] + '/';
                }
            }
            var lastItem = pathArr.length > 1 ? pathArr[pathArr.length -1] : '';
            if(lastItem.indexOf(',') > -1 || lastItem.indexOf(':') > -1 || (lastItem.length === 5 && helper.isNumeric(Number(lastItem)))){
                urlInfo.loc = lastItem;
            }
        }
        updateTranslations(urlInfo);
    };
    var updateTranslations = function(pathArr){
        if(pathArr && pathArr.lang && _User.lang !== pathArr.lang){
            _User.lang = pathArr.lang;
            _Language.updateTranslations().then(function(){
                getDefaultLoc(pathArr);
            });
        } else {
            getDefaultLoc(pathArr);
        }
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
                _User.newActiveLocation(data);
                checkPage(pathArr);
                _Alert.getAlertData(data.locId, data.lang);
            });
        } else if (!_User.activeLocation.prsntNm){
            _Locations.getDefaultLocation().then(function(){
                checkPage(pathArr);
                _Alert.getAlertData(data.locId, data.lang);
            });
        } else {
            checkPage(pathArr);
        }
    };
     var checkPage = function(pathArr){
            if(history.state && history.state.changeTo){
                _Router.changePage(history.state.changeTo);
            } else {
                if(!pathArr.page){
                    _Router.changePage('today');
                } else {
                    for(var page in pageAssignment){
                        if(pathArr.page === pageAssignment[page].hreflang[pathArr.lang]){
                            _Router.changePage(page);
                            break;
                        }
                    }
                    _Router.changePage('today');
                }
                //Else, its not a valid URL.  We should probably 404 on this.
            }
    };

    var lis;
    _Router.changePage = function(page){
        /*   Page Nav, decactivate all, the activate the right one. */
        lis = document.getElementsByClassName('page-nav-li');
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
        updateMetadata(page);
        var activeLoc = _User.activeLocation;
        var loc = activeLoc.locId ? activeLoc.locId + ':' + activeLoc.locType + ':' + activeLoc.cntryCd : '';
        history.pushState({changeTo:page}, page, '/' + pageAssignment[page].hreflang[_User.lang] + loc);
        _Router.dispatchAds();
    };
    var updateMetadata = function(page){
        document.getElementsByTagName("html")[0].setAttribute("lang", _User.lang);
        var meta = _Locales.metadata[page];
        document.title = meta.page_title;
        var metaArr = document.getElementsByTagName("META");
        for(tag in metaArr){
            if(metaArr[tag].name === "Description"){
                metaArr[tag].content = meta.page_desc.replaceAll('{dynamicLocName}', _User.activeLocation.prsntNm);
            }
            if(metaArr[tag].name === 'Keywords'){
                metaArr[tag].content = meta.page_keywords.replaceAll('{dynamicLocName}', _User.activeLocation.prsntNm);
            }
        }
    };
    _Router.updateURL = function(){
        if(history.state && history.state.changeTo){
            _Router.changePage(history.state.changeTo);
        } else {
           _Router.changePage(_Router.page);
        }
    };

    _Router.dispatchAds = function(promise){
        // Short timeout needed to insure template loaded
        setTimeout(function() {
            if (window.AdCtrl && AdCtrl.Promises && AdCtrl.Promises.loadAds) {
                document.dispatchEvent(AdCtrl.Promises.loadAds);
            }
        },5);
    };
})();

