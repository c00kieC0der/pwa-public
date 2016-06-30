/**
 * Created by omkard on 6/5/16.
 */

var downArrayClicked = false;
var categories = [{"catName":"Americas","countryName":[
                                                    {"name":"USA","code":"EN", "language":"EN"},
                                                    {"name":"USA (Spanish)","code":"ES", "language":"ES"},
                                                    {"name":"Antigua and Barbuda","code":"en-AG", "language": "EN"},
                                                    {"name":"Argentina","code":"es-AR", "language":"ES"},
                                                    {"name":"Bahamas","code":"en-BS", "language":"EN"},
                                                    {"name":"Barbados","code":"en-BB", "language":"EN"},
                                                    {"name":"Belize","code":"en-BZ", "language":"EN"},
                                                    {"name":"Bolivia","code":"es-BO", "language":"ES"},
                                                    {"name":"Brazil","code":"pt-BR", "language":"PT"},
                                                    {"name":"Canada","code":"en-CA", "language":"EN"},
                                                    {"name":"Canada","code":"fr-CA", "language":"FR"},
                                                    {"name":"Chile","code":"es-CL", "language":"ES"},
                                                    {"name":"Colombia","code":"es-CO", "language":"ES"},
                                                    {"name":"Costa Rica","code":"es-CR", "language":"ES"},
                                                    {"name":"Dominica","code":"en-DM", "language":"EN"},
                                                    {"name":"Dominican Republic","code":"es-DO", "language":"ES"},
                                                    {"name":"Ecuador","code":"es-EC", "language":"ES"},
                                                    {"name":"El Salvador","code":"es-SV", "language":"ES"},
                                                    {"name":"Grenada","code":"en-GD", "language":"EN"},
                                                    {"name":"Guatemala","code":"es-GT", "language":"ES"},
                                                    {"name":"Guyana","code":"en-GY", "language":"EN"},
                                                    {"name":"Haiti","code":"fr-HT", "language":"FR"},
                                                    {"name":"Honduras","code":"es-HN", "language":"ES"},
                                                    {"name":"Jamaica","code":"en-JM", "language":"EN"},
                                                    {"name":"Mexico","code":"es-MX", "language":"ES"},
                                                    {"name":"Nicaragua","code":"es-NI", "language":"ES"},
                                                    {"name":"Panama","code":"es-PA", "language":"ES"},
                                                    {"name":"Panama","code":"en-PA", "language":"EN"},
                                                    {"name":"Paraguay","code":"es-PY", "language":"ES"},
                                                    {"name":"Peru","code":"es-PE", "language":"ES"},
                                                    {"name":"St. Kitts and Nevis","code":"en-KN", "language":"EN"},
                                                    {"name":"St. Lucia","code":"en-LC", "language":"EN"},
                                                    {"name":"St. Vincent and the Grenadines","code":"en-VC", "language":"EN"},
                                                    {"name":"Suriname","code":"nl-SR", "language":"NL"},
                                                    {"name":"Trinidad and Tobago","code":"en-TT", "language":"EN"},
                                                    {"name":"Uruguay","code":"es-UY", "language":"ES"},
                                                    {"name":"Venezuela","code":"es-VE", "language":"ES"}]},
                {"catName":"Africa","countryName":[{"name":"Algeria","code":"ar-DZ", "language":"AR"},
                                                    {"name":"Algeria","code":"fr-DZ", "language":"FR"},
                                                    {"name":"Benin","code":"fr-BJ", "language":"FR"},
                                                    {"name":"Burkina Faso", "code":"fr-BF", "language":"FR"},
                                                    {"name":"Burundi", "code":"fr-BI", "language":"FR"},
                                                    {"name":"Cameroon", "code":"fr-CM", "language":"FR"},
                                                    {"name":"Cameroon", "code":"en-CM", "language":"EN"},
                                                    {"name":"Cape Verde", "code":"pt-CV", "language":"PT"},
                                                    {"name":"Central African Republic", "code":"fr-CF", "language":"FR"},
                                                    {"name":"Chad","code":"fr-TD", "language":"FR"},
                                                    {"name":"Chad", "code":"ar-TD", "language":"AR"},
                                                    {"name":"Comoros", "code":"fr-KM", "language":"FR"},
                                                    {"name":"Comoros", "code":"ar-KM", "language":"AR"},
                                                    {"name":"Congo, Democratic Republic of the", "code":"fr-CD", "language":"FR"},
                                                    {"name":"Congo, Republic of", "code":"fr-CG", "language":"FR"},
                                                    {"name":"Côte d'Ivoire", "code":"fr-CI", "language":"FR"},
                                                    {"name":"Djibouti","code":"fr-DJ", "language":"FR"},
                                                    {"name":"Djibouti", "code":"ar-DJ", "language":"AR"},
                                                    {"name":"Egypt", "code":"ar-EG", "language":"AR"},
                                                    {"name":"Equatorial Guinea", "code":"es-GQ", "language":"ES"},
                                                    {"name":"Eritrea", "code":"ar-ER", "language":"AR"},
                                                    {"name":"Gabon", "code":"fr-GA", "language":"FR"},
                                                    {"name":"Gambia", "code":"en-GM", "language":"EN"},
                                                    {"name":"Ghana","code":"en-GH", "language":"EN"},
                                                    {"name":"Guinea", "code":"fr-GN", "language":"FR"},
                                                    {"name":"Guinea-Bissau", "code":"pt-GW", "language":"PT"},
                                                    {"name":"Kenya", "code":"en-KE", "language":"EN"},
                                                    {"name":"Lesotho", "code":"en-LS", "language":"EN"},
                                                    {"name":"Liberia", "code":"en-LR", "language":"EN"},
                                                    {"name":"Libya", "code":"ar-LY", "language":"AR"},
                                                    {"name":"Madagascar", "code":"fr-MG", "language":"FR"},
                                                    {"name":"Mali","code":"fr-ML", "language":"FR"},
                                                    {"name":"Mauritania", "code":"ar-MR", "language":"AR"},
                                                    {"name":"Mauritius", "code":"en-MU", "language":"EN"},
                                                    {"name":"Mauritius", "code":"fr-MU", "language":"FR"},
                                                    {"name":"Morocco", "code":"ar-MA", "language":"AR"},
                                                    {"name":"Morocco", "code":"fr-MA", "language":"FRx"},
                                                    {"name":"Mozambique", "code":"pt-MZ", "language":"PT"},
                                                    {"name":"Namibia","code":"en-NA", "language":"EN"},
                                                    {"name":"Niger", "code":"fr-NE", "language":"FR"},
                                                    {"name":"Nigeria", "code":"en-NG", "language":"EN"},
                                                    {"name":"Rwanda", "code":"fr-RW", "language":"FR"},
                                                    {"name":"Rwanda", "code":"en-RW", "language":"EN"},
                                                    {"name":"São Tomé and Príncipe", "code":"pt-ST", "language":"PT"},
                                                    {"name":"Senegal", "code":"fr-SN", "language":"FR"},
                                                    {"name":"Sierra Leone","code":"en-SL", "language":"EN"},
                                                    {"name":"Somalia", "code":"ar-SO", "language":"AR"},
                                                    {"name":"South Africa", "code":"en-ZA", "language":"EN"},
                                                    {"name":"South Sudan", "code":"en-SS", "language":"EN"},
                                                    {"name":"Sudan", "code":"ar-SD", "language":"AR"},
                                                    {"name":"Swaziland", "code":"en-SZ", "language":"EN"},
                                                    {"name":"Tanzania", "code":"en-TZ", "language":"EN"},
                                                    {"name":"Togo", "code":"fr-TG", "language":"FR"},
                                                    {"name":"Tunisia","code":"ar-TN", "language":"AR"},
                                                    {"name":"Uganda", "code":"en-UG", "language":"EN"}]},
                {"catName":"Asia Pacific","countryName":[{"name":"Australia","code":"en-AU", "language":"EN"},
                                                    {"name":"Bangladesh","code":"bn-BD", "language":"BN"},
                                                    {"name":"Brunei","code":"ms-BN", "language":"MS"},
                                                    {"name":"China", "code":"zh-CN", "language":"ZH"},
                                                    {"name":"China", "code":"zh-HK", "language":"ZH"},/*I think this code is for Hong Kong*/
                                                    {"name":"East Timor", "code":"pt-TP", "language":"PT"},
                                                    {"name":"Fiji", "code":"en-FJ", "language":"EN"},
                                                    {"name":"India (English)", "code":"en-IN", "language":"EN"},
                                                    {"name":"India (Hindi)", "code":"hi-IN", "language":"HI"},
                                                    {"name":"Indonesia", "code":"id-ID", "language":"ID"},
                                                    {"name":"Japan", "code":"ja-JP", "language":"JA"},
                                                    {"name":"Kiribati", "code":"en-KI", "language":"EN"},
                                                    {"name":"Korea, North", "code":"ko-KP", "language":"KO"},
                                                    {"name":"Korea", "code":"ko-KO", "language":"KO"},
                                                    {"name":"Kyrgyzstan", "code":"ru-KG", "language":"RU"},
                                                    {"name":"Malaysia", "code":"ms-MY", "language":"MS"},
                                                    {"name":"Marshall Islands", "code":"en-MH", "language":"EN"},
                                                    {"name":"Micronesia", "code":"en-FM", "language":"EN"},
                                                    {"name":"New Zealand", "code":"en-NZ", "language":"EN"},
                                                    {"name":"Palau", "code":"en-PW", "language":"EN"},
                                                    {"name":"Philippines", "code":"en-PH", "language":"EN"},
                                                    {"name":"Philippines", "code":"tl-PH", "language":"TL"},
                                                    {"name":"Samoa", "code":"en-AS", "language":"EN"},
                                                    {"name":"Singapore", "code":"en-SG", "language":"EN"},
                                                    {"name":"Singapore", "code":"zh-SG", "language":"ZH"},
                                                    {"name":"Solomon Islands", "code":"en-SB", "language":"EN"},
                                                    {"name":"Taiwan", "code":"zh-TW", "language":"ZH"},
                                                    {"name":"Thailand", "code":"th-TH", "language":"TH" },
                                                    {"name":"Tonga", "code":"en-TO", "language":"EN"},
                                                    {"name":"Tuvalu", "code":"en-TV", "language":"EN"},
                                                    {"name":"Vanuatu", "code":"en-VU", "language":"EN"},
                                                    {"name":"Vanuatu", "code":"fr-VU", "language":"FR"},
                                                    {"name":"Vietnam", "code":"vi-VN"}]},
                  {"catName":"Europe","countryName":[{"name":"Andorra","code":"ca-AD", "language":"CA"},
                                                      {"name":"Andorra","code":"fr-AD", "language":"FR"},
                                                      {"name":"Angola","code":"pt-AO", "language":"PT"},
                                                      {"name":"Austria","code":"de-AT", "language":"DE"},
                                                      {"name":"Belarus","code":"ru-BY", "language":"RU"},
                                                      {"name":"Belgium","code":"de-BE", "language":"DE"},
                                                      {"name":"Belgium","code":"fr-BE", "language":"FR"},
                                                      {"name":"Bosnia and Herzegovina","code":"hr-BA", "language":"HR"},
                                                      {"name":"Croatia","code":"hr-HR", "language":"HR"},
                                                      {"name":"Cyprus","code":"el-CY", "language":"EL"},
                                                      {"name":"Czech Republic","code":"cs-CZ", "language":"CS"},
                                                      {"name":"Denmark","code":"da-DK", "language":"DA"},
                                                      {"name":"Estonia","code":"ru-EE", "language":"RU"},
                                                      {"name":"Finland","code":"fi-FI", "language":"FI"},
                                                      {"name":"France","code":"fr-FR", "language":"FR"},
                                                      {"name":"Germany","code":"de-DE", "language":"DE"},
                                                      {"name":"Greece","code":"el-GR", "language":"EL"},
                                                      {"name":"Hungary","code":"hu-HU", "language":"HU"},
                                                      {"name":"Ireland","code":"en-IE", "language":"EN"},
                                                      {"name":"Italy","code":"it-IT", "language":"IT"},
                                                      {"name":"Liechtenstein","code":"de-LI", "language":"DE"},
                                                      {"name":"Luxembourg","code":"fr-LU", "language":"FR"},
                                                      {"name":"Malta","code":"en-MT", "language":"EN"},
                                                      {"name":"Monaco","code":"fr-MC", "language":"FR"},
                                                      {"name":"Netherlands","code":"nl-NL", "language":"NL"},
                                                      {"name":"Norway","code":"no-NO", "language":"NO"},
                                                      {"name":"Poland","code":"pl-PL", "language":"PL"},
                                                      {"name":"Portugal","code":"pt-PT", "language":"PT"},
                                                      {"name":"Romania","code":"ro-RO", "language":"RO"},
                                                      {"name":"Russia","code":"ru-RU", "language":"RU"},
                                                      {"name":"San Marino","code":"it-SM", "language":"IT"},
                                                      {"name":"Slovakia","code":"sk-SK", "language":"SK"},
                                                      {"name":"Spain (Spanish)","code":"es-ES", "language":"ES"},
                                                      {"name":"Spain (Catalan)","code":"ca-ES", "language":"CA"},
                                                      {"name":"Sweden","code":"se-SV", "language":"SE"},
                                                      {"name":"Switzerland","code":"de-CH", "language":"DE"},
                                                      {"name":"Turkey","code":"tr-TR", "language":"TR"},
                                                      {"name":"Ukraine","code":"uk-UA"},
                                                      {"name":"United Kingdom","code":"en-GB", "language":"EN"},
                                                      {"name":"Vatican City (Holy See)","code":"it-VA"}]},
                  {"catName":"Middle East","countryName":[{"name":"Bahrain","code":"ar-BH", "language":"AR"},
                                                      {"name":"Iran","code":"fa-IR", "language":"FA"},
                                                      {"name":"Iraq","code":"ar-IQ", "language":"AR"},
                                                      {"name":"Israel","code":"he-IL", "language":"HE"},
                                                      {"name":"Jordan","code":"ar-JO", "language":"AR"},
                                                      {"name":"Kuwait","code":"ar-KW", "language":"AR"},
                                                      {"name":"Lebanon","code":"ar-LB", "language":"AR"},
                                                      {"name":"Oman","code":"ar-OM", "language":"AR"},
                                                      {"name":"Pakistan","code":"ur-PK", "language":"UR"},
                                                      {"name":"Pakistan","code":"en-PK", "language":"EN"},
                                                      {"name":"Qatar","code":"ar-QA", "language":"AR"},
                                                      {"name":"Saudi Arabia","code":"ar-SA", "language":"AR"},
                                                      {"name":"Syria","code":"ar-SY", "language":"AR"},
                                                      {"name":"United Arab Emirates","code":"ar-AE", "language":"AR"}]}];

