var _Data={};!function(){var a="https://api.weather.com/v2/turbo/vt1fifteenminute;vt1hourlyForecast;vt1precipitation;vt1currentdatetime;vt1pollenforecast;vt1dailyForecast;vt1observation;vt1alerts?units="+_User.unitPref+"&language="+_User.lang+"&geocode="+_User.activeLocation.lat+","+_User.activeLocation["long"]+"&format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4",t=document.createEvent("Event"),e=document.createEvent("Event");e.initEvent("astro-builder",!0,!0),t.initEvent("builder",!0,!0),_Data.collectNew=function(){AjaxRequest.get({url:a,generateUniqueUrl:!1,onSuccess:function(a){var e=JSON.parse(a.responseText);_Data.obs=e.vt1observation,_Data.datetime=e.vt1currentdatetime,_Data.dailyForecast=e.vt1dailyForecast,_Data.pollenforecast=e.vt1pollenforecast,_Data.precipitation=e.vt1precipitation,_Data.fifteen=e.vt1fifteenminute,_Data.hourly=e.vt1hourlyForecast,n(),document.getElementById("event-anchor").dispatchEvent(t)}})},_User.activeLocation.prsntNm&&_Data.collectNew();var r=function(a){var t=new Date(a),e=t.getHours(),r=t.getMinutes();0===r&&(r="00");var i="AM";return 12===e&&(i="PM"),e>12&&(e-=12,i="PM"),0===e&&(e=12),e+":"+r+" "+i},i=function(a){var t=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],r=new Date(a);return t[r.getDay()]+", "+e[r.getMonth()]+" "+r.getDate()},n=function(){_Data.hourly.time=[],_Data.hourly.date=[],_Data.lookingAhead=o();for(var a in _Data.hourly.processTime)_Data.hourly.time[a]=r(_Data.hourly.processTime[a]),_Data.hourly.date[a]=i(_Data.hourly.processTime[a])},o=function(){var a=_Data.dailyForecast,t=[];return t=null===a.day.dayPartName[0]?[{daypartName:a.night.dayPartName[0],highLow:"Low",phrase:a.night.phrase[0],wxicon:getWxIcon(a.night.icon[0]),temperature:a.night.temperature[0],narrative:a.night.narrative[0],precip:a.night.precipPct[0]},{daypartName:a.day.dayPartName[1],highLow:"High",phrase:a.day.phrase[1],wxicon:getWxIcon(a.day.icon[1]),temperature:a.day.temperature[1],narrative:a.day.narrative[1],precip:a.day.precipPct[1]},{daypartName:a.night.dayPartName[1],highLow:"Low",phrase:a.night.phrase[1],wxicon:getWxIcon(a.night.icon[1]),temperature:a.night.temperature[1],narrative:a.night.narrative[1],precip:a.night.precipPct[1]}]:[{daypartName:a.day.dayPartName[0],highLow:"High",phrase:a.day.phrase[0],wxicon:getWxIcon(a.day.icon[0]),temperature:a.day.temperature[0],narrative:a.day.narrative[0],precip:a.day.precipPct[0]},{daypartName:a.night.dayPartName[0],highLow:"Low",phrase:a.night.phrase[0],wxicon:getWxIcon(a.night.icon[0]),temperature:a.night.temperature[0],narrative:a.night.narrative[0],precip:a.night.precipPct[0]},{daypartName:a.day.dayPartName[1],highLow:"High",phrase:a.day.phrase[1],wxicon:getWxIcon(a.day.icon[1]),temperature:a.day.temperature[1],narrative:a.day.narrative[1],precip:a.day.precipPct[1]}]}}();