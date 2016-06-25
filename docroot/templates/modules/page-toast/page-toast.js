/**
 * Created by omkard on 6/24/16.
 */

console.log('This is the page toast');

/**
 * Cases whether to show the toast or not
 * Case 1: Check if User is logged in or not - If yes don't show the toast,    => Not showing the toast
 * Case 2: If user is not logged -> check if web_push object (_User.webPush ) exists or not
 *          a. If the webPush object is empty - show the toast   => Showing the toast
 *          b. If the webPush object is not empty - check the status of the webPush (_User.webPush.PushStatus)
 *              Status could be "NoPushNotification" or "ConfirmPushNotification"
 *              If the status is "ConfirmPushNotification" don't show the toast => Not showing the toast
 *              If the status is "NoPushNotification" check the time stamp (_User.webPush.timeStamp)
 *                  Compare with the present time and check if it is greater than 14 days
 *                     If status >= 14 days => Showing the toast
 *                     If status < 14 days => Not showing the toast
 *
 * Things to do when user clicks on the toast from PWA
 *
 * Case 1 : If confirms
 *          Call the _User.updatePushNotifications(by passing true)
 * Case 2 : If denies
 *           Call the _User.updatePushNotifications(by passing false)
 */

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
    //** upUsers = if the user has logged in we cannot show the module
    //if (document.cookie.indexOf('uplogin') !== -1), then do not display the banner
    // ** webpush **
    // 1. If the web notification object does not exist in jStorage, that means user did not interact with the toast
    // 2. If jStorage web notification object does exist  there is always be a timestamp
    //    a. noPushNotifications (boolean) = this means that user has clicked on the close icon (check timestamp)
    //    b. confirmNotifications (boolean) = this means that they declared that they want notifications
    // vars jStorage = jStorage + webPushNotifications
    // localStorage.setItem(jStorage)


    if(_User.loggedIn){
        console.log('Yes');
    }else{
        console.log('No');
    }

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
