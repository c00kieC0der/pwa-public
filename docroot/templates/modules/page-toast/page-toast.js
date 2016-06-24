/**
 * Created by omkard on 6/23/16.
 */

console.log('This is the page toast');

var requestFileSystem = window.RequestFileSystem || window.webkitRequestFileSystem;
requestFileSystem && requestFileSystem(window.TEMPORARY, 100, GmPushNotIncognito);

var storedUserDecline = false;
var userDateDecline = '6/6/2016';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;
var date1 = new Date(userDateDecline);
var date2 = new Date(today);

var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


function GmPushNotIncognito() {
    console.log('This is GmPushNotIncognito');

   // console.log(window.localStorage._Stored_User);
    if(!storedUserDecline){
        if(userDateDecline == null || diffDays >= 14){
            var toast = document.getElementById('page-div-toast');
            slideUp(toast);
        }
    }
}


function closeToast() {
    var userDateDecline = today;
    document.getElementById('page-div-toast').style.display = 'none';
}

/**
 * Like jQuery's slideDown function - uses CSS3 transitions
 * @param  {Node} elem Element to show and hide
 */
function slideUp(elem) {
    elem.style.maxHeight = '200px';
    // We're using a timer to set opacity = 0 because setting max-height = 0 doesn't (completely) hide the element.
    elem.style.opacity   = '1';
    console.log('slideUp')
}
/**
 * Call once after timeout
 * @param  {Number}   seconds  Number of seconds to wait
 * @param  {Function} callback Callback function
 */
function once (seconds, callback) {
    var counter = 0;
    var time = window.setInterval(function () {
        counter++;
        if (counter >= seconds) {
            callback();
            window.clearInterval(time);
        }
    }, 400);
}
