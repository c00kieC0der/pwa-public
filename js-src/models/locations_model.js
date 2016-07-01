var _Locations = {};
(function(){

var eventLocations = document.createEvent('Event');
eventLocations.initEvent('builder-locations', true, true);

_Locations.searchLocs = function(term){

    //TODO:: Translate the locations.
    var tempLang = _User.lang.replace('-', '_');
    var getLocUrl = 'https://dsx.weather.com/x/v2/web/loc/' + tempLang + '/1/4/5/9/11/13/19/21/1000/1001/1003//us%5E/(' +
        term + ')?api=7bb1c920-7027-4289-9c96-ae5e263980bc';
    AjaxRequest.get(
        {
            'url' : getLocUrl,
            'generateUniqueUrl' : false,
            'onSuccess':function(req){
                var data = JSON.parse(req.responseText);
                _Locations.results =  data[0].doc ? data[0].doc : [];
                document.getElementById('event-anchor').dispatchEvent(eventLocations);
            }
        }
    );
};

_Locations.getGeoCoordinates = function(position){
    if(position && position.coords) {
        var coords = position.coords;
        var lat = coords.latitude.toFixed(2);
        var long = coords.longitude.toFixed(2);

        var locUrl = 'https://dsx.weather.com/wxd/loc/' +
            lat + ',' +
            long + '?format=json&apiKey=c1ea9f47f6a88b9acb43aba7faf389d4';

        AjaxRequest.get(
            {
                'url' : locUrl,
                'generateUniqueUrl' : false,
                'onSuccess':function(req){
                    _User.newActiveLocation(JSON.parse(req.responseText));
                }
            }
        );

    }
};

_Locations.callGeoLocation = function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(_Locations.getGeoCoordinates);
    }
};



    var defaultLocations = {
        "fr-BI": {
        "lat": -3.37,
            "long": 29.35,
            "locId": "BYXX0001:1:BY"
    },
        "ar-BH": {
        "lat": 26.22,
            "long": 50.58,
            "locId": "BAXX0042:1:BA"
    },
        "pt-AO": {
        "lat": -8.82,
            "long": 13.24,
            "locId": "AOXX0008:1:AO"
    },
        "bn-BD": {
        "lat": 23.7,
            "long": 90.39,
            "locId": "BGXX0003:1:BG"
    },
        "fr-BF": {
        "lat": 12.37,
            "long": -1.53,
            "locId": "UVXX0001:1:UV"
    },
        "zh-CN": {
        "lat": 39.93,
            "long": 116.4,
            "locId": "CHXX0008:1:CH"
    },
        "es-BO": {
        "lat": -19.06,
            "long": -65.26,
            "locId": "BLXX0013:1:BL"
    },
        "es-CL": {
        "lat": -33.46,
            "long": -70.64,
            "locId": "CIXX0020:1:CI"
    },
        "en-BZ": {
        "lat": 17.25,
            "long": -88.79,
            "locId": "BHXX0002:1:BH"
    },
        "es-AR": {
        "lat": -34.61,
            "long": -58.37,
            "locId": "ARBA0009:1:AR"
    },
        "fr-FR": {
        "lat": 48.86,
            "long": 2.35,
            "locId": "FRXX0076:1:FR"
    },
        "fr-GA": {
        "lat": 0.39,
            "long": 9.45,
            "locId": "GBXX0004:1:GB"
    },
        "fr-AD": {
        "lat": 42.51,
            "long": 1.52,
            "locId": "ANXX0002:1:AN"
    },
        "en-GB": {
        "lat": 51.51,
            "long": -0.13,
            "locId": "UKXX0085:1:UK"
    },
        "en-GM": {
        "lat": 13.46,
            "long": -16.6,
            "locId": "GAXX0001:1:GA"
    },
        "pt-CV": {
        "lat": 14.93,
            "long": -23.54,
            "locId": "CVXX0002:1:CV"
    },
        "es-EC": {
        "lat": -0.19,
            "long": -78.5,
            "locId": "ECXX0008:1:EC"
    },
        "es-GT": {
        "lat": 14.58,
            "long": -90.52,
            "locId": "GTXX0002:1:GT"
    },
        "fr-GN": {
        "lat": 9.55,
            "long": -13.67,
            "locId": "GVXX0002:1:GV"
    },
        "es-GQ": {
        "lat": 3.74,
            "long": 8.79,
            "locId": "EKXX0003:1:EK"
    },
        "pt-GW": {
        "lat": 11.87,
            "long": -15.6,
            "locId": "PUXX0001:1:PU"
    },
        "cs-CZ": {
        "lat": 50.08,
            "long": 14.43,
            "locId": "EZXX0012:1:EZ"
    },
        "es-CO": {
        "lat": 4.63,
            "long": -74.09,
            "locId": "COXX0004:1:CO"
    },
        "en-CM": {
        "lat": 3.87,
            "long": 11.52,
            "locId": "CMXX0008:1:CM"
    },
        "id-ID": {
        "lat": -6.18,
            "long": 106.83,
            "locId": "IDXX0022:1:ID"
    },
        "ar-DZ": {
        "lat": 36.77,
            "long": 3.04,
            "locId": "AGXX0001:1:AG"
    },
        "de-DE": {
        "lat": 52.52,
            "long": 13.38,
            "locId": "GMXX0007:1:GM"
    },
        "es-CR": {
        "lat": 10,
            "long": -84.22,
            "locId": "CSXX0009:1:CS"
    },
        "fr-CG": {
        "lat": -4.28,
            "long": 15.28,
            "locId": "CFXX0001:1:CF"
    },
        "es-DO": {
        "lat": 18.48,
            "long": -69.91,
            "locId": "DRXX0009:1:DR"
    },
        "ru-EE": {
        "lat": 59.44,
            "long": 24.74,
            "locId": "ENXX0004:1:EN"
    },
        "el-CY": {
        "lat": 35.17,
            "long": 33.37,
            "locId": "CYXX0005:1:CY"
    },
        "nl-BE": {
        "lat": 50.85,
            "long": 4.35,
            "locId": "BEXX0005:1:BE"
    },
        "pt-BR": {
        "lat": -15.78,
            "long": -47.91,
            "locId": "BRXX0043:1:BR"
    },
        "ms-BN": {
        "lat": 4.93,
            "long": 114.93,
            "locId": "BXXX0001:1:BX"
    },
        "de-CH": {
        "lat": 46.95,
            "long": 7.45,
            "locId": "SZXX0006:1:SZ"
    },
        "en-GH": {
        "lat": 5.56,
            "long": -0.2,
            "locId": "GHXX0001:1:GH"
    },
        "en-GY": {
        "lat": 6.82,
            "long": -58.14,
            "locId": "GYXX0001:1:GY"
    },
        "ar-ER": {
        "lat": 15.33,
            "long": 38.94,
            "locId": "ERXX0001:1:ER"
    },
        "en-BS": {
        "lat": 25.06,
            "long": -77.33,
            "locId": "BFXX0005:1:BF"
    },
        "el-GR": {
        "lat": 37.98,
            "long": 23.73,
            "locId": "GRXX0004:1:GR"
    },
        "fr-BE": {
        "lat": 50.85,
            "long": 4.35,
            "locId": "BEXX0005:1:BE"
    },
        "he-IL": {
        "lat": 31.78,
            "long": 35.22,
            "locId": "ISXX0010:1:IS"
    },
        "en-FM": {
        "lat": 7,
            "long": 158,
            "locId": "FMXX0004:1:FM"
    },
        "de-AT": {
        "lat": 48.21,
            "long": 16.37,
            "locId": "AUXX0025:1:AU"
    },
        "en-FJ": {
        "lat": -18.13,
            "long": 178.43,
            "locId": "FJXX0009:1:FJ"
    },
        "fr-CD": {
        "lat": -4.31,
            "long": 15.32,
            "locId": "CGXX0005:1:CG"
    },
        "fr-CA": {
        "lat": 49.02,
            "long": -81.27,
            "locId": "CAON4756:1:CA"
    },
        "hr-BA": {
        "lat": 43.85,
            "long": 18.38,
            "locId": "BKXX0004:1:BK"
    },
        "ar-AE": {
        "lat": 24.48,
            "long": 54.37,
            "locId": "AEXX0001:1:AE"
    },
        "fr-BJ": {
        "lat": 6.48,
            "long": 2.63,
            "locId": "BNXX0002:1:BN"
    },
        "en-AG": {
        "lat": 17.11,
            "long": -61.85,
            "locId": "ACXX0002:1:AC"
    },
        "en-CA": {
        "lat": 49.02,
            "long": -81.27,
            "locId": "CAON4756:1:CA"
    },
        "en-AU": {
        "lat": -35.31,
            "long": 149.13,
            "locId": "ASXX0023:1:AS"
    },
        "ru-BY": {
        "lat": 53.91,
            "long": 27.55,
            "locId": "BOXX0005:1:BO"
    },
        "ca-AD": {
        "lat": 42.51,
            "long": 1.52,
            "locId": "ANXX0002:1:AN"
    },
        "fr-DZ": {
        "lat": 36.77,
            "long": 3.04,
            "locId": "AGXX0001:1:AG"
    },
        "ar-DJ": {
        "lat": 11.59,
            "long": 43.15,
            "locId": "DJXX0001:1:DJ"
    },
        "da-DK": {
        "lat": 55.68,
            "long": 12.57,
            "locId": "DAXX0009:1:DA"
    },
        "fr-DJ": {
        "lat": 11.59,
            "long": 43.15,
            "locId": "DJXX0001:1:DJ"
    },
        "fr-CI": {
        "lat": 6.82,
            "long": -5.28,
            "locId": "IVXX3721:1:IV"
    },
        "en-BB": {
        "lat": 13.11,
            "long": -59.61,
            "locId": "BBXX0001:1:BB"
    },
        "fr-CM": {
        "lat": 3.87,
            "long": 11.52,
            "locId": "CMXX0008:1:CM"
    },
        "en-DM": {
        "lat": 15.3,
            "long": -61.39,
            "locId": "DOXX0002:1:DO"
    },
        "en-IN": {
        "lat": 28.61,
            "long": 77.21,
            "locId": "INXX0096:1:IN"
    },
        "en-JM": {
        "lat": 17.99,
            "long": -76.8,
            "locId": "JMXX0002:1:JM"
    },
        "ar-IQ": {
        "lat": 33.33,
            "long": 44.44,
            "locId": "IZXX0008:1:IZ"
    },
        "hu-HU": {
        "lat": 47.51,
            "long": 19.08,
            "locId": "HUXX0002:1:HU"
    },
        "ar-JO": {
        "lat": 31.95,
            "long": 35.93,
            "locId": "JOXX0002:1:JO"
    },
        "ja-JP": {
        "lat": 35.67,
            "long": 139.77,
            "locId": "JAXX0085:1:JA"
    },
        "fr-CF": {
        "lat": 4.36,
            "long": 18.56,
            "locId": "CTXX0001:1:CT"
    },
        "en-IE": {
        "lat": 53.33,
            "long": -6.25,
            "locId": "EIXX0014:1:EI"
    },
        "fr-HT": {
        "lat": 18.54,
            "long": -72.34,
            "locId": "HAXX0004:1:HA"
    },
        "en-KE": {
        "lat": -1.29,
            "long": 36.82,
            "locId": "KEXX0009:1:KE"
    },
        "ar-IL": {
        "lat": 31.78,
            "long": 35.22,
            "locId": "ISXX0010:1:IS"
    },
        "es-HN": {
        "lat": 14.09,
            "long": -87.22,
            "locId": "HOXX0008:1:HO"
    },
        "en-GD": {
        "lat": 12.07,
            "long": -61.74,
            "locId": "GJXX0001:1:GJ"
    },
        "hi-IN": {
        "lat": 28.61,
            "long": 77.21,
            "locId": "INXX0096:1:IN"
    },
        "bn-IN": {
        "lat": 28.61,
            "long": 77.21,
            "locId": "INXX0096:1:IN"
    },
        "it-IT": {
        "lat": 41.9,
            "long": 12.48,
            "locId": "ITXX0067:1:IT"
    },
        "ru-KG": {
        "lat": 42.87,
            "long": 74.59,
            "locId": "KGXX0001:1:KG"
    },
        "en-KI": {
        "lat": 1.33,
            "long": 172.98,
            "locId": "KRXX0002:1:KR"
    },
        "ar-KM": {
        "lat": -11.7,
            "long": 43.26,
            "locId": "CNXX0259:1:CN"
    },
        "fr-KM": {
        "lat": -11.7,
            "long": 43.26,
            "locId": "CNXX0259:1:CN"
    },
        "en-KN": {
        "lat": 17.31,
            "long": -62.73,
            "locId": "SCXX0001:1:SC"
    },
        "ar-KW": {
        "lat": 29.22,
            "long": 47.98,
            "locId": "KUXX0003:1:KU"
    },
        "en-LS": {
        "lat": -29.31,
            "long": 27.49,
            "locId": "LTXX0001:1:LT"
    },
        "ar-LY": {
        "lat": 32.87,
            "long": 13.18,
            "locId": "LYXX0009:1:LY"
    },
        "fr-MA": {
        "lat": 34.02,
            "long": -6.84,
            "locId": "MOXX0007:1:MO"
    },
        "fr-MG": {
        "lat": -18.89,
            "long": 47.51,
            "locId": "MAXX0002:1:MA"
    },
        "fr-ML": {
        "lat": 12.65,
            "long": -7.99,
            "locId": "MLXX0001:1:ML"
    },
        "ar-MR": {
        "lat": 18.09,
            "long": -15.98,
            "locId": "MRXX0004:1:MR"
    },
        "en-MT": {
        "lat": 35.91,
            "long": 14.52,
            "locId": "MTXX0001:1:MT"
    },
        "ko-KP": {
        "lat": 39.02,
            "long": 125.75,
            "locId": "KNXX0006:1:KN"
    },
        "ar-LB": {
        "lat": 33.89,
            "long": 35.51,
            "locId": "LEXX0003:1:LE"
    },
        "en-LC": {
        "lat": 14.03,
            "long": -60.98,
            "locId": "STXX0001:1:ST"
    },
        "ko-KR": {
        "lat": 37.56,
            "long": 126.99,
            "locId": "KSXX0037:1:KS"
    },
        "de-LI": {
        "lat": 47.14,
            "long": 9.53,
            "locId": "LSXX0002:1:LS"
    },
        "fr-MU": {
        "lat": -20.16,
            "long": 57.5,
            "locId": "MPXX0370:1:MP"
    },
        "en-LR": {
        "lat": 6.31,
            "long": -10.8,
            "locId": "LIXX0002:1:LI"
    },
        "ms-MY": {
        "lat": 3.16,
            "long": 101.71,
            "locId": "MYXX0008:1:MY"
    },
        "fr-LU": {
        "lat": 49.61,
            "long": 6.13,
            "locId": "LUXX0003:1:LU"
    },
        "en-NA": {
        "lat": -22.56,
            "long": 17.09,
            "locId": "WAXX0004:1:WA"
    },
        "ar-MA": {
        "lat": 34.02,
            "long": -6.84,
            "locId": "MOXX0007:1:MO"
    },
        "pt-MZ": {
        "lat": -25.95,
            "long": 32.57,
            "locId": "MZXX0003:1:MZ"
    },
        "fr-MC": {
        "lat": 43.73,
            "long": 7.42,
            "locId": "MNXX0002:1:MN"
    },
        "en-MH": {
        "lat": 7.08,
            "long": 171.38,
            "locId": "RMXX0095:1:RM"
    },
        "en-MU": {
        "lat": -20.16,
            "long": 57.5,
            "locId": "MPXX0370:1:MP"
    },
        "es-MX": {
        "lat": 19.43,
            "long": -99.14,
            "locId": "MXDF0132:1:MX"
    },
        "fr-NE": {
        "lat": 13.52,
            "long": 2.12,
            "locId": "NGXX0003:1:NG"
    },
        "en-NG": {
        "lat": 9.18,
            "long": 7.17,
            "locId": "NIXX0022:1:NI"
    },
        "es-NI": {
        "lat": 12.15,
            "long": -86.27,
            "locId": "NUXX0004:1:NU"
    },
        "nl-NL": {
        "lat": 52.37,
            "long": 4.89,
            "locId": "NLXX0002:1:NL"
    },
        "no-NO": {
        "lat": 59.91,
            "long": 10.74,
            "locId": "NOXX0029:1:NO"
    },
        "ar-OM": {
        "lat": 23.61,
            "long": 58.54,
            "locId": "MUXX0003:1:MU"
    },
        "en-PA": {
        "lat": 8.99,
            "long": -79.52,
            "locId": "PMXX0004:1:PM"
    },
        "es-PA": {
        "lat": 8.99,
            "long": -79.52,
            "locId": "PMXX0004:1:PM"
    },
        "es-PE": {
        "lat": -12.07,
            "long": -77.05,
            "locId": "PEXX0011:1:PE"
    },
        "en-PH": {
        "lat": 14.62,
            "long": 120.97,
            "locId": "RPXX0017:1:RP"
    },
        "tl-PH": {
        "lat": 14.62,
            "long": 120.97,
            "locId": "RPXX0017:1:RP"
    },
        "ur-PK": {
        "lat": 33.72,
            "long": 73.06,
            "locId": "PKXX0006:1:PK"
    },
        "en-NZ": {
        "lat": -41.29,
            "long": 174.78,
            "locId": "NZXX0049:1:NZ"
    },
        "en-PK": {
        "lat": 33.72,
            "long": 73.06,
            "locId": "PKXX0006:1:PK"
    },
        "pl-PL": {
        "lat": 52.26,
            "long": 21.02,
            "locId": "PLXX0028:1:PL"
    },
        "en-PW": {
        "lat": 7.5,
            "long": 134.64,
            "locId": "PSXX0002:1:PS"
    },
        "ro-RO": {
        "lat": 44.44,
            "long": 26.1,
            "locId": "ROXX0003:1:RO"
    },
        "ru-RU": {
        "lat": 55.75,
            "long": 37.62,
            "locId": "RSXX0063:1:RS"
    },
        "ar-QA": {
        "lat": 25.3,
            "long": 51.51,
            "locId": "QAXX0003:1:QA"
    },
        "fr-RW": {
        "lat": -1.94,
            "long": 30.06,
            "locId": "RWXX0001:1:RW"
    },
        "ar-SA": {
        "lat": 24.65,
            "long": 46.77,
            "locId": "SAXX0017:1:SA"
    },
        "sv-SE": {
        "lat": 59.33,
            "long": 18.06,
            "locId": "SWXX0031:1:SW"
    },
        "en-SG": {
        "lat": 1.3,
            "long": 103.85,
            "locId": "SNXX0006:1:SN"
    },
        "es-PY": {
        "lat": -25.3,
            "long": -57.63,
            "locId": "PAXX0001:1:PA"
    },
        "pt-PT": {
        "lat": 38.72,
            "long": -9.13,
            "locId": "POXX0016:1:PO"
    },
        "en-SL": {
        "lat": 8.49,
            "long": -13.24,
            "locId": "SLXX0001:1:SL"
    },
        "it-SM": {
        "lat": 43.94,
            "long": 12.43,
            "locId": "SMXX0001:1:SM"
    },
        "fr-SN": {
        "lat": 14.72,
            "long": -17.48,
            "locId": "SGXX0001:1:SG"
    },
        "en-SS": {
        "lat": 4.85,
            "long": 31.58,
            "locId": "ODXX0321:1:OD"
    },
        "nl-SR": {
        "lat": 5.87,
            "long": -55.17,
            "locId": "NSXX0233:1:NS"
    },
        "en-RW": {
        "lat": -1.94,
            "long": 30.06,
            "locId": "RWXX0001:1:RW"
    },
        "en-SB": {
        "lat": -9.43,
            "long": 159.91,
            "locId": "BPXX0001:1:BP"
    },
        "ar-SD": {
        "lat": 15.58,
            "long": 32.52,
            "locId": "SUXX0002:1:SU"
    },
        "zh-SG": {
        "lat": 1.3,
            "long": 103.85,
            "locId": "SNXX0006:1:SN"
    },
        "sk-SK": {
        "lat": 48.16,
            "long": 17.13,
            "locId": "LOXX0001:1:LO"
    },
        "ar-SO": {
        "lat": 2.05,
            "long": 45.33,
            "locId": "SOXX0002:1:SO"
    },
        "en-SZ": {
        "lat": -26.32,
            "long": 31.14,
            "locId": "WZXX0001:1:WZ"
    },
        "fr-TD": {
        "lat": 12.11,
            "long": 15.05,
            "locId": "CDXX0003:1:CD"
    },
        "th-TH": {
        "lat": 13.73,
            "long": 100.5,
            "locId": "THXX0002:1:TH"
    },
        "en-TO": {
        "lat": -21.14,
            "long": -175.22,
            "locId": "TNXX0001:1:TN"
    },
        "tr-TR": {
        "lat": 39.93,
            "long": 32.85,
            "locId": "TUXX0002:1:TU"
    },
        "en-TT": {
        "lat": 10.66,
            "long": -61.51,
            "locId": "TDXX0002:1:TD"
    },
        "en-TV": {
        "lat": -8.52,
            "long": 179.19,
            "locId": "TVXX0001:1:TV"
    },
        "zh-TW": {
        "lat": 25.07,
            "long": 121.55,
            "locId": "TWXX0021:1:TW"
    },
        "pt-ST": {
        "lat": 0.37,
            "long": 6.73,
            "locId": "TPXX0001:1:TP"
    },
        "en-TZ": {
        "lat": -6.17,
            "long": 35.74,
            "locId": "TZXX0002:1:TZ"
    },
        "es-SV": {
        "lat": 14,
            "long": -89.54,
            "locId": "ESXX0003:1:ES"
    },
        "en-UG": {
        "lat": 0.32,
            "long": 32.58,
            "locId": "UGXX0002:1:UG"
    },
        "ar-SY": {
        "lat": 33.5,
            "long": 36.32,
            "locId": "SYXX0004:1:SY"
    },
        "es-UY": {
        "lat": -34.87,
            "long": -56.17,
            "locId": "UYXX0006:1:UY"
    },
        "fa-IR": {
        "lat": 35.67,
            "long": 51.43,
            "locId": "IRXX0018:1:IR"
    },
        "hr-HR": {
        "lat": 45.8,
            "long": 15.97,
            "locId": "HRXX0005:1:HR"
    },
        "es-ES": {
        "lat": 40.42,
            "long": -3.7,
            "locId": "SPXX0050:1:SP"
    },
        "fi-FI": {
        "lat": 60.16,
            "long": 24.95,
            "locId": "FIXX0002:1:FI"
    },
        "ar-EG": {
        "lat": 30.06,
            "long": 31.25,
            "locId": "EGXX0004:1:EG"
    },
        "ar-TD": {
        "lat": 12.11,
            "long": 15.05,
            "locId": "CDXX0003:1:CD"
    },
        "ar-TN": {
        "lat": 36.84,
            "long": 10.22,
            "locId": "TSXX0010:1:TS"
    },
        "vi-VN": {
        "lat": 21.02,
            "long": 105.85,
            "locId": "VMXX0006:1:VM"
    },
        "it-VA": {
        "lat": 41.9,
            "long": 12.45,
            "locId": "VTXX0001:1:VT"
    },
        "en-VC": {
        "lat": 13.16,
            "long": -61.22,
            "locId": "VCXX0065:1:VC"
    },
        "fr-TG": {
        "lat": 6.17,
            "long": 1.35,
            "locId": "TOXX0001:1:TO"
    },
        "es-US": {
        "lat": 38.89,
            "long": -77.03,
            "locId": "USDC0001:1:US"
    },
        "es-VE": {
        "lat": 10.5,
            "long": -66.9,
            "locId": "VEXX0008:1:VE"
    },
        "fr-VU": {
        "lat": -17.74,
            "long": 168.32,
            "locId": "NHXX0077:1:NH"
    },
        "ar-YE": {
        "lat": 15.35,
            "long": 44.21,
            "locId": "YMXX0005:1:YM"
    },
        "en-ZA": {
        "lat": -25.73,
            "long": 28.22,
            "locId": "SFXX0044:1:SF"
    },
        "uk-UA": {
        "lat": 50.45,
            "long": 30.5,
            "locId": "UPXX0486:1:UP"
    },
        "en-ZM": {
        "lat": -15.42,
            "long": 28.29,
            "locId": "ZAXX0004:1:ZA"
    },
        "en-US": {
        "lat": 38.89,
            "long": -77.03,
            "locId": "USDC0001:1:US"
    },
        "en-VU": {
        "lat": -17.74,
            "long": 168.32,
            "locId": "NHXX0077:1:NH"
    },
        "en-ZW": {
        "lat": -17.82,
            "long": 31.05,
            "locId": "ZIXX0004:1:ZI"
    }
    };



//   If a user does not have a default location, let's try to geolocate them

    //TODO:  for testing only remove the below line before going to prod.


    //_User.activeLocation = {};
    if (!_User.activeLocation.prsntNm) {
        if(_User.lang){
            _User.newActiveLocation(defaultLocations[_User.lang]);
            //How to get
            console.log(_User.activeLocation);
        } else {
            _Locations.callGeoLocation();
        }
    }


})();