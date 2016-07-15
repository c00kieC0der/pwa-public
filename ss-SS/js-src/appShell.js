/**
 * Created by omkard on 6/5/16.
 */

var downArrayClicked = false;

    /**
     * function to control the nav width
     */
    window.onload = navAppShell();
    window.resize = navAppShell();


    function navAppShell() {
            var navListEle = document.getElementsByClassName('page-nav-li');
            var navUlEle = document.getElementsByClassName('page-nav');
            var navItemwidth = 0;
            for(i=0; i<navListEle.length; i++){
                navItemwidth += navListEle[i].offsetWidth;
            }
            navUlEle[0].style.width = navItemwidth + 'px';
    }
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
    slideMenu('loc-layout',1);
    slideMenu('category-layout',0);
    slideMenu('areas-layout',0);

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
        container.innerHTML += '<li class="results"><a onclick="javascript:searchResultsClicked(this, ' + i +  ', \'' + _User.locations[i].prsntNm  + '\', false, false )" class="dropdown-name">' + _User.locations[i].prsntNm + '</a></li>';
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
            for (var i=0; i<_Locations.results.length; i++ ) {
                var prsntNm = _Locations.results[i].cityNm + ', ' + _Locations.results[i].stCd;
                cityList += '<li class="results"><a class="name" onclick="searchResultsClicked(this, ' + i + ', \'' + prsntNm + '\', true, true)"> ' + prsntNm + '  </a></li>';
            }
            document.getElementById('search-results-list').innerHTML = cityList;
        }
    }

}



function searchResultsClicked(ele, locObjID, prsntNm, updateList, useSearch) {
    var locObj = useSearch ? _Locations.results[locObjID] : _User.locations[locObjID];
    if(prsntNm){
        locObj.prsntNm = prsntNm;
    }
    if(!locObj.lat && locObj.geocode){
        var geoArr = locObj.geocode.split(',');
        console.log(geoArr);
        locObj.lat = geoArr[0];
        locObj.long = geoArr[1];
    }

    var pwaHeader = document.getElementById('pwa-header');
    if(pwaHeader.className.match('.pwa-header-active')){
        pwaHeader.className = 'header';
        showHide('main-search', 0);
    }
    document.getElementById('activeLocName').innerHTML = ele.innerHTML;
    _User.newActiveLocation(locObj, updateList);
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

/**
 * setActiveTemperatureUnits() is used to change the temperature units element accordingly with the data is loaded from localStorage
 */

function setActiveTemperatureUnits() {
    var tempElements = document.getElementsByClassName('temp-red');
    var tempUnitMapping = {m: '°C', e: '°F'};
    var currentUnitPref = _User.unitPref || 'e';
    for(var i=0;i<tempElements.length;i++) {
        tempElements[i].className = 'temp-red';
        if(tempElements[i].innerHTML === tempUnitMapping[currentUnitPref]){
            tempElements[i].className += ' active';
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
function changeNav(ele) {  console.log('called.');
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
    slideMenu('loc-layout',1);
    slideMenu('category-layout',0);
    slideMenu('areas-layout',0);
}

/**
 * showCategories() shows the categories of languages
 */

function showCategories() {
    var categoryHTML = '';
    for(c = 0; c < categories.length; c++){
        var categoryName = categories[c].catName;
        categoryHTML += '<li ><a href="javascript:showAreas(\'' + categoryName+ '\','+ c +')"><span >'+categories[c].catName+'</span> <span class="wx-iconfont-global wx-icon-arrow-right wx-icon-small"></span></a></li>';
    }
    document.getElementById('lang-categories').innerHTML = categoryHTML;
    slideMenu('loc-layout',0);
    slideMenu('category-layout',1);
    slideMenu('areas-layout',0);
}

/**
 * showAreas(ele) selects the language
 * @param ele
 */
function showAreas(ele,rowId ) {
    var languageHTML = '';
    for(l=0; l< categories[rowId].countryName.length; l++){
        languageHTML += '<li><a href="javascript:changeLang(\'' + categories[rowId].countryName[l].code + '\')"><span> '+categories[rowId].countryName[l].name+' </span> <span> | '+categories[rowId].countryName[l].language+'</span> </a></li>';
    }
    document.getElementById('country-languages').innerHTML = languageHTML;
    document.getElementById('area-value').innerHTML = ele;
    slideMenu('loc-layout',0);
    slideMenu('category-layout',0);
    slideMenu('areas-layout',1);
}

/**
 * changeLang(lang code)
 * @param(code)
 * updates user lang parameter
 * fetches new lang strings
 * closes the menu
 */
function changeLang(code){
    _User.lang = code;
    _Language.updateTranslations().then(function(){
       _Router.updateURL();
        //update RTL page when user change language.
       _Router.setRTL();
    });
    showHide('main-nav', 0);
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


/**
 * showHide() takes the element and slides in from the right based on the value
 * 0 - hide
 * 1 - display
 * @param element
 * @param show
 */

function slideMenu(element, show) {
    if(show === 0) {
        helper.addClass(document.getElementById(element), 'slide-out');

    } else {
        helper.removeClass(document.getElementById(element), 'slide-out');
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
        ['nav-weekend', _Lang['weekend'].toUpperCase()],
        ['nav-map', _Lang.maps.toUpperCase()],
        ['update-current-location', capitalizeEachWord(_Lang['update current location'])],
        ['update-current-location-recent', capitalizeEachWord(_Lang['update current location'])],
        ['recent-searches-text', _Lang['recent searches'].toUpperCase()],
        ['footer-terms-of-use', capitalizeEachWord(_Lang['terms of use'])],
        ['footer-privacy-policy', capitalizeEachWord(_Lang['privacy policy'])],
        ['footer-feedback', capitalizeEachWord(_Lang['feedback'])],
        ['footer-press', capitalizeEachWord(_Lang['press'])]
    ];
    helper.setContent(langMap);
};
domReady(function(){
    document.getElementById('event-anchor').addEventListener('lang-builder', function(){
        assignAppShellLang();
    });
    setActiveTemperatureUnits();
});


function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}