var gulp = require('gulp');
var fs = require('fs');
var _ = require('underscore');
var request = require('request');
var localesConfig = require('./locales.json');
var childProcess = require('child_process');

var exec = childProcess.exec;

gulp.task('js-minify', function() {
    // place code for your default task here
});

gulp.task('css-minify', function() {
    // place code for your default task here
});


gulp.task('fuduciary', function() {
    // place code for your default task here
});

gulp.task('download-translations', function() {
    fs.readFile('./keys.json', 'utf-8', function(err, data) {
        if (err) {
            // If no keys.json file exists then return
            console.log('No keys.json file exists with Smartling credentials');
            return;
        }

        var keys = JSON.parse(data);


        var projectId = 'bc36bacc6';

        var locales = _.uniq(_.pluck(localesConfig, 'smartlingLocale'));

        // Remove en-US locale
        locales = _.without(locales, 'en-US');

        // Get access token
        var options = {
            url: 'https://api.smartling.com/auth-api/v2/authenticate',
            method: 'POST',
            json: true,
            body: {
                userIdentifier: keys.smartling.userIdentifier,
                userSecret: keys.smartling.userSecret
            }
        };
 return console.log(options);
        request(options, function(error, response, body) {
            var accessToken = body.response.data.accessToken;

        // Download files
        var options = {
            url: 'https://api.smartling.com/files-api/v2/projects/' + projectId + '/files/zip',
            method: 'GET',
            qs: {
                fileUris: ['app.json'],
                localeIds: locales
            },
            qsStringifyOptions: {
                arrayFormat: 'brackets'
            },
            headers: {
                Authorization: 'Bearer' + accessToken
            }
        };

        request(options)
            .on('error', function(err) {
                console.log(err);
            })
            .pipe(fs.createWriteStream('./translations.zip'))
            .on('close', function() {
            var destinationDir = 'js/translated';

        var unzipError = false;

        var child = exec('unzip -o translations.zip -d ' + destinationDir, {async: true});

        child.stderr.on('data', function(error) {
            console.log(error);
        unzipError = true;
    });

        child.stdout.on('close', function(data) {
            if (!unzipError) {
            console.log('Translations successfully downloaded to ' + destinationDir);
        } else {
            console.log('There was an error unzipping the translations ZIP file');
        }
    });
    });

    });
    });
    });

gulp.task('upload-translations', function() {

    fs.readFile('./keys.json', 'utf-8', function(err, data) {
        if (err) {
            // If no keys.json file exists then return
            console.log('No keys.json file exists with Smartling credentials');
            return;
        }
console.log(data);
        var keys = JSON.parse(data);

        var projectId = 'bc36bacc6';

        // Get access token
        var options = {
            url: 'https://api.smartling.com/auth-api/v2/authenticate',
            method: 'POST',
            json: true,
            body: {
                userIdentifier: keys.smartling.userIdentifier,
                userSecret: keys.smartling.userSecret
            }
        };

        request(options, function(error, response, body) {
            var accessToken = body.response.data.accessToken;

        // Upload files
        var options = {
            url: 'https://api.smartling.com/files-api/v2/projects/' + projectId + '/file',
            method: 'POST',
            formData: {
                file: fs.createReadStream(__dirname + '/' + file),
                fileUri: ['app.json'],
                fileType: 'json',
                authorize: 'true'
            },
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        };

        request(options, function(error, response, body) {
            console.log(error, body);
    });
    });
    });
});

gulp.task('download-translations', function() {
    fs.readFile('./keys.json', 'utf-8', function(err, data) {
        if (err) {
            // If no keys.json file exists then return
            console.log('No keys.json file exists with Smartling credentials');
            return;
        }

        var keys = JSON.parse(data);

        var projectId = 'bc36bacc6';

        var locales = _.map(localesConfig, function(val, key) {
                var locale = key;
        if (smartlingLocalesMap[locale]) {
            // Check if Smartling uses a different version of this locale
            return smartlingLocalesMap[locale];
        }
        return locale;
    });

        locales = _.uniq(locales);

        // Remove en-US locale
        locales = _.without(locales, 'en-US');

        // Get access token
        var options = {
            url: `https://api.smartling.com/auth-api/v2/authenticate`,
            method: 'POST',
            json: true,
            body: {
                userIdentifier: keys.smartling.userIdentifier,
                userSecret: keys.smartling.userSecret
            }
        };

        glob('src/translations/**/*.json', function(err, files) {
            var urisMap = _.map(files, function(file) {
                    var uri = file.replace('src/translations/', '');
        return uri;
    });

        request(options, function(error, response, body) {
            var accessToken = body.response.data.accessToken;

        // Download files
        var options = {
            url: `https://api.smartling.com/files-api/v2/projects/${projectId}/files/zip`,
            method: 'GET',
            qs: {
                fileUris: urisMap,
                localeIds: locales
            },
            qsStringifyOptions: {
                arrayFormat: 'brackets'
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };

        request(options)
            .on('error', function(err) {
                console.log(err);
            })
            .pipe(fs.createWriteStream('./translations.zip'))
            .on('close', function() {
            var destinationDir = 'src/translated';

        var unzipError = false;

        var child = exec(`unzip -o translations.zip -d ${destinationDir}`, {async: true});

        child.stderr.on('data', function(error) {
            console.log(error);
        unzipError = true;
    });

        child.stdout.on('close', function(data) {
            if (!unzipError) {
            console.log(`Translations successfully downloaded to ${destinationDir}`);
        } else {
            console.log('There was an error unzipping the translations ZIP file');
        }
    });
    });

    });
    });
    });
});