/**
 * showMainMenu() shows the hamburger menu when clicked
 */

function showMainMenu() {
    var pwaHeader = document.getElementById('pwa-header');
    if(pwaHeader.className.match('.pwa-header-active')){
        pwaHeader.className = 'header';
        showHide('main-search', 0);
    }
    //Displays the main menu page which was hidden
    showHide('main-nav', 1);
    //Displays only the current-location div and hides all other layouts
    showHide('loc-layout',1);
    showHide('category-layout',0);
    showHide('areas-layout',0);

}
/**
 * showMainSearch() shows the Search layout
 */
function showMainSearch() {
    var pwaHeader = document.getElementById('pwa-header');
    if(pwaHeader.className.match('.pwa-header-active')){
        pwaHeader.className = 'header';
        showHide('main-search', 0);
    }else{
        pwaHeader.className += ' pwa-header-active';
        showHide('main-search', 1);
        showHide('saved-results', 1);
        document.getElementById('search').value = '';
        showHide('search-results', 0);
    }

    helper.empty('recently-searched');
    var container = document.getElementById('recently-searched');
    for(var i in _User.locations){
        container.innerHTML += '<li class="results"><a onclick="javascript:searchResultsClicked(this, ' + _User.locations[i].lat + ', ' + _User.locations[i].long + ', false)" class="dropdown-name">' + _User.locations[i].prsntNm + '</a></li>';
    }
}

