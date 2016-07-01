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


//TODO: add class functionality to loadTemplate function and make reusable

helper.loadTemplateWithClass = function(elementId, type, name){
    var path = '/templates/' + type + '/' + name + '/' + name + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            addClass(document.getElementById(elementId), 'slide-out');
            document.getElementById(elementId).innerHTML = xhr.responseText;

            setTimeout(function(){
                removeClass(document.getElementById(elementId), 'slide-out');
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
    multiplier = multiplier === 'all' ? dataMap.length : multiplier;
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
                    }
                }
            }

        }
    };
    xhr.send();


};

//Can be edited into original ngRepeat. Check for array
helper.ngRepeatSpecific = function(divId, componentName, dataMap, data, indices){
    var path = '/templates/components/' + componentName + '/' + componentName + '.html';
    var xhr = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var classXes = '', x = 0, i = 0, j = 0, div ;
    xhr.open('get', path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var rawTemplate = xhr.responseText;
            //put the template in x times.
            console.log("Index length: "+indices.length);
            for(x=0; x < indices.length; x++){
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
                        classXes[j].innerHTML = getWxIcon(data[dataMap[i][1]][indices[j]]);
                    } else {
                        console.log(data[dataMap[i][1]][indices[j]]);
                        classXes[j].innerHTML = data[dataMap[i][1]][indices[j]];
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

// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = helper;
}