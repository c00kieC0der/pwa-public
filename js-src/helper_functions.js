var helper = {};

(function(exports, d) {
    function domReady(fn, context) {

        function onReady(event) {
            d.removeEventListener("DOMContentLoaded", onReady);
            fn.call(context || exports, event);
        }

        function onReadyIe(event) {
            if (d.readyState === "complete") {
                d.detachEvent("onreadystatechange", onReadyIe);
                fn.call(context || exports, event);
            }
        }

        d.addEventListener && d.addEventListener("DOMContentLoaded", onReady) ||
        d.attachEvent      && d.attachEvent("onreadystatechange", onReadyIe);
    }

    exports.domReady = domReady;
})(window, document);

helper.isInViewport = function(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&

        rect.top <= (
        window.innerHeight ||
        document.documentElement.clientHeight) &&

        rect.left <= (
        window.innerWidth ||
        document.documentElement.clientWidth)
    );
};

helper.registerListener = function(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func)
    } else {
        window.attachEvent('on' + event, func)
    }
};
helper.removeListener = function(event, func){
    if(window.addEventListener){
        window.removeEventListener(event, func);
    } else {
        window.detachEvent('on' + event, func);
    }
};

//TODO: add class functionality to loadTemplate function and make reusable

helper.loadTemplateWithClass = function(elementId, type, name){
    var path = '/templates/' + type + '/' + name + '/' + name + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            helper.addClass(document.getElementById(elementId), 'slide-out');
            document.getElementById(elementId).innerHTML = xhr.responseText;

            setTimeout(function(){
                helper.removeClass(document.getElementById(elementId), 'slide-out');
            }, 300);
        }
    };
    xhr.send();
    //Then load the js

    var body = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/templates/' + type + '/' + name + '/' + name + '.js';

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = name + 'Run';
    script.onload = name + 'Run';

    // Fire the loading
    body.appendChild(script);
};


helper.loadTemplate = function(elementId, type, name){
    var path = '/templates/' + type + '/' + name + '/' + name + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
            var body = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '/templates/' + type + '/' + name + '/' + name + '.js';

            // Then bind the event to the callback function.
            // There are several events for cross browser compatibility.
            script.onreadystatechange = name + 'Run';
            script.onload = name + 'Run';

            // Fire the loading
            body.appendChild(script);
        }
    };
    xhr.send();
};


helper.setContent = function(content){
        var assignToDOM = function(arr){
            document.getElementById(arr[0]).innerHTML = arr[1];
        };
        if(typeof content === 'object'){
            for(var x=0; x < content.length; x++){
                assignToDOM(content[x]);
            }
        }
};

helper.empty = function(divId){
    document.getElementById(divId).innerHTML = '';
};

// helper.ngRepeat('vertical-wx-row', 'components', 'vertical-wx-row', ngRepeatMap, _Data.hourly, 6);
helper.ngRepeat = function(divId, componentName, dataMap, data, multiplier){
    multiplier = multiplier === 'all' ? data[dataMap[0][1]].length : multiplier;
    var path = '/templates/components/' + componentName + '/' + componentName + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var classXes = '', x = 0, i = 0, j = 0, div ;
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var rawTemplate = xhr.responseText;
            //put the template in x times.
            for(x=0; x < multiplier; x++){
                div = document.getElementById(divId);
                if(div){
                    div.innerHTML += rawTemplate;
                }
                //document.getElementById(divId).innerHTML += rawTemplate;
            }
            //for each item in the map, get all the elements with that class.
            for(i=0; i < dataMap.length; i++){
                classXes = document.getElementsByClassName(dataMap[i][0]);
                //for each element, place its piece of data in it.
                for(j=0; j < classXes.length; j++){

                    if(dataMap[i][1] === 'icon'){
                        classXes[j].innerHTML = getWxIcon(data[dataMap[i][1]][j]);
                    } else {
                        classXes[j].innerHTML = data[dataMap[i][1]][j];
                        if(dataMap[i][2]){
                            classXes[j].innerHTML += ' ' + dataMap[i][2];
                        }
                    }

                }
            }

        }
    };
    xhr.send();


};

helper.ngRepeatReverse = function(divId, componentName, dataMap, data, multiplier){
    multiplier = multiplier === 'all' ? dataMap.length : multiplier;
    var path = 'templates/components/' + componentName + '/' + componentName + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var classXes = '', x = 0, i = 0, j = 0 ;
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var rawTemplate = xhr.responseText;
            //put the template in x times.
            for(x=0; x < multiplier; x++){
                document.getElementById(divId).innerHTML += rawTemplate;
            }
            //for each item in the map, get all the elements with that class.
            for(i=0; i < dataMap.length; i++){
                classXes = document.getElementsByClassName(dataMap[i][0]);
                //for each element, place its piece of data in it.
                for(j=0; j < classXes.length; j++){
                    classXes[j].innerHTML = data[j][dataMap[i][1]];
                }
            }

        }
    };
    xhr.send();
};

helper.isNumeric = function(num){
    return typeof num === 'number' && num !== 'NaN';
};

helper.capitalize = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
};

helper.hasClass = function(elem, className){
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

helper.addClass = function(elem, className){
    if (!helper.hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
};

helper.removeClass = function(elem, className){
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (helper.hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
};


helper.toggleClass = function(elem, className){
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
};

// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = helper;
}

helper.getJSON = function(path){
    return new Promise(function(resolve) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                resolve(JSON.parse(xobj.responseText));
            }
        };
        xobj.send(null);
    });
};

helper.parseQueryString = function() {

    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;
};