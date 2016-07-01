
var _Router = {};
(function(){
    _Router = {
        page : '',
        handlePath: () => {
            handlePath();
        }
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

    var getEnglishVersion = function(pageName){
        for(page in pageAssignment){
            console.log(page);
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
                //if(pathArr[1] )
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
    //handlePath();

    window.onpopstate = function(){
       handlePath();
    };

})();

