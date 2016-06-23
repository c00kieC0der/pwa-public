var pathMap = {
    'twcrb.dev.weather.com' : '/sites/local/files/private/',
    'weather.com'           : '/sites/acquia-prod/files-private/',
    'edit.weather.com'      : '/sites/acquia-prod/files-private/',
    'burda-stage-edit.weather.com' : '/sites/burda-edit/files/private/',
    'burda-stage.weather.com' : '/sites/burda-stage/files/private/',
    'burda-stage.weather.com' : '/sites/burda-stage/files/private/',
    'astg.weather.com' : '/sites/acquia-stage/files/private'
};
var privateFilePath = pathMap[document.domain];

//TODO: Remove comments
var translationStrings = {
    //Nav Headers
    'TODAY':'TODAY',
    'HOURLY':'HOURLY',
    '10 DAY':'10 DAY',
    '5 DAY':'5 DAY',
    'MONTHLY':'MONTHLY',
    'Almanac':'Almanac',
    //Footer Content:
    'Terms of Use':'Terms of Use',
    'Privacy Policy':'Privacy Policy',
    'Parental Controls':'Parental Controls',
    'Ad Choices':'Ad Choices',
    //Today Page
    'feels like':'feels like',
    'Wind':'Wind',
    'Humidity':'Humidity',
    'Dew Point':'Dew Point',
    'Pressure':'Pressure',
    'Visibility':'Visibility',
    'UV Index':'UV Index',
    //Units
    'mph':'mph',
    'in':'in',
    'mi':'mi',
    'pm':'pm',
    'am':'am',
    //Include high and low,?

    //Hourly
    'TIME':'TIME',
    'DESCRIPTION':'DESCRIPTION',
    'TEMP':'TEMP',
    'FEELS':'FEELS',
    'PRECIP':'PRECIP',
    //Ask, fragment
    'Hourly Forecast for':'Hourly Forecast for',
    'More Hours': 'More Hours',
    'Weather':'Weather',
    //Navigation
        //Dropdowns
        //Search Icon
    'Update Current Location':'Update Current Location',
    'RECENT LOCATIONS':'RECENT LOCATIONS',
    'Search city, zip, or place': 'Search city, zip, or place',
    'Manage All Locations':'Manage All Locations',
        //Hamburger
        //Also has weather in all caps. Add again?
    'MAPS':'MAPS',
    'SEVERE':'SEVERE',
    'ACTIVITIES':'ACTIVITIES',
    'NEWS & PHOTOS':'NEWS & PHOTOS',
    'HEALTH':'HEALTH',
    'TRAVEL':'TRAVEL',
    'LOG IN':'LOG IN',
    'SIGN UP':'SIGN UP',
    'CHANGE LOCATION':'CHANGE LOCATION',
    //5/10 Day
    '5 MORE DAYS':'5 MORE DAYS',
    //Formats
    "MONTH": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    "SHORTDAY": [
        "SUN",
        "MON",
        "TUE",
        "WED",
        //Change to 'THUR'?
        "THUR",
        "FRI",
        "SAT"
    ],
    "SHORTMONTH": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],













};
