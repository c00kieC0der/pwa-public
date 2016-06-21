var _Router = {};
(function(){
    _Router = {
        page : 'today'
    };

    var pageAssignment = {
        'TODAY'   : {
            name  : 'today',
            title : 'Your Current Conditions'
        },
        'HOURLY'  : {
            name  : 'hourly',
            title : 'Hourly Forecast'
        },
        '5DAY'   : {
            name  : '5day',
            title : 'Your Daily Forecast'
        },
        '10DAY'   : {
            name  : '10day',
            title : 'Your Daily Forecast'
        },
        'WEEKEND' : {
            name  : 'weekend',
            title : 'Your Weekend Forecast'
        },
        'MAP' : {
            name  : 'map',
            title : 'Your Radar Map'
        }
    };
    _Router.changePage = function(pageName){
        pageName = pageName.replace(' ', '');

        var changeTo = pageAssignment[pageName].name;
        if(_Router.page !== changeTo){
            _Router.page = changeTo;
            helper.loadTemplate('page-content', 'pages', changeTo);
            document.title = pageAssignment[pageName].title;
        }
    };

    if(window.location.hash === ''){
        window.location = '#today';
        _Router.changePage('TODAY');
    } else {
        var hash = window.location.hash.replace('#', '');
        var lis = document.getElementsByClassName('page-nav-li');
        for(var i=0; i < lis.length; i++){
            lis[i].className = lis[i].className.replace('active', '');
        }
        document.getElementsByClassName('page-nav-li ' + hash)[0].className += ' active';
        var hashMap = {
            today : 'TODAY',
            hourly : 'HOURLY',
            fiveday : '5DAY',
            tenday : '10DAY',
            weekend : 'WEEKEND',
            map : 'MAP'
        };
        _Router.changePage(hashMap[hash]);

    }
})();