function dayPartClick(a,e){document.getElementById("dp1-details").style.display="none",document.getElementById("dp2-details").style.display="none",document.getElementById("dp3-details").style.display="none",document.getElementById(a).style.display="block";var t=document.getElementById("daypart-1"),d=document.getElementById("daypart-2"),o=document.getElementById("daypart-3");hasClass(this,"selected")||(removeClass(t,"selected"),removeClass(d,"selected"),removeClass(o,"selected"),addClass(document.getElementById(e),"selected"))}!function(){var a=[],e=function(){var e="e"===_User.unitPref?"mph":"kph",t="e"===_User.unitPref?"in":"mb",d="e"===_User.unitPref?"mi":"km",o=_Data.obs.barometerTrend,n="Falling"===o?'<span class="wx-iconfont-global wx-icon-arrow-down-4"></span>':"Rising"===o?'<span class="wx-iconfont-global wx-icon-arrow-up-4"></span>':'<span class="wx-iconfont-global wx-icon-arrow-right1-4"></span>',i=_Data.obs.uvIndex>10?"Extreme":_Data.obs.uvIndex+" of 10";a=[["nowcard-location",_User.activeLocation.prsntNm],["nowcard-temp",_Data.obs.temperature],["nowcard-feels-value",_Data.obs.feelsLike],["nowcard-phrase",_Data.obs.phrase],["nowcard-hi-value",_Data.obs.phrase],["nowcard-lo-value",_Data.dailyForecast.night.temperature[0]],["nowcard-humidity",_Data.obs.humidity],["nowcard-wind",_Data.obs.windDirCompass+" "+_Data.obs.windSpeed+" "+e],["nowcard-dewpoint",_Data.obs.dewPoint],["nowcard-pressure",_Data.obs.altimeter+" "+t+" "+n],["nowcard-visibility",_Data.obs.visibility+d],["nowcard-uv-index",i],["dp1-daypartName",_Data.lookingAhead[0].daypartName],["dp1-phrase",_Data.lookingAhead[0].phrase],["la-part1-icon",_Data.lookingAhead[0].wxicon],["dp1-highLow",_Data.lookingAhead[0].highLow],["dp1-temperature",_Data.lookingAhead[0].temperature],["dp1-precip",_Data.lookingAhead[0].precip],["dp2-daypartName",_Data.lookingAhead[1].daypartName],["dp2-phrase",_Data.lookingAhead[1].phrase],["la-part2-icon",_Data.lookingAhead[1].wxicon],["dp2-highLow",_Data.lookingAhead[1].highLow],["dp2-temperature",_Data.lookingAhead[1].temperature],["dp2-precip",_Data.lookingAhead[1].precip],["dp3-daypartName",_Data.lookingAhead[2].daypartName],["dp3-phrase",_Data.lookingAhead[2].phrase],["la-part3-icon",_Data.lookingAhead[2].wxicon],["dp3-highLow",_Data.lookingAhead[2].highLow],["dp3-temperature",_Data.lookingAhead[2].temperature],["dp3-precip",_Data.lookingAhead[2].precip],["dp1-details-narrative",_Data.lookingAhead[0].narrative],["dp1-details-wind",_Data.lookingAhead[0].windDirCompass+" "+_Data.lookingAhead[0].windSpeed+" "+e],["dp1-details-humidity",_Data.lookingAhead[0].humidity],["dp1-details-uvIndex",_Data.lookingAhead[0].uvIndex+" of 10"],["dp1-details-sunrise",_Data.lookingAhead[0].sunrise],["dp1-details-sunset",_Data.lookingAhead[0].sunset],["dp2-details-narrative",_Data.lookingAhead[1].narrative],["dp2-details-wind",_Data.lookingAhead[1].windDirCompass+" "+_Data.lookingAhead[1].windSpeed+" "+e],["dp2-details-humidity",_Data.lookingAhead[1].humidity],["dp2-details-uvIndex",_Data.lookingAhead[1].uvIndex+" of 10"],["dp2-details-sunrise",_Data.lookingAhead[1].sunrise],["dp2-details-sunset",_Data.lookingAhead[1].sunset],["dp3-details-narrative",_Data.lookingAhead[2].narrative],["dp3-details-wind",_Data.lookingAhead[2].windDirCompass+" "+_Data.lookingAhead[2].windSpeed+" "+e],["dp3-details-humidity",_Data.lookingAhead[2].humidity],["dp3-details-uvIndex",_Data.lookingAhead[2].uvIndex+" of 10"],["dp3-details-sunrise",_Data.lookingAhead[2].sunrise],["dp3-details-sunset",_Data.lookingAhead[2].sunset]];var s=_Data.obs.temperatureMaxSince7am?_Data.obs.temperatureMaxSince7am:null!==_Data.dailyForecast.day.temperature[0]?_Data.dailyForecast.day.temperature[0]:"--";a.push(["nowcard-hi-value",s]),console.dir(_Data.lookingAhead),document.getElementById("nowcard-icon").innerHTML=getWxIcon(_Data.obs.icon)};document.getElementById("event-anchor").addEventListener("builder",function(){e(),helper.setContent(a)}),_Data.obs&&(e(),helper.setContent(a)),document.getElementById("dp2-details").style.display="none",document.getElementById("dp3-details").style.display="none"}();