/**
 * searchResults() shows the search results layout
 */

function searchResults() {
    var currentValue = document.getElementById('search').value;
    if(currentValue === '' || currentValue.length <= 3 ) {
        showHide('saved-results', 1);
        showHide('search-results', 0);
    } else {
        showHide('saved-results', 0);
        showHide('search-results', 1);
        var searchResults = lookupLocations(currentValue);
        if(_Locations.results !== undefined) {
            var cityList = '';
            for (i=0; i<_Locations.results.length; i++ ) {
                var latLongArray = _Locations.results[i].geocode.split(',');
                cityList += '<li class="results"><a class="name" onclick="searchResultsClicked(this, ' +latLongArray[0] + ',' + latLongArray[1] + ', true)"> '+_Locations.results[i].cityNm+', '+_Locations.results[i].stCd+'  </a></li>';
            }
            document.getElementById('search-results-list').innerHTML = cityList;
        }
    }

}



function searchResultsClicked(ele, lat, long, updateList) {
    var pwaHeader = document.getElementById('pwa-header');
    if(pwaHeader.className.match('.pwa-header-active')){
        pwaHeader.className = 'header';
        showHide('main-search', 0);
    }
    document.getElementById('activeLocName').innerHTML = ele.innerHTML;
    _User.newActiveLocation({
        lat     : lat,
        long    : long,
        prsntNm : ele.innerHTML
    }, updateList);
    hideMainSearch();
}

