/**
 * Created by omkard on 6/24/16.
 */
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
var today = new Date();
var utcTime = today.toISOString();

console.log(utcTime);


var requestFileSystem = window.RequestFileSystem || window.webkitRequestFileSystem;
requestFileSystem && requestFileSystem(window.TEMPORARY, 100, GmPushNotIncognito);

function GmPushNotIncognito() {
    if(getPCOStatus()){
        var toast = document.getElementById('page-div-toast');
        var finalHeight = 0;
        var startingHeight = -200;
        var id = setInterval(frame, 10);

        function frame() {
            if (startingHeight === finalHeight) {
                clearInterval(id);
            } else {
                startingHeight += 5;
                toast.style.bottom = startingHeight + 'px';
            }
        }
    }
}

function getPCOStatus(){
    var webPush = _User.webPush;
    var daysToWait = 14;
    if (_User.loggedIn) {
        // UP user, do not show the banner:
        return false;
    } else if ((!webPush || Object.keys(webPush).length === 0)) {
        // New user, show the banner:
        return true;
    } else if (webPush && webPush.PushStatus === 'ConfirmedPushNotification') {
        // Existing user, already subscribed
        return false;
    } else if (webPush && webPush.PushStatus === 'NoPushNotification' && webPush.timeStamp) {
        // Existing user, but reject/closed banner, need to ask them again after 14 days
        var time = new Date(webPush.timeStamp), currentTime = new Date();
        return (currentTime > new Date(time.setDate(time.getDate() + daysToWait)));
    }
}

function toastClicked(){
    console.log('Clicked toast')
    document.getElementById('page-div-toast').style.display = 'none';
    _User.updatePushNotifications(true);
}

function closeToast() {
    console.log('Closed toast')
    document.getElementById('page-div-toast').style.display = 'none';
    _User.updatePushNotifications(false);
}

