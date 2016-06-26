
var _Router = {};
(function(){
    _Router = {
        page : ''
    };

    var pageAssignment = {
        'today'   : {
            name  : 'today',
            title : 'Your Current Conditions'
        },
        'hourly'  : {
            name  : 'hourly',
            title : 'Hourly Forecast'
        },
        'fiveday'   : {
            name  : 'fiveday',
            title : 'Your Five Day Forecast'
        },
        'tenday'   : {
            name  : 'tenday',
            title : 'Your Ten Day Forecast'
        },
        'weekend' : {
            name  : 'weekend',
            title : 'Your Weekend Forecast'
        },
        'map' : {
            name  : 'map',
            title : 'Your Radar Map'
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
        if(_Router.page !== changeTo){
            _Router.page = changeTo;
            helper.loadTemplate('page-content', 'pages', changeTo);
            document.title = pageAssignment[page].title;
            var loc = _User.activeLocation.lat ? _User.activeLocation.lat + ','+  _User.activeLocation.long : '';
            history.pushState({changeTo:page}, page, '/weather/' + changeTo + '/l/' + loc);
            _Metrics.pageLoad();
        }
    };


    var pathArr = [];
    var handlePath = function(){
        if(history.state && history.state.changeTo){
            _Router.changePage(history.state.changeTo);
        } else {
            if(window.location.pathname === '/'){
                _Router.changePage('today');
            } else {
                pathArr = window.location.pathname.split('/');
                if(pageAssignment[pathArr[2]]){
                    _Router.changePage(pathArr[2]);
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