/**
 * clearSearch() clears the text entered in the search box
 */

function clearSearch() {
    showHide('saved-results', 1);
    document.getElementById('search').value = '';
    showHide('search-results', 0);
}

/**
 * hideMainMenu() hides the main menu and display the home page
 */

function hideMainMenu() {
    showHide('main-nav', 0);
}

/**
 * hideMainSearch() hides the search box and displays the home page
 */
function hideMainSearch() {
    var pwaHeader = document.getElementById('pwa-header');
    if(pwaHeader.className.match('.pwa-header-active')){
        pwaHeader.className = 'header';
        showHide('main-search', 0);
    }
}

/**
 * showTemperature(ele) is used to change the temperature units
 * @param ele
 */

function showTemperature(ele) {
    if(!ele.className.match('active')) {
        var tempElements = document.getElementsByClassName('temp-red');
        for(i=0;i<tempElements.length;i++) {
            tempElements[i].className = "temp-red";
        }
        ele.className += ' active';
        if(ele.innerHTML === '°C'){
            _User.setUnitPreference('m');
            _Metrics.clickTrack(ele, _Router.page, 'menu', 'celsius');
        } else {
            _User.setUnitPreference('e');
            _Metrics.clickTrack(ele, _Router.page, 'menu', 'fahrenheit');
        }
    }

}


