

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
        prsntNm : '',
        locId : ''
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
_User.lang = savedPco.user && savedPco.user.locale ? savedPco.user.locale.replace('_', '-') : _User.lang;
_User.unitPref = savedPco.user && savedPco.user.unit ? savedPco.user.unit : 'e';

if(window.localStorage._Stored_User){
   // _User = JSON.parse(window.localStorage._Stored_User);
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
    if(window['_Data']){
        _Data.collectNew();
    }
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

