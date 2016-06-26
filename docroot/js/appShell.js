/**
 * Created by omkard on 6/5/16.
 */

var downArrayClicked = false;
var categories = [{"catName":"Americas","countryName":[
                                                    // {"name":"USA","code":"EN"},
                                                    // {"name":"USA (Spanish)","code":"ES"},
                                                    {"name":"Antigua and Barbuda","code":""},
                                                    {"name":"Argentina","code":""},
                                                    {"name":"Bahamas","code":""},
                                                    {"name":"Barbados","code":""},
                                                    {"name":"Belize","code":""},
                                                    {"name":"Bolivia","code":""},
                                                    {"name":"Brazil","code":""},
                                                    {"name":"Canada","code":"EN"},
                                                    {"name":"Canada","code":"FR"},
                                                    {"name":"Chile","code":""},
                                                    {"name":"Colombia","code":""},
                                                    {"name":"Costa Rica","code":""},
                                                    {"name":"Dominica","code":""},
                                                    {"name":"Dominican Republic","code":""},
                                                    {"name":"Ecuador","code":""},
                                                    {"name":"El Salvador","code":""},
                                                    {"name":"Grenada","code":""},
                                                    {"name":"Guatemala","code":""},
                                                    {"name":"Guyana","code":""},
                                                    {"name":"Haiti","code":""},
                                                    {"name":"Honduras","code":""},
                                                    {"name":"Jamaica","code":""},
                                                    {"name":"Mexico","code":""},
                                                    {"name":"Nicaragua","code":""},
                                                    {"name":"Panama","code":""},
                                                    {"name":"Panama","code":""},
                                                    {"name":"Paraguay","code":""},
                                                    {"name":"Peru","code":""},
                                                    {"name":"St. Kitts and Nevis","code":""},
                                                    {"name":"St. Lucia","code":""},
                                                    {"name":"St. Vincent and the Grenadines","code":""},
                                                    {"name":"Suriname","code":""},
                                                    {"name":"Trinidad and Tobago","code":""},
                                                    {"name":"Uruguay","code":""},
                                                    {"name":"Venezuela","code":""}]},
                {"catName":"Africa","countryName":[{"name":"Algeria","code":""},
                                                    {"name":"Algeria","code":""},
                                                    {"name":"Benin","code":""},
                                                    {"name":"Burkina Faso", "code":""},
                                                    {"name":"Burundi", "code":""},
                                                    {"name":"Cameroon", "code":""},
                                                    {"name":"Cameroon", "code":""},
                                                    {"name":"Cape Verde", "code":""},
                                                    {"name":"Central African Republic", "code":""},
                                                    {"name":"Chad","code":""},
                                                    {"name":"Chad", "code":""},
                                                    {"name":"Chile", "code":""},
                                                    {"name":"Comoros", "code":""},
                                                    {"name":"Comoros", "code":""},
                                                    {"name":"Congo, Democratic Republic of the", "code":""},
                                                    {"name":"Congo, Republic of", "code":""},
                                                    {"name":"Costa Rica", "code":""},
                                                    {"name":"Côte d'Ivoire", "code":""},
                                                    {"name":"Djibouti","code":""},
                                                    {"name":"Djibouti", "code":""},
                                                    {"name":"Egypt", "code":""},
                                                    {"name":"Equatorial Guinea", "code":""},
                                                    {"name":"Eritrea", "code":""},
                                                    {"name":"Gabon", "code":""},
                                                    {"name":"Gambia", "code":""},
                                                    {"name":"Ghana","code":""},
                                                    {"name":"Guinea", "code":""},
                                                    {"name":"Guinea-Bissau", "code":""},
                                                    {"name":"Kenya", "code":""},
                                                    {"name":"Lesotho", "code":""},
                                                    {"name":"Liberia", "code":""},
                                                    {"name":"Libya", "code":""},
                                                    {"name":"Madagascar", "code":""},
                                                    {"name":"Mali","code":""},
                                                    {"name":"Mauritania", "code":""},
                                                    {"name":"Mauritius", "code":""},
                                                    {"name":"Mauritius", "code":""},
                                                    {"name":"Morocco", "code":""},
                                                    {"name":"Morocco", "code":""},
                                                    {"name":"Mozambique", "code":""},
                                                    {"name":"Namibia","code":""},
                                                    {"name":"Niger", "code":""},
                                                    {"name":"Nigeria", "code":""},
                                                    {"name":"Rwanda", "code":""},
                                                    {"name":"Rwanda", "code":""},
                                                    {"name":"São Tomé and Príncipe", "code":""},
                                                    {"name":"Senegal", "code":""},
                                                    {"name":"Sierra Leone","code":""},
                                                    {"name":"Somalia", "code":""},
                                                    {"name":"South Africa", "code":""},
                                                    {"name":"South Sudan", "code":""},
                                                    {"name":"Sudan", "code":""},
                                                    {"name":"Swaziland", "code":""},
                                                    {"name":"Tanzania", "code":""},
                                                    {"name":"Tunisia","code":""},
                                                    {"name":"Uganda", "code":""}]},
                {"catName":"Asia Pacific","countryName":[{"name":"Australia","code":""},
                                                    {"name":"Bangladesh","code":""},
                                                    {"name":"Brunei","code":""},
                                                    {"name":"China", "code":""},
                                                    {"name":"China", "code":""},
                                                    {"name":"East Timor", "code":""},
                                                    {"name":"Fiji", "code":""},
                                                    {"name":"India (English)", "code":""},
                                                    {"name":"India (Hindi)", "code":""},
                                                    {"name":"Indonesia", "code":""},
                                                    {"name":"Japan", "code":""},
                                                    {"name":"Kiribati", "code":""},
                                                    {"name":"Korea, North", "code":""},
                                                    {"name":"Korea", "code":""},
                                                    {"name":"Kyrgyzstan", "code":""},
                                                    {"name":"Laos", "code":""},
                                                    {"name":"Malaysia", "code":""},
                                                    {"name":"Marshall Islands", "code":""},
                                                    {"name":"Micronesia", "code":""},
                                                    {"name":"New Zealand", "code":""},
                                                    {"name":"Palau", "code":""},
                                                    {"name":"Philippines", "code":""},
                                                    {"name":"Philippines", "code":""},
                                                    {"name":"Samoa", "code":""},
                                                    {"name":"Singapore", "code":""},
                                                    {"name":"Singapore", "code":""},
                                                    {"name":"Solomon Islands", "code":""},
                                                    {"name":"Taiwan", "code":""},
                                                    {"name":"Thailand", "code":""},
                                                    {"name":"Tonga", "code":""},
                                                    {"name":"Tuvalu", "code":""},
                                                    {"name":"Vanuatu", "code":""},
                                                    {"name":"Vanuatu", "code":""},
                                                    {"name":"Vietnam", "code":""}]},
                  {"catName":"Europe","countryName":[{"name":"Andorra","code":""},
                                                      {"name":"Andorra","code":""},
                                                      {"name":"Angola","code":""},
                                                      {"name":"Austria","code":""},
                                                      {"name":"Belarus","code":""},
                                                      {"name":"Belgium","code":""},
                                                      {"name":"Belgium","code":""},
                                                      {"name":"Bosnia and Herzegovina","code":""},
                                                      {"name":"Croatia","code":""},
                                                      {"name":"Cyprus","code":""},
                                                      {"name":"Czech Republic","code":""},
                                                      {"name":"Denmark","code":""},
                                                      {"name":"Estonia","code":""},
                                                      {"name":"Finland","code":""},
                                                      {"name":"France","code":""},
                                                      // {"name":"Germany","code":""},
                                                      {"name":"Greece","code":""},
                                                      {"name":"Hungary","code":""},
                                                      {"name":"Iceland","code":""},
                                                      {"name":"Iceland","code":""},
                                                      {"name":"Ireland","code":""},
                                                      {"name":"Italy","code":""},
                                                      {"name":"Latvia","code":""},
                                                      {"name":"Liechtenstein","code":""},
                                                      {"name":"Luxembourg","code":""},
                                                      {"name":"Malta","code":""},
                                                      {"name":"Monaco","code":""},
                                                      {"name":"Netherlands","code":""},
                                                      {"name":"Norway","code":""},
                                                      {"name":"Poland","code":""},
                                                      {"name":"Portugal","code":""},
                                                      {"name":"Romania","code":""},
                                                      {"name":"Russia","code":""},
                                                      {"name":"San Marino","code":""},
                                                      {"name":"Slovakia","code":""},
                                                      {"name":"Spain (Spanish)","code":""},
                                                      {"name":"Spain (Catalan)","code":""},
                                                      {"name":"Sweden","code":""},
                                                      {"name":"Switzerland","code":""},
                                                      {"name":"Turkey","code":""},
                                                      {"name":"Ukraine","code":""},
                                                      // {"name":"United Kingdom","code":""},
                                                      {"name":"Vatican City (Holy See)","code":""}]},
                  {"catName":"Middle East","countryName":[{"name":"Bahrain","code":""},
                                                      {"name":"Iran","code":""},
                                                      {"name":"Iraq","code":""},
                                                      {"name":"Israel","code":""},
                                                      {"name":"Jordan","code":""},
                                                      {"name":"Kazakhstan","code":""},
                                                      {"name":"Kuwait","code":""},
                                                      {"name":"Lebanon","code":""},
                                                      {"name":"Oman","code":""},
                                                      {"name":"Pakistan","code":""},
                                                      {"name":"Pakistan","code":""},
                                                      {"name":"Qatar","code":""},
                                                      {"name":"Saudi Arabia","code":""},
                                                      {"name":"Syria","code":""},
                                                      {"name":"United Arab Emirates","code":""}]}];

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
    showHide('main-search', 0);
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
    }

    if(ele.innerHTML === '°C'){
        _User.setUnitPreference('m');
    } else {
        _User.setUnitPreference('e');
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