function pwaNavClicked(e) {
    var windowWidth = window.innerWidth;
    var clientWidth = e.clientX;
    var pwaUlwidth = document.getElementsByClassName('menubar')[0].clientWidth;
    var thirtyPercentVal = 0.3 * windowWidth;
    var seventyPercentVal = 0.7 * windowWidth;
    if(clientWidth < thirtyPercentVal){
        document.getElementsByClassName('nav-suite')[0].scrollLeft =  '0';
    }else if(clientWidth > seventyPercentVal) {
        document.getElementsByClassName('nav-suite')[0].scrollLeft = pwaUlwidth - windowWidth;
    }
}

/**
 * changeNav(ele) is used to changes the nav pages
 * @param ele
 */
function changeNav(ele) {
    document.getElementById('main-search').style.display = "none";
    if(!ele.className.match('active')) {
        var tempElements = document.getElementsByClassName('page-nav-li');
        for(i=0;i<tempElements.length;i++) {
            tempElements[i].className = "page-nav-li";
        }
        ele.className += ' active';
    }
    _Router.changePage(ele.textContent);
}

/**
 * showLocations() shows the location selected layout
 */
function showLocations() {
    showHide('loc-layout',1);
    showHide('category-layout',0);
    showHide('areas-layout',0);
}

/**
 * showCategories() shows the categories of languages
 */

