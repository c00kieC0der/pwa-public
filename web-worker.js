/**
 * Created by ljeff on 6/19/16.
 */

importScripts('/web-worker/user_model.js');
console.log('user', _User);
//importScripts('https://js-sec.indexww.com/ht/ls-weather.js');
console.log({type: 'ls-weather', payload: 'ls-weather loaded loaded'});



onmessage = function(e) {
  console.log('Message received from main script', e.data.payload);
  var workerResult = 'Result: ' + (e.data.payload);
  _User.newActiveLocation(e.data.payload)
  console.log('Posting message back to main script');
  //postMessage(workerResult);
}

postMessage({type: 'user', payload: JSON.stringify(_User)});