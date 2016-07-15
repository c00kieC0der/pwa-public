/**
 * Created by ecook on 6/15/16.
 */
var _Content = {};
var mostPopularUrl = 'https://dsx.weather.com/cms/v4/asset-list/en_US/most-popular-articles-and-videos/(0,5)?api=7bb1c920-7027-4289-9c96-ae5e263980bc';
var newsUrl = 'http://dsx.weather.com/cms/v4/news/en_US?api=7bb1c920-7027-4289-9c96-ae5e263980bc';
var contentModeUrl = 'http://dsx.weather.com/cms/settings/content-mode';
var eventContent = document.createEvent('Event');
eventContent.initEvent('builder-content', true, true);

_Content.getContent = function(){
    AjaxRequest.get(
        {
            'url' : contentModeUrl,
            'generateUniqueUrl' : false,
            'onSuccess':function(req){
                var data = JSON.parse(req.responseText);
                _Content.mode =  data;
                document.getElementById('event-anchor').dispatchEvent(eventContent);
            }
        }
    );
};

_Content.getContent();