function showCategories() {
    var categoryHTML = '';
    for(c = 0; c < categories.length; c++){
        categoryHTML += '<li ><a href="#" onclick="showAreas(this,'+ c +')"><span >'+categories[c].catName+'</span> <span class="wx-iconfont-global wx-icon-arrow-right wx-icon-small"></span></a></li>';
    }
    document.getElementById('lang-categories').innerHTML = categoryHTML;
    showHide('loc-layout',0);
    showHide('category-layout',1);
    showHide('areas-layout',0);
}

/**
 * showAreas(ele) selects the language
 * @param ele
 */
function showAreas(ele,rowId ) {
    var languageHTML = '';
    for(l=0; l< categories[rowId].countryName.length; l++){
        languageHTML += '<li><a href="#"><span> '+categories[rowId].countryName[l].name+' </span> <span>'+categories[rowId].countryName[l].code+'</span> </a></li>';
    }
    document.getElementById('country-languages').innerHTML = languageHTML;
    document.getElementById('area-value').innerHTML = ele.innerHTML;
    showHide('loc-layout',0);
    showHide('category-layout',0);
    showHide('areas-layout',1);
}

/**
 * showHide() takes the element and shows it or hides it based on the value
 * 0 - hide
 * 1 - display
 * @param element
 * @param show
 */
function showHide(element, show) {
    if(show === 0) {
        document.getElementById(element).style.display = 'none';
    } else {
        document.getElementById(element).style.display = 'block';
    }
}

function lookupLocations(term){
    if(term && term.length && term.length > 3){
        _Locations.searchLocs(term);
    }
}

/*  This is triggered when we have location results from the term in the above function */
/*
document.getElementById('event-anchor').addEventListener('builder-locations', function(){
    console.log(_Locations.results);
});
*/
function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
/*
function showPosition(position){
    console.log(position);
} */
/**
 * showRecentlySearched() shows and hides the drop down recent search list
 * and fills in the drop down with recently searched items.
 */

var recentLocsMap = [
    ['dropdown-name', 'prsntNm']
];

function showRecentlySearched(){
    //Show the dropdown to recently searched locations.
    if(downArrayClicked === false) {
        showHide('drop-down-array-list', 1);
        downArrayClicked = true;
    }else{
        showHide('drop-down-array-list', 0);
        downArrayClicked=false;
    }
}

document.getElementById('event-anchor').addEventListener('builder', function(){
    var dataAssignment = [
        ['activeLocTemp',        _Data.obs.temperature],
        ['activeLocName',  _User.activeLocation.prsntNm]
    ];
    helper.setContent(dataAssignment);
});



function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}


function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

/*
 *  Translations
 */


var langMap;
var assignAppShellLang = function(){
    langMap = [
        ['nav-today', _Lang.today.toUpperCase()],
        ['nav-hourly', _Lang.hourly.toUpperCase()],
        ['nav-fiveday', _Lang['5 day'].toUpperCase()],
        ['nav-tenday', _Lang['10 day'].toUpperCase()],
        ['nav-weekend', 'weekend'],//_Lang['weekend'].toUpperCase()],
        ['nav-map', _Lang.maps.toUpperCase()],
        ['footer-terms-of-use', capitalizeEachWord(_Lang['terms of use'])],
        ['footer-privacy-policy', capitalizeEachWord(_Lang['privacy policy'])],
        ['footer-parental-controls', capitalizeEachWord(_Lang['parental controls'])],
        ['footer-ad-choices', capitalizeEachWord(_Lang['adChoices'])]
    ];
    helper.setContent(langMap);
};

document.getElementById('event-anchor').addEventListener('lang-builder', function(){
    assignAppShellLang();
});


function capitalizeEachWord(str) {
    console.log(str);
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}