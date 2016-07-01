/**
 * Created by ljeff on 6/19/16.
 */

importScripts('user_model.js');
importScripts('wx_data_model.js');

onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}

console.log('user', _User);
postMessage(_User);