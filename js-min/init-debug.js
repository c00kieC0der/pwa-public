helper.loadTemplate('page-toast-div', 'modules', 'page-toast');

//initialize the service worker file.
if('serviceWorker' in navigator){
    navigator.serviceWorker.register(
        'https://twcrb.dev.weather.com/service_worker.js',
        {scope: '/docroot/!*'}
    ).then();
}

