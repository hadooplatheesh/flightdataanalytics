
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , flights = require('./routes/flights')
  , http = require('http')
  , path = require('path')
  , d3 = require('d3')
  , mustache = require('mustache-express');

var app = express();

app.engine('html', mustache());          // register file extension mustache
app.use(express.static(__dirname + '/public')); // set static folder
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/insertvalues', flights.insert);
app.get('/showvalues', flights.show);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
