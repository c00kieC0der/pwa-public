/**
 * Created by ecook on 6/15/16.
 */
var _Content = {};
var mostPopularUrl = 'https://dsx.weather.com/cms/v4/asset-list/en_US/most-popular-articles-and-videos/(0,5)?api=7bb1c920-7027-4289-9c96-ae5e263980bc';
var newsUrl = 'http://dsx.weather.com/cms/v4/news/en_US?api=7bb1c920-7027-4289-9c96-ae5e263980bc';
var eventContent = document.createEvent('Event');
eventContent.initEvent('builder-content', true, true);

_Content.getContent = function(){
    AjaxRequest.get(
        {
            'url' : mostPopularUrl,
            'generateUniqueUrl' : false,
            'onSuccess':function(req){
                var data = JSON.parse(req.responseText);
                console.log(data);
                _Content.results =  data[0].doc ? data[0].doc : [];
                document.getElementById('event-anchor').dispatchEvent(eventContent);
            }
        }
    );
};

_Content.getContent();