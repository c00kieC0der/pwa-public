/**
 * Created by ljeff on 6/28/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http'),
  https = require('https'),
  fs = require('fs');

var DEFAULT_PORT = 8008,
  SECURED_PORT = 8010;

var opts = {
  key: fs.readFileSync('ssl/server/keys/server.key'),

  cert: fs.readFileSync('ssl/server/certificates/server.crt'),

  ca: fs.readFileSync('ssl/ca/ca.crt'),

  requestCert: true,

  // If specified as "true", no unauthenticated traffic
  // will make it to the route specified.
  rejectUnauthorized: false,
  passphrase: "sandbox"
};
var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(opts, app);

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('connect-livereload')());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (request, response) {
  response.sendFile('index.html');
});

httpsServer.listen(SECURED_PORT, function() {
  console.log("https listening on " + SECURED_PORT);
});
httpServer.listen(DEFAULT_PORT, function() {
  console.log("http listening on " + DEFAULT_PORT);
});

