helper.loadTemplate('page-toast-div', 'modules', 'page-toast');

//initialize the service worker file.
if('serviceWorker' in navigator){
    navigator.serviceWorker.register(
        'service_worker.js',
        {scope: './!*'}
    ).then(console.log('it registered.'));
}

