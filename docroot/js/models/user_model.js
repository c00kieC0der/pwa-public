

/*
  Properties and Defaults
 */

var _User = {
    unitPref : 'e',
    lang : 'en-US',
    locations: [],
    activeLocation : {
        lat : '',
        long : '',
        prsntNm : ''
    }
};

/*
  Saved Values
*/

var savedPco = window.localStorage.jStorage ? JSON.parse(window.localStorage.jStorage) : {};
_User.locations = savedPco.user && savedPco.user.recentSearchLocations ? savedPco.user.recentSearchLocations : [];
_User.lang = savedPco.user && savedPco.user.locale ? savedPco.user.locale.replace('_', '-') : 'en-US';
_User.unitPref = savedPco.user && savedPco.user.unit ? savedPco.user.unit : 'e';

if(window.localStorage._Stored_User){
    _User = JSON.parse(window.localStorage._Stored_User);
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
    _Data.collectNew();
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

_User.newActiveLocation = function(locationObj){
    _User.locations.push(_User.activeLocation);
    _User.activeLocation = locationObj;
    saveUser();
};




