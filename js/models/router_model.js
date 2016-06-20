var _Router = {};
(function(){
    _History.start({
        pushState: true
    });
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
            _History.update('/pwa/' + changeTo);
        }
    }
    ;
    //_History.onChange(_Router.changePage('DAILY'));
})();