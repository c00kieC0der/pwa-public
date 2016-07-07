
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
            pos        : '1',
            href       : 'today'
        },
        'hourly'  : {
            name       : 'hourly',
            metricName : 'hourly-forecast',
            title      : 'Your Hourly Forecast',
            pos        : '2',
            href       : 'hourly'
        },
        'fiveday'   : {
            name       : 'fiveday',
            metricName : '5day-forecast',
            title      : 'Your Five Day Forecast',
            pos        : '3',
            href       : '5_day'
        },
        'tenday'   : {
            name       : 'tenday',
            metricName : '10day-forecast',
            title      : 'Your Ten Day Forecast',
            pos        : '4',
            href       : '10_day'
        },
        'weekend' : {
            name       : 'weekend',
            metricName : 'weekend-forecast',
            title      : 'Your Weekend Forecast',
            pos        : '5',
            href       : 'weekend'
        },
        'maps' : {
            name        : 'maps',
            metricName  : 'maps',
            title       : 'Your Radar Map',
            pos         : '6',
            href        : 'maps'
        }
    };


    var changeTo = '', lis;
    _Router.changePage = function(page){
        lis = document.getElementsByClassName('page-nav-li');
        for(var i=0; i < lis.length; i++){
            lis[i].className = lis[i].className.replace('active', '');
        }
        document.getElementsByClassName('page-nav-li ' + page)[0].className += ' active';
        changeTo = page;

        if(!_Router.page){
            _Router.page = 'today';
        }
        helper.getJSON('/js-src/hreflangs/hreflang_' + pageAssignment[page].href + '_page.json').then(function(data){
            pageAssignment[page].hreflang = data;

            _Metrics.pageLoad(pageAssignment[_Router.page].metricName, pageAssignment[changeTo].metricName, pageAssignment[page].pos);
            _Router.page = changeTo;

            helper.loadTemplateWithClass('page-content', 'pages', changeTo);
            document.title = pageAssignment[page].title;
            var activeLoc = _User.activeLocation;
            var loc = activeLoc.locId ? activeLoc.locId + ':' + activeLoc.locType + ':' + activeLoc.cntryCd : '';
            history.pushState({changeTo:page}, page, '/' + pageAssignment[page].hreflang[_User.lang] + loc);
            _Router.dispatchAds();
        });
    };

    var pathArr = [];
    var handlePath = function() {
        pathArr = window.location.pathname.split('/');
        if (pathArr[1].indexOf('-') === 2) {
            if(_User.lang !== pathArr[1]){
                _User.lang = pathArr[1];
                _Language.updateTranslations().then(function(){
                    getDefaultLoc(pathArr);
                });
            } else {
                getDefaultLoc(pathArr);
            }
        } else {
            _User.lang = 'en-US';
            _Language.updateTranslations().then(function(){
                getDefaultLoc(pathArr);
            });
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
        if(pathArr[5] && (pathArr[5].indexOf(':') > -1 || pathArr[5].indexOf(',') > -1)){
            _Locations.supplementLoc(pathArr[5]).then(function(data){
                _User.newActiveLocation(data);
                 checkPage(pathArr);
            });

        } else if (!_User.activeLocation.prsntNm){
            _Locations.getDefaultLocation().then(function(){
                checkPage(pathArr);
            });
        } else {
            checkPage(pathArr);
        }
    };
     var checkPage = function(pathArr){
            if(history.state && history.state.changeTo){
                _Router.changePage(history.state.changeTo);
            } else {
                if(window.location.pathname === '/' || !pathArr[3]){
                    _Router.changePage('today');
                } else {
                    for(var x in pageAssignment){
                        if(_Lang[x] === decodeURI(pathArr[3])){
                            _Router.changePage(x);
                            break;
                        } else if(x === pathArr[3]){ //english.
                            _Router.changePage(x);
                            break;
                        }
                    }
                }
                //Else, its not a valid URL.  We should probably 404 on this.
            }
    };
    //Handles Onload checking.
    handlePath();

    window.onpopstate = function(){
        console.log('poped stated');
       //handlePath();
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

