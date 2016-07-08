var getWxCard = function(skyCode){

    var iconCodeMap = {
        'day-clear': ['32', '36','23', '24','-', '44', 'na'],

        //day-mostly-cloudy
        //'cloudy': ['26'],
        //'mostly-cloudy': ['28'],
        'day-mostly-cloudy': ['26','28'],

        //day-partly-cloudy
        //'mostly-sunny': ['34'],
        //'partly-cloudy': ['30'],
        'day-partly-cloudy': ['34','30'],

        //day-rainy
        //'scattered-showers': ['9', '09', '11', '39'],
        //'heavy-rain': ['40'],
        //'rain': ['12'],
        'day-rainy': ['9', '09', '11', '39','40','12'],

        //fog
        'fog': ['19', '20', '21', '22'],

        //hurricane
        //'tropical-storm': ['1', '01', '2', '02'],
        'hurricane': ['1', '01', '2', '02'],


        //ice
        //'freezing-drizzle': ['8', '08'],
        //'rain-hail': ['6', '06', '10', '35'],
        //'hail': ['17', '18'],
        'ice': ['8', '08','6','06', '10', '35','17', '18'],

        //night-clear
        //'mostly-clear-night': ['33'],
        //'clear-night': ['31'],
        'night-clear': ['33','31'],

        //night-lightning
        //'thunderstorm': ['3', '03', '4', '04'],
        //'isolated-thunderstorms': ['37'],
        //'scattered-thunderstorms': ['38'],
        //'scattered-thunderstorms-night': ['47']
        'night-lightning': ['3', '03', '4', '04','37','38','47'],

        //night-mostlycloudy
        //'mostly-cloudy-night': ['27'],
        'night-mostlycloudy': ['27'],

        //night-partlycloudy
        //'partly-cloudy-night': ['29'],
        'night-partlycloudy': ['29'],

        //night-rain
        //'scattered-showers-night': ['45'],
        'night-rain': ['45'],

        //snow
        //'flurries': ['13'],
        //'scattered-snow': ['41'],
        //'rain-snow': ['5', '05', '7', '07'],
        //'snow': ['14', '16'],
        //'heavy-snow': ['42', '43'],
        //'blowing-snow': ['15', '25'],
        //'scattered-snow-night': ['46'],
        'snow': ['13','41','5', '05', '7', '07','14', '16','42', '43','15', '25','46'],

        //tornado
        'tornado': ['0', '00'],


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

    var wxCardClass = getIconName();
    return wxCardClass
}